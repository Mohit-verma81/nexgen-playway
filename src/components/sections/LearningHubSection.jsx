import { Sparkles, ArrowRight, Gift, BookOpen, TrendingUp, Laptop, MessageSquare, Award, Cpu, Calculator } from 'lucide-react'
import { LEARNING_HUB, CONTACT } from '../../data/index.js'

const ICON_MAP = {
  BookOpen,
  TrendingUp,
  Laptop,
  MessageSquare,
  Award,
  Cpu,
  Calculator,
}

export default function LearningHubSection() {
  return (
    <section id="learning-hub" className="relative overflow-hidden bg-navy text-white section-pad">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-96 w-full max-w-7xl bg-primary/20 blur-[120px]" aria-hidden="true" />

      <div className="container-content relative">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-sunshine/20 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-sunshine">
            <Sparkles size={14} /> Beyond Playway
          </span>

          <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl text-white">
            NexGen Learning Hub — Growing Together
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-sm sm:text-base leading-relaxed text-white/70">
            As your child grows older, NexGen continues to support their academic journey with comprehensive coaching, digital skills, and confidence-building programs.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {LEARNING_HUB.map((item, idx) => {
            const Icon = ICON_MAP[item.icon] || BookOpen
            return (
              <div
                key={idx}
                className="flex flex-col rounded-2xl bg-white/10 p-5 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:-translate-y-1"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-sunshine">
                  <Icon size={20} />
                </div>
                <h4 className="text-base font-extrabold text-white">{item.label}</h4>
                <p className="mt-1 text-xs text-sunshine font-bold">{item.detail}</p>
              </div>
            )
          })}
          
          {/* Extra card for admission query */}
          <div className="flex flex-col justify-between rounded-2xl bg-gradient-to-br from-primary to-blue-600 p-5 text-white ring-1 ring-white/20">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-sunshine">Special Batches</span>
              <h4 className="mt-1 text-base font-extrabold">Admissions Open</h4>
              <p className="mt-1 text-xs text-white/80">Small batches with individual care</p>
            </div>
            <a
              href={CONTACT.whatsappLink}
              target="_blank"
              rel="noopener"
              className="mt-4 inline-flex items-center gap-1 text-xs font-extrabold text-white underline"
            >
              Enquire Classes <ArrowRight size={12} />
            </a>
          </div>
        </div>

        {/* Free Demo Callout */}
        <div className="mx-auto max-w-3xl rounded-3xl bg-white/10 p-6 ring-1 ring-white/15 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-md">
          <div>
            <div className="flex items-center gap-2">
              <Gift size={22} className="text-sunshine shrink-0" />
              <h3 className="text-lg font-extrabold text-white">
                Book a Free Trial Class / Consultation
              </h3>
            </div>
            <p className="mt-1 text-xs sm:text-sm text-white/70">
              Experience the difference in teaching. No obligations, purely trial.
            </p>
          </div>
          <a
            href={CONTACT.whatsappLink}
            target="_blank"
            rel="noopener"
            className="btn-primary shrink-0 bg-sunshine text-navy hover:bg-amber-400 font-black text-xs sm:text-sm"
          >
            Claim Free Demo
          </a>
        </div>
      </div>
    </section>
  )
}
