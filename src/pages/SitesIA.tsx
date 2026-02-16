
import { motion } from 'framer-motion';
import { Zap, Gem, Target, Palette, Rocket, Settings, Check, MessageCircle, ArrowRight, Search, Shield, Globe, Mail, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SubpageLayout from '@/components/SubpageLayout';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const audiences = [
  "Clínicas de Estética que precisam agendar mais procedimentos",
  "Veterinárias que querem facilitar o agendamento de consultas",
  "Dentistas em busca de novos pacientes",
  "Escritórios de Advocacia que desejam transmitir autoridade",
  "Restaurantes que precisam de cardápio digital e pedidos online",
  "Consultorias que querem captar leads qualificados",
  "Academias e Personal Trainers focados em atrair alunos",
  "Indústrias e Distribuidoras que buscam expandir sua presença digital",
  "Qualquer empresa que busca mais clientes e presença digital profissional",
];

const painPoints = [
  "Perder clientes para concorrentes que têm site",
  "Parecer menos profissional sem uma vitrine digital própria",
  "Depender 100% de redes sociais que mudam as regras constantemente",
  "Não ter onde centralizar informações e facilitar contato",
  "Querer crescer mas achar que um site é muito caro ou demorado",
];

const advantages = [
  { icon: Zap, title: "Velocidade Incrível", description: "Site no ar em tempo recorde (até 72 horas), sem a burocracia e os meses de espera das agências tradicionais. Enquanto outros ainda estão orçando, você já está capturando clientes." },
  { icon: Gem, title: "Qualidade Premium", description: "Design moderno e responsivo, perfeitamente adaptado para qualquer dispositivo: celular, tablet ou desktop. Seus clientes terão uma experiência profissional." },
  { icon: Target, title: "Foco em Resultados", description: "Cada elemento é pensado estrategicamente para transformar visitantes em clientes, com chamadas para ação claras e jornada intuitiva." },
  { icon: Palette, title: "Totalmente Personalizado", description: "Cada projeto é supervisionado e refinado por especialistas para refletir a identidade única da sua marca. Nada de templates genéricos." },
  { icon: Rocket, title: "Tecnologia de Ponta", description: "Construído com as mais avançadas plataformas de Inteligência Artificial do mercado, garantindo performance, segurança e escalabilidade." },
  { icon: Settings, title: "Performance Otimizada", description: "Sites leves, rápidos e otimizados para os mecanismos de busca, garantindo melhor posicionamento no Google." },
];

const steps = [
  { number: "01", title: "Descoberta", description: "Começamos entendendo seu negócio, seus objetivos e seu público-alvo. Cada detalhe importa para criar um site que realmente representa sua empresa." },
  { number: "02", title: "Criação Inteligente", description: "Nossa IA gera um protótipo inicial com base nas informações estratégicas da sua empresa. A tecnologia trabalha 24/7 para acelerar o processo." },
  { number: "03", title: "Refinamento Personalizado", description: "Aqui entra o toque humano. Ajustamos cada detalhe: textos persuasivos, cores da marca, imagens, funcionalidades." },
  { number: "04", title: "Lançamento Rápido", description: "Publicamos seu site em domínio próprio (.com.br), configuramos e-mails profissionais, certificados de segurança e Google Meu Negócio." },
];

const deliverables = [
  { icon: Globe, text: "Domínio .com.br registrado em seu nome" },
  { icon: Mail, text: "E-mails Profissionais (@suaempresa.com.br)" },
  { icon: Shield, text: "Certificado SSL (site seguro com cadeado verde)" },
  { icon: MessageCircle, text: "Integração com WhatsApp para contato direto" },
  { icon: Search, text: "Otimização para Buscadores (SEO)" },
  { icon: Smartphone, text: "Site 100% Responsivo em todos os dispositivos" },
];

const handleWhatsApp = () => {
  window.open('https://wa.me/5511947968158?text=Olá! Gostaria de saber mais sobre criação de sites com IA.', '_blank');
};

const SitesIA = () => {
  return (
    <SubpageLayout
      title="Sites Profissionais com IA"
      subtitle="Cansado de orçamentos altos e prazos intermináveis? Desbloqueie o potencial da sua empresa com uma presença digital profissional, ágil e focada em resultados."
      badge="O Futuro Chegou"
    >
      {/* Why you need a site */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeUp} custom={0} className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                <span className="text-foreground">Por Que Sua Empresa </span>
                <span className="text-gradient">Precisa de um Site?</span>
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} custom={1} className="glass rounded-2xl p-8 md:p-10 space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                No mundo digital de hoje, depender apenas de redes sociais é limitar o crescimento do seu negócio. <strong className="text-foreground">O Instagram e o Facebook são importantes, mas você não é dono dessas plataformas.</strong> As regras mudam, o alcance diminui e seus clientes podem não encontrar você.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                <strong className="text-primary">Um site próprio é seu território digital</strong>, onde você controla tudo: a experiência do cliente, a mensagem da sua marca e, principalmente, a conversão de visitantes em clientes reais.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Utilizamos as mais avançadas ferramentas de <strong className="text-foreground">Inteligência Artificial</strong> para construir sites que realmente funcionam para o seu negócio, combinando tecnologia de ponta com expertise humana.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-5xl mx-auto">
            <motion.div variants={fadeUp} custom={0} className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 glass rounded-full text-sm font-medium text-primary mb-6">
                Público-Alvo
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                <span className="text-foreground">Para Quem é </span>
                <span className="text-gradient">Este Serviço?</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Solução desenvolvida para <strong className="text-foreground">empresas em todo o Brasil</strong> que desejam crescer de forma inteligente
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {audiences.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i * 0.5}
                  className="glass rounded-xl p-4 flex items-start gap-3 group hover:bg-white/[0.06] hover:border-primary/20 transition-all duration-300"
                >
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Pain points */}
            <motion.div variants={fadeUp} custom={5} className="glass-strong rounded-2xl p-8 md:p-10">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
                Se você enfrenta qualquer uma destas dores:
              </h3>
              <div className="space-y-3">
                {painPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-lg font-semibold text-primary">
                Então este serviço foi feito para você.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} custom={0} className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 glass rounded-full text-sm font-medium text-primary mb-6">
                Diferenciais
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold">
                <span className="text-foreground">Vantagens Que </span>
                <span className="text-gradient">Fazem a Diferença</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {advantages.map((adv, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  className="glass rounded-2xl p-6 group hover:bg-white/[0.06] hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <adv.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {adv.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{adv.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} custom={0} className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 glass rounded-full text-sm font-medium text-primary mb-6">
                Processo
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                <span className="text-foreground">Como </span>
                <span className="text-gradient">Funciona?</span>
              </h2>
              <p className="text-muted-foreground text-lg">Um processo simples e transparente</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  className="glass rounded-2xl p-6 group hover:bg-white/[0.06] hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-5xl font-heading font-bold text-primary/10 mb-4 group-hover:text-primary/20 transition-colors">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[hsl(270,70%,60%)]/5 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} custom={0} className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 glass rounded-full text-sm font-medium text-primary mb-6">
                Entrega Completa
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                <span className="text-foreground">O Que Você </span>
                <span className="text-gradient">Receberá</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Você não recebe apenas um site. Você recebe uma <strong className="text-foreground">solução digital completa</strong>.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {deliverables.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  className="glass rounded-2xl p-6 flex items-start gap-4 group hover:bg-white/[0.06] hover:border-primary/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.p variants={fadeUp} custom={6} className="text-center text-lg text-primary font-semibold mt-10">
              Tudo entregue pronto para começar a gerar resultados imediatamente.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Differentiator */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeUp} custom={0} className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                <span className="text-foreground">O Que Torna Este </span>
                <span className="text-gradient">Serviço Diferente?</span>
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} custom={1} className="glass-strong rounded-2xl p-8 md:p-10 space-y-6 text-center">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Enquanto agências tradicionais cobram valores altos e demoram meses, e plataformas DIY te deixam sozinho, <strong className="text-foreground">nós combinamos o melhor dos dois mundos</strong>:
              </p>
              <div className="grid md:grid-cols-3 gap-6 py-4">
                {[
                  { label: "Velocidade e eficiência", sub: "da Inteligência Artificial" },
                  { label: "Expertise e personalização", sub: "de profissionais especializados" },
                  { label: "Custo acessível", sub: "que empresas podem investir" },
                ].map((item, i) => (
                  <div key={i} className="glass rounded-xl p-5">
                    <p className="text-foreground font-semibold mb-1">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.sub}</p>
                  </div>
                ))}
              </div>
              <p className="text-lg text-foreground font-medium">
                Você não precisa escolher entre qualidade, velocidade e preço justo. Com nossa solução, você tem <span className="text-primary font-bold">os três</span>.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-foreground">Pronto para Ter um Site que </span>
              <span className="text-gradient">Realmente Traz Resultados?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Pare de perder clientes para concorrentes que já têm presença digital profissional. <strong className="text-foreground">Sua empresa merece ser encontrada, reconhecida e escolhida.</strong>
            </p>

            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-md text-lg px-10 py-6 h-auto"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Fale Conosco via WhatsApp
            </Button>

            <p className="text-sm text-muted-foreground mt-6">
              Receba uma <strong className="text-foreground">consultoria gratuita</strong> e veja como a IA pode transformar a presença digital do seu negócio. Sem compromisso.
            </p>
          </motion.div>
        </div>
      </section>
    </SubpageLayout>
  );
};

export default SitesIA;
