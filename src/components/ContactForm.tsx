
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MessageCircle, Send } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
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
      const { error } = await supabase
        .from('leads')
        .insert([formData]);

      if (error) {
        throw error;
      }

      toast({
        title: "Solicitação enviada com sucesso!",
        description: "Entraremos em contato em até 24 horas.",
      });

      // Limpar formulário
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
        variant: "destructive",
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
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-designoai-blue-dark mb-4">
              Vamos conversar sobre seu projeto?
            </h2>
            <p className="text-xl text-gray-600">
              Preencha o formulário e receba uma proposta personalizada em até 24 horas
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-designoai-blue-dark">
                  Solicite sua Proposta
                </CardTitle>
                <CardDescription>
                  Conte-nos sobre seu negócio e objetivos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">WhatsApp *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Empresa</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nome da sua empresa"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="budget">Orçamento Mensal</Label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full h-10 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-designoai-blue"
                    >
                      <option value="">Selecione uma faixa</option>
                      <option value="2000-4000">R$ 2.000 - R$ 4.000</option>
                      <option value="4000-6000">R$ 4.000 - R$ 6.000</option>
                      <option value="6000-10000">R$ 6.000 - R$ 10.000</option>
                      <option value="10000+">Acima de R$ 10.000</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Descreva seu projeto</Label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Conte-nos sobre seu negócio, objetivos e como podemos ajudar..."
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-designoai-blue resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-designoai-blue hover:bg-designoai-blue-dark"
                    disabled={isSubmitting}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Informações de Contato */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-designoai-blue-dark">
                    Contato Direto
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-designoai-blue mr-3" />
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <a href="https://wa.me/5511947968158" className="text-designoai-blue hover:underline">
                        +55 11 94796-8158
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-designoai-blue mr-3" />
                    <div>
                      <p className="font-medium">E-mail</p>
                      <a href="mailto:contato@designoai.com.br" className="text-designoai-blue hover:underline">
                        contato@designoai.com.br
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-designoai-blue-light">
                <CardContent className="pt-6">
                  <div className="flex items-start">
                    <MessageCircle className="w-6 h-6 text-designoai-blue mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-designoai-blue-dark mb-2">
                        Atendimento Personalizado
                      </h3>
                      <p className="text-sm text-gray-600">
                        Nossa equipe combina expertise humana com inteligência artificial para oferecer 
                        o melhor atendimento e soluções sob medida para seu negócio.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-designoai-blue to-designoai-blue-dark text-white">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">🔗 Vantagens Exclusivas</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Solução completa em um só lugar</li>
                    <li>• Suporte contínuo</li>
                    <li>• Material físico e digital integrado</li>
                    <li>• Pagamento em até 2x sem juros</li>
                  </ul>
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
