/**
 * CaterpillarScrollbar — Interactive Kindergarten Vine & Caterpillar Scrollbar
 *
 * Features:
 *  • Full-height (100vh) SVG vine on desktop (lg+) right edge
 *  • Green progress fill inside wooden track, spinning flower thumb, & percentage bubble
 *  • Blinking eyes, swaying antennae, twinkling sparks, drifting clouds, & scroll wiggle
 *  • Smooth lerp animation via requestAnimationFrame, pointer drag, track click, & keyboard support
 *  • Respects prefers-reduced-motion: reduce
 */

import { useEffect, useRef } from 'react'

const X = 160
const Y_MIN = 318
const Y_MAX = 1542
const TRACK_TOP = 262

export default function CaterpillarScrollbar() {
  const widgetRef = useRef(null)
  const svgRef = useRef(null)
  const flowerRef = useRef(null)
  const trackRef = useRef(null)
  const spinRef = useRef(null)
  const fillRef = useRef(null)
  const pctRef = useRef(null)

  useEffect(() => {
    const svg = svgRef.current
    const widget = widgetRef.current
    const flower = flowerRef.current
    const track = trackRef.current
    const spin = spinRef.current
    const fill = fillRef.current
    const pct = pctRef.current

    if (!svg || !widget || !flower || !track || !spin || !fill || !pct) return

    const drifts = Array.from(svg.querySelectorAll('.nlh-cs-drift'))
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const maxScroll = () => Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
    const clamp = (p) => Math.min(1, Math.max(0, p))

    let target = 0
    let current = 0
    let raf = 0
    let dragging = false
    let movingTimer = null

    function render(p) {
      const y = Y_MIN + p * (Y_MAX - Y_MIN)
      flower.setAttribute('transform', `translate(${X} ${y})`)
      spin.style.transform = `rotate(${p * 720}deg)`
      fill.setAttribute('height', Math.max(0, y - TRACK_TOP))
      const n = Math.round(p * 100)
      pct.textContent = `${n}%`
      flower.setAttribute('aria-valuenow', String(n))
      flower.setAttribute('aria-valuetext', `${n} percent`)
      drifts.forEach((d) => {
        const amp = Number(d.dataset.amp || 0)
        d.style.transform = `translateX(${amp * (p * 2 - 1)}px)`
      })
    }

    function tick() {
      current += (target - current) * 0.22
      if (reduce || Math.abs(target - current) < 0.0005) current = target
      render(current)
      raf = current === target ? 0 : requestAnimationFrame(tick)
    }

    const requestTick = () => {
      if (!raf) raf = requestAnimationFrame(tick)
    }

    const onScroll = () => {
      target = clamp(window.scrollY / maxScroll())
      if (dragging) current = target
      requestTick()
      widget.classList.add('nlh-cs-moving')
      clearTimeout(movingTimer)
      movingTimer = setTimeout(() => widget.classList.remove('nlh-cs-moving'), 160)
    }

    const onResize = () => {
      target = clamp(window.scrollY / maxScroll())
      requestTick()
    }

    function pointerProgress(e) {
      const ctm = svg.getScreenCTM()
      if (!ctm) return 0
      const pt = svg.createSVGPoint()
      pt.x = e.clientX
      pt.y = e.clientY
      return (pt.matrixTransform(ctm.inverse()).y - Y_MIN) / (Y_MAX - Y_MIN)
    }

    function jump(p, smooth) {
      const clamped = clamp(p)
      window.scrollTo({
        top: clamped * maxScroll(),
        behavior: smooth && !reduce ? 'smooth' : 'auto',
      })
    }

    const onFlowerDown = (e) => {
      dragging = true
      flower.classList.add('nlh-cs-dragging')
      flower.setPointerCapture?.(e.pointerId)
      e.preventDefault()
    }

    const onFlowerMove = (e) => {
      if (!dragging) return
      const p = clamp(pointerProgress(e))
      target = current = p
      render(p)
      jump(p, false)
    }

    const onFlowerUp = (e) => {
      dragging = false
      flower.classList.remove('nlh-cs-dragging')
      if (flower.hasPointerCapture?.(e.pointerId)) {
        flower.releasePointerCapture(e.pointerId)
      }
    }

    const onTrackDown = (e) => {
      jump(pointerProgress(e), true)
      dragging = true
      flower.classList.add('nlh-cs-dragging')
      flower.setPointerCapture?.(e.pointerId)
    }

    const onKeyDown = (e) => {
      const p = window.scrollY / maxScroll()
      const keys = {
        ArrowUp: p - 0.05,
        ArrowDown: p + 0.05,
        PageUp: p - 0.2,
        PageDown: p + 0.2,
        Home: 0,
        End: 1,
      }
      if (e.key in keys) {
        e.preventDefault()
        jump(keys[e.key], false)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize, { passive: true })
    flower.addEventListener('pointerdown', onFlowerDown)
    flower.addEventListener('pointermove', onFlowerMove)
    flower.addEventListener('pointerup', onFlowerUp)
    flower.addEventListener('pointercancel', onFlowerUp)
    track.addEventListener('pointerdown', onTrackDown)
    flower.addEventListener('keydown', onKeyDown)

    target = current = clamp(window.scrollY / maxScroll())
    render(current)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      flower.removeEventListener('pointerdown', onFlowerDown)
      flower.removeEventListener('pointermove', onFlowerMove)
      flower.removeEventListener('pointerup', onFlowerUp)
      flower.removeEventListener('pointercancel', onFlowerUp)
      track.removeEventListener('pointerdown', onTrackDown)
      flower.removeEventListener('keydown', onKeyDown)
      if (raf) cancelAnimationFrame(raf)
      clearTimeout(movingTimer)
    }
  }, [])

  return (
    <div
      ref={widgetRef}
      className="nlh-vine-scroll hidden md:block fixed top-0 right-1 h-screen z-[45] pointer-events-none select-none"
      style={{ width: 'calc(100vh * 192 / 1800)', height: '100vh' }}
    >
      <style>{`
        .nlh-vine-scroll svg { display: block; overflow: visible; }
        .nlh-vine-scroll .nlh-cs-hit { pointer-events: auto; cursor: pointer; touch-action: none; }
        #nlh-cs-flower { cursor: grab; outline: none; }
        #nlh-cs-flower.nlh-cs-dragging { cursor: grabbing; }
        #nlh-cs-pop { transition: transform .2s cubic-bezier(.3,1.6,.5,1); }
        #nlh-cs-flower:hover #nlh-cs-pop,
        #nlh-cs-flower.nlh-cs-dragging #nlh-cs-pop,
        #nlh-cs-flower:focus-visible #nlh-cs-pop { transform: scale(1.12); }
        #nlh-cs-flower:focus-visible .nlh-cs-halo { stroke: #2b7bff; stroke-width: 4; }
        #nlh-cs-bubble { opacity: 0; transform: translateX(8px); transition: opacity .18s, transform .18s; }
        #nlh-cs-flower:hover #nlh-cs-bubble,
        #nlh-cs-flower.nlh-cs-dragging #nlh-cs-bubble,
        #nlh-cs-flower:focus-visible #nlh-cs-bubble { opacity: 1; transform: none; }
        .nlh-cs-blink { transform-box: fill-box; transform-origin: center; animation: nlh-cs-blink 5s infinite; }
        .nlh-cs-sway { transform-box: fill-box; transform-origin: 50% 100%; animation: nlh-cs-sway 3.6s ease-in-out infinite alternate; }
        .nlh-cs-sway.b { animation-delay: -1.8s; }
        #nlh-cs-cat { transform-box: view-box; transform-origin: 205px 262px; }
        .nlh-cs-moving #nlh-cs-cat { animation: nlh-cs-wiggle .5s ease-in-out infinite alternate; }
        .nlh-cs-moving #nlh-cs-head { animation: nlh-cs-nod .5s ease-in-out infinite alternate; }
        #nlh-cs-head { transform-box: fill-box; transform-origin: 60% 80%; }
        .nlh-cs-spark { animation: nlh-cs-spark 2.4s ease-in-out infinite; transform-box: fill-box; transform-origin: 0 100%; }
        @keyframes nlh-cs-blink  { 0%,94%,100% { transform: scaleY(1); } 97% { transform: scaleY(.1); } }
        @keyframes nlh-cs-sway   { from { transform: rotate(-5deg); } to { transform: rotate(5deg); } }
        @keyframes nlh-cs-wiggle { from { transform: rotate(-1.6deg); } to { transform: rotate(1.6deg); } }
        @keyframes nlh-cs-nod    { from { transform: rotate(-3deg); } to { transform: rotate(3deg); } }
        @keyframes nlh-cs-spark  { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: .35; transform: scale(.8); } }
        @media (prefers-reduced-motion: reduce) {
          .nlh-cs-blink, .nlh-cs-sway, .nlh-cs-spark, .nlh-cs-moving #nlh-cs-cat, .nlh-cs-moving #nlh-cs-head { animation: none; }
          #nlh-cs-pop, #nlh-cs-bubble { transition: none; }
        }
      `}</style>

      <svg
        ref={svgRef}
        viewBox="45 0 192 1800"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        role="presentation"
      >
        <defs>
          <filter id="nlh-cs-soft" x="-20%" y="-20%" width="140%" height="150%">
            <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#5a3a1c" floodOpacity=".22" />
          </filter>
          <radialGradient id="nlh-cs-shine" cx="32%" cy="28%" r="70%">
            <stop offset="0" stopColor="#fff" stopOpacity=".55" />
            <stop offset=".5" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="nlh-cs-shade" cx="40%" cy="35%" r="75%">
            <stop offset=".55" stopColor="#000" stopOpacity="0" />
            <stop offset="1" stopColor="#000" stopOpacity=".2" />
          </radialGradient>
          <linearGradient id="nlh-cs-leafG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#8fd14f" />
            <stop offset="1" stopColor="#58a926" />
          </linearGradient>
          <linearGradient id="nlh-cs-fillG" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#d9f0b4" />
            <stop offset="1" stopColor="#a9dc6e" />
          </linearGradient>
          <linearGradient id="nlh-cs-woodG" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#a06a3d" />
            <stop offset="1" stopColor="#744a28" />
          </linearGradient>
          <clipPath id="nlh-cs-trackClip">
            <rect x="132" y="262" width="56" height="1335" rx="28" />
          </clipPath>

          <g id="nlh-cs-flowerArt">
            <g fill="#e8191c">
              <circle cx="0" cy="-15" r="14" />
              <circle cx="14.3" cy="-4.6" r="14" />
              <circle cx="8.8" cy="12.1" r="14" />
              <circle cx="-8.8" cy="12.1" r="14" />
              <circle cx="-14.3" cy="-4.6" r="14" />
            </g>
            <g fill="url(#nlh-cs-shine)">
              <circle cx="0" cy="-15" r="14" />
              <circle cx="14.3" cy="-4.6" r="14" />
              <circle cx="8.8" cy="12.1" r="14" />
              <circle cx="-8.8" cy="12.1" r="14" />
              <circle cx="-14.3" cy="-4.6" r="14" />
            </g>
            <circle r="11" fill="#ffc61a" />
            <circle cx="-3" cy="-4" r="4" fill="#ffe680" opacity=".85" />
          </g>

          <g id="nlh-cs-leaf">
            <path d="M0 0 C 14 -22, 44 -22, 58 0 C 44 22, 14 22, 0 0 Z" fill="url(#nlh-cs-leafG)" stroke="#4f9a1c" strokeWidth="2" />
            <path d="M5 0 L 50 0" stroke="#c4ec8f" strokeWidth="2.5" strokeLinecap="round" />
          </g>

          <g id="nlh-cs-cloud" fill="#d3e8fb">
            <circle cx="-22" cy="6" r="14" />
            <circle cx="-4" cy="-6" r="20" />
            <circle cx="20" cy="2" r="16" />
            <rect x="-36" y="6" width="72" height="14" rx="7" />
            <circle cx="-8" cy="-12" r="9" fill="#fff" opacity=".6" />
          </g>

          <g id="nlh-cs-segs">
            <circle cx="203" cy="252" r="26" />
            <circle cx="200" cy="222" r="27" />
            <circle cx="198" cy="190" r="27" />
            <circle cx="183" cy="160" r="28" />
            <circle cx="163" cy="135" r="28" />
          </g>
        </defs>

        {/* Clouds (drift slightly as you scroll) */}
        <g className="nlh-cs-drift" data-amp="10">
          <use href="#nlh-cs-cloud" transform="translate(88 248) scale(.9)" />
        </g>
        <g className="nlh-cs-drift" data-amp="-8">
          <use href="#nlh-cs-cloud" transform="translate(216 860) scale(.75)" />
        </g>
        <g className="nlh-cs-drift" data-amp="12">
          <use href="#nlh-cs-cloud" transform="translate(64 1623) scale(1.05)" />
        </g>

        {/* Bottom grass mound, trunk, leaves & flower (shifted to bottom of 1800px viewBox) */}
        <g transform="translate(0, 860)">
          <ellipse cx="172" cy="948" rx="125" ry="62" fill="#6cc02b" />
          <ellipse cx="172" cy="948" rx="125" ry="62" fill="url(#nlh-cs-shine)" />
          <g fill="#58a926">
            <path d="M96 896 l-6 -24 l13 15 l6 -19 l4 26 z" />
            <path d="M236 900 l4 -18 l8 12 l4 -14 l2 20 z" />
          </g>
          <g filter="url(#nlh-cs-soft)">
            <path d="M205 892 C 196 830, 168 790, 163 738" fill="none" stroke="url(#nlh-cs-woodG)" strokeWidth="16" strokeLinecap="round" />
          </g>
          <path d="M201 888 C 192 830, 164 790, 159 742" fill="none" stroke="#b9855a" strokeWidth="3" strokeLinecap="round" opacity=".6" />
          <use href="#nlh-cs-leaf" transform="translate(185 790) rotate(-35) scale(.85)" />
          <use href="#nlh-cs-leaf" transform="translate(200 850) rotate(-30) scale(.85)" />
          <use href="#nlh-cs-leaf" transform="translate(150 840) rotate(210) scale(.5)" />
          <use href="#nlh-cs-flowerArt" transform="translate(171 857) scale(.7)" filter="url(#nlh-cs-soft)" />
        </g>

        {/* Top branch with highlight */}
        <g filter="url(#nlh-cs-soft)">
          <path d="M160 272 C 152 205, 132 165, 82 128" fill="none" stroke="url(#nlh-cs-woodG)" strokeWidth="18" strokeLinecap="round" />
        </g>
        <path d="M155 270 C 147 205, 127 163, 80 124" fill="none" stroke="#b9855a" strokeWidth="3" strokeLinecap="round" opacity=".6" />

        {/* Upper & mid leaves along elongated track */}
        <use href="#nlh-cs-leaf" transform="translate(76 128) rotate(200) scale(.8)" />
        <use href="#nlh-cs-leaf" transform="translate(182 365) rotate(-35) scale(.9)" />
        <use href="#nlh-cs-leaf" transform="translate(130 620) rotate(165) scale(.85)" />
        <use href="#nlh-cs-leaf" transform="translate(120 1220) rotate(160) scale(.6)" />

        {/* Mid static flower */}
        <use href="#nlh-cs-flowerArt" transform="translate(98 920) scale(.95)" filter="url(#nlh-cs-soft)" />

        {/* TRACK: background, progress fill, inner shade, outline */}
        <rect ref={trackRef} className="nlh-cs-hit" x="132" y="262" width="56" height="1335" rx="28" fill="#fbf5ea" />
        <g clipPath="url(#nlh-cs-trackClip)" style={{ pointerEvents: 'none' }}>
          <rect ref={fillRef} x="132" y="262" width="56" height="0" fill="url(#nlh-cs-fillG)" />
        </g>
        <rect x="138" y="268" width="44" height="1323" rx="22" fill="none" stroke="#8a5a35" strokeOpacity=".12" strokeWidth="3" style={{ pointerEvents: 'none' }} />
        <rect x="132" y="262" width="56" height="1335" rx="28" fill="none" stroke="#8a5a35" strokeWidth="7" style={{ pointerEvents: 'none' }} />

        {/* CATERPILLAR */}
        <g id="nlh-cs-cat" filter="url(#nlh-cs-soft)" style={{ pointerEvents: 'none' }}>
          <g fill="#ff9a3c">
            <ellipse cx="150" cy="152" rx="8" ry="4.5" transform="rotate(-20 150 152)" />
            <ellipse cx="168" cy="182" rx="8" ry="4.5" transform="rotate(-10 168 182)" />
            <ellipse cx="172" cy="214" rx="8" ry="4.5" />
            <ellipse cx="176" cy="246" rx="8" ry="4.5" transform="rotate(8 176 246)" />
          </g>
          <circle cx="203" cy="252" r="26" fill="#a259d9" />
          <circle cx="200" cy="222" r="27" fill="#2a8df0" />
          <circle cx="198" cy="190" r="27" fill="#5cc236" />
          <circle cx="183" cy="160" r="28" fill="#ffc61a" />
          <circle cx="163" cy="135" r="28" fill="#ff7a2e" />
          <circle cx="140" cy="118" r="22" fill="#e8402a" />
          <use href="#nlh-cs-segs" fill="url(#nlh-cs-shade)" />
          <use href="#nlh-cs-segs" fill="url(#nlh-cs-shine)" />

          <g id="nlh-cs-head">
            <circle cx="118" cy="95" r="45" fill="#7cc243" />
            <circle cx="118" cy="95" r="45" fill="url(#nlh-cs-shade)" />
            <circle cx="118" cy="95" r="45" fill="url(#nlh-cs-shine)" />
            <g fill="none" stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round">
              <g className="nlh-cs-sway">
                <path d="M100 56 C 80 46, 60 60, 72 72 C 80 78, 90 70, 84 64" />
              </g>
              <g className="nlh-cs-sway b">
                <path d="M128 52 C 128 34, 140 28, 146 38 C 150 46, 140 50, 138 44" />
              </g>
            </g>
            <ellipse cx="94" cy="102" rx="9" ry="5.5" fill="#ff8aa0" opacity=".6" />
            <ellipse cx="143" cy="102" rx="9" ry="5.5" fill="#ff8aa0" opacity=".6" />
            <g className="nlh-cs-blink">
              <ellipse cx="102" cy="92" rx="8" ry="11" fill="#111" />
              <ellipse cx="136" cy="92" rx="8" ry="11" fill="#111" />
              <circle cx="105" cy="87" r="3" fill="#fff" />
              <circle cx="139" cy="87" r="3" fill="#fff" />
            </g>
            <path d="M110 110 Q 119 119 128 110" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round" />
          </g>
          <g stroke="#ffc61a" strokeWidth="5" strokeLinecap="round" fill="none">
            <path className="nlh-cs-spark" d="M176 62 l6 14" />
            <path className="nlh-cs-spark" style={{ animationDelay: '-.8s' }} d="M190 58 l10 10" />
            <path className="nlh-cs-spark" style={{ animationDelay: '-1.6s' }} d="M196 84 l16 4" />
          </g>
        </g>

        {/* THUMB: draggable flower */}
        <g
          ref={flowerRef}
          id="nlh-cs-flower"
          className="nlh-cs-hit"
          tabIndex={0}
          role="slider"
          aria-label="Page scroll position"
          aria-orientation="vertical"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={0}
          aria-valuetext="0 percent"
        >
          <g id="nlh-cs-bubble" style={{ pointerEvents: 'none' }}>
            <rect x="-112" y="-15" width="58" height="30" rx="15" fill="#fff" stroke="#8a5a35" strokeWidth="3" />
            <text
              ref={pctRef}
              x="-83"
              y="6"
              textAnchor="middle"
              fontFamily="Baloo 2, Nunito, sans-serif"
              fontWeight="800"
              fontSize="17"
              fill="#8a5a35"
            >
              0%
            </text>
          </g>
          <g id="nlh-cs-pop" filter="url(#nlh-cs-soft)">
            <circle className="nlh-cs-halo" r="32" fill="#fff" stroke="#00000012" strokeWidth="2" />
            <g ref={spinRef}>
              <use href="#nlh-cs-flowerArt" transform="scale(1.15)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  )
}

