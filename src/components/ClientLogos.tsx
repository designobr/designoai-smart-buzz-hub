
import { motion } from 'framer-motion';

const ClientLogos = () => {
  const clients = [
    { name: "TechFlow Solutions", logo: "💼", gradient: "from-blue-500 to-cyan-500" },
    { name: "GlobalVentures", logo: "🌐", gradient: "from-green-500 to-emerald-500" },
    { name: "InnovaCorp", logo: "⚡", gradient: "from-yellow-500 to-orange-500" },
    { name: "DigitalPrime", logo: "💎", gradient: "from-purple-500 to-pink-500" },
    { name: "NextGen Industries", logo: "🚀", gradient: "from-indigo-500 to-blue-500" },
    { name: "ProBusiness Group", logo: "📊", gradient: "from-red-500 to-pink-500" },
    { name: "SmartLogistics", logo: "📦", gradient: "from-teal-500 to-cyan-500" },
    { name: "EliteConsulting", logo: "🎯", gradient: "from-orange-500 to-red-500" }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="floating-orb w-64 h-64 top-10 left-20" style={{ animationDelay: '2s' }}></div>
        <div className="floating-orb w-48 h-48 bottom-10 right-20" style={{ animationDelay: '4s' }}></div>
        <div className="absolute inset-0 mesh-gradient"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 glass-strong rounded-full text-blue-300 font-medium mb-8 border border-white/20 shadow-xl">
            ✨ Empresas que confiam em nós
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Mais de 500 empresas já transformaram
            </span>
            <br />
            <span className="text-white">seu marketing digital</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Junte-se às empresas que já estão revolucionando seus resultados com nossa plataforma de IA
          </p>
        </div>
        
        {/* Logo grid com animação glassmorphism */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card p-6 rounded-2xl border border-white/20 hover:glass-strong transition-all duration-500 text-center group-hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-br ${client.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl shadow-xl group-hover:scale-110 transition-transform duration-300 animate-glow`}>
                  {client.logo}
                  <div className={`absolute inset-0 bg-gradient-to-br ${client.gradient} rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                </div>
                <h3 className="text-white font-semibold text-sm group-hover:text-blue-400 transition-colors duration-300">
                  {client.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators glassmorphism */}
        <div className="glass-card p-8 rounded-2xl border border-white/20">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
            {[
              { indicator: "99.9% Uptime", color: "green", icon: "🟢" },
              { indicator: "ISO 27001 Certified", color: "blue", icon: "🔵" },
              { indicator: "GDPR Compliant", color: "purple", icon: "🟣" },
              { indicator: "24/7 Support", color: "orange", icon: "🟠" }
            ].map((item, index) => (
              <div key={index} className="flex items-center group">
                <div className="animate-pulse mr-2">{item.icon}</div>
                <span className="text-white/70 group-hover:text-white transition-colors duration-300">
                  {item.indicator}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
