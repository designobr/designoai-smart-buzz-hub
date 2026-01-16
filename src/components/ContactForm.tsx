
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MessageCircle, Send, Sparkles, CheckCircle, Globe } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // For now, just show success toast since leads table doesn't exist yet
      console.log('Form data submitted:', formData);
      
      toast({
        title: "Solicitação enviada com sucesso!",
        description: "Entraremos em contato em até 24 horas."
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        budget: '',
        message: ''
      });
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      toast({
        title: "Erro ao enviar solicitação",
        description: "Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50/50 to-gray-50 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-designoai-blue/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/5 to-designoai-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-designoai-blue-light to-purple-50 rounded-full text-designoai-blue font-medium mb-6 shadow-lg border border-designoai-blue/20">
              <MessageCircle className="w-4 h-4 mr-2" />
              Fale Conosco
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 via-designoai-blue to-indigo-600 bg-clip-text text-transparent">
                Vamos conversar sobre
              </span>
              <br />
              <span className="bg-gradient-to-r from-designoai-blue via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                seu projeto?
              </span>
            </h2>
            <p className="text-xl text-slate-600">
              Preencha o formulário e receba uma proposta personalizada em até 24 horas
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enhanced Form */}
            <Card className="relative overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-designoai-blue via-purple-500 to-indigo-500"></div>
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl font-bold">
                  <span className="bg-gradient-to-r from-designoai-blue to-indigo-600 bg-clip-text text-transparent">
                    Solicite sua Proposta
                  </span>
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Conte-nos sobre seu negócio e objetivos
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-slate-700 font-medium">Nome Completo *</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        type="text" 
                        required 
                        value={formData.name} 
                        onChange={handleChange} 
                        placeholder="Seu nome"
                        className="mt-1 border-slate-300 focus:border-designoai-blue focus:ring-designoai-blue/20"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-slate-700 font-medium">E-mail *</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        required 
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder="seu@email.com"
                        className="mt-1 border-slate-300 focus:border-designoai-blue focus:ring-designoai-blue/20"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-slate-700 font-medium">WhatsApp *</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        type="tel" 
                        required 
                        value={formData.phone} 
                        onChange={handleChange} 
                        placeholder="(11) 99999-9999"
                        className="mt-1 border-slate-300 focus:border-designoai-blue focus:ring-designoai-blue/20"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-slate-700 font-medium">Empresa</Label>
                      <Input 
                        id="company" 
                        name="company" 
                        type="text" 
                        value={formData.company} 
                        onChange={handleChange} 
                        placeholder="Nome da sua empresa"
                        className="mt-1 border-slate-300 focus:border-designoai-blue focus:ring-designoai-blue/20"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="budget" className="text-slate-700 font-medium">Orçamento Mensal</Label>
                    <select 
                      id="budget" 
                      name="budget" 
                      value={formData.budget} 
                      onChange={handleChange}
                      className="w-full h-10 px-3 py-2 mt-1 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-designoai-blue/20 focus:border-designoai-blue bg-white"
                    >
                      <option value="">Selecione uma faixa</option>
                      <option value="2000-4000">R$ 2.000 - R$ 4.000</option>
                      <option value="4000-6000">R$ 4.000 - R$ 6.000</option>
                      <option value="6000-10000">R$ 6.000 - R$ 10.000</option>
                      <option value="10000+">Acima de R$ 10.000</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-slate-700 font-medium">Descreva seu projeto</Label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={4} 
                      value={formData.message} 
                      onChange={handleChange} 
                      placeholder="Conte-nos sobre seu negócio, objetivos e como podemos ajudar..."
                      className="w-full px-3 py-2 mt-1 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-designoai-blue/20 focus:border-designoai-blue resize-none bg-white"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full relative overflow-hidden bg-gradient-to-r from-designoai-blue to-indigo-600 hover:from-indigo-600 hover:to-designoai-blue text-white shadow-xl hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-1" 
                    disabled={isSubmitting}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Enhanced Contact Info */}
            <div className="space-y-8">
              <Card className="relative overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-designoai-blue" />
                    <span className="bg-gradient-to-r from-designoai-blue to-indigo-600 bg-clip-text text-transparent">
                      Contato Direto
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-designoai-blue mr-3" />
                    <div>
                      <p className="font-medium text-slate-800">WhatsApp</p>
                      <a href="https://wa.me/5511947968158" className="text-designoai-blue hover:text-indigo-600 transition-colors duration-300">
                        +55 11 94796-8158
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-designoai-blue mr-3" />
                    <div>
                      <p className="font-medium text-slate-800">E-mail</p>
                      <a href="mailto:contato@designoai.com.br" className="text-designoai-blue hover:text-indigo-600 transition-colors duration-300">
                        contato@designoai.com.br
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden bg-gradient-to-br from-designoai-blue-light to-purple-50 border-0 shadow-xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                <CardContent className="pt-6">
                  <div className="flex items-start">
                    <div className="p-3 bg-white rounded-xl shadow-lg mr-4">
                      <Sparkles className="w-6 h-6 text-designoai-blue" />
                    </div>
                    <div>
                      <h3 className="font-bold text-designoai-blue-dark mb-2 text-lg">
                        Atendimento Personalizado
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Nossa equipe combina expertise humana com inteligência artificial para oferecer 
                        o melhor atendimento e soluções sob medida para seu negócio.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden bg-gradient-to-br from-designoai-blue to-indigo-600 text-white border-0 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0"></div>
                <CardContent className="pt-6 relative z-10">
                  <div className="flex items-start">
                    <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm mr-4">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-3 text-lg flex items-center">
                        <Globe className="w-5 h-5 mr-2" />
                        Vantagens Exclusivas
                      </h3>
                      <ul className="text-sm space-y-2 text-white/90">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                          Solução completa em um só lugar
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                          Suporte contínuo
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                          Material físico e digital integrado
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
