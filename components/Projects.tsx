"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/content";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

const filters = ["All", "Web", "AI", "Machine Learning", "Django", "React", "API"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () =>
      active === "All" ? projects : projects.filter((p) => p.category.includes(active)),
    [active]
  );

  return (
    <section id="projects" className="relative py-28 px-6 bg-panel/40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="From ideas to production"
          description="A selection of projects showcasing my work in applied AI and full-stack development. More case studies are on the way."
        />

        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              data-cursor-hover
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                active === f
                  ? "bg-signal text-white border-signal"
                  : "border-line text-mist hover:text-chalk hover:border-signal/50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-mist text-sm">No projects in this category yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {filtered.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
