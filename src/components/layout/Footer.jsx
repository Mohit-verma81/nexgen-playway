import { Instagram, MapPin, Phone, MessageCircle, Heart, UserCheck } from 'lucide-react'
import { CONTACT } from '../../data/index.js'

const PROGRAM_LINKS = [
  { label: 'Playgroup (2–3 yrs)', href: '#programs' },
  { label: 'Nursery (3–4 yrs)', href: '#programs' },
  { label: 'LKG (4–5 yrs)', href: '#programs' },
  { label: 'UKG (5–6 yrs)', href: '#programs' },
]

const QUICK_LINKS = [
  { label: 'About NexGen', href: '#why-nexgen' },
  { label: 'Our Programs', href: '#programs' },
  { label: 'Early Education', href: '#early-education' },
  { label: 'Campus Tour', href: '#campus' },
  { label: 'Parent Speak', href: '#parent-speak' },
  { label: 'Admissions & Visit', href: '#enquiry' },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#FFF9F6] overflow-hidden" role="contentinfo">
      
      {/* ================= CONTINUOUS FLOWING WAVY TOP BORDER ================= */}
      <div className="relative w-full overflow-hidden leading-none -mb-[1px]">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-14 sm:h-20 md:h-28 block"
        >
          {/* Subtle Background Accent Wave */}
          <path
            d="M 0,32 C 220,80 440,10 680,48 C 920,86 1160,18 1320,55 L 1440,42 L 1440,120 L 0,120 Z"
            fill="#0F2B55"
            opacity="0.45"
          />
          {/* Main Dark Navy Rolling Wave (matching reference image) */}
          <path
            d="M 0,55 C 200,105 420,15 660,55 C 900,95 1120,20 1280,62 C 1360,82 1410,70 1440,50 L 1440,120 L 0,120 Z"
            fill="#0B1B33"
          />
        </svg>
      </div>

      {/* ================= FOOTER BODY (DARK NAVY THEME) ================= */}
      <div className="relative bg-[#0B1B33] text-white pt-6 pb-12 sm:pb-14">
        
        {/* ================= LEFT DOODLE ILLUSTRATIONS (CAR & STAR) ================= */}
        <div
          className="pointer-events-none absolute left-2 xl:left-8 top-16 hidden lg:flex flex-col items-center gap-10 select-none opacity-25"
          aria-hidden="true"
        >
          {/* Toy Car Doodle */}
          <svg
            viewBox="0 0 120 100"
            className="w-28 xl:w-32 h-auto stroke-white fill-none stroke-[2.2] stroke-linecap-round stroke-linejoin-round"
          >
            <path d="M 25,60 C 25,42 38,24 62,24 C 82,24 92,42 96,60 Z" />
            <path d="M 60,25 L 60,60" />
            <path d="M 12,60 C 12,54 18,54 25,60 L 96,60 C 102,54 108,54 108,60 C 108,68 102,70 96,70 L 25,70 C 18,70 12,68 12,60 Z" />
            <circle cx="36" cy="72" r="12" />
            <circle cx="36" cy="72" r="4" fill="white" />
            <circle cx="85" cy="72" r="12" />
            <circle cx="85" cy="72" r="4" fill="white" />
            <path d="M 4,48 L 14,48 M 2,58 L 10,58" />
          </svg>

          {/* Doodle Star */}
          <svg
            viewBox="0 0 60 60"
            className="w-12 xl:w-14 h-auto stroke-white fill-none stroke-[2] stroke-linecap-round stroke-linejoin-round"
          >
            <path d="M 30,5 L 37,22 L 55,22 L 40,34 L 46,51 L 30,40 L 14,51 L 20,34 L 5,22 L 23,22 Z" />
          </svg>
        </div>

        {/* ================= RIGHT DOODLE ILLUSTRATIONS (PAPER PLANE & BRUSH) ================= */}
        <div
          className="pointer-events-none absolute right-2 xl:right-8 top-12 hidden lg:flex flex-col items-center gap-8 select-none opacity-25"
          aria-hidden="true"
        >
          {/* Paper Airplane with Curved Dashed Loop Flight Path */}
          <svg
            viewBox="0 0 140 140"
            className="w-32 xl:w-36 h-auto stroke-white fill-none stroke-[2.2] stroke-linecap-round stroke-linejoin-round"
          >
            <path d="M 85,25 L 35,65 L 65,75 L 75,100 L 90,75 L 125,40 Z" fill="rgba(255,255,255,0.05)" />
            <path d="M 65,75 L 125,40" />
            <path
              d="M 35,65 C 10,95 20,125 50,130 C 80,135 110,115 105,85 C 100,65 90,60 82,74"
              strokeDasharray="4 4"
            />
          </svg>

          {/* Artist Paint Brush */}
          <svg
            viewBox="0 0 100 120"
            className="w-24 xl:w-28 h-auto stroke-white fill-none stroke-[2] stroke-linecap-round stroke-linejoin-round"
          >
            <path d="M 72,12 L 46,56" strokeWidth="4" />
            <rect x="40" y="52" width="16" height="8" rx="2" transform="rotate(-30 48 56)" fill="rgba(255,255,255,0.1)" />
            <path d="M 38,62 C 28,76 24,96 36,106 C 46,100 50,80 46,68 Z" fill="rgba(255,255,255,0.08)" />
            <circle cx="26" cy="108" r="3" fill="white" />
            <circle cx="18" cy="98" r="2" fill="white" />
          </svg>
        </div>

        {/* ================= 4-COLUMN CONTENT GRID ================= */}
        <div className="container-content relative z-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 pt-4 pb-12 border-b border-white/10">
            
            {/* Column 1: Logo Card, Tagline & Socials */}
            <div className="lg:col-span-4">
              {/* Logo Card with White Frame (matching HelloKids card style in reference) */}
              <div className="inline-block rounded-2xl bg-white p-3 shadow-md ring-2 ring-sunshine/40">
                <img
                  src="/assets/logo/logo.png"
                  alt="NexGen Playway & Academy"
                  className="h-14 sm:h-16 w-auto object-contain"
                />
              </div>

              <h3 className="mt-4 font-fredoka text-xl font-bold text-white tracking-wide">
                NexGen
              </h3>
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-sunshine">
                Playway &amp; Academy
              </p>
              
              <p className="mt-2 text-xs leading-relaxed text-slate-300 max-w-sm">
                The Power of Early Childhood Education. Play… Learn… Grow Together in a bright, loving, child-safe environment.
              </p>

              {/* Social Channels / Quick Badges */}
              <div className="mt-4 flex items-center gap-3">
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener"
                  aria-label="NexGen Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-rose-500 hover:text-white transition-colors"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href={CONTACT.whatsappLink}
                  target="_blank"
                  rel="noopener"
                  aria-label="NexGen WhatsApp"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-emerald-500 hover:text-white transition-colors"
                >
                  <MessageCircle size={16} />
                </a>
                <a
                  href={CONTACT.phone1Tel}
                  aria-label="Call NexGen"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-primary hover:text-white transition-colors"
                >
                  <Phone size={15} />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="mb-4 font-fredoka text-base font-bold text-white tracking-wide">
                Links
              </h4>
              <ul className="space-y-2.5">
                {QUICK_LINKS.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-xs text-slate-300 hover:text-sunshine transition-colors inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Our Programs */}
            <div className="lg:col-span-3">
              <h4 className="mb-4 font-fredoka text-base font-bold text-white tracking-wide">
                Our Programs
              </h4>
              <ul className="space-y-2.5">
                {PROGRAM_LINKS.map((prog, i) => (
                  <li key={i}>
                    <a
                      href={prog.href}
                      className="text-xs text-slate-300 hover:text-sunshine transition-colors inline-block"
                    >
                      {prog.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">
                <UserCheck size={14} className="text-sunshine" />
                <span>Founder: {CONTACT.founder}</span>
              </div>
            </div>

            {/* Column 4: Address & Contact */}
            <div className="lg:col-span-3">
              <h4 className="mb-4 font-fredoka text-base font-bold text-white tracking-wide">
                Address
              </h4>
              <ul className="space-y-3.5 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <MapPin size={16} className="text-sunshine shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{CONTACT.address}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone size={15} className="text-sunshine shrink-0" />
                  <a href={CONTACT.phone1Tel} className="font-bold text-white hover:text-sunshine transition-colors">
                    {CONTACT.phone1}
                  </a>
                  <span>·</span>
                  <a href={CONTACT.phone2Tel} className="font-bold text-white hover:text-sunshine transition-colors">
                    {CONTACT.phone2}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Instagram size={15} className="text-sunshine shrink-0" />
                  <a
                    href={CONTACT.instagram}
                    target="_blank"
                    rel="noopener"
                    className="hover:text-sunshine transition-colors"
                  >
                    {CONTACT.instagramHandle}
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* ================= BOTTOM COPYRIGHT BAR ================= */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 text-center sm:flex-row text-xs text-slate-400">
            <p>
              Copyright © 2026 by <span className="font-bold text-white">NexGen Playway &amp; Academy</span>. All Rights Reserved.
            </p>
            <p className="flex items-center gap-1.5">
              Made with <Heart size={12} className="text-rose-500 fill-rose-500" /> for joyful young learners.
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}
