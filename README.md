# PawCare Veterinary Clinic — Landing Page Template

A fully responsive, animated single-page website for a fictional pet clinic
built with **React + Vite**, styled with **Tailwind CSS v4**, animated with
**Framer Motion** and illustrated with **Lucide Icons**.

![Tech](https://img.shields.io/badge/React-18%2B-61dafb) ![Tailwind](https://img.shields.io/badge/Tailwind%20CSS-v4-38bdf8) ![License](https://img.shields.io/badge/License-MIT-blue)

---

## Features

- **13 polished sections** — Navbar, Hero, Stats, About, Services, Why Choose Us, Doctors, Testimonials, CTA, Blog, FAQ, Contact and Footer.
- **Rich micro-animations** — scroll-triggered reveals, floating imagery, animated counters, sliding testimonial carousel, smooth accordions (all respect `prefers-reduced-motion`).
- **Fully responsive** — mobile-first from 360px to 4K with a dedicated animated mobile menu.
- **Accessible basics** — single `<h1>`, descriptive alt text, aria attributes, keyboard-friendly controls.
- **Customizable data layer** — every service, doctor, testimonial, FAQ and blog post lives in `src/data/` for easy edits.
- **Local images only** — all Unsplash photos are bundled in `src/assets/images/` (see `IMAGE-SOURCES.txt` for credits).

---

## Quick start

```bash
npm install       # install dependencies
npm run dev       # start the dev server (Vite)
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

Open the URL printed by `npm run dev` (default `http://localhost:5173`).

---

## Project structure

```
pawcare/
├─ index.html                 # SEO meta, Google Fonts, favicon
├─ vite.config.js             # React + Tailwind CSS v4 plugin
├─ IMAGE-SOURCES.txt          # credits for every bundled image
├─ src/
│  ├─ main.jsx                # React entry point
│  ├─ App.jsx                 # page composition
│  ├─ style.css               # Tailwind v4 theme tokens + base styles
│  ├─ components/
│  │  ├─ Common/              # Reveal, SectionHeading, SocialIcon helpers
│  │  ├─ Navbar/  Hero/  Stats/  About/  Services/
│  │  ├─ WhyChooseUs/  Doctors/  Testimonials/  CTA/  Blog/
│  │  ├─ FAQ/  Contact/  Footer/
│  ├─ data/                   # site config + all editable content
│  └─ assets/images/          # local Unsplash photos
```

---

## Customizing content

Everything editable is collected in `src/data/`:

| File                 | What it controls                                |
| -------------------- | ----------------------------------------------- |
| `site.js`            | Clinic name, phone, email, address, hours, social links, nav links |
| `services.js`        | The 6 service cards                             |
| `doctors.js`         | The vet team + social links                     |
| `testimonials.js`    | Carousel reviews                                |
| `faq.js`             | Accordion questions                             |
| `blog.js`            | Blog post cards                                 |
| `whyChooseUs.js`     | "Why choose us" cards + animated stats          |

- Buttons and links use `#...` anchors to the sections built into this single page — point them at your own routes in production.
- The appearance is driven by Tailwind tokens in `src/style.css` (`--color-brand-*`, `--color-sun-*`, fonts). Change the palette there and the whole site follows.
- Doctor records, client names and reviews are **fictional**. Replace them with real (and authorized) details before going live.

---

## Replacing the images

1. Drop your own photos into `src/assets/images/<area>/` keeping the same filenames, or
2. Update the imports at the top of the matching component / data file.

Update `IMAGE-SOURCES.txt` accordingly. For royalty-free alternatives see
[Unsplash](https://unsplash.com), [Pexels](https://pexels.com) or
[Pixabay](https://pixabay.com).

---

## Notes for production

- The appointment form and newsletter input are **client-side only** and do not
  transmit data. Wire them to your backend or an email service (e.g. Formspree,
  EmailJS) before deploying.
- The footer contact/map uses an OpenStreetMap embed; replace it with your
  preferred map provider and real coordinates.
- Add `npm run lint` / a type checker (TypeScript) if you extend this project
  beyond a static landing page.

---

## License

MIT — use it freely for learning or your own projects. Images remain under the
[Unsplash License](https://unsplash.com/license); see `IMAGE-SOURCES.txt`.