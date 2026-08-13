import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SubpageLayout from '@/components/SubpageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Brain, Palette, TrendingUp, Users, Headphones, Target, Clock, Globe, Package, CheckCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/use-toast';
import { useI18n } from '@/i18n/I18nProvider';

const benefitIcons = [Target, Brain, Clock, Globe];
const fullBenefitIcons = [Target, Package, Clock, Globe, TrendingUp];
const jobIcons = [Code, Brain, TrendingUp, Palette, Users, Headphones];

type Job = {
  id: number;
  title: string;
  department: string;
  description: string;
  requirements: string[];
  icon: typeof Code;
};

const Carreiras = () => {
  const { t, tList } = useI18n();
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    portfolio: '',
    motivation: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = tList<{ title: string; description: string }>('company.carreiras.benefits')
    .map((b, i) => ({ ...b, icon: benefitIcons[i] ?? Target }));
  const fullBenefits = tList<string>('company.carreiras.fullBenefits')
    .map((text, i) => ({ text, icon: fullBenefitIcons[i] ?? Target }));
  const jobs: Job[] = tList<{ title: string; department: string; description: string; requirements: string[] }>('company.carreiras.jobs')
    .map((j, i) => ({ ...j, id: i + 1, icon: jobIcons[i] ?? Code }));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const unknownError = t('company.carreiras.toast.unknownError');
    try {
      if (!formData.name || !formData.email || !formData.position || !formData.experience || !formData.motivation) {
        toast({ title: t('company.carreiras.toast.missingFieldsTitle'), description: t('company.carreiras.toast.missingFieldsDescription'), variant: "destructive" });
        setIsSubmitting(false);
        return;
      }
      const { data, error } = await supabase.functions.invoke('submit-job-application', { body: formData });
      if (error) {
        toast({
          title: t('company.carreiras.toast.errorTitle'),
          description: t('company.carreiras.toast.submitErrorDescription').replace('{message}', error.message || unknownError),
          variant: "destructive",
        });
        return;
      }
      if (data?.error) {
        toast({
          title: t('company.carreiras.toast.errorTitle'),
          description: t('company.carreiras.toast.genericErrorDescription')
            .replace('{error}', String(data.error))
            .replace('{details}', data.details ? ` - ${data.details}` : ''),
          variant: "destructive",
        });
        return;
      }
      toast({ title: t('company.carreiras.toast.successTitle'), description: t('company.carreiras.toast.successDescription') });
      setFormData({ name: '', email: '', phone: '', position: '', experience: '', portfolio: '', motivation: '' });
    } catch (error) {
      const message = error instanceof Error ? error.message : unknownError;
      toast({
        title: t('company.carreiras.toast.errorTitle'),
        description: t('company.carreiras.toast.unexpectedErrorDescription').replace('{message}', message),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const textFields = [
    { id: 'name', label: t('company.carreiras.form.nameLabel'), type: 'text', required: true },
    { id: 'email', label: t('company.carreiras.form.emailLabel'), type: 'email', required: true },
    { id: 'phone', label: t('company.carreiras.form.phoneLabel'), type: 'tel', required: false },
    { id: 'portfolio', label: t('company.carreiras.form.portfolioLabel'), type: 'url', required: false },
  ] as const;

  return (
    <SubpageLayout
      title={t('company.carreiras.seo.title')}
      subtitle={t('company.carreiras.subtitle')}
      seoPath="/carreiras"
      seoDescription={t('company.carreiras.seo.description')}
      badge={t('company.carreiras.badge')}
    >
      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            <span className="text-foreground">{t('company.carreiras.whyWorkHere')}</span>
          </motion.h2>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((b, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Card className="card-surface border-border/50 hover:border-primary/30 transition-all duration-300 group h-full">
                  <CardHeader className="text-center pb-3">
                    <div className="mx-auto mb-3 p-3 rounded-xl bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                      <b.icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-lg text-foreground">{b.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <p className="text-muted-foreground text-sm">{b.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card className="card-surface border-border/50">
              <CardContent className="p-8 md:p-12">
                <h3 className="text-2xl font-heading font-bold text-center mb-8 text-foreground">{t('company.carreiras.fullBenefitsTitle')}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {fullBenefits.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Jobs */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            <span className="text-foreground">{t('company.carreiras.availableJobsTitle')}</span>
          </motion.h2>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {jobs.map((job) => (
              <motion.div key={job.id} variants={itemVariants}>
                <Card className="card-surface border-border/50 hover:border-primary/30 cursor-pointer transition-all duration-300 group h-full" onClick={() => setSelectedJob(job)}>
                  <CardHeader className="text-center pb-3">
                    <div className="mx-auto mb-3 p-3 rounded-xl bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                      <job.icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-lg text-foreground">{job.title}</CardTitle>
                    <CardDescription className="text-primary font-semibold">{job.department}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {job.requirements.slice(0, 3).map((req, i) => (
                        <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">{req}</span>
                      ))}
                      {job.requirements.length > 3 && <span className="text-xs text-muted-foreground px-2 py-1">+{job.requirements.length - 3}</span>}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {selectedJob && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Card className="card-surface border-primary/20 mb-12">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6 gap-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <selectedJob.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-foreground">{selectedJob.title}</h3>
                      <p className="text-primary font-semibold">{selectedJob.department}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">{selectedJob.description}</p>
                  <h4 className="font-semibold mb-4 text-foreground">{t('company.carreiras.allRequirements')}</h4>
                  <div className="grid md:grid-cols-2 gap-3 mb-6">
                    {selectedJob.requirements.map((req: string, i: number) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{req}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" onClick={() => setSelectedJob(null)}>{t('company.carreiras.closeDetails')}</Button>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </section>

      {/* Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <Card className="card-surface border-border/50">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-3xl text-foreground">{t('company.carreiras.form.title')}</CardTitle>
              <CardDescription className="text-muted-foreground text-lg">{t('company.carreiras.form.subtitle')}</CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <form onSubmit={handleSubmit} className="space-y-5">
                {textFields.map((field) => (
                  <div key={field.id} className="space-y-2">
                    <label htmlFor={field.id} className="block text-sm font-medium text-foreground">{field.label}</label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      required={field.required}
                      value={formData[field.id]}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                    />
                  </div>
                ))}
                <div className="space-y-2">
                  <label htmlFor="position" className="block text-sm font-medium text-foreground">{t('company.carreiras.form.positionLabel')}</label>
                  <select
                    id="position"
                    name="position"
                    required
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                  >
                    <option value="">{t('company.carreiras.form.positionPlaceholder')}</option>
                    {jobs.map((j) => <option key={j.id} value={j.title}>{j.title}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="experience" className="block text-sm font-medium text-foreground">{t('company.carreiras.form.experienceLabel')}</label>
                  <textarea
                    id="experience"
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors resize-none"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="motivation" className="block text-sm font-medium text-foreground">{t('company.carreiras.form.motivationLabel')}</label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    required
                    value={formData.motivation}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors resize-none"
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? t('company.carreiras.form.submitting') : t('company.carreiras.form.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </SubpageLayout>
  );
};

export default Carreiras;
