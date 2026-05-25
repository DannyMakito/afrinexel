# Agent Prompt — Our Work Page & Case Study Pages (Next.js)
# Paste this entire prompt to your AI code editor agent (Cursor, Windsurf, Copilot Chat, etc.)

---

I want you to build two page types for our work page that user will click on the nav bar . if the path doesnt exist create it or replace the incorcect path.

The project data is already defined in `src/data/projects.ts`. Adjust the import path to match
my actual project structure if it differs. Do not modify the data file — read from it as-is.

---

## IMAGE STRUCTURE (read carefully before writing any component)

Each project has an `images` object with exactly four slots used across the two pages:

```
images: {
  ourWork        → 16:9  — shown on the /work listing page card
  caseStudyHero  → 16:9  — full-width banner at top of /work/[slug]
  mobile         → 9:16 portrait  — beside section 1 on case study (phone mockup)
  desktop        → 16:9 landscape — beside section 2 on case study (laptop view)
  detail         → 4:3  landscape — beside section 3 on case study (feature close-up)
}
```

Each case study section also declares:
- `section.image`  → which key to use: "mobile" | "desktop" | "detail"
- `section.imageLayout` → "portrait" | "landscape"
- `section.imageAlt` → descriptive alt text string

Use these fields — do not hardcode which image goes where.

---

## MOBILE RESPONSIVENESS RULES (apply to every component)

1. All images must use `next/image` with explicit `width` and `height` (or `fill` + a sized
   wrapper) — no CLS ever.
2. Use `sizes` prop on every `next/image` to match the actual rendered size at each breakpoint.
3. Portrait images (mobile mockups): render at natural ratio ~390×844. Constrain with
   `max-w-[220px] sm:max-w-[260px]` and `mx-auto` so they don't blow up on large screens.
4. Landscape images (desktop, detail): use `aspect-video` (16:9) or `aspect-[4/3]` with
   `w-full object-cover`.
5. Every two-column layout uses `grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16`.
   On mobile all columns stack — image always renders ABOVE text via `order-first` on the
   image cell, regardless of the desktop alternation direction.
6. Container max-width: `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8` on every section.
7. Section vertical padding: `py-12 md:py-20`.
8. All interactive elements (buttons, links) minimum 44px tap target.

---

## PAGE 1 — `/work`  (Our Work listing)

### Layout architecture (top to bottom)

**A. Hero section**
- Full-width, centred
- H1: "Our Work"
- One short paragraph about the studio's craft and approach (write something fitting)
- No stats, no numbers

**B. Project list**
Render `projects` array as a vertical stack of project rows.
Each row is a two-column alternating grid:
- Odd index (0, 2, …): image LEFT column, text RIGHT column
- Even index (1, 3, …): text LEFT column, image RIGHT column
- On mobile: always stacks to image on top, text below (use `order-first` on image div)

**Each project row contains:**

*Image column:*
- `next/image` using `project.images.ourWork`
- Aspect ratio: `aspect-video` (16:9), `w-full object-cover rounded-xl`
- `sizes="(max-width: 1024px) 100vw, 50vw"`
- For `type === "graphic-design"` projects: same treatment, no special styling needed

*Text column:*
- Client name as `<h2>` — large, bold
- `project.tagline` as a styled subtitle (muted colour, medium weight)
- `project.shortDescription` — map each string to its own `<p>` tag
- Tech stack: render `project.techStack` as small pill/badge tags
- CTA button(s):
  - For `type === "website"`: "Read Case Study" → `href="/work/${project.slug}"`
  - For `type === "graphic-design"`: "View Design" → `href={project.graphicAssetUrl}` with
    `target="_blank" rel="noopener noreferrer"` (no internal case study link on the card)

**C. Get in Touch section**
- Full-width, centred, distinct background tone
- Short heading + one line of text
- Single CTA button: "Let's Work Together" → `/contact`

---

## PAGE 2 — `/work/[slug]`  (Case Study detail)

Export `generateStaticParams` using `getAllProjectSlugs()`.
Fetch data using `getProjectBySlug(params.slug)`.
Return `notFound()` if slug doesn't resolve.

### Layout architecture (top to bottom)

**A. Hero section**
- `project.caseStudy.headline` as `<h1>` — large, full container width, centred or left-aligned
- Below it: `project.images.caseStudyHero` rendered full container width
  - Use `aspect-video w-full object-cover rounded-xl`
  - `sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1152px"`

**B. Meta strip**
- Source: `project.caseStudy.metaStrip` (5 fields: industry, location, goal, outcome, stack)
- Layout: `grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4`
- Each cell: a small icon (use Heroicons or inline SVG — pick a fitting icon per field) +
  a label in muted text above + the value in normal weight below
- Icons to use:
  - industry  → BuildingOffice2Icon (or similar)
  - location  → MapPinIcon
  - goal      → FlagIcon
  - outcome   → CheckCircleIcon
  - stack     → CodeBracketIcon
- On mobile the grid wraps cleanly — 2 columns on xs, 3 on sm, all 5 on lg

**C. Narrative sections**
Loop over `project.caseStudy.sections` (always 3 sections).

For each section render a two-column grid:
- `grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center`
- Alternate image side: section index 0 → image RIGHT, section index 1 → image LEFT,
  section index 2 → image RIGHT
- On mobile: image ALWAYS above text (`order-first` on image div, `order-last` on text div)

*Image cell:*
- Use `section.image` key to pick from `project.images`
- If `section.imageLayout === "portrait"`:
  - Wrap in `flex justify-center`
  - `<div className="relative w-[220px] sm:w-[260px]">` with `aspect-[9/16]`
  - `next/image` with `fill object-cover rounded-2xl shadow-sm`
  - `sizes="(max-width: 640px) 220px, 260px"`
- If `section.imageLayout === "landscape"`:
  - `<div className="relative w-full aspect-video">` or `aspect-[4/3]` for the detail image
  - `next/image` with `fill object-cover rounded-xl`
  - `sizes="(max-width: 1024px) 100vw, 50vw"`
- Always use `section.imageAlt` as the `alt` prop

*Text cell:*
- `section.phase` as `<h3>`
- `section.content` array:
  - First item → `<p>` (the paragraph lead — slightly larger or medium weight)
  - Remaining items that start with "–" → render as `<ul>` with custom styled list items
    (replace the "–" prefix, use a small coloured dot or dash as the bullet via CSS/Tailwind,
    NOT the default browser bullet)
  - Any remaining items NOT starting with "–" → `<p>`

**D. Outcome section**
- `project.caseStudy.outcome` as a styled callout block
- Full container width, distinct background (subtle tint — e.g. `bg-neutral-50 dark:bg-neutral-900`)
- Left border accent: `border-l-4 border-[your-brand-colour]`
- Text slightly larger than body copy, normal weight
- Rounded corners: `rounded-r-xl`

**E. CTA section**
- Full-width, centred
- Primary button: `project.caseStudy.ctaLabel` → `project.caseStudy.ctaUrl`
  - `target="_blank" rel="noopener noreferrer"` for all projects (websites open externally,
    graphic asset opens in new tab)
- Secondary button: "Get in Touch" → `/contact`
- Both buttons side-by-side on desktop, stacked on mobile (`flex flex-col sm:flex-row gap-4`)

---

## COMPONENT FILE STRUCTURE

Create these files (adjust paths to match my existing project structure):

```
src/
  app/
    work/
      page.tsx                     ← /work listing
      [slug]/
        page.tsx                   ← /work/[slug] case study
  components/
    work/
      ProjectRow.tsx               ← single alternating row for listing page
      CaseStudyHero.tsx            ← hero image + H1
      CaseStudyMetaStrip.tsx       ← 5-cell icon grid
      CaseStudySection.tsx         ← single narrative section (image + text)
      CaseStudyOutcome.tsx         ← outcome callout block
      WorkCTA.tsx                  ← reusable CTA section (used on both pages)
  data/
    projects.ts                    ← already exists — do not modify
```

If any of these component names conflict with existing files, prefix them with `Work` and
adjust imports accordingly.

---

## STYLING CONSTRAINTS

- Tailwind CSS utility classes only — no new CSS files unless a pseudo-element or complex
  selector is genuinely impossible in Tailwind
- Check `tailwind.config` for existing custom colours, fonts, and spacing before using
  arbitrary values
- Use the existing button component/variant pattern if one exists in the codebase;
  if not, create a simple reusable `<Button>` with `variant="primary"` and `variant="secondary"`
- No hardcoded hex colours — only Tailwind classes or `tailwind.config` tokens
- No stats, no download buttons, no app store links anywhere on these pages
- Typography scale: H1 > H2 > H3 clearly differentiated in size and weight using Tailwind
  (e.g. `text-4xl md:text-5xl font-bold` for H1, `text-2xl md:text-3xl font-semibold` for H2,
  `text-xl font-semibold` for H3)

---

## FINAL CHECKLIST — verify before finishing

- [ ] Every `next/image` has `alt`, plus either (`width` + `height`) or (`fill` + sized wrapper)
- [ ] Every `next/image` has a `sizes` prop matching actual rendered breakpoints
- [ ] `generateStaticParams` exported from `/work/[slug]/page.tsx`
- [ ] Portrait images (mobile mockups) are constrained in width — not stretched full-column
- [ ] On ALL screen sizes, image renders above text (not beside or below)
- [ ] Alternating desktop layout working: odd rows image-left, even rows image-right
- [ ] Meta strip wraps correctly: 2 cols on mobile → 3 on sm → 5 on lg
- [ ] Outcome block has left border accent and subtle background tint
- [ ] CTA buttons stacked on mobile, side-by-side on sm+
- [ ] All external links have `target="_blank" rel="noopener noreferrer"`
- [ ] Graphic design project (Adelchi) on listing page has NO `/work/adelchi` card link —
      its card CTA goes to the asset URL directly
- [ ] No hardcoded colours — only Tailwind classes
- [ ] No stats mentioned anywhere on either page
