// Teste em navegador real da aprovação no app com a API v1 SIMULADA: lista, revisão do vídeo, legendas, aprovar, rejeitar com motivo e papéis.
// Uso: npm run build; node e2e/aprovacoes-mock.cjs
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const fs = require('fs'); const path = require('path');
const DIST = path.resolve(__dirname, '..', 'dist');
const MIME = { '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.json': 'application/json', '.woff2': 'font/woff2', '.png': 'image/png' };
const ORG = '11111111-1111-4111-8111-111111111111';
const RASC = '44444444-4444-4444-8444-444444444444';
const out = []; const ok = (n, c, d = '') => { out.push(c); console.log(`${c ? 'OK     ' : 'FALHOU '} ${n}${d ? ' (' + d + ')' : ''}`); };
const estado = { papel: 'administrador', pendentes: [{ id: RASC, tipo: 'midia', redes: ['instagram', 'youtube', 'threads'], legendas: { instagram: 'Legenda IG', youtube: 'Legenda YT', threads: 'Legenda Threads' }, hash: 'h-1', criadoEm: '2026-11-19T10:00:00Z', clienteId: null }], chamadas: [] };

function api(route) {
  const req = route.request(); const p = new URL(req.url()).pathname.replace('/api/v1', ''); const m = req.method();
  const corpo = req.postData() ? JSON.parse(req.postData()) : {};
  const json = (status, body) => route.fulfill({ status, contentType: 'application/json', headers: { 'access-control-allow-origin': 'https://designoai.com.br', 'access-control-allow-headers': '*', 'access-control-allow-methods': '*' }, body: JSON.stringify(body) });
  if (m === 'OPTIONS') return json(204, {});
  if (m !== 'GET') estado.chamadas.push(`${m} ${p} ${JSON.stringify(corpo)}`);
  if (p === '/sessao') return json(200, { usuario: { id: 'u1', email: 't@example.com' }, organizacoes: [{ organizacao_id: ORG, nome: 'Org Teste', slug: 'org', papel: estado.papel, status: 'ativa' }], admin: false, principal: null });
  if (p === '/aprovacoes' && m === 'GET') return json(200, estado.pendentes);
  if (p === `/aprovacoes/${RASC}` && m === 'GET') return json(200, { id: RASC, status: 'aguardando_aprovacao', hash: 'h-1', criadoEm: '2026-11-19T10:00:00Z', legendas: { instagram: 'Legenda IG', youtube: 'Legenda YT', threads: 'Legenda Threads' }, redes: ['instagram', 'youtube', 'threads'], midia: { tipo: 'video', duracaoS: 18.8, largura: 1080, altura: 1920, codecVideo: 'h264', codecAudio: 'aac', validacao: 'aprovada_tecnicamente' }, urlMidia: 'https://exemplo.test/video.mp4' });
  if (p === `/aprovacoes/${RASC}/decisao`) { estado.pendentes = []; return json(200, { ok: true, decisao: corpo.decisao }); }
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
  await ctx.route('https://exemplo.test/**', (r) => r.fulfill({ status: 200, contentType: 'video/mp4', body: '' }));
  const p = await ctx.newPage(); const erros = []; p.on('pageerror', (e) => erros.push(e.message.slice(0, 120))); p.on('dialog', (d) => d.accept());
  const txt = async () => (await p.locator('body').innerText()).replace(/[\s ]+/g, ' ');
  const esperar = async (re, t = 10000) => { try { await p.waitForFunction((s) => new RegExp(s, 'i').test(document.body.innerText), re, { timeout: t }); return true; } catch { return false; } };

  await p.goto('https://designoai.com.br/app/aprovacoes', { waitUntil: 'networkidle' });
  ok('menu tem Aprovações e a lista mostra o conteúdo pendente', await esperar('Conteúdo com mídia') && (await p.locator('nav >> text=Aprovações').count()) > 0);
  await p.locator('button:has-text("Conteúdo com mídia")').click();
  ok('abre a revisão com o vídeo, as dimensões e a validação técnica', await esperar('Legendas por rede') && (await p.locator('video').count()) === 1 && /1080×1920/.test(await txt()) && /18\.8 s/.test(await txt()) && /validação técnica aprovada/.test(await txt()));
  let t = await txt();
  ok('mostra a legenda de cada rede', /instagram legenda ig/i.test(t) && /youtube legenda yt/i.test(t) && /threads legenda threads/i.test(t));
  ok('aviso de que a publicação segue o perfil da organização', /segue o perfil de publicação/.test(t));
  await p.getByRole('button', { name: 'Aprovar', exact: true }).click();
  ok('aprovar envia a decisão com o hash revisado', await esperar('Conteúdo aprovado') && estado.chamadas.some((c) => c === `POST /aprovacoes/${RASC}/decisao {"decisao":"aprovado","hash":"h-1"}`), estado.chamadas.at(-1));
  ok('depois de aprovado, a lista fica vazia', await esperar('Nada aguardando aprovação'));

  // Rejeição com motivo, em outro conteúdo
  estado.pendentes = [{ id: RASC, tipo: 'midia', redes: ['instagram'], legendas: { instagram: 'Outra' }, hash: 'h-1', criadoEm: '2026-11-19T10:00:00Z', clienteId: null }];
  await p.goto('https://designoai.com.br/app/aprovacoes', { waitUntil: 'networkidle' }); await esperar('Conteúdo com mídia');
  await p.locator('button:has-text("Conteúdo com mídia")').click(); await esperar('Legendas por rede');
  await p.fill('#motivo-rejeicao', 'Trocar a legenda do Threads');
  await p.getByRole('button', { name: 'Rejeitar', exact: true }).click();
  ok('rejeitar envia o motivo junto com o hash', await esperar('Conteúdo rejeitado') && estado.chamadas.some((c) => c.includes('"decisao":"rejeitado"') && c.includes('"motivo":"Trocar a legenda do Threads"')), estado.chamadas.at(-1));

  // Papel editor: vê, mas não decide
  estado.papel = 'editor'; estado.pendentes = [{ id: RASC, tipo: 'midia', redes: ['instagram'], legendas: { instagram: 'x' }, hash: 'h-1', criadoEm: '2026-11-19T10:00:00Z', clienteId: null }];
  await p.goto('https://designoai.com.br/app/aprovacoes', { waitUntil: 'networkidle' }); await esperar('Conteúdo com mídia');
  await p.locator('button:has-text("Conteúdo com mídia")').click(); await esperar('Legendas por rede');
  ok('editor vê o conteúdo mas não tem botões de decisão', (await p.getByRole('button', { name: 'Aprovar', exact: true }).count()) === 0 && /Só administradores e aprovadores/.test(await txt()));

  // Papel aprovador decide
  estado.papel = 'aprovador'; await p.goto('https://designoai.com.br/app/aprovacoes', { waitUntil: 'networkidle' }); await esperar('Conteúdo com mídia');
  await p.locator('button:has-text("Conteúdo com mídia")').click(); await esperar('Legendas por rede');
  ok('aprovador tem os botões de decisão', (await p.getByRole('button', { name: 'Aprovar', exact: true }).count()) === 1);

  await p.setViewportSize({ width: 390, height: 844 }); await p.goto('https://designoai.com.br/app/aprovacoes', { waitUntil: 'networkidle' });
  ok('celular: sem rolagem horizontal', await p.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1));
  ok('sem erros de JavaScript', erros.length === 0, erros.join(' | '));
  await b.close(); const f = out.filter((x) => !x).length; console.log(f ? `${f} falha(s)` : 'TUDO OK'); process.exit(f ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(2); });
