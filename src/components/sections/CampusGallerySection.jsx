import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { GALLERY_IMAGES } from '../../data/index.js'
import SectionHeading from '../ui/SectionHeading.jsx'

export default function CampusGallerySection() {
  const [lightbox, setLightbox] = useState(null)

  // Duplicate images for seamless 100% infinite marquee loop
  const marqueeList = [...GALLERY_IMAGES, ...GALLERY_IMAGES]

  useEffect(() => {
    if (!lightbox) return
    const handleKey = (e) => {
      if (e.key === 'Escape') setLightbox(null)
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [lightbox])

  return (
    <section id="campus" className="relative overflow-hidden bg-slate-50 section-pad">
      <div className="container-content">
        <SectionHeading
          eyebrow="Campus Tour &amp; Activities"
          title="Take a Peek Inside NexGen"
          subtitle="Explore our vibrant classrooms, activity halls, creative art walls, smart screens and play spaces. Better still, visit us in person with your child!"
          center
        />
      </div>

      {/* ================= CONTINUOUS HORIZONTAL MARQUEE STRIP ================= */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Soft Left & Right Fade Edges */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-28 bg-gradient-to-r from-slate-50 to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-28 bg-gradient-to-l from-slate-50 to-transparent"
          aria-hidden="true"
        />

        {/* Marquee Track (Right to Left Moving Strip, Pauses on Hover) */}
        <div className="marquee-track flex gap-4 sm:gap-6">
          {marqueeList.map((img, idx) => (
            <div
              key={idx}
              className="group relative shrink-0 cursor-pointer overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
              onClick={() => setLightbox(img)}
            >
              <div className="h-48 w-64 sm:h-60 sm:w-80 md:h-64 md:w-96 overflow-hidden bg-gray-100">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal on Click */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy/90 p-3 sm:p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute right-3 top-3 sm:right-5 sm:top-5 rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-white/40 z-10"
            onClick={() => setLightbox(null)}
            aria-label="Close image"
          >
            <X size={24} />
          </button>
          
          <div
            className="max-h-[92vh] max-w-4xl w-full overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[60vh] sm:max-h-[75vh] w-full object-contain bg-black"
            />
            <div className="p-3.5 sm:p-6 bg-white">
              <span className="rounded-full bg-soft-blue px-3 py-1 text-xs font-bold text-primary">
                {lightbox.category}
              </span>
              <h3 className="mt-1.5 sm:mt-2 text-base sm:text-lg font-extrabold text-navy">
                {lightbox.title}
              </h3>
              <p className="text-xs text-muted mt-0.5 sm:mt-1">{lightbox.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
