import { CalendarCheck } from "lucide-react";
import Reveal from "../Common/Reveal";
import SectionHeading from "../Common/SectionHeading";
import SocialIcon from "../Common/SocialIcon";
import { doctors } from "../../data/doctors";

const socialLabels = {
  facebook: "Facebook",
  twitter: "Twitter",
  instagram: "Instagram",
  linkedin: "LinkedIn",
};

/**
 * Doctors — team grid with photos, specialties, short bios and social links.
 */
export default function Doctors() {
  return (
    <section id="doctors" className="relative overflow-hidden bg-mist py-20 lg:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="Meet Our Team"
          title="Caring Vets Who Treat Your Pet Like Family"
          description="Our veterinarians bring years of experience, warm personalities and a genuine love for animals to every consultation."
        />

        <ul className="mt-16 grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor, i) => (
            <Reveal key={doctor.id} delay={(i % 4) * 0.1}>
              <li className="group">
                <div className="relative overflow-hidden rounded-t-[2rem] rounded-b-[2rem] shadow-lg shadow-brand-900/10">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={doctor.image}
                      alt={`Portrait of ${doctor.name}, ${doctor.specialty}`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>

                  {/* Social icons revealed on hover */}
                  <div className="absolute inset-x-0 bottom-4 flex justify-center gap-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {Object.entries(doctor.socials).map(([key, href]) => (
                      <a
                        key={key}
                        href={href}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${doctor.name} on ${socialLabels[key] ?? key}`}
                        className="grid h-10 w-10 place-items-center rounded-full bg-white/95 text-brand-700 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-brand-700 hover:text-white"
                      >
                        <SocialIcon name={key} className="h-4.5 w-4.5" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mt-5 text-center">
                  <h3 className="text-lg font-extrabold text-ink">{doctor.name}</h3>
                  <p className="mt-1 text-sm font-bold text-brand-700">{doctor.specialty}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{doctor.bio}</p>
                  <a
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-700 transition-colors hover:text-brand-900"
                  >
                    <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                    Book with {doctor.name.split(" ").pop()}
                  </a>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}