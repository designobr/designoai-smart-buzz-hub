
import { Instagram, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-slate-900/50 backdrop-blur-md border-t border-white/10 pt-16 pb-8">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="floating-orb w-48 h-48 top-10 left-20" style={{ animationDelay: '0s' }}></div>
        <div className="floating-orb w-32 h-32 bottom-10 right-10" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img src="/star-icon.svg" alt="DesignoAI Logo" className="w-8 h-8 filter drop-shadow-lg" />
              <span className="text-xl font-bold text-white">DesignoAI</span>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Transformando o marketing digital através da inteligência artificial para empresas de todos os tamanhos.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/designoai.br" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/70 hover:text-blue-400 transition-colors glass-card p-2 rounded-lg hover:glass-strong"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.threads.com/@designoai.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/70 hover:text-blue-400 transition-colors glass-card p-2 rounded-lg hover:glass-strong"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2c-2.8 0-5 2.2-5 5v10c0 2.8 2.2 5 5 5s5-2.2 5-5V7c0-2.8-2.2-5-5-5z" />
                  <path d="M12 2v20" />
                  <path d="M17 6h1c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2h-1" />
                  <path d="M7 6H6c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h1" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Soluções</h3>
            <ul className="space-y-3">
              <li><Link to="/social-media" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Social Media</Link></li>
              <li><Link to="/criacao-conteudo" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Criação de Conteúdo</Link></li>
              <li><Link to="/seo-inteligente" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">SEO Inteligente</Link></li>
              <li><Link to="/email-marketing" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Email Marketing</Link></li>
              <li><Link to="/analise-dados" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Análise de Dados</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Empresa</h3>
            <ul className="space-y-3">
              <li><Link to="/sobre-nos" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Sobre Nós</Link></li>
              <li><Link to="/carreiras" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Carreiras</Link></li>
              <li><Link to="/blog" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Blog</Link></li>
              <li><Link to="/casos-sucesso" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Casos de Sucesso</Link></li>
              <li><Link to="/parcerias" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Parcerias</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-blue-400" />
                <a href="mailto:contato@designoai.com.br" className="text-white/70 hover:text-white transition-colors">contato@designoai.com.br</a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-blue-400" />
                <a href="https://wa.me/5511947968158" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">+55 11 94796-8158</a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-white">Inscreva-se na nossa newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  className="glass-card bg-white/5 text-white placeholder-white/50 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-white/20 flex-1" 
                />
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 rounded-r-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 border border-white/20 border-l-0">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm">
              © 2025 DesignoAI. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/termos-uso" className="text-white/50 hover:text-white text-sm transition-colors">Termos de Uso</Link>
              <Link to="/politica-privacidade" className="text-white/50 hover:text-white text-sm transition-colors">Política de Privacidade</Link>
              <Link to="/cookies" className="text-white/50 hover:text-white text-sm transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
