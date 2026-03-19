
import { Instagram, Phone, Mail, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSparkEffect } from '@/hooks/useSparkEffect';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const Footer = () => {
  const spark = useSparkEffect({ count: 6, spread: 40 });
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const handleNewsletter = () => {
    if (!email) return;
    toast({ title: "Inscrito com sucesso!", description: "Você receberá nossas novidades por e-mail." });
    setEmail('');
  };

  return (
    <footer className="bg-background pt-16 pb-8 relative">
      {/* Gradient separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6 group">
              <img
                src="/lovable-uploads/09cb8eca-27b9-431a-97cf-fd9a75f478f8.png"
                alt="DesignoAI Logo"
                className="w-8 h-8 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_hsl(195,100%,50%,0.5)]"
              />
              <span className="text-lg font-heading font-bold text-foreground">
                Designo<span className="text-primary">AI</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Transformando o marketing digital através da inteligência artificial para empresas de todos os tamanhos.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/designoai.br"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all duration-200"
                onClick={(e) => spark(e, 'ig')}
              >
                <Instagram size={18} />
              </a>
            </div>

            {/* Made with AI badge */}
            <div className="mt-4 inline-flex items-center px-3 py-1.5 glass rounded-full text-[10px] text-muted-foreground">
              <Sparkles className="w-3 h-3 mr-1.5 text-primary" />
              Feito com IA
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">Soluções</h3>
            <ul className="space-y-3">
              {[
                { to: '/ai-sdr', label: 'AI SDR' },
                { to: '/social-media', label: 'Social Media' },
                { to: '/criacao-conteudo', label: 'Criação de Conteúdo' },
                { to: '/seo-inteligente', label: 'SEO Inteligente' },
                { to: '/email-marketing', label: 'Email Marketing' },
                { to: '/analise-dados', label: 'Análise de Dados' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 relative group inline-block">
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">Empresa</h3>
            <ul className="space-y-3">
              {[
                { to: '/sobre-nos', label: 'Sobre Nós' },
                { to: '/carreiras', label: 'Carreiras' },
                { to: '/blog', label: 'Blog' },
                { to: '/casos-sucesso', label: 'Casos de Sucesso' },
                { to: '/parcerias', label: 'Parcerias' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 relative group inline-block">
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-primary" />
                <a href="mailto:contato@designoai.com.br" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  contato@designoai.com.br
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-primary" />
                <a href="https://wa.me/5511947968158" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  +55 11 94796-8158
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-xs font-medium text-foreground mb-3 uppercase tracking-wider">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu e-mail"
                  className="flex-1 bg-secondary text-foreground placeholder:text-muted-foreground px-3 py-2 rounded-l-lg text-sm border border-border focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-200"
                  onKeyDown={(e) => e.key === 'Enter' && handleNewsletter()}
                />
                <button
                  onClick={handleNewsletter}
                  className="bg-primary text-primary-foreground px-4 rounded-r-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-xs">
              © 2026 DesignoAI. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              {[
                { to: '/termos-uso', label: 'Termos de Uso' },
                { to: '/politica-privacidade', label: 'Privacidade' },
                { to: '/cookies', label: 'Cookies' },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-muted-foreground hover:text-foreground text-xs transition-colors relative group">
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
