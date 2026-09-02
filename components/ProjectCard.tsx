"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import type { Project } from "@/data/content";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
      className="group relative glass rounded-2xl overflow-hidden hover:border-signal/50 transition-colors"
    >
      <Link href={`/projects/${project.slug}`} data-cursor-hover className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-panel">
          <Image
              src={project.images[0]}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-void/10 to-transparent" />
          <span className="absolute top-4 left-4 text-[11px] font-mono px-2.5 py-1 rounded-md glass text-chalk">
            {project.tag}
          </span>
          <span className="absolute top-4 right-4 text-[11px] font-mono px-2.5 py-1 rounded-md bg-signal/20 text-signal border border-signal/30">
            {project.year}
          </span>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-lg text-chalk group-hover:text-signal transition-colors">
              {project.title}
            </h3>
            <ArrowUpRight
              size={18}
              className="text-mist group-hover:text-signal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1"
            />
          </div>
          <p className="mt-2 text-sm text-mist leading-relaxed line-clamp-2">{project.summary}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((s) => (
              <span
                key={s}
                className="text-[10.5px] font-mono px-2 py-0.5 rounded bg-white/5 text-mist border border-line"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </Link>

      {(project.github || project.demo) && (
        <div className="flex gap-4 px-6 pb-5 -mt-1">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              data-cursor-hover
              className="inline-flex items-center gap-1.5 text-xs text-mist hover:text-chalk"
            >
              <Github size={13} /> Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              data-cursor-hover
              className="inline-flex items-center gap-1.5 text-xs text-mist hover:text-chalk"
            >
              <ExternalLink size={13} /> Demo
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}
