"use client";

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { usePathname } from "next/navigation";
import { navLinks, profile } from "@/data/content";

export default function Footer() {
  const pathname = usePathname();
  const homeHref = pathname === "/" ? "#top" : "/#top";
  const getSectionHref = (href: string) => (pathname === "/" ? href : `/${href}`);
  return (
    <footer className="relative border-t border-line px-6 py-14">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="max-w-xs">
            <a href={homeHref} className="font-display text-xl text-chalk">
              <span className="text-gradient">AA</span>
            </a>
            <p className="mt-3 text-sm text-mist leading-relaxed">{profile.title} — {profile.location}</p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-mist hover:text-signal transition-colors"
              >
                <Github size={15} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-mist hover:text-signal transition-colors"
              >
                <Linkedin size={15} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                data-cursor-hover
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-mist hover:text-signal transition-colors"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 content-start">
            {navLinks.map((l) => (
              <a key={l.href} href={getSectionHref(l.href)} className="text-sm text-mist hover:text-chalk transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href={homeHref}
            data-cursor-hover
            className="inline-flex items-center gap-2 h-10 px-4 rounded-lg glass text-sm text-mist hover:text-chalk self-start transition-colors"
          >
            Back to top <ArrowUp size={14} />
          </a>
        </div>

        <div className="mt-12 pt-6 border-t border-line flex flex-col sm:flex-row justify-between gap-3 text-xs text-mist/70">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>Designed &amp; developed with Next.js, Tailwind CSS, and Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
