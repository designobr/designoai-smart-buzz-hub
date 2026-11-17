const { abrir } = require('./base.cjs');
(async () => {
  const { b, p, esperar, entrar } = await abrir(); await entrar(); await esperar('Olá');
  const resp = []; p.on('response', async r => { const u = r.url(); if (u.includes('/api/v1/midias') || u.includes('supabase.co/storage')) resp.push(r.request().method() + ' ' + new URL(u).pathname.slice(0, 60) + ' -> ' + r.status()); });
  await p.goto('https://designoai.com.br/app/producao', { waitUntil: 'networkidle' }); await esperar('Peça vídeo de teste');
  await p.locator('li:has-text("Peça vídeo de teste")').getByText('Abrir').click(); await esperar('precisa da sua mídia');
  console.log('aviso de vídeo vertical:', /vídeo MP4 ou MOV na vertical/.test(await p.locator('body').innerText()));
  await p.setInputFiles('input[type=file]', '/tmp/claude-0/teste.mp4');
  const fim = await esperar('Mídia enviada e validada|não passou|recusad|caiu', 90000);
  const t = (await p.locator('body').innerText()).replace(/\s+/g, ' ');
  console.log('resultado do envio:', fim, t.match(/Mídia enviada e validada\.?|A mídia não passou[^.]*|O envio do vídeo foi recusado[^.]*|A conexão caiu[^.]*/)?.[0]);
  await p.waitForTimeout(2500);
  const btn = p.locator('button:has-text("Anexar à peça")'); if (await btn.isEnabled().catch(() => false)) { await btn.click(); console.log('anexar:', await esperar('Mídia anexada', 30000)); }
  console.log(resp.join('\n')); await b.close();
})().catch(e => { console.error('ERRO', e.message); process.exit(1); });
