
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Zap, Search, TrendingUp, Globe } from 'lucide-react';

const SEOInteligente = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-yellow-50 via-white to-orange-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full text-yellow-600 font-medium mb-8 shadow-lg border border-yellow-200">
              <Star className="w-4 h-4 mr-2 animate-pulse" />
              🚀 SEO Inteligente
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-yellow-600 via-orange-600 to-yellow-800 bg-clip-text text-transparent">
                SEO Inteligente
              </span>
              <br />
              <span className="text-slate-800">Automatizado</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Otimização automática para melhorar seu posicionamento nos mecanismos de busca
            </p>
            
            <Link to="/#contact">
              <Button size="lg" className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-orange-600 hover:to-yellow-600 text-white shadow-xl hover:shadow-2xl transition-all duration-500">
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
            <div className="text-center p-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Palavras-chave Estratégicas</h3>
              <p className="text-slate-600">Identificação e otimização das melhores palavras-chave</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Ranking Otimizado</h3>
              <p className="text-slate-600">Melhoria contínua do posicionamento no Google</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Presença Global</h3>
              <p className="text-slate-600">Expansão da visibilidade online em todos os canais</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SEOInteligente;
