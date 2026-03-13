"use client";

import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { TechStackCategory } from "@/lib/projects";

interface TechStackGraphProps {
  techStack: TechStackCategory;
}

// Define connections between technologies (which ones work together)
const connections: Record<string, string[]> = {
  "Next.js 15": ["React 19", "TypeScript", "Vercel", "Tailwind v4"],
  "Next.js 14": ["React 18", "TypeScript", "Vercel"],
  "Next.js": ["React", "TypeScript", "Vercel"],
  "React 19": ["TypeScript", "React Three Fiber", "Tailwind v4"],
  "React 18": ["TypeScript", "React Three Fiber"],
  "React": ["TypeScript", "React Three Fiber", "Recharts"],
  "TypeScript": ["Supabase", "PostgreSQL"],
  "React Three Fiber": ["Three.js", "Drei"],
  "Three.js": ["Drei", "GSAP"],
  "Supabase": ["PostgreSQL", "Vercel Cron", "Stripe"],
  "Stripe": [],
  "Resend": [],
  "Expo": ["React 19"],
  "Claude API": ["Pinecone", "Gemini API"],
  "Gemini API": ["Pinecone"],
  "GPT-4o": ["Gemini", "Claude", "ChromaDB"],
  "Gemini": ["Claude", "ChromaDB"],
  "Claude": ["ChromaDB"],
  "Vercel": ["Upstash Redis", "Vercel Cron"],
  "Appwrite": ["GoHighLevel CRM"],
  "GSAP": ["Anime.js"],
};

// Category colors
const categoryColors: Record<string, { bg: string; border: string; text: string }> = {
  frontend: { bg: "rgba(249, 115, 22, 0.15)", border: "#F97316", text: "#F97316" },
  "3d": { bg: "rgba(59, 130, 246, 0.15)", border: "#3B82F6", text: "#3B82F6" },
  backend: { bg: "rgba(34, 197, 94, 0.15)", border: "#22C55E", text: "#22C55E" },
  ai: { bg: "rgba(168, 85, 247, 0.15)", border: "#A855F7", text: "#A855F7" },
  infra: { bg: "rgba(6, 182, 212, 0.15)", border: "#06B6D4", text: "#06B6D4" },
  state: { bg: "rgba(236, 72, 153, 0.15)", border: "#EC4899", text: "#EC4899" },
  devtools: { bg: "rgba(251, 191, 36, 0.15)", border: "#FBBF24", text: "#FBBF24" },
  integrations: { bg: "rgba(139, 92, 246, 0.15)", border: "#8B5CF6", text: "#8B5CF6" },
  education: { bg: "rgba(20, 184, 166, 0.15)", border: "#14B8A6", text: "#14B8A6" },
  analytics: { bg: "rgba(239, 68, 68, 0.15)", border: "#EF4444", text: "#EF4444" },
};

const getColor = (category: string) => {
  const key = category.toLowerCase();
  return categoryColors[key] || { bg: "rgba(128, 0, 32, 0.15)", border: "#800020", text: "#800020" };
};

export function TechStackGraph({ techStack }: TechStackGraphProps) {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  // Build nodes with positions
  const { nodes, allTechs, techToCategory } = useMemo(() => {
    const entries = Object.entries(techStack);
    const allTechs: string[] = [];
    const techToCategory: Record<string, string> = {};

    entries.forEach(([category, techs]) => {
      techs.forEach(tech => {
        allTechs.push(tech);
        techToCategory[tech] = category;
      });
    });

    // Calculate node positions in a circular/clustered layout
    const centerX = 400;
    const centerY = 250;
    const categoryCount = entries.length;

    const nodes: { tech: string; category: string; x: number; y: number }[] = [];

    entries.forEach(([category, techs], categoryIndex) => {
      // Each category gets a segment of the circle
      const categoryAngle = (categoryIndex / categoryCount) * Math.PI * 2 - Math.PI / 2;
      const categoryRadius = 160;

      // Category center point
      const categoryCenterX = centerX + Math.cos(categoryAngle) * categoryRadius;
      const categoryCenterY = centerY + Math.sin(categoryAngle) * categoryRadius;

      techs.forEach((tech, techIndex) => {
        // Spread techs around their category center
        const techAngle = categoryAngle + ((techIndex - (techs.length - 1) / 2) * 0.4);
        const techRadius = 50 + techIndex * 15;

        nodes.push({
          tech,
          category,
          x: categoryCenterX + Math.cos(techAngle) * (techIndex % 2 === 0 ? 30 : -30),
          y: categoryCenterY + (techIndex - (techs.length - 1) / 2) * 45,
        });
      });
    });

    return { nodes, allTechs, techToCategory };
  }, [techStack]);

  // Build connections between nodes
  const lines = useMemo(() => {
    const result: { from: string; to: string; fromNode: typeof nodes[0]; toNode: typeof nodes[0] }[] = [];

    nodes.forEach(fromNode => {
      const connectedTechs = connections[fromNode.tech] || [];
      connectedTechs.forEach(toTech => {
        const toNode = nodes.find(n => n.tech === toTech);
        if (toNode) {
          result.push({ from: fromNode.tech, to: toTech, fromNode, toNode });
        }
      });
    });

    return result;
  }, [nodes]);

  const isConnectedToHovered = (tech: string) => {
    if (!hoveredTech) return false;
    const hoveredConnections = connections[hoveredTech] || [];
    return hoveredConnections.includes(tech) || (connections[tech] || []).includes(hoveredTech);
  };

  return (
    <div className="relative w-full">
      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        {Object.entries(techStack).map(([category]) => {
          const color = getColor(category);
          return (
            <button
              key={category}
              onMouseEnter={() => setHoveredCategory(category)}
              onMouseLeave={() => setHoveredCategory(null)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 ${
                hoveredCategory === category ? 'scale-105' : ''
              }`}
              style={{
                backgroundColor: hoveredCategory === category ? color.bg : 'transparent',
                borderColor: color.border,
                opacity: hoveredCategory && hoveredCategory !== category ? 0.3 : 1,
              }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: color.border }}
              />
              <span className="text-xs font-mono uppercase" style={{ color: color.text }}>
                {category}
              </span>
            </button>
          );
        })}
      </div>

      {/* Graph SVG */}
      <svg
        viewBox="0 0 800 500"
        className="w-full h-auto"
        style={{ maxHeight: '500px' }}
      >
        <defs>
          {/* Glow filter for connections */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connection lines */}
        {lines.map(({ from, to, fromNode, toNode }, i) => {
          const isHighlighted = hoveredTech === from || hoveredTech === to;
          const isDimmed = hoveredTech && !isHighlighted;
          const categoryMatch = hoveredCategory &&
            (techToCategory[from] === hoveredCategory || techToCategory[to] === hoveredCategory);
          const categoryDimmed = hoveredCategory && !categoryMatch;

          return (
            <motion.line
              key={`${from}-${to}-${i}`}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke={isHighlighted ? "#800020" : "#F5F5DC"}
              strokeWidth={isHighlighted ? 2 : 1}
              strokeOpacity={isDimmed || categoryDimmed ? 0.05 : isHighlighted ? 0.8 : 0.15}
              filter={isHighlighted ? "url(#glow)" : undefined}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: i * 0.02 }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node, i) => {
          const color = getColor(node.category);
          const isHovered = hoveredTech === node.tech;
          const isConnected = isConnectedToHovered(node.tech);
          const isDimmed = hoveredTech && !isHovered && !isConnected;
          const categoryMatch = hoveredCategory === node.category;
          const categoryDimmed = hoveredCategory && !categoryMatch;

          return (
            <motion.g
              key={node.tech}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              onMouseEnter={() => setHoveredTech(node.tech)}
              onMouseLeave={() => setHoveredTech(null)}
              style={{ cursor: 'pointer' }}
            >
              {/* Node background */}
              <motion.rect
                x={node.x - 50}
                y={node.y - 14}
                width={100}
                height={28}
                rx={14}
                fill={isHovered || categoryMatch ? color.bg : "#1C1C1C"}
                stroke={color.border}
                strokeWidth={isHovered ? 2 : 1}
                strokeOpacity={isDimmed || categoryDimmed ? 0.2 : isHovered || categoryMatch ? 1 : 0.4}
                animate={{
                  scale: isHovered ? 1.1 : 1,
                  opacity: isDimmed || categoryDimmed ? 0.3 : 1,
                }}
                transition={{ duration: 0.2 }}
              />

              {/* Node text */}
              <motion.text
                x={node.x}
                y={node.y + 4}
                textAnchor="middle"
                fill={isHovered || categoryMatch ? color.text : "#F5F5DC"}
                fontSize={11}
                fontFamily="Inter, sans-serif"
                fontWeight={isHovered ? 600 : 400}
                animate={{
                  opacity: isDimmed || categoryDimmed ? 0.3 : 1,
                }}
              >
                {node.tech}
              </motion.text>

              {/* Connection indicator on hover */}
              {isConnected && !isHovered && (
                <motion.circle
                  cx={node.x + 45}
                  cy={node.y - 10}
                  r={4}
                  fill="#800020"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                />
              )}
            </motion.g>
          );
        })}

        {/* Center label */}
        <text
          x={400}
          y={250}
          textAnchor="middle"
          fill="#F5F5DC"
          fontSize={10}
          fontFamily="monospace"
          opacity={0.2}
        >
          {hoveredTech ? `${hoveredTech}` : 'TECH STACK'}
        </text>
      </svg>

      {/* Hover tooltip */}
      {hoveredTech && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-[#1C1C1C] border border-[#F5F5DC]/20 rounded-lg"
        >
          <span className="text-sm text-[#F5F5DC]/60">
            {connections[hoveredTech]?.length
              ? `Connects with: ${connections[hoveredTech].filter(t => nodes.some(n => n.tech === t)).join(', ')}`
              : 'No direct connections shown'
            }
          </span>
        </motion.div>
      )}
    </div>
  );
}
