import { useState, useEffect } from 'react'
import {
  Star,
  ArrowRight,
  Heart,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
} from 'lucide-react'

function buildGallery(folder, featured, extraFiles, baseTitle, baseCaption) {
  const isVideo = (file) => /\.(mp4|webm|mov)$/i.test(file)
  const featuredSet = new Set(featured.map((p) => p.file))
  const featuredItems = featured.map((p) => ({
    src: `/assets/event/${folder}/${p.file}`,
    type: isVideo(p.file) ? 'video' : 'image',
    title: p.title,
    caption: p.caption,
  }))
  const extraItems = extraFiles
    .filter((file) => !featuredSet.has(file))
    .map((file, idx) => ({
      src: `/assets/event/${folder}/${file}`,
      type: isVideo(file) ? 'video' : 'image',
      title: isVideo(file)
        ? `${baseTitle} Reel`
        : `${baseTitle} #${featuredItems.length + idx + 1}`,
      caption: baseCaption,
    }))
  return [...featuredItems, ...extraItems]
}

const HALLOWEEN_FILES = [
  'reel.mp4',
  'halloween-02.jpg', 'halloween-03.jpg', 'halloween-04.jpg', 'halloween-05.jpg',
  'halloween-06.jpg', 'halloween-07.jpg', 'halloween-08.jpg', 'halloween-09.jpg',
  'halloween-10.jpg', 'halloween-11.jpg', 'halloween-12.jpg', 'halloween-13.jpg',
  'halloween-14.jpg', 'halloween-15.jpg', 'halloween-16.jpg', 'halloween-17.jpg',
  'halloween-18.jpg', 'halloween-19.jpg', 'halloween-21.jpg',
]

const DIWALI_FILES = [
  'diwali-01.jpg', 'diwali-02.jpg', 'diwali-03.jpg', 'diwali-04.jpg',
  'diwali-05.jpg', 'diwali-06.jpg', 'diwali-07.jpg', 'diwali-08.jpg',
  'diwali-09.jpg', 'diwali-10.jpg', 'diwali-11.jpg', 'diwali-12.jpg',
  'diwali-13.jpg', 'diwali-14.jpg', 'diwali-15.jpg', 'diwali-video-01.mp4',
]

const DUSHHERA_FILES = [
  'dushhera-01.jpg', 'dushhera-02.jpg', 'dushhera-video-01.mp4', 'dushhera-video-02.mp4',
]

const CAMPUS_ACTIVITY_FILES = [
  'campus-video-01.mp4', 'event-video-02.mp4', 'event-video-03.mp4', 'event-video-04.mp4', 'event-video-05.mp4',
  // Activity images (shown first below videos)
  'campus-activity-16.jpg', 'campus-activity-17.jpg', 'campus-activity-18.jpg', 'campus-activity-19.jpg',
  'campus-activity-20.jpg', 'campus-activity-21.jpg', 'campus-activity-22.jpg', 'campus-activity-23.jpg',
  // Campus images (shown below activity images)
  'campus-01.jpg', 'campus-02.jpg', 'campus-03.jpg', 'campus-04.jpg', 'campus-05.jpg',
  'campus-07.jpg', 'campus-08.jpg', 'campus-09.jpg', 'campus-10.jpg', 'campus-11.jpg',
  'campus-12.jpg', 'campus-13.jpg', 'campus-14.jpg', 'campus-15.jpg',
]

const BIRTHDAY_FILES = [
  'celebration-15.jpg', 'celebration-17.jpg', 'celebration-18.jpg', 'celebration-19.jpg',
  'celebration-20.jpg', 'celebration-21.jpg', 'celebration-22.jpg', 'celebration-29.jpg',
  'celebration-30.jpg', 'celebration-31.jpg', 'celebration-33.jpg', 'celebration-34.jpg',
  'celebration-35.jpg', 'celebration-36.jpg', 'celebration-37.jpg', 'celebration-38.jpg',
  'birthday-video-01.mp4', 'event-video-01.mp4',
]

const EVENT_CARDS = [
  {
    id: 'halloween',
    title: 'Halloween Costume Fiesta',
    subtitle: 'Spooky fun and creative costumes!',
    themeColor: '#E53E3E',
    bgColor: 'bg-[#FFF5F5]',
    borderColor: 'border-[#FED7D7]',
    iconBg: 'bg-[#FED7D7]/70 text-[#E53E3E]',
    rayColor: '#FF8787',
    iconType: 'diya',
    photos: buildGallery(
      'halloween',
      [
        {
          file: 'halloween-02.jpg',
          title: 'Halloween Costume Assembly',
          caption: 'Children showcasing their creative and colourful costumes during the morning circle.',
        },
        {
          file: 'halloween-13.jpg',
          title: 'Classroom Costume Parade',
          caption: 'Joyful smiles as little ones share their character stories with friends.',
        },
      ],
      HALLOWEEN_FILES,
      'Halloween Fiesta Moment',
      'Playful costume dress-up, creative expression and Halloween fun at NexGen.'
    ),
  },
  {
    id: 'gurudwara',
    title: 'Gurudwara Visit & Blessings',
    subtitle: 'Peaceful darshan, gratitude and prayers.',
    themeColor: '#D97706',
    bgColor: 'bg-[#FFFBEB]',
    borderColor: 'border-[#FDE68A]',
    iconBg: 'bg-[#FDE68A]/70 text-[#D97706]',
    rayColor: '#FBB740',
    iconType: 'people',
    photos: buildGallery(
      'gurudwara-visit',
      [
        {
          file: 'gurudwara-01.jpg',
          title: 'Gurudwara Sahib Darshan',
          caption: 'Children learning values of gratitude, sharing and seeking elders blessings.',
        },
        {
          file: 'gurudwara-02.jpg',
          title: 'Community Warmth & Prayers',
          caption: 'Quiet moments of reflection and moral education in early childhood.',
        },
      ],
      ['gurudwara-01.jpg', 'gurudwara-02.jpg'],
      'Blessings & Visit',
      'Cherished moments of warmth, respect and community bonding.'
    ),
  },
  {
    id: 'campus-activities',
    title: 'Campus Activities',
    subtitle: 'Playful learning, art and everyday joy!',
    themeColor: '#16A34A',
    bgColor: 'bg-[#F0FDF4]',
    borderColor: 'border-[#BBF7D0]',
    iconBg: 'bg-[#BBF7D0]/70 text-[#16A34A]',
    rayColor: '#34D399',
    iconType: 'palette',
    photos: buildGallery(
      'campus-activities',
      [
        {
          file: 'campus-activity-16.jpg',
          title: 'Active Classroom Engagement',
          caption: 'Hands-on play, motor skill games and joyful learning moments at NexGen.',
        },
        {
          file: 'campus-activity-18.jpg',
          title: 'Safe Soft Play & Discovery',
          caption: 'Children exploring creativity, blocks and group activities with caring mentors.',
        },
      ],
      CAMPUS_ACTIVITY_FILES,
      'Campus Activity',
      'Joyful everyday classroom activities and play-based learning at NexGen.'
    ),
  },
  {
    id: 'mindfulness',
    title: 'Yoga',
    subtitle: 'A calm mind, a happy heart.',
    themeColor: '#7C3AED',
    bgColor: 'bg-[#FAF5FF]',
    borderColor: 'border-[#E9D5FF]',
    iconBg: 'bg-[#E9D5FF]/70 text-[#7C3AED]',
    rayColor: '#A78BFA',
    iconType: 'mindful',
    photos: buildGallery(
      'yoga',
      [
        {
          file: 'yoga-01.jpg',
          title: 'Morning Yoga Stretch Circle',
          caption: 'Gentle stretching and breathing exercises on child-safe soft mats.',
        },
        {
          file: 'yoga-03.jpg',
          title: 'Calm Postures & Animal Poses',
          caption: 'Building agility, bodily balance and calm concentration every morning.',
        },
      ],
      ['yoga-01.jpg', 'yoga-02.jpg', 'yoga-03.jpg', 'yoga-04.jpg'],
      'Morning Yoga Session',
      'Building balance, mindfulness and cheerful energy on soft mats.'
    ),
  },
  {
    id: 'diwali',
    title: 'Diwali Celebrations & Crafts',
    subtitle: 'Crafting happiness for the festival of lights.',
    themeColor: '#65A30D',
    bgColor: 'bg-[#F7FEE7]',
    borderColor: 'border-[#D9F99D]',
    iconBg: 'bg-[#D9F99D]/70 text-[#65A30D]',
    rayColor: '#A3E635',
    iconType: 'palette',
    photos: buildGallery(
      'diwali',
      [
        {
          file: 'diwali-01.jpg',
          title: 'Diwali Art & Rangoli Prep',
          caption: 'Developing fine hand-eye coordination with tactile festival craft projects.',
        },
        {
          file: 'diwali-08.jpg',
          title: 'Festival of Lights Smiles',
          caption: 'Creating handmade diyas and festive keepsakes to bring warmth home.',
        },
      ],
      DIWALI_FILES,
      'Diwali Celebration',
      'Tactile art, festive crafts and joyful Diwali classroom celebrations.'
    ),
  },
  {
    id: 'dushhera',
    title: 'Dushhera Celebrations',
    subtitle: 'Storytelling, culture and joyful traditions.',
    themeColor: '#EA580C',
    bgColor: 'bg-[#FFF7ED]',
    borderColor: 'border-[#FED7AA]',
    iconBg: 'bg-[#FED7AA]/70 text-[#EA580C]',
    rayColor: '#FB923C',
    iconType: 'diya',
    photos: buildGallery(
      'dushhera',
      [
        {
          file: 'dushhera-01.jpg',
          title: 'Dushhera Cultural Assembly',
          caption: 'Children learning timeless values of good triumphing over evil.',
        },
        {
          file: 'dushhera-02.jpg',
          title: 'Festive Dress-Up & Joy',
          caption: 'Celebrating Indian heritage with music, props and cheerful smiles.',
        },
      ],
      DUSHHERA_FILES,
      'Dushhera Celebration',
      'Joyful cultural storytelling and Dushhera festivities at NexGen.'
    ),
  },
  {
    id: 'color-days',
    title: 'Birthday Celebrations',
    subtitle: 'A splash of colors and endless joy.',
    themeColor: '#2563EB',
    bgColor: 'bg-[#EFF6FF]',
    borderColor: 'border-[#BFDBFE]',
    iconBg: 'bg-[#BFDBFE]/70 text-[#2563EB]',
    rayColor: '#60A5FA',
    iconType: 'masks',
    photos: buildGallery(
      'birthday-celebrations',
      [
        {
          file: 'celebration-20.jpg',
          title: 'Themed Costume Assembly',
          caption: 'Sensory discovery through color identification, group rhymes and theme dressing.',
        },
        {
          file: 'celebration-35.jpg',
          title: 'Vibrant Theme Day Smiles',
          caption: 'Immersive themed activities bringing preschool storytelling alive.',
        },
      ],
      BIRTHDAY_FILES,
      'Birthday & Theme Celebration',
      'Smiling faces, colourful themes and joyful classroom celebrations.'
    ),
  },
  {
    id: 'dance-rhythm',
    title: 'Dance, Rhythm & Duppia',
    subtitle: 'Groove, move and celebrate!',
    themeColor: '#C026D3',
    bgColor: 'bg-[#FDF4FF]',
    borderColor: 'border-[#F5D0FE]',
    iconBg: 'bg-[#F5D0FE]/70 text-[#C026D3]',
    rayColor: '#F472B6',
    iconType: 'dance',
    photos: buildGallery(
      'dance-rhythm',
      [
        {
          file: 'dance-01.jpg',
          title: 'Happy Feet Dance Steps',
          caption: 'Rhythmic coordination, stage presence and uninhibited musical joy.',
        },
        {
          file: 'dance-02.jpg',
          title: 'Musical Expression',
          caption: 'Encouraging every child to step up, clap and shine with friends.',
        },
      ],
      ['dance-01.jpg', 'dance-02.jpg', 'dance-03.jpg'],
      'Dance & Rhythm',
      'Music, movement and cheerful stage confidence.'
    ),
  },
]

// Custom Vector Icons matching the reference design
function CardIcon({ type }) {
  if (type === 'diya') {
    return (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M12 2c-.5 2-2 3.5-2 5.5 0 1.4.9 2.5 2 2.5s2-1.1 2-2.5C14 5.5 12.5 4 12 2zM4 14c0 3.3 3.6 6 8 6s8-2.7 8-6H4zm1 2h14c-.6 1.8-3 3-7 3s-6.4-1.2-7-3z" />
      </svg>
    )
  }
  if (type === 'people') {
    return (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    )
  }
  if (type === 'chef') {
    return (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round">
        <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
        <line x1="6" y1="17" x2="18" y2="17" />
      </svg>
    )
  }
  if (type === 'mindful') {
    return (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M12 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-7 8c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v2c0 3.31-2.69 6-6 6H9c-3.31 0-6-2.69-6-6v-2zm13 8H6a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2z" />
      </svg>
    )
  }
  if (type === 'palette') {
    return (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61.32.4.8.64 1.31.64h1.44c.83 0 1.5.67 1.5 1.5 0 .38-.14.73-.38 1-.41.45-.63 1.03-.63 1.63 0 1.39 1.12 2.51 2.51 2.51 5.92 0 10.28-4.36 10.28-10.28 0-6.42-4.58-11.61-9.99-11.61zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4c-.83 0-1.5-.67-1.5-1.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
      </svg>
    )
  }
  if (type === 'masks') {
    return (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M19.5 3h-6c-2.48 0-4.5 2.02-4.5 4.5v1H5.5C3.02 8.5 1 10.52 1 13v1c0 3.86 3.14 7 7 7h1c2.48 0 4.5-2.02 4.5-4.5v-1h3.5c3.86 0 7-3.14 7-7v-1c0-2.48-2.02-4.5-4.5-4.5zm-13 14c-2.21 0-4-1.79-4-4v-.5c0-.83.67-1.5 1.5-1.5h7c.83 0 1.5.67 1.5 1.5v.5c0 2.21-1.79 4-4 4zm13-6c0 .83-.67 1.5-1.5 1.5h-7c-.83 0-1.5-.67-1.5-1.5V9.5c0-.83.67-1.5 1.5-1.5h7c.83 0 1.5.67 1.5 1.5v1.5z" />
      </svg>
    )
  }
  // Dance icon
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <circle cx="12" cy="4" r="2" />
      <path d="M15.8 8.41l-2.8-1.4V5h-2v2.01L8.2 8.41C7.45 8.78 7 9.55 7 10.39V15h2v-4.5l2-1v11h2v-6l2 2.5V20h2v-4.5l-2-2.5V9.5l2 1V15h2v-4.61c0-.84-.45-1.61-1.2-1.98z" />
    </svg>
  )
}

// Playful decorative brush rays (3 short strokes)
function BrushRays({ color }) {
  return (
    <svg width="24" height="20" viewBox="0 0 24 20" className="inline-block ml-1">
      <line x1="3" y1="16" x2="6" y2="8" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="11" y1="18" x2="13" y2="5" stroke={color} strokeWidth="2.8" strokeLinecap="round" />
      <line x1="19" y1="16" x2="21" y2="9" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

export default function EventsSection() {
  const [activeEvent, setActiveEvent] = useState(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [modalIndex, setModalIndex] = useState(0)

  const getOrderedMedia = (card) => {
    if (!card) return []
    const videos = card.photos.filter((p) => p.type === 'video')
    const images = card.photos.filter((p) => p.type !== 'video')
    return [...videos, ...images]
  }

  const openGridModal = (card) => {
    setActiveEvent(card)
    setModalIndex(0)
    setLightboxOpen(false)
  }

  const openPhotoLightbox = (card, index = 0) => {
    const ordered = getOrderedMedia(card)
    const targetSrc = card.photos[index]?.src
    const mappedIndex = Math.max(0, ordered.findIndex((p) => p.src === targetSrc))
    setActiveEvent(card)
    setModalIndex(mappedIndex)
    setLightboxOpen(true)
  }

  const closeModal = () => {
    setLightboxOpen(false)
    setActiveEvent(null)
  }

  const nextModal = (e) => {
    e?.stopPropagation()
    if (!activeEvent) return
    setModalIndex((idx) => (idx + 1) % activeEvent.photos.length)
  }

  const prevModal = (e) => {
    e?.stopPropagation()
    if (!activeEvent) return
    setModalIndex((idx) => (idx - 1 + activeEvent.photos.length) % activeEvent.photos.length)
  }

  // Keyboard navigation & body scroll lock for modal
  useEffect(() => {
    if (!activeEvent) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (lightboxOpen) setLightboxOpen(false)
        else closeModal()
      } else if (lightboxOpen && e.key === 'ArrowRight') {
        nextModal()
      } else if (lightboxOpen && e.key === 'ArrowLeft') {
        prevModal()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeEvent, lightboxOpen])

  const orderedMedia = getOrderedMedia(activeEvent)
  const videoItems = orderedMedia.filter((p) => p.type === 'video')
  const imageItems = orderedMedia.filter((p) => p.type !== 'video')
  const currentPhoto = orderedMedia[modalIndex] || null

  return (
    <section id="events" className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24">
      {/* ================= BACKGROUND PLAYFUL DOODLES ================= */}
      {/* Top Left Dotted Line with Paper Plane */}
      <div className="pointer-events-none absolute left-3 top-6 sm:left-8 sm:top-10 select-none opacity-60 hidden md:block">
        <svg width="180" height="90" viewBox="0 0 180 90" fill="none">
          <path
            d="M 10,75 C 40,75 60,25 110,35 C 135,40 145,25 155,20"
            stroke="#93C5FD"
            strokeWidth="2.2"
            strokeDasharray="5 5"
            strokeLinecap="round"
          />
          {/* Paper Airplane */}
          <g transform="translate(148, 12) rotate(22) scale(0.9)">
            <path
              d="M 0,15 L 24,0 L 10,22 L 7,14 Z"
              fill="#FFFFFF"
              stroke="#2563EB"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path d="M 7,14 L 24,0" stroke="#2563EB" strokeWidth="1.6" />
          </g>
        </svg>
      </div>

      {/* Floating Star (Left) */}
      <div className="pointer-events-none absolute left-[12%] top-32 select-none opacity-60 hidden lg:block">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#3B82F6">
          <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6Z" />
        </svg>
      </div>

      {/* Floating Star (Right) */}
      <div className="pointer-events-none absolute right-[8%] top-36 select-none opacity-70 hidden lg:block">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="#FBB740">
          <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6Z" />
        </svg>
      </div>

      <div className="container-content relative z-10 max-w-6xl">
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-2xl mx-auto">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#E5EEFF] px-4 py-1 text-xs font-black uppercase tracking-widest text-[#2563EB] shadow-xs">
            <Star size={12} className="fill-[#2563EB] text-[#2563EB]" />
            <span>WORK • PLAY • GROW</span>
          </div>

          {/* Heading with Brush Rays */}
          <div className="relative inline-block mt-3">
            <h2 className="font-fredoka text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#0B2545] tracking-tight leading-tight">
              Events &amp; Celebrations
            </h2>
            {/* Top Right Yellow Brush Strokes */}
            <div className="pointer-events-none absolute -right-6 sm:-right-8 -top-3 sm:-top-4">
              <svg width="32" height="28" viewBox="0 0 32 28">
                <line x1="4" y1="22" x2="16" y2="6" stroke="#FBB740" strokeWidth="3.5" strokeLinecap="round" />
                <line x1="14" y1="24" x2="24" y2="10" stroke="#FBB740" strokeWidth="3.5" strokeLinecap="round" />
                <line x1="22" y1="26" x2="30" y2="16" stroke="#FBB740" strokeWidth="3.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Subtitle */}
          <p className="mt-2.5 text-sm sm:text-base md:text-lg text-slate-600 font-medium leading-relaxed">
            A joyful glimpse into our vibrant school life — filled with smiles, creativity and celebrations.
          </p>

          {/* Cute Red Heart Divider */}
          <div className="flex justify-center mt-3">
            <Heart size={14} className="fill-[#FF4B72] text-[#FF4B72]" />
          </div>
        </div>

        {/* ================= 2x4 CARD GRID ================= */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-7">
          {EVENT_CARDS.map((card) => (
            <div
              key={card.id}
              role="button"
              tabIndex={0}
              onClick={() => openGridModal(card)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  openGridModal(card)
                }
              }}
              className={`group relative overflow-hidden rounded-none border ${card.borderColor} ${card.bgColor} p-4 sm:p-5 lg:p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex flex-row items-center justify-between gap-3 sm:gap-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary`}
              style={{ borderRadius: '0px' }}
            >
              {/* Left Column: Icon + Title + Subtitle + Link */}
              <div className="flex-1 min-w-0 pr-1">
                {/* Top Row: Circular Icon + Ray Doodle */}
                <div className="flex items-center gap-1.5 mb-2">
                  <div
                    className={`flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full shadow-xs ${card.iconBg}`}
                  >
                    <CardIcon type={card.iconType} />
                  </div>
                  <BrushRays color={card.rayColor} />
                </div>

                {/* Event Title */}
                <h3 className="font-fredoka text-base sm:text-lg lg:text-xl font-bold text-[#0B2545] leading-snug">
                  {card.title}
                </h3>

                {/* Event Tagline */}
                <p className="mt-1 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed line-clamp-2">
                  {card.subtitle}
                </p>

                {/* View Gallery Link */}
                <span
                  className="mt-3 inline-flex items-center gap-1 text-xs sm:text-sm font-bold tracking-wide transition-transform group-hover:translate-x-1"
                  style={{ color: card.themeColor }}
                >
                  <span>View Gallery</span>
                  <ArrowRight size={14} />
                </span>
              </div>

              {/* Right Column: 2 Overlapping Polaroids with White Border & Rotation */}
              <div className="relative flex shrink-0 items-center justify-center w-28 sm:w-36 md:w-36 lg:w-44 py-2">
                {/* Photo 1 (Tilted Left) */}
                <div
                  onClick={(e) => {
                    e.stopPropagation()
                    openPhotoLightbox(card, 0)
                  }}
                  className="absolute left-0 -rotate-6 transform cursor-pointer rounded-lg sm:rounded-xl bg-white p-1 sm:p-1.5 shadow-md ring-1 ring-black/5 transition-all duration-300 hover:rotate-0 hover:scale-105 hover:z-30"
                >
                  <img
                    src={card.photos[0].src}
                    alt={card.photos[0].title}
                    loading="lazy"
                    className="h-20 w-16 sm:h-28 sm:w-22 md:h-28 md:w-22 lg:h-34 lg:w-26 object-cover rounded"
                  />
                </div>

                {/* Photo 2 (Tilted Right, Overlapping) */}
                <div
                  onClick={(e) => {
                    e.stopPropagation()
                    openPhotoLightbox(card, 1)
                  }}
                  className="relative ml-8 sm:ml-12 rotate-6 transform cursor-pointer rounded-lg sm:rounded-xl bg-white p-1 sm:p-1.5 shadow-lg ring-1 ring-black/5 transition-all duration-300 hover:rotate-0 hover:scale-105 hover:z-30"
                >
                  <img
                    src={card.photos[1].src}
                    alt={card.photos[1].title}
                    loading="lazy"
                    className="h-20 w-16 sm:h-28 sm:w-22 md:h-28 md:w-22 lg:h-34 lg:w-26 object-cover rounded"
                  />
                </div>
              </div>
            </div>
          ))}

          {/* ================= BANNER: CELEBRATING LITTLE MOMENTS ================= */}
          <div
            className="md:col-span-2 relative overflow-hidden rounded-none border border-amber-200/70 bg-gradient-to-br from-[#FFFBEB] via-[#F4F8FF] to-[#FFF1F2] p-5 sm:p-6 lg:p-7 flex items-center justify-between shadow-xs"
            style={{ borderRadius: '0px' }}
          >
            {/* Background Little Stars */}
            <div className="pointer-events-none absolute right-16 top-4 select-none opacity-80">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#FBB740">
                <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6Z" />
              </svg>
            </div>
            <div className="pointer-events-none absolute right-4 top-8 select-none opacity-80">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#FBB740">
                <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6Z" />
              </svg>
            </div>

            {/* Left Typography */}
            <div className="z-10 max-w-[200px] sm:max-w-[240px]">
              <span className="font-hand text-2xl sm:text-3xl text-[#0B2545] font-bold block transform -rotate-2">
                Celebrating
              </span>
              <span className="font-fredoka text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#2563EB] leading-tight block mt-0.5">
                Little Moments,
              </span>
              <span className="font-fredoka text-2xl sm:text-3xl lg:text-4xl font-black text-[#FF5733] leading-tight block">
                Big Happiness!
              </span>
            </div>

            {/* Right Illustration: Waving Preschool Kids on Fluffy Cloud */}
            <div className="relative flex items-end justify-center w-36 sm:w-44 lg:w-48 h-full">
              {/* Cloud Base */}
              <div
                className="absolute -bottom-2 -right-4 w-44 h-16 bg-white/80 rounded-full blur-[2px] shadow-xs"
                aria-hidden="true"
              />

              {/* Vector Cartoon School Kids (Boy & Girl Waving) */}
              <svg
                viewBox="0 0 160 140"
                className="relative z-10 w-full h-auto drop-shadow-sm select-none"
                aria-hidden="true"
              >
                {/* --- Boy (Left) --- */}
                <path
                  d="M 35,42 C 32,25 45,15 62,15 C 78,15 88,25 85,42 C 82,32 72,28 60,28 C 48,28 38,32 35,42 Z"
                  fill="#33241C"
                />
                <ellipse cx="60" cy="45" rx="20" ry="21" fill="#FFDFC4" />
                <path d="M 42,32 Q 55,30 62,35 Q 70,30 78,34 Q 70,25 60,25 Q 50,25 42,32 Z" fill="#33241C" />
                <circle cx="53" cy="44" r="2.8" fill="#1E293B" />
                <circle cx="67" cy="44" r="2.8" fill="#1E293B" />
                <circle cx="49" cy="49" r="3.5" fill="#FFA4A4" fillOpacity="0.6" />
                <circle cx="71" cy="49" r="3.5" fill="#FFA4A4" fillOpacity="0.6" />
                <path d="M 55,51 Q 60,57 65,51" stroke="#881337" strokeWidth="2.2" strokeLinecap="round" fill="none" />
                <path d="M 44,65 L 76,65 L 72,110 L 48,110 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
                <path d="M 58,65 L 62,65 L 61,85 L 59,85 Z" fill="#2563EB" />
                <polygon points="57,65 63,65 62,69 58,69" fill="#1D4ED8" />
                <path d="M 48,105 L 72,105 L 73,130 L 61,130 L 60,115 L 59,130 L 47,130 Z" fill="#1D4ED8" />
                <path d="M 45,67 Q 38,82 40,95" stroke="#FFDFC4" strokeWidth="7" strokeLinecap="round" fill="none" />
                <path d="M 75,67 Q 85,55 92,42" stroke="#FFDFC4" strokeWidth="7" strokeLinecap="round" fill="none" />
                <circle cx="93" cy="40" r="4.5" fill="#FFDFC4" />

                {/* --- Girl (Right) --- */}
                <path
                  d="M 102,40 C 98,22 112,14 128,14 C 145,14 156,22 152,40 C 148,30 138,26 128,26 C 118,26 106,30 102,40 Z"
                  fill="#33241C"
                />
                <path d="M 104,36 Q 92,38 94,50" stroke="#33241C" strokeWidth="6" strokeLinecap="round" fill="none" />
                <path d="M 150,36 Q 162,38 160,50" stroke="#33241C" strokeWidth="6" strokeLinecap="round" fill="none" />
                <ellipse cx="127" cy="45" rx="19" ry="20" fill="#FFE2CB" />
                <path d="M 110,33 Q 120,31 127,35 Q 135,31 144,34 Q 136,25 127,25 Q 118,25 110,33 Z" fill="#33241C" />
                <circle cx="121" cy="44" r="2.8" fill="#1E293B" />
                <circle cx="133" cy="44" r="2.8" fill="#1E293B" />
                <circle cx="117" cy="49" r="3.5" fill="#FFA4A4" fillOpacity="0.7" />
                <circle cx="137" cy="49" r="3.5" fill="#FFA4A4" fillOpacity="0.7" />
                <path d="M 123,51 Q 127,57 131,51" stroke="#881337" strokeWidth="2.2" strokeLinecap="round" fill="none" />
                <path d="M 114,64 L 140,64 L 146,115 L 108,115 Z" fill="#1D4ED8" />
                <path d="M 118,64 L 136,64 L 132,80 L 122,80 Z" fill="#FFFFFF" />
                <path d="M 115,66 Q 104,52 98,38" stroke="#FFE2CB" strokeWidth="6.5" strokeLinecap="round" fill="none" />
                <circle cx="97" cy="36" r="4" fill="#FFE2CB" />
                <path d="M 139,66 Q 150,55 156,42" stroke="#FFE2CB" strokeWidth="6.5" strokeLinecap="round" fill="none" />
                <circle cx="157" cy="40" r="4" fill="#FFE2CB" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MASONRY GALLERY SHEET + FLOATING CENTER LIGHTBOX ================= */}
      {activeEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-3 sm:p-6 backdrop-blur-sm"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-none bg-white shadow-2xl"
            style={{ borderRadius: '0px' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Bar matching mockup */}
            <div className="flex items-center justify-between gap-3 border-b border-slate-100 bg-white px-4 py-3.5 sm:px-7 sm:py-5 shrink-0">
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div
                  className={`flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full shadow-xs ${activeEvent.iconBg}`}
                >
                  <CardIcon type={activeEvent.iconType} />
                </div>
                <div className="min-w-0">
                  <h3 className="truncate font-fredoka text-lg sm:text-2xl font-bold text-[#0B2545] leading-tight">
                    {activeEvent.title}
                  </h3>
                  <p className="truncate text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                    {activeEvent.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={closeModal}
                  aria-label="Close gallery"
                  className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 hover:text-navy"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Square Grid Body (videos first, images flow right after with zero blank gap) */}
            <div className="relative flex-1 overflow-y-auto p-2 sm:p-3 bg-white">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 sm:gap-1.5">
                {orderedMedia.map((item, idx) => (
                  <button
                    key={item.src}
                    onClick={() => {
                      setModalIndex(idx)
                      setLightboxOpen(true)
                    }}
                    className={`group relative aspect-[3/4] w-full overflow-hidden rounded-none transition-all duration-300 hover:brightness-95 focus:outline-none ${
                      item.type === 'video' ? 'bg-slate-900' : 'bg-slate-100'
                    }`}
                  >
                    {item.type === 'video' ? (
                      <>
                        <video
                          src={item.src}
                          muted
                          loop
                          autoPlay
                          playsInline
                          preload="metadata"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        />
                        <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20">
                          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-navy shadow-md transition-transform group-hover:scale-110">
                            <Play size={16} className="ml-0.5 fill-current" />
                          </span>
                        </span>
                      </>
                    ) : (
                      <img
                        src={item.src}
                        alt={item.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ================= FLOATING CENTER LIGHTBOX (ABOVE MASONRY MODAL, NEVER CLIPPED) ================= */}
      {activeEvent && lightboxOpen && currentPhoto && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/45 p-4 sm:p-8 backdrop-blur-[2px]"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-2xl overflow-hidden rounded-none bg-white shadow-[0_25px_70px_rgba(15,23,42,0.5)] ring-4 ring-white"
            style={{ borderRadius: '0px' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image / Video Stage */}
            <div className="relative flex items-center justify-center bg-slate-950 h-[50vh] sm:h-[60vh] overflow-hidden">
              {currentPhoto.type === 'video' ? (
                <video
                  key={currentPhoto.src}
                  src={currentPhoto.src}
                  controls
                  autoPlay
                  playsInline
                  className="h-full w-full object-contain"
                />
              ) : (
                <img
                  src={currentPhoto.src}
                  alt={currentPhoto.title}
                  className="h-full w-full object-contain"
                />
              )}

              {/* Top-Left Counter Pill */}
              <span className="absolute left-3 top-3 sm:left-4 sm:top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                {modalIndex + 1} / {activeEvent.photos.length}
              </span>

              {/* Top-Right Close Lightbox Button */}
              <button
                onClick={() => setLightboxOpen(false)}
                aria-label="Close photo preview"
                className="absolute right-3 top-3 sm:right-4 sm:top-4 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/80"
              >
                <X size={16} />
              </button>

              {/* Prev / Next Arrows */}
              {activeEvent.photos.length > 1 && (
                <>
                  <button
                    onClick={prevModal}
                    aria-label="Previous photo"
                    className="absolute left-2.5 sm:left-4 top-1/2 -translate-y-1/2 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur-sm transition-all hover:bg-white/45"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextModal}
                    aria-label="Next photo"
                    className="absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur-sm transition-all hover:bg-white/45"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            {/* Clean White Footer Strip */}
            <div className="bg-white px-4 py-3 sm:px-5 sm:py-3.5 border-t border-slate-100">
              <h4 className="font-fredoka text-sm sm:text-base font-bold text-[#0B2545]">
                {currentPhoto.title}
              </h4>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
