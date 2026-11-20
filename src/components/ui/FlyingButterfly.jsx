import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

// Register MotionPathPlugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(MotionPathPlugin)
}

export default function FlyingButterfly() {
  const flightRef = useRef(null)
  const flutterRef = useRef(null)

  useEffect(() => {
    if (!flightRef.current || !flutterRef.current) return

    // Safe responsive trajectory coordinates within current viewport
    const computePath = () => {
      const w = window.innerWidth || 1200
      const h = window.innerHeight || 700

      const padX = Math.max(30, Math.min(60, w * 0.05))
      const padY = Math.max(40, Math.min(70, h * 0.08))
      const rightX = Math.max(padX + 260, w - padX - 80)
      const bottomY = Math.max(padY + 260, h - padY - 80)

      return [
        { x: padX, y: padY + (bottomY - padY) * 0.3 },
        { x: padX + (rightX - padX) * 0.35, y: padY },
        { x: padX + (rightX - padX) * 0.7, y: padY + (bottomY - padY) * 0.4 },
        { x: rightX, y: padY + (bottomY - padY) * 0.15 },
        { x: padX + (rightX - padX) * 0.85, y: padY + (bottomY - padY) * 0.75 },
        { x: padX + (rightX - padX) * 0.5, y: bottomY },
        { x: padX + (rightX - padX) * 0.18, y: padY + (bottomY - padY) * 0.65 },
        { x: padX, y: padY + (bottomY - padY) * 0.3 },
      ]
    }

    let flightTimeline = null

    const startFlight = () => {
      if (flightTimeline) flightTimeline.kill()

      flightTimeline = gsap.timeline({ repeat: -1 })
      flightTimeline.to(flightRef.current, {
        duration: 22,
        ease: 'none',
        motionPath: {
          path: computePath(),
          curviness: 1.6,
          autoRotate: 90, // Butterfly SVG faces UP, so 90deg offset aligns head to flight path
        },
      })
    }

    startFlight()

    // Gentle vertical bobbing on inner container (prevents transform/property clashing with flightRef)
    const bobbingTween = gsap.to(flutterRef.current, {
      y: 12,
      rotation: 5,
      duration: 0.9,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
    })

    // Recompute path on screen resize with debounce
    let resizeTimer = null
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        startFlight()
      }, 300)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      if (flightTimeline) flightTimeline.kill()
      bobbingTween.kill()
      window.removeEventListener('resize', handleResize)
      clearTimeout(resizeTimer)
    }
  }, [])

  return (
    <div
      ref={flightRef}
      className="fixed top-0 left-0 pointer-events-none select-none z-[9999]"
      style={{ willChange: 'transform' }}
      aria-hidden="true"
    >
      <div
        ref={flutterRef}
        className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 drop-shadow-xl"
      >
        {/* Animated Flying Butterfly SVG with vibrant preschool colors and 3D fluttering wings */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full overflow-visible"
          style={{ perspective: 500 }}
        >
          <defs>
            <linearGradient id="butterflyWingLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0EA5E9" /> {/* Vivid Sky Blue */}
              <stop offset="55%" stopColor="#F43F5E" /> {/* Joyful Rose Coral */}
              <stop offset="100%" stopColor="#FBBF24" /> {/* Sunshine Amber */}
            </linearGradient>
            <linearGradient id="butterflyWingRight" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0EA5E9" />
              <stop offset="55%" stopColor="#F43F5E" />
              <stop offset="100%" stopColor="#FBBF24" />
            </linearGradient>
            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#F59E0B" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* Left Wing (3D flapping) */}
          <g className="animate-butterfly-flap-left" style={{ transformOrigin: '50px 52px' }}>
            <path
              d="M 50 50 C 42 22, 10 16, 8 36 C 6 50, 24 60, 50 54 Z"
              fill="url(#butterflyWingLeft)"
              filter="url(#softGlow)"
            />
            <path
              d="M 50 54 C 38 58, 20 65, 24 80 C 28 92, 45 84, 50 62 Z"
              fill="url(#butterflyWingLeft)"
              opacity="0.9"
            />
            <circle cx="28" cy="36" r="4.5" fill="#FFFFFF" opacity="0.9" />
            <circle cx="34" cy="74" r="3" fill="#FFFFFF" opacity="0.85" />
            <circle cx="18" cy="46" r="2.5" fill="#FEF08A" opacity="0.95" />
          </g>

          {/* Right Wing (3D flapping) */}
          <g className="animate-butterfly-flap-right" style={{ transformOrigin: '50px 52px' }}>
            <path
              d="M 50 50 C 58 22, 90 16, 92 36 C 94 50, 76 60, 50 54 Z"
              fill="url(#butterflyWingRight)"
              filter="url(#softGlow)"
            />
            <path
              d="M 50 54 C 62 58, 80 65, 76 80 C 72 92, 55 84, 50 62 Z"
              fill="url(#butterflyWingRight)"
              opacity="0.9"
            />
            <circle cx="72" cy="36" r="4.5" fill="#FFFFFF" opacity="0.9" />
            <circle cx="66" cy="74" r="3" fill="#FFFFFF" opacity="0.85" />
            <circle cx="82" cy="46" r="2.5" fill="#FEF08A" opacity="0.95" />
          </g>

          {/* Butterfly Body & Antennae */}
          <g>
            <path
              d="M 48 34 Q 42 20 36 22"
              fill="none"
              stroke="#0F172A"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="36" cy="22" r="2" fill="#F59E0B" />
            <path
              d="M 52 34 Q 58 20 64 22"
              fill="none"
              stroke="#0F172A"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="64" cy="22" r="2" fill="#F59E0B" />

            <ellipse cx="50" cy="55" rx="3.5" ry="16" fill="#0F172A" />
            <circle cx="50" cy="36" r="4.5" fill="#0F172A" />
            <circle cx="48.5" cy="35" r="1.1" fill="#FFFFFF" />
            <circle cx="51.5" cy="35" r="1.1" fill="#FFFFFF" />
          </g>
        </svg>
      </div>
    </div>
  )
}
