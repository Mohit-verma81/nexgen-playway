import { MapPin, Phone, UserCheck, Instagram, MessageCircle, Compass } from 'lucide-react'
import { CONTACT } from '../../data/index.js'
import SectionHeading from '../ui/SectionHeading.jsx'

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white section-pad">
      <div className="container-content">
        <SectionHeading eyebrow="Visit Us" title="Come, Say Hello!" center />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: Info + buttons */}
          <div>
            <div className="mb-7 space-y-5 text-sm">
              <div>
                <p className="mb-1 text-xs font-extrabold uppercase tracking-widest text-primary flex items-center gap-1.5">
                  <MapPin size={14} className="text-primary" /> Address
                </p>
                <p className="font-semibold text-navy">{CONTACT.address}</p>
              </div>
              <div>
                <p className="mb-1 text-xs font-extrabold uppercase tracking-widest text-primary flex items-center gap-1.5">
                  <Phone size={14} className="text-primary" /> Call Us
                </p>
                <p className="font-semibold text-navy">
                  <a href={CONTACT.phone1Tel} className="transition-colors hover:text-primary">{CONTACT.phone1}</a>
                  {' · '}
                  <a href={CONTACT.phone2Tel} className="transition-colors hover:text-primary">{CONTACT.phone2}</a>
                </p>
              </div>
              <div>
                <p className="mb-1 text-xs font-extrabold uppercase tracking-widest text-primary flex items-center gap-1.5">
                  <UserCheck size={14} className="text-primary" /> Founder &amp; Educator
                </p>
                <p className="font-semibold text-navy">{CONTACT.founder}</p>
              </div>
              <div>
                <p className="mb-1 text-xs font-extrabold uppercase tracking-widest text-primary flex items-center gap-1.5">
                  <Instagram size={14} className="text-primary" /> Instagram
                </p>
                <a href={CONTACT.instagram} target="_blank" rel="noopener"
                   className="font-semibold text-primary hover:underline">{CONTACT.instagramHandle}</a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3">
              <a href={CONTACT.phone1Tel} className="btn-primary w-full sm:w-auto text-center justify-center text-sm inline-flex items-center gap-2 py-3 px-5">
                <Phone size={15} />
                <span>Call Now</span>
              </a>
              <a href={CONTACT.whatsappLink} target="_blank" rel="noopener"
                 className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-extrabold text-white shadow-sm transition-colors hover:bg-emerald-700">
                <MessageCircle size={15} />
                <span>WhatsApp</span>
              </a>
              <a href={CONTACT.directionsLink} target="_blank" rel="noopener"
                 className="btn-outline w-full sm:w-auto text-center justify-center text-sm inline-flex items-center gap-2 py-3 px-5">
                <Compass size={15} />
                <span>Directions</span>
              </a>
            </div>
          </div>

          {/* Right: Map */}
          <div className="overflow-hidden rounded-3xl shadow-sm ring-1 ring-black/5">
            <iframe
              title="Map of NexGen Learning Hub Playway"
              loading="lazy"
              src={CONTACT.mapSrc}
              className="h-72 w-full lg:h-80"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
