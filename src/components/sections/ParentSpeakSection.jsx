import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const TESTIMONIALS = [
  {
    quote:
      'I admire their dedication towards kids learning and development, from syllabus to extra curricular activities, celebrations and good habits inculcation is just awesome.',
    author: 'Mehulsinh Jadeja',
    role: 'Playgroup Parent',
  },
  {
    quote:
      'My child was very shy initially, but within weeks she started clapping, singing rhymes, and genuinely looks forward to going to school every morning!',
    author: 'Simranjit Kaur',
    role: 'Nursery Parent · Sector 20 B',
  },
  {
    quote:
      'The Smart Screen digital lessons make a huge difference. He learns phonics visually, and the caring teachers personally communicate how the child is doing every day.',
    author: 'Gurpreet Singh',
    role: 'LKG Parent · Motia Khan',
  },
  {
    quote:
      'From soft foam flooring to rounded child-safe furniture and individual 1:10 attention, NexGen gives total peace of mind for working parents.',
    author: 'Pooja Sharma',
    role: 'UKG Parent · Mandi Gobindgarh',
  },
]

export default function ParentSpeakSection() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const prev = () => setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1))

  // Auto-advance every 6.5 seconds when not hovered
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(next, 6500)
    return () => clearInterval(timer)
  }, [isPaused])

  const t = TESTIMONIALS[current]

  return (
    <section
      id="parent-speak"
      className="relative overflow-hidden bg-white pt-14 pb-0 sm:pt-20 sm:pb-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ================= LEFT DOODLE: HAND-DRAWN SCHOOL BAG (OUTSIDE CLOUD) ================= */}
      <div
        className="pointer-events-none absolute left-3 sm:left-6 lg:left-10 xl:left-16 top-1/2 -translate-y-1/2 z-20 hidden md:block select-none opacity-85 drop-shadow-sm animate-float-slow"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 120 120"
          className="w-24 sm:w-28 lg:w-36 h-auto stroke-slate-500 fill-none stroke-[2.2] stroke-linecap-round stroke-linejoin-round transform -rotate-12"
        >
          {/* Handle */}
          <path d="M 40,35 C 40,18 80,18 80,35" strokeWidth="2.5" />
          {/* Main bag with white fill so it stands out cleanly */}
          <rect x="20" y="35" width="80" height="60" rx="12" fill="#FFFFFF" fillOpacity="0.85" />
          {/* Top flap */}
          <path d="M 20,52 L 100,52" strokeDasharray="3 3" />
          {/* Buckle straps */}
          <rect x="36" y="44" width="12" height="18" rx="2" fill="#FFFFFF" />
          <line x1="42" y1="44" x2="42" y2="62" />
          <rect x="72" y="44" width="12" height="18" rx="2" fill="#FFFFFF" />
          <line x1="78" y1="44" x2="78" y2="62" />
          {/* Pocket stitching */}
          <path d="M 28,74 Q 60,80 92,74" strokeDasharray="2 3" />
        </svg>
      </div>

      {/* ================= RIGHT DOODLE: SPACE ROCKET (OUTSIDE CLOUD) ================= */}
      <div
        className="pointer-events-none absolute right-3 sm:right-6 lg:right-10 xl:right-16 top-1/2 -translate-y-1/2 z-20 hidden md:block select-none opacity-85 drop-shadow-sm animate-float-delayed"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 120 150"
          className="w-24 sm:w-28 lg:w-36 h-auto stroke-slate-500 fill-none stroke-[2.2] stroke-linecap-round stroke-linejoin-round transform rotate-12"
        >
          {/* Nose & fuselage */}
          <path d="M 60,10 C 78,35 90,70 90,100 L 30,100 C 30,70 42,35 60,10 Z" fill="#FFFFFF" fillOpacity="0.85" />
          {/* Window */}
          <circle cx="60" cy="55" r="14" fill="#FFFFFF" />
          <circle cx="60" cy="55" r="8" strokeDasharray="2 2" />
          {/* Left fin */}
          <path d="M 30,75 L 10,102 L 30,100 Z" fill="#FFFFFF" />
          {/* Right fin */}
          <path d="M 90,75 L 110,102 L 90,100 Z" fill="#FFFFFF" />
          {/* Thruster nozzle */}
          <rect x="46" y="100" width="28" height="8" rx="2" />
          {/* Smoke clouds & propulsion flames */}
          <path d="M 50,110 Q 42,130 52,142" strokeDasharray="3 3" />
          <path d="M 60,110 Q 60,132 60,146" strokeDasharray="3 3" />
          <path d="M 70,110 Q 78,130 68,142" strokeDasharray="3 3" />
        </svg>
      </div>

      <div className="container-content relative z-10 px-4 sm:px-6">
        <div className="relative mx-auto max-w-4xl">

          {/* ================= ORGANIC CLOUD / SPEECH BUBBLE TESTIMONIAL ================= */}
          <div className="relative mx-auto flex items-center justify-center py-4 sm:py-10 md:py-12">
            
            {/* Masked Organic Background using .testimonial-one__bg (active on sm+ screens) */}
            <div className="hidden sm:block testimonial-one__bg drop-shadow-2xl" aria-hidden="true" />

            {/* Mobile Cloud Puffs (gives genuine organic cloud contours on mobile without masking text) */}
            <div className="sm:hidden pointer-events-none absolute -top-3 left-6 h-8 w-20 rounded-full bg-[#6FBD30]" aria-hidden="true" />
            <div className="sm:hidden pointer-events-none absolute -top-5 left-20 h-12 w-28 rounded-full bg-[#6FBD30]" aria-hidden="true" />
            <div className="sm:hidden pointer-events-none absolute -top-3 right-6 h-9 w-24 rounded-full bg-[#6FBD30]" aria-hidden="true" />
            <div className="sm:hidden pointer-events-none absolute -bottom-3 left-8 h-8 w-20 rounded-full bg-[#6FBD30]" aria-hidden="true" />
            <div className="sm:hidden pointer-events-none absolute -bottom-4 right-10 h-10 w-24 rounded-full bg-[#6FBD30]" aria-hidden="true" />

            {/* Testimonial Content sitting safely inside the card */}
            <div className="relative z-10 w-full max-w-2xl rounded-[32px] bg-[#6FBD30] sm:bg-transparent sm:rounded-none px-6 py-8 sm:px-12 sm:py-16 md:px-14 md:py-20 text-center text-white shadow-xl sm:shadow-none">
              
              {/* Playful Decorative Green Accent Doodle inside */}
              <div
                className="pointer-events-none absolute right-2 sm:right-6 top-1/4 h-16 w-16 sm:h-20 sm:w-20 opacity-60"
                aria-hidden="true"
              >
                <svg viewBox="0 0 80 80" className="w-full h-full fill-none stroke-[#A6E272] stroke-[6] stroke-linecap-round">
                  <path d="M 20,20 C 50,15 65,35 60,55 C 55,70 35,75 25,65" />
                  <circle cx="22" cy="72" r="4" fill="#A6E272" />
                </svg>
              </div>

              {/* Eyebrow: Hand-written preschool font */}
              <span className="font-hand text-xl sm:text-3xl text-white/95 tracking-wide block">
                Parent Testimonials
              </span>

              {/* Bubbly Headline: Fredoka font */}
              <h2 className="mt-1 font-fredoka text-xl font-bold text-white sm:text-4xl md:text-5xl leading-snug sm:leading-tight tracking-tight">
                Parents' words are the <br className="hidden sm:inline" />
                key to happy kids
              </h2>

              {/* Testimonial Quote Paragraph */}
              <div className="mx-auto mt-4 sm:mt-8 max-w-xl min-h-[90px] sm:min-h-[80px] flex items-center justify-center">
                <p className="font-fredoka text-sm sm:text-base md:text-lg leading-relaxed text-white/95 font-medium transition-opacity duration-300">
                  "{t.quote}"
                </p>
              </div>

              {/* Bottom Row: Navigation Buttons (Left) & Parent Author (Right) */}
              <div className="mt-6 sm:mt-10 flex flex-row items-center justify-between gap-3 border-t border-white/20 pt-4 sm:pt-6">
                
                {/* Navigation Pill Circles (Left) */}
                <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
                  <button
                    onClick={prev}
                    aria-label="Previous Testimonial"
                    className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#529320] text-white shadow-md transition-all hover:scale-105 hover:bg-[#437A1A] active:scale-95 focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <ChevronLeft size={20} className="sm:w-[22px] sm:h-[22px]" />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next Testimonial"
                    className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#529320] text-white shadow-md transition-all hover:scale-105 hover:bg-[#437A1A] active:scale-95 focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <ChevronRight size={20} className="sm:w-[22px] sm:h-[22px]" />
                  </button>
                </div>

                {/* Parent Name & Details (Right) */}
                <div className="text-right">
                  <h3 className="font-fredoka text-base sm:text-xl font-bold text-white tracking-wide leading-tight">
                    {t.author}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-white/80 mt-0.5">
                    {t.role}
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

      {/* ================= BOTTOM BLUE WAVY ACCENT (MATCHING REFERENCE) ================= */}
      <div className="relative w-full overflow-hidden leading-none mt-8 sm:mt-12">
        <svg
          viewBox="0 0 1440 36"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-6 sm:h-9 block"
        >
          <path
            d="M 0,18 C 240,36 480,0 720,18 C 960,36 1200,0 1440,18"
            stroke="#38BDF8"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
            opacity="0.85"
          />
        </svg>
      </div>
    </section>
  )
}
