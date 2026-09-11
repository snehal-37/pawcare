import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import Reveal from "../Common/Reveal";
import SectionHeading from "../Common/SectionHeading";
import { testimonials } from "../../data/testimonials";

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
}

function Stars({ count }) {
  return (
    <div className="flex gap-1" aria-label={`Rated ${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={`h-5 w-5 ${i < count ? "fill-sun-400 text-sun-400" : "text-slate-300"}`}
        />
      ))}
    </div>
  );
}

/**
 * Testimonials — auto-advancing carousel with controls and dot navigation.
 */
export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  const go = useCallback(
    (next) => setIndex((current) => (next + total) % total),
    [total]
  );

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => go(index + 1), 6000);
    return () => clearInterval(id);
  }, [go, index, paused]);

  const testimonial = testimonials[index];

  return (
    <section id="testimonials" className="relative overflow-hidden py-20 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-16 h-72 w-72 rounded-full bg-brand-100/60 blur-3xl" />

      <div className="container-site">
        <SectionHeading
          eyebrow="Testimonials"
          title="Stories From Happy Pet Parents"
          description="Nothing makes us prouder than the trust our clients place in us. Here is what they have to say."
        />

        <Reveal className="relative mx-auto mt-16 max-w-3xl">
          <div
            className="relative overflow-hidden rounded-[2.5rem] border border-brand-100 bg-gradient-to-br from-white to-brand-50/60 p-8 shadow-xl shadow-brand-900/10 sm:p-12"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            aria-roledescription="carousel"
            aria-label="Customer testimonials"
          >
            {/* Big quote mark */}
            <Quote
              aria-hidden="true"
              className="absolute right-8 top-8 h-16 w-16 text-brand-100"
            />

            {/* Slide content */}
            <div className="relative min-h-[16rem] sm:min-h-[13rem]" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.figure
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Stars count={testimonial.rating} />
                  <blockquote className="mt-5 text-lg leading-relaxed text-ink sm:text-xl">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="mt-7 flex items-center gap-4">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-brand-700 text-lg font-extrabold text-white">
                      {initials(testimonial.name)}
                    </span>
                    <div>
                      <p className="font-extrabold text-ink">{testimonial.name}</p>
                      <p className="text-sm font-semibold text-brand-700">
                        {testimonial.pet}
                      </p>
                      <p className="text-sm text-slate-500">{testimonial.location}</p>
                    </div>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="relative mt-8 flex items-center justify-between">
              <div className="flex gap-2" role="tablist" aria-label="Choose testimonial">
                {testimonials.map((t, i) => (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Show testimonial from ${t.name}`}
                    onClick={() => go(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === index ? "w-8 bg-brand-700" : "w-2.5 bg-brand-200 hover:bg-brand-300"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => go(index - 1)}
                  aria-label="Previous testimonial"
                  className="grid h-11 w-11 place-items-center rounded-full border-2 border-brand-200 bg-white text-brand-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-700 hover:bg-brand-700 hover:text-white"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => go(index + 1)}
                  aria-label="Next testimonial"
                  className="grid h-11 w-11 place-items-center rounded-full border-2 border-brand-200 bg-white text-brand-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-700 hover:bg-brand-700 hover:text-white"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}