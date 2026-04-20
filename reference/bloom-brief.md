# Bloom Health — Website Rebuild Brief

Faithful rebuild of the existing Bloom Health Squarespace site as a clean, static multi-page website that can be deployed to Netlify. **Match the existing design as closely as possible.** This is NOT a redesign — it's a port of an already-designed site into code, so the visual system and content should be preserved exactly.

---

## 1. Project Overview

**Bloom Health** is a nurse practitioner-led primary care practice in Gainesville, Florida. Founded in 2023 by Naomi Mostkoff. Woman-owned. Emphasis on personalized, human-centered healthcare with specialties in hormonal health, LGBTQ+ affirming care, and comprehensive wellness.

**Tagline:** "Healthcare that *actually* centers you"

---

## 2. Brand Identity

### Logo
- Wordmark "Bloom*Health*" — "Bloom" in a bold sans-serif, "Health" in italic serif (different weight/style)
- Accompanied by a small flower/plant icon on the left (dark green leaves and stem with a small yellow/tan flower detail)
- Logo appears in two variants: dark version on light backgrounds, light version (all-white) on dark footer
- If a logo file is in `assets/`, use it. If not, recreate as an SVG inline based on the above description.

### Color palette

| Role | Color | Approx hex |
|---|---|---|
| **Primary dark (brand)** | Deep forest green | `#0F3D2E` |
| **Primary teal accent** | Muted teal / dark teal | `#2F7A7A` |
| **Mint highlight** | Soft mint green | `#A8D5C6` |
| **Coral accent** | Warm coral | `#E87461` |
| **Peach accent** | Soft peach | `#F4C2A1` |
| **Powder blue highlight** | Very soft light blue | `#D6E8F0` |
| **Cream background** | Warm off-white | `#FAF5EF` |
| **Text primary** | Deep charcoal | `#1F1F1F` |
| **Text secondary** | Medium gray | `#5A5A5A` |
| **Border subtle** | Warm light gray | `#E8DFD3` |

The forest green is the dominant brand color (nav logo, hero text on pricing card, CTAs in some sections, footer gradient). Coral/peach/mint/powder-blue are used as accent pastels for pill badges, highlighted text, and card backgrounds.

### Typography

- **Headings: Fraunces** (Google Fonts) — warm serif with heavy character. Used for hero headlines, section titles, provider names.
  - Hero headlines: large (clamp between ~2.5rem mobile and ~5rem desktop), weight 400–500, tight line-height (~1.05)
  - Italic variant is used for *emphasized words* within headlines — this is a signature pattern: "Healthcare that *actually* centers you", "We take healthcare *personally*", "Your health *home base*", "What we *specialize* in", "Where are you in the *transition*?", etc.
- **Body: Inter** (Google Fonts) — clean, modern sans-serif. Weight 400 for body, 500–600 for emphasis/labels.
  - Generous line-height 1.6
- **Small uppercase labels** (eyebrows) — Inter, weight 500–600, tracking/letter-spacing ~0.08em, small size (~0.75rem), often inside pill-shaped badges.

---

## 3. Design System Components

These recur across pages — build them as reusable CSS classes.

### 3a. Pill badges ("eyebrows")
Small capsule-shaped labels above hero headlines and section titles. Rounded-full. Different pastel backgrounds per page:
- Home hero: **peach** background, dark text, reads "ACCEPTING PATIENTS"
- About: **peach**, "ABOUT BLOOM"
- Services: **mint**, "OUR SERVICES"
- Primary Care: **peach**, "PRIMARY CARE"
- Perimenopause, PCOS, Weight Management, Postpartum: **mint**, "HORMONAL HEALTH" / "POSTPARTUM" / "NEW PROGRAM" / etc.
- LGBTQ+: **mint**, "INCLUSIVE CARE"
- Metabolic Health: **peach**, "PREVENTATIVE CARE"
- Weight Loss: **coral**, "NEW PROGRAM"

Shape: `padding: 0.4rem 1rem; border-radius: 999px; font-size: 0.75rem; letter-spacing: 0.08em; font-weight: 600; text-transform: uppercase;`

### 3b. Buttons

- **Primary CTA (dark pill)**: deep green or black background, white text, fully rounded (pill shape). Used for "BOOK APPOINTMENT" and similar.
- **Primary CTA (light pill)**: white background, dark text, subtle border. Used as secondary on dark backgrounds.
- **Ghost/outline button**: transparent background, dark green border + text. Used as "OUR SERVICES" secondary on home hero.
- **Mint pill** (used on dark teal footer): soft mint background, dark text. "Learn more"
- **"BOOK NOW" nav button**: dark green/black pill, top right of nav, stays consistent across pages.

All buttons: generous horizontal padding (1.5–2rem), letter-spacing on label, pill shape (border-radius: 999px).

### 3c. Cards

Several card variants:

- **Service card (light)**: cream/white background, rounded corners (~16px), subtle border, small colored flower/star icon in top-left, H3 title, body text, "LEARN MORE →" link at bottom.
- **Dark accent card**: deep green background, cream text. Used for "Hormonal Health" hero card on homepage services section, and "Common Symptoms We Treat" box on service pages. Rounded ~16px.
- **Pricing card (transparent light)**: very soft background, rounded ~16px, thin border, title + amount + description.
- **Info/Insurance box**: soft powder-blue or peach background, rounded ~12px, info about insurance & cost.
- **Quote highlight card**: pale blue tint background, italic serif text with highlighted phrases, small quote mark at top.

### 3d. Highlighted text (inline marker style)
Key words inside quote blocks are wrapped in rounded colored backgrounds, like a highlighter. Different colors used:
- Coral highlight for words like "patients come first", "one-size-fits-all", "coming out", "just deal with it", "a natural part of aging", "willpower", "wrong", "glowing"
- Mint highlight for "affirmed"
- Powder-blue highlight for "personal"

Implementation: `<mark>` style with `background: <pastel>; padding: 0.1em 0.4em; border-radius: 6px;`

### 3e. Numbered step circles
For processes like "Your annual exam" (4 steps), HRT process, etc.
- Soft mint circle with dark green number inside, ~48px
- To the right: step title (bold) + 1–2 sentence description
- Vertical list layout with generous spacing between steps

### 3f. SVG decorative motifs
There's a whole set of small geometric flower/star/burst shapes used as:
- Service card icons (small, ~32px, top-left of card)
- Section header decorations (a larger cluster appears at top of Services page hero)
- Spacer accents

Shapes include: 4-petal flowers, 6-petal flowers, 4-pointed sparkle/star, 8-pointed burst, tiny hearts, teardrops, leaves. Colors: coral, mint, peach, cream, deep green.

If these aren't in the assets, recreate them as inline SVG. Keep them simple and geometric.

### 3g. Provider cards
Special layout used on About page:
- Large portrait photo with rounded corners
- Small "tab" at bottom of photo with name + credentials on a pastel background (peach or mint)
- To the right: "YOUR PROVIDER" eyebrow, "Meet *Firstname*" heading (italic), bio paragraph, "Clinical Experience & Focus" bulleted list, "Education" bulleted list

### 3h. Scrolling marquee
On home page there's a horizontal scrolling text strip below the hero:
"• INCLUSIVE CARE • PERSONALIZED WELLNESS • BLOOM FOR MORE • INCLUSIVE CARE • PERSONALIZED WELLNESS •"
Small text, cream or soft green background, dark text, slow infinite scroll via CSS animation.

### 3i. Top banner
On home page, thin strip above nav: teal background, light text, reads "NOW OFFERING: Medical Weight Loss Program with GLP-1 Medications →" with a clickable arrow.

### 3j. FAQ accordion
On home page "Common Questions" section. Rows with thin top borders, question text with "+" on right, expands on click to reveal answer. Clean, minimal.

Questions include:
- Are you accepting new patients?
- How do I get started?
- What makes you different?
- How can I book an appointment?
- Do you accept insurance? *(NOTE: original had "ariella to finish" — leave this with placeholder answer text, a comment flag for the user to complete later)*

---

## 4. Shared Layout

### Navigation (sticky top, identical on every page)
- Left: logo (icon + "Bloom*Health*" wordmark)
- Right: HOME · SERVICES · WEIGHT LOSS · ABOUT · CONTACT · [BOOK NOW button]
- On current page, the link is underlined
- Thin cream/off-white background, slight bottom border
- Mobile: hamburger icon opens a full-width overlay menu. BOOK NOW stays visible as pill button.

### Footer (identical on every page)
Two parts:

**Upper area** — dark teal-to-green gradient band, full-width, no padding. This actually contains the section below it as a rounded inner card.

**Inner footer card** — darker teal gradient, rounded corners ~32px, inset from sides.

Layout inside inner card:
- Left column (~40% width): "Bloom*Health*" logo in white, large italic serif line "Are you ready to begin?" (cream color), light mint "Learn more" pill button below
- Middle-left column: **Location** label (cream, uppercase small), address
- Middle column: **Services** label, list of service page links
- Right column: **Schedule** label, links: Appointment, About, Contact
- Below the columns, a thin white horizontal divider line, then:
- Small Instagram & Facebook icons (white) on left
- Fine print on right or bottom: "We provide compassionate, affirming, and accessible healthcare for all. We are committed to serving LGBTQ+ individuals and BIPOC communities. We strive to create a welcoming, and empowering space for all."

---

## 5. Technical Structure

Plain static HTML/CSS/JS — no frameworks, no build step. Deploys directly to Netlify.

### File structure
```
/
├── index.html
├── about.html
├── services.html
├── primary-care.html
├── perimenopause.html
├── pcos.html
├── lgbtq-care.html
├── postpartum.html
├── weight-management.html
├── metabolic-health.html
├── weight-loss.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   └── main.js          (mobile menu + smooth scroll + FAQ accordion)
└── assets/
    ├── images/          (user will drop photos here)
    ├── icons/           (SVG sprites — or inline in pages)
    └── logo/            (logo files if provided)
```

### Meta
Every page has proper `<title>`, meta description, Open Graph tags. Google Fonts via `<link>` in `<head>`.

### Responsiveness
Mobile-first. Test breakpoints: mobile (up to 768px), tablet (768–1024px), desktop (1024px+). Navigation collapses to hamburger on mobile. Grids collapse to single column.

---

## 6. Page-by-Page Content & Layout

Each page uses nav + footer described in section 4. Hero section formatting varies per page — see below.

### 6.1 Home (index.html)

**Top banner** (thin strip above nav): teal background
> NOW OFFERING: Medical Weight Loss Program with GLP-1 Medications →

**Hero** — two-column split
- Left column:
  - Peach pill badge: "ACCEPTING PATIENTS"
  - Headline (serif with italic emphasis): "Healthcare that *actually* centers you."
  - Body: "A nurse practitioner-led primary care practice in Gainesville, FL. We specialize in hormonal health, LGBTQ+ affirming care, and personalized wellness for every body."
  - Primary CTA (dark pill): "BOOK APPOINTMENT"
  - Secondary (ghost pill): "OUR SERVICES"
- Right column: large photo of practice interior (green velvet couch with floral art on wall). Small floating card in lower left of image: "LGBTQ+ Affirming Care — Inclusive healthcare for every identity" with a small green heart icon.
- Background: cream

**Scrolling marquee** directly below hero (thin strip):
> • INCLUSIVE CARE • PERSONALIZED WELLNESS • BLOOM FOR MORE •
(repeating, auto-scroll)

**About Bloom teaser**
- Small mint eyebrow: "ABOUT BLOOM"
- Left column: "Women-owned, nurse practitioner-led primary care in Gainesville, FL since 2023."
- Right column: large italic serif headline: "We reject the one-size-fits-all approach to healthcare—because *you deserve better*."
- Sub text: "More than a clinic, we're on a mission to make healthcare feel human again. We see you as a whole person—not a chart, not a number, not a 15-minute appointment slot. That's why we're committed to the personal side of healthcare."
- Small link: "MEET NAOMI →" (links to about.html)

**4-image feature grid** (home page, about mid-scroll)
Four tall cards side-by-side, each with a beautiful image and eyebrow + headline overlaid:
1. "YOUR HEALTH" eyebrow, "Our Services" (image of peony/flower in peach gradient) → links to services.html
2. "NEW PROGRAM" eyebrow, "Weight Loss Program" (image of medical injection pen on green) → links to weight-loss.html
3. "PATIENTS" eyebrow, "Book Appointment" (portrait of woman in profile) → links to booking (# for now)
4. "RESOURCES" eyebrow, "Patient Portal" (image of abstract oil/bubbles) → links to # for now

Cards are tall, rounded corners, eyebrow as a pill near top, serif title near bottom with underline.

**Services section** (cream-to-mint gradient background)
- Small eyebrow: "OUR SERVICES"
- Headline: "What we *specialize* in"
- Top right: outline ghost "VIEW SERVICES" button
- Grid layout: Large dark-green card on left spanning full height, smaller cards to the right in 2 columns, 2 rows
  - LEFT (big, dark green): "Hormonal Health" — "Comprehensive hormone management for PCOS, thyroid disorders, perimenopause, menopause, and more."
  - Right top-left: "LGBTQ+Care" (mint sparkle icon) — "Affirming care for every identity"
  - Right top-right: "Primary Care" (coral star icon) — "Comprehensive wellness visits"
  - Right bottom-left: "Weight Health" (peach sparkle icon) — "GLP-1 medications & support"
  - Right bottom-right: "Postpartum Care" (teal sparkle icon, powder-blue background card) — "Support for new parent"

**Common Questions (FAQ)**
- Eyebrow: "OUR SERVICES"
- Title: "Common Questions"
- Accordion of questions (listed in 3j above). Include placeholder answers for now; flag "Do you accept insurance?" with a comment that it needs Ariella's input.

**Ready-to-meet-us CTA section**
- Background: soft peach-to-cream gradient
- Centered: "Ready to meet us?" serif heading
- Subtext: "Schedule your first appointment and experience the difference."
- Dark pill CTA: "BOOK APPOINTMENT"

Footer follows.

### 6.2 About (about.html)

**Hero** — two-column with image cluster on right
- Left: peach pill "ABOUT BLOOM" + large serif headline "We take healthcare *personally*." + body: "More than a clinic, we're on a mission to flip the healthcare script. We reject the rushed, impersonal approach—because you deserve to be seen, heard, and cared for as a whole person."
- Right: a 3-image collage — one tall image on left (cream background with pink/coral flower petals and vase), and two stacked images on right (practitioner consulting with patient; hands holding phone)

**Founder quote section** (cream background, centered)
- Two small mint quote marks at top
- Large centered serif text:
  > "Healthcare has become an industry machine that forgets the human element. I started Bloom to fix that—to create a space where [patients come first], where every identity is [affirmed], and where care is truly [personal]."
  - Inline highlights: "patients come first" (coral highlight), "affirmed" (mint), "personal" (powder blue)
- Attribution: "Naomi Mostkoff / DNP, APRN, FNP-BC · Founder & Provider"

**Meet Naomi section** (two-column)
- Left: portrait photo with mint/peach colored bottom tab containing "Dr. Naomi Mostkoff / DNP, APRN, FNP-BC"
- Right:
  - Eyebrow: "YOUR PROVIDER"
  - Italic serif: "Meet *Naomi*"
  - Bio: "Dr. Naomi Mostkoff provides thoughtful, evidence-based care and partners with patients to support both immediate needs and long-term health goals. Her work emphasizes inclusive, affirming primary care with a focus on endocrine, metabolic, and hormonal conditions, reproductive and sexual health, mental health, postpartum wellness, and care for the queer community."
  - **Clinical Experience & Focus:** (bullet list)
    - Primary care and women's health
    - Endocrinology, including complex diabetes management
    - Thyroid disease, bone health, and medical weight management
    - LGBTQ-affirming care & Queer Health
    - Post-surgical and post-transplant care
  - **Education:** (bullet list)
    - BA in Anthropology, University of Florida (2009)
    - BSN, University of Florida (2013)
    - DNP, Family Nurse Practitioner, University of Florida (2019)

Below the bio, 3 soft pill tags in a row (different pastels): "Hormonal Health", "LGBTQ+ Care", "Primary Care"

**Meet Malissa section** (same layout as Naomi, photo on left, bio right)
- Photo with peach/mint bottom tab: "Malissa Badal-Yang / MSN, APRN, FNP-C"
- Right:
  - Eyebrow: "YOUR PROVIDER"
  - "Meet *Malissa*"
  - Bio: "Malissa Badal-Yang focuses on building strong, trusting relationships and provides patient-centered, whole-person care grounded in listening, education, and partnership. She values evidence-based care and has particular interests in women's health, geriatric care, and addressing common dermatologic concerns as part of comprehensive primary care."
  - **Clinical Experience & Focus:**
    - Management of acute and chronic conditions
    - Diabetes, hypertension, and respiratory disease
    - Mental health conditions and chronic pain
    - Preventive care and minor procedures
    - LGBTQ-affirming primary care
  - **Education:**
    - AS in Nursing, LaGuardia Community College (2006)
    - BSN, Western Governors University (2019)
    - MSN, Family Nurse Practitioner, University of Texas at Arlington (2025)

**CTA section** (dark background — near-black)
- Centered teal serif "Ready to meet us?"
- Subtext: "Schedule your first appointment and experience the difference."
- White pill button: "BOOK APPOINTMENT"

Footer follows.

### 6.3 Services overview (services.html)

**Hero** — full-width, dark teal gradient background
- Centered serif headline (white/cream): "Healthcare that *actually* centers you"
- Sub: "We don't rush or dismiss. We connect the dots between your symptoms and treat you as a whole person."
- Below, 4 small benefit cards in a row (cream background, rounded, small text):
  - "60-minute new patient appointments—time to actually listen"
  - "Whole-person care that connects your symptoms to root causes"
  - "A provider who knows your story, not just your chart"
  - "Inclusive, affirming care for every body and identity"
- Right side: beautiful cluster of the colorful SVG flower/star motifs (coral, mint, peach, cream shapes)

**Services grid** (cream background)
- Eyebrow: "OUR SERVICES"
- Headline: "Care designed around how you *actually* experience health"
- Grid (3 columns × 3 rows, with the last row having 1 card + quote block):
  1. Primary Care (coral star icon) — "Your health home base. Annual physicals, preventive screenings, chronic condition management, and a provider who actually knows you." LEARN MORE →
  2. Perimenopause (teal sparkle icon) — "Expert support for the hormonal transition, from your first hot flash to thriving beyond menopause. HRT, lifestyle changes, and real answers." LEARN MORE →
  3. PCOS (peach star icon) — "Root-cause care for polycystic ovarian syndrome. We address the whole picture—hormones, metabolism, inflammation—not just individual symptoms." LEARN MORE →
  4. Metabolic Health (coral flower icon) — "Beyond basic labs. Comprehensive metabolic testing, insulin resistance screening, cardiovascular risk assessment, and prevention-focused care." LEARN MORE →
  5. Weight Health (coral sparkle icon) — "Medical weight loss with real support—not just a shipped vial. GLP-1 medications with in-person care, weekly check-ins, and a provider who knows you." LEARN MORE →
  6. Postpartum Care (teal sparkle icon) — "The fourth trimester matters. Hormonal recovery, mental health support, pelvic floor concerns, and comprehensive care for new parents." LEARN MORE →
  7. LGBTQ+Care (mint sparkle icon) — "No explaining required. Your identity is respected from intake to exam room. Primary care, HRT, preventive screenings, and affirming referrals." LEARN MORE →
  8. (quote card spanning 2 columns, pale blue background) Italic serif: "We reject the [one-size-fits-all] approach to healthcare—because [you deserve better] than a rushed appointment and a prescription." (coral highlight on "one-size-fits-all", mint on "you deserve better")

**The Bloom Difference section** (full-width cream)
- Small eyebrow: "THE BLOOM DIFFERENCE"
- Headline: "What makes care here *different*"
- List format (each row: bold title + paragraph, horizontal thin rule between rows):
  - **Time to Actually Listen** — "New patient appointments are 60 minutes. Follow-ups are 30–45 minutes. Because you can't understand someone's health in 10 minutes."
  - **Whole-Person Thinking** — "Your hormones, stress, sleep, nutrition, mental health—it's all connected. We treat the whole picture, not isolated symptoms."
  - **Inclusive by Design** — "Every identity is welcomed here. Your pronouns, your partner, your family structure—all affirmed, always. No exceptions."
  - **Partnership, Not Prescription** — "We explain the why behind recommendations. We discuss options. We make decisions together. Your body, your choice, our expertise."
  - **Continuity of Care** — "You see the same provider every time. Naomi knows your history, your preferences, your goals—not just what's in your chart."

**CTA section** (cream)
- Centered serif: "Ready to experience different?"
- Subtext: "Schedule your first appointment and experience the difference."
- Dark green pill button: "BOOK APPOINTMENT"

Footer follows.

### 6.4 Primary Care (primary-care.html)

**Hero** — centered, soft powder-blue-to-mint gradient background
- Peach pill badge: "PRIMARY CARE"
- Small green flower icon centered below badge
- Centered serif: "Your health *home base*"
- Subtext (centered): "Annual physicals, preventive care, sick visits, and chronic condition management—with a provider who actually knows you, not just your chart number."
- Dark pill CTA centered: "BOOK YOUR ANNUAL EXAM"

**What happens at your annual exam** (cream background, left-aligned max-width)
- Eyebrow: "WHAT TO EXPECT"
- Headline: "What happens at your *annual* exam"
- Body: "Your annual physical is more than a checkbox—it's your opportunity to take stock of your whole health picture, address concerns you've been sitting on, and create a plan for the year ahead."
- 4 numbered mint circles, each with:
  1. **Your Health Story** — "We start by listening. What's changed since last year? What's been on your mind? What symptoms have you been dismissing? This isn't a checklist—it's a conversation about you."
  2. **Comprehensive Exam** — "Head-to-toe physical examination, vital signs, and age-appropriate screenings. For those who need it: breast exam, pelvic exam, and pap smear. We explain everything before we do it."
  3. **Lab Work & Screenings** — "Bloodwork tailored to your age, risk factors, and health goals. We go beyond the basics when needed—thyroid, hormones, metabolic markers, vitamin levels."
  4. **Your Personalized Plan** — "We discuss results together, address any findings, and create a clear plan. This might include lifestyle recommendations, referrals, follow-up labs, or just peace of mind."

**What we treat**
- Eyebrow: "WHAT WE TREAT"
- Headline: "Primary care that covers the *whole* picture"
- Three stacked cream rounded-card sections:

**Preventive Care & Wellness** (card)
Two-column bulleted list (with small coral dot markers):
- Annual physical exams / Bone density screening
- Cancer screenings (breast, cervical, colon) / STI testing
- Immunizations & boosters / Pre-travel consultations
- Heart health assessment / Health optimization counseling

**Acute Care & Sick Visits** (card)
- Upper respiratory infections / Skin rashes & concerns
- UTIs & bladder infections / Minor injuries
- Sinus infections / Allergies
- Digestive issues / Eye & ear infections

**Chronic Condition Management** (card)
- Type 2 diabetes & pre-diabetes / Hypertension (high blood pressure)
- High cholesterol / Anxiety & depression
- Thyroid disorders / Migraines
- Asthma / Autoimmune conditions

**Is this right for you?**
- Eyebrow: "IS THIS RIGHT FOR YOU?"
- Headline: "This appointment may be right for you if..."
- Arrow-bulleted list (→ markers):
  - You're due for your annual physical or haven't had one in years
  - You want a provider who takes time to listen and explain
  - You're managing a chronic condition and want better continuity
  - You've been dismissed by other providers or felt rushed
  - You want preventive care that goes beyond the bare minimum
  - You need a primary care home that's LGBTQ+ affirming
  - You're experiencing symptoms you've been ignoring or can't explain

**Insurance & Cost** box (powder blue background, rounded):
> **Annual physicals are typically covered 100%** as preventive care by most insurance plans when you stay within the preventive visit scope. If we address additional concerns or order labs beyond standard preventive screening, those may be billed separately.
>
> We're transparent about costs. Before any additional services, we'll discuss what's covered and what isn't so you can make informed decisions.
>
> **No insurance?** Self-pay rates available. New patient visits: $200 | Follow-ups: $125

**CTA section** (cream)
- Centered: "Ready for a different kind of *primary care*?"
- Subtext: "Schedule your annual exam and experience what it's like to have a provider who actually knows you."
- Dark green pill button: "BOOK APPOINTMENT"

Footer follows.

### 6.5 Perimenopause & Menopause (perimenopause.html)

**Hero** — centered, powder-blue gradient
- Mint pill badge: "HORMONAL HEALTH"
- Teal sparkle icon
- Serif headline: "Perimenopause & *menopause* care"
- Subtext: "The transition doesn't have to mean suffering in silence. Expert support from your first hot flash to thriving beyond menopause, with real answers, not dismissal."
- Dark pill CTA: "BOOK A CONSULTATION"

**Stages section**
- Eyebrow: "UNDERSTANDING THE STAGES"
- Headline: "Where are you in the *transition*?"
- Body: "Menopause isn't a single event—it's a years-long transition. Understanding where you are helps us create the right treatment plan for your body right now."
- 4 numbered mint circles:
  1. **Early Perimenopause** — "We start by listening. What's changed since last year? What's been on your mind? What symptoms have you been dismissing? This isn't a checklist—it's a conversation about you."
  2. **Late Perimenopause** — "Periods become irregular, skipping months, then coming back heavy. Hot flashes, night sweats, brain fog, and vaginal dryness often intensify. This stage can last 1–3 years. Symptoms are often at their peak."
  3. **Menopause** — "Everything after that 12-month mark. For many, vasomotor symptoms (hot flashes) ease, but long-term concerns—bone density loss, cardiovascular risk, vaginal atrophy—require ongoing attention and care."
  4. **Post-Menopause** — "Everything after that 12-month mark. For many, vasomotor symptoms (hot flashes) ease, but long-term concerns—bone density loss, cardiovascular risk, vaginal atrophy—require ongoing attention and care."

**Symptoms section**
- Eyebrow: "SYMPTOMS WE CARE FOR"
- Headline: "You're not imagining it—and you don't have to suffer"
- Dark green card ("Common Symptoms We Treat") with two-column bulleted list in cream text:
  - Hot flashes & night sweats / Vaginal dryness & painful sex
  - Sleep disruption & insomnia / Urinary symptoms & UTIs
  - Brain fog & memory issues / Weight gain (especially belly)
  - Mood changes & irritability / Joint pain & stiffness
  - Anxiety & depression / Hair thinning
  - Low libido / Heart palpitations

**Treatment options**
- Eyebrow: "TREATMENT OPTIONS"
- Headline: "Personalized treatment for *your body*"
- Sub: "There's no one-size-fits-all approach. We'll discuss your symptoms, health history, and preferences to create a plan that works for you."

**Hormone Therapy (HRT)** cream card:
> Hormone therapy is—in the most effective treatment for menopausal symptoms. We'll discuss the latest evidence, your individual risk factors, and what's a right fit for your body.

Inside: 4 sub-cards in a 2×2 grid:
- **Systemic Estrogen** — "For hot flashes, night sweats, mood, and bone protection. Combined with progesterone if you have a uterus."
- **Vaginal Estrogen** — "Low-dose local treatment for vaginal dryness, painful sex, and urinary symptoms. Minimal systemic absorption—safe for most people."
- **Progesterone** — "Required alongside estrogen if you have a uterus. Can also help with sleep and anxiety. Options: oral, topical, IUD."
- **Testosterone** — "For persistent low libido that doesn't respond to estrogen alone. Off-label but evidence-based. Low doses, carefully titrated."

**Non-Hormonal Options** cream card:
> HRT isn't right for you due to personal preference, health history, or contraindications—we have other effective options.

Inside 2×2 grid:
- **Medications** — "SSRI/SNRI for hot flashes and mood. Gabapentin for night sweats. Oxybutynin for vaginal symptoms. Evidence-based alternatives."
- **Supplements** — "Black cohosh, evening primrose, and others may help some people. We'll discuss what the evidence actually shows."
- **Lifestyle Interventions** — "Sleep hygiene, stress management, exercise, dietary changes. These aren't 'instead of' treatment—they're foundational alongside it."
- **Vaginal Moisturizers** — "Non-hormonal options for days when local vaginal dryness when estrogen isn't an option. Regular use matters."

**Quote highlight card** (pale blue):
> "You've been told to [just deal with it] or that it's [a natural part of aging]. It doesn't have to be this hard."
- Coral highlights on "just deal with it" and "a natural part of aging"

**How this can help**
- Eyebrow: "HOW THIS CAN HELP"
- Headline: "What changes when you get *real treatment*"
- List with horizontal rules (like Bloom Difference section on services page):
  - **Sleep Through the Night Again** — "Night sweats and insomnia don't have to be your new normal. Most people see significant improvement within weeks of starting appropriate treatment."
  - **Get Your Brain Back** — "The fog lifts. Brain fog is estrogen-sensitive—and treating deficiency often dramatically improves cognitive symptoms."
  - **Feel Like Yourself** — "Mood swings, irritability, anxiety—these aren't character flaws. They're often hormonal. Proper treatment can help you feel like you again."
  - **Protect Your Future Health** — "Bone density, heart health, cognitive function—the decisions you make now affect your health for decades. We help you make informed choices."
  - **Enjoy Intimacy Again** — "Vaginal dryness and painful sex aren't normal. You don't have to give up on this part of your life."

**Insurance & Cost** box (peach/cream background):
> **Initial consultations and follow-ups** are typically covered by insurance as evaluation and management visits. Lab work (hormones, thyroid, etc.) is usually covered but may be subject to your deductible.
>
> **Hormone therapy costs vary** depending on what type and if your insurance formulary. Generic options are often affordable ($10–40/month). We'll help you navigate the most cost-effective options that work for your body.
>
> **No insurance?** Self-pay consultation: $175 | Follow-ups: $125

**CTA section** (cream)
- "Ready to thrive through the transition?"
- "Schedule a consultation and let's create a plan that works for your body, your symptoms, and your life."
- Dark green pill CTA: "BOOK APPOINTMENT"

### 6.6 PCOS (pcos.html)

**Hero** — centered, powder-blue gradient
- Mint pill: "HORMONAL HEALTH"
- Peach star icon
- Serif headline: "PCOS treatment that addresses the *root cause*"
- Sub: "Polycystic ovarian syndrome is more than irregular periods—it's a metabolic and hormonal condition that affects your whole body. We treat the complete picture, not just individual symptoms."
- Dark pill CTA: "BOOK A CONSULTATION"

**Symptoms section**
- Eyebrow: "SYMPTOMS WE ADDRESS"
- Headline: "PCOS looks *different* in everyone"
- Body: "You don't need to have every symptom to have PCOS. You don't even need visible cysts on your ovaries. PCOS is a syndrome—a collection of features that shows up differently in each person."
- Dark green card ("Common Symptoms We Treat") with 2-col bulleted list:
  - Irregular or absent periods / Weight gain, especially around the middle
  - Heavy or prolonged bleeding / Skin tags
  - Excess facial or body hair (hirsutism) / Dark patches of skin (acanthosis nigricans)
  - Hormonal acne (jawline, chin, back) / Fatigue and low energy
  - Hair thinning or loss on scalp / Mood swings, anxiety, depression
  - Difficulty losing weight / Difficulty getting pregnant

**Evaluation section**
- Eyebrow: "WHAT TO EXPECT"
- Headline: "Your PCOS *evaluation*"
- 4 numbered mint circles:
  1. **Comprehensive History** — "We'll discuss your period history, weight and fertility health, family patterns, and what you've tried. Food sensitivities matters—everything from head to toes tells a story."
  2. **Hormone & Metabolic Labs** — "Beyond the basics like testosterone, LH/FSH, AMH. We also run thyroid, lipid panels, thyroid function, vitamin D, insulin. We screen for the complete syndrome, not just the individual features."
  3. **Personalized Treatment Plan** — "Based on your symptoms, labs, and goals. Everyone's plan is different. No cookie-cutter protocols. We choose evidence-based medications if needed, supplements and nutrition strategy, movement/exercise, stress management."
  4. **Ongoing Support** — "PCOS is a lifelong condition that requires ongoing management. We'll monitor your response, adjust treatment as needed, and support you through different life stages—including what happens when you're ready."

**Treatment options**
- Eyebrow: "TREATMENT OPTIONS"
- Headline: "Evidence-based treatment for *your PCOS*"
- Sub: "Treatment depends on your symptoms, your labs, and your goals. We often use a combination approach because PCOS is multifactorial—addressing just one piece rarely solves the puzzle."

**Medications** cream card, 2×2 grid:
- **Spironolactone** — "Anti-androgen that reduces hormonal acne, hirsutism (excess hair growth), and scalp hair thinning. Takes 3–6 months to see full results."
- **Metformin** — "Improves insulin sensitivity, our ace (along with reduced insulin) supports weight loss. First-line for evidence of PCOS/insulin."
- **Hormonal birth control** — "Regulates periods, reduces androgens, prevents endometrial buildup from anovulatory cycles, prevents unwanted effects of many options (not everyone in a pill or patch, IUD, hormonal implant)."
- **Fertility Medications** — "When you're ready, Letrozole is the first choice for PCOS. Clomid or referral to fertility specialist with help when we can."

**Supplements** cream card, 3×2 grid:
- **Inositol (Myo + D-Chiro)** — "Evidence-based: supports ovulation, may help with weight loss and metabolic parameters. Evidence-based gold-standard supplement for PCOS."
- **Vitamin D** — "Most symptoms in PCOS are deficient. Supports ovarian health and insulin function. We test baseline and reassess."
- **Magnesium** — "Supports insulin sensitivity and—anxiety and menstrual cramps. Glycinate form is best, several hundred milligrams a day for digestion."
- **Zinc** — "Supplement formula for acne, and acid. May help with zinc acne-prone skin, especially important for scalp and hair loss."
- **Omega-3 Fatty Acids** — "Anti-inflammatory, supports metabolic health, and may be low for folks. PCOS. Quality matters more than dose."
- **DIM (Diindolylmethane)** — "Supports healthy estrogen metabolism. May help people with acne-androgen symptoms even during cycle stages."

**Lifestyle Interventions** cream card, 2×2 grid:
- **Nutrition Strategy** — "Blood sugar stable eats you balanced for many many. You get all type of fiber. The key feature of PCOS, not all PCOS eat balanced. Not about low-carb, it's about balance, protein, healthy fats, fiber."
- **Movement That Works** — "Resistance training helps insulin resistance dramatically. Also walking. Increases insulin sensitivity, builds muscle, doesn't spike stress hormones."
- **Stress Management** — "Chronic stress worsens insulin, worsens acne, worsens period dysfunction. This is 'real'—it's a big thing. Things to address, with not on a wellness system approach to it at the core."
- **Sleep Optimization** — "Poor sleep worsens insulin, worsens hormones, worsens everything. 7–9 hours is a non-negotiable, and addressing sleep apnea for those common in PCOS specifically."

**Quote highlight card** (pale blue):
> "PCOS isn't your fault. It's not about [willpower]. Your body is working differently—and it deserves treatment that recognizes that."
- Coral highlight on "willpower"

**Is this right for you?**
- Eyebrow: "IS THIS RIGHT FOR YOU?"
- Headline: "This appointment may be right for you if..."
- Arrow-bulleted list:
  - You've been diagnosed with PCOS but aren't getting comprehensive treatment
  - You suspect you have PCOS but have never been properly evaluated
  - Your periods are irregular, absent, or unpredictable
  - You're struggling with hormonal acne that won't respond to skincare
  - You're dealing with excess hair growth or hair loss
  - You can't lose weight despite doing "everything right"
  - You're planning for pregnancy and want to optimize your fertility
  - You want to understand and address the root causes, not just mask symptoms

**Insurance & Cost** box (powder blue):
> **PCOS consultations and follow-ups** are typically covered by insurance as evaluation and management visits. Lab work is usually covered although it may be subject to your deductible.
>
> **Medication costs vary** and anti-androgens are frequently expensive ($4–60/month). Most cost savings depend on your plan. Quality coverage if can be $10–200/month depending on what's generic.
>
> **No insurance?** Self-pay: $200 initial | Follow-ups: $125

**CTA section** (cream): "Ready to get *real answers* about your PCOS?" + subtext + dark pill CTA.

### 6.7 LGBTQ+ Care (lgbtq-care.html)

**Hero** — centered, powder-blue gradient
- Mint pill: "INCLUSIVE CARE"
- Mint sparkle icon
- Serif: "LGBTQ+ affirming care—no explaining required"
- Sub: "Your identity is affirmed from the moment you fill out your intake form. Your pronouns are used correctly. Your partner is welcomed. Your body is respected. You don't have to educate us—we've done the work."
- Dark pill CTA: "BOOK A CONSULTATION"

**What we mean by affirming**
- Eyebrow: "WHAT WE MEAN BY AFFIRMING"
- Headline: "This is what *inclusive care* actually looks like"
- List format with horizontal rules, 5 items:
  - **Your Identity Is Respected From the Start** — "Our intake forms ask for your pronouns, gender identity, and chosen name. This information is put in your chart and is used by everyone on the team. You won't be misgendered here."
  - **No Assumptions About Your Body** — "We don't assume what parts you have, what you do with them, or who you do with it. We ask clinically relevant questions respectfully and take your lead on what you're comfortable discussing."
  - **Your Partner and Family Are Welcome** — "Whether you're married, partnered, poly, co-parenting, or single—your family structure is valid and welcomed. We don't make you explain or justify your relationships."
  - **We've Done the Work** — "You don't need to educate us on LGBTQ+ health needs. We stay current on evidence-based care for our community. We know the right questions to ask—and how to ask them."
  - **Affirming Referrals When Needed** — "When you need a specialist, we refer you to providers we've vetted for inclusivity. We won't send you to someone who will make you uncomfortable or misgender you."

**Our services**
- Eyebrow: "OUR SERVICES"
- Headline: "Comprehensive care for every body"

**Gender-Affirming Hormone Therapy** cream card:
> We provide hormone therapy for transgender and nonbinary patients using an informed consent model.
Two-column bulleted list:
- Estrogen therapy (feminizing HRT) / Testosterone therapy (masculinizing HRT)
- Regular hormone level monitoring / Anti-androgen medications
- Progesterone when appropriate / Informed consent process
- Health monitoring (labs, vitals) / Ongoing dose adjustments

**Sexual Health** cream card:
> Judgment-free sexual health care that treats you where you are.
Two-column list:
- STI testing and treatment / PrEP (HIV prevention)
- PEP (post-exposure prophylaxis) / Sexual wellness counseling
- Contraception (when relevant) / HPV vaccination

**Quote highlight card** (pale blue):
> "Healthcare shouldn't require [coming out] over and over, or hoping your provider won't say something hurtful. Here, you can just... exist."
- Coral highlight on "coming out"

**How hormone therapy works here**
- Eyebrow: "GENDER-AFFIRMING HRT"
- Headline: "How hormone therapy works here"
- 4 numbered mint circles:
  1. **Initial Consultation** — "We discuss your goals, health history, and what to expect from hormone therapy. We use an informed consent model—you don't need a therapist's letter to 'prove' your gender. We do order baseline labs."
  2. **Start Hormones** — "Once labs are back and we've reviewed the informed consent process, you can start hormones. We typically start at a lower dose and titrate up based on your response and how you feel."
  3. **Ongoing Monitoring** — "Regular follow-ups to check hormone levels, adjust dosing, monitor health markers, and make sure you're getting the effects you want. We're partners in your transition."
  4. **Whole-Person Care** — "HRT is part of your healthcare, not all of it. We're here for your primary care needs—routine visits, preventive care, mental health support, whatever you need."

**Is this right for you?**
- Eyebrow: "IS THIS RIGHT FOR YOU?"
- Headline: "This may be right for you if..."
- Arrow-bulleted list:
  - You identify as LGBTQ+ and want a provider who gets it
  - You're transgender or non-binary and seeking hormone therapy
  - You've had negative experiences with healthcare providers in the past
  - You're tired of having to educate your doctor
  - You want preventive care that's appropriate for your actual body
  - You need sexual health services without judgment
  - You're looking for PrEP or sexual health support
  - You want a healthcare home that welcomes your whole self

**Insurance & Cost** box (soft coral/peach):
> **Office visits are typically covered** by insurance. Gender-affirming hormone therapy is increasingly covered by insurance plans—we can help you navigate what your plan covers.
>
> **Hormone costs vary** by type and your insurance. Many are affordable as generic ($10–40/month). Injectable testosterone is often very affordable. Estrogen patches tend to cost more than pills.
>
> **PrEP** is often covered with or out of pocket under the ACA. We'll help you navigate coverage.
>
> **No insurance?** Self-pay visits: $175 initial / $125 follow-up. We work to make care accessible.

**CTA section** (dark teal gradient similar to services hero):
- "Ready for healthcare that *affirms you*?"
- "Schedule an appointment and experience what it's like to be fully welcomed."
- White pill CTA: "BOOK APPOINTMENT"

### 6.8 Postpartum (postpartum.html)

**Hero** — centered, powder-blue gradient
- Mint pill: "POSTPARTUM"
- Coral sparkle icon
- Serif: "The fourth trimester *matters*"
- Sub: "Your body just did something extraordinary. Now it needs support—not a single 6-week checkup and a pat on the back. Comprehensive postpartum care for your hormones, your mental health, and your recovery."
- Dark pill CTA: "BOOK YOUR POSTPARTUM VISIT"

**Why this matters**
- Eyebrow: "WHY THIS MATTERS"
- Headline: "You deserve more than a *single checkup*"
- Body: "The standard model—one visit at 6 weeks, maybe a quick 'how are you feeling?'—isn't enough. Your body is going through massive hormonal shifts. Your mental health is vulnerable. Your identity is transforming. You need real support, not a checkbox appointment."
- Checkmark bulleted list (green checkmarks):
  - Hormonal recovery and rebalancing
  - Postpartum mood disorder screening and support
  - Pelvic floor concerns and referrals
  - Breastfeeding support and guidance
  - Return to work fitness, nutrition, movement
- Dark green card below ("What we know about postpartum") with 2-col list:
  - Hormones crash dramatically after birth / Pelvic floor issues are understudied
  - Thyroid issues often emerge postpartum / Sleep deprivation affects everything
  - 1 in 5 experience postpartum mood disorders / You need support, not judgment
  - Recovery takes longer than 6 weeks / Nutrient depletion is common

**Comprehensive postpartum support**
- Eyebrow: "WHAT WE CARE FOR"
- Headline: "Comprehensive postpartum *support*"

**Mental Health** cream card:
> Postpartum mood disorders are common, treatable, and nothing to be ashamed of.
2×2 grid:
- **Depression Screening** — "Beyond the 'hold-up' scale—we actually talk about how you're feeling. Sadness, numbness, rage, or the overthinking is all valid, all treatable."
- **Anxiety Support** — "Postpartum anxiety is as common as depression. Racing thoughts, inability to sleep even when baby sleeps, constant worry—we can help."
- **Medication When Needed** — "Safe, effective options for breastfeeding parents. We'll discuss benefits and risks together. Breastfeeding isn't failure—it's treatment."
- **Therapy Referrals** — "We connect you with perinatal mental health specialists. Therapy and medication together often work best."

**Hormonal Recovery** cream card:
> Your hormones just went through the biggest shift of your life. Let's support the rebalancing.
2×2 grid:
- **Thyroid Screening** — "Postpartum thyroiditis affects up to 10% of new parents. Symptoms mimic depression and exhaustion—we test to be sure."
- **Hormone Assessment** — "Estrogen, progesterone, testosterone—all can be out of whack. If you're not feeling like yourself, hormones may be part of it."
- **Nutrient Repletion** — "Iron, vitamin D, B12, omega-3s—pregnancy and breastfeeding deplete your stores. We test and replace as needed."
- **Breastfeeding Support** — "Low supply, oversupply, weaning questions—we're here to navigate the hormonal aspects and connect you with lactation support."

**Physical Recovery** cream card:
> Your body needs time and support to heal—physically and functionally.
2×2 grid:
- **Pelvic Floor Assessment** — "Incontinence or pain? All 'it hurts here?' These are common but not normal—and they're treatable. We assess and refer to pelvic floor PT."
- **Contraception Planning** — "When you're ready for it—whether that's avoiding pregnancy or planning another—we'll discuss all your options."
- **Return to Movement** — "When is it safe to move? How do you rebuild strength? We help you navigate safely without setting back your recovery."
- **C-Section Recovery** — "Scar healing, scar tissue, returning to safely care for your recovery and address concerns."

**Quote highlight card** (pale blue):
> "You're supposed to be [glowing] but you feel like you're barely surviving. That's not a personal failure, that's a sign you need more support."
- Coral highlight on "glowing"

**Visit timeline**
- Eyebrow: "WHEN TO COME IN"
- Headline: "You don't have to wait until *6 weeks*"
- Bulleted list (dash markers):
  - **2 weeks postpartum:** Early check-in for mood, healing, breastfeeding support
  - **6 weeks postpartum:** Comprehensive recovery assessment
  - **3 months postpartum:** Hormonal recheck, continued mood support, pelvic floor follow-up
  - **6–12 months postpartum:** Long-term wellness planning, weaning support, return to baseline
  - **Anytime you're struggling:** You don't need to wait for a scheduled visit.

**Insurance & Cost** box (peach):
> **Postpartum visits** are typically covered by insurance as part of your maternity care. Many plans cover more than just the 6-week visit—we can help you understand your coverage.
>
> **Mental health support** including medication management is covered as medical visits. Therapy referrals may have separate coverage depending on your plan.
>
> **No insurance?** Self-pay postpartum visits: $200 | Follow-ups: $150

**CTA section** (cream): "Ready for postpartum support that *actually supports you*?" + "Schedule a visit—whether you're 2 weeks or 2 years postpartum. It's never too late to get help." + dark pill CTA.

### 6.9 Weight Management (weight-management.html)

**Hero** — centered, dark teal gradient
- Coral pill: "NEW PROGRAM"
- Coral sparkle icon
- Serif (cream): "Medical weight loss with *real support*"
- Sub: "Not just a shipped vial and a telehealth link. GLP-1 medications with in-person care, weekly check-ins, and a provider who actually knows you. This is weight loss medicine done right."
- Dark pill CTA: "START YOUR JOURNEY"

**Three stat cards** (white on cream, just below hero, 3 across):
- **$300** / STARTING AT/MONTH
- **Weekly** / CHECK-INS SUPPORTED
- **1:1** / PROVIDER CARE

**Weight loss that addresses the root cause**
- Eyebrow: "OUR APPROACH"
- Headline: "Weight loss that addresses the *root cause*"
- Body: "This isn't about willpower. Your weight is influenced by hormones, metabolism, stress, sleep, medications, life stage, and your biology that makes some bodies hold onto weight more than others. GLP-1 medications work because they address the underlying biology—not because you weren't trying hard enough before."

**Why in person care matters** card (pale blue):
> To telehealth weight loss concern—it's shiny you mailed it send you on your way. Here's what you're missing.
2-col bulleted list:
- Body composition changes (not just scale weight) / On-call support when needed
- A provider who actually knows your story / Real-time side effect management
- Dosing adjustments based on your response / Lab monitoring for safety
- Insurance authorization help if a doctor or RD / Access visits if necessary

**Your complete weight loss program**
- Eyebrow: "WHAT'S INCLUDED"
- Headline: "Your complete weight loss program"
- 4 numbered mint circles:
  1. **Initial Consultation ($150)** — "Comprehensive evaluation including health history, current medications, metabolic assessment, and discussion of your goals. We determine if GLP-1 therapy is right for you and what medication makes sense. Labs ordered if needed."
  2. **Weekly In-Office Visits** — "Your injects are administered by our team with aseptic technique. Weight and vitals check. Discussion of how you're feeling, any side effects, appetite changes, and progress. Dose adjustments as needed."
  3. **Ongoing Monitoring** — "Regular lab work to ensure safety, body composition tracking so you know you're losing fat, not muscle. Nutritional guidance to support your results and protect your metabolism long term."
  4. **Real Support Between Visit** — "Questions about side effects? Not sure what to eat? Having a tough week? You have direct access to our team. You're not alone in this."

**Transparent Pricing** (dark green card, prominent):
- Title: "Transparent Pricing"
- Subtext: "No hidden fees. No subscription charges. Here's exactly what it costs."
- 3 rows:
  - **Semaglutide + B12** · Weekly in-office visit included, medication shipped directly to you · **$175** /month
  - **Tirzepatide + B12** · Weekly in-office visit included, medication shipped directly to you · **$250** /month
  - **Initial Consult** · Often covered by insurance · **$150**
- Bottom note: "Medication pricing includes compounded medication (Semaglutide or Tirzepatide + B12), weekly in-office or telehealth-lab visits, provider monitoring, and dose adjustments. Lab work may be additional and is often covered by insurance."

**Is this right for you?**
- Eyebrow: "IS THIS RIGHT FOR YOU?"
- Headline: "GLP-1 medications may be right for you if..."
- Arrow-bulleted list:
  - Your BMI is 30 or higher, OR 27+ with weight-related health conditions
  - You've tried diet and exercise but struggle to lose weight or keep it off
  - You have PCOS, insulin resistance, or pre-diabetes
  - You're in perimenopause or menopause and experiencing weight changes
  - You want medical support, not just another diet plan
  - You're committed to lifestyle changes alongside medication
  - You want in-person accountability and real relationships with your care team

- Powder-blue note box: "**Important: This isn't right for everyone** — In this service we meet you where you are. If you have a personal or family history of medullary thyroid cancer or MEN2, we are not the right program for you. Have a history of pancreatitis, or have other severe medical conditions, we'll have a thorough discussion to know if this is safe for you."

**What you're probably wondering** (list/FAQ with horizontal rules):
- **What are the side effects?** — "Most common: nausea, decreased appetite, constipation—especially when starting or increasing dose. We manage this through slow titration and supportive care. Most side effects are temporary and manageable."
- **How is this different from telehealth programs?** — "We provide real one-on-one support in-person injection technique with supervision, we catch problems early, adjust doses to what you're doing—not just what an app-level relational tips, real accountability."
- **Will I regain the weight when I stop?** — "Some regain is common if you stop without a maintenance plan. That's why we focus on sustainable health strategies the medication, and why you may or may not have a plan for the long term."
- **Why compounded medication?** — "Brand-name Wegovy and Mounjaro are expensive ($1,000+/month) and often not covered by insurance. Compounded versions use the same active ingredients at a fraction of the cost because we approve FDA compounding pharmacies."
- **Will my insurance cover any of this?** — "The initial consult and lab assessment are usually a visit. Compounded medications are typically not covered. But our care is competitive with—or even less than—most telehealth options."

**CTA section** (cream): "Ready to start your *weight loss* journey?" + "Schedule a consultation and see if GLP-1 therapy is right for you." + dark pill CTA.

### 6.10 Metabolic Health (metabolic-health.html)

**Hero** — centered, powder-blue gradient
- Peach pill: "PREVENTATIVE CARE"
- Coral flower icon
- Serif: "Metabolic health that goes beyond *basic labs*"
- Sub: "Your annual physical says your labs are 'normal'—but you don't feel normal. Fatigue, brain fog, stubborn weight, sugar cravings. Comprehensive metabolic testing finds what standard panels miss."
- Dark pill CTA: "BOOK YOUR ASSESSMENT"

**The problem**
- Eyebrow: "THE PROBLEM"
- Headline: "Why 'normal' labs don't tell the *whole story*"
- Body: "Standard lab panels check your blood sugar and cholesterol—but by the time those are flagged as 'abnormal,' metabolic dysfunction has often been brewing for years. We test earlier markers that catch problems when they're still reversible."
- Checkmark list (green checkmarks):
  - Advanced metabolic and insulin testing
  - Cardiovascular risk assessment beyond cholesterol
  - Inflammation and nutrient marker analysis
  - Personalized prevention and optimization plans
- Dark green card ("What standard labs miss") 2-col list:
  - Inflammatory markers (hs-CRP, homocysteine) / Fasting Insulin (not just glucose)
  - Vitamin D levels (affects metabolic health) / Lipoprotein particle size and number
  - HOMA-IR (insulin resistance calculation) / Thyroid (full panel, not just TSH)
  - Uric acid (metabolic and heart risk) / Ferritin (iron storage)

**What we test**
- Eyebrow: "WHAT WE TEST"
- Headline: "Comprehensive metabolic *assessment*"

**Insulin & Blood Sugar** cream card, 2×2 grid:
- **Fasting Insulin** — "Elevated insulin is often the first sign of metabolic dysfunction—years before blood sugar goes up. This is the fix that catches problems early."
- **HOMA-IR Calculation** — "Uses insulin and glucose to calculate insulin resistance. A key marker for metabolic health that most providers don't calculate."
- **HbA1c** — "3-month average of blood sugar. Useful for seeing the bigger picture beyond a single fasting reading."
- **Fasting Glucose** — "Standard but important. We look at the trend over time, not just whether it's technically 'normal.'"

**Cardiovascular Risk** cream card, 2×2 grid:
- **Full Lipid Panel** — "Total cholesterol, LDL—, HDL—, triglycerides. But the nuance matter more than a lot of standard numbers—we look below these too."
- **Triglyceride/HDL Ratio** — "One of the best predictors of insulin resistance—cardiovascular outcomes. Ideally under 2. We're not afraid to track this."
- **hs-CRP (Inflammation)** — "High sensitivity C-reactive protein measures inflammation—an independent risk factor for heart disease."
- **Lp(a) and ApoB** — "Advanced markers that better predict cardiovascular risk than standard cholesterol, especially important if you have family history."

**Supporting Markers** cream card, 2×2 grid:
- **Complete Thyroid Panel** — "TSH, Free T4, Free T3, Thyroid antibodies. Your thyroid affects metabolism, energy, weight, and mood. We test it all."
- **Ferritin** — "Iron storage. Low causes fatigue, brain fog, and can contribute to leaky gut issues. Other metabolic standards panels panels."
- **Vitamin D** — "Affects the insulin sensitivity, immune function, mood and more. Most people are deficient. We test you're out."
- **Uric Acid** — "Not just for gout—elevated uric acid is tied to insulin resistance, fatty liver, and cardiovascular risk."

**This assessment may be right for you if...**
- Eyebrow: "WHEN TO COME IN"
- Headline: "This assessment may be right for you if..."
- Arrow-bulleted list:
  - Your labs are "normal" but you don't feel well
  - You've fatigued, foggy, or can't lose weight despite trying
  - You have a family history of diabetes or heart disease
  - You have PCOS or suspect insulin resistance
  - You're in perimenopause/menopause and noticing metabolic changes
  - You want to approach your health proactively, not just look for problems
  - You crave sugar, crash after meals, or feel "hangry" frequently
  - You've been told your cholesterol is "borderline" but given no plan

**From testing to action plan**
- Eyebrow: "WHAT HAPPENS NEXT"
- Headline: "From testing to *action plan*"
- 4 numbered mint circles:
  1. **Initial Consultation** — "We'll discuss your symptoms, health history, and goals. We order comprehensive labs tailored to what you need—not one-size-fits-all basic panels."
  2. **Lab Review Visit** — "We go through results together—not just the flagged values, but the patterns and trends. You'll understand what your numbers actually mean."
  3. **Personalized Plan** — "Based on your results, nutrition strategies, targeted supplements if needed, movement recommendations, medication if appropriate. Specific actionable steps."
  4. **Follow-Up & Monitoring** — "We recheck labs in 3-6 months to track progress. Metabolic health is modifiable—we want to see your numbers improve."

**Insurance & Cost** box (powder blue):
> **Office visits are typically covered** by insurance. Lab coverage depends on your plan and what's ordered—basic metabolic panels are usually covered, advanced lab testing may require prior authorization.
>
> **We'll help you navigate coverage.** Bloodwork team, well covered, we'll discuss whether they're worth the out-of-pocket cost for your situation. No surprises.
>
> **No insurance?** Metabolic assessment visit: $200 | Follow-up with plan: $150 | Lab costs vary.

**CTA section** (peach/cream): "Ready to understand your *metabolic health*?" + "Schedule a comprehensive assessment and get answers that go beyond 'your labs look fine.'" + outline pill CTA.

### 6.11 Weight Loss (weight-loss.html)

**Hero** — centered, dark teal gradient
- Coral pill: "NEW PROGRAM"
- Coral sparkle icon
- Serif (cream): "Medical weight loss with *real support*"
- Sub: "If you feel stuck with weight changes, confused about GLP-1 options, or unsure whether an underlying metabolic condition is involved—we provide a clear, medically supervised approach focused on sustainable results and long-term health."
- Dark pill CTA: "BOOK A CONSULTATION"

**Three-card row** (cream cards with eyebrow + stat):
- STARTING AT/MONTH · **$300**
- CHECK-INS INCLUDED · **Weekly**
- PROVIDER CARE · **1:1**

**Weight loss that addresses the root cause**
- Centered headline: "We look beyond the scale to understand *what's really going on*"
- Body: "Your weight and metabolism don't work in isolation—they're connected to your hormones, stress, sleep, and life circumstances. We don't take cookie-cutter approaches. We investigate root causes and create a plan tailored to your whole picture."
- Cream card ("This program is designed to help you"):
  2-col list:
  - Identify what's unexplained weight gain or resistance to weight loss / Get evidence-based options for your hormone metabolism
  - Start medically supervised plans with the accountability / Explore GLP-1 medications safely
  - Improve metabolic health markers / Discuss lifestyle changes and evaluate health choices
  - Build sustainable, long-term strategies / Get support during hormonal transitions like perimenopause and menopause

**Quote highlight card** (pale blue):
> "When you come seeking weight support, we know it's [not because you did anything wrong]—but because of what's happening in your body and your life. It's natural to need more support when your metabolism changes."
- Coral highlight on "not because you did anything wrong"
- Attribution: "— Naomi Mostkoff, DNP, APRN, FNP-BC"

**How Bloom is different**
- Small eyebrow (mint pill): "OUR APPROACH"
- Headline: "How Bloom is *different*"
- 2×2 grid of pale blue cards (with green checkmarks):
  - **Non-Judgmental Partnership** — "An approach of—of unrealistic and non-sustainable, because we invest. We focus on partnership we'd love, so pregnant is and giving you what you want just starting to feel."
  - **Whole-Person Assessment** — "We look at how it's all connected, connecting the dots among your hormones, stress, and mental health to create a plan that's how you hit."
  - **Evidence-Based Options** — "We tailor our medical and nutrition plans to each individual's needs and goals. Not in terms of a few, lifestyle interventions, combination, or weed. Personalized, not generic."
  - **Long-Term Support** — "Some lose form becomes permanent change. Our medication building strategies and behavior change tools will help you stick with it, so you can plan your next, and make you fall off again next time."

**Medication cards** (two side-by-side):

**Semaglutide** (cream card)
- Mint pill: "POPULAR"
- Title
- Sub: "with B12 to reduce nausea"
- Huge price: **$175** /month
- Bulleted list:
  - Weekly in-office visit included
  - Includes B12 for energy
  - Provider accountability visits
  - Body composition tracking
  - Dose adjustments as needed
- Dark pill CTA: "GET STARTED"

**Tirzepatide** (dark green card, cream text)
- Coral pill: "PREMIUM"
- Sub: "Dual-action GLP-1/GIP formula"
- Huge price: **$300** /month
- Bulleted list (coral dots):
  - Dual-action formula
  - Enhanced appetite control
  - Superior weight loss support
  - Best option for >60 lb weight loss
- White pill CTA: "GET STARTED"

**Dark green strip** with 4 column icons + labels:
- **Medication** — "Compounded medication delivered to your office or to you every week"
- **Weekly Visits** — "In-office visits for check-ins with provider every week"
- **Tracking** — "Body composition analysis and metabolic progress monitoring"
- **Access** — "Direct provider contact between visits when you need it"

**Other medication options** section
- Coral pill: "ADDITIONAL OPTIONS"
- Headline: "Other medication options"
- Sub: "GLP-1 injections aren't right for everyone. We also prescribe other evidence-based weight loss medications, based on your health history, metabolic profile, and goals."
- 3 cards in a row:
  - **Contrave** — "Combination nalotrexone and bupropion. Targets cravings and the reward system. Helpful if emotional eating is the focus." / Best for: "Emotional eating, low cost weight gain"
  - **Phentermine/Topiramate** — "Appetite suppressant combined with a medication that increases satiety. Short-term, jump-start programs." / Best for: "Short program weight gain in patients"
  - **Metformin** — "Improves insulin resistance. Why we'd support someone weight gain, especially when metabolic dysfunction is present." / Best for: "Insulin resistance, PCOS"
- Fine print below: "Bloom works with these prescriptions when a care situation and appropriate risk care. Standard support for all these happy—because not every one is the same."

**Beyond medication section**
- Eyebrow: "BEYOND MEDICATION"
- Headline: "Medication is just one piece"
- Two-column:
  - Left: **Registered Dietitians** — "We partner with dietitians who focus on building sustainable habits—not restrictive diets. They can help you through what makes it easier for you body and your life, so the changes stick long after the medication does."
  - Left: **Gyms & Trainers** — "Movement matters, but it doesn't have to be punishing. Our preferred gyms and trainers offer judgment-free movement support where you build strength and confidence on your own pace."
  - Right column: gym training photo

**CTA section** (cream): "Ready to start your *weight loss* journey?" + "Schedule a consultation today." + dark pill CTA.

### 6.12 Contact (contact.html)

**Layout** — two-column, cream background
- Left column (narrow):
  - Serif headline (dark green): "Contact"
  - Underlined link (dark green): `info@heybloomhealth.com`
  - "Phone: (352) 580-6573"
  - "Fax: (844) 955-9299"
  - Blank line
  - "5310 NW 8th Ave, Suite 1"
  - "Gainesville, FL 32605"
- Right column (wider): light powder-blue rounded card containing the form
  - Intro text: "If you're interested in an appointment, complete the form with a few details about your project. We'll review your message and get back to you within 48 hours."
  - Form fields (label + input):
    - **Name** (with small "(required)" label) — split into First Name / Last Name two inputs side by side
    - **Email** (required)
    - **Phone** (not required)
    - **Message** (required) — textarea
  - Submit button (dark pill): "Submit"
- Form tag should include `name="contact"`, `method="POST"`, and `data-netlify="true"` attributes for Netlify Forms. Include a hidden `<input type="hidden" name="form-name" value="contact" />`.

Footer follows.

---

## 7. Assets & Placeholder Strategy

User's Squarespace asset folder has been (or will be) placed in `assets/`. Reference it directly where needed.

For any asset that's missing:
- **Photos:** use a styled cream placeholder box with a centered note like "Photo: portrait of Naomi" — don't use broken image links.
- **Decorative SVG motifs:** create inline SVGs based on the descriptions in section 3f. Keep them geometric and simple.
- **Logo:** if `assets/logo/` exists, use it. Otherwise create an inline SVG approximation.

---

## 8. Final Instructions

1. Build every page listed in section 6.
2. Share a single `styles.css` across all pages — CSS custom properties for colors and fonts so changes are one-click.
3. Use inline SVGs for decorative elements (flowers, stars, sparkles) so they color-match the palette.
4. Verify nav links work on every page. Verify current page is underlined in nav.
5. Verify footer is identical on every page.
6. Mobile menu: hamburger opens overlay, BOOK NOW button visible at all times.
7. Netlify Forms works out of the box — verify contact form has required attributes (see 6.12).
8. Test: page loads, fonts apply, images load, buttons look right, mobile layout works.
9. Commit: `Initial Bloom Health site rebuild`
10. Push to GitHub.

## What to flag to the user after build

- "Do you accept insurance?" FAQ answer needs filling in (marked `ariella to finish` in original).
- Any image placeholders that still need the real photo.
- Book Appointment link — currently `#` — needs a real booking URL.
- Patient Portal link — currently `#` — needs a real URL.
- Social links — currently `#` — need real Instagram/Facebook URLs.

Prioritize fidelity to the existing design. If something on a screenshot seems ambiguous, make a reasonable choice and flag it as a question for the user to review.
