"use client";

import { motion } from "framer-motion";

const nodes = [
  { label: "AI" },
  { label: "DATA" },
  { label: "AGENTIC AI" },
  { label: "LLM " },
  { label: "RAG" },
];

export default function PipelineDiagram() {
  return (
    <div className="relative w-full max-w-md mx-auto select-none" aria-hidden="true">
      <svg viewBox="0 0 360 420" className="w-full h-auto overflow-visible">
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3D7FFF" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#7C5CFF" stopOpacity="0.15" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* connecting spine */}
        <line x1="180" y1="35" x2="180" y2="385" stroke="url(#lineGrad)" strokeWidth="1.5" />

        {/* animated pulse traveling down the spine */}
        <motion.circle
          r="3.5"
          fill="#3D7FFF"
          filter="url(#glow)"
          animate={{ cy: [35, 385] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          cx="180"
        />

        {nodes.map((n, i) => {
          const y = 35 + i * 87.5;
          const isLeft = i % 2 === 0;
          return (
            <g key={n.label}>
              <motion.circle
                cx="180"
                cy={y}
                r="6"
                fill="#06070A"
                stroke="#3D7FFF"
                strokeWidth="2"
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3 }}
              />
              <foreignObject
                x={isLeft ? 10 : 200}
                y={y - 18}
                width="150"
                height="40"
              >
                <div
                  className={`h-full flex items-center ${
                    isLeft ? "justify-end text-right" : "justify-start text-left"
                  }`}
                >
                  <span className="glass rounded-full px-3 py-1.5 text-[11px] font-mono text-chalk/90 tracking-wide">
                    {n.label}
                  </span>
                </div>
              </foreignObject>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
