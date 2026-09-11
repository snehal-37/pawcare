import { Phone, CalendarCheck, ArrowRight } from "lucide-react";
import Reveal from "../Common/Reveal";
import { site } from "../../data/site";
import ctaDog from "../../assets/images/common/cta-dog.jpg";

/**
 * CTA — bold full-width call-to-action band with an image background.
 */
export default function CTA() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24" aria-labelledby="cta-heading">
      <img
        src={ctaDog}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-900/85 to-brand-800/70" />
      <div aria-hidden="true" className="animate-float absolute right-10 top-12 opacity-20">
        <PawGlyph className="h-20 w-20 text-white" />
      </div>

      <div className="container-site relative">
        <Reveal className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-sun-300 ring-1 ring-white/20">
            <span className="h-1.5 w-1.5 rounded-full bg-sun-400" aria-hidden="true" />
            Book a visit
          </span>
          <h2
            id="cta-heading"
            className="heading-display mt-5 text-3xl leading-tight text-white sm:text-4xl lg:text-[2.9rem]"
          >
            Ready to Give Your Pet the Best Care?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-brand-100">
            Schedule an appointment today and let our caring team welcome your
            furry friend with open arms. Same-day appointments are often available.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-full bg-sun-400 px-8 py-4 text-base font-bold text-brand-950 shadow-xl shadow-sun-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-sun-300"
            >
              <CalendarCheck className="h-5 w-5" aria-hidden="true" />
              Book an Appointment
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
              className="inline-flex items-center gap-2.5 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {site.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PawGlyph({ className = "" }) {
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