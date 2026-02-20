
import { useEffect } from 'react';
import SubpageLayout from '@/components/SubpageLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Star, BarChart3, Zap, PenTool, Share2, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { title: "Geração de Conteúdo com IA", description: "Crie posts, artigos, legendas e materiais visuais automaticamente.", icon: Sparkles, link: "/criacao-conteudo" },
  { title: "Análise de Concorrência", description: "Monitore estratégias dos concorrentes para se manter à frente.", icon: BarChart3, link: "/analise-dados" },
  { title: "Agendamento Automático", description: "Programe publicações nos melhores horários para engajamento.", icon: Zap, link: "/gestao-redes-sociais" },
  { title: "Dashboard Analytics", description: "Acompanhe métricas em tempo real com relatórios detalhados.", icon: BarChart3, link: "/analise-dados" },
  { title: "Otimização de SEO", description: "Melhore automaticamente o SEO do seu conteúdo.", icon: Star, link: "/seo-inteligente" },
  { title: "Integração Multi-plataforma", description: "Conecte todas as suas redes em uma única plataforma.", icon: Share2, link: "/gestao-redes-sociais" },
  { title: "Personalização Avançada", description: "Adapte tom, estilo e formato para diferentes segmentos.", icon: PenTool, link: "/estrategias-personalizadas" },
  { title: "Suporte 24/7", description: "Nossa equipe está sempre disponível para ajudar.", icon: MessageCircle, link: "/#contact" },
];

const Recursos = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <SubpageLayout title="Recursos Poderosos" subtitle="Descubra todas as funcionalidades que fazem do DesignoAI a ferramenta mais completa para seu marketing digital" badge="🚀 Recursos" seoPath="/recursos" seoDescription="Recursos completos da DesignoAI: automação de marketing, design com IA, SEO inteligente, gestão de redes sociais e muito mais para impulsionar seu negócio.">
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Link to={feature.link} className="block group">
                    <div className="glass rounded-2xl p-6 h-full transition-all duration-300 hover:bg-white/[0.06] hover:border-primary/20 hover:-translate-y-1">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <Link to="/#contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 glow-sm group">
                Começar Agora
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
};

export default Recursos;
