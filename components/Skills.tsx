"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const accentMap: Record<string, string> = {
  signal: "bg-signal",
  signal2: "bg-signal2",
  amber: "bg-amber",
};

export default function Skills() {
  const [active, setActive] = useState(skillCategories[0].id);
  const current = skillCategories.find((c) => c.id === active)!;

  return (
    <section id="skills" className="relative py-28 px-6 bg-panel/40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="A stack built for end-to-end AI products"
          description="From data preparation to user interfaces, including LLM orchestration."
        />

        <div className="flex flex-wrap gap-2 mb-10">
          {skillCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              data-cursor-hover
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                active === c.id
                  ? "bg-signal text-white border-signal"
                  : "border-line text-mist hover:text-chalk hover:border-signal/50"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <Reveal key={active}>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-6">
            {current.skills.map((s, i) => (
              <div key={s.name}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-chalk font-medium">{s.name}</span>
                  <span className="text-mist font-mono">{s.level}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-line overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: i * 0.04, ease: "easeOut" }}
                    className={`h-full rounded-full ${accentMap[current.accent]}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
