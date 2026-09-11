import Reveal from "../Common/Reveal";
import SectionHeading from "../Common/SectionHeading";
import { whyChooseUs } from "../../data/whyChooseUs";

/**
 * WhyChooseUs — six numbered reasons highlighting the clinic's strengths.
 */
export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden py-20 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute -left-28 bottom-0 h-80 w-80 rounded-full bg-sun-100/70 blur-3xl" />

      <div className="container-site">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The PawCare Difference"
          description="Modern medicine, timeless kindness. Here is why thousands of pet parents trust us with their best friends."
        />

        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.id} delay={(i % 3) * 0.1}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-brand-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-900/10">
                  <span
                    aria-hidden="true"
                    className="heading-display pointer-events-none absolute -right-2 -top-5 text-[6rem] font-bold leading-none text-brand-800 opacity-[0.07] transition-opacity duration-500 group-hover:opacity-[0.14]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="relative">
                    <span className="grid h-16 w-16 place-items-center rounded-2xl bg-brand-50 text-brand-700 transition-all duration-500 group-hover:-rotate-6 group-hover:bg-brand-700 group-hover:text-white">
                      <Icon className="h-8 w-8" aria-hidden="true" />
                    </span>
                    <h3 className="mt-6 text-xl font-extrabold text-ink">{item.title}</h3>
                    <p className="mt-3 leading-relaxed text-slate-600">{item.description}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}