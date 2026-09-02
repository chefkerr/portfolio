import { projects } from "@/data/content";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, FileText } from "lucide-react";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const cs = project.caseStudy;

  return (
    <article className="pt-32 pb-24 px-6">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-mist hover:text-signal transition-colors mb-10"
        >
          <ArrowLeft size={15} /> Back to projects
        </Link>

        <span className="section-label">{project.tag} — {project.year}</span>
        <h1 className="mt-3 font-display text-3xl md:text-5xl font-medium tracking-tight text-chalk">
          {project.title}
        </h1>
        <p className="mt-5 text-lg text-mist leading-relaxed max-w-2xl">{project.description}</p>

        <div className="mt-7 flex flex-wrap gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg glass px-4 py-2.5 text-sm text-chalk hover:border-signal/50 transition-colors"
            >
              <Github size={15} /> Source code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg glass px-4 py-2.5 text-sm text-chalk hover:border-signal/50 transition-colors"
            >
              <ExternalLink size={15} /> Demo
            </a>
          )}
          {project.docs && (
            <a
              href={project.docs}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg glass px-4 py-2.5 text-sm text-chalk hover:border-signal/50 transition-colors"
            >
              <FileText size={15} /> Documentation
            </a>
          )}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
  {project.images.map((src, i) => (
    <div
      key={src}
      className={`relative aspect-video rounded-2xl overflow-hidden glass ${
        i === 0 ? "sm:col-span-2" : ""
      }`}
    >
      <Image
        src={src}
        alt={`${project.title} — screenshot ${i + 1}`}
        fill
        sizes={i === 0 ? "100vw" : "50vw"}
        className="object-cover"
      />
    </div>
  ))}
</div>

        {cs && (
          <div className="mt-16 flex flex-col gap-16">
            <section>
              <h2 className="section-label">Objective</h2>
              <p className="mt-4 text-mist leading-relaxed">{cs.objective}</p>
            </section>

            <section>
              <h2 className="section-label">Architecture</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {cs.architecture.map((a) => (
                  <li key={a} className="glass rounded-xl p-4 text-sm text-mist leading-relaxed">
                    {a}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="section-label">Key features</h2>
              <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                {cs.features.map((f) => (
                  <li key={f} className="glass rounded-xl p-4 text-sm text-mist leading-relaxed">
                    {f}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="section-label">Challenges &amp; solutions</h2>
              <div className="mt-4 flex flex-col gap-4">
                {cs.challenges.map((c, i) => (
                  <div key={i} className="glass rounded-xl p-5">
                    <p className="text-sm text-chalk/90"><span className="text-amber font-mono text-xs mr-2">Challenge</span>{c.problem}</p>
                    <p className="text-sm text-mist mt-2"><span className="text-signal font-mono text-xs mr-2">Solution</span>{c.solution}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="section-label">Results</h2>
              <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                {cs.results.map((r) => (
                  <li key={r} className="glass rounded-xl p-4 text-sm text-chalk/90 leading-relaxed">
                    {r}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="section-label">Lessons learned</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {cs.lessons.map((l) => (
                  <li key={l} className="text-sm text-mist leading-relaxed border-l-2 border-signal/50 pl-4">
                    {l}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        )}
      </div>
    </article>
  );
}
