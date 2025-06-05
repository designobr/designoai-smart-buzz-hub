
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Sparkles, PenTool, Image, Video, FileText } from 'lucide-react';

const CriacaoConteudo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full text-blue-600 font-medium mb-8 shadow-lg border border-blue-200">
              <Star className="w-4 h-4 mr-2 animate-pulse" />
              ✨ Criação de Conteúdo
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 bg-clip-text text-transparent">
                Criação de Conteúdo
              </span>
              <br />
              <span className="text-slate-800">Profissional com IA</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Textos, imagens e gráficos gerados por IA para suas campanhas de marketing digital
            </p>
            
            <Link to="/#contact">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-cyan-600 hover:to-blue-600 text-white shadow-xl hover:shadow-2xl transition-all duration-500">
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
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Textos Otimizados</h3>
              <p className="text-slate-600">Criação automática de textos persuasivos e otimizados para SEO</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Image className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Imagens Profissionais</h3>
              <p className="text-slate-600">Geração de imagens e gráficos de alta qualidade para suas campanhas</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Conteúdo Multimídia</h3>
              <p className="text-slate-600">Criação de vídeos, áudios e apresentações interativas</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CriacaoConteudo;
