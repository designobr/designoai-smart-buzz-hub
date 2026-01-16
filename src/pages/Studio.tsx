import { motion } from 'framer-motion';
import studioLogo from '@/assets/studio-logo.png';

const Studio = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-indigo-900/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-12"
        >
          <motion.img
            src={studioLogo}
            alt="Studio Logo"
            className="w-32 h-32 md:w-40 md:h-40 mx-auto"
            animate={{ 
              rotate: 360,
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        </motion.div>

        {/* Loading bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex items-center justify-center gap-1 mb-16"
        >
          <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-purple-500/50"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-purple-500/80"></div>
          <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-purple-500/50"></div>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mb-12"
        >
          <p className="text-2xl md:text-4xl lg:text-5xl font-serif italic text-white/90 leading-relaxed tracking-wide">
            "Transformamos ideias em experiências digitais extraordinárias."
          </p>
        </motion.blockquote>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-purple-500/30"></div>
          <div className="w-1 h-1 rounded-full bg-purple-400/60"></div>
          <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-purple-500/30"></div>
        </motion.div>

        {/* Author */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="space-y-2"
        >
          <h3 className="text-sm md:text-base font-medium tracking-[0.3em] text-purple-400 uppercase">
            DesignoAI Studio
          </h3>
          <p className="text-xs md:text-sm text-gray-500 tracking-widest uppercase">
            Criadores de marcas inovadoras.
          </p>
        </motion.div>

        {/* Bottom subtle animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-20"
        >
          <motion.div
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-6 h-10 mx-auto border border-purple-500/30 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ 
                y: [0, 12, 0],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="w-1 h-2 bg-purple-400/60 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-20 h-20 border-l border-t border-purple-500/20"></div>
      <div className="absolute top-8 right-8 w-20 h-20 border-r border-t border-purple-500/20"></div>
      <div className="absolute bottom-8 left-8 w-20 h-20 border-l border-b border-purple-500/20"></div>
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r border-b border-purple-500/20"></div>
    </div>
  );
};

export default Studio;
