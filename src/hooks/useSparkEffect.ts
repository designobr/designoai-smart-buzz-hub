
import { useCallback, useRef } from 'react';

interface SparkOptions {
  count?: number;
  spread?: number;
  duration?: number;
  colors?: string[];
}

const defaultColors = [
  'hsl(195, 100%, 50%)',
  'hsl(195, 100%, 70%)',
  'hsl(270, 70%, 60%)',
  'hsl(270, 70%, 80%)',
  'hsl(0, 0%, 100%)',
];

export function useSparkEffect(options: SparkOptions = {}) {
  const cooldownRef = useRef<Map<string, number>>(new Map());
  const reducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  const spark = useCallback((e: React.MouseEvent, id?: string) => {
    if (reducedMotion) return;

    const key = id || 'global';
    const now = Date.now();
    const lastFired = cooldownRef.current.get(key) || 0;
    if (now - lastFired < 200) return;
    cooldownRef.current.set(key, now);

    const { count = 8, spread = 60, duration = 500, colors = defaultColors } = options;
    const { clientX, clientY } = e;

    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.className = 'spark-particle';
      const color = colors[Math.floor(Math.random() * colors.length)];
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const distance = spread * (0.5 + Math.random() * 0.5);
      const size = 2 + Math.random() * 3;

      particle.style.cssText = `
        left: ${clientX}px;
        top: ${clientY}px;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        box-shadow: 0 0 ${size * 2}px ${color};
      `;

      document.body.appendChild(particle);

      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance - 20;

      particle.animate([
        { transform: 'translate(0, 0) scale(1)', opacity: 1 },
        { transform: `translate(${dx}px, ${dy}px) scale(0)`, opacity: 0 }
      ], {
        duration: duration * (0.7 + Math.random() * 0.6),
        easing: 'cubic-bezier(0, 0.9, 0.57, 1)',
        fill: 'forwards'
      }).onfinish = () => particle.remove();
    }
  }, [options, reducedMotion]);

  return spark;
}
