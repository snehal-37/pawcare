import { useState } from "react";
import {
  PawPrint,
  MapPin,
  Phone,
  Mail,
  ArrowUp,
  CheckCircle2,
} from "lucide-react";
import SocialIcon from "../Common/SocialIcon";
import { site, navLinks } from "../../data/site";
import { services } from "../../data/services";

const socialLinks = [
  { id: "facebook", label: "Facebook", href: site.socials.facebook },
  { id: "instagram", label: "Instagram", href: site.socials.instagram },
  { id: "twitter", label: "Twitter", href: site.socials.twitter },
  { id: "youtube", label: "YouTube", href: site.socials.youtube },
];

/**
 * Footer — site links, services, contact details, newsletter signup
 * and a back-to-top button.
 */
export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState(false);

  const subscribe = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(true);
      return;
    }
    setError(false);
    setSubscribed(true);
  };

  return (
    <footer className="relative overflow-hidden bg-brand-950 text-brand-100">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-800/40 blur-3xl" />

      <div className="container-site relative pt-16 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1.1fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2.5" aria-label="Back to top of PawCare home">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-sun-300">
                <PawPrint className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="heading-display text-lg font-bold text-white">{site.shortName}</span>
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-sun-400">
                  Veterinary Clinic
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm leading-relaxed text-brand-200/80">
              Modern, compassionate veterinary care for the pets you love. Wellness,
              prevention and healing — all in one warm, welcoming home.
            </p>
            <ul className="mt-6 flex gap-3">
              {socialLinks.map(({ id, label, href }) => (
                <li key={id}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`Follow PawCare on ${label}`}
                    className="grid h-11 w-11 place-items-center rounded-full bg-white/5 text-brand-200 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-sun-400 hover:text-brand-950 hover:ring-sun-400"
                  >
                    <SocialIcon name={id} className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-white">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm text-brand-200/80 transition-colors hover:text-sun-300"
                  >
                    <span className="h-1 w-1 rounded-full bg-brand-500" aria-hidden="true" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-white">
              Our Services
            </h3>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="inline-flex items-center gap-2 text-sm text-brand-200/80 transition-colors hover:text-sun-300"
                  >
                    <span className="h-1 w-1 rounded-full bg-brand-500" aria-hidden="true" />
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + newsletter */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-white">
              Stay in Touch
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-brand-200/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sun-400" aria-hidden="true" />
                {site.address}
              </li>
              <li>
                <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-3 transition-colors hover:text-sun-300">
                  <Phone className="h-4 w-4 shrink-0 text-sun-400" aria-hidden="true" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 transition-colors hover:text-sun-300">
                  <Mail className="h-4 w-4 shrink-0 text-sun-400" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
            </ul>

            <h4 className="mt-7 text-sm font-extrabold text-white">Pet Care Tips Newsletter</h4>
            {subscribed ? (
              <p className="mt-3 flex items-center gap-2 rounded-2xl bg-white/5 px-4 py-3 text-sm font-semibold text-sun-300 ring-1 ring-white/10">
                <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden="true" />
                You're subscribed! Welcome aboard.
              </p>
            ) : (
              <form onSubmit={subscribe} noValidate className="mt-3">
                <div className="flex overflow-hidden rounded-full bg-white/5 ring-1 ring-white/10 transition-shadow focus-within:ring-sun-400/60">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError(false);
                    }}
                    placeholder="you@example.com"
                    className="w-full bg-transparent px-5 py-3 text-sm text-white placeholder:text-brand-200/50 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="shrink-0 bg-sun-400 px-5 py-3 text-sm font-bold text-brand-950 transition-colors hover:bg-sun-300"
                  >
                    Subscribe
                  </button>
                </div>
                {error && (
                  <p role="alert" className="mt-2 text-sm font-semibold text-red-400">
                    Please enter a valid email address.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-white/10 py-8 sm:flex-row">
          <p className="text-center text-sm text-brand-200/70">
            © {new Date().getFullYear()} {site.name}. All rights reserved. Fictional
            clinic demo site.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#home" className="text-brand-200/70 transition-colors hover:text-sun-300">
              Privacy Policy
            </a>
            <a href="#home" className="text-brand-200/70 transition-colors hover:text-sun-300">
              Terms of Service
            </a>
            <a
              href="#home"
              aria-label="Back to top"
              className="grid h-11 w-11 place-items-center rounded-full bg-white/5 text-brand-200 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-sun-400 hover:text-brand-950 hover:ring-sun-400"
            >
              <ArrowUp className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}