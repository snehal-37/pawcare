import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CalendarCheck,
  CheckCircle2,
  Send,
} from "lucide-react";
import Reveal from "../Common/Reveal";
import SectionHeading from "../Common/SectionHeading";
import { site } from "../../data/site";
import { services } from "../../data/services";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  petName: "",
  petType: "Dog",
  service: "",
  date: "",
  message: "",
};

const fieldClass =
  "w-full rounded-2xl border border-brand-200 bg-white px-5 py-3.5 text-sm text-ink placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-brand-600 focus:ring-4 focus:ring-brand-600/10";

/**
 * Contact — clinic information, hours, a map and an appointment form
 * with client-side validation.
 */
export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((err) => ({ ...err, [field]: undefined }));
  };

  const validate = (values) => {
    const next = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = "Please enter a valid email address.";
    if (values.phone && !/^[+\d][\d\s()-]{6,17}$/.test(values.phone.trim()))
      next.phone = "Please enter a valid phone number.";
    if (!values.service) next.service = "Please choose a service.";
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-mist py-20 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute -right-28 bottom-10 h-80 w-80 rounded-full bg-brand-100/60 blur-3xl" />

      <div className="container-site">
        <SectionHeading
          eyebrow="Contact Us"
          title="Book an Appointment Today"
          description="Reach out by phone, email or the form below — we'll confirm your visit within one working day."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info column */}
          <Reveal>
            <div className="flex h-full flex-col gap-5">
              <InfoCard
                icon={<MapPin className="h-5 w-5" />}
                title="Visit Us"
              >
                <p>{site.address}</p>
              </InfoCard>

              <InfoCard icon={<Phone className="h-5 w-5" />} title="Call Us">
                <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="font-bold text-brand-700 hover:text-brand-900">
                  {site.phone}
                </a>
                <p className="mt-0.5">
                  Emergency:{" "}
                  <a href={`tel:${site.emergencyPhone.replace(/[^+\d]/g, "")}`} className="font-bold text-sun-600 hover:text-sun-700">
                    {site.emergencyPhone}
                  </a>
                </p>
              </InfoCard>

              <InfoCard icon={<Mail className="h-5 w-5" />} title="Email Us">
                <a href={`mailto:${site.email}`} className="font-bold text-brand-700 hover:text-brand-900">
                  {site.email}
                </a>
              </InfoCard>

              <InfoCard icon={<Clock className="h-5 w-5" />} title="Opening Hours">
                {typeof hoursContent !== "undefined" ? hoursContent : <HoursList />}
              </InfoCard>

              <div className="h-56 overflow-hidden rounded-3xl border border-brand-100 shadow-lg shadow-brand-900/5">
                <iframe
                  title="PawCare Veterinary Clinic location map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-72.63%2C42.34%2C-72.60%2C42.37&layer=mapnik&marker=42.35754%2C-72.61571"
                  className="h-full w-full border-0 grayscale-[0.2]"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          {/* Form column */}
          <Reveal delay={0.15}>
            <div className="rounded-[2.5rem] border border-brand-100 bg-white p-7 shadow-2xl shadow-brand-900/10 sm:p-10">
              {submitted ? (
                <div className="flex h-full min-h-[28rem] flex-col items-center justify-center text-center">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-brand-50 text-brand-700">
                    <CheckCircle2 className="h-10 w-10" aria-hidden="true" />
                  </span>
                  <h3 className="heading-display mt-6 text-2xl font-bold text-ink">
                    Appointment Request Received!
                  </h3>
                  <p className="mt-3 max-w-md leading-relaxed text-slate-600">
                    Thank you, {form.name.split(" ")[0] || "friend"}. Our team will
                    reach out to confirm your visit for{" "}
                    <span className="font-semibold text-ink">
                      {form.service}
                    </span>
                    {form.date && <> on <span className="font-semibold text-ink">{form.date}</span></>}.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setForm(initialForm);
                      setSubmitted(false);
                    }}
                    className="mt-7 rounded-full border-2 border-brand-200 px-6 py-3 text-sm font-bold text-brand-700 transition-colors hover:border-brand-700"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Appointment request form">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                      <CalendarCheck className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="text-xl font-extrabold text-ink">Request an Appointment</h3>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Your Name" error={errors.name}>
                      <input
                        type="text"
                        value={form.name}
                        onChange={update("name")}
                        placeholder="Jane Doe"
                        className={fieldClass}
                        aria-invalid={Boolean(errors.name)}
                      />
                    </Field>
                    <Field label="Email Address" error={errors.email}>
                      <input
                        type="email"
                        value={form.email}
                        onChange={update("email")}
                        placeholder="jane@example.com"
                        className={fieldClass}
                        aria-invalid={Boolean(errors.email)}
                      />
                    </Field>
                  </div>

                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <Field label="Phone (optional)" error={errors.phone}>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={update("phone")}
                        placeholder="+1 (555) 000-0000"
                        className={fieldClass}
                        aria-invalid={Boolean(errors.phone)}
                      />
                    </Field>
                    <Field label="Pet's Name">
                      <input
                        type="text"
                        value={form.petName}
                        onChange={update("petName")}
                        placeholder="e.g. Biscuit"
                        className={fieldClass}
                      />
                    </Field>
                  </div>

                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <Field label="Pet Type">
                      <select value={form.petType} onChange={update("petType")} className={fieldClass}>
                        <option>Dog</option>
                        <option>Cat</option>
                        <option>Rabbit</option>
                        <option>Guinea Pig</option>
                        <option>Other Small Pet</option>
                      </select>
                    </Field>
                    <Field label="Preferred Date">
                      <input
                        type="date"
                        value={form.date}
                        onChange={update("date")}
                        className={fieldClass}
                      />
                    </Field>
                  </div>

                  <Field label="Service Needed" error={errors.service}>
                    <select
                      value={form.service}
                      onChange={update("service")}
                      className={fieldClass}
                      aria-invalid={Boolean(errors.service)}
                    >
                      <option value="">Select a service…</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="I'm not sure yet">I'm not sure yet</option>
                    </select>
                  </Field>
                  <div className="mt-5">
                    <Field label="Message (optional)">
                      <textarea
                        value={form.message}
                        onChange={update("message")}
                        rows={4}
                        placeholder="Tell us a little about your pet's needs…"
                        className={`${fieldClass} resize-none`}
                      />
                    </Field>
                  </div>

                  <button
                    type="submit"
                    className="mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-brand-700 px-8 py-4 text-base font-bold text-white shadow-xl shadow-brand-700/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-800 sm:w-auto"
                  >
                    <Send className="h-5 w-5" aria-hidden="true" />
                    Send Appointment Request
                  </button>
                  <p className="mt-4 text-xs leading-relaxed text-slate-500">
                    This demo form doesn't send real messages. Connect it to your own
                    backend or email service in production.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, error, children }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-bold text-ink">{label}</label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-sm font-semibold text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

function InfoCard({ icon, title, children }) {
  return (
    <div className="group flex items-start gap-4 rounded-3xl border border-brand-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/5">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-700 transition-colors duration-300 group-hover:bg-brand-700 group-hover:text-white">
        {icon}
      </span>
      <div>
        <h3 className="font-extrabold text-ink">{title}</h3>
        <div className="mt-1 text-sm leading-relaxed text-slate-600">{children}</div>
      </div>
    </div>
  );
}

function HoursList() {
  return (
    <ul className="space-y-1">
      {site.hours.map((h) => (
        <li key={h.day} className="flex items-center justify-between gap-4">
          <span>{h.day}</span>
          <span className="font-bold text-ink">{h.time}</span>
        </li>
      ))}
    </ul>
  );
}