import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import Reveal from "../Common/Reveal";
import SectionHeading from "../Common/SectionHeading";
import { blogPosts } from "../../data/blog";

/**
 * Blog — latest tips and updates from the PawCare team.
 */
export default function Blog() {
  return (
    <section id="blog" className="relative overflow-hidden bg-mist py-20 lg:py-28">
      <div className="container-site">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Pet Health Blog"
            title="Fresh Tips for Happy, Healthy Pets"
            description="Practical advice from our veterinarians on nutrition, prevention and pet wellbeing."
          />
          <Reveal delay={0.2}>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-brand-200 bg-white px-6 py-3 text-sm font-bold text-brand-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-700 hover:text-brand-700"
            >
              View All Articles
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-7 md:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.id} delay={(i % 3) * 0.1}>
              <li>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-lg shadow-brand-900/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-900/15">
                  <a href="#blog" className="relative block h-56 overflow-hidden" aria-label={post.title}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <span className="absolute left-5 top-5 rounded-full bg-sun-400 px-3.5 py-1.5 text-[0.7rem] font-extrabold uppercase tracking-widest text-brand-950 shadow-md">
                      {post.category}
                    </span>
                  </a>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays className="h-4 w-4 text-brand-600" aria-hidden="true" />
                        {post.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-brand-600" aria-hidden="true" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="mt-4 text-xl font-extrabold leading-snug text-ink">
                      <a href="#blog" className="transition-colors hover:text-brand-700">
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-3 leading-relaxed text-slate-600">{post.excerpt}</p>
                    <a
                      href="#blog"
                      className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-brand-700 transition-colors hover:text-brand-900"
                      aria-label={`Read more about ${post.title}`}
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}