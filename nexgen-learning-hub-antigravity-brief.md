# NexGen Learning Hub --- Website Design & Development Brief

> Copy this entire brief into Antigravity. Treat it as the source of
> truth for the website design and implementation.

## 1. Project objective

Design and build a modern, responsive, conversion-focused website for
**NexGen Learning Hub -- Playway**, a preschool and learning centre in
Mandi Gobindgarh, Punjab.

The website should feel: - Clean, welcoming, cheerful and trustworthy. -
Premium and professionally designed, not like a generic preschool
template. - Visually playful without becoming cluttered or childish. -
Parent-focused: communicate safety, care, learning and a clear way to
enquire.

**Primary conversion:** admission enquiries and school-visit bookings.

Do not invent school credentials, parent testimonials, Google ratings,
fees, timings, facilities or claims. Use clearly labelled placeholders
where information is missing.

## 2. Brand and contact information

-   Brand: NexGen Learning Hub
-   Sub-brand/category: Playway
-   Location: House No. 7, Sector 20 B, Motia Khan, Mandi Gobindgarh
-   Phone: 99143 00819
-   Alternate phone: 94631 50819
-   Instagram: @nexgenhub123
-   Founder: Sonia Arya

Use Indian phone formatting and `+91` in forms where appropriate.

## 3. Visual direction

### Design concept

**Clean + Playful + Trustworthy**

Use a light, airy interface with: - White as the primary background. -
Soft pastel-blue section backgrounds. - Cobalt-blue primary actions. -
Warm yellow accents. - Rounded cards and buttons. - Real photography as
the main visual content. - Small, restrained SVG doodles such as stars,
clouds, a smiling sun and paper planes.

Avoid: - Too many bright colours competing at once. - Emoji-heavy UI. -
Cartoon illustrations in every section. - Excessive gradients, shadows,
borders or decorative blobs. - Long blocks of text. - Multiple competing
CTA buttons. - Generic stock-template layouts.

### Colour palette

  Token             Hex         Usage
  ----------------- ----------- --------------------------------
  Primary blue      `#2563EB`   Primary CTA, links, highlights
  Primary hover     `#1D4ED8`   Hover and active states
  Sunshine yellow   `#FFC83D`   Admission badge, small accents
  Navy              `#172B55`   Headings and dark text
  Aqua              `#65C7D0`   Secondary accents
  Coral             `#FF9F70`   Occasional activity accent
  Mint              `#8BCF9B`   Occasional activity accent
  Soft pink         `#F4B6CF`   Occasional activity accent
  Page background   `#FFFFFF`   Main page background
  Soft surface      `#F8FAFC`   Alternate sections and cards
  Soft blue         `#EFF6FF`   Highlight sections
  Secondary text    `#64748B`   Supporting copy

Use blue, navy, white and yellow as the dominant colours. Use coral,
mint, aqua and pink sparingly.

### Typography

Use Google Fonts: - **Nunito** for all primary UI typography, headings,
paragraphs and buttons. - **Baloo 2** only for occasional decorative
highlights if it genuinely improves the design.

Load: - Nunito weights 400, 500, 600, 700, 800, 900. - Baloo 2 weights
500, 600, 700, 800.

Suggested type scale: - Hero heading: `clamp(2.7rem, 5vw, 4rem)`, weight
800/900. - Section heading: 36--42px, weight 800. - Card heading:
20--22px, weight 700/800. - Body: 16--18px, line-height 1.6. - Button:
15--16px, weight 800.

## 4. Layout and spacing system

-   Maximum content width: 1240px.
-   Desktop side padding: 32--48px.
-   Tablet side padding: 24px.
-   Mobile side padding: 18--20px.
-   Section vertical spacing: 80--100px desktop; 56--72px mobile.
-   Card radius: 20--24px.
-   Button radius: 999px or 14--16px; choose one consistent style.
-   Use a consistent spacing scale based on 4px or 8px increments.
-   Use subtle shadows only when they improve separation.

## 5. Header / navigation

Create a clean white header: - NexGen logo/wordmark on the left. -
Navigation links: Programs, Why NexGen, Activities, Campus, Parent
Speak, FAQ, Contact. - One prominent CTA: **Admission Enquiry**. -
Sticky header is acceptable if it remains compact and does not cover
content. - On mobile, use a compact logo and accessible menu drawer. -
Do not place both phone numbers, Instagram and multiple CTA buttons in
the main navigation.

If no official logo asset is supplied, create a simple text-based
temporary wordmark. Do not fabricate an official logo.

## 6. Hero section --- highest priority

Create a clean two-column hero on desktop: - Left: approximately 48--52%
width for content. - Right: approximately 48--52% width for a large
child photograph. - Mobile: stack content first and image second. - Keep
generous whitespace. - Hero height should feel balanced, not
artificially stretched.

### Exact hero copy

Small badge: **Admissions Open**

Headline: **Where Little Learners Play, Learn & Grow Together**

Supporting copy: A joyful beginning with caring teachers, creative
activities and play-based learning.

Primary CTA: **Book a School Visit**

Optional secondary text link: **Call 99143 00819**

Keep the hero concise. Do not add activity lists, phone-number blocks,
social handles, long descriptions or a lead form inside the hero.

### Hero image direction

Use a high-quality, authentic-looking preschool photograph: - A happy
young child engaged in a colourful building-block activity. - Warm,
natural expression. - Bright, softly lit preschool/classroom setting. -
Child positioned to complement the left-side copy. - Prefer a real
NexGen child/classroom photograph supplied by the client. - If no real
photograph is available, use a properly licensed stock image or a
clearly temporary generated placeholder. - Do not imply that a generated
child is an actual student. - Do not put fake school branding or
inaccurate text on clothing.

The previously generated visual can be used as a design reference, but
the checkerboard-background version is not a transparent PNG. Do not use
it as-is on a white background. If using a cutout, ensure it has genuine
alpha transparency and clean edges.

### Hero decoration

Use only a few small SVG decorations: - Small smiling sun near the image
corner. - One or two stars. - Optional paper-plane line illustration. -
Soft pastel-blue organic shape behind the photograph.

Decorations must not compete with the heading or CTA.

## 7. Admission enquiry form

Place a compact enquiry form immediately after the hero or as a clearly
visible section near the top. Avoid a large form inside the hero.

Fields: 1. Parent's Name --- required. 2. Mobile Number --- required;
validate Indian mobile number. 3. Program --- required select: -
Playgroup - Nursery - LKG - UKG - Tuition (Class 4--10) - Other programs
4. Child's Age --- optional. 5. Consent checkbox --- required: "I agree
to be contacted by NexGen Learning Hub about admissions."

Submit button: **Request a Call Back**

Requirements: - Validate on client and server. - Show loading, success
and error states. - Prevent duplicate submissions. - Do not expose API
keys or secrets in frontend code. - Do not claim the form is connected
until a real backend endpoint is configured. - If no endpoint exists,
implement a clearly documented integration placeholder and local
validation.

## 8. Programs section

Section heading: **The Right Start for Every Age**

Supporting copy: Gentle, activity-based learning that grows with your
child, from first steps in school to getting ready for Class 1.

Create four clean cards:

### Playgroup

Age: 2--3 years\
A happy first step into school with songs, play, movement and making
friends.\
Link: Enquire for Playgroup

### Nursery

Age: 3--4 years\
Early letters, numbers, colours and shapes through stories, rhymes and
hands-on activities.\
Link: Enquire for Nursery

### LKG

Age: 4--5 years\
Building reading, writing and number skills with confidence and
curiosity.\
Link: Enquire for LKG

### UKG

Age: 5--6 years\
School-readiness with stronger basics, communication skills and good
habits.\
Link: Enquire for UKG

Cards should have consistent image ratios, restrained colours and clear
hierarchy. Make the whole card clickable only if accessibility and
keyboard behaviour are handled correctly.

## 9. Why NexGen section

Heading: **A Place Where Children Love to Learn**

Supporting line: Dedication today, success tomorrow. Here is what
parents value most.

Use a balanced icon grid with these points: - Friendly, Experienced
Faculty --- Warm teachers who make every child feel safe and seen. -
Personal Attention --- Small batch sizes so each child gets individual
focus. - Child-Friendly Campus --- Bright murals, soft flooring and
kid-sized furniture. - Smart Learning --- Visual lessons on a smart
screen make ideas easy to grasp. - Yoga & Dance --- Movement every week
for fitness, focus and happy hearts. - Creative Expression --- Colours,
crafts and imagination. - Parent--Teacher Connect --- Regular
interaction so parents know how their child is doing. - Overall Growth
--- Confidence, communication and good habits, not just academics.

Use Lucide icons or a consistent set of custom SVG icons. Do not mix
emoji, outline icons and 3D icons.

## 10. Activities section

Heading: **Every Day Is an Adventure**

Supporting copy: At NexGen Playway, children learn through play, music,
movement and creativity.

Create visual activity cards: - Yoga Activity --- Meditation, breathing
exercises and simple yoga poses. - Dance Activity --- Fun dance moves,
rhythm and coordination. - Art & Creativity --- Colours, crafts and
imagination. - Play Zone --- A safe space for slides, balls and play. -
Smart Learning --- Visual lessons that make ideas click.

Use real school photographs wherever possible. Do not fabricate
activities or facilities that the school does not offer.

## 11. Campus gallery

Heading: **Take a Peek Inside**

Supporting copy: Explore our learning spaces. Better still, visit us in
person.

Build a responsive image gallery: - Consistent rounded corners. - A
thoughtful grid or masonry layout. - Click-to-expand lightbox. -
Keyboard-accessible controls. - Descriptive alt text. - Lazy-load
below-the-fold images.

Use genuine campus images. If images are not supplied, show neutral
placeholders labelled for replacement rather than invented school
photographs.

## 12. Learning Hub section

Heading: **Growing Together, Beyond Playway**

Supporting copy: As your child grows, NexGen grows with them. Our
Learning Hub offers guidance for every stage.

Show these offerings: - Tuition --- Classes 4--10 - +1 & +2 Commerce -
Computer Courses - Spoken English - Personality Development - AI
Classes - Vedic Math

CTA: **Book a Free Demo / Visit**

Do not invent course durations, prices, certifications or outcomes.

## 13. Parent Speak section

Heading: **What Parents Say About Us**

Use this section only with verified parent feedback and permission.

Until real reviews are supplied: - Do not fabricate names, photos,
quotes, videos or ratings. - Use clearly labelled CMS/content
placeholders. - Do not show a fake Google rating.

## 14. FAQ section

Heading: **Questions Parents Often Ask**

Include: 1. What is the admission process? 2. Which age groups do you
take? 3. What activities will my child do? 4. What are the fees and
timings? 5. Can I visit the school before admission? 6. Do you offer
classes for older children too?

The admission-process answer: "Fill in the enquiry form or call us. Our
team will call you back, invite you for a school visit, and guide you
through the next steps."

For unknown fees, timings and eligibility details, use a neutral
response inviting parents to contact the school. Do not invent answers.

Use an accessible accordion with correct expanded/collapsed state and
keyboard support.

## 15. Contact section

Heading: **Come, Say Hello!**

Display: - Address: House No. 7, Sector 20 B, Motia Khan, Mandi
Gobindgarh. - Phone: 99143 00819. - Alternate phone: 94631 50819. -
Founder: Sonia Arya. - Instagram: @nexgenhub123.

Actions: - Call Now --- `tel:+919914300819` - WhatsApp ---
`https://wa.me/919914300819` - Directions --- link to a correctly
encoded Google Maps search for the supplied address.

Do not invent a map pin or exact coordinates. Use a map embed only when
the location is verified.

## 16. Footer

Include: - NexGen Learning Hub -- Playway wordmark. - Tagline: "Play...
Learn... Grow Together!" - Quick links: Programs, Why NexGen, Campus,
FAQs, Admission Enquiry. - Address and both phone numbers. - Instagram
profile link. - Copyright: © 2026 NexGen Learning Hub Playway.

Avoid repeating the entire page content in the footer.

## 17. Asset requirements

Organise assets in a predictable structure:

``` text
public/
└── assets/
    ├── images/
    │   ├── hero-child.webp
    │   ├── classroom.webp
    │   ├── campus-01.webp
    │   ├── campus-02.webp
    │   ├── campus-03.webp
    │   ├── yoga-activity.webp
    │   ├── dance-activity.webp
    │   ├── art-activity.webp
    │   ├── play-zone.webp
    │   └── smart-learning.webp
    ├── illustrations/
    │   ├── sun.svg
    │   ├── stars.svg
    │   ├── paper-plane.svg
    │   ├── cloud.svg
    │   └── rainbow.svg
    ├── icons/
    │   ├── yoga.svg
    │   ├── dance.svg
    │   ├── creativity.svg
    │   ├── smart-learning.svg
    │   └── playground.svg
    └── logo/
        └── nexgen-logo.svg
```

Asset rules: - Prefer WebP or AVIF for photographs. - Use SVG for logos,
icons and decorative vectors. - Use descriptive filenames. - Keep image
dimensions appropriate to their rendered size. - Lazy-load
below-the-fold imagery. - Provide width and height to reduce layout
shift. - Never hotlink random image URLs. - Do not use copyrighted
assets without appropriate permission/licensing. - Do not create a fake
logo and present it as the official brand logo.

## 18. Technical implementation requirements

First inspect the existing project and identify its framework, routing,
styling approach, dependencies and current components. **Do not replace
the existing stack or rewrite the project unnecessarily.**

Implementation standards: - Use the existing framework and
conventions. - If the project is React, use reusable functional
components. - Keep content, components and styling logically
separated. - Use semantic HTML landmarks and correct heading
hierarchy. - Use accessible labels, focus states and keyboard
navigation. - Ensure sufficient colour contrast. - Make the layout
responsive at 360px, 390px, 768px, 1024px and 1440px. - Avoid horizontal
overflow. - Respect `prefers-reduced-motion`. - Use subtle transitions;
avoid distracting animations. - Optimise images and avoid unnecessary
dependencies. - Keep console free of errors and warnings. - Do not
hardcode secrets or private API keys. - Add SEO title, meta description,
Open Graph metadata and favicon placeholders. - Add meaningful image alt
text. - Ensure all navigation anchors and CTAs work. - Use a single
source of truth for repeated contact details and navigation items.

If Tailwind CSS is already installed, use it consistently. Otherwise,
follow the project's existing CSS strategy rather than adding a new
styling framework without reason.

## 19. Suggested component architecture

Adapt this to the existing project; do not force this exact structure if
the repository already has a good architecture.

``` text
src/
├── components/
│   ├── layout/
│   │   ├── Header
│   │   └── Footer
│   ├── sections/
│   │   ├── HeroSection
│   │   ├── EnquirySection
│   │   ├── ProgramsSection
│   │   ├── WhyNexGenSection
│   │   ├── ActivitiesSection
│   │   ├── CampusGallerySection
│   │   ├── LearningHubSection
│   │   ├── ParentSpeakSection
│   │   ├── FAQSection
│   │   └── ContactSection
│   └── ui/
│       ├── Button
│       ├── SectionHeading
│       ├── ProgramCard
│       ├── ActivityCard
│       └── Accordion
├── data/
│   ├── navigation
│   ├── programs
│   ├── activities
│   └── faqs
└── styles/
    └── theme
```

## 20. Conversion and UX rules

-   Keep one primary conversion action: **Book a School Visit** or
    **Admission Enquiry**.
-   Use no more than two prominent CTA styles across the page.
-   Repeat the primary CTA at sensible points, not in every card.
-   Make phone and WhatsApp links easy to reach on mobile.
-   A sticky mobile contact bar is optional, but it must not obscure
    content.
-   Keep the enquiry form short.
-   Explain what happens after submission.
-   Do not use fake urgency, fake scarcity, fake ratings or fabricated
    testimonials.

## 21. SEO and local discovery

Suggested page title:
`NexGen Learning Hub Playway | Preschool in Mandi Gobindgarh`

Suggested meta description:
`Discover NexGen Learning Hub Playway in Mandi Gobindgarh. Explore play-based preschool learning, activities and admission enquiries. Book a school visit.`

Use local business structured data only with verified details. Do not
invent opening hours, coordinates or ratings.

## 22. Definition of done

Before considering the website complete, verify:

-   [ ] Existing project structure and stack were preserved.
-   [ ] Desktop, tablet and mobile layouts work.
-   [ ] Hero is clean and contains minimal copy.
-   [ ] Main CTA is visible without excessive scrolling.
-   [ ] Header navigation works.
-   [ ] All sections are present and visually consistent.
-   [ ] Phone, WhatsApp and directions links work.
-   [ ] Enquiry form validates correctly.
-   [ ] Form integration status is documented honestly.
-   [ ] Images are optimised and have appropriate alt text.
-   [ ] No fake testimonials, ratings or school claims appear.
-   [ ] No broken images or dead links.
-   [ ] No horizontal overflow at mobile widths.
-   [ ] Keyboard navigation and visible focus states work.
-   [ ] No console errors.
-   [ ] Page metadata is present.

## 23. Execution instructions for Antigravity

Work in this order:

1.  Inspect the repository and report the existing stack and structure.
2.  Identify missing real content and assets; use clearly marked
    placeholders where needed.
3.  Establish the theme tokens, typography and global layout.
4.  Build the header and hero first.
5.  Validate the hero at desktop and mobile sizes before continuing.
6.  Build the remaining sections using reusable components.
7.  Implement responsive behaviour, accessibility and interactions.
8.  Integrate the enquiry form only when a real endpoint or approved
    integration is available.
9.  Run the project's available lint, build and test commands.
10. Fix issues and provide a concise completion report listing files
    changed, tests run and integrations still pending.

**Design priority:** visual quality and clarity over quantity of
decoration. The final website should look like a carefully art-directed
preschool brand, not a crowded brochure.
