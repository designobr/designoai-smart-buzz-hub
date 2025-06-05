
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, BarChart3, TrendingUp, Target, PieChart } from 'lucide-react';

const AnalyseDados = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-purple-600 font-medium mb-8 shadow-lg border border-purple-200">
              <Star className="w-4 h-4 mr-2 animate-pulse" />
              📊 Análise de Dados
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800 bg-clip-text text-transparent">
                Análise de Dados
              </span>
              <br />
              <span className="text-slate-800">Inteligente</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Insights precisos e em tempo real sobre o desempenho de suas estratégias de marketing
            </p>
            
            <Link to="/#contact">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 text-white shadow-xl hover:shadow-2xl transition-all duration-500">
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
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Relatórios Detalhados</h3>
              <p className="text-slate-600">Análises completas com métricas importantes do seu negócio</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Tendências de Mercado</h3>
              <p className="text-slate-600">Identificação de oportunidades e tendências em tempo real</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">ROI Otimizado</h3>
              <p className="text-slate-600">Maximização do retorno sobre investimento com dados precisos</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AnalyseDados;
