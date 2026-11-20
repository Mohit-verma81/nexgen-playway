export default function SectionHeading({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={`mb-10 lg:mb-14 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <span className="mb-3 inline-block text-sm font-extrabold uppercase tracking-widest text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="mb-4 text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-2xl text-lg leading-relaxed text-muted ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
