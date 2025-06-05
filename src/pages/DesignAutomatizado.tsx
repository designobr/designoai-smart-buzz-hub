
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, PenTool, Palette, Layers, Zap } from 'lucide-react';

const DesignAutomatizado = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full text-green-600 font-medium mb-8 shadow-lg border border-green-200">
              <Star className="w-4 h-4 mr-2 animate-pulse" />
              🎨 Design Automatizado
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-800 bg-clip-text text-transparent">
                Design Automatizado
              </span>
              <br />
              <span className="text-slate-800">Profissional</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Criação de designs profissionais para suas publicações em redes sociais
            </p>
            
            <Link to="/#contact">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-emerald-600 hover:to-green-600 text-white shadow-xl hover:shadow-2xl transition-all duration-500">
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
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <PenTool className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Templates Inteligentes</h3>
              <p className="text-slate-600">Biblioteca com milhares de templates personalizáveis</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Identidade Visual</h3>
              <p className="text-slate-600">Criação automática de identidade visual consistente</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Criação Instantânea</h3>
              <p className="text-slate-600">Designs profissionais criados em segundos</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DesignAutomatizado;
