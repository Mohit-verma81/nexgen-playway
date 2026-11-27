import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Play, X, Video, Volume2 } from 'lucide-react'

const TESTIMONIALS = [
  {
    quote:
      "I really enjoyed being part of today's event. The atmosphere was so engaging and fun that I feel like coming back again and again. Thank you so much for such a memorable experience.",
    author: 'Happy Parent',
    role: 'Parent · Mandi Gobindgarh',
  },
  {
    quote:
      "I had such a great time at today's event—it was so enjoyable that I'd love to join events like this every day. Huge congratulations on placing first in both diya making and rangoli making, and thank you for hosting such a wonderful celebration.",
    author: 'Happy Parent',
    role: 'Parent · Mandi Gobindgarh',
  },
  {
    quote:
      "It felt wonderful to attend today's event. My child studies here and is always coming home having learned something new, and joining today gave me a great experience as well—something I'm excited about for my child's journey ahead.",
    author: 'Happy Parent',
    role: 'NexGen Playway · Mandi Gobindgarh',
  },
  {
    quote:
      'The event was truly wonderful, and everyone thoroughly enjoyed themselves. Thank you so much for bringing everyone together, and all the best for next year.',
    author: 'Happy Parent',
    role: 'Parent · Mandi Gobindgarh',
  },
]

const VIDEO_STORIES = [
  {
    id: 'vid-1',
    src: '/assets/event/parent-videos/parent-video-01.mp4',
    poster: '/assets/event/parent-videos/parent-poster-01.webp',
    roleLabel: 'Happy Parent',
    shortQuote:
      "I had such a wonderful time at the event—I enjoyed it so much that I'd love to experience it again and again. Truly the best!",
    longQuote:
      "I really enjoyed being part of today's event. The atmosphere was so engaging and fun that I feel like coming back again and again. Thank you so much for such a memorable experience.",
    accent: '#FF7043',
  },
  {
    id: 'vid-2',
    src: '/assets/event/parent-videos/parent-video-02.mp4',
    poster: '/assets/event/parent-videos/parent-poster-02.webp',
    roleLabel: 'Happy Parent',
    shortQuote:
      "I enjoyed today's event so much that I feel like attending gatherings like this every single day. Congratulations on coming first in both diya making and rangoli making!",
    longQuote:
      "I had such a great time at today's event—it was so enjoyable that I'd love to join events like this every day. Huge congratulations on placing first in both diya making and rangoli making, and thank you for hosting such a wonderful celebration.",
    accent: '#42A5F5',
  },
  {
    id: 'vid-3',
    src: '/assets/event/parent-videos/parent-video-04.mp4',
    poster: '/assets/event/parent-videos/parent-poster-04.webp',
    roleLabel: 'Parent Attendee',
    shortQuote:
      'Coming here felt so welcoming. My child studies here and loves it, learning new things every time, and attending today was a wonderful first-time experience for me too.',
    longQuote:
      "It felt wonderful to attend today's event. My child studies here and is always coming home having learned something new, and joining today gave me a great experience as well—something I'm excited about for my child's journey ahead.",
    accent: '#66BB6A',
  },
  {
    id: 'vid-4',
    src: '/assets/event/parent-videos/parent-video-03.mp4',
    poster: '/assets/event/parent-videos/parent-poster-03.webp',
    roleLabel: 'Happy Parent',
    shortQuote:
      'It was a wonderful gathering where everyone had a great time. Wishing everyone all the best for the year ahead!',
    longQuote:
      'The event was truly wonderful, and everyone thoroughly enjoyed themselves. Thank you so much for bringing everyone together, and all the best for next year.',
    accent: '#AB47BC',
  },
]

export default function ParentSpeakSection() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [activeVideo, setActiveVideo] = useState(null)

  const prev = () => setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1))

  // Auto-advance every 6.5 seconds when not hovered
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(next, 6500)
    return () => clearInterval(timer)
  }, [isPaused])

  // ESC key listener to close video modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveVideo(null)
      }
    }
    if (activeVideo) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeVideo])

  const t = TESTIMONIALS[current]

  return (
    <section
      id="parent-speak"
      className="relative overflow-hidden bg-white pt-6 pb-0 sm:pt-8 sm:pb-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ================= LEFT DOODLE: HAND-DRAWN SCHOOL BAG (OUTSIDE CLOUD) ================= */}
      <div
        className="pointer-events-none absolute left-3 sm:left-6 lg:left-10 xl:left-16 top-40 z-20 hidden md:block select-none opacity-85 drop-shadow-sm animate-float-slow"
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
        className="pointer-events-none absolute right-3 sm:right-6 lg:right-10 xl:right-16 top-40 z-20 hidden md:block select-none opacity-85 drop-shadow-sm animate-float-delayed"
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
          <div className="relative mx-auto flex flex-col items-center justify-center py-2 sm:py-4 md:py-4">

            {/* Masked Organic Background using .testimonial-one__bg (active on sm+ screens) */}
            <div className="hidden sm:block testimonial-one__bg drop-shadow-2xl" aria-hidden="true" />

            {/* Mobile Top-Left White Cloud + Top-Right Smiling Sun */}
            <div className="relative mt-14 sm:mt-0 w-full max-w-2xl flex items-center justify-center">
              {/* Mobile Top-Left Cute White Cloud (in front of green edge) */}
              <svg
                viewBox="0 0 100 58"
                className="sm:hidden pointer-events-none absolute -top-13 left-2 z-20 w-24 drop-shadow-sm"
                style={{ top: '-3.25rem' }}
                aria-hidden="true"
              >
                <path
                  d="M22,48 H76 C86,48 93,41 93,32 C93,24 87,18 79,17 C75,8 66,3 55,3 C44,3 35,9 32,18 C30,17 28,17 26,17 C15,17 7,24 7,33 C7,41 14,48 22,48 Z"
                  fill="#FFFFFF"
                  stroke="#E2E8F0"
                  strokeWidth="1.5"
                />
              </svg>

              {/* Mobile Top-Right Cute Smiling Sun (rising from behind the curved green bend) */}
              <svg
                viewBox="0 0 100 90"
                className="sm:hidden pointer-events-none absolute right-3 z-0 w-24"
                style={{ top: '-4.75rem' }}
                aria-hidden="true"
              >
                {/* Sun Rays */}
                <g stroke="#FACC15" strokeWidth="3.5" strokeLinecap="round">
                  <line x1="50" y1="6" x2="50" y2="14" />
                  <line x1="25" y1="15" x2="31" y2="21" />
                  <line x1="75" y1="15" x2="69" y2="21" />
                  <line x1="12" y1="36" x2="20" y2="39" />
                  <line x1="88" y1="36" x2="80" y2="39" />
                  <line x1="37" y1="9" x2="40" y2="16" />
                  <line x1="63" y1="9" x2="60" y2="16" />
                </g>
                {/* Sun Circle */}
                <circle cx="50" cy="48" r="25" fill="#FDE047" />
                {/* Rosy Cheeks */}
                <circle cx="38" cy="51" r="3.2" fill="#FB923C" opacity="0.55" />
                <circle cx="62" cy="51" r="3.2" fill="#FB923C" opacity="0.55" />
                {/* Eyes & Smile */}
                <circle cx="42" cy="44" r="2.2" fill="#1E293B" />
                <circle cx="58" cy="44" r="2.2" fill="#1E293B" />
                <path d="M44,52 Q50,58 56,52" fill="none" stroke="#1E293B" strokeWidth="2.2" strokeLinecap="round" />
              </svg>

              {/* Mobile Top-Right Mini White Cloud (in front of sun & green edge) */}
              <svg
                viewBox="0 0 72 44"
                className="sm:hidden pointer-events-none absolute right-1 z-20 w-16 drop-shadow-sm"
                style={{ top: '-0.85rem' }}
                aria-hidden="true"
              >
                <path
                  d="M16,36 H55 C62,36 67,31 67,25 C67,19 63,14 57,13 C54,6 47,3 39,3 C31,3 24,7 22,14 C21,14 19,13 18,13 C10,13 5,19 5,25 C5,31 10,36 16,36 Z"
                  fill="#FFFFFF"
                  stroke="#E2E8F0"
                  strokeWidth="1.5"
                />
              </svg>

              {/* Testimonial Content sitting safely inside the card */}
              <div className="relative z-10 w-full max-w-2xl rounded-b-[32px] rounded-t-none bg-[#6FBD30] sm:bg-transparent sm:rounded-none px-6 pt-3 pb-8 sm:px-16 sm:pt-20 sm:pb-24 md:px-20 md:pt-24 md:pb-28 text-center text-white shadow-xl sm:shadow-none">

                {/* Mobile Organic Top Hill Cap (deep curved bend on top-right so sun rises from it) */}
                <svg
                  viewBox="0 0 360 56"
                  preserveAspectRatio="none"
                  className="sm:hidden pointer-events-none absolute bottom-full left-0 w-full h-14 -mb-px"
                  aria-hidden="true"
                >
                  <path
                    d="M0,56 C0,20 26,8 68,7 Q155,2 225,16 C275,26 305,46 335,48 C350,49 360,52 360,56 Z"
                    fill="#6FBD30"
                  />
                </svg>

                {/* Mobile Bottom-Left & Bottom-Right Decorative Curves */}
                <svg
                  viewBox="0 0 36 36"
                  className="sm:hidden pointer-events-none absolute bottom-4 left-4 w-7 h-7 stroke-[#A6E272] fill-none"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M6,10 C6,22 14,28 26,28" />
                  <path d="M12,8 C12,17 18,22 27,22" opacity="0.7" />
                </svg>
                <svg
                  viewBox="0 0 36 36"
                  className="sm:hidden pointer-events-none absolute bottom-4 right-4 w-7 h-7 stroke-[#A6E272] fill-none"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M30,10 C30,22 22,28 10,28" />
                  <path d="M24,8 C24,17 18,22 9,22" opacity="0.7" />
                </svg>

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
              <span className="sm:hidden mx-auto mt-1.5 mb-2 block h-[1.5px] w-12 rounded-full bg-white/50" aria-hidden="true" />

              {/* Bubbly Headline: Fredoka font */}
              <h2 className="mt-1 font-fredoka text-xl font-bold text-white sm:text-4xl md:text-5xl leading-snug sm:leading-tight tracking-tight">
                Parents' words are the <br className="hidden sm:inline" />
                key to happy kids
              </h2>

              {/* Testimonial Quote Paragraph */}
              <div className="mx-auto mt-4 sm:mt-6 max-w-xl min-h-[140px] sm:min-h-[124px] flex items-center justify-center">
                <p className="font-fredoka text-sm sm:text-base md:text-lg leading-relaxed text-white/95 font-medium transition-opacity duration-300">
                  "{t.quote}"
                </p>
              </div>

              {/* Bottom Row: On mobile, centered Author above centered Arrows; on sm+, Arrows left & Author right */}
              <div className="mt-5 sm:mt-7 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 sm:gap-3 border-t border-white/20 pt-5 sm:pt-5 sm:px-4">

                {/* Navigation Pill Circles */}
                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={prev}
                    aria-label="Previous Testimonial"
                    className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#529320] text-white shadow-md transition-all hover:scale-105 hover:bg-[#437A1A] active:scale-95 focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <ChevronLeft size={20} className="sm:w-[22px] sm:h-[22px]" />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next Testimonial"
                    className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#529320] text-white shadow-md transition-all hover:scale-105 hover:bg-[#437A1A] active:scale-95 focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <ChevronRight size={20} className="sm:w-[22px] sm:h-[22px]" />
                  </button>
                </div>

                {/* Parent Name & Details */}
                <div className="text-center sm:text-right">
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

            {/* Mobile Pagination Dots */}
            <div className="sm:hidden mt-4 flex items-center justify-center gap-2" role="tablist" aria-label="Testimonial slides">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-selected={i === current}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? 'w-2.5 bg-[#6FBD30]' : 'w-2.5 bg-[#6FBD30]/30 hover:bg-[#6FBD30]/60'
                  }`}
                />
              ))}
            </div>

          </div>

        </div>

        {/* ================= VIDEO STORIES: 4 VERTICAL REEL CARDS ================= */}
        <div id="parent-video-stories" className="mt-10 sm:mt-16 max-w-6xl mx-auto scroll-mt-24">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs sm:text-sm font-semibold tracking-wide">
              <span>Real Parents · Real Smiles</span>
            </div>
            <h3 className="mt-2.5 font-fredoka text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">
              Watch Real Parent Stories
            </h3>
            <p className="mt-1.5 text-xs sm:text-base text-slate-500 max-w-lg mx-auto">
              Tap on any story to hear directly how NexGen has transformed their child's early journey with confidence and joy.
            </p>
          </div>

          {/* Reel Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
            {VIDEO_STORIES.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveVideo(item)}
                onMouseEnter={(e) => {
                  const v = e.currentTarget.querySelector('video')
                  if (v) v.play().catch(() => {})
                }}
                onMouseLeave={(e) => {
                  const v = e.currentTarget.querySelector('video')
                  if (v) {
                    v.pause()
                    v.currentTime = 0
                  }
                }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-900 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 ring-1 ring-slate-200/60"
              >
                {/* 9:14 Reel Aspect Ratio Container */}
                <div className="relative aspect-[9/14] sm:aspect-[9/15] w-full overflow-hidden">
                  {/* Background Video: plays on hover, paused on idle */}
                  <video
                    src={item.src}
                    poster={item.poster}
                    loop
                    muted
                    playsInline
                    preload="none"
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient overlays for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30 pointer-events-none" />

                  {/* Top Badge: Reel Tag */}
                  <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10">
                    <span className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full bg-black/40 backdrop-blur-md px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs font-medium text-white border border-white/20">
                      <Video size={11} className="text-rose-400" />
                      <span>Story</span>
                    </span>
                  </div>

                  {/* Top Right: Volume Icon hint */}
                  <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-10">
                    <span className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-black/40 backdrop-blur-md text-white/80">
                      <Volume2 size={12} className="sm:w-3.5 sm:h-3.5" />
                    </span>
                  </div>

                  {/* Centered Play Button (fades out on hover while preview plays) */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-200 group-hover:opacity-0">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white/90 text-primary shadow-xl backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                      <Play size={20} className="ml-1 sm:w-6 sm:h-6 fill-current" />
                    </div>
                  </div>

                  {/* Clean video card — no text overlay */}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ================= FULLSCREEN VIDEO MODAL ================= */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setActiveVideo(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-sm sm:max-w-md overflow-hidden rounded-3xl bg-slate-900 shadow-2xl ring-1 ring-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 bg-slate-800/80">
              <div className="flex items-center gap-2">
                <span
                  className="rounded-full px-2.5 py-0.5 text-xs font-bold text-white"
                  style={{ backgroundColor: activeVideo.accent }}
                >
                  {activeVideo.roleLabel}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white">
                  NexGen Playway &amp; Academy
                </span>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                aria-label="Close video"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative aspect-[9/16] max-h-[70vh] w-full bg-black">
              <video
                src={activeVideo.src}
                controls
                autoPlay
                playsInline
                className="h-full w-full object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-800/80 border-t border-white/10">
              <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                "{activeVideo.longQuote}"
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ================= BOTTOM BLUE WAVY ACCENT (MATCHING REFERENCE) ================= */}
      <div className="relative w-full overflow-hidden leading-none mt-12 sm:mt-16">
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
