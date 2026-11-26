import { useState, lazy, Suspense } from 'react'
import Header from './components/layout/Header.jsx'
import HeroSection from './components/sections/HeroSection.jsx'
import FlyingButterfly from './components/ui/FlyingButterfly.jsx'
import Preloader from './components/ui/Preloader.jsx'
import { MessageCircle, Phone } from 'lucide-react'

const Footer = lazy(() => import('./components/layout/Footer.jsx'))
const EnquirySection = lazy(() => import('./components/sections/EnquirySection.jsx'))
const ProgramsSection = lazy(() => import('./components/sections/ProgramsSection.jsx'))
const EarlyEducationSection = lazy(() => import('./components/sections/EarlyEducationSection.jsx'))
const WhyNexGenSection = lazy(() => import('./components/sections/WhyNexGenSection.jsx'))
const CampusGallerySection = lazy(() => import('./components/sections/CampusGallerySection.jsx'))
const VideoMomentsSection = lazy(() => import('./components/sections/VideoMomentsSection.jsx'))
const EventsSection = lazy(() => import('./components/sections/EventsSection.jsx'))
const ParentSpeakSection = lazy(() => import('./components/sections/ParentSpeakSection.jsx'))
const ContactSection = lazy(() => import('./components/sections/ContactSection.jsx'))

export default function App() {
  /* Show preloader; hides itself after first visit (sessionStorage guard inside) */
  const [showPreloader, setShowPreloader] = useState(true)

  return (
    <>
      {/* Preloader — shown once per session */}
      {showPreloader && (
        <Preloader onComplete={() => setShowPreloader(false)} />
      )}

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white focus:font-bold"
      >
        Skip to main content
      </a>

      {/* Playful animated butterfly */}
      <FlyingButterfly />

      <Header />

      <main id="main-content">
        <HeroSection />
        <Suspense fallback={null}>
          <ProgramsSection />
          <EarlyEducationSection />
          <WhyNexGenSection />
          <CampusGallerySection />
          <VideoMomentsSection />
          <EventsSection />
          <ParentSpeakSection />
          <ContactSection />
          <EnquirySection />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      {/* Mobile floating action buttons */}
      <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-3 lg:hidden">
        <a
          href="https://wa.me/919914300819?text=Hi%2C%20I%20want%20to%20know%20about%20Playway%20admission."
          target="_blank"
          rel="noopener"
          aria-label="WhatsApp us"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition-colors hover:bg-emerald-600"
        >
          <MessageCircle size={24} />
        </a>
        <a
          href="tel:+919914300819"
          aria-label="Call us"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-colors hover:bg-primary-hover"
        >
          <Phone size={24} />
        </a>
      </div>
    </>
  )
}
