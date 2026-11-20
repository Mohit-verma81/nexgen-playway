import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../../data/index.js'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <header
      role="banner"
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-all duration-200 ${scrolled ? 'shadow-md py-1' : 'py-1.5 sm:py-2'
        }`}
    >
      <div className="container-content flex h-14 sm:h-16 items-center justify-between md:h-[72px]">
        {/* Logo */}
        <a href="#" onClick={close} className="flex shrink-0 items-center gap-2 sm:gap-2.5">
          <img
            src="/assets/logo/logo.png"
            alt="NexGen Learning Hub"
            className="h-9 sm:h-10 w-auto"
            width={40}
            height={40}
          />
          <div className="leading-tight">
            <p className="font-baloo text-sm font-bold text-navy leading-none sm:text-base">
              NexGen Learning Hub
            </p>
            <p className="text-[10px] font-extrabold tracking-widest text-primary leading-none mt-0.5">
              PLAYWAY
            </p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-muted transition-colors duration-150 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#enquiry"
          className="btn-primary hidden text-sm lg:inline-flex"
          style={{ padding: '0.625rem 1.25rem' }}
        >
          Admission Enquiry
        </a>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="#enquiry"
            className="btn-primary px-3.5 py-1.5 text-xs font-bold sm:hidden"
          >
            Enquire
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl text-navy transition-colors hover:bg-soft-blue focus:outline-none"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${menuOpen ? 'max-h-96 border-t border-gray-100 bg-white shadow-lg' : 'max-h-0'
          }`}
      >
        <div className="container-content flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className="rounded-xl px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-soft-blue hover:text-primary active:bg-soft-blue"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#enquiry"
            onClick={close}
            className="btn-primary mt-2 text-center text-sm"
          >
            Admission Enquiry
          </a>
        </div>
      </div>
    </header>
  )
}
