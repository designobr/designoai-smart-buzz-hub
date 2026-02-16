
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useSparkEffect } from '@/hooks/useSparkEffect';
import { useEffect, useRef } from 'react';

const AnimatedCounter = ({ target, suffix = '' }: {target: number;suffix?: string;}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(count, target, { duration: 2, ease: 'easeOut' });
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [count, target]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>{suffix}
    </span>);

};

const FloatingParticle = ({ delay, x, y, size }: {delay: number;x: string;y: string;size: number;}) =>
<motion.div
  className="absolute rounded-full bg-primary"
  style={{
    left: x,
    top: y,
    width: size,
    height: size,
    boxShadow: `0 0 ${size * 3}px ${size}px hsl(195 100% 50% / 0.4)`
  }}
  animate={{
    y: [0, -30, 0],
    opacity: [0.4, 0.9, 0.4],
    scale: [1, 1.3, 1]
  }}
  transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut', delay }} />;



const Hero = () => {
  const spark = useSparkEffect({ count: 10, spread: 80 });

  const handleCallClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Ambient background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[hsl(270,70%,60%)]/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        {/* Floating particles */}
        <FloatingParticle delay={0} x="10%" y="20%" size={6} />
        <FloatingParticle delay={1} x="80%" y="30%" size={4} />
        <FloatingParticle delay={2} x="20%" y="70%" size={5} />
        <FloatingParticle delay={0.5} x="70%" y="60%" size={3} />
        <FloatingParticle delay={1.5} x="50%" y="15%" size={4} />
        <FloatingParticle delay={3} x="90%" y="80%" size={5} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>

            <div className="inline-flex items-center px-4 rounded-full text-sm font-medium text-primary mb-8 animated-border bg-card my-[10px] py-[3px]">
              <Sparkles className="w-4 h-4 mr-2" onClick={(e) => spark(e as any, 'badge')} />
              Marketing Digital com Inteligência Artificial
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-8">

            <img
              src="/lovable-uploads/643dfebb-85f6-4868-920c-35c1901aaf13.png"
              alt="DesignoAI Logo"
              className="w-[320px] md:w-[420px] lg:w-[500px] h-auto object-contain mx-auto drop-shadow-[0_0_40px_hsl(195,100%,50%,0.15)]" />

          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] mb-6">

            <span className="text-foreground">Sua marca no </span>
            <span className="shimmer-text">futuro, agora!</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">

            Revolucione suas estratégias de marketing com soluções que{' '}
            <span className="text-foreground font-medium">analisam, criam e otimizam</span>{' '}
            seu conteúdo automaticamente.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16">

            <Button
              size="lg"
              className="relative bg-primary text-primary-foreground hover:bg-primary/90 glow-md text-base px-8 py-6 rounded-xl group transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
              onClick={handleCallClick}>

              <span className="relative z-10 flex items-center">
                Agende uma Conversa
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-8 max-w-lg mx-auto">

            {[
            { value: 500, suffix: '+', label: 'Empresas' },
            { value: 230, suffix: '%', label: 'Aumento Médio' },
            { value: 24, suffix: '/7', label: 'Suporte' }].
            map((stat, i) =>
            <div key={i} className="text-center group">
                <div className="text-2xl md:text-3xl font-heading font-bold text-gradient mb-1 group-hover:scale-105 transition-transform duration-300">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6 mt-12 text-xs text-muted-foreground">

            {['Sem cartão de crédito', 'Cancele quando quiser', 'Suporte premium'].map((text, i) =>
            <div key={i} className="flex items-center">
                <div className="w-1.5 h-1.5 bg-primary/60 rounded-full mr-2" />
                {text}
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="h-32 bg-gradient-to-t from-background to-transparent" />
      </div>
    </section>);

};

export default Hero;