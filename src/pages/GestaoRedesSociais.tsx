
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Share2, Calendar, Users, MessageCircle } from 'lucide-react';

const GestaoRedesSociais = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-orange-50 via-white to-red-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-full text-orange-600 font-medium mb-8 shadow-lg border border-orange-200">
              <Star className="w-4 h-4 mr-2 animate-pulse" />
              📱 Gestão de Redes Sociais
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-800 bg-clip-text text-transparent">
                Gestão de Redes Sociais
              </span>
              <br />
              <span className="text-slate-800">Automatizada</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Automação inteligente para postagens, engajamento e monitoramento de suas redes
            </p>
            
            <Link to="/#contact">
              <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-red-600 hover:to-orange-600 text-white shadow-xl hover:shadow-2xl transition-all duration-500">
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
            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Agendamento Inteligente</h3>
              <p className="text-slate-600">Postagens automáticas nos melhores horários</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Gestão de Comunidade</h3>
              <p className="text-slate-600">Engajamento automático e resposta a comentários</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Monitoramento 24/7</h3>
              <p className="text-slate-600">Acompanhamento contínuo de menções e hashtags</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GestaoRedesSociais;
