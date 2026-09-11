import { motion, useReducedMotion } from "framer-motion";
import {
  CalendarCheck,
  PawPrint,
  ShieldCheck,
  HeartHandshake,
  Star,
  Stethoscope,
} from "lucide-react";
import heroPet from "../../assets/images/hero/hero-pet.jpg";
import heroCat from "../../assets/images/hero/hero-cat.jpg";
import { site } from "../../data/site";

const trustBadges = [
  { id: "b1", icon: ShieldCheck, label: "Trusted Care" },
  { id: "b2", icon: Stethoscope, label: "Expert Vets" },
  { id: "b3", icon: HeartHandshake, label: "5,000+ Happy Pets" },
  { id: "b4", icon: Star, label: "4.9 Rated Clinic" },
];

/**
 * Hero — visually rich opening section with floating imagery,
 * animated shapes, dual CTAs and trust indicators.
 */
export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 36 },
    animate: prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-cream pt-32 pb-20 lg:pt-40 lg:pb-28"
    >
      {/* Decorative background shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-28 -top-28 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-sun-200/40 blur-3xl" />
        <div className="animate-float absolute right-[12%] top-24 hidden lg:block">
          <PawPrint className="h-8 w-8 text-brand-300" />
        </div>
        <div className="animate-float-slow absolute bottom-32 left-[8%] hidden lg:block">
          <PawPrint className="h-10 w-10 text-sun-300/70" />
        </div>
        <div className="animate-spin-slow absolute left-[42%] top-16 hidden h-24 w-24 lg:block">
          <span className="absolute inset-0 rounded-full border-2 border-dashed border-brand-200" />
        </div>
      </div>

      <div className="container-site relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Text column */}
        <div className="relative z-10 max-w-xl">
          <motion.div
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-brand-800 shadow-sm ring-1 ring-brand-100"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-600" />
            </span>
            Accepting new patients
          </motion.div>

          <motion.h1
            {...fadeUp(0.08)}
            className="heading-display mt-6 text-[2.5rem] leading-[1.08] text-ink sm:text-6xl lg:text-[4.25rem]"
          >
            Compassionate Care for{" "}
            <span className="relative inline-block text-brand-700">
              Every Paw,
              <svg
                className="absolute -bottom-2 left-0 w-full text-sun-400"
                viewBox="0 0 300 12"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M2 9C60 2 140 2 298 8" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none" />
              </svg>
            </span>{" "}
            Tail &amp; Whisker.
          </motion.h1>

          <motion.p
            {...fadeUp(0.16)}
            className="mt-7 text-lg leading-relaxed text-slate-600"
          >
            {site.name} blends modern veterinary medicine with a warm,
            gentle touch — so your best friend gets world-class healthcare in
            a place they actually love to visit.
          </motion.p>

          <motion.div
            {...fadeUp(0.24)}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-full bg-brand-700 px-8 py-4 text-base font-bold text-white shadow-xl shadow-brand-700/30 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-800"
            >
              <CalendarCheck className="h-5 w-5" aria-hidden="true" />
              Book an Appointment
            </a>
            <a
              href="#services"
              className="group inline-flex items-center gap-2.5 rounded-full border-2 border-brand-200 bg-white px-8 py-4 text-base font-bold text-brand-800 transition-all duration-300 hover:-translate-y-1 hover:border-brand-600 hover:text-brand-700"
            >
              Explore Services
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.ul
            {...fadeUp(0.32)}
            className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4"
          >
            {trustBadges.map(({ id, icon: Icon, label }) => (
              <li key={id} className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand-700">
                  <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                </span>
                <span className="text-[0.8rem] font-bold leading-tight text-slate-700">
                  {label}
                </span>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Image column */}
        <div className="relative">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto max-w-md lg:max-w-none"
          >
            {/* Blob behind image */}
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-[3rem] bg-gradient-to-tr from-brand-200 via-brand-50 to-sun-100"
            />
            <img
              src={heroPet}
              alt="A happy brown dog in a cozy sweater, smiling at the camera"
              className="relative aspect-[4/5] w-full rounded-[2.5rem] object-cover shadow-2xl shadow-brand-900/20"
              loading="eager"
            />

            {/* Floating rating card */}
            <motion.div
              {...fadeUp(0.5)}
              className="animate-float absolute -left-6 top-10 rounded-2xl bg-white p-3.5 pr-5 shadow-xl shadow-slate-900/10 sm:-left-10"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-sun-100 text-sun-600">
                  <Star className="h-5 w-5 fill-current" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-extrabold text-ink">4.9 / 5.0</p>
                  <p className="text-xs font-medium text-slate-500">1,200+ reviews</p>
                </div>
              </div>
            </motion.div>

            {/* Floating pet card */}
            <motion.div
              {...fadeUp(0.62)}
              className="animate-float-slow absolute -right-4 -bottom-8 w-40 overflow-hidden rounded-3xl shadow-xl shadow-slate-900/15 ring-4 ring-white sm:-right-8 sm:w-48"
            >
              <img
                src={heroCat}
                alt="A calm cat relaxing at the veterinary clinic"
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 pt-8">
                <p className="text-xs font-bold text-white">Now booking new pets</p>
              </div>
            </motion.div>

            {/* Small clinic badge */}
            <motion.div
              {...fadeUp(0.7)}
              className="absolute -top-5 right-8 rounded-2xl bg-brand-700 px-4 py-3 text-white shadow-lg shadow-brand-800/30"
            >
              <p className="text-[0.68rem] font-bold uppercase tracking-widest text-brand-200">
                Since 2016
              </p>
              <p className="text-sm font-extrabold">10+ years of care</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}