import { motion } from 'framer-motion';
import { useState } from 'react';
import { Phone, Mail, Instagram, Linkedin, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';

// Gallery images
import example1 from '@/assets/studio/example-1.png';
import example2 from '@/assets/studio/example-2.png';
import example3 from '@/assets/studio/example-3.png';
import example4 from '@/assets/studio/example-4.png';
import example5 from '@/assets/studio/example-5.png';
import example6 from '@/assets/studio/example-6.png';
import example7 from '@/assets/studio/example-7.png';
import example8 from '@/assets/studio/example-8.png';

const Studio = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511965262002', '_blank');
  };

  const targetAudience = [
    { icon: '💼', title: 'Empreendedores & Coaches', description: 'Transmita autoridade e profissionalismo em seus canais digitais' },
    { icon: '⚖️', title: 'Profissionais Liberais', description: 'Advogados, corretores, consultores e mentores que fortalecem sua marca pessoal' },
    { icon: '📱', title: 'Criadores de Conteúdo', description: 'Eleve a qualidade visual do seu feed e perfil profissional' },
    { icon: '🎯', title: 'Executivos & Lideranças', description: 'Imagens profissionais para LinkedIn, site corporativo e materiais institucionais' },
  ];

  const benefits = [
    { icon: '🎨', title: 'Alta Qualidade', description: 'IA treinada em fotografia profissional, direção de arte e personal branding. Preservação natural da sua identidade única.' },
    { icon: '⚡', title: 'Entrega em 24h', description: 'Receba suas fotos profissionais em até 24 horas. Sem deslocamento, sem estúdio, 100% online.' },
    { icon: '🔒', title: 'Privacidade Total', description: 'Seus dados protegidos com criptografia. Processamento seguro e confidencial.' },
    { icon: '✅', title: 'Garantia Absoluta', description: 'Satisfação garantida ou seu dinheiro de volta. Sem perguntas, sem burocracia.' },
  ];

  const traditionalList = [
    'Investimento a partir de R$ 800',
    'Entrega em 15 a 30 dias',
    'Deslocamento necessário',
    'Custos adicionais com produção',
    'Refações pagas separadamente',
  ];

  const designoaiList = [
    'Valor acessível e previsível',
    'Entrega em até 24 horas',
    '100% online, zero deslocamento',
    'Tudo incluído no pacote',
    'Garantia de satisfação total',
  ];

  const steps = [
    { icon: '1️⃣', title: 'Contratação', description: 'Escolha o pacote ideal e finalize sua compra de forma segura.' },
    { icon: '2️⃣', title: 'Envio das Selfies', description: 'Envie 5 a 10 selfies simples tiradas com seu celular. Sem produção prévia necessária.' },
    { icon: '3️⃣', title: 'Processamento IA', description: 'Nossa IA recria você em cenários profissionais de alto padrão.' },
    { icon: '4️⃣', title: 'Entrega', description: 'Receba seu pack completo em até 24h, pronto para usar.' },
  ];

  const faqs = [
    { question: 'As fotos parecem artificiais?', answer: 'Não. Nossa tecnologia é focada em realismo e preservação da sua identidade natural. As fotos têm qualidade profissional mantendo sua essência e características únicas.' },
    { question: 'Preciso de equipamento profissional para as selfies?', answer: 'Não. Basta usar a câmera do seu celular em um ambiente bem iluminado. Enviamos um guia simples de como tirar as selfies ideais.' },
    { question: 'Posso escolher os cenários e estilos?', answer: 'Sim. Você pode indicar suas preferências: corporativo, criativo, casual-profissional ou outros estilos alinhados ao seu posicionamento.' },
    { question: 'E se eu não gostar do resultado?', answer: 'Oferecemos garantia de satisfação total. Se não ficar satisfeito, devolvemos 100% do seu investimento.' },
    { question: 'Os dados das minhas fotos ficam seguros?', answer: 'Absolutamente. Trabalhamos com protocolos rigorosos de privacidade e segurança. Suas fotos são processadas de forma criptografada e nunca compartilhadas.' },
  ];

  const contacts = [
    { icon: <Phone className="w-8 h-8" />, title: 'WhatsApp', info: '(11) 96526-2002', subtitle: 'Atendimento direto', link: 'https://wa.me/5511965262002' },
    { icon: <Mail className="w-8 h-8" />, title: 'E-mail', info: 'contato@designoai.com.br', subtitle: 'Suporte ao cliente', link: 'mailto:contato@designoai.com.br' },
    { icon: <Instagram className="w-8 h-8" />, title: 'Instagram', info: '@designoai.br', subtitle: 'Conteúdos e novidades', link: 'https://instagram.com/designoai.br' },
    { icon: <Linkedin className="w-8 h-8" />, title: 'LinkedIn', info: 'Kauê Webster', subtitle: 'Perfil do fundador', link: 'https://www.linkedin.com/in/kauewebster' },
  ];

  const galleryImages = [example1, example2, example3, example4, example5, example6, example7, example8];

  const testimonials = [
    {
      name: 'Marina Costa',
      role: 'Coach de Carreira',
      image: example5,
      rating: 5,
      text: 'Simplesmente incrível! As fotos ficaram tão profissionais que todos perguntam qual fotógrafo eu contratei. Recomendo demais!'
    },
    {
      name: 'Ricardo Almeida',
      role: 'Empreendedor Digital',
      image: example6,
      rating: 5,
      text: 'Nunca imaginei que fotos geradas por IA pudessem ser tão realistas. A entrega foi super rápida e o resultado superou minhas expectativas.'
    },
    {
      name: 'Juliana Santos',
      role: 'Advogada',
      image: example7,
      rating: 5,
      text: 'Precisava de fotos profissionais para meu escritório e a DesignoAI entregou exatamente o que eu precisava. Qualidade excepcional!'
    },
    {
      name: 'Carlos Mendes',
      role: 'CEO & Consultor',
      image: example8,
      rating: 5,
      text: 'Como executivo, transmitir credibilidade é essencial. As fotos da DesignoAI me ajudaram a elevar minha presença no LinkedIn.'
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <Navbar variant="dark" />
      
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden flex items-center justify-center text-center px-4 pt-20 pb-16">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#667eea] bg-[length:400%_400%] animate-[gradient_15s_ease_infinite]" />
        
        {/* Floating radial gradient */}
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div 
          className="relative z-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl">
            DesignoAI Studio
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-4">
            Fotos profissionais de alta qualidade criadas com inteligência artificial
          </p>
          <div className="inline-block bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-white border border-white/30 my-8">
            ✨ Mais de 500 profissionais já transformaram sua presença digital
          </div>
          <div>
            <button 
              onClick={handleWhatsAppClick}
              className="inline-block bg-white text-[#667eea] px-8 py-4 text-lg md:text-xl font-bold rounded-full shadow-2xl hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)] transition-all duration-300 mt-4"
            >
              Começar Minha Transformação
            </button>
          </div>
        </motion.div>
      </section>

      {/* Para Quem Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} viewport={{ once: true }} whileInView="animate" initial="initial">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-4">
              Para Quem é o DesignoAI Studio
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#667eea] to-[#764ba2] mx-auto rounded-full mb-12" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudience.map((item, index) => (
              <motion.div
                key={index}
                className="group bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:-translate-y-2 hover:border-[#667eea]/50 hover:shadow-[0_20px_40px_rgba(102,126,234,0.2)] transition-all duration-400 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-[100%] transition-all duration-500" />
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/80 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Por Que Escolher Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} viewport={{ once: true }} whileInView="animate" initial="initial">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-4">
              Por Que Escolher a DesignoAI
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#667eea] to-[#764ba2] mx-auto rounded-full mb-12" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                className="group bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:-translate-y-2 hover:border-[#667eea]/50 hover:shadow-[0_20px_40px_rgba(102,126,234,0.2)] transition-all duration-400 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-[100%] transition-all duration-500" />
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/80 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} viewport={{ once: true }} whileInView="animate" initial="initial">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-4">
              Exemplos de Resultados
            </h2>
            <p className="text-center text-white/80 mb-4 max-w-2xl mx-auto">
              Veja a qualidade profissional que a DesignoAI entrega aos seus clientes
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-[#667eea] to-[#764ba2] mx-auto rounded-full mb-12" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-[3/4] border border-white/10 hover:border-[#667eea]/50 transition-all duration-500"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <img 
                  src={image} 
                  alt={`Exemplo de foto profissional ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <span className="text-white text-sm font-semibold">✨ Criado com IA</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p 
            className="text-center text-white/60 text-sm mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            * Todas as imagens foram geradas com inteligência artificial a partir de selfies simples
          </motion.p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} viewport={{ once: true }} whileInView="animate" initial="initial">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-center text-white/80 mb-4 max-w-2xl mx-auto">
              Veja os depoimentos de quem já transformou sua imagem profissional
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-[#667eea] to-[#764ba2] mx-auto rounded-full mb-12" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="group bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 hover:border-[#667eea]/50 hover:shadow-[0_20px_40px_rgba(102,126,234,0.2)] transition-all duration-400 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-[100%] transition-all duration-500" />
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#667eea]/50">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-white/85 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} viewport={{ once: true }} whileInView="animate" initial="initial">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-4">
              DesignoAI vs Sessão Tradicional
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#667eea] to-[#764ba2] mx-auto rounded-full mb-12" />
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-3xl p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl md:text-8xl font-black text-white/5 z-0">VS</span>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6">Sessão Fotográfica Tradicional</h3>
              <ul className="space-y-3">
                {traditionalList.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/85">
                    <span className="text-[#667eea] font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6">DesignoAI Studio ✨</h3>
              <ul className="space-y-3">
                {designoaiList.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/85">
                    <span className="text-[#667eea] font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} viewport={{ once: true }} whileInView="animate" initial="initial">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-4">
              Como Funciona
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#667eea] to-[#764ba2] mx-auto rounded-full mb-12" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                className="group bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:-translate-y-2 hover:border-[#667eea]/50 hover:shadow-[0_20px_40px_rgba(102,126,234,0.2)] transition-all duration-400 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-[100%] transition-all duration-500" />
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/80 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)]"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative z-10">
              <span className="text-5xl mb-4 block">🛡️</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Garantia DesignoAI</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4">100% Satisfação Garantida</h3>
              <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto">
                Se você não ficar completamente satisfeito com suas fotos profissionais, devolvemos seu investimento integral. Sem perguntas. Sem burocracia.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} viewport={{ once: true }} whileInView="animate" initial="initial">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-4">
              Perguntas Frequentes
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#667eea] to-[#764ba2] mx-auto rounded-full mb-12" />
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden hover:border-[#667eea]/50 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left font-bold text-white flex justify-between items-center hover:bg-white/5 transition-all"
                >
                  <span>{faq.question}</span>
                  <span className={`text-2xl transition-transform ${openFaq === index ? 'rotate-45' : ''}`}>+</span>
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="px-6 pb-6 text-white/80 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} viewport={{ once: true }} whileInView="animate" initial="initial">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-4">
              Entre em Contato
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#667eea] to-[#764ba2] mx-auto rounded-full mb-12" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {contacts.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center hover:-translate-y-1 hover:border-[#667eea]/50 transition-all block"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-[#667eea] flex justify-center mb-3">{contact.icon}</div>
                <h3 className="font-bold mb-1">{contact.title}</h3>
                <p className="text-[#667eea] font-semibold">{contact.info}</p>
                <p className="text-white/60 text-sm">{contact.subtitle}</p>
              </motion.a>
            ))}
          </div>

          <p className="text-center text-white/60 text-lg">
            🌎 Atendimento 100% Online - Todo o Brasil
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#667eea] bg-[length:400%_400%] animate-[gradient_15s_ease_infinite]" />
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div 
          className="max-w-4xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            Transforme Sua Imagem Profissional Agora
          </h2>
          <p className="text-xl md:text-2xl text-white/95 mb-8">
            Não deixe que fotos amadoras prejudiquem sua credibilidade e oportunidades.
          </p>
          <button 
            onClick={handleWhatsAppClick}
            className="inline-block bg-white text-[#667eea] px-8 py-4 text-lg md:text-xl font-bold rounded-full shadow-2xl hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)] transition-all duration-300"
          >
            Começar Minha Transformação
          </button>
          <p className="mt-6 text-white/80">
            ⚡ Vagas limitadas por mês para garantir o mais alto padrão de qualidade
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-[#0a0a0a] border-t border-white/10 text-center">
        <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
          DesignoAI
        </h3>
        <p className="text-white/60 mb-4">
          Soluções criativas com inteligência artificial aplicadas à imagem profissional
        </p>
        <p className="text-white/40 text-sm">
          © 2026 DesignoAI. Todos os direitos reservados.
        </p>
        <p className="text-white/40 text-sm mt-2">
          Atendimento via WhatsApp e e-mail. Serviço 100% online.
        </p>
      </footer>
    </div>
  );
};

export default Studio;
