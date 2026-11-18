// Teste da pagina publica de planos (4 idiomas, WhatsApp, celular). Uso: npm run build; node e2e/planos-publica.cjs
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const fs = require('fs'), path = require('path'); const DIST = require('path').resolve(__dirname, '..', 'dist');
const MIME = { '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.json': 'application/json', '.woff2': 'font/woff2', '.png': 'image/png', '.jpg':'image/jpeg','.webp':'image/webp','.mp4':'video/mp4' };
(async () => {
  const b = await chromium.launch({ proxy: process.env.HTTPS_PROXY ? { server: process.env.HTTPS_PROXY } : undefined });
  const ctx = await b.newContext({ ignoreHTTPSErrors: true, viewport: { width: 1280, height: 900 } });
  await ctx.route('https://designoai.com.br/**', async (r) => { const u = new URL(r.request().url()); let f = path.join(DIST, decodeURIComponent(u.pathname)); if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) f = path.join(DIST, 'index.html'); await r.fulfill({ status: 200, contentType: MIME[path.extname(f)] ?? 'application/octet-stream', body: fs.readFileSync(f) }); });
  const p = await ctx.newPage(); const errs = []; p.on('pageerror', e => errs.push(e.message));
  let wa = null; await ctx.route('https://wa.me/**', r => { wa = r.request().url(); r.fulfill({ status: 200, body: 'ok' }); });
  for (const [loc, url] of [['pt', '/planos-social-automation'], ['en', '/en/social-automation-plans'], ['es', '/es/planes-social-automation'], ['fr', '/fr/offres-social-automation']]) {
    await p.goto('https://designoai.com.br' + url, { waitUntil: 'networkidle' }); await p.waitForTimeout(1200);
    const t = (await p.locator('body').innerText()).replace(/\s+/g, ' ');
    console.log(loc, /149,90/.test(t) && /299,90/.test(t) && /599,90/.test(t) ? 'OK precos' : 'FALHOU precos', /Professional/.test(t) ? 'OK' : 'FALHOU', t.includes('missing') || /planosSocial\./.test(t) ? 'CHAVE FALTANDO' : 'sem chaves soltas');
    if (loc === 'pt') await p.screenshot({ path: '/tmp/planos-pt.png', fullPage: true });
  }
  await p.goto('https://designoai.com.br/planos-social-automation', { waitUntil: 'networkidle' }); await p.waitForTimeout(1000);
  const pop = ctx.waitForEvent('page', { timeout: 6000 }).catch(() => null);
  console.log('botoes:', await p.locator('button:has-text("Contact us")').count(), await p.locator('text=/Fale conosco|Contact us/').count()); await p.locator('text=/Fale conosco|Contact us/').nth(1).click(); const np = await pop; await p.waitForTimeout(800);
  console.log('WhatsApp:', decodeURIComponent(wa || (np && np.url()) || 'nao abriu'));
  await p.setViewportSize({ width: 390, height: 844 }); await p.goto('https://designoai.com.br/planos-social-automation', { waitUntil: 'networkidle' }); await p.waitForTimeout(1000);
  console.log('celular sem rolagem horizontal:', await p.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1));
  console.log('erros JS:', errs.length ? errs.join('|') : 'nenhum'); await b.close();
})();
