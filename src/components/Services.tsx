
import { Star, Zap, BarChart3, PenTool, Share2, Brain } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const servicesData = [
  {
    icon: <Star className="h-10 w-10 text-designoai-blue" />,
    title: "Criação de Conteúdo",
    description: "Textos, imagens e gráficos gerados por IA para suas campanhas de marketing digital."
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-designoai-blue" />,
    title: "Análise de Dados",
    description: "Insights precisos e em tempo real sobre o desempenho de suas estratégias de marketing."
  },
  {
    icon: <PenTool className="h-10 w-10 text-designoai-blue" />,
    title: "Design Automatizado",
    description: "Criação de designs profissionais para suas publicações em redes sociais."
  },
  {
    icon: <Share2 className="h-10 w-10 text-designoai-blue" />,
    title: "Gestão de Redes Sociais",
    description: "Automação inteligente para postagens, engajamento e monitoramento de suas redes."
  },
  {
    icon: <Zap className="h-10 w-10 text-designoai-blue" />,
    title: "SEO Inteligente",
    description: "Otimização automática para melhorar seu posicionamento nos mecanismos de busca."
  },
  {
    icon: <Brain className="h-10 w-10 text-designoai-blue" />,
    title: "Estratégias Personalizadas",
    description: "Recomendações baseadas em IA para maximizar seus resultados de marketing."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-designoai-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-designoai-blue-dark mb-4">
            Serviços Inteligentes para Seu Marketing
          </h2>
          <p className="text-lg text-gray-600">
            Nossas soluções alimentadas por IA transformam sua presença digital e potencializam seus resultados
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <Card key={index} className="border border-gray-100 hover:shadow-lg transition-shadow duration-300 hover:border-designoai-blue/20">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-semibold text-designoai-blue-dark">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
