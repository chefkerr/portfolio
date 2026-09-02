import { experiences } from "@/data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { Briefcase, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Experience"
          title="Hands-on experience: internships and real-world projects"
        />

        <div className="relative pl-8 md:pl-10">
          <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-signal via-line to-transparent" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <Reveal key={exp.id} delay={i * 0.08} className="relative">
                <span className="absolute -left-8 md:-left-10 top-1.5 w-[15px] h-[15px] rounded-full bg-void border-2 border-signal" />
                <div className="glass rounded-2xl p-7 hover:border-signal/40 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2 text-mist text-xs font-mono">
                      <Briefcase size={13} className="text-signal" /> {exp.period}
                    </div>
                    <div className="flex items-center gap-1.5 text-mist text-xs font-mono">
                      <MapPin size={13} /> {exp.location}
                    </div>
                  </div>
                  <h3 className="font-display text-xl text-chalk">{exp.role}</h3>
                  <p className="text-signal text-sm mt-1">{exp.company}</p>
                  <p className="mt-4 text-sm text-mist leading-relaxed">{exp.description}</p>
                  <ul className="mt-4 space-y-2">
                    {exp.bullets.map((b) => (
                      <li key={b} className="text-sm text-mist/90 flex gap-2.5 leading-relaxed">
                        <span className="text-signal mt-1.5 w-1 h-1 rounded-full bg-signal shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-mist border border-line"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
