import { motion } from 'framer-motion';

/** Carreiras page — abstract people circles connected in network */
const TeamVisual = () => {
  const people = [
    { x: 50, y: 30, size: 16 },
    { x: 25, y: 55, size: 13 },
    { x: 75, y: 55, size: 14 },
    { x: 35, y: 80, size: 12 },
    { x: 65, y: 80, size: 12 },
  ];

  const lines = [[0,1],[0,2],[1,3],[2,4],[1,2],[3,4]];

  return (
    <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto">
      <div className="absolute inset-0 bg-primary/15 rounded-full blur-[80px]" />
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative w-full h-full"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {lines.map(([a,b], i) => (
            <motion.line
              key={i}
              x1={people[a].x} y1={people[a].y}
              x2={people[b].x} y2={people[b].y}
              stroke="hsl(var(--primary))"
              strokeWidth="0.6"
              strokeOpacity="0.3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.5 + i * 0.15 }}
            />
          ))}
          {people.map((p, i) => (
            <motion.g key={i}>
              {/* Body */}
              <motion.circle
                cx={p.x} cy={p.y + p.size * 0.5}
                r={p.size * 0.45}
                fill="hsl(var(--card))"
                stroke="hsl(var(--primary))"
                strokeWidth="0.6"
                strokeOpacity="0.5"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.15 }}
              />
              {/* Head */}
              <motion.circle
                cx={p.x} cy={p.y - p.size * 0.2}
                r={p.size * 0.25}
                fill="hsl(var(--primary))"
                fillOpacity="0.4"
                animate={{ fillOpacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              />
            </motion.g>
          ))}
        </svg>
      </motion.div>
    </div>
  );
};

export default TeamVisual;
