// Teste ponta a ponta do /app contra o motor de HOMOLOGACAO, em navegador real (Playwright). Serve o build local (dist) como https://designoai.com.br
// para exercitar o CORS verdadeiro. Uso: npm run build; E=<email> S=<senha> node e2e/motor-app.cjs  (usuario descartavel, sem e-mail real).
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const fs = require('fs'); const path = require('path');
const DIST = '/tmp/claude-0/rp-designoai-smart-buzz-hub/dist';
const MIME = { '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.json': 'application/json', '.woff2': 'font/woff2', '.mp4': 'video/mp4', '.ico': 'image/x-icon' };
const out = []; const ok = (n, c, d = '') => { out.push(`${c ? 'OK     ' : 'FALHOU '} ${n}${d ? ' (' + d + ')' : ''}`); console.log(out[out.length - 1]); };
(async () => {
  const proxy = process.env.HTTPS_PROXY ? { server: process.env.HTTPS_PROXY } : undefined;
  const b = await chromium.launch({ proxy });
  const ctx = await b.newContext({ ignoreHTTPSErrors: true, viewport: { width: 1280, height: 900 } });
  const p = await ctx.newPage();
  const apiCalls = []; let motorHosts = new Set(); const consoleErr = [];
  p.on('console', m => { if (m.type() === 'error') consoleErr.push(m.text().slice(0, 160)); });
  // Serve o build local como se fosse https://designoai.com.br (a origem real é usada no CORS do motor).
  await ctx.route('https://designoai.com.br/**', async (route) => {
    const u = new URL(route.request().url()); let f = path.join(DIST, decodeURIComponent(u.pathname));
    if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) f = path.join(DIST, 'index.html');
    await route.fulfill({ status: 200, contentType: MIME[path.extname(f)] ?? 'application/octet-stream', body: fs.readFileSync(f) });
  });
  p.on('request', r => { const u = new URL(r.url()); if (u.host.includes('railway.app')) apiCalls.push(r.method() + ' ' + u.pathname); if (u.host.includes('supabase.co')) motorHosts.add(u.host); });
  const txt = async () => (await p.locator('body').innerText()).replace(/\s+/g, ' ');
  const esperar = async (re, t = 15000) => { try { await p.waitForFunction((s) => new RegExp(s, 'i').test(document.body.innerText), re, { timeout: t }); return true; } catch { return false; } };

  await p.goto('https://designoai.com.br/app', { waitUntil: 'networkidle' });
  ok('sem sessão /app vai para o login', /\/auth\/login/.test(p.url()), p.url());
  await p.fill('input[type=email]', process.env.E); await p.fill('input[type=password]', process.env.S);
  await p.click('button[type=submit]');
  ok('login no Supabase do motor', await esperar('Crie a sua organização'), 'tela de criar organização');
  ok('login usa só o projeto do motor', [...motorHosts].every(h => h.startsWith('nmcdubactqflufusvmdu')), [...motorHosts].join(','));

  await p.fill('#org-nome', '[validacao] app cliente'); await p.click('text=Criar organização');
  ok('organização criada pela API', await esperar('Olá, \\[validacao\\] app cliente'));
  ok('painel mostra a chamada para cadastrar empresa', /Cadastre sua empresa/.test(await txt()));
  ok('aviso de agente desligado', /geração automática de textos ainda não está ligada/.test(await txt()));

  await p.goto('https://designoai.com.br/app/empresa', { waitUntil: 'networkidle' });
  await p.fill('#n1', 'Padaria Aurora'); await p.fill('#n2', 'Alimentação'); await p.fill('#n3', 'Padaria artesanal de bairro com pães e café especial.');
  await p.fill('#l-objetivos', 'Vender mais pães\nAumentar pedidos'); await p.check('input[type=checkbox] >> nth=0'); await p.click('text=Salvar empresa');
  ok('empresa salva pela API (PUT /negocio)', await esperar('Empresa salva'));
  await p.reload({ waitUntil: 'networkidle' });
  ok('empresa persistida e relida', (await p.inputValue('#n1')) === 'Padaria Aurora');
  await p.fill('#n3', 'curto'); await p.click('text=Salvar empresa');
  ok('erro de validação do motor aparece', await esperar('20 caracteres|descreva'));

  await p.goto('https://designoai.com.br/app/planejamento', { waitUntil: 'networkidle' });
  ok('planejamento carrega pela API', await esperar('Planejamento') && await esperar('Nenhuma peça neste mês'));
  await p.goto('https://designoai.com.br/app/producao', { waitUntil: 'networkidle' });
  ok('produção carrega vazia', await esperar('Nenhum conteúdo ainda'));
  await p.goto('https://designoai.com.br/app/conexoes', { waitUntil: 'networkidle' });
  const t = await txt(); ok('redes: 4 cards com Conectar', ['Instagram', 'Threads', 'TikTok', 'YouTube'].every(n => t.includes(n)) && (await p.locator('text=Conectar').count()) >= 4);
  // Conectar abre o fluxo OAuth no motor: só confere o redirecionamento, sem concluir.
  const nav = p.waitForRequest(r => /instagram\.com|facebook\.com|oauth/.test(r.url()) && r.isNavigationRequest(), { timeout: 15000 }).catch(() => null);
  await p.locator('button:has-text("Conectar")').first().click(); const rq = await nav;
  ok('Conectar inicia o OAuth da rede (sem concluir)', !!rq, rq ? new URL(rq.url()).host : 'sem navegação');
  await p.goto('https://designoai.com.br/app/assinatura', { waitUntil: 'networkidle' });
  ok('assinatura mostra plano de teste para contratar', await esperar('Teste Sandbox'));
  await p.check('input[name=plano]'); await p.fill('#b1', 'Validacao App'); await p.fill('#b2', '52998224725'); await p.fill('#b3', 'validacao@example.com');
  const pay = p.waitForRequest(r => r.url().includes('sandbox.asaas.com') && r.isNavigationRequest(), { timeout: 40000 }).catch(() => null);
  await p.click('button:has-text("Contratar")'); const pr = await pay;
  ok('contratar leva à página de pagamento do Asaas Sandbox', !!pr, pr ? new URL(pr.url()).host : 'sem redirecionamento');
  await p.goto('https://designoai.com.br/admin', { waitUntil: 'networkidle' });
  ok('não administrador é barrado em /admin', /\/app$/.test(p.url()), p.url());
  ok('chamadas ao motor', apiCalls.length > 5, [...new Set(apiCalls)].join(' | ').slice(0, 300));
  ok('sem erros graves de console', consoleErr.filter(e => !/favicon|Failed to load resource.*(asaas|instagram|facebook)/i.test(e)).length === 0, consoleErr.slice(0, 2).join(' || '));
  await p.screenshot({ path: '/tmp/claude-0/app-painel.png' });
  await b.close();
  console.log(out.filter(l => l.startsWith('FALHOU')).length ? 'COM FALHAS' : 'TUDO OK');
})().catch(e => { console.error('ERRO', e.message); process.exit(1); });
