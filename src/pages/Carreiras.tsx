
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Carreiras = () => {
  const [selectedJob, setSelectedJob] = useState(null);
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

  const jobs = [
    {
      id: 1,
      title: "Desenvolvedor Full Stack",
      department: "Tecnologia",
      description: "Responsável pelo desenvolvimento de funcionalidades front-end e back-end da nossa plataforma de IA.",
      requirements: ["React.js", "Node.js", "TypeScript", "Python", "Experiência com APIs"]
    },
    {
      id: 2,
      title: "Cientista de Dados",
      department: "Tecnologia",
      description: "Desenvolvimento de modelos de machine learning e análise de dados para otimização das campanhas.",
      requirements: ["Python", "Machine Learning", "TensorFlow", "SQL", "Estatística"]
    },
    {
      id: 3,
      title: "Especialista em Marketing Digital",
      department: "Marketing",
      description: "Criação e execução de estratégias de marketing digital para nossos clientes e para a própria empresa.",
      requirements: ["Google Ads", "Facebook Ads", "SEO/SEM", "Analytics", "Growth Hacking"]
    },
    {
      id: 4,
      title: "Designer UX/UI",
      department: "Design",
      description: "Design de interfaces intuitivas e experiências de usuário excepcionais para nossa plataforma.",
      requirements: ["Figma", "Adobe Creative Suite", "Prototipagem", "Design System", "User Research"]
    },
    {
      id: 5,
      title: "Consultor Comercial",
      department: "Vendas",
      description: "Prospecção e fechamento de novos clientes, apresentação de soluções e consultoria comercial.",
      requirements: ["Vendas B2B", "CRM", "Negociação", "Consultiva", "Relacionamento"]
    },
    {
      id: 6,
      title: "Customer Success",
      department: "Atendimento",
      description: "Garantir o sucesso dos nossos clientes, onboarding, suporte e identificação de oportunidades de upsell.",
      requirements: ["Atendimento ao Cliente", "Análise de Dados", "Comunicação", "Proatividade"]
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Candidatura - ${formData.position}`;
    const body = `Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Cargo de Interesse: ${formData.position}
Experiência: ${formData.experience}
Portfólio/LinkedIn: ${formData.portfolio}
Motivação: ${formData.motivation}`;
    
    const encodedBody = encodeURIComponent(body);
    const encodedSubject = encodeURIComponent(subject);
    window.open(`mailto:carreiras@designoai.com.br?subject=${encodedSubject}&body=${encodedBody}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-bold text-designoai-blue-dark mb-8 text-center">
              Carreiras
            </h1>
            
            <div className="prose prose-lg mx-auto text-gray-600 mb-16 max-w-4xl">
              <p className="text-xl leading-relaxed mb-6">
                Junte-se à DesignoAI e faça parte de uma equipe inovadora que está revolucionando o marketing digital através da inteligência artificial. Aqui, você terá a oportunidade de crescer profissionalmente enquanto impacta positivamente milhares de empresas.
              </p>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Por que trabalhar na DesignoAI?</h2>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Ambiente de trabalho colaborativo e inspirador</li>
                <li>Oportunidades de aprendizado contínuo em tecnologias de ponta</li>
                <li>Cultura de inovação e experimentação</li>
                <li>Flexibilidade de horários e trabalho remoto</li>
                <li>Planos de carreira personalizados</li>
                <li>Participação em projetos de impacto nacional</li>
                <li>Salário competitivo e pacote de benefícios completo</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-designoai-blue-dark mb-8 text-center">Vagas Disponíveis</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {jobs.map((job) => (
                <Card key={job.id} className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setSelectedJob(job)}>
                  <CardHeader>
                    <CardTitle className="text-designoai-blue-dark">{job.title}</CardTitle>
                    <CardDescription className="text-designoai-blue">{job.department}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    <div className="space-y-1">
                      <p className="font-semibold text-sm">Requisitos:</p>
                      {job.requirements.slice(0, 3).map((req, index) => (
                        <span key={index} className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs mr-1 mb-1">
                          {req}
                        </span>
                      ))}
                      {job.requirements.length > 3 && (
                        <span className="text-xs text-gray-500">+{job.requirements.length - 3} mais</span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {selectedJob && (
              <div className="bg-white border rounded-lg p-8 mb-16">
                <h3 className="text-2xl font-bold text-designoai-blue-dark mb-4">{selectedJob.title}</h3>
                <p className="text-gray-600 mb-6">{selectedJob.description}</p>
                
                <h4 className="font-semibold mb-3">Requisitos:</h4>
                <ul className="list-disc pl-6 mb-6">
                  {selectedJob.requirements.map((req, index) => (
                    <li key={index} className="text-gray-600">{req}</li>
                  ))}
                </ul>
                
                <Button onClick={() => setSelectedJob(null)} variant="outline">
                  Fechar Detalhes
                </Button>
              </div>
            )}

            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-designoai-blue-dark">Candidate-se</CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e envie sua candidatura
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-designoai-blue"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-designoai-blue"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-designoai-blue"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                      Cargo de Interesse
                    </label>
                    <select
                      id="position"
                      name="position"
                      required
                      value={formData.position}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-designoai-blue"
                    >
                      <option value="">Selecione um cargo</option>
                      {jobs.map((job) => (
                        <option key={job.id} value={job.title}>{job.title}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                      Experiência Profissional
                    </label>
                    <textarea
                      id="experience"
                      name="experience"
                      rows={3}
                      required
                      value={formData.experience}
                      onChange={handleInputChange}
                      placeholder="Descreva sua experiência relevante..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-designoai-blue"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-1">
                      Portfólio/LinkedIn
                    </label>
                    <input
                      type="url"
                      id="portfolio"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      placeholder="https://..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-designoai-blue"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-1">
                      Por que quer trabalhar na DesignoAI?
                    </label>
                    <textarea
                      id="motivation"
                      name="motivation"
                      rows={3}
                      required
                      value={formData.motivation}
                      onChange={handleInputChange}
                      placeholder="Conte-nos sua motivação..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-designoai-blue"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-designoai-blue hover:bg-designoai-blue-dark">
                    Enviar Candidatura
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Carreiras;
