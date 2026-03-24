
import { useEffect } from 'react';
import SubpageLayout from '@/components/SubpageLayout';
import { Target, Eye, Heart, Users, Lightbulb, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import NetworkVisual from '@/components/hero-visuals/NetworkVisual';

const SobreNos = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const values = [
    { icon: Lightbulb, title: "Inovação", description: "Na vanguarda da tecnologia" },
    { icon: Heart, title: "Simplicidade", description: "Tornamos o complexo em simples" },
    { icon: Target, title: "Resultados", description: "Impacto real para nossos clientes" },
    { icon: Eye, title: "Transparência", description: "Comunicação clara e honesta" },
    { icon: Users, title: "Excelência", description: "Perfeição em tudo que fazemos" },
    { icon: Globe, title: "Sustentabilidade", description: "Crescimento responsável" },
  ];

  const stats = [
    { number: "500+", label: "Empresas Atendidas" },
    { number: "50+", label: "Profissionais" },
    { number: "2023", label: "Fundação" },
    { number: "98%", label: "Satisfação" },
  ];

  return (
    <SubpageLayout
      title="Sobre Nós"
      subtitle="Democratizando o poder da inteligência artificial para empresas de todos os tamanhos."
      seoPath="/sobre-nos"
      seoDescription="Conheça a DesignoAI: agência de marketing digital com inteligência artificial. Nossa missão é democratizar a IA para empresas de todos os tamanhos."
      visualElement={<NetworkVisual />}
    >
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="glass rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-heading font-bold text-gradient mb-6">Nossa História</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A DesignoAI nasceu da visão de democratizar o poder da inteligência artificial para empresas de todos os tamanhos. Fundada por especialistas em tecnologia e marketing digital, nossa missão é transformar a forma como as empresas se conectam com seus clientes.
            </p>
            <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 my-6">
              <p className="text-muted-foreground leading-relaxed mb-3">
                Em 2023, percebemos que muitas empresas brasileiras enfrentavam dificuldades para competir no ambiente digital. Foi então que decidimos criar uma plataforma que combinasse IA de ponta com simplicidade de uso.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Hoje, a DesignoAI é reconhecida como uma das principais empresas de marketing digital com IA do Brasil.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <div className="text-2xl font-heading font-bold text-gradient">{stat.number}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass rounded-2xl p-6 text-center">
              <Target className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-heading font-semibold text-gradient mb-2">Nossa Missão</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Democratizar o acesso à tecnologia de IA para PMEs, permitindo que compitam em igualdade no ambiente digital.</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <Eye className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-heading font-semibold text-gradient mb-2">Nossa Visão</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Ser a principal referência em marketing digital com IA na América Latina até 2030.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-2xl font-heading font-bold text-center text-foreground mb-10">Nossos <span className="text-gradient">Valores</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="glass rounded-2xl p-6 text-center group hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
};

export default SobreNos;
