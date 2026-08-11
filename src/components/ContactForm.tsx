import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import Reveal from '@/components/Reveal';
import ActionButton from '@/components/ActionButton';
import { useI18n } from '@/i18n/I18nProvider';

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
  const { t, tList } = useI18n();
  const budgetOptions = tList<{ value: string; label: string }>('forms.contact.budgetOptions');

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
      toast({
        title: t('forms.contact.toastSuccessTitle'),
        description: t('forms.contact.toastSuccessDescription'),
      });
      setFormData({ name: '', email: '', phone: '', company: '', budget: '', message: '' });
    } catch (error) {
      console.error('Erro ao enviar formulário');
      toast({
        title: t('forms.contact.toastErrorTitle'),
        description: t('forms.contact.toastErrorDescription'),
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
            <p className="eyebrow">{t('forms.contact.eyebrow')}</p>
            <h2 className="display-2 mt-6 text-foreground">{t('forms.contact.title')}</h2>
            <p className="lead mt-6 max-w-md">{t('forms.contact.description')}</p>

            <dl className="mt-14 space-y-8 border-t border-border pt-8">
              <div>
                <dt className="eyebrow">{t('forms.contact.whatsappLabel')}</dt>
                <dd className="mt-2">
                  <a href="https://wa.me/5511947968158" className="link-underline text-base">
                    +55 11 94796-8158
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow">{t('forms.contact.emailLabel')}</dt>
                <dd className="mt-2">
                  <a href="mailto:contato@designoai.com.br" className="link-underline text-base">
                    contato@designoai.com.br
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow">{t('forms.contact.hoursLabel')}</dt>
                <dd className="mt-2 text-base text-muted-foreground">{t('forms.contact.hoursValue')}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="card-surface space-y-6 p-10 md:p-12">
              <div className="grid gap-6 md:grid-cols-2">
                <Field
                  id="name"
                  name="name"
                  label={t('forms.contact.nameLabel')}
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('forms.contact.namePlaceholder')}
                />
                <Field
                  id="email"
                  name="email"
                  type="email"
                  label={t('forms.contact.emailFieldLabel')}
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('forms.contact.emailPlaceholder')}
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Field
                  id="phone"
                  name="phone"
                  type="tel"
                  label={t('forms.contact.phoneLabel')}
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t('forms.contact.phonePlaceholder')}
                />
                <Field
                  id="company"
                  name="company"
                  label={t('forms.contact.companyLabel')}
                  value={formData.company}
                  onChange={handleChange}
                  placeholder={t('forms.contact.companyPlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="budget" className="mb-2 block text-sm font-medium text-foreground">
                  {t('forms.contact.budgetLabel')}
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="field appearance-none"
                >
                  <option value="">{t('forms.contact.budgetPlaceholder')}</option>
                  {budgetOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                  {t('forms.contact.messageLabel')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('forms.contact.messagePlaceholder')}
                  className="field h-auto resize-none py-4"
                />
              </div>

              <ActionButton type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} />}
                {isSubmitting ? t('forms.contact.sending') : t('forms.contact.submit')}
              </ActionButton>

              <p className="text-xs text-muted-foreground">{t('forms.contact.privacyNote')}</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
