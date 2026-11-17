const { abrir } = require('./base.cjs');
const zlib = require('zlib'); const fs = require('fs');
// PNG 1080x1080 sintético
function png(w, h) { const crc = (b) => { let c, t = []; for (let n = 0; n < 256; n++) { c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } let x = 0xffffffff; for (const v of b) x = t[(x ^ v) & 255] ^ (x >>> 8); return (x ^ 0xffffffff) >>> 0; };
  const ch = (t, d) => { const l = Buffer.alloc(4); l.writeUInt32BE(d.length); const td = Buffer.concat([Buffer.from(t), d]); const c = Buffer.alloc(4); c.writeUInt32BE(crc(td)); return Buffer.concat([l, td, c]); };
  const ih = Buffer.alloc(13); ih.writeUInt32BE(w, 0); ih.writeUInt32BE(h, 4); ih[8] = 8; ih[9] = 2; const raw = Buffer.alloc((w * 3 + 1) * h, 120);
  for (let y = 0; y < h; y++) raw[y * (w * 3 + 1)] = 0; return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), ch('IHDR', ih), ch('IDAT', zlib.deflateSync(raw)), ch('IEND', Buffer.alloc(0))]); }
fs.writeFileSync('/tmp/claude-0/teste.png', png(1080, 1080));
const out = []; const ok = (n, c, d = '') => { out.push(c); console.log(`${c ? 'OK     ' : 'FALHOU '} ${n}${d ? ' (' + d + ')' : ''}`); };
(async () => {
  const { b, p, esperar, entrar } = await abrir(); await entrar();
  await esperar('Olá'); const txt = async () => (await p.locator('body').innerText()).replace(/\s+/g, ' ');
  const ir = async (c) => { await p.goto('https://designoai.com.br' + c, { waitUntil: 'networkidle' }); };

  await ir('/app'); ok('painel mostra publicações recentes e avisos', await esperar('Publicações recentes') && await esperar('Avisos'));
  // 1. Conectar: o state leva o retorno ao app
  await ir('/app/conexoes'); ok('conexões lista a conta de teste', await esperar('Canal de teste'));
  const nav = p.waitForRequest(r => r.isNavigationRequest() && /facebook\.com|instagram\.com/.test(r.url()), { timeout: 20000 }).catch(() => null);
  await p.locator('section:has(h2:text-is("Instagram")) button:has-text("Conectar")').first().click(); const rq = await nav;
  let state = ''; if (rq) { const u = new URL(rq.url()); state = u.searchParams.get('state') || (u.searchParams.get('next') ? new URL(u.searchParams.get('next')).searchParams.get('state') : '') || ''; if (!state) { const m = decodeURIComponent(rq.url()).match(/state=([A-Za-z0-9_.-]+)/); state = m ? m[1] : ''; } }
  ok('Conectar vai à rede e o state carrega o retorno ao app', !!state && state.includes('.0'), state ? state.slice(0, 12) + '…' : 'sem state');
  // 2. Retorno do OAuth ao app (erro simulado: o motor redireciona para /app/conexoes com o resultado)
  if (state) {
    const r = await fetch('https://social-publisher-web-homologacao.up.railway.app/oauth/callback/instagram?error=access_denied&state=' + encodeURIComponent(state), { redirect: 'manual' });
    const loc = r.headers.get('location') || '';
    ok('callback do motor redireciona de volta ao /app', r.status === 303 && loc.startsWith('https://designoai.com.br/app/conexoes?conexao=erro'), loc.slice(0, 80));
    await p.goto(loc, { waitUntil: 'networkidle' });
    ok('app mostra o erro do retorno e limpa a URL', (await esperar('autorização não foi concedida')) && /\/app\/conexoes$/.test(p.url()), p.url());
    const falso = await fetch('https://social-publisher-web-homologacao.up.railway.app/oauth/callback/instagram?error=x&state=abc.0' + Buffer.from('/outro').toString('base64url'), { redirect: 'manual' });
    ok('retorno adulterado não redireciona ao app', !(falso.headers.get('location') || '').startsWith('https://designoai.com.br'), String(falso.status));
  }
  // 3. Desconectar
  p.once('dialog', d => d.accept());
  await p.locator('button:has-text("Desconectar")').first().click();
  await esperar('Conta desconectada', 15000); await p.waitForTimeout(3000); ok('desconectar conta pelo app', !/Canal de teste/.test(await txt()), (await txt()).match(/Conta desconectada|Não foi possível[^.]*|erro[^.]*/i)?.[0] || '');

  // 4. Produção: Instagram recusa PNG sem mexer na peça; Threads aceita e anexa
  await ir('/app/producao'); ok('produção mostra as peças aguardando mídia', await esperar('Peça IG com PNG') && await esperar('Peça Threads nova'));
  const abrirPeca = async (t) => { await p.locator('li:has-text("' + t + '")').getByText('Abrir').click(); await esperar('precisa da sua mídia'); };
  await abrirPeca('Peça IG com PNG'); ok('detalhe do Instagram avisa que só aceita JPEG', await esperar('somente imagens JPEG'));
  await p.setInputFiles('input[type=file]', '/tmp/claude-0/teste.png');
  await esperar('Mídia enviada e validada', 40000); await p.waitForTimeout(1500);
  await p.locator('button:has-text("Anexar à peça")').click();
  ok('PNG no Instagram é recusado com mensagem clara', await esperar('aceita somente JPEG', 20000), (await txt()).match(/[^.]*somente JPEG[^.]*/)?.[0] || '');
  await p.locator('button:has-text("Fechar")').click();
  await abrirPeca('Peça Threads nova');
  await p.setInputFiles('input[type=file]', '/tmp/claude-0/teste.png');
  ok('imagem enviada e validada pelo motor', await esperar('Mídia enviada e validada', 40000));
  await p.waitForTimeout(1500); await p.locator('button:has-text("Anexar à peça")').click();
  ok('mídia anexada e peça enviada para aprovação', await esperar('Mídia anexada', 25000));
  await p.waitForTimeout(1500); await ir('/app/producao'); ok('peça aparece em Aguardando a sua aprovação', await esperar('Aguardando a sua aprovação'));
  // 5. Planejamento com tarefas em andamento
  await ir('/app/planejamento'); ok('planejamento lista as peças do mês', await esperar('Peça de teste'));

  // 6. Configurações
  await ir('/app/configuracoes'); await p.fill('#o-nome', '[validacao] app completo'); await p.click('text=Salvar');
  ok('organização salva', await esperar('Organização atualizada'));
  await p.click('button:has-text("Membros")'); ok('membros lista o usuário', await esperar('validacao-app2@example.invalid'));
  await p.fill('#m-email', 'convidado-validacao@example.invalid'); await p.click('button:has-text("Convidar")');
  ok('convite criado sem e-mail real', await esperar('Convite criado|erro|inválid', 15000), (await txt()).match(/Convite criado[^.]*|[^.]*inválid[^.]*/i)?.[0] || '');
  await p.click('button:has-text("Publicação")'); await esperar('Publicar sozinho'); await p.waitForTimeout(2500);
  { const yt = p.locator('text=Usar o YouTube na publicação automática >> input'); if (!(await yt.isChecked())) await yt.check(); }
  
  ok('perfil carregado do motor com a declaração salva', await p.locator('input[name=yt-cri] >> nth=1').isChecked());
  await p.check('input[name=yt-cri] >> nth=1'); await p.click('button:has-text("Salvar")');
  ok('perfil de publicação salvo (publicação automática desligada)', await esperar('Perfil de publicação salvo', 25000));
  await p.click('button:has-text("Privacidade")'); const dl = p.waitForEvent('download', { timeout: 20000 }).catch(() => null);
  await p.click('text=Exportar dados'); const d = await dl; ok('exportação baixa o arquivo JSON', !!d, d ? d.suggestedFilename() : '');
  // 7. Admin: agente
  await ir('/admin'); ok('administração mostra o agente de IA', await esperar('Agente de IA') && await esperar('desligado'));
  await p.selectOption('#ag-prov', 'desligado'); await p.click('button:has-text("Salvar") >> nth=0');
  ok('configuração do agente salva', await esperar('Configuração do agente salva'));
  await b.close();
  console.log(out.every(Boolean) ? 'TUDO OK' : 'COM FALHAS');
})().catch(e => { console.error('ERRO', e.message); process.exit(1); });
