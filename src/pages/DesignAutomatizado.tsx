
import { useEffect } from 'react';
import SubpageLayout from '@/components/SubpageLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, PenTool, Palette, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const DesignAutomatizado = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const features = [
    { icon: PenTool, title: "Templates Inteligentes", description: "Biblioteca com milhares de templates personalizáveis" },
    { icon: Palette, title: "Identidade Visual", description: "Criação automática de identidade visual consistente" },
    { icon: Zap, title: "Criação Instantânea", description: "Designs profissionais criados em segundos" },
  ];

  return (
    <SubpageLayout title="Design Automatizado" subtitle="Criação de designs profissionais para suas publicações em redes sociais" badge="🎨 Design" seoPath="/design-automatizado" seoDescription="Design automatizado com IA: criação de posts, banners e materiais visuais profissionais para redes sociais. Designs incríveis em segundos com a DesignoAI.">
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 text-center group hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/#contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 glow-sm group">
                Começar Agora <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
};

export default DesignAutomatizado;
