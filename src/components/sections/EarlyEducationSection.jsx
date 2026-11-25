import { Trophy, Sparkles, CheckCircle2 } from 'lucide-react'

export default function EarlyEducationSection() {
  return (
    <section id="early-education" className="relative overflow-hidden bg-white section-pad">
      {/* Background Soft Doodles & Glow */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sunshine/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-content relative z-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          
          {/* ================= LEFT CONTENT COLUMN ================= */}
          <div className="lg:col-span-7">
            <span className="inline-block font-extrabold text-brand-coral tracking-wide text-base sm:text-lg mb-2">
              NexGen Playway
            </span>

            <h2 className="text-3xl font-black tracking-tight text-navy sm:text-4xl md:text-5xl leading-tight">
              The Power of <br className="hidden sm:inline" />
              <span className="text-sunshine">Early Childhood Education</span>
            </h2>

            <div className="mt-6 space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
              <p>
                Early childhood education (ECE) plays a vital role in children’s development. It provides a strong foundation for life, academic, social, and emotional growth.
              </p>
              <p>
                During these formative years, a child’s brain is like a sponge, absorbing new information &amp; experiences at a remarkable rate. This critical period of brain development brings rapid cognitive, emotional, and physical growth for a child. It paves the way for greater learning capabilities.
              </p>
              <p>
                NexGen Playway programs and our dedicated educators prove invaluable during this critical time, offering structured, creative environments to nurture the developing child with love, joy, and individual care.
              </p>
            </div>

            {/* Key Pillars Checklist */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 pt-2">
              <div className="flex items-center gap-2.5 rounded-2xl bg-amber-50/70 p-3 text-navy">
                <CheckCircle2 size={18} className="shrink-0 text-amber-500" />
                <span className="text-xs sm:text-sm font-bold">90% Brain Growth</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-2xl bg-sky-50/70 p-3 text-navy">
                <CheckCircle2 size={18} className="shrink-0 text-sky-500" />
                <span className="text-xs sm:text-sm font-bold">Play-Based Learning</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-2xl bg-rose-50/70 p-3 text-navy">
                <CheckCircle2 size={18} className="shrink-0 text-rose-500" />
                <span className="text-xs sm:text-sm font-bold">Social Confidence</span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT IMAGE & ORGANIC BLOB COLUMN ================= */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              
              {/* Playful Decorative Doodle Loops (matching reference design) */}
              <svg
                viewBox="0 0 500 450"
                className="pointer-events-none absolute -inset-8 h-[116%] w-[116%] overflow-visible text-emerald-500"
                aria-hidden="true"
              >
                {/* Green/Teal Dynamic Ribbon Loop */}
                <path
                  d="M 60 120 C 120 -20, 420 -30, 470 120 C 520 270, 430 430, 310 440 C 210 450, 10 380, 40 240 C 60 160, 160 80, 260 90"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="5"
                  strokeLinecap="round"
                  opacity="0.8"
                />
                {/* Orange/Coral Accent Arch */}
                <path
                  d="M 370 70 Q 420 80 430 130"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                {/* Floating playful dot beads */}
                <circle cx="440" cy="120" r="14" fill="#F59E0B" />
                <circle cx="495" cy="270" r="8" fill="#10B981" />
                <circle cx="20" cy="220" r="10" fill="#38BDF8" />
              </svg>

              {/* Organic Blob Photo Mask */}
              <div
                className="relative z-10 overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.01]"
                style={{
                  borderRadius: '42% 58% 70% 30% / 45% 45% 55% 55%',
                }}
              >
                <div className="aspect-[4/3] w-full bg-amber-100 sm:aspect-[1.15/1]">
                  <img
                    src="/assets/events/celebration-15.jpg"
                    alt="NexGen Kindergarten & Early Education Classroom"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Overlapping Floating Award / Trust Badge */}
              <div className="absolute -bottom-4 left-4 sm:-bottom-6 sm:left-6 z-20 flex items-center gap-3.5 rounded-full bg-white px-4 py-3 sm:px-5 sm:py-3.5 shadow-xl ring-2 ring-sunshine">
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                  <Trophy size={24} />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-black text-navy leading-none">
                    100%
                  </div>
                  <div className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                    Child-Centred Care
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
