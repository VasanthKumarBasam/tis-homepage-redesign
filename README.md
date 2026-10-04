# Tulas International School (TIS) – Homepage Redesign

A modern, animated redesign of the [tis.edu.in](https://tis.edu.in/) homepage, built for conversion (admissions enquiries and applications), smooth motion and mobile-first responsiveness. All copy, rankings, testimonials and imagery are retained from the official site.

## 🚀 Live Demo

- **Live URL:** _add your Vercel / Netlify link_
- **Repository:** _add your GitHub link_

## 🛠️ Tech Stack

| Concern    | Choice                                                    |
| ---------- | --------------------------------------------------------- |
| Framework  | React 19 + TypeScript, bundled with Vite                  |
| Styling    | Tailwind CSS v4 (CSS-first `@theme` tokens, class-based dark mode) |
| Animation  | Motion (`motion/react`, the successor to Framer Motion) + CSS keyframes |
| Icons      | Lucide React                                              |
| Linting    | oxlint (React hooks + TypeScript rules)                   |
| Deployment | Vercel                                                    |

## ✨ Standout Features (all four implemented)

1. **Custom cursor** – a spring-smoothed ring (`mix-blend-mode: difference`, so it stays visible on light, dark and photo backgrounds) that grows over links, buttons, tabs and form fields. It only mounts on fine pointers with motion allowed (`(pointer: fine) and (prefers-reduced-motion: no-preference)`), so touch devices never attach the listeners.
2. **Scroll-triggered reveals** – shared `revealGroup` / `revealItem` variants stagger cards into view (0.5s, once per element) via `whileInView`.
3. **Animated theme switcher** – the new theme grows as a circle out of the toggle using the View Transitions API, with an animated sun/moon icon swap. Choice persists in `localStorage`; an inline script in `index.html` applies it before first paint, so there's no light-mode flash. Falls back to a colour cross-fade where View Transitions aren't supported.
4. **Scroll progress bar** – `useScroll()` → `useSpring()` → `scaleX`, so it runs on the compositor with zero React re-renders.

Also: an orchestrated hero load sequence (staggered headline, hand-drawn "yellow line" doodle from the TIS brand, fanned photo stack), animated tabs with a shared-layout pill, a swipeable testimonial carousel, a CSS partner marquee, a sticky mobile admissions bar and a validated enquiry form.

## 📦 Getting Started Locally

Requires Node.js 20.19+ (or 22.12+).

```bash
git clone https://github.com/your-username/tis-homepage-redesign.git
cd tis-homepage-redesign
npm install
npm run dev        # http://localhost:5173
```

Other scripts:

```bash
npm run build      # type-check (tsc -b) + production build to dist/
npm run preview    # serve the production build locally
npm run lint       # oxlint
```

### Deploying to Vercel

Import the repo in Vercel – it auto-detects Vite (build command `npm run build`, output `dist`). No environment variables are needed.

## 🧱 Component Architecture

```
src/
├── App.tsx                 # Page composition + MotionConfig (reducedMotion="user")
├── main.tsx
├── components/
│   ├── animation/          # ScrollProgress, CustomCursor, ThemeToggle, Reveal, Marquee, HandDrawnUnderline
│   ├── layout/             # Navbar, MobileNav, MobileCtaBar, Footer, Logo
│   ├── sections/           # Hero (+ HeroPhotoStack), About, CampusFacts, Sports, StudentVoices,
│   │                       # Recognition, Visitors, ParentReviews, Partners, Enquiry
│   └── ui/                 # ButtonLink, buttonStyles, Container, SectionHeader
├── hooks/
│   ├── useTheme.ts         # theme state, persistence, View Transition circle reveal
│   ├── usePointerFollower.ts # pointer position in motion values + hover/visibility flags
│   ├── useScrolledPast.ts  # boolean "scrolled beyond N px", updates only when it flips
│   └── useMediaQuery.ts    # useSyncExternalStore wrapper around matchMedia
├── data/
│   ├── content.ts          # copy, stats, sports, rankings, visitors, reviews (from tis.edu.in)
│   └── site.ts             # contact details, nav and footer links
├── lib/
│   ├── asset.ts            # single base URL for official TIS media
│   ├── motion.ts           # shared easing + reveal variants
│   └── validation.ts       # pure enquiry-form validator
└── styles/globals.css      # Tailwind import, design tokens, dark-mode variables
```

### Key decisions

- **Content is data.** Every section maps over typed arrays in `src/data`, so copy changes never touch components.
- **High-frequency values stay out of React state.** Scroll position and pointer position live in Motion values and drive `transform` directly. React state only holds booleans that rarely change (`scrolledPast`, `isHovering`, `isVisible`), and `useScrolledPast` only calls `setState` when the boolean actually flips.
- **Only `transform` and `opacity` are animated**, keeping motion at 60 FPS without layout thrashing.
- **Accessibility:** semantic landmarks (`header`, `nav`, `main`, `section` with `aria-labelledby`, `footer`), skip link, visible focus rings, ARIA tabs with arrow-key navigation, `aria-live` carousel, labelled form fields with `aria-invalid`/`aria-describedby` errors and focus moved to the first invalid field, 44px+ touch targets, and `prefers-reduced-motion` respected globally.
- **Theming:** semantic tokens (`bg`, `surface`, `fg`, `muted`, `line`) are CSS variables swapped under `.dark`; brand colours (navy, marigold) stay constant.

### Enquiry form

The form validates on the client (`lib/validation.ts`) and shows a confirmation state. The submit handler in `components/sections/Enquiry.tsx` is marked as the integration point for the admissions CRM endpoint.

## 🎨 Brand Identity Retained

- Navy and marigold palette, and the hand-drawn yellow underline motif from tis.edu.in
- Official copy, rankings, campus facts, visitor list and parent testimonials
- Official logo and imagery, loaded from `tis.edu.in` via `lib/asset.ts` (swap the base URL to self-host)

## ✅ Tested

- Mobile (375px), tablet (768px), desktop (1280px+)
- Light and dark themes, keyboard navigation, reduced motion
- `npm run build` and `npm run lint` pass with zero errors or warnings
