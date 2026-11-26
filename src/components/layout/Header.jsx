import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { NAV_LINKS } from '../../data/index.js'

const ALL_NAV_LINKS = [{ label: 'Home', href: '#' }, ...NAV_LINKS]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeHref, setActiveHref] = useState('#')

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace('#', '')).filter(Boolean)

    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 15)

      if (y < 140) {
        setActiveHref('#')
        return
      }

      if (window.innerHeight + y >= document.documentElement.scrollHeight - 40) {
        setActiveHref(`#${sectionIds[sectionIds.length - 1]}`)
        return
      }

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i])
        if (el && el.getBoundingClientRect().top <= 160) {
          setActiveHref(`#${sectionIds[i]}`)
          return
        }
      }
      setActiveHref('#')
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <header
      role="banner"
      className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-2.5 sm:px-6 sm:pt-3.5 transition-all duration-300"
    >
      <div className="relative mx-auto max-w-6xl">
        {/* Top-Right Playful Yellow Spark Rays (outside pill, matching mockup) */}
        <svg
          viewBox="0 0 36 32"
          className="pointer-events-none absolute -right-2 -top-2.5 z-20 hidden sm:block w-7 h-7 text-[#FACC15]"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <line x1="6" y1="22" x2="10" y2="6" />
          <line x1="16" y1="24" x2="24" y2="8" />
          <line x1="22" y1="28" x2="33" y2="20" />
        </svg>

        <div
          className={`pointer-events-auto relative flex h-14 sm:h-[68px] items-center justify-between overflow-hidden rounded-full border border-slate-100 bg-white/95 px-3 sm:px-5 backdrop-blur-md transition-all duration-300 ${
            scrolled
              ? 'shadow-[0_14px_38px_rgba(15,23,42,0.12)]'
              : 'shadow-[0_8px_30px_rgba(15,23,42,0.08)]'
          }`}
        >
          {/* Subtle Top-Left Pastel Blue Corner Accent inside Pill */}
          <div
            className="pointer-events-none -left-4 -top-4 absolute h-20 w-24 rounded-full bg-[#E0F2FE]/65"
            aria-hidden="true"
          />

          {/* Left: Logo + Vertical Divider */}
          <div className="relative z-10 flex items-center gap-4 lg:gap-5">
            <a
              href="#"
              onClick={() => {
                setActiveHref('#')
                close()
              }}
              className="flex shrink-0 items-center gap-2 sm:gap-2.5"
            >
              <img
                src="/assets/logo/logo.png"
                alt="NexGen Learning Hub"
                className="h-9 sm:h-11 w-auto"
                width={44}
                height={44}
              />
              <div className="leading-tight">
                <p className="font-baloo text-sm font-extrabold text-navy leading-none sm:text-base">
                  NexGen
                </p>
                <p className="text-[11px] sm:text-xs font-bold text-slate-600 leading-none mt-0.5">
                  Learning Hub
                </p>
                <p className="text-[10px] font-black tracking-widest text-[#3B82F6] leading-none mt-0.5">
                  PLAYWAY
                </p>
              </div>
            </a>

            <span className="hidden h-8 w-px bg-slate-200/90 lg:block" aria-hidden="true" />
          </div>

          {/* Center: Desktop Nav Links with Active Pill & Yellow Underline */}
          <nav className="relative z-10 hidden items-center gap-1 xl:gap-2 lg:flex" aria-label="Main navigation">
            {ALL_NAV_LINKS.map((link) => {
              const isActive = activeHref === link.href
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveHref(link.href)}
                  className={`relative rounded-full px-3.5 py-2 text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#EFF6FF] text-[#2563EB]'
                      : 'text-navy hover:bg-slate-50 hover:text-[#2563EB]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span
                      className="absolute bottom-1 left-1/2 h-[3px] w-8 -translate-x-1/2 rounded-full bg-[#FACC15]"
                      aria-hidden="true"
                    />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Right: Sunshine Yellow Desktop CTA */}
          <a
            href="#enquiry"
            className="relative z-10 hidden lg:inline-flex items-center gap-1.5 rounded-full bg-[#FACC15] px-5 py-2.5 text-sm font-extrabold text-[#0F172A] shadow-sm transition-all duration-200 hover:bg-[#FBBF24] hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Admission Enquiry</span>
            <ArrowRight size={15} strokeWidth={2.5} />
          </a>

          {/* Mobile Menu Controls */}
          <div className="relative z-10 flex items-center gap-2 lg:hidden">
            <a
              href="#enquiry"
              className="inline-flex items-center gap-1 rounded-full bg-[#FACC15] px-3.5 py-1.5 text-xs font-extrabold text-[#0F172A] shadow-xs sm:hidden"
            >
              <span>Enquire</span>
              <ArrowRight size={12} strokeWidth={2.5} />
            </a>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full text-navy transition-colors hover:bg-soft-blue focus:outline-none"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        className={`pointer-events-auto mx-auto max-w-6xl overflow-hidden rounded-2xl transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen
            ? 'mt-2 max-h-96 border border-slate-100 bg-white/98 shadow-xl backdrop-blur-md'
            : 'max-h-0'
        }`}
      >
        <div className="container-content flex flex-col gap-1 py-4">
          {ALL_NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                setActiveHref(link.href)
                close()
              }}
              className={`rounded-xl px-4 py-2.5 text-sm font-bold transition-colors ${
                activeHref === link.href
                  ? 'bg-[#EFF6FF] text-[#2563EB]'
                  : 'text-navy hover:bg-soft-blue hover:text-primary'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#enquiry"
            onClick={close}
            className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-[#FACC15] px-5 py-2.5 text-sm font-extrabold text-[#0F172A] shadow-sm"
          >
            <span>Admission Enquiry</span>
            <ArrowRight size={15} strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </header>
  )
}
