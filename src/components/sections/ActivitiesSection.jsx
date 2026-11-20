import { Monitor, Music, School, HeartPulse } from 'lucide-react'
import { ACTIVITIES } from '../../data/index.js'
import SectionHeading from '../ui/SectionHeading.jsx'

const ICON_MAP = {
  Monitor,
  Music,
  School,
  HeartPulse,
}

export default function ActivitiesSection() {
  return (
    <section id="activities" className="bg-white section-pad">
      <div className="container-content">
        <SectionHeading
          eyebrow="Activities"
          title="Learning Through Joy"
          subtitle="At NexGen Playway, children learn through play, music, movement and creativity."
          center
        />

        {/* 4 Clean Activity Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ACTIVITIES.map((a) => {
            const Icon = ICON_MAP[a.iconName] || Monitor
            return (
              <div
                key={a.id}
                className="group flex flex-col overflow-hidden rounded-3xl bg-slate-50 ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-white"
              >
                {/* Photo Header */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-xs font-bold text-navy shadow-sm">
                      <Icon size={14} className="text-primary" />
                      <span>{a.tag}</span>
                    </span>
                  </div>
                </div>

                {/* Lightweight Text */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="mb-1 text-lg font-extrabold text-navy group-hover:text-primary transition-colors">
                    {a.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-muted">
                    {a.desc}
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
