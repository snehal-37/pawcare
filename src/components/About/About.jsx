import {
  HeartPulse,
  Microscope,
  ClipboardCheck,
  Users,
  BadgeCheck,
} from "lucide-react";
import Reveal from "../Common/Reveal";
import vetCare from "../../assets/images/about/vet-care.jpg";
import clinic from "../../assets/images/about/clinic.jpg";

const benefits = [
  {
    id: "compassionate",
    icon: HeartPulse,
    title: "Compassionate Veterinary Care",
    text: "A gentle, friendly approach that pets look forward to.",
  },
  {
    id: "modern",
    icon: Microscope,
    title: "Modern Medical Equipment",
    text: "In-house imaging and labs for fast, accurate diagnosis.",
  },
  {
    id: "personalized",
    icon: ClipboardCheck,
    title: "Personalized Treatment",
    text: "Care plans tailored to your pet's unique needs.",
  },
  {
    id: "trusted",
    icon: Users,
    title: "Trusted by Pet Parents",
    text: "A family of 5,000+ happy pets and their humans.",
  },
];

/**
 * About — story section with layered imagery, an experience badge
 * and animated benefit highlights.
 */
export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-brand-100/60 blur-3xl" />

      <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Imagery */}
        <div className="relative order-2 lg:order-1">
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl shadow-brand-900/15">
              <img
                src={vetCare}
                alt="Veterinarian gently examining a pet during a wellness check-up"
                className="aspect-[4/4.4] w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="absolute -right-4 -bottom-10 hidden w-52 overflow-hidden rounded-3xl shadow-xl ring-8 ring-white sm:block lg:-right-10">
              <img
                src={clinic}
                alt="A happy golden retriever in the bright, modern clinic garden"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="animate-float absolute -left-5 top-8 sm:-left-8">
              <div className="rounded-2xl bg-brand-700 px-5 py-4 text-white shadow-xl shadow-brand-800/30">
                <p className="heading-display text-3xl font-bold">10+</p>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-200">
                  Years of care
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-sun-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-sun-600 ring-1 ring-sun-100">
              <span className="h-1.5 w-1.5 rounded-full bg-sun-500" aria-hidden="true" />
              About PawCare
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="heading-display mt-5 text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">
              A Veterinary Home Built on{" "}
              <span className="text-brand-700">Trust &amp; Gentle Hearts</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Since 2016, {` `}
              <span className="font-semibold text-ink">PawCare</span> has practiced
              fear-free, compassionate medicine. From routine check-ups to urgent
              care, our team treats every patient like family — because to us, they
              are.
            </p>
          </Reveal>

          <ul className="mt-9 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {benefits.map(({ id, icon: Icon, title, text }, i) => (
              <Reveal key={id} delay={0.2 + i * 0.08}>
                <li className="group flex gap-4 rounded-2xl border border-transparent bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-100 hover:shadow-lg hover:shadow-brand-900/5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700 transition-colors duration-300 group-hover:bg-brand-700 group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-extrabold text-ink">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.5}>
            <div className="mt-8 flex items-center gap-3 rounded-2xl bg-brand-50 px-5 py-4 text-sm font-semibold text-brand-800 ring-1 ring-brand-100">
              <BadgeCheck className="h-5 w-5 shrink-0" aria-hidden="true" />
              Accredited, insured and committed to the highest standards of veterinary medicine.
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}