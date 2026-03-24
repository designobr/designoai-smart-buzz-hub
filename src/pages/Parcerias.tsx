
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SubpageLayout from '@/components/SubpageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Handshake, Globe, Users, Award, Mail, MessageCircle } from 'lucide-react';
import HandshakeVisual from '@/components/hero-visuals/HandshakeVisual';

const Parcerias = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const partnershipTypes = [
    { icon: Globe, title: "Parceiros de Tecnologia", description: "Colaboramos com líderes em tecnologia para integrar as melhores ferramentas e plataformas em nossas soluções." },
    { icon: Users, title: "Parceiros de Canal", description: "Trabalhamos com agências de marketing, consultorias e integradores que expandem nosso alcance." },
    { icon: Handshake, title: "Parceiros Estratégicos", description: "Estabelecemos alianças estratégicas com empresas complementares para criar soluções integradas." },
  ];

  const benefits = [
    "Acesso antecipado a novas funcionalidades", "Treinamento especializado em nossas tecnologias",
    "Suporte técnico dedicado e prioritário", "Materiais de marketing co-brandados",
    "Participação em eventos exclusivos", "Programa de certificação oficial",
    "Comissões atrativas e metas flexíveis", "Portal exclusivo para parceiros",
  ];

  const processSteps = [
    "Preencha o formulário de interesse", "Participe de uma reunião de alinhamento",
    "Avaliação técnica e comercial", "Assinatura do acordo de parceria",
    "Onboarding e treinamento inicial", "Início das atividades conjuntas",
  ];

  return (
    <SubpageLayout
      title="Parcerias"
      subtitle="Construindo relacionamentos duradouros para oferecer soluções ainda mais completas e inovadoras."
      badge="🤝 Cresça conosco"
      seoPath="/parcerias"
      seoDescription="Parcerias DesignoAI: junte-se a nós e ofereça soluções de marketing digital com IA para seus clientes. Programa de parceiros com comissões atrativas."
      visualElement={<HandshakeVisual />}
    >
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-heading font-bold text-center mb-12 text-gradient">Tipos de Parcerias</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {partnershipTypes.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className="glass border-border/50 hover:border-primary/30 transition-all group h-full">
                  <CardHeader className="text-center pb-3">
                    <div className="mx-auto mb-3 p-3 rounded-xl bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors"><t.icon className="w-7 h-7 text-primary" /></div>
                    <CardTitle className="text-lg text-foreground">{t.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center"><p className="text-muted-foreground">{t.description}</p></CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-center mb-12 text-gradient">Benefícios das Parcerias</h2>
          <Card className="glass border-border/50">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-center mb-12 text-gradient">Como se Tornar Parceiro</h2>
          <Card className="glass border-border/50">
            <CardContent className="p-8 md:p-12 space-y-4">
              {processSteps.map((s, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0"><span className="text-primary text-sm font-bold">{i + 1}</span></div>
                  <span className="text-muted-foreground">{s}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Card className="glass border-border/50">
            <CardHeader><CardTitle className="text-2xl text-center text-gradient">Entre em Contato para Parcerias</CardTitle></CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-4 p-6 rounded-xl bg-primary/5 border border-primary/10">
                  <div className="p-3 rounded-full bg-primary/20"><Mail className="w-6 h-6 text-primary" /></div>
                  <div>
                    <p className="font-semibold text-foreground">E-mail</p>
                    <a href="mailto:contato@designoai.com.br" className="text-primary hover:underline">contato@designoai.com.br</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-6 rounded-xl bg-primary/5 border border-primary/10">
                  <div className="p-3 rounded-full bg-primary/20"><MessageCircle className="w-6 h-6 text-primary" /></div>
                  <div>
                    <p className="font-semibold text-foreground">WhatsApp</p>
                    <a href="https://wa.me/5511947968158" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">(11) 94796-8158</a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </SubpageLayout>
  );
};

export default Parcerias;
