import {
  GraduationCap,
  Users,
  Building2,
  Monitor,
  Heart,
  Palette,
} from 'lucide-react'
import SectionHeading from '../ui/SectionHeading.jsx'

const HIGHLIGHTS = [
  {
    icon: GraduationCap,
    title: 'Experienced Faculty',
    desc: 'Warm teachers who make every child feel safe, loved and seen.',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: Users,
    title: 'Personal Attention',
    desc: 'Small 1:10 batch ratio so each child gets individual focus.',
    color: 'bg-sky-50 text-sky-600',
  },
  {
    icon: Building2,
    title: 'Child-Safe Campus',
    desc: 'Soft foam flooring, rounded furniture & clean spaces.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Monitor,
    title: 'Smart Screen Classes',
    desc: 'Interactive audio-visual animated lessons that click quickly.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Heart,
    title: 'Weekly Yoga & Dance',
    desc: 'Active movement for mind-body fitness and stage confidence.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: Palette,
    title: 'Creative Art & Play',
    desc: 'Encouraging colours, crafts and imagination every single day.',
    color: 'bg-pink-50 text-pink-600',
  },
]

export default function WhyNexGenSection() {
  return (
    <section id="why-nexgen" className="bg-slate-50 pt-12 pb-6 sm:pt-16 sm:pb-8">
      <div className="container-content">
        <SectionHeading
          eyebrow="Why NexGen"
          title="A Place Where Children Love to Learn"
          subtitle="Dedication today, success tomorrow. Here is what parents value most."
          center
        />

        {/* Lightweight 6-Card Grid — Clean, Airy & Punchy */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {HIGHLIGHTS.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group flex items-start gap-4 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${item.color} transition-transform group-hover:scale-110`}
                >
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="mb-1 text-base font-extrabold text-navy group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-muted">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
