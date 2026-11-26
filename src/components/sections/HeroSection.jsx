import { useId } from 'react'
import {
  Star,
  Calendar,
  ArrowRight,
  Play,
  Brain,
  Smile,
  Heart,
  Palette,
  ShieldCheck,
} from 'lucide-react'

const HIGHLIGHTS = [
  {
    icon: Brain,
    label: 'Early Brain Growth',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-500',
  },
  {
    icon: Smile,
    label: 'Play-Based Learning',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-500',
  },
  {
    icon: Heart,
    label: 'Social Confidence',
    iconBg: 'bg-pink-50',
    iconColor: 'text-pink-500',
  },
  {
    icon: Palette,
    label: 'Art & Creativity',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
  },
  {
    icon: ShieldCheck,
    label: 'Safe Play Zone',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-500',
  },
]

// Organic fluid wave-arch clip path (objectBoundingBox 0..1)
// Sweeps smoothly along the left and top, opening cleanly to the right & bottom.
const HERO_WAVE_MASK =
  'M 0.08,1.00 ' +
  'C 0.01,0.82 0.01,0.52 0.05,0.28 ' +
  'C 0.10,0.06 0.28,0.01 0.48,0.02 ' +
  'C 0.68,0.03 0.80,0.14 0.92,0.13 ' +
  'C 0.96,0.13 0.99,0.11 1.00,0.10 ' +
  'L 1.00,1.00 Z'

// Offset yellow crescent behind the top-left curve
const YELLOW_CRESCENT =
  'M 0.04,0.88 ' +
  'C -0.02,0.65 -0.01,0.40 0.04,0.22 ' +
  'C 0.10,0.03 0.27,-0.01 0.48,0.01 ' +
  'C 0.30,0.03 0.15,0.10 0.09,0.28 ' +
  'C 0.04,0.45 0.03,0.68 0.06,0.88 Z'

export default function HeroSection() {
  const rawId = useId()
  const maskId = 'hero-wave-mask-' + rawId.replace(/:/g, '')

  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF] to-[#F8FAFC] pt-24 sm:pt-28 lg:pt-24"
    >
      {/* Hidden SVG clipPath definition */}
      <svg width="0" height="0" className="absolute pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id={maskId} clipPathUnits="objectBoundingBox">
            <path d={HERO_WAVE_MASK} />
          </clipPath>
        </defs>
      </svg>

      {/* Subtle Corner Page Decorations matching mockup */}
      <div
        className="pointer-events-none absolute -top-10 -left-16 h-48 w-48 rounded-full bg-[#E0F2FE]/70 blur-[2px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-56 rounded-[50%_50%_0_0] bg-[#FEF08A]/55"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-12 -right-10 h-36 w-52 rounded-[60%_40%_0_0] bg-[#DBEAFE]/65"
        aria-hidden="true"
      />

      {/* Top-right soft blue dot grid */}
      <svg
        viewBox="0 0 80 60"
        className="pointer-events-none absolute right-3 top-20 z-10 hidden sm:block w-16 opacity-75"
        aria-hidden="true"
      >
        {[0, 1, 2, 3].map((col) =>
          [0, 1, 2].map((row) => (
            <circle
              key={`${col}-${row}`}
              cx={10 + col * 18}
              cy={10 + row * 18}
              r="3"
              fill="#CBD5E1"
            />
          ))
        )}
      </svg>

      {/* Main Hero Container */}
      <div className="container-content relative z-10 pb-6 sm:pb-10 lg:pb-12">
        <div className="flex flex-col items-center gap-6 sm:gap-8 lg:flex-row lg:items-center lg:gap-6">

          {/* ================= LEFT COLUMN: COPY & CTAS ================= */}
          <div className="order-2 w-full text-center lg:order-1 lg:w-[46%] lg:py-10 lg:text-left">
            {/* Eyebrow Pill */}
            <div className="mb-4 sm:mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-[#FFFBEB] px-3.5 py-1.5 shadow-sm">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-white">
                <Star size={11} className="fill-current" />
              </span>
              <span className="text-xs sm:text-[13px] font-bold tracking-wide text-navy">
                A Bright Start for a Better Tomorrow
              </span>
            </div>

            {/* Headline with Yellow Spark Rays */}
            <div className="relative inline-block">
              {/* 3 Yellow burst rays top-right of headline */}
              <svg
                viewBox="0 0 44 44"
                className="pointer-events-none absolute -right-7 -top-4 hidden sm:block w-9 h-9 text-amber-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <line x1="8" y1="14" x2="18" y2="4" />
                <line x1="16" y1="22" x2="32" y2="14" />
                <line x1="18" y1="30" x2="34" y2="30" />
              </svg>

              <h1
                className="mb-4 font-fredoka font-bold leading-[1.12] tracking-tight text-navy"
                style={{ fontSize: 'clamp(2.1rem, 5.2vw, 3.65rem)' }}
              >
                Where Little <br className="hidden sm:inline" />
                Learners{' '}
                <span className="text-[#3B82F6]">Play,</span>
                <br />
                <span className="text-[#FBBF24]">Learn</span> &amp; Grow
              </h1>
            </div>

            {/* Subtitle */}
            <p className="mx-auto mb-6 sm:mb-7 max-w-md text-sm sm:text-base md:text-[17px] leading-relaxed text-slate-600 lg:mx-0">
              A joyful beginning with caring teachers, creative activities and{' '}
              <span className="font-bold text-[#3B82F6]">play-based</span> learning in Mandi Gobindgarh.
            </p>

            {/* CTA Buttons Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:justify-start">
              <a
                href="#enquiry"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#2563EB] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(37,99,235,0.28)] transition-all hover:bg-[#1D4ED8] hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar size={16} />
                <span>Book a School Visit</span>
                <ArrowRight size={15} />
              </a>

              <a
                href="#campus"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full border border-slate-200/90 bg-white px-5 py-3 text-sm font-bold text-navy shadow-sm transition-all hover:border-blue-200 hover:bg-slate-50"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-white">
                  <Play size={11} className="ml-0.5 fill-current" />
                </span>
                <span>Watch Our Campus</span>
              </a>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: ORGANIC WAVE PHOTO WITH DOODLES ================= */}
          <div className="order-1 relative w-full lg:order-2 lg:w-[54%] pt-2 lg:pt-0">
            <div className="relative mx-auto w-full max-w-[540px] lg:max-w-none lg:w-[calc(100%+max(0px,(100vw-1240px)/2)+1.5rem)] lg:-mr-6">

              {/* Soft Yellow Crescent Hug along Top-Left Edge */}
              <svg
                viewBox="0 0 1 1"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 h-full w-full z-0 -translate-x-1 -translate-y-0.5"
                aria-hidden="true"
              >
                <path d={YELLOW_CRESCENT} fill="#FDE68A" opacity="0.95" />
              </svg>

              {/* Left Blue Spark Rays near Teddy Bear */}
              <svg
                viewBox="0 0 40 44"
                className="pointer-events-none absolute left-1 sm:left-3 top-[58%] z-20 w-6 sm:w-8 text-[#2563EB]"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <line x1="28" y1="10" x2="10" y2="20" />
                <line x1="30" y1="22" x2="8" y2="24" />
                <line x1="28" y1="34" x2="12" y2="30" />
              </svg>

              {/* Main Clipped Hero Photo */}
              <div
                className="relative z-10 w-full overflow-hidden rounded-b-3xl lg:rounded-br-none shadow-sm"
                style={{
                  aspectRatio: '16 / 10.2',
                  clipPath: `url(#${maskId})`,
                  WebkitClipPath: `url(#${maskId})`,
                }}
              >
                <img
                  src="/assets/hero-toddler-photo.jpg"
                  alt="Happy child playing with teddy bear and colourful rings at NexGen Playway"
                  className="h-full w-full object-cover object-center"
                  loading="eager"
                />

                {/* Paper Airplane with Dashed Loop Trail inside Top-Right */}
                <svg
                  viewBox="0 0 110 85"
                  className="pointer-events-none absolute right-[6%] top-[18%] z-20 w-14 sm:w-20 md:w-24 stroke-white fill-none stroke-[2.2] stroke-linecap-round stroke-linejoin-round drop-shadow-sm"
                  aria-hidden="true"
                >
                  <path
                    d="M 14,72 C 6,48 28,36 38,50 C 48,64 26,74 22,60 C 17,40 52,30 68,22"
                    strokeDasharray="4 4"
                    strokeWidth="2"
                    opacity="0.95"
                  />
                  <path d="M 68,22 L 98,8 L 84,38 Z" fill="white" fillOpacity="0.95" />
                  <path d="M 98,8 L 80,26 L 84,38" />
                  <line x1="80" y1="26" x2="68" y2="22" />
                </svg>
              </div>

            </div>
          </div>

        </div>

        {/* ================= FLOATING BOTTOM HIGHLIGHTS CARD ================= */}
        <div className="relative z-20 mx-auto mt-4 sm:mt-6 lg:-mt-4 max-w-5xl">
          <div className="rounded-2xl lg:rounded-full border border-slate-100 bg-white px-4 py-3.5 sm:px-8 sm:py-4 shadow-[0_12px_36px_rgba(15,23,42,0.07)]">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-0 lg:divide-x lg:divide-slate-200/80">
              {HIGHLIGHTS.map(({ icon: Icon, label, iconBg, iconColor }) => (
                <div
                  key={label}
                  className="flex items-center justify-start lg:justify-center gap-2.5 lg:px-3"
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${iconBg} ${iconColor}`}
                  >
                    <Icon size={18} strokeWidth={2.2} />
                  </span>
                  <span className="text-xs sm:text-[13px] font-bold leading-tight text-navy">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
