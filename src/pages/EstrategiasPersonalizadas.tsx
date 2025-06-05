
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Brain, Target, Lightbulb, Users } from 'lucide-react';

const EstrategiasPersonalizadas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full text-indigo-600 font-medium mb-8 shadow-lg border border-indigo-200">
              <Star className="w-4 h-4 mr-2 animate-pulse" />
              🎯 Estratégias Personalizadas
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent">
                Estratégias Personalizadas
              </span>
              <br />
              <span className="text-slate-800">com IA</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Recomendações baseadas em IA para maximizar seus resultados de marketing
            </p>
            
            <Link to="/#contact">
              <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-indigo-600 text-white shadow-xl hover:shadow-2xl transition-all duration-500">
                Começar Agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">IA Avançada</h3>
              <p className="text-slate-600">Algoritmos inteligentes que aprendem com seus dados</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Segmentação Precisa</h3>
              <p className="text-slate-600">Identificação exata do seu público-alvo ideal</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Insights Únicos</h3>
              <p className="text-slate-600">Descobertas exclusivas sobre seu mercado</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EstrategiasPersonalizadas;
