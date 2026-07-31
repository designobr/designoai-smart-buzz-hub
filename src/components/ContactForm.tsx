import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import Reveal from '@/components/Reveal';
import ActionButton from '@/components/ActionButton';

const Field = ({
  id,
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { id: string; label: string }) => (
  <div>
    <label htmlFor={id} className="mb-2 block text-sm font-medium text-foreground">
      {label}
    </label>
    <input id={id} className="field" {...props} />
  </div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke('submit-contact-form', { body: formData });
      if (error) throw error;
      toast({ title: 'Solicitação enviada', description: 'Entraremos em contato em até 24 horas.' });
      setFormData({ name: '', email: '', phone: '', company: '', budget: '', message: '' });
    } catch (error) {
      console.error('Erro ao enviar formulário');
      toast({
        title: 'Erro ao enviar',
        description: 'Tente novamente ou fale com a gente pelo WhatsApp.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section id="contact" className="section border-t border-border">
      <div className="container-editorial">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Contato</p>
            <h2 className="display-2 mt-6 text-foreground">Vamos conversar sobre o seu projeto.</h2>
            <p className="lead mt-6 max-w-md">
              Conte o essencial e devolvemos uma proposta com escopo, prazo e investimento.
            </p>

            <dl className="mt-14 space-y-8 border-t border-border pt-8">
              <div>
                <dt className="eyebrow">WhatsApp</dt>
                <dd className="mt-2">
                  <a href="https://wa.me/5511947968158" className="link-underline text-base">
                    +55 11 94796-8158
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow">E-mail</dt>
                <dd className="mt-2">
                  <a href="mailto:contato@designoai.com.br" className="link-underline text-base">
                    contato@designoai.com.br
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Atendimento</dt>
                <dd className="mt-2 text-base text-muted-foreground">Segunda a sexta, 9h às 18h</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="card-surface space-y-6 p-10 md:p-12">
              <div className="grid gap-6 md:grid-cols-2">
                <Field
                  id="name"
                  name="name"
                  label="Nome completo"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                />
                <Field
                  id="email"
                  name="email"
                  type="email"
                  label="E-mail"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Field
                  id="phone"
                  name="phone"
                  type="tel"
                  label="WhatsApp"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(11) 99999-9999"
                />
                <Field
                  id="company"
                  name="company"
                  label="Empresa"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Nome da empresa"
                />
              </div>

              <div>
                <label htmlFor="budget" className="mb-2 block text-sm font-medium text-foreground">
                  Investimento mensal
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="field appearance-none"
                >
                  <option value="">Selecione uma faixa</option>
                  <option value="2000-4000">R$ 2.000 — R$ 4.000</option>
                  <option value="4000-6000">R$ 4.000 — R$ 6.000</option>
                  <option value="6000-10000">R$ 6.000 — R$ 10.000</option>
                  <option value="10000+">Acima de R$ 10.000</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                  Sobre o projeto
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Contexto, objetivos e prazos."
                  className="field h-auto resize-none py-4"
                />
              </div>

              <ActionButton type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} />}
                {isSubmitting ? 'Enviando' : 'Enviar solicitação'}
              </ActionButton>

              <p className="text-xs text-muted-foreground">
                Seus dados são usados apenas para o retorno comercial deste contato.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
