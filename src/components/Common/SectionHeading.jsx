import Reveal from "./Reveal";

/**
 * SectionHeading — consistent eyebrow badge + title + description used
 * at the top of most sections.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}) {
  const alignClass =
    align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      <Reveal>
        <span
          className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] ${
            dark
              ? "bg-white/10 text-brand-200"
              : "bg-brand-50 text-brand-700 ring-1 ring-brand-100"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-sun-500" aria-hidden="true" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={`heading-display mt-5 text-3xl leading-tight sm:text-4xl lg:text-[2.75rem] ${
            dark ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={`mt-4 text-base leading-relaxed sm:text-lg ${
              dark ? "text-white/70" : "text-slate-600"
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}