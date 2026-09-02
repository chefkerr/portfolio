"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import Image from "next/image";
import { profile } from "@/data/content";
import { useTypewriter } from "./useTypewriter";
import PipelineDiagram from "./PipelineDiagram";

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden pt-28 pb-20">
      {/* backdrop */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black,transparent)]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-signal/20 blur-[140px]" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-signal2/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center w-full">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulseGlow" />
            <span className="section-label">Software Engineer</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display text-[clamp(2.4rem,6vw,4.6rem)] leading-[1.03] font-medium tracking-tight text-chalk"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-4 text-lg md:text-xl text-mist font-mono"
          >
            {profile.title} <span className="text-signal">•</span> AI &amp; RAG Engineer
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 h-8 font-mono text-base md:text-lg text-chalk/90"
          >
            <span className="text-signal2">&gt;</span> {typed}
            <span className="inline-block w-[2px] h-5 bg-signal ml-1 align-middle animate-pulseGlow" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-7 max-w-xl text-mist leading-relaxed"
          >
            {profile.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="/cv-abderrahmane-achak.pdf"
              download
              data-cursor-hover
              className="inline-flex items-center gap-2 rounded-xl bg-signal text-white px-6 py-3.5 text-sm font-medium hover:bg-signal2 transition-colors shadow-lg shadow-signal/20"
            >
              Download my CV <ArrowUpRight size={16} />
            </a>
            <a
              href="#projects"
              data-cursor-hover
              className="inline-flex items-center gap-2 rounded-xl glass text-chalk px-6 py-3.5 text-sm font-medium hover:border-signal/50 transition-colors"
            >
              View my projects
            </a>
            <a
              href="#contact"
              data-cursor-hover
              className="inline-flex items-center gap-2 text-mist hover:text-chalk px-2 py-3.5 text-sm font-medium transition-colors"
            >
              <Mail size={16} /> Contact me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:flex flex-col items-center gap-8"
        >
          <div className="relative w-44 h-44 rounded-full overflow-hidden ring-2 ring-signal/30 shadow-2xl shadow-signal/10 animate-float">
            <Image
              src="/me.jpeg"
              alt={profile.name}
              fill
              sizes="176px"
              className="object-cover"
              priority
            />
          </div>
          <PipelineDiagram />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        data-cursor-hover
        aria-label="Scroll to the next section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-mist hover:text-signal transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
