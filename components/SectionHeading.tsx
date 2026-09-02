import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="max-w-2xl mb-14">
      <span className="section-label">{eyebrow}</span>
      <h2 className="mt-3 font-display text-3xl md:text-4xl font-medium tracking-tight text-chalk">
        {title}
      </h2>
      {description && <p className="mt-4 text-mist leading-relaxed">{description}</p>}
    </Reveal>
  );
}
