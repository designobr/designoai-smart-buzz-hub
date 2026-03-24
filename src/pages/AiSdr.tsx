
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Brain, MessageSquare, CalendarCheck, XCircle, CheckCircle, ShieldCheck, Target, DollarSign, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const WHATSAPP_CTA = 'https://wa.me/5511947968158?text=Olá! Quero saber mais sobre o AI SDR da DesignoAI.';

const FloatingParticle = ({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-primary"
    style={{ left: x, top: y, width: size, height: size, boxShadow: `0 0 ${size * 3}px ${size}px hsl(195 100% 50% / 0.4)` }}
    animate={{ y: [0, -30, 0], opacity: [0.4, 0.9, 0.4], scale: [1, 1.3, 1] }}
    transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
  />
);

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const AiSdr = () => {
  const openWhatsApp = () => window.open(WHATSAPP_CTA, '_blank');

  return (
    <>
      <SEOHead
        title="AI SDR — Máquina de Prospecção B2B com IA"
        description="Contrate um AI SDR e transforme seu WhatsApp em uma máquina de vendas automática. Prospecção B2B inteligente com Inteligência Artificial pela DesignoAI."
        path="/ai-sdr"
      />
      <Navbar />

      {/* ───── HERO ───── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[hsl(270,70%,60%)]/5 rounded-full blur-[120px]" />
          <FloatingParticle delay={0} x="10%" y="20%" size={6} />
          <FloatingParticle delay={1} x="85%" y="25%" size={4} />
          <FloatingParticle delay={2} x="15%" y="75%" size={5} />
          <FloatingParticle delay={0.5} x="75%" y="65%" size={3} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div {...fadeUp()}>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium text-primary mb-8 animated-border bg-card">
                <Sparkles className="w-4 h-4 mr-2" />
                O futuro da prospecção B2B chegou. Conheça o seu novo AI SDR.
              </div>
            </motion.div>

            <motion.h1 {...fadeUp(0.1)} className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] mb-6">
              <span className="text-foreground">Contrate um AI SDR e transforme seu WhatsApp em uma </span>
              <span className="shimmer-text">Máquina de Vendas Automática.</span>
            </motion.h1>

            <motion.p {...fadeUp(0.2)} className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Pare de depender de listas de mailing desatualizadas. Nossa Inteligência Artificial mapeia o seu cliente ideal, faz a primeira abordagem e entrega oportunidades de negócio quentes direto no WhatsApp da sua equipe comercial.
            </motion.p>

            <motion.div {...fadeUp(0.3)}>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-md text-base px-8 py-6 rounded-xl group transition-all duration-300 hover:-translate-y-0.5"
                onClick={openWhatsApp}
              >
                Quero automatizar minhas vendas com IA
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="h-32 bg-gradient-to-t from-background to-transparent" />
        </div>
      </section>

      {/* ───── PROBLEMA vs. SOLUÇÃO ───── */}
      <section className="py-24 md:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              <span className="text-foreground">O problema é </span>
              <span className="text-gradient">claro.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Jeito Antigo */}
            <motion.div {...fadeUp(0.1)} className="glass rounded-2xl p-8 border-l-4 border-l-destructive relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-destructive/5 rounded-full blur-[60px]" />
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-destructive/10">
                  <XCircle className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground">O Jeito Antigo</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Vendedores dependendo de listas de mailing frias e desatualizadas, mandando mensagens manuais, sofrendo com bloqueios de chip e tentando reviver contatos que não respondem.
              </p>
            </motion.div>

            {/* Jeito DesignoAI */}
            <motion.div {...fadeUp(0.2)} className="glass rounded-2xl p-8 border-l-4 border-l-primary relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[60px]" />
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-primary/10">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground">O Jeito DesignoAI</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Nossa Inteligência Artificial filtra as melhores empresas em tempo real, redige mensagens persuasivas e dispara centenas de contatos via API Oficial do WhatsApp. Seu time só entra para fechar negócio.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───── COMO A IA TRABALHA POR VOCÊ ───── */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 glass rounded-full text-sm font-medium text-primary mb-6">
              Processo
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              <span className="text-foreground">Como a IA </span>
              <span className="text-gradient">Trabalha por Você</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Brain,
                step: '01',
                title: 'Inteligência de Mercado',
                text: 'Nossa IA analisa o seu negócio e varre a internet mapeando centenas de empresas B2B na sua região que têm o perfil exato para comprar de você agora.',
              },
              {
                icon: MessageSquare,
                step: '02',
                title: 'Abordagem Automática',
                text: 'A IA envia mensagens personalizadas via WhatsApp Oficial para os tomadores de decisão dessas empresas.',
              },
              {
                icon: CalendarCheck,
                step: '03',
                title: 'Reuniões na Agenda',
                text: 'O cliente demonstra interesse e a automação transfere o contato na mesma hora para o seu vendedor fechar o contrato.',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} {...fadeUp(i * 0.15)} className="glass rounded-2xl p-8 hover:bg-white/[0.06] hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 group text-center">
                  <div className="text-5xl font-heading font-bold text-primary/10 mb-4 group-hover:text-primary/20 transition-colors">
                    {item.step}
                  </div>
                  <div className="mx-auto w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── AUTORIDADE (EFEITO INCEPTION) ───── */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeUp()} className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 glass rounded-full text-sm font-medium text-primary mb-8">
              <Zap className="w-4 h-4 mr-2" />
              Prova Real
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
              <span className="text-foreground">Como você </span>
              <span className="text-gradient">chegou até aqui</span>
              <span className="text-foreground"> hoje?</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Se você está lendo esta página, é porque o nosso AI SDR encontrou a sua empresa no momento exato e fez a abordagem perfeita. A prova de que o sistema operado por IA funciona é{' '}
              <span className="text-foreground font-semibold">você estar aqui agora</span>. Imagine essa mesma Inteligência Artificial caçando clientes para o seu negócio{' '}
              <span className="text-primary font-semibold">24 horas por dia</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ───── BENEFÍCIOS ───── */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              <span className="text-foreground">Por que escolher o </span>
              <span className="text-gradient">AI SDR?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: DollarSign,
                title: 'Sem Custos Trabalhistas',
                text: 'Um prospector humano custa mais de R$ 3.000/mês, sofre com cansaço e oscilação de humor. Nosso AI SDR custa uma fração disso, opera em alta performance e não tira férias.',
              },
              {
                icon: ShieldCheck,
                title: 'Segurança Total',
                text: 'Operamos com a API Oficial da Meta. Zero risco de perder o seu número.',
              },
              {
                icon: Target,
                title: 'Tráfego Qualificado',
                text: 'A Inteligência Artificial traz empresas prontas para conversar, não curiosos.',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} {...fadeUp(i * 0.15)} className="glass rounded-2xl p-8 hover:bg-white/[0.06] hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── TESTE AGORA ───── */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(142_70%_45%/0.05),transparent_70%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Coluna Esquerda */}
            <motion.div {...fadeUp()} className="text-center md:text-left">
              <div className="inline-flex items-center px-4 py-2 glass rounded-full text-sm font-medium text-primary mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Demonstração ao Vivo
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                <span className="text-foreground">Veja a IA </span>
                <span className="text-gradient">em Ação</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-lg mx-auto md:mx-0">
                Clique no botão abaixo e receba uma mensagem automática no seu WhatsApp agora mesmo. Sem cadastro, sem espera.
              </p>
              <a
                href="https://wa.me/5511978594803?text=Quero%20testar%20a%20IA%20da%20DesignoAI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-6 rounded-2xl text-lg font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 group"
                style={{
                  background: 'linear-gradient(135deg, #25D366, #128C7E)',
                  boxShadow: '0 0 30px 5px rgba(37, 211, 102, 0.3), 0 10px 40px -10px rgba(37, 211, 102, 0.5)',
                }}
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Testar Robô no WhatsApp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Coluna Direita — Phone Mockup */}
            <motion.div
              {...fadeUp(0.2)}
              className="flex justify-center relative"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] bg-primary/20 rounded-full blur-[80px]" />
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-[280px] h-[500px] rounded-[3rem] border-2 border-border/50 bg-card/80 backdrop-blur-xl shadow-2xl overflow-hidden"
              >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-background rounded-b-2xl z-10" />
                {/* Status bar */}
                <div className="h-12 bg-[#075E54] flex items-end px-4 pb-1">
                  <span className="text-white/90 text-xs font-medium">DesignoAI Bot</span>
                </div>
                {/* Chat area */}
                <div className="p-3 space-y-3 bg-[#0B141A] flex-1 h-[calc(100%-3rem)]">
                  {[
                    { msg: 'Olá! Encontramos sua empresa e acreditamos que podemos ajudar. 🤖', delay: 0.3, fromBot: true },
                    { msg: 'Temos uma solução de IA que automatiza a prospecção B2B via WhatsApp.', delay: 0.8, fromBot: true },
                    { msg: 'Interessante! Como funciona?', delay: 1.4, fromBot: false },
                    { msg: 'Posso agendar uma demonstração gratuita agora mesmo! 🚀', delay: 2.0, fromBot: true },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: item.delay }}
                      className={`max-w-[85%] px-3 py-2 rounded-xl text-xs leading-relaxed ${
                        item.fromBot
                          ? 'bg-[#1F2C34] text-white/90 rounded-tl-sm mr-auto'
                          : 'bg-[#005C4B] text-white/90 rounded-tr-sm ml-auto'
                      }`}
                    >
                      {item.msg}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───── CTA FINAL ───── */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeUp()} className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-foreground">Assuma o controle do seu </span>
              <span className="text-gradient">crescimento comercial.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Agende uma sessão de diagnóstico gratuita e descubra quantas empresas na sua região estão prontas para comprar o seu serviço hoje.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-lg text-base px-10 py-7 rounded-xl group transition-all duration-300 hover:-translate-y-0.5"
              onClick={openWhatsApp}
            >
              Falar com um Especialista no WhatsApp
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AiSdr;
