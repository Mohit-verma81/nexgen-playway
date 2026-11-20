import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQS } from '../../data/index.js'
import SectionHeading from '../ui/SectionHeading.jsx'

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null)
  const toggle = (idx) => setOpenIdx((o) => (o === idx ? null : idx))

  return (
    <section id="faq" className="bg-white section-pad">
      <div className="container-content">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="FAQs" title="Questions Parents Often Ask" center />

          <div className="divide-y divide-gray-100">
            {FAQS.map((faq, idx) => {
              const isOpen = openIdx === idx
              return (
                <div key={faq.id}>
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${faq.id}`}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left font-extrabold text-navy transition-colors duration-150 hover:text-primary focus-visible:text-primary focus-visible:outline-none"
                  >
                    <span className="text-base">{faq.q}</span>
                    <ChevronDown size={20}
                      className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : 'text-muted'}`} />
                  </button>
                  <div
                    id={`faq-${faq.id}`}
                    role="region"
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="pb-5 text-sm leading-relaxed text-muted">{faq.a}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-10 rounded-2xl bg-soft-blue p-6 text-center">
            <p className="mb-3 font-semibold text-navy">Still have questions?</p>
            <a href="#enquiry" className="btn-primary text-sm" style={{ padding: '0.625rem 1.5rem' }}>Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  )
}
