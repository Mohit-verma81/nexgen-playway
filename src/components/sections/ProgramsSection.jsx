import { PROGRAMS } from '../../data/index.js'
import SectionHeading from '../ui/SectionHeading.jsx'

export default function ProgramsSection() {
  return (
    <section id="programs" className="relative overflow-hidden bg-white section-pad">
      <div className="container-content">
        <SectionHeading
          eyebrow="Our Programs"
          title="The Right Start for Every Age"
          subtitle="Gentle, activity-based learning that grows with your child, from first steps in school to getting ready for Class 1."
          center
        />

        {/* 4 Clean, Lightweight Program Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMS.map((p) => (
            <div
              key={p.id}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              {/* Photo Header */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className="rounded-full px-3.5 py-1 text-xs font-black text-white shadow-md backdrop-blur-sm"
                    style={{ backgroundColor: p.accentColor }}
                  >
                    {p.age}
                  </span>
                </div>
              </div>

              {/* Clean Lightweight Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-xl font-extrabold text-navy group-hover:text-primary transition-colors">
                  {p.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
