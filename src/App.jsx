import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import HeroSection from './components/sections/HeroSection.jsx'
import EnquirySection from './components/sections/EnquirySection.jsx'
import ProgramsSection from './components/sections/ProgramsSection.jsx'
import EarlyEducationSection from './components/sections/EarlyEducationSection.jsx'
import WhyNexGenSection from './components/sections/WhyNexGenSection.jsx'
import CampusGallerySection from './components/sections/CampusGallerySection.jsx'
import VideoMomentsSection from './components/sections/VideoMomentsSection.jsx'
import ParentSpeakSection from './components/sections/ParentSpeakSection.jsx'
import ContactSection from './components/sections/ContactSection.jsx'
import FlyingButterfly from './components/ui/FlyingButterfly.jsx'
import { MessageCircle, Phone } from 'lucide-react'

export default function App() {
  return (
    <>
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
        <ProgramsSection />
        <EarlyEducationSection />
        <WhyNexGenSection />
        <CampusGallerySection />
        <VideoMomentsSection />
        <ParentSpeakSection />
        <ContactSection />
        <EnquirySection />
      </main>

      <Footer />

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
