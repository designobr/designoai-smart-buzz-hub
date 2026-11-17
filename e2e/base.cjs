const { chromium } = require('/opt/node-tools/node_modules/playwright');
const fs = require('fs'); const path = require('path');
const DIST = '' + require('path').resolve(__dirname, '..', 'dist') + '';
const MIME = { '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.json': 'application/json' };
exports.abrir = async () => {
  const b = await chromium.launch({ proxy: process.env.HTTPS_PROXY ? { server: process.env.HTTPS_PROXY } : undefined });
  const ctx = await b.newContext({ ignoreHTTPSErrors: true, viewport: { width: 1280, height: 900 }, acceptDownloads: true });
  await ctx.route('https://designoai.com.br/**', async (route) => {
    const u = new URL(route.request().url()); let f = path.join(DIST, decodeURIComponent(u.pathname));
    if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) f = path.join(DIST, 'index.html');
    await route.fulfill({ status: 200, contentType: MIME[path.extname(f)] ?? 'application/octet-stream', body: fs.readFileSync(f) });
  });
  const p = await ctx.newPage();
  const esperar = async (re, t = 15000) => { try { await p.waitForFunction((s) => new RegExp(s, 'i').test(document.body.innerText), re, { timeout: t }); return true; } catch { return false; } };
  const entrar = async () => {
    await p.goto('https://designoai.com.br/auth/login', { waitUntil: 'networkidle' });
    await p.fill('input[type=email]', process.env.E); await p.fill('input[type=password]', process.env.S); await p.click('button[type=submit]');
  };
  return { b, ctx, p, esperar, entrar };
};
