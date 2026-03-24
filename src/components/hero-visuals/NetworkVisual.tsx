import { motion } from 'framer-motion';

/** Sobre Nós — connected nodes representing human-tech connection */
const NetworkVisual = () => {
  const nodes = [
    { x: 50, y: 20, size: 14, delay: 0 },
    { x: 20, y: 45, size: 10, delay: 0.3 },
    { x: 80, y: 40, size: 12, delay: 0.6 },
    { x: 35, y: 75, size: 11, delay: 0.9 },
    { x: 65, y: 80, size: 13, delay: 1.2 },
    { x: 50, y: 50, size: 18, delay: 0.1 },
  ];

  const connections = [
    [0, 5], [1, 5], [2, 5], [3, 5], [4, 5],
    [0, 2], [1, 3], [3, 4],
  ];

  return (
    <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto">
      <div className="absolute inset-0 bg-primary/15 rounded-full blur-[80px]" />
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative w-full h-full"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Connection lines */}
          {connections.map(([a, b], i) => (
            <motion.line
              key={i}
              x1={nodes[a].x} y1={nodes[a].y}
              x2={nodes[b].x} y2={nodes[b].y}
              stroke="hsl(var(--primary))"
              strokeWidth="0.5"
              strokeOpacity="0.3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
            />
          ))}

          {/* Animated pulse along lines */}
          {connections.map(([a, b], i) => (
            <motion.circle
              key={`pulse-${i}`}
              r="1"
              fill="hsl(var(--primary))"
              opacity="0.6"
              animate={{
                cx: [nodes[a].x, nodes[b].x],
                cy: [nodes[a].y, nodes[b].y],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: 'easeInOut',
              }}
            />
          ))}

          {/* Nodes */}
          {nodes.map((node, i) => (
            <motion.g key={i}>
              <motion.circle
                cx={node.x} cy={node.y} r={node.size / 2}
                fill="hsl(var(--card))"
                stroke="hsl(var(--primary))"
                strokeWidth="0.8"
                strokeOpacity="0.5"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: node.delay }}
              />
              <motion.circle
                cx={node.x} cy={node.y} r={node.size / 4}
                fill="hsl(var(--primary))"
                fillOpacity="0.5"
                animate={{ r: [node.size / 4, node.size / 3, node.size / 4], fillOpacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, delay: node.delay }}
              />
            </motion.g>
          ))}
        </svg>
      </motion.div>
    </div>
  );
};

export default NetworkVisual;
