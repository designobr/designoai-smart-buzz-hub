
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Meu nome é ${formData.name}, da empresa ${formData.company}. ${formData.message} Meu email: ${formData.email}, telefone: ${formData.phone}`;
    window.open(`https://wa.me/5511947968158?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="floating-orb w-80 h-80 top-20 left-10" style={{ animationDelay: '1s' }}></div>
        <div className="floating-orb w-64 h-64 bottom-10 right-20" style={{ animationDelay: '3s' }}></div>
        <div className="floating-orb w-48 h-48 top-1/2 right-10" style={{ animationDelay: '5s' }}></div>
        <div className="absolute inset-0 mesh-gradient"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-6 py-3 glass-strong rounded-full text-blue-300 font-medium mb-8 border border-white/20 shadow-xl">
            <MessageCircle className="w-4 h-4 mr-2" />
            📞 Entre em Contato
          </div>
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Vamos Conversar Sobre Seu Projeto
          </h2>
          <p className="text-xl text-white/70">
            Nossa equipe está pronta para ajudar você a transformar seu marketing digital
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass-strong border border-white/20 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white text-center">
                Envie sua Mensagem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Seu Nome"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="glass bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-blue-400 focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Seu E-mail"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="glass bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-blue-400 focus:ring-blue-400"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Seu Telefone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="glass bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-blue-400 focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      name="company"
                      placeholder="Sua Empresa"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="glass bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-blue-400 focus:ring-blue-400"
                    />
                  </div>
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Conte-nos sobre seu projeto e como podemos ajudar..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="glass bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-blue-400 focus:ring-blue-400"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 hover:from-blue-600 hover:via-purple-600 hover:to-cyan-600 text-white shadow-xl hover:shadow-2xl transition-all duration-500 glass border border-white/20 group transform hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="glass-card border border-white/20 hover:glass-strong transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-xl animate-glow">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Telefone</h3>
                    <p className="text-white/70">+55 11 94796-8158</p>
                    <p className="text-sm text-white/50">Atendimento via WhatsApp</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border border-white/20 hover:glass-strong transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl animate-glow">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">E-mail</h3>
                    <p className="text-white/70">contato@designoai.com.br</p>
                    <p className="text-sm text-white/50">Resposta em até 24h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border border-white/20 hover:glass-strong transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-xl animate-glow">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Localização</h3>
                    <p className="text-white/70">São Paulo, Brasil</p>
                    <p className="text-sm text-white/50">Atendimento online nacional</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-strong border border-white/20 bg-gradient-to-br from-blue-500/10 to-purple-500/10">
              <CardContent className="p-8 text-center">
                <h3 className="font-bold text-white mb-4">Atendimento Rápido via WhatsApp</h3>
                <p className="text-white/70 mb-6">
                  Prefere conversar diretamente? Clique no botão abaixo e fale conosco agora mesmo!
                </p>
                <Button
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-xl hover:shadow-2xl transition-all duration-500 glass border border-white/20 group transform hover:-translate-y-1"
                  onClick={() => window.open('https://wa.me/5511947968158?text=Olá! Gostaria de saber mais sobre o DesignoAI.', '_blank')}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Conversar no WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
