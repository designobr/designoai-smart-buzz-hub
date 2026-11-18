// Teste ponta a ponta da tela /app/clientes em navegador real (Playwright) com a API v1 SIMULADA (sem rede, sem usuário real).
// Valida o que a tela faz: cadastro, edição, consumo e limites, mover conta, conectar com clienteId e bloqueios por limite.
// Uso: npm run build; node e2e/clientes-mock.cjs
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const fs = require('fs'); const path = require('path');
const DIST = path.resolve(__dirname, '..', 'dist');
const MIME = { '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.json': 'application/json', '.woff2': 'font/woff2', '.png': 'image/png' };
const ORG = '11111111-1111-4111-8111-111111111111';
const out = []; const ok = (n, c, d = '') => { out.push(c); console.log(`${c ? 'OK     ' : 'FALHOU '} ${n}${d ? ' (' + d + ')' : ''}`); };

// Estado simulado do motor: plano DesignoAI com 4 clientes adicionais e +50 publicações (5 clientes, 20 contas, 65 publicações; 4 contas por cliente).
const estado = {
  papel: 'administrador',
  clientes: [{ id: 'c1000000-0000-4000-8000-000000000001', nome: 'Padaria Aurora', criadoEm: '2026-11-01' }, { id: 'c2000000-0000-4000-8000-000000000002', nome: 'Pizzaria Lume', criadoEm: '2026-11-02' }],
  contas: [], pubs: { 'c1000000-0000-4000-8000-000000000001': 40, 'c2000000-0000-4000-8000-000000000002': 12 }, chamadas: [],
};
const C1 = estado.clientes[0].id, C2 = estado.clientes[1].id;
const conta = (i, rede, cli) => ({ id: `a000000${i}-0000-4000-8000-00000000000${i}`, rede, nome: `Conta ${i}`, status: 'conectada', erro: null, tokenExpiraEm: null, clienteId: cli });
estado.contas = [conta(1, 'instagram', C1), conta(2, 'youtube', C1), conta(3, 'tiktok', C1), conta(4, 'threads', C1), conta(5, 'instagram', C2)];
const limites = { clientes: 5, contas: 20, publicacoesMes: 65, contasPorCliente: 4, publicacoesPorClienteMes: null };
const usoLista = () => [...estado.clientes.map((c) => ({ clienteId: c.id, nome: c.nome, contas: estado.contas.filter((a) => a.clienteId === c.id).length, publicacoesMes: estado.pubs[c.id] ?? 0 })),
  { clienteId: null, nome: null, contas: estado.contas.filter((a) => !a.clienteId).length, publicacoesMes: 0 }];

function api(route) {
  const req = route.request(); const u = new URL(req.url()); const p = u.pathname.replace('/api/v1', ''); const m = req.method();
  const corpo = req.postData() ? JSON.parse(req.postData()) : {};
  const json = (status, body) => route.fulfill({ status, contentType: 'application/json', headers: { 'access-control-allow-origin': 'https://designoai.com.br', 'access-control-allow-headers': '*', 'access-control-allow-methods': '*' }, body: JSON.stringify(body) });
  if (m === 'OPTIONS') return json(204, {});
  if (m !== 'GET') estado.chamadas.push(`${m} ${p} ${JSON.stringify(corpo)}`);
  if (p === '/sessao') return json(200, { usuario: { id: 'u1', email: 'teste@example.com' }, organizacoes: [{ organizacao_id: ORG, nome: 'Org Teste', slug: 'org', papel: estado.papel, status: 'ativa' }], admin: false, principal: null });
  if (p === '/clientes' && m === 'GET') return json(200, estado.clientes);
  if (p === '/clientes' && m === 'POST') {
    if (estado.clientes.length >= limites.clientes) return json(409, { erro: 'O limite de clientes do plano foi atingido.' });
    const c = { id: `c${estado.clientes.length + 1}000000-0000-4000-8000-00000000000${estado.clientes.length + 1}`, nome: corpo.nome, criadoEm: '2026-11-18' }; estado.clientes.push(c); return json(201, c);
  }
  if (p === '/clientes/uso') return json(200, { limites, clientes: usoLista() });
  const ren = p.match(/^\/clientes\/([^/]+)$/); if (ren && m === 'PUT') { estado.clientes.find((c) => c.id === ren[1]).nome = corpo.nome; return json(200, { ok: true }); }
  if (p === '/contas' && m === 'GET') return json(200, estado.contas);
  const mv = p.match(/^\/contas\/([^/]+)\/cliente$/);
  if (mv && m === 'PUT') {
    const alvo = corpo.clienteId; if (alvo && estado.contas.filter((a) => a.clienteId === alvo).length >= 4) return json(409, { erro: 'O limite de contas do cliente de destino (ou o total do plano) foi atingido.' });
    estado.contas.find((a) => a.id === mv[1]).clienteId = alvo; return json(200, { ok: true });
  }
  if (p === '/contas/conectar') return json(200, { url: 'https://rede.exemplo/oauth' });
  return json(200, {});
}

(async () => {
  const b = await chromium.launch({ proxy: process.env.HTTPS_PROXY ? { server: process.env.HTTPS_PROXY } : undefined });
  const ctx = await b.newContext({ ignoreHTTPSErrors: true, viewport: { width: 1280, height: 1000 } });
  const sessao = { access_token: 'x.y.z', refresh_token: 'r', token_type: 'bearer', expires_in: 3600, expires_at: Math.floor(Date.now() / 1000) + 3600, user: { id: 'u1', email: 'teste@example.com', aud: 'authenticated', app_metadata: {}, user_metadata: {}, created_at: '2026-01-01' } };
  await ctx.addInitScript((s) => { try { localStorage.setItem('sb-motor-auth', JSON.stringify(s)); localStorage.setItem('motor-org', '11111111-1111-4111-8111-111111111111'); } catch {} }, sessao);
  await ctx.route('https://designoai.com.br/**', async (route) => {
    const u = new URL(route.request().url()); let f = path.join(DIST, decodeURIComponent(u.pathname));
    if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) f = path.join(DIST, 'index.html');
    await route.fulfill({ status: 200, contentType: MIME[path.extname(f)] ?? 'application/octet-stream', body: fs.readFileSync(f) });
  });
  await ctx.route('**/api/v1/**', api);
  await ctx.route('https://rede.exemplo/**', (r) => r.fulfill({ status: 200, contentType: 'text/html', body: 'rede' }));
  const p = await ctx.newPage(); const erros = [];
  p.on('pageerror', (e) => erros.push(e.message.slice(0, 120)));
  const txt = async () => (await p.locator('body').innerText()).replace(/\s+/g, ' ');
  const esperar = async (re, t = 10000) => { try { await p.waitForFunction((s) => new RegExp(s, 'i').test(document.body.innerText), re, { timeout: t }); return true; } catch { return false; } };

  await p.goto('https://designoai.com.br/app/clientes', { waitUntil: 'networkidle' });
  ok('a tela de clientes abre', await esperar('Uso do plano'));
  let t = await txt();
  ok('menu lateral tem Clientes', await p.locator('nav >> text=Clientes').count() > 0);
  ok('uso do plano: clientes 2 de 5, contas 5 de 20, publicações 52 de 65', /Clientes 2 de 5/.test(t) && /Contas de redes \(total\) 5 de 20/.test(t) && /Publicações no mês \(total\) 52 de 65/.test(t), t.slice(t.indexOf('Uso do plano'), t.indexOf('Uso do plano') + 220));
  const cartaoA = p.locator('section:has(h2:text-is("Padaria Aurora"))'); const cartaoB = p.locator('section:has(h2:text-is("Pizzaria Lume"))');
  const ta = (await cartaoA.innerText()).replace(/\s+/g, ' '); const tb = (await cartaoB.innerText()).replace(/\s+/g, ' ');
  ok('cliente cheio: 4 de 4 contas (limite atingido) e 40 publicações no total do plano, sem barra própria', /Contas de redes 4 de 4/.test(ta) && /Publicações no mês 40/.test(ta) && /Contam na franquia total/.test(ta) && (ta.match(/Limite atingido/g) || []).length === 1, ta.slice(0, 160));
  ok('outro cliente: 1 de 4 contas (3 disponíveis) e 12 publicações no total', /Contas de redes 1 de 4/.test(tb) && /3 disponíveis/.test(tb) && /Publicações no mês 12/.test(tb), tb.slice(0, 160));
  ok('conectar conta bloqueado no cliente cheio e liberado no outro', await cartaoA.locator('button:has-text("Conectar conta")').isDisabled() && !(await cartaoB.locator('button:has-text("Conectar conta")').isDisabled()));
  await p.screenshot({ path: '/tmp/claude-0/clientes-desktop.png', fullPage: true });

  // Cadastro
  await p.fill('#cli-nome', 'Barbearia Norte'); await p.click('button:has-text("Cadastrar")');
  ok('cadastro de cliente: aparece o cartão novo', await esperar('Barbearia Norte') && estado.chamadas.some((c) => c.startsWith('POST /clientes {"nome":"Barbearia Norte"}')));
  ok('uso do plano atualiza para 3 clientes', await esperar('Clientes\\s+3 de 5'));

  // Edição de nome
  await p.locator('button[aria-label="Editar Pizzaria Lume"]').click();
  await p.fill('input[aria-label="Nome do cliente"]', 'Pizzaria Lume Centro'); await p.click('button[aria-label="Salvar nome"]');
  ok('renomear cliente', await esperar('Pizzaria Lume Centro') && estado.chamadas.some((c) => c.includes(`PUT /clientes/${C2}`) && c.includes('Pizzaria Lume Centro')));

  // Mover conta: do cliente B para o novo cliente (tem vaga) e para o cliente cheio (opção desabilitada)
  const seletor = p.locator('select[aria-label="Mover Conta 5 para"]');
  const opcoes = await seletor.locator('option').evaluateAll((os) => os.map((o) => ({ v: o.value, d: o.disabled, t: o.textContent })));
  ok('mover: o cliente cheio aparece desabilitado com o motivo', opcoes.some((o) => /Padaria Aurora/.test(o.t) && o.d && /limite de contas/.test(o.t)), JSON.stringify(opcoes.map((o) => o.t)));
  const novo = estado.clientes.find((c) => c.nome === 'Barbearia Norte').id;
  await seletor.selectOption(novo);
  ok('mover conta para outro cliente', await esperar('Conta movida') && estado.contas.find((a) => a.nome === 'Conta 5').clienteId === novo && estado.chamadas.some((c) => c.includes('/cliente') && c.includes(novo)));
  await p.locator('select[aria-label="Mover Conta 5 para"]').selectOption('__sem_cliente__');
  ok('mover conta para "sem cliente" envia clienteId nulo', await esperar('Sem cliente \\(a própria organização\\)') && estado.contas.find((a) => a.nome === 'Conta 5').clienteId === null);

  // Conectar com clienteId
  await p.locator('section:has(h2:text-is("Pizzaria Lume Centro")) select[aria-label="Rede a conectar"]').selectOption('youtube');
  const nav = p.waitForRequest((r) => r.url().startsWith('https://rede.exemplo/'), { timeout: 8000 }).catch(() => null);
  await p.locator('section:has(h2:text-is("Pizzaria Lume Centro")) button:has-text("Conectar conta")').click(); await nav;
  ok('conectar envia rede, retorno ao app e clienteId', estado.chamadas.some((c) => c.startsWith('POST /contas/conectar') && c.includes('"rede":"youtube"') && c.includes('"retorno":"/app/conexoes"') && c.includes(`"clienteId":"${C2}"`)), estado.chamadas.at(-1));

  // Redes sociais mostra o cliente da conta
  await p.goto('https://designoai.com.br/app/conexoes', { waitUntil: 'networkidle' });
  ok('tela de redes sociais mostra o cliente de cada conta', await esperar('Cliente: Padaria Aurora'));

  // Papéis: editor não cadastra nem renomeia, mas move e conecta; visualizador só vê
  estado.papel = 'editor'; await p.goto('https://designoai.com.br/app/clientes', { waitUntil: 'networkidle' }); await esperar('Uso do plano');
  ok('editor: sem formulário de novo cliente nem edição de nome, com mover e conectar', await p.locator('#cli-nome').count() === 0 && await p.locator('button[aria-label^="Editar"]').count() === 0 && await p.locator('select[aria-label^="Mover"]').count() > 0);
  estado.papel = 'visualizador'; await p.goto('https://designoai.com.br/app/clientes', { waitUntil: 'networkidle' }); await esperar('Uso do plano');
  ok('visualizador: só leitura', await p.locator('#cli-nome').count() === 0 && await p.locator('section select').count() === 0 && await p.locator('button:has-text("Conectar conta")').count() === 0);

  // Limite de clientes: 5 de 5 bloqueia o cadastro
  estado.papel = 'administrador'; estado.clientes.push({ id: 'c8000000-0000-4000-8000-000000000008', nome: 'Extra 1', criadoEm: '2026-11-18' }, { id: 'c9000000-0000-4000-8000-000000000009', nome: 'Extra 2', criadoEm: '2026-11-18' });
  await p.goto('https://designoai.com.br/app/clientes', { waitUntil: 'networkidle' }); await esperar('Uso do plano');
  ok('limite de clientes atingido: cadastro desabilitado com explicação', await p.locator('#cli-nome').isDisabled() && /limite de clientes/.test(await txt()));

  // Celular: sem rolagem horizontal
  await p.setViewportSize({ width: 390, height: 844 }); await p.goto('https://designoai.com.br/app/clientes', { waitUntil: 'networkidle' }); await esperar('Uso do plano');
  ok('celular: sem rolagem horizontal', await p.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1));
  await p.screenshot({ path: '/tmp/claude-0/clientes-celular.png', fullPage: true });
  ok('sem erros de JavaScript na página', erros.length === 0, erros.join(' | '));
  await b.close();
  const falhas = out.filter((x) => !x).length; console.log(falhas ? `${falhas} falha(s)` : 'TUDO OK'); process.exit(falhas ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(2); });
