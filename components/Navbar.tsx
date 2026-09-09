"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, ArrowUpRight } from "lucide-react";
import { navLinks, profile } from "@/data/content";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();
  const homeHref = pathname === "/" ? "#top" : "/#top";
  const getSectionHref = (href: string) => (pathname === "/" ? href : `/${href}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
            scrolled ? "glass shadow-lg shadow-black/20" : ""
          }`}
        >
          <a
            href={homeHref}
            data-cursor-hover
            className="font-display text-lg font-medium tracking-tight text-chalk"
          >
            <span className="text-gradient">AA</span>
            <span className="hidden sm:inline text-mist"> / achak</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={getSectionHref(l.href)}
                data-cursor-hover
                className="px-4 py-2 text-sm text-mist hover:text-chalk transition-colors rounded-lg hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            
            <a
              href="/cv-abderrahmane-achak.pdf"
              download
              data-cursor-hover
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-chalk text-void px-4 py-2 text-sm font-medium hover:bg-signal hover:text-white transition-colors"
            >
              CV <ArrowUpRight size={14} />
            </a>
            <button
              className="md:hidden p-2.5 text-chalk"
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="md:hidden mx-6 mt-2 glass rounded-2xl overflow-hidden"
          >
            <nav className="flex flex-col p-2">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={getSectionHref(l.href)}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm text-mist hover:text-chalk rounded-lg hover:bg-white/5"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/cv-abderrahmane-achak.pdf"
                download
                className="mt-1 px-4 py-3 text-sm font-medium text-signal"
              >
                Download my CV ↗
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
