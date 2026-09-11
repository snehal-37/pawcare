import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, PhoneCall, MessageCircleQuestion } from "lucide-react";
import Reveal from "../Common/Reveal";
import SectionHeading from "../Common/SectionHeading";
import { faqs } from "../../data/faq";
import { site } from "../../data/site";

/**
 * FAQ — accessible accordion with a support card beside it.
 */
export default function FAQ() {
  const [openId, setOpenId] = useState(faqs[0].id);

  return (
    <section id="faq" className="relative overflow-hidden py-20 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-sun-100/70 blur-3xl" />

      <div className="container-site grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* Left: heading + support card */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title="Questions? We Have Answers"
            description="Everything you should know about visiting PawCare. Can't find what you need? Our team is one message away."
          />
          <Reveal delay={0.25}>
            <div className="mt-10 rounded-3xl bg-brand-950 p-8 text-white shadow-xl shadow-brand-900/20">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-sun-300">
                <MessageCircleQuestion className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-extrabold">Still have questions?</h3>
              <p className="mt-2 leading-relaxed text-white/70">
                Call us or send a message — our friendly team is happy to help before
                or after your visit.
              </p>
              <a
                href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-sun-400 px-6 py-3.5 text-sm font-bold text-brand-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sun-300"
              >
                <PhoneCall className="h-4 w-4" aria-hidden="true" />
                {site.phone}
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right: accordion */}
        <ul className="mt-10 space-y-4 lg:mt-0">
          {faqs.map((faq, i) => {
            const isOpen = openId === faq.id;
            return (
              <Reveal key={faq.id} delay={i * 0.06}>
                <li
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-brand-200 bg-white shadow-xl shadow-brand-900/10"
                      : "border-brand-100 bg-white/70 hover:border-brand-200"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${faq.id}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-base font-extrabold text-ink sm:text-lg">
                      {faq.question}
                    </span>
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 bg-brand-700 text-white"
                          : "bg-brand-50 text-brand-700"
                      }`}
                    >
                      <Plus className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${faq.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 leading-relaxed text-slate-600">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}