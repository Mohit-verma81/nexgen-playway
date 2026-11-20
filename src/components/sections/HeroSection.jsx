import { Sparkles, Phone, Activity, Music, Palette, Monitor, Smile } from 'lucide-react'
import { CONTACT } from '../../data/index.js'

const HIGHLIGHTS = [
  { icon: Activity, label: 'Yoga & Meditation' },
  { icon: Music, label: 'Dance & Music' },
  { icon: Palette, label: 'Art & Creativity' },
  { icon: Monitor, label: 'Smart Screen Learning' },
  { icon: Smile, label: 'Safe Play Zone' },
]

export default function HeroSection() {
  return (
    <section aria-label="Hero" className="overflow-hidden bg-white pt-24 sm:pt-28 md:pt-28 lg:pt-28">
      <div className="container-content pb-8 sm:pb-12 md:pb-14">
        <div className="flex flex-col items-center gap-6 sm:gap-8 lg:flex-row lg:gap-12">

          {/* Left: Content (Mobile: order-2, Desktop: order-1) */}
          <div className="order-2 w-full text-center lg:order-1 lg:w-[48%] lg:text-left">
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-sunshine/20 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-amber-700">
              <Sparkles size={13} className="text-amber-600" /> Admissions Open 2026–27
            </span>

            <h1
              className="mb-4 sm:mb-5 font-extrabold leading-tight text-navy"
              style={{ fontSize: 'clamp(1.85rem, 6.5vw, 3.6rem)' }}
            >
              Where Little Learners{' '}
              <span className="text-primary">Play, Learn</span>{' '}
              &amp; Grow Together
            </h1>

            <p className="mx-auto mb-6 sm:mb-8 max-w-lg text-sm sm:text-base md:text-lg leading-relaxed text-muted lg:mx-0">
              A joyful beginning with caring teachers, creative activities and play-based learning in Mandi Gobindgarh.
            </p>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <a href="#enquiry" className="btn-primary w-full sm:w-auto">
                Book a School Visit
              </a>
              <a
                href={CONTACT.phone1Tel}
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold text-navy transition-colors hover:text-primary active:bg-slate-50"
              >
                <Phone size={15} className="text-primary" />
                <span>Call {CONTACT.phone1}</span>
              </a>
            </div>
          </div>

          {/* Right: Image + decorations (Mobile: order-1, Desktop: order-2) */}
          <div className="order-1 relative flex w-full justify-center lg:order-2 lg:w-[52%] pt-3 pb-2 sm:py-0">
            {/* Soft decorative blob */}
            <div className="hero-blob absolute inset-0 bg-soft-blue" aria-hidden="true" />

            {/* Hero image */}
            <img
              src="/assets/images/hero-child.png"
              alt="Happy child engaged in colourful building-block activity at NexGen Playway"
              className="relative z-10 w-full max-w-[260px] sm:max-w-sm md:max-w-md object-contain drop-shadow-md"
              width={420}
              height={500}
              loading="eager"
            />

            {/* Floating decorations */}
            <img
              src="/assets/illustrations/sun.jpg"
              alt=""
              aria-hidden="true"
              className="absolute right-0 top-1 sm:right-4 sm:top-4 z-20 h-11 w-11 sm:h-14 sm:w-14 rounded-full object-cover shadow-sm mix-blend-multiply"
            />
            <img
              src="/assets/illustrations/stars.jpg"
              alt=""
              aria-hidden="true"
              className="absolute left-0 top-1 sm:left-4 sm:top-4 z-20 h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover mix-blend-multiply"
            />
            <img
              src="/assets/illustrations/paper-plane.jpg"
              alt=""
              aria-hidden="true"
              className="absolute bottom-4 left-2 sm:bottom-6 sm:left-6 z-20 h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover mix-blend-multiply"
            />
          </div>
        </div>
      </div>

      {/* Highlights strip */}
      <div className="border-b border-t border-soft-blue bg-soft-blue/50 py-3 sm:py-4">
        <div className="container-content">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2.5 sm:gap-x-8 md:gap-x-10">
            {HIGHLIGHTS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-navy">
                <span className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-white shadow-sm text-primary">
                  <Icon size={13} className="sm:w-3.5 sm:h-3.5" />
                </span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
