import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Brain, Palette, TrendingUp, Users, Headphones, Target, Clock, Globe, Heart } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/use-toast';
const Carreiras = () => {
  const [selectedJob, setSelectedJob] = useState(null);
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
  const benefits = [{
    icon: Target,
    title: "Ambiente Colaborativo",
    description: "Trabalhe em equipe inspiradora"
  }, {
    icon: Brain,
    title: "Aprendizado Contínuo",
    description: "Tecnologias de ponta sempre"
  }, {
    icon: Clock,
    title: "Flexibilidade",
    description: "Horários e trabalho remoto"
  }, {
    icon: Globe,
    title: "Projetos de Impacto",
    description: "Transforme empresas pelo Brasil"
  }];
  const handleInputChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Validar campos obrigatórios
      if (!formData.name || !formData.email || !formData.position || !formData.experience || !formData.motivation) {
        toast({
          title: "Erro",
          description: "Por favor, preencha todos os campos obrigatórios.",
          variant: "destructive"
        });
        setIsSubmitting(false);
        return;
      }
      console.log('Enviando candidatura:', formData);

      // Chamar a edge function
      const {
        data,
        error
      } = await supabase.functions.invoke('submit-job-application', {
        body: formData
      });
      console.log('Resposta da função:', {
        data,
        error
      });
      if (error) {
        console.error('Erro ao enviar candidatura:', error);
        toast({
          title: "Erro",
          description: `Ocorreu um erro ao enviar sua candidatura: ${error.message || 'Erro desconhecido'}`,
          variant: "destructive"
        });
        return;
      }

      // Verificar se a resposta contém erro
      if (data?.error) {
        console.error('Erro retornado pela função:', data);
        toast({
          title: "Erro",
          description: `Erro: ${data.error}${data.details ? ` - ${data.details}` : ''}`,
          variant: "destructive"
        });
        return;
      }

      // Sucesso
      toast({
        title: "Candidatura enviada!",
        description: "Sua candidatura foi enviada com sucesso. Entraremos em contato em breve."
      });

      // Limpar formulário
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        portfolio: '',
        motivation: ''
      });
    } catch (error) {
      console.error('Erro inesperado ao enviar candidatura:', error);
      toast({
        title: "Erro",
        description: `Ocorreu um erro inesperado: ${error.message || 'Erro desconhecido'}`,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const jobs = [{
    id: 1,
    title: "Desenvolvedor Full Stack",
    department: "Tecnologia",
    icon: Code,
    description: "Responsável pelo desenvolvimento de funcionalidades front-end e back-end da nossa plataforma de IA.",
    requirements: ["React.js", "Node.js", "TypeScript", "Python", "Experiência com APIs"]
  }, {
    id: 2,
    title: "Cientista de Dados",
    department: "Tecnologia",
    icon: Brain,
    description: "Desenvolvimento de modelos de machine learning e análise de dados para otimização das campanhas.",
    requirements: ["Python", "Machine Learning", "TensorFlow", "SQL", "Estatística"]
  }, {
    id: 3,
    title: "Especialista em Marketing Digital",
    department: "Marketing",
    icon: TrendingUp,
    description: "Criação e execução de estratégias de marketing digital para nossos clientes e para a própria empresa.",
    requirements: ["Google Ads", "Facebook Ads", "SEO/SEM", "Analytics", "Growth Hacking"]
  }, {
    id: 4,
    title: "Designer UX/UI",
    department: "Design",
    icon: Palette,
    description: "Design de interfaces intuitivas e experiências de usuário excepcionais para nossa plataforma.",
    requirements: ["Figma", "Adobe Creative Suite", "Prototipagem", "Design System", "User Research"]
  }, {
    id: 5,
    title: "Consultor Comercial",
    department: "Vendas",
    icon: Users,
    description: "Prospecção e fechamento de novos clientes, apresentação de soluções e consultoria comercial.",
    requirements: ["Vendas B2B", "CRM", "Negociação", "Consultiva", "Relacionamento"]
  }, {
    id: 6,
    title: "Customer Success",
    department: "Atendimento",
    icon: Headphones,
    description: "Garantir o sucesso dos nossos clientes, onboarding, suporte e identificação de oportunidades de upsell.",
    requirements: ["Atendimento ao Cliente", "Análise de Dados", "Comunicação", "Proatividade"]
  }];
  return <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-designoai-blue-light/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-designoai-blue/5 via-transparent to-purple-400/10"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-designoai-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-r from-designoai-blue/20 to-purple-400/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-designoai-blue-dark via-designoai-blue to-purple-600 bg-clip-text text-transparent leading-tight">
              Carreiras
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Junte-se à DesignoAI e faça parte de uma equipe inovadora que está revolucionando o marketing digital através da inteligência artificial.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-designoai-blue-dark to-designoai-blue bg-clip-text text-transparent">
            Por que trabalhar na DesignoAI?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/70 backdrop-blur-sm hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-designoai-blue/20 to-purple-400/20 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-designoai-blue" />
                  </div>
                  <CardTitle className="text-lg text-designoai-blue-dark group-hover:text-designoai-blue transition-colors">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>)}
          </div>

          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-designoai-blue-dark to-designoai-blue bg-clip-text text-transparent">
                Benefícios Completos
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Heart className="w-5 h-5 text-designoai-blue mr-3" />
                    <span className="text-gray-700">Plano de saúde e odontológico</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-5 h-5 text-designoai-blue mr-3" />
                    <span className="text-gray-700">Planos de carreira personalizados</span>
                  </div>
                  
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-designoai-blue mr-3" />
                    <span className="text-gray-700">Horário flexível</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-designoai-blue mr-3" />
                    <span className="text-gray-700">Trabalho remoto</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-designoai-blue mr-3" />
                    <span className="text-gray-700">Participação nos resultados</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Jobs Grid */}
      <section className="py-20 bg-gradient-to-r from-designoai-blue/5 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-designoai-blue-dark to-designoai-blue bg-clip-text text-transparent">
            Vagas Disponíveis
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {jobs.map(job => <Card key={job.id} className="cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/70 backdrop-blur-sm hover:scale-105" onClick={() => setSelectedJob(job)}>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-designoai-blue/20 to-purple-400/20 rounded-2xl w-fit">
                    <job.icon className="w-8 h-8 text-designoai-blue" />
                  </div>
                  <CardTitle className="text-xl text-designoai-blue-dark">{job.title}</CardTitle>
                  <CardDescription className="text-designoai-blue font-semibold">{job.department}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">{job.description}</p>
                  <div className="space-y-1">
                    <p className="font-semibold text-sm text-gray-700">Principais requisitos:</p>
                    {job.requirements.slice(0, 3).map((req, index) => <span key={index} className="inline-block bg-gradient-to-r from-designoai-blue-light/50 to-purple-100 text-designoai-blue-dark px-3 py-1 rounded-full text-xs mr-1 mb-1">
                        {req}
                      </span>)}
                    {job.requirements.length > 3 && <span className="text-xs text-gray-500">+{job.requirements.length - 3} mais</span>}
                  </div>
                </CardContent>
              </Card>)}
          </div>

          {selectedJob && <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm mb-16">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-designoai-blue/20 to-purple-400/20 rounded-2xl mr-4">
                    <selectedJob.icon className="w-8 h-8 text-designoai-blue" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-designoai-blue-dark">{selectedJob.title}</h3>
                    <p className="text-designoai-blue font-semibold">{selectedJob.department}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{selectedJob.description}</p>
                
                <h4 className="font-semibold mb-3 text-designoai-blue-dark">Todos os requisitos:</h4>
                <div className="grid md:grid-cols-2 gap-3 mb-6">
                  {selectedJob.requirements.map((req, index) => <div key={index} className="flex items-center p-3 bg-gradient-to-r from-designoai-blue-light/30 to-purple-50 rounded-lg">
                      <div className="bg-designoai-blue rounded-full p-1 mr-3">
                        <div className="bg-white rounded-full w-2 h-2"></div>
                      </div>
                      <span className="text-gray-700">{req}</span>
                    </div>)}
                </div>
                
                <Button onClick={() => setSelectedJob(null)} variant="outline" className="border-designoai-blue text-designoai-blue hover:bg-designoai-blue hover:text-white">
                  Fechar Detalhes
                </Button>
              </CardContent>
            </Card>}
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-3xl text-center bg-gradient-to-r from-designoai-blue-dark to-designoai-blue bg-clip-text text-transparent">
                Candidate-se
              </CardTitle>
              <CardDescription className="text-center text-lg">
                Preencha o formulário abaixo e envie sua candidatura
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome Completo *
                  </label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-designoai-blue focus:border-transparent transition-colors" />
                </div>
                  
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail *
                  </label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-designoai-blue focus:border-transparent transition-colors" />
                </div>
                  
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-designoai-blue focus:border-transparent transition-colors" />
                </div>
                  
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                    Cargo de Interesse *
                  </label>
                  <select id="position" name="position" required value={formData.position} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-designoai-blue focus:border-transparent transition-colors">
                    <option value="">Selecione um cargo</option>
                    {jobs.map(job => <option key={job.id} value={job.title}>{job.title}</option>)}
                  </select>
                </div>
                  
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                    Experiência Profissional *
                  </label>
                  <textarea id="experience" name="experience" rows={3} required value={formData.experience} onChange={handleInputChange} placeholder="Descreva sua experiência relevante..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-designoai-blue focus:border-transparent transition-colors" />
                </div>
                  
                <div>
                  <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-1">
                    Portfólio/LinkedIn
                  </label>
                  <input type="url" id="portfolio" name="portfolio" value={formData.portfolio} onChange={handleInputChange} placeholder="https://..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-designoai-blue focus:border-transparent transition-colors" />
                </div>
                  
                <div>
                  <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-1">
                    Por que quer trabalhar na DesignoAI? *
                  </label>
                  <textarea id="motivation" name="motivation" rows={3} required value={formData.motivation} onChange={handleInputChange} placeholder="Conte-nos sua motivação..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-designoai-blue focus:border-transparent transition-colors" />
                </div>
                
                <Button type="submit" disabled={isSubmitting} className="w-full bg-designoai-blue hover:bg-designoai-blue-dark text-white py-3 text-lg disabled:opacity-50">
                  {isSubmitting ? "Enviando..." : "Enviar Candidatura"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Carreiras;