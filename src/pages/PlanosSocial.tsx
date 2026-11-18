// Página pública de valores do DesignoAI Social Automation: um plano base e adicionais contratados à parte.
// Só apresenta e calcula valores (src/lib/precos-social.ts). A contratação é por "Fale conosco" (WhatsApp): nada aqui cobra, ativa ou liga ao Asaas.
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Minus, Plus, MessageCircle, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SubpageLayout from '@/components/SubpageLayout';
import { useI18n } from '@/i18n/I18nProvider';
import { BASE, CLIENTE_ADICIONAL_CENTAVOS, EXEMPLOS, PACOTES, brl, calcular, type Selecao } from '@/lib/precos-social';

const WHATSAPP = 'https://wa.me/5511947968158'; // o mesmo número do restante do site
const MAX_CLIENTES = 99; const MAX_PACOTE = 20; // limites só da interface do configurador

interface Grupo { title: string; items: string[] }

function Stepper({ label, value, onChange, max, less, more }: { label: string; value: number; onChange: (n: number) => void; max: number; less: string; more: string }) {
  return (
    <div className="inline-flex shrink-0 items-center gap-2 sm:gap-3" role="group" aria-label={label}>
      <button type="button" aria-label={`${less}: ${label}`} disabled={value <= 0} onClick={() => onChange(value - 1)}
        className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-foreground/30 disabled:opacity-40"><Minus className="h-4 w-4" /></button>
      <span className="w-8 text-center text-lg font-semibold tabular-nums" aria-live="polite" data-testid={`q-${label}`}>{value}</span>
      <button type="button" aria-label={`${more}: ${label}`} disabled={value >= max} onClick={() => onChange(value + 1)}
        className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-foreground/30 disabled:opacity-40"><Plus className="h-4 w-4" /></button>
    </div>
  );
}

const PlanosSocial = () => {
  const { t, tList } = useI18n();
  const grupos = tList<Grupo>('planosSocial.base.groups');
  const stats = tList<string>('planosSocial.base.stats');
  const exLabels = tList<string>('planosSocial.examples.labels');
  const exHeaders = tList<string>('planosSocial.examples.headers');
  const [sel, setSel] = useState<Selecao>({ clientesAdicionais: 0, pacotes: {} });
  const r = calcular(sel);
  const abrir = (texto: string) => window.open(`${WHATSAPP}?text=${encodeURIComponent(texto)}`, '_blank', 'noopener,noreferrer');
  const setPacote = (n: number, q: number) => setSel((s) => ({ ...s, pacotes: { ...s.pacotes, [n]: q } }));
  const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.45 } } as const;

  return (
    <SubpageLayout
      title={t('planosSocial.seo.title')}
      subtitle={t('planosSocial.hero.subtitle')}
      seoPath="/planos-social-automation"
      seoDescription={t('planosSocial.seo.description')}
      badge={t('planosSocial.hero.badge')}
    >
      {/* Plano base */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article {...fade} className="card-surface mx-auto max-w-4xl border-foreground/20 p-8 md:p-12">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <div>
                <span className="rounded-full border border-border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">{t('planosSocial.base.tag')}</span>
                <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-foreground">{t('planosSocial.base.name')}</h2>
              </div>
              <p className="text-5xl font-bold tracking-tight text-foreground" data-testid="preco-base">
                {brl(BASE.precoCentavos)}<span className="ml-1 text-base font-medium text-muted-foreground">{t('planosSocial.base.period')}</span>
              </p>
            </div>

            <dl className="mt-8 grid grid-cols-3 gap-4 border-y border-border py-6 text-center">
              {[BASE.clientes, BASE.contas, BASE.publicacoes].map((n, i) => (
                <div key={i}>
                  <dt className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{n}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground md:text-sm">{stats[i]}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {grupos.map((g) => (
                <div key={g.title}>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">{g.title}</h3>
                  <ul className="mt-4 space-y-3">
                    {g.items.map((x) => (
                      <li key={x} className="flex gap-3 text-sm text-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2} />{x}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <Button className="mt-10 w-full rounded-full sm:w-auto" onClick={() => abrir(t('planosSocial.final.waMessage'))}>
              <MessageCircle className="mr-2 h-4 w-4" />{t('planosSocial.cta')}
            </Button>
            <p className="mt-4 text-xs text-muted-foreground">{t('planosSocial.soon')}</p>
          </motion.article>
        </div>
      </section>

      {/* Adicionais */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fade} className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{t('planosSocial.addons.title')}</h2>
            <p className="mt-3 text-sm text-muted-foreground md:text-base">{t('planosSocial.addons.subtitle')}</p>
          </motion.div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
            <motion.article {...fade} className="card-surface p-8">
              <h3 className="text-lg font-bold text-foreground">{t('planosSocial.addons.client.title')}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t('planosSocial.addons.client.description')}</p>
              <p className="mt-6 text-3xl font-bold tracking-tight text-foreground">{brl(CLIENTE_ADICIONAL_CENTAVOS)}<span className="ml-1 text-sm font-medium text-muted-foreground">{t('planosSocial.base.period')}</span></p>
              <p className="text-xs text-muted-foreground">{t('planosSocial.addons.client.unit')}</p>
            </motion.article>
            <motion.article {...fade} className="card-surface p-8">
              <h3 className="text-lg font-bold text-foreground">{t('planosSocial.addons.posts.title')}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t('planosSocial.addons.posts.description')}</p>
              <ul className="mt-6 divide-y divide-border">
                {PACOTES.map((p) => (
                  <li key={p.publicacoes} className="flex items-baseline justify-between gap-4 py-3">
                    <span className="text-sm font-medium text-foreground">{t('planosSocial.addons.posts.pack', { n: p.publicacoes })}</span>
                    <span className="text-base font-bold tabular-nums text-foreground">{brl(p.precoCentavos)}<span className="ml-1 text-xs font-medium text-muted-foreground">{t('planosSocial.base.period')}</span></span>
                  </li>
                ))}
              </ul>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Configurador */}
      <section className="border-t border-border py-16 md:py-24" aria-labelledby="configurador">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fade} className="mx-auto max-w-2xl text-center">
            <h2 id="configurador" className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{t('planosSocial.builder.title')}</h2>
            <p className="mt-3 text-sm text-muted-foreground md:text-base">{t('planosSocial.builder.subtitle')}</p>
          </motion.div>
          <motion.div {...fade} className="card-surface mx-auto mt-12 grid max-w-5xl gap-10 p-8 md:grid-cols-5 md:p-12">
            <div className="space-y-8 md:col-span-3">
              <div className="flex items-center justify-between gap-3">
                <div><p className="font-semibold text-foreground">{t('planosSocial.builder.clients')}</p><p className="text-xs text-muted-foreground">{brl(CLIENTE_ADICIONAL_CENTAVOS)}{t('planosSocial.base.period')}</p></div>
                <Stepper label={t('planosSocial.builder.clients')} value={sel.clientesAdicionais} max={MAX_CLIENTES} less={t('planosSocial.builder.less')} more={t('planosSocial.builder.more')} onChange={(n) => setSel((s) => ({ ...s, clientesAdicionais: n }))} />
              </div>
              <div className="border-t border-border pt-6">
                <p className="font-semibold text-foreground">{t('planosSocial.builder.packs')}</p>
                <div className="mt-4 space-y-4">
                  {PACOTES.map((p) => (
                    <div key={p.publicacoes} className="flex items-center justify-between gap-3">
                      <div><p className="text-sm font-medium text-foreground">{t('planosSocial.addons.posts.pack', { n: p.publicacoes })}</p><p className="text-xs text-muted-foreground">{brl(p.precoCentavos)}{t('planosSocial.base.period')}</p></div>
                      <Stepper label={`+${p.publicacoes}`} value={sel.pacotes[p.publicacoes] ?? 0} max={MAX_PACOTE} less={t('planosSocial.builder.less')} more={t('planosSocial.builder.more')} onChange={(n) => setPacote(p.publicacoes, n)} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-secondary p-6 md:col-span-2" aria-live="polite">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground"><Layers className="h-4 w-4" />{t('planosSocial.builder.includedBase')}</p>
              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between gap-4"><dt className="text-muted-foreground">{t('planosSocial.builder.resultClients')}</dt><dd className="font-semibold tabular-nums text-foreground" data-testid="r-clientes">{r.clientes}</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-muted-foreground">{t('planosSocial.builder.resultPosts')}</dt><dd className="font-semibold tabular-nums text-foreground" data-testid="r-publicacoes">{r.publicacoes}</dd></div>
              </dl>
              <div className="mt-5 border-t border-border pt-5">
                <p className="text-xs text-muted-foreground">{t('planosSocial.builder.resultTotal')}</p>
                <p className="mt-1 text-4xl font-bold tracking-tight text-foreground" data-testid="r-total">{brl(r.totalCentavos)}</p>
              </div>
              <Button className="mt-6 w-full rounded-full" onClick={() => abrir(t('planosSocial.builder.waMessage', { clientes: r.clientes, pubs: r.publicacoes, total: brl(r.totalCentavos) }))}>
                <MessageCircle className="mr-2 h-4 w-4" />{t('planosSocial.builder.cta')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Exemplos */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fade} className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{t('planosSocial.examples.title')}</h2>
            <p className="mt-3 text-sm text-muted-foreground md:text-base">{t('planosSocial.examples.subtitle')}</p>
          </motion.div>
          {/* Celular: cartões. Telas maiores: tabela. */}
          <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:hidden">
            {EXEMPLOS.map((e, i) => { const c = calcular(e); return (
              <div key={i} className="card-surface p-5" data-exemplo>
                <p className="font-semibold text-foreground">{exLabels[i]}</p>
                <p className="mt-1 text-sm text-muted-foreground">{c.clientes} {exHeaders[1].toLowerCase()} · {c.publicacoes} {exHeaders[2].toLowerCase()}</p>
                <p className="mt-3 text-2xl font-bold tracking-tight text-foreground">{brl(c.totalCentavos)}</p>
              </div>
            ); })}
          </div>
          <div className="mx-auto mt-12 hidden max-w-5xl overflow-hidden rounded-2xl border border-border md:block">
            <table className="w-full text-left text-sm">
              <thead className="bg-secondary text-xs uppercase tracking-[0.1em] text-muted-foreground">
                <tr>{exHeaders.map((h, i) => <th key={h} scope="col" className={`px-5 py-4 font-semibold ${i > 0 ? 'text-right' : ''}`}>{h}</th>)}</tr>
              </thead>
              <tbody className="divide-y divide-border">
                {EXEMPLOS.map((e, i) => { const c = calcular(e); return (
                  <tr key={i} data-exemplo>
                    <th scope="row" className="px-5 py-4 font-medium text-foreground">{exLabels[i]}</th>
                    <td className="px-5 py-4 text-right tabular-nums text-muted-foreground">{c.clientes}</td>
                    <td className="px-5 py-4 text-right tabular-nums text-muted-foreground">{c.publicacoes}</td>
                    <td className="px-5 py-4 text-right text-base font-bold tabular-nums text-foreground">{brl(c.totalCentavos)}</td>
                  </tr>
                ); })}
              </tbody>
            </table>
          </div>
          <p className="mx-auto mt-6 max-w-5xl text-xs text-muted-foreground">{t('planosSocial.note')}</p>
        </div>
      </section>

      {/* Regra de contagem */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fade} className="card-surface mx-auto max-w-3xl border-foreground/20 p-8 text-center md:p-12" data-regra>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">{t('planosSocial.rule.title')}</h2>
            <p className="mt-4 text-base text-foreground">{t('planosSocial.rule.text')}</p>
            <p className="mt-4 text-sm text-muted-foreground">{t('planosSocial.rule.example')}</p>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-border py-16 text-center md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">{t('planosSocial.final.title')}</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">{t('planosSocial.final.text')}</p>
          <Button className="mt-8 rounded-full" onClick={() => abrir(t('planosSocial.final.waMessage'))}>
            <MessageCircle className="mr-2 h-4 w-4" />{t('planosSocial.cta')}
          </Button>
        </div>
      </section>
    </SubpageLayout>
  );
};

export default PlanosSocial;
