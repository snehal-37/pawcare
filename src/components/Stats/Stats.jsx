import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { stats } from "../../data/whyChooseUs";

/**
 * CountUp — renders a number that counts up from zero
 * the first time it enters the viewport.
 */
function CountUp({ value, suffix = "", duration = 1.6 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    if (prefersReducedMotion) {
      setDisplay(value);
      return;
    }

    let frame;
    let start;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      // Ease-out for a smooth settling feel
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration, prefersReducedMotion]);

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

/**
 * Stats — animated statistics band shown as a trust section.
 */
export default function Stats() {
  return (
    <section aria-label="Clinic statistics" className="relative overflow-hidden bg-brand-950 py-16 lg:py-20">
      {/* Decorative paw prints */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <PawPattern className="absolute -left-6 -top-8 h-40 w-40" />
        <PawPattern className="absolute right-10 bottom-0 h-32 w-32" />
        <PawPattern className="absolute left-1/3 top-2 h-24 w-24" />
      </div>

      <div className="container-site relative">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <li
              key={s.id}
              className="flex flex-col items-center text-center"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="heading-display text-4xl font-bold text-white sm:text-5xl lg:text-[3.4rem]">
                <CountUp value={s.value} suffix={s.suffix} />
              </span>
              <span className="mt-3 h-px w-10 bg-gradient-to-r from-transparent via-sun-400 to-transparent" />
              <span className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-brand-200 sm:text-base sm:normal-case sm:tracking-normal">
                {s.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function PawPattern({ className = "" }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className} fill="currentColor">
      <ellipse cx="22" cy="38" rx="8" ry="10" />
      <ellipse cx="42" cy="38" rx="8" ry="10" />
      <ellipse cx="14" cy="26" rx="8" ry="9" />
      <ellipse cx="32" cy="20" rx="8" ry="9" />
      <ellipse cx="50" cy="26" rx="8" ry="9" />
    </svg>
  );
}