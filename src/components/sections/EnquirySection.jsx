import { useState } from 'react'
import { MessageCircle, CheckCircle2, Phone, Loader2 } from 'lucide-react'
import { CONTACT } from '../../data/index.js'

const GOOGLE_SHEET_URL =
  'https://script.google.com/macros/s/AKfycbz1xpeWU4d6cqkuQc4HNoydRRIr-WAa3GEDKGxIl32Er2u2kmj2d-_c4fvt2KSSKbrJdQ/exec'

const PROGRAM_OPTIONS = [
  'Playgroup (2 – 3 years)',
  'Nursery (3 – 4 years)',
  'LKG (4 – 5 years)',
  'UKG (5 – 6 years)',
]

const validatePhone = (p) => /^[6-9]\d{9}$/.test(p.trim())

export default function EnquirySection() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    program: 'Playgroup (2 – 3 years)',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const set = (k, v) => {
    setForm((f) => ({ ...f, [k]: v }))
    if (errors[k]) setErrors((e) => ({ ...e, [k]: null }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim() || form.name.trim().length < 2) {
      e.name = 'Please enter your name'
    }
    if (!validatePhone(form.phone)) {
      e.phone = 'Valid 10-digit mobile number required'
    }
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }

    setSubmitting(true)

    // 1. Send data directly to Google Sheet Web App
    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          program: form.program,
          message: form.message.trim(),
        }),
      })
    } catch (err) {
      console.error('Google Sheet submit error:', err)
    }

    // 2. Open WhatsApp with formatted admission details
    const msg = `*NexGen Playway — School Visit Enquiry*\n\n*Name:* ${form.name.trim()}\n*Phone:* +91 ${form.phone.trim()}\n*Admission:* ${form.program}${
      form.message.trim() ? `\n*Message:* ${form.message.trim()}` : ''
    }\n\nPlease share admission details and schedule a campus visit.`

    window.open(`https://wa.me/919914300819?text=${encodeURIComponent(msg)}`, '_blank')

    setSubmitting(false)
    setSubmitted(true)
    setForm({
      name: '',
      phone: '',
      program: 'Playgroup (2 – 3 years)',
      message: '',
    })
  }

  const inputCls = (err) =>
    `w-full rounded-2xl border bg-white px-4 py-3.5 text-sm sm:text-base font-fredoka text-navy placeholder:font-fredoka placeholder:text-gray-400 outline-none transition-all focus:ring-2 focus:ring-brand-coral/20 ${
      err ? 'border-red-400 bg-red-50/50' : 'border-gray-200 focus:border-brand-coral shadow-sm'
    }`

  return (
    <section id="enquiry" className="relative overflow-hidden bg-[#FFF9F6] pt-14 pb-16 sm:py-20">
      
      {/* Top Wave Divider transitioning cleanly from the white section above */}
      <div className="absolute top-0 inset-x-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-10 sm:h-14 md:h-16 block"
        >
          <path
            d="M 0,0 L 1440,0 L 1440,25 C 1140,55 860,10 580,45 C 320,70 140,20 0,35 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>

      {/* Repeating SVG Background Doodle Pattern (Constrained strictly to this section below the wave) */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-10 sm:top-14 md:top-16 opacity-[0.06] mix-blend-multiply z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 25 Q25 15 35 25 Q45 35 30 40 Z' fill='none' stroke='%23FF5733' stroke-width='1.5'/%3E%3Ccircle cx='85' cy='30' r='10' fill='none' stroke='%23FF5733' stroke-width='1.5'/%3E%3Cpath d='M75 80 Q85 70 95 80 Q105 90 90 95 Z' fill='none' stroke='%23FF5733' stroke-width='1.5'/%3E%3Cpath d='M25 85 L35 75 L45 85 L35 95 Z' fill='none' stroke='%23FF5733' stroke-width='1.5'/%3E%3Ccircle cx='55' cy='60' r='4' fill='%23FF5733'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      <div className="container-content relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          
          {/* ================= LEFT COLUMN: CIRCULAR CHILD PHOTO WITH CORAL ARC ================= */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              
              {/* Playful Floating Cloud Illustration (Top Right of Photo) */}
              <div className="pointer-events-none absolute -top-7 -right-6 sm:-top-9 sm:-right-8 z-20 w-24 sm:w-28 drop-shadow-sm animate-float-slow">
                <img
                  src="/assets/illustrations/cloud-coral.png"
                  alt=""
                  className="w-full h-auto opacity-90"
                />
              </div>

              {/* Soft Sky Blue Cloud (Bottom Left of Photo) */}
              <div className="pointer-events-none absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 z-20 w-20 sm:w-24 drop-shadow-sm animate-float-delayed">
                <img
                  src="/assets/illustrations/cloud-sky.png"
                  alt=""
                  className="w-full h-auto opacity-85"
                />
              </div>

              {/* Decorative Offset Coral Circular Arc */}
              <div
                className="pointer-events-none absolute -inset-4 sm:-inset-6 rounded-full border-[5px] sm:border-[7px] border-transparent border-l-brand-coral border-t-brand-coral -rotate-45"
                aria-hidden="true"
              />

              {/* Main Circular Photo Frame */}
              <div className="relative z-10 h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 rounded-full overflow-hidden shadow-2xl ring-4 sm:ring-8 ring-white bg-amber-100 transition-transform duration-500 hover:scale-[1.02]">
                <img
                  src="/assets/images/campus-tour/welcome.jpg"
                  alt="Happy student welcoming friends at NexGen Playway"
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>

            </div>
          </div>

          {/* ================= RIGHT COLUMN: FORM & HEADING ================= */}
          <div className="lg:col-span-7 max-w-xl mx-auto lg:mx-0 w-full">
            
            {/* Playful Child-Style Eyebrow (Matching Reference) */}
            <span className="font-hand text-2xl sm:text-3xl text-brand-coral font-bold tracking-wide block">
              Contact with Us
            </span>

            {/* Bubbly Childish Headline */}
            <h2 className="mt-1 font-fredoka text-3xl font-bold text-navy sm:text-4xl md:text-5xl tracking-tight leading-tight">
              Feel free to write us <br className="hidden sm:inline" />
              anytime
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 sm:mt-8 space-y-4 font-fredoka">
              
              {/* Your Name */}
              <div>
                <label htmlFor="form-name" className="sr-only">Your Name</label>
                <input
                  id="form-name"
                  type="text"
                  placeholder="Your Name *"
                  value={form.name}
                  onChange={(e) => set('name', e.target.value)}
                  className={inputCls(errors.name)}
                />
                {errors.name && (
                  <p className="mt-1 text-xs font-bold text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Your Phone */}
              <div>
                <label htmlFor="form-phone" className="sr-only">Your Phone</label>
                <input
                  id="form-phone"
                  type="tel"
                  placeholder="Your Phone (10-digit mobile) *"
                  value={form.phone}
                  onChange={(e) => set('phone', e.target.value.replace(/\D/g, '').slice(0, 10))}
                  className={inputCls(errors.phone)}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs font-bold text-red-500">{errors.phone}</p>
                )}
              </div>

              {/* Admission Dropdown */}
              <div>
                <label htmlFor="form-program" className="sr-only">Admission</label>
                <div className="relative">
                  <select
                    id="form-program"
                    value={form.program}
                    onChange={(e) => set('program', e.target.value)}
                    className={`${inputCls(false)} appearance-none cursor-pointer pr-10`}
                  >
                    {PROGRAM_OPTIONS.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Write a Message */}
              <div>
                <label htmlFor="form-message" className="sr-only">Write a Message</label>
                <textarea
                  id="form-message"
                  rows={4}
                  placeholder="Write a Message (Child's age, visit day preference, questions...)"
                  value={form.message}
                  onChange={(e) => set('message', e.target.value)}
                  className={`${inputCls(false)} resize-none`}
                />
              </div>

              {/* Submit CTA Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#FF5733] hover:bg-[#E04826] px-9 py-4 font-fredoka text-lg font-bold text-white shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-orange-300 disabled:opacity-75 cursor-pointer"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin shrink-0" />
                      <span>Sending Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <MessageCircle size={20} className="shrink-0" />
                      <span>Get In Touch</span>
                    </>
                  )}
                </button>
              </div>

              {/* Instant Status Message */}
              {submitted && (
                <div className="flex items-center gap-2 rounded-xl bg-emerald-50 p-3.5 text-xs sm:text-sm font-bold text-emerald-700 ring-1 ring-emerald-200">
                  <CheckCircle2 size={16} className="shrink-0 text-emerald-600" />
                  <span>Thank you! We have received your enquiry.</span>
                </div>
              )}

              {/* Direct Call / Helpline Line */}
              <p className="pt-2 text-xs text-muted flex items-center gap-2">
                <Phone size={13} className="text-brand-coral" />
                <span>Prefer a quick phone call? Call us at <a href={CONTACT.phone1Tel} className="font-bold text-navy hover:underline">{CONTACT.phone1}</a></span>
              </p>

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
