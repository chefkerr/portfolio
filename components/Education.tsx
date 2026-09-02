import { education, certifications } from "@/data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="relative py-28 px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16">
        <div>
          <SectionHeading eyebrow="Education" title="Academic background" />
          <div className="flex flex-col gap-6">
            {education.map((e, i) => (
              <Reveal key={e.school} delay={i * 0.08}>
                <div className="glass rounded-2xl p-6 hover:border-signal/40 transition-colors">
                  <div className="flex items-center gap-2 text-signal text-xs font-mono mb-2">
                    <GraduationCap size={14} /> {e.period}
                  </div>
                  <h3 className="font-display text-lg text-chalk">{e.school}</h3>
                  <p className="text-sm text-mist mt-1">{e.degree}</p>
                  <p className="text-sm text-mist/80 mt-2 leading-relaxed">{e.description}</p>
                  <p className="text-xs text-mist/60 mt-2">{e.location}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading eyebrow="Certifications" title="Continuous learning" />
          <div className="grid sm:grid-cols-2 gap-5">
            {certifications.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.06}>
                <div className="glass rounded-2xl p-6 h-full hover:border-amber/50 transition-colors">
                  <Award className="text-amber" size={20} />
                  <h3 className="mt-3 font-display text-base text-chalk leading-snug">{c.name}</h3>
                  <p className="text-sm text-mist mt-1.5">{c.issuer}</p>
                  <p className="text-xs text-mist/60 mt-1 font-mono">{c.year}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
