import { Instagram, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-designoai-blue-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img src="/star-icon.svg" alt="DesignoAI Logo" className="w-8 h-8" />
              <span className="text-xl font-bold">DesignoAI</span>
            </div>
            <p className="text-gray-300 mb-6">
              Transformando o marketing digital através da inteligência artificial para empresas de todos os tamanhos.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/designoai.app" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-designoai-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.threads.com/@designoai.app" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-designoai-blue transition-colors">
                {/* Custom Threads icon SVG */}
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
            <h3 className="text-lg font-semibold mb-6">Soluções</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Social Media</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Criação de Conteúdo</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">SEO Inteligente</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Email Marketing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Análise de Dados</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Empresa</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Carreiras</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Casos de Sucesso</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Parcerias</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-designoai-blue" />
                <a href="mailto:suportedesigno@gmail.com" className="text-gray-300 hover:text-white transition-colors">suportedesigno@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-designoai-blue" />
                <a href="https://wa.me/5511947968158" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">+55 11 94796-8158</a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Inscreva-se na nossa newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  className="bg-white/10 text-white placeholder-gray-400 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-designoai-blue" 
                />
                <button className="bg-designoai-blue text-white px-4 rounded-r-lg hover:bg-designoai-blue/90 transition-colors">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 DesignoAI. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Termos de Uso</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Política de Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
