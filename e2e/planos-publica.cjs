// Teste da página pública de valores (modelo modular) em navegador real: 4 idiomas, cálculos, configurador, exemplos, regra de contagem, WhatsApp e celular.
// Uso: npm run build; node e2e/planos-publica.cjs
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const fs = require('fs'), path = require('path'); const DIST = path.resolve(__dirname, '..', 'dist');
const MIME = { '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.json': 'application/json', '.woff2': 'font/woff2', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.mp4': 'video/mp4' };
const out = []; const ok = (n, c, d = '') => { out.push(c); console.log(`${c ? 'OK     ' : 'FALHOU '} ${n}${d ? ' (' + d + ')' : ''}`); };
const norm = (s) => s.replace(/[\s ]+/g, ' ');
// Cálculo independente do código da página (em centavos), só com os valores do enunciado.
const calc = (cli, p10 = 0, p20 = 0, p50 = 0) => ({ clientes: 1 + cli, pubs: 15 + 10 * p10 + 20 * p20 + 50 * p50, total: 14990 + 3990 * cli + 2990 * p10 + 4990 * p20 + 9990 * p50 });
const fmt = (c) => 'R$ ' + (c / 100).toFixed(2).replace('.', ',');
(async () => {
  const b = await chromium.launch({ proxy: process.env.HTTPS_PROXY ? { server: process.env.HTTPS_PROXY } : undefined });
  const ctx = await b.newContext({ ignoreHTTPSErrors: true, locale: 'pt-BR', viewport: { width: 1280, height: 900 } });
  await ctx.route('https://designoai.com.br/**', async (r) => { const u = new URL(r.request().url()); let f = path.join(DIST, decodeURIComponent(u.pathname)); if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) f = path.join(DIST, 'index.html'); await r.fulfill({ status: 200, contentType: MIME[path.extname(f)] ?? 'application/octet-stream', body: fs.readFileSync(f) }); });
  let wa = null; await ctx.route('https://wa.me/**', (r) => { wa = decodeURIComponent(r.request().url()); r.fulfill({ status: 200, body: 'ok' }); });
  const p = await ctx.newPage(); const errs = []; p.on('pageerror', (e) => errs.push(e.message));
  const txt = async () => norm(await p.locator('body').innerText());
  const ir = async (u) => { await p.goto('https://designoai.com.br' + u, { waitUntil: 'networkidle' }); await p.waitForTimeout(900); };

  // --- Português: conteúdo do plano base e adicionais
  await ir('/planos-social-automation'); let t = await txt();
  ok('plano base R$ 149,90/mês, DesignoAI', norm(await p.getByTestId('preco-base').innerText()).includes('R$ 149,90') && t.includes('DesignoAI'));
  ok('base: 1 cliente, 4 contas, 15 publicações', /1 cliente/.test(t) && /4 contas de redes sociais/.test(t) && /15 publicações por mês/.test(t));
  const itens = ['Planejamento de conteúdo', 'Criação de posts e roteiros', 'Textos e legendas', 'Hashtags estratégicas', 'Calendário de conteúdo', 'Agendamento automático das publicações', 'Instagram', 'Threads', 'YouTube Shorts', 'Até 2 solicitações de alteração por conteúdo'];
  ok('todas as funcionalidades do plano base listadas', itens.every((x) => t.includes(x)), itens.filter((x) => !t.includes(x)).join(','));
  ok('adicionais: cliente R$ 39,90 e pacotes R$ 29,90 / 49,90 / 99,90', ['R$ 39,90', 'R$ 29,90', 'R$ 49,90', 'R$ 99,90'].every((x) => t.includes(x)) && /\+10 publicações/.test(t) && /\+20 publicações/.test(t) && /\+50 publicações/.test(t));
  ok('regra: um conteúdo em várias redes consome 1 publicação (com exemplo de 3 redes)', /consome apenas 1 publicação da franquia/.test(t) && /Instagram, no Threads e no YouTube Shorts conta como 1 publicação, e não como 3/.test(t));
  // Só o conteúdo da página (menu e rodapé do site têm itens próprios, como Sites IA e AI SDR, que não fazem parte desta página).
  const conteudo = norm(await p.locator('section').allInnerTexts().then((a) => a.join(' ')));
  ok('sem menção a inteligência artificial / IA no conteúdo da página', !/inteligência artificial|\bIA\b|\bI\.A\b|\bAI\b/i.test(conteudo.replace(/DesignoAI/g, '')), (conteudo.match(/.{20}(\bIA\b|\bAI\b).{20}/i) || [''])[0]);
  ok('sem planos antigos (Start, Professional, Premium)', !/Start|Professional|Premium/.test(t));

  // --- Exemplos (tabela no desktop): valores independentes; o último segue a fórmula do enunciado
  const ex = [calc(0), calc(1), calc(0, 1), calc(1, 1), calc(2, 0, 1), calc(4, 0, 0, 1)];
  const linhas = await p.locator('table tbody tr').evaluateAll((trs) => trs.map((tr) => [...tr.children].map((c) => c.textContent.replace(/[\s ]+/g, ' ').trim())));
  ex.forEach((e, i) => ok(`exemplo ${i + 1}: ${e.clientes} cliente(s), ${e.pubs} publicações, ${fmt(e.total)}`, linhas[i] && linhas[i][1] === String(e.clientes) && linhas[i][2] === String(e.pubs) && linhas[i][3] === fmt(e.total), JSON.stringify(linhas[i])));

  // --- Configurador
  const lerR = async () => ({ c: +(await p.getByTestId('r-clientes').innerText()), p: +(await p.getByTestId('r-publicacoes').innerText()), t: norm(await p.getByTestId('r-total').innerText()) });
  const clicar = async (label, n = 1) => { for (let i = 0; i < n; i++) await p.getByRole('button', { name: label, exact: true }).click(); };
  let r = await lerR(); ok('configurador inicial: 1 cliente, 15 publicações, R$ 149,90', r.c === 1 && r.p === 15 && r.t === 'R$ 149,90', JSON.stringify(r));
  await clicar('Aumentar: Clientes adicionais'); r = await lerR(); ok('+1 cliente: 2, 15, R$ 189,80', r.c === 2 && r.p === 15 && r.t === 'R$ 189,80', JSON.stringify(r));
  await clicar('Aumentar: +10'); r = await lerR(); ok('+1 cliente e +10: 2, 25, R$ 219,70', r.c === 2 && r.p === 25 && r.t === 'R$ 219,70', JSON.stringify(r));
  await clicar('Diminuir: Clientes adicionais'); await clicar('Diminuir: +10'); r = await lerR(); ok('voltar ao base: 1, 15, R$ 149,90', r.t === 'R$ 149,90' && r.c === 1 && r.p === 15);
  await clicar('Aumentar: +10', 2); r = await lerR(); ok('dois pacotes de 10 acumulam: 35 publicações, R$ 209,70', r.p === 35 && r.t === 'R$ 209,70', JSON.stringify(r));
  await clicar('Diminuir: +10', 2);
  await clicar('Aumentar: Clientes adicionais', 2); await clicar('Aumentar: +20'); r = await lerR(); ok('2 clientes + 20: 3, 35, R$ 279,60', r.c === 3 && r.p === 35 && r.t === 'R$ 279,60', JSON.stringify(r));
  await clicar('Diminuir: +20'); await clicar('Aumentar: Clientes adicionais', 2); await clicar('Aumentar: +50'); r = await lerR(); ok('4 clientes + 50: 5, 65, R$ 409,40 (fórmula)', r.c === 5 && r.p === 65 && r.t === 'R$ 409,40', JSON.stringify(r));
  await clicar('Aumentar: +10'); await clicar('Aumentar: +20'); await clicar('Aumentar: Clientes adicionais'); r = await lerR();
  const e2 = calc(5, 1, 1, 1); ok('combinação mista (+10, +20, +50, 5 clientes): confere com o cálculo independente', r.c === e2.clientes && r.p === e2.pubs && r.t === fmt(e2.total), JSON.stringify(r) + ' esperado ' + fmt(e2.total));
  const pop = ctx.waitForEvent('page', { timeout: 6000 }).catch(() => null);
  await p.getByRole('button', { name: /Falar sobre esta configuração/ }).click(); await pop; await p.waitForTimeout(500);
  ok('WhatsApp do site leva a configuração escolhida', !!wa && wa.startsWith('https://wa.me/5511947968158') && wa.includes(`${e2.clientes} cliente(s)`) && wa.includes(`${e2.pubs} publicações`) && wa.includes(fmt(e2.total).replace('R$ ', 'R$')) || (!!wa && wa.includes(fmt(e2.total).replace(' ', ' '))), wa);
  await p.screenshot({ path: '/tmp/planos-desktop.png', fullPage: true });

  // --- Outros idiomas
  for (const [loc, url, base] of [['en', '/en/social-automation-plans', 'Base plan'], ['es', '/es/planes-social-automation', 'Plan base'], ['fr', '/fr/offres-social-automation', 'Offre de base']]) {
    await ir(url); const tl = await txt(); const linhasL = await p.locator('table tbody tr').count();
    ok(`${loc}: preços, 6 exemplos, regra e sem chaves soltas`, ['R$ 149,90', 'R$ 39,90', 'R$ 29,90', 'R$ 49,90', 'R$ 99,90'].every((x) => tl.includes(x)) && tl.includes(base) && linhasL === 6 && !/planosSocial\./.test(tl) && /YouTube Shorts/.test(tl));
  }

  // --- Celular
  await ctx.close(); const ctx2 = await b.newContext({ ignoreHTTPSErrors: true, locale: 'pt-BR', viewport: { width: 390, height: 844 } });
  await ctx2.route('https://designoai.com.br/**', async (r) => { const u = new URL(r.request().url()); let f = path.join(DIST, decodeURIComponent(u.pathname)); if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) f = path.join(DIST, 'index.html'); await r.fulfill({ status: 200, contentType: MIME[path.extname(f)] ?? 'application/octet-stream', body: fs.readFileSync(f) }); });
  const m = await ctx2.newPage(); await m.goto('https://designoai.com.br/planos-social-automation', { waitUntil: 'networkidle' }); await m.waitForTimeout(900);
  ok('celular: sem rolagem horizontal', await m.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1));
  ok('celular: exemplos em cartões (tabela oculta)', await m.locator('table').isHidden() && (await m.locator('div[data-exemplo]:visible').count()) === 6);
  await m.getByRole('button', { name: 'Aumentar: Clientes adicionais' }).click();
  ok('celular: configurador funciona', norm(await m.getByTestId('r-total').innerText()) === 'R$ 189,80');
  await m.screenshot({ path: '/tmp/planos-celular.png', fullPage: true });
  const tab = await b.newContext({ ignoreHTTPSErrors: true, locale: 'pt-BR', viewport: { width: 820, height: 1100 } });
  await tab.route('https://designoai.com.br/**', async (r) => { const u = new URL(r.request().url()); let f = path.join(DIST, decodeURIComponent(u.pathname)); if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) f = path.join(DIST, 'index.html'); await r.fulfill({ status: 200, contentType: MIME[path.extname(f)] ?? 'application/octet-stream', body: fs.readFileSync(f) }); });
  const tp = await tab.newPage(); await tp.goto('https://designoai.com.br/planos-social-automation', { waitUntil: 'networkidle' }); await tp.waitForTimeout(900);
  ok('tablet: sem rolagem horizontal', await tp.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1));
  ok('sem erros de JavaScript', errs.length === 0, errs.join(' | '));
  await b.close(); const f = out.filter((x) => !x).length; console.log(f ? `${f} falha(s)` : 'TUDO OK'); process.exit(f ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(2); });
