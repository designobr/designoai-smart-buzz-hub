
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MessageCircle, Send, CheckCircle, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

const FloatingInput = ({
  id, name, type = 'text', required = false, value, onChange, label,
}: {
  id: string; name: string; type?: string; required?: boolean; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; label: string;
}) => (
  <div className="relative group">
    <input
      id={id}
      name={name}
      type={type}
      required={required}
      value={value}
      onChange={onChange}
      placeholder=" "
      className="peer w-full h-12 px-4 pt-4 pb-1 text-sm bg-secondary border border-border rounded-lg text-foreground placeholder-transparent focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
    />
    <label
      htmlFor={id}
      className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-muted-foreground transition-all duration-200 pointer-events-none peer-focus:top-3 peer-focus:text-[10px] peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:text-[10px]"
    >
      {label}{required ? ' *' : ''}
    </label>
  </div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', budget: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const filledCount = Object.values(formData).filter(Boolean).length;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke('submit-contact-form', {
        body: formData
      });
      if (error) throw error;
      toast({ title: "Solicitação enviada!", description: "Entraremos em contato em até 24 horas." });
      setFormData({ name: '', email: '', phone: '', company: '', budget: '', message: '' });
    } catch (error) {
      console.error('Erro ao enviar formulário');
      toast({ title: "Erro ao enviar", description: "Tente novamente ou entre em contato pelo WhatsApp.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 glass rounded-full text-sm font-medium text-primary mb-6">
              <MessageCircle className="w-4 h-4 mr-2" />
              Contato
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              <span className="text-foreground">Vamos conversar sobre </span>
              <span className="text-gradient">seu projeto?</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Preencha o formulário e receba uma proposta personalizada
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="glass rounded-2xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-gradient mb-1">Solicite sua Proposta</h3>
                    <p className="text-sm text-muted-foreground">Conte-nos sobre seu negócio</p>
                  </div>
                  {/* Progress ring */}
                  <div className="relative w-10 h-10">
                    <svg className="w-10 h-10 -rotate-90" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="15" fill="none" stroke="hsl(var(--border))" strokeWidth="2" />
                      <motion.circle
                        cx="18" cy="18" r="15" fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray={94.2}
                        animate={{ strokeDashoffset: 94.2 - (filledCount / 6) * 94.2 }}
                        transition={{ duration: 0.3 }}
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-primary">
                      {filledCount}/6
                    </span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FloatingInput id="name" name="name" required value={formData.name} onChange={handleChange} label="Nome Completo" />
                    <FloatingInput id="email" name="email" type="email" required value={formData.email} onChange={handleChange} label="E-mail" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <FloatingInput id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} label="WhatsApp" />
                    <FloatingInput id="company" name="company" value={formData.company} onChange={handleChange} label="Empresa" />
                  </div>

                  <div>
                    <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className="w-full h-12 px-4 text-sm bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-200">
                      <option value="">Orçamento Mensal</option>
                      <option value="2000-4000">R$ 2.000 - R$ 4.000</option>
                      <option value="4000-6000">R$ 4.000 - R$ 6.000</option>
                      <option value="6000-10000">R$ 6.000 - R$ 10.000</option>
                      <option value="10000+">Acima de R$ 10.000</option>
                    </select>
                  </div>

                  <div className="relative group">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Conte-nos sobre seu negócio..."
                      className="w-full px-4 py-3 text-sm bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary resize-none transition-all duration-200"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-sm group h-12" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4 mr-2" />
                    )}
                    {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
                  </Button>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="glass rounded-2xl p-6">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-4 flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-primary" />
                  Contato Direto
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                    <Phone className="w-4 h-4 text-primary mr-3" />
                    <div>
                      <p className="text-xs text-muted-foreground">WhatsApp</p>
                      <a href="https://wa.me/5511965262002" className="text-sm text-foreground hover:text-primary transition-colors">+55 11 96526-2002</a>
                    </div>
                  </div>
                  <div className="flex items-center p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                    <Mail className="w-4 h-4 text-primary mr-3" />
                    <div>
                      <p className="text-xs text-muted-foreground">E-mail</p>
                      <a href="mailto:contato@designoai.com.br" className="text-sm text-foreground hover:text-primary transition-colors">contato@designoai.com.br</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 border-primary/10">
                <div className="flex items-start">
                  <div className="p-2 bg-primary/10 rounded-xl mr-4">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-2">Vantagens Exclusivas</h3>
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      <li className="flex items-center"><CheckCircle className="w-3 h-3 mr-2 text-primary" />Solução completa em um só lugar</li>
                      <li className="flex items-center"><CheckCircle className="w-3 h-3 mr-2 text-primary" />Suporte contínuo</li>
                      <li className="flex items-center"><CheckCircle className="w-3 h-3 mr-2 text-primary" />Material físico e digital integrado</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
