// Teste em navegador real da tela de Assinatura com a API v1 SIMULADA: adicionais (clientes e pacotes), prévia de valor, salvar, contratar e papéis.
// Uso: npm run build; node e2e/assinatura-mock.cjs
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const fs = require('fs'); const path = require('path');
const DIST = path.resolve(__dirname, '..', 'dist');
const MIME = { '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.json': 'application/json', '.woff2': 'font/woff2', '.png': 'image/png' };
const ORG = '11111111-1111-4111-8111-111111111111';
const out = []; const ok = (n, c, d = '') => { out.push(c); console.log(`${c ? 'OK     ' : 'FALHOU '} ${n}${d ? ' (' + d + ')' : ''}`); };
const norm = (s) => s.replace(/[\s ]+/g, ' ');
const CATALOGO = [
  { codigo: 'cliente_1', tipo: 'cliente', quantidade: 1, precoCentavos: 3990, maximo: 99, nome: 'Cliente adicional' },
  { codigo: 'pub_10', tipo: 'publicacoes', quantidade: 10, precoCentavos: 2990, maximo: 20, nome: '+10 publicações por mês' },
  { codigo: 'pub_20', tipo: 'publicacoes', quantidade: 20, precoCentavos: 4990, maximo: 20, nome: '+20 publicações por mês' },
  { codigo: 'pub_50', tipo: 'publicacoes', quantidade: 50, precoCentavos: 9990, maximo: 20, nome: '+50 publicações por mês' },
];
const estado = { papel: 'administrador', assinatura: null, plano: null, planos: [], chamadas: [] };
const ativa = (ad, valor, cli, pubs) => { estado.assinatura = { planoNome: 'DesignoAI', status: 'ativa', valorCentavos: valor, ciclo: 'MONTHLY', proximoVencimento: '2026-12-10', acessoAte: null, inadimplenteDesde: null, adicionais: ad }; estado.plano = { ativo: true, limiteClientes: cli, limiteContas: cli * 4, limitePublicacoesMes: pubs, limiteContasPorCliente: 4, limitePublicacoesPorClienteMes: null }; estado.planos = []; };

function api(route) {
  const req = route.request(); const p = new URL(req.url()).pathname.replace('/api/v1', ''); const m = req.method();
  const corpo = req.postData() ? JSON.parse(req.postData()) : {};
  const json = (status, body) => route.fulfill({ status, contentType: 'application/json', headers: { 'access-control-allow-origin': 'https://designoai.com.br', 'access-control-allow-headers': '*', 'access-control-allow-methods': '*' }, body: JSON.stringify(body) });
  if (m === 'OPTIONS') return json(204, {});
  if (m !== 'GET') estado.chamadas.push(`${m} ${p} ${JSON.stringify(corpo)}`);
  if (p === '/sessao') return json(200, { usuario: { id: 'u1', email: 't@example.com' }, organizacoes: [{ organizacao_id: ORG, nome: 'Org Teste', slug: 'org', papel: estado.papel, status: 'ativa' }], admin: false, principal: null });
  if (p === '/assinatura' && m === 'GET') return json(200, { plano: estado.plano, uso: { usado: 3, reservado: 3 }, cobrancaDisponivel: true, assinatura: estado.assinatura, planosParaContratar: estado.planos, adicionaisDisponiveis: CATALOGO });
  if (p === '/assinatura/adicionais') return json(200, { valorCentavos: 21970, clientes: 2, publicacoes: 25 });
  if (p === '/assinatura/contratar') return json(200, { urlPagamento: 'https://sandbox.asaas.com/i/abc' });
  if (p === '/consumo') return json(200, { creditos: { periodo: '2026-11', incluido: 0, avulso: 0, reservado: 0, consumido: 0, disponivel: 0 }, lancamentos: [], revisoesPorConteudo: 2, estado: { agenteAtivo: false, provedor: 'x' } });
  return json(200, {});
}

(async () => {
  const b = await chromium.launch({ proxy: process.env.HTTPS_PROXY ? { server: process.env.HTTPS_PROXY } : undefined });
  const ctx = await b.newContext({ ignoreHTTPSErrors: true, viewport: { width: 1280, height: 1000 } });
  const sessao = { access_token: 'x.y.z', refresh_token: 'r', token_type: 'bearer', expires_in: 3600, expires_at: Math.floor(Date.now() / 1000) + 3600, user: { id: 'u1', email: 't@example.com', aud: 'authenticated', app_metadata: {}, user_metadata: {}, created_at: '2026-01-01' } };
  await ctx.addInitScript((s) => { try { localStorage.setItem('sb-motor-auth', JSON.stringify(s)); localStorage.setItem('motor-org', '11111111-1111-4111-8111-111111111111'); } catch {} }, sessao);
  await ctx.route('https://designoai.com.br/**', async (route) => { const u = new URL(route.request().url()); let f = path.join(DIST, decodeURIComponent(u.pathname)); if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) f = path.join(DIST, 'index.html'); await route.fulfill({ status: 200, contentType: MIME[path.extname(f)] ?? 'application/octet-stream', body: fs.readFileSync(f) }); });
  await ctx.route('**/api/v1/**', api);
  await ctx.route('https://sandbox.asaas.com/**', (r) => r.fulfill({ status: 200, contentType: 'text/html', body: 'pagamento' }));
  const p = await ctx.newPage(); const erros = []; p.on('pageerror', (e) => erros.push(e.message.slice(0, 120))); p.on('dialog', (d) => d.accept());
  const txt = async () => norm(await p.locator('body').innerText());
  const esperar = async (re, t = 10000) => { try { await p.waitForFunction((s) => new RegExp(s, 'i').test(document.body.innerText), re, { timeout: t }); return true; } catch { return false; } };
  const ver = async () => ({ c: +(await p.getByTestId('prev-clientes').first().innerText()), p: +(await p.getByTestId('prev-publicacoes').first().innerText()), t: norm(await p.getByTestId('prev-total').first().innerText()) });
  const clicar = async (nome, n = 1) => { for (let i = 0; i < n; i++) await p.getByRole('button', { name: nome, exact: true }).click(); };
  const ir = async () => { await p.goto('https://designoai.com.br/app/assinatura', { waitUntil: 'networkidle' }); await esperar('Assinatura'); };

  // 1) Assinatura ativa só com o plano base
  ativa({}, 14990, 1, 15); await ir(); await esperar('Adicionais');
  let t = await txt();
  ok('plano ativo mostra DesignoAI R$ 149,90/mês e o editor de adicionais', /DesignoAI · R\$ 149,90\/mês/.test(t) && /Adicionais/.test(t));
  ok('uso do mês: 3 de 15, 1 cliente, 4 contas (4 por cliente) e a regra de contagem', /Publicações: 3 de 15/.test(t) && /Clientes gerenciados: até 1/.test(t) && /Contas de redes: até 4 \(4 por cliente\)/.test(t) && /conta como 1 publicação/.test(t));
  let v = await ver(); ok('prévia inicial: 1 cliente, 15 publicações, R$ 149,90', v.c === 1 && v.p === 15 && v.t === 'R$ 149,90', JSON.stringify(v));
  ok('botão de salvar desabilitado sem mudança', await p.getByRole('button', { name: 'Salvar alterações' }).isDisabled());
  await clicar('Aumentar: Cliente adicional'); v = await ver(); ok('+1 cliente: 2, 15, R$ 189,80', v.c === 2 && v.p === 15 && v.t === 'R$ 189,80', JSON.stringify(v));
  await clicar('Aumentar: +10 publicações por mês'); v = await ver(); ok('+1 cliente +10: 2, 25, R$ 219,70', v.c === 2 && v.p === 25 && v.t === 'R$ 219,70', JSON.stringify(v));
  await clicar('Aumentar: +10 publicações por mês'); v = await ver(); ok('pacotes iguais acumulam: 2, 35, R$ 249,60', v.p === 35 && v.t === 'R$ 249,60', JSON.stringify(v));
  await clicar('Diminuir: +10 publicações por mês');
  await p.getByRole('button', { name: 'Salvar alterações' }).click();
  ok('salvar envia só os adicionais escolhidos', await esperar('Adicionais atualizados') && estado.chamadas.some((c) => c === 'POST /assinatura/adicionais {"adicionais":{"cliente_1":1,"pub_10":1}}'), estado.chamadas.at(-1));
  await p.screenshot({ path: '/tmp/assinatura-ativa.png', fullPage: true });

  // 2) Assinatura com adicionais já contratados: a prévia parte do que existe
  ativa({ cliente_1: 4, pub_50: 1 }, 40940, 5, 65); await ir(); await esperar('Adicionais');
  v = await ver(); ok('assinatura com +4 clientes e +50: prévia 5, 65, R$ 409,40 e base recalculada', v.c === 5 && v.p === 65 && v.t === 'R$ 409,40', JSON.stringify(v));
  await clicar('Diminuir: Cliente adicional', 4); await clicar('Diminuir: +50 publicações por mês'); v = await ver();
  ok('remover os adicionais volta ao plano base: 1, 15, R$ 149,90', v.c === 1 && v.p === 15 && v.t === 'R$ 149,90', JSON.stringify(v));

  // 3) Papéis
  estado.papel = 'editor'; await ir();
  ok('editor não vê editor de adicionais nem cancelar', (await p.getByTestId('prev-total').count()) === 0 && (await p.getByRole('button', { name: 'Cancelar assinatura' }).count()) === 0);

  // 4) Sem assinatura, plano modular público: contratar com adicionais
  estado.papel = 'administrador'; estado.assinatura = null; estado.plano = null;
  estado.planos = [{ codigo: 'designoai', nome: 'DesignoAI', precoCentavos: 14990, ciclo: 'MONTHLY', limiteClientes: 1, limiteContas: 4, limitePublicacoesMes: 15, modular: true }];
  await ir(); await esperar('Contratar');
  await p.locator('input[name=plano]').check();
  v = await ver(); ok('contratar: prévia do plano base R$ 149,90, 1 cliente, 15 publicações', v.c === 1 && v.p === 15 && v.t === 'R$ 149,90', JSON.stringify(v));
  await clicar('Aumentar: +20 publicações por mês'); await clicar('Aumentar: Cliente adicional', 2); v = await ver();
  ok('contratar +2 clientes +20: 3, 35, R$ 279,60', v.c === 3 && v.p === 35 && v.t === 'R$ 279,60', JSON.stringify(v));
  await p.fill('#b1', 'Empresa Teste'); await p.fill('#b2', '52998224725'); await p.fill('#b3', 'financeiro@example.com');
  const nav = p.waitForRequest((r) => r.url().startsWith('https://sandbox.asaas.com/'), { timeout: 8000 }).catch(() => null);
  await p.getByRole('button', { name: 'Contratar', exact: true }).click(); await nav;
  ok('contratar envia o plano e os adicionais, e vai à página do Asaas', estado.chamadas.some((c) => c.startsWith('POST /assinatura/contratar') && c.includes('"plano":"designoai"') && c.includes('"cliente_1":2') && c.includes('"pub_20":1')), estado.chamadas.at(-1));
  await p.setViewportSize({ width: 390, height: 844 }); await ir(); await esperar('Contratar');
  ok('celular: sem rolagem horizontal', await p.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1));
  await p.screenshot({ path: '/tmp/assinatura-celular.png', fullPage: true });
  ok('sem erros de JavaScript', erros.length === 0, erros.join(' | '));
  await b.close(); const f = out.filter((x) => !x).length; console.log(f ? `${f} falha(s)` : 'TUDO OK'); process.exit(f ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(2); });
