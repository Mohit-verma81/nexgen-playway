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
            <div className="relative w-full max-w-lg px-2 py-2">
              {/* Tilted Organic Green Outline Frame (matching reference) */}
              <div
                className="pointer-events-none absolute inset-0 rounded-[34px] sm:rounded-[40px] border-2 border-[#34D399]/85 -rotate-2 transition-transform duration-500"
                aria-hidden="true"
              />

              {/* Floating Playful Dot Beads (matching reference positions) */}
              {/* Top-Right Amber Circle */}
              <div
                className="pointer-events-none absolute -top-2 right-0 sm:-top-3 sm:-right-1 z-20 h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-[#FBBF24] shadow-sm"
                aria-hidden="true"
              />
              {/* Left-Middle Blue Dot */}
              <div
                className="pointer-events-none absolute -left-2 sm:-left-3 top-[58%] z-20 h-4 w-4 rounded-full bg-[#2563EB]/90 shadow-sm"
                aria-hidden="true"
              />
              {/* Bottom-Right Emerald Dot */}
              <div
                className="pointer-events-none absolute -right-1.5 sm:-right-2.5 bottom-[14%] z-20 h-4 w-4 rounded-full bg-[#10B981] shadow-sm"
                aria-hidden="true"
              />

              {/* Clean Soft Rounded-Rectangle Photo Frame (fits all kids cleanly) */}
              <div className="relative z-10 overflow-hidden rounded-[28px] sm:rounded-[34px] border-4 border-white bg-amber-50 shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
                <div className="aspect-[4/3] w-full">
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
