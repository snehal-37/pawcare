import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import Reveal from "../Common/Reveal";
import SectionHeading from "../Common/SectionHeading";
import { services } from "../../data/services";

/**
 * Services — responsive card grid with image, icon, hover effects
 * and an animated "Learn More" expand interaction.
 */
export default function Services() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="services" className="relative overflow-hidden bg-mist py-20 lg:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="Our Services"
          title="Everything Your Pet Needs, Under One Roof"
          description="From everyday wellness to specialized surgery, our full-service clinic is here for every stage of your pet's life."
        />

        <ul className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isOpen = expanded === service.id;
            return (
              <Reveal key={service.id} delay={(i % 3) * 0.1}>
                <li className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-lg shadow-brand-900/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-900/15">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                    {/* Icon badge */}
                    <span className="absolute bottom-4 left-5 grid h-14 w-14 place-items-center rounded-2xl bg-white text-brand-700 shadow-lg transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </span>
                    <span className="absolute right-4 top-4 rounded-full bg-white/85 px-3 py-1 text-[0.68rem] font-extrabold uppercase tracking-widest text-brand-800 backdrop-blur">
                      Service
                    </span>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-extrabold text-ink">{service.title}</h3>
                    <AnimatePresence initial={false}>
                      <motion.p
                        key="desc"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className={`overflow-hidden text-[0.95rem] leading-relaxed text-slate-600 ${
                          isOpen ? "mt-3" : ""
                        }`}
                      >
                        {service.description}
                      </motion.p>
                    </AnimatePresence>

                    <button
                      type="button"
                      onClick={() => setExpanded(isOpen ? null : service.id)}
                      aria-expanded={isOpen}
                      className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-brand-700 transition-colors hover:text-brand-900"
                    >
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-100 transition-transform duration-300">
                        <Plus
                          className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                          aria-hidden="true"
                        />
                      </span>
                      {isOpen ? "Show Less" : "Learn More"}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}