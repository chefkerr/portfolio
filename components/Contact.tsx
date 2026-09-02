"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { profile } from "@/data/content";

const contactLinks = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: MapPin, label: profile.location, href: undefined },
  { icon: Github, label: "github.com/" + profile.githubUser, href: profile.github },
  { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // NOTE: This uses a mailto: fallback so the form works with zero configuration.
    // To send messages directly from the page without opening a mail client,
    // wire this up to EmailJS (https://www.emailjs.com) with your own service/template IDs.
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      form.subject || "Contact from portfolio"
    )}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[0.85fr_1.15fr] gap-16">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let's discuss your next project"
            description="Open to engineering internship opportunities from July 2026 and to collaborations on AI projects."
          />
          <div className="flex flex-col gap-4">
            {contactLinks.map((c) => (
              <Reveal key={c.label}>
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    data-cursor-hover
                    className="flex items-center gap-3 text-mist hover:text-chalk transition-colors group"
                  >
                    <span className="w-9 h-9 rounded-lg glass flex items-center justify-center group-hover:border-signal/50 shrink-0">
                      <c.icon size={16} className="text-signal" />
                    </span>
                    <span className="text-sm">{c.label}</span>
                  </a>
                ) : (
                  <div className="flex items-center gap-3 text-mist">
                    <span className="w-9 h-9 rounded-lg glass flex items-center justify-center shrink-0">
                      <c.icon size={16} className="text-signal" />
                    </span>
                    <span className="text-sm">{c.label}</span>
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 flex flex-col gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs text-mist font-mono uppercase tracking-wide">Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="mt-2 w-full bg-white/5 border border-line rounded-lg px-4 py-3 text-sm text-chalk placeholder:text-mist/50 focus:border-signal outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs text-mist font-mono uppercase tracking-wide">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="mt-2 w-full bg-white/5 border border-line rounded-lg px-4 py-3 text-sm text-chalk placeholder:text-mist/50 focus:border-signal outline-none transition-colors"
                  placeholder="vous@email.com"
                />
              </div>
            </div>
            <div>
              <label className="text-xs text-mist font-mono uppercase tracking-wide">Subject</label>
              <input
                value={form.subject}
                onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                className="mt-2 w-full bg-white/5 border border-line rounded-lg px-4 py-3 text-sm text-chalk placeholder:text-mist/50 focus:border-signal outline-none transition-colors"
                placeholder="Internship, collaboration, opportunity..."
              />
            </div>
            <div>
              <label className="text-xs text-mist font-mono uppercase tracking-wide">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="mt-2 w-full bg-white/5 border border-line rounded-lg px-4 py-3 text-sm text-chalk placeholder:text-mist/50 focus:border-signal outline-none transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              data-cursor-hover
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-signal text-white px-6 py-3.5 text-sm font-medium hover:bg-signal2 transition-colors"
            >
              Send message <Send size={15} />
            </button>
            {sent && (
              <p className="text-xs text-mist text-center">
                Your email client will open with the message pre-filled.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
