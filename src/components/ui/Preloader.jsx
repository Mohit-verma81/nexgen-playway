/**
 * Preloader — NexGen Learning Hub · PLAYWAY
 *
 * Coordinates with the immediate first-paint `#nlh-preloader` shell in index.html
 * so there is ZERO blank white screen while JS/React loads.
 *
 * Behaviour:
 *  • Ensures the preloader stays visible for at least MIN_VISIBLE_MS (~1.0s total)
 *    from page start so the spring animation feels smooth and intentional
 *  • Sets sessionStorage ('nexgen_intro_shown') so repeat visits skip instantly
 *  • Respects prefers-reduced-motion (removes immediately)
 *  • Fades out with pointer-events: none so user clicks are never blocked
 */

import { useEffect } from 'react'

const SESSION_KEY = 'nexgen_intro_shown'
const MIN_VISIBLE_MS = 1000
const FADE_DURATION_MS = 450

export default function Preloader({ onComplete }) {
  useEffect(() => {
    const el = document.getElementById('nlh-preloader')

    const finish = () => {
      if (el && el.parentNode) {
        el.parentNode.removeChild(el)
      }
      onComplete?.()
    }

    let alreadyShown = false
    try {
      alreadyShown = sessionStorage.getItem(SESSION_KEY) === '1'
    } catch {
      alreadyShown = false
    }

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!el || alreadyShown || reduced) {
      finish()
      return
    }

    const startTime = typeof window.__NLH_PRELOADER_START === 'number'
      ? window.__NLH_PRELOADER_START
      : performance.now()
    const elapsed = performance.now() - startTime
    const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed)

    let fadeTimer = null
    const showTimer = setTimeout(() => {
      try {
        sessionStorage.setItem(SESSION_KEY, '1')
      } catch {
        // ignore storage errors
      }
      el.classList.add('nlh-preloader--hiding')
      fadeTimer = setTimeout(finish, FADE_DURATION_MS)
    }, remaining)

    return () => {
      clearTimeout(showTimer)
      if (fadeTimer) clearTimeout(fadeTimer)
    }
  }, [onComplete])

  return null
}
