import { profile, languages } from "@/data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import StatCounter from "./StatCounter";
import { GraduationCap, Target, Sparkles, Languages } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Who I am",
    text: "A fifth-year engineering student at EMSI, specializing in software engineering, AI, and data. Independent, thorough, and motivated.",
  },
  {
    icon: GraduationCap,
    title: "My journey",
    text: "From full-stack development to production RAG architectures—learned in the classroom and validated in industry at DXC Technology and REDAL.",
  },
  {
    icon: Sparkles,
    title: "What drives me",
    text: "Building practical, efficient AI systems: local LLMs, reliable RAG pipelines, and thoughtful user experiences.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="Engineer in training, focused on applied AI"
          description={profile.seeking}
        />

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="glass rounded-2xl p-7 h-full hover:border-signal/40 transition-colors">
                <p.icon className="text-signal" size={22} />
                <h3 className="mt-4 font-display text-lg text-chalk">{p.title}</h3>
                <p className="mt-2 text-sm text-mist leading-relaxed">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="glass rounded-2xl p-7 mb-16 flex flex-wrap items-center gap-8">
          <div className="flex items-center gap-2 text-chalk font-medium">
            <Languages size={18} className="text-signal" /> Languages
          </div>
          {languages.map((l) => (
            <div key={l.name} className="text-sm">
              <span className="text-chalk">{l.name}</span>
              <span className="text-mist"> — {l.level}</span>
            </div>
          ))}
        </Reveal>

        
      </div>
    </section>
  );
}
