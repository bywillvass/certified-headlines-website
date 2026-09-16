# Certified Headlines — Website Brief

## What this is
Certified Headlines is a creative agency: design, branding, and photography for clients. Not a portfolio for one freelancer — a studio. The site needs to *feel* like a creative agency built the site, not a template with the logo swapped in.

## Brand voice (pulled from @certifiedheadlines Instagram)
Tagline: **"We Make Headlines"**

Bio copy: "A Creative Agency. The engine behind the moments you *feel*. DJ's, photographers, designers, visionaries. Creators. All Certified. All in."

Other real lines from existing brand content — use this tone and reuse/adapt these lines across the site:
- "WHO ARE WE?"
- "WE ARE CERTIFIED HEADLINES. A CREATIVE AGENCY. A COLLECTIVE OF PASSIONATE CREATORS."
- "WE MAKE HEADLINES — LITERALLY"
- "WE DESIGN. WE SHOOT. WE DJ. WE CREATE."
- "WE BUILD MOMENTS THAT LIVE IN YOUR HEAD RENT-FREE."
- "WE MAKE IT MATTER."
- Services list as it appears in their content: Social Media, Graphic Design, Photography, Videography, Event Styling, DJ's

Copy for the site should sound like this — short, punchy, declarative "WE ___" statements, confident, a little cocky. Not corporate agency-speak.

## Brand
- Colours: `#171e19` (ink — near-black with a green undertone), `#ffffff` (white), `#ff6a0f` (signal orange — the one loud colour, used sparingly)
- Logo files: placeholder for now — drop into `/assets/logo/` when ready (need primary mark, and a reversed/white version for dark backgrounds)

## Design direction (do not default to generic AI-site patterns)
Avoid: cream background + serif + terracotta; near-black + single neon accent as decoration; SaaS rounded-card grid with soft shadows everywhere; ALL-CAPS eyebrow labels above every section; middle-dot meta strings; arrows appended to every button.

Lean into: the agency's actual craft — design and photography. Treat the page itself like a piece of print/design work: intentional grid, generous negative space, image-led sections (even as placeholders), asymmetry over centred-everything.

### Palette (working tokens)
- `#171e19` — Ink (primary background / primary text on white)
- `#ffffff` — Paper (primary background alt)
- `#ff6a0f` — Signal (one accent — CTAs, one deliberate highlight per section, not decoration everywhere)
- `#e8e6df` — Warm grey (secondary background for section breaks, off Paper so it's not stark white throughout)
- `#8a9089` — Muted sage (borders, dividers, secondary text — a quiet derivative of Ink, not pure grey)

### Type
Two faces, clearly distinct roles:
- **Display/headlines**: Bebas Neue — tall, condensed, bold. Free on Google Fonts, load via CDN. Set big, tight leading, used as a design element itself — not just bigger body text.
- **Body/UI**: Nexa (Fontfabric) — clean geometric sans, small, restrained, does its job and gets out of the way. Loaded via Adobe Fonts (Typekit) kit — add `<link rel="stylesheet" href="https://use.typekit.net/wdv3qtv.css">` in the `<head>`, already licensed through Will's Adobe Fonts account. Fallback stack: `font-family: "nexa", Inter, sans-serif;` in case the Typekit CSS fails to load.

No italic anywhere (brand rule). Single-word colour accents in headlines are welcome (e.g. one word in `#ff6a0f` within a Bebas Neue headline) — this is a deliberate brand choice here, not the generic default to avoid. Titles set in all-caps is fine and expected, since Bebas Neue reads as a caps-first display face. What to still avoid: no small tracked-out label sitting above a heading (e.g. "OUR WORK" as an eyebrow tag before the section title) — go straight into the heading itself.

### Orange accent — graffiti/spray treatment
The orange (`#ff6a0f`) shouldn't just be flat CTA buttons — it should show up as hand-applied marks, like the agency tagged the page. Direct reference: the existing Instagram brand content already uses a rough hand-drawn spray-paint oval circling the words "WE ARE CERTIFIED HEADLINES" — replicate that exact style across the site.
- A rough spray-paint circle or scribble circling a key word or phrase in a headline (SVG, irregular/hand-drawn edge, not a perfect vector circle — matches the existing Instagram reference)
- A spray-paint streak or line cutting across the corner of an image placeholder, like an accent tag
- Keep it rare and deliberate — one or two marks per page max, placed where they draw the eye to something specific (a word, a project title), not scattered as generic decoration
- Texture matters: these should look like actual spray paint (rough edges, slight transparency/overspray, uneven line weight), not a clean flat orange shape — use an SVG filter (turbulence/displacement) or a textured PNG/SVG asset rather than a plain circle

### Layout concept
Asymmetric, editorial — think a print spread more than a web template.
- Hero: full-bleed, off-centre headline, not centred hero-with-subhead-with-two-buttons default. Large type doing the work, image placeholder bleeding off one edge.
- Work/portfolio section: irregular grid (not uniform 3-column cards) — mix of large and small image placeholders, like a contact sheet or a curated spread, not a gallery grid.
- Services (design / branding / photography): three services, but don't number them 01/02/03 unless framed as an actual process — these are parallel offerings, not steps. Consider a horizontal scroll strip or stacked full-width panels instead of three identical cards.
- One deliberate motion moment on load (not fade-up-on-every-section) — e.g. the hero headline assembles/reveals once, then everything else is static until the user acts (hover, click).

### Pages
Multi-page site — separate pages, not a single scroll:
1. **Home** — hero, "We Make Headlines" as the lead line, agency positioning, image placeholder, a taste of featured work, links out to Work/Services
2. **Work** — asymmetric image-placeholder grid, a handful of "projects" (placeholder names/categories: e.g. "Brand identity — [Client]", "Photography — [Client]")
3. **Services** — Social Media, Graphic Design, Photography, Videography — four offerings, not three. Present as distinct services, not steps in a process. (DJ work and event styling are excluded — DJ work routes through On Scene Events, not Certified Headlines.)
4. **About / who are we** — use the existing "WHO ARE WE?" framing: "We are Certified Headlines. A creative agency. A collective of passionate creators." No corporate filler.
5. **Contact** — direct: email, socials, simple contact form or mailto

Shared nav across all pages (logo, page links, consistent header/footer treatment).

### Copy direction
Confident, punchy, declarative — matches the existing Instagram brand voice exactly (see Brand voice section above). Short "WE ___" statements. Not lorem ipsum, not generic agency-speak — pull directly from and extend the real lines already in use: "We design. We shoot. We DJ. We create." / "We build moments that live in your head rent-free." / "We make it matter." Claude Code should write placeholder copy for pages not yet covered by existing brand lines (Work project descriptions, Services blurbs) in this same voice, flagged as placeholder for Will to edit.

## Technical
- Static HTML/CSS/JS (no framework/build step)
- Hosted on Hostinger
- Fully responsive, mobile-first check
- All images as placeholders (labelled div/img with alt text describing what should go there) — Will will swap in real photography/design work later
- Visible keyboard focus states, respect prefers-reduced-motion
- Keep CSS specificity clean — avoid class collisions between section-level and element-level selectors

## Not in scope yet
- CMS/blog
- E-commerce
- Client portal/login
