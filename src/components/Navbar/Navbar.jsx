import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, PawPrint, CalendarCheck } from "lucide-react";
import { site, navLinks } from "../../data/site";

/**
 * Navbar — sticky navigation with scroll effects, active-section
 * highlighting and an animated mobile menu.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = navLinks
        .map((link) => link.href.slice(1))
        .filter((id) => document.getElementById(id));
      const current = sections
        .filter((id) => {
          const el = document.getElementById(id);
          return el && el.getBoundingClientRect().top <= window.innerHeight * 0.5;
        })
        .pop();
      if (current) setActive(current);
    };

    const onKey = (e) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        document.body.style.overflow = "";
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggleMenu = () => {
    setOpen((v) => {
      document.body.style.overflow = v ? "" : "hidden";
      return !v;
    });
  };

  const closeMenu = () => {
    setOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-white/90 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        className="container-site flex items-center justify-between py-4 lg:py-5"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-2.5"
          aria-label={`${site.name} — home`}
        >
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-700 text-white shadow-lg shadow-brand-700/30 transition-transform duration-300 group-hover:rotate-6">
            <PawPrint className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="heading-display text-lg font-bold text-ink sm:text-xl">
              {site.shortName}
            </span>
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-brand-700">
              Veterinary Clinic
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href.slice(1) ? "page" : undefined}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                  active === link.href.slice(1)
                    ? "text-brand-700"
                    : "text-slate-600 hover:text-brand-700"
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-brand-600 transition-transform duration-300 ${
                    active === link.href.slice(1) ? "scale-x-100" : "scale-x-0"
                  }`}
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-700/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-800 hover:shadow-brand-800/30"
          >
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            Book Appointment
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-11 w-11 place-items-center rounded-xl text-slate-700 transition-colors hover:bg-brand-50 lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-brand-100 bg-white lg:hidden"
          >
            <ul className="container-site flex flex-col gap-1 py-5">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className={`block rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                      active === link.href.slice(1)
                        ? "bg-brand-50 text-brand-700"
                        : "text-slate-700 hover:bg-brand-50 hover:text-brand-700"
                    }`}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="mt-3"
              >
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 rounded-full bg-brand-700 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-700/25"
                >
                  <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                  Book Appointment
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}