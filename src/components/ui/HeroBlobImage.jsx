import { useId } from "react";

/**
 * HeroBlobImage
 * One big organic blob photo (16:10), with a thin sunshine-yellow crescent peeking
 * out on the top-left edge, a sky-blue sliver on the bottom-right edge, a paper
 * plane doodle inside the top-right corner and three small blue strokes on the
 * left edge. The image uses object-cover, so it never gets squished.
 *
 * Usage:
 *   <HeroBlobImage src="/images/hero-kid.jpg" alt="Child playing with toys" />
 *
 * To let the blob bleed off the right edge of the page, wrap it with a negative
 * margin, e.g. className="lg:-mr-16 xl:-mr-24".
 */

// Blob in 0..1 space (used for clip-path and for the colored layers behind it).
const BLOB =
  "M0.12,0.20 C0.24,0.05 0.46,0.02 0.68,0.02 C0.86,0.02 0.99,0.07 1.0,0.22 " +
  "C1.01,0.42 0.99,0.70 0.97,0.84 C0.95,0.96 0.80,0.99 0.60,0.97 " +
  "C0.42,0.95 0.26,1.0 0.12,0.94 C0.0,0.88 0.04,0.70 0.02,0.52 " +
  "C0.01,0.38 0.04,0.28 0.12,0.20 Z";

const YELLOW = "#FDE047";
const SKY = "#E0F2FE";
const SKY_DEEP = "#BAE6FD";
const BLUE = "#3B82F6";

export default function HeroBlobImage({
  src,
  alt = "",
  className = "",
  imgClassName = "",
}) {
  const clipId = "hero-blob-" + useId().replace(/:/g, "");

  return (
    <div className={"relative mx-auto w-full max-w-3xl " + className}>
      <style>{`
        @keyframes hb-fly {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(4px, -8px) rotate(3deg); }
        }
        .hb-fly { animation: hb-fly 5s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .hb-fly { animation: none; }
        }
      `}</style>

      {/* Hidden defs: clip-path for the photo */}
      <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <path d={BLOB} />
          </clipPath>
        </defs>
      </svg>

      {/* 16:10 stage */}
      <div className="relative w-full" style={{ aspectRatio: "16 / 10" }}>
        {/* Back layers: same blob, nudged so only a thin crescent shows at the edge */}
        <svg
          viewBox="0 0 1 1"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
          aria-hidden="true"
        >
          <path d={BLOB} fill={SKY_DEEP} transform="translate(0.018 0.03)" />
          <path d={BLOB} fill={YELLOW} transform="translate(-0.035 -0.03)" />
          <path d={BLOB} fill={SKY} transform="translate(-0.012 -0.012)" opacity="0" />
        </svg>

        {/* Photo */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `url(#${clipId})`, WebkitClipPath: `url(#${clipId})` }}
        >
          <img
            src={src}
            alt={alt}
            loading="eager"
            draggable={false}
            className={"h-full w-full object-cover object-center " + imgClassName}
          />
        </div>

        {/* Paper plane with dashed loop trail, top-right corner of the photo */}
        <svg
          viewBox="0 0 90 100"
          className="hb-fly pointer-events-none absolute right-[8%] top-[9%] w-16 sm:w-24 lg:w-28"
          style={{ filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.25))" }}
          aria-hidden="true"
        >
          <path
            d="M84 8 L24 32 L44 42 L52 62 L62 48 Z"
            fill="none"
            stroke="#fff"
            strokeWidth="3.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            d="M44 42 L84 8"
            fill="none"
            stroke="#fff"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M40 60 C20 66 8 80 22 90 C34 98 48 88 38 80"
            fill="none"
            stroke="#fff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="1 7"
          />
        </svg>

        {/* Three small blue strokes on the left edge */}
        <svg
          viewBox="0 0 40 40"
          className="pointer-events-none absolute -left-4 bottom-[26%] w-8 sm:w-10"
          aria-hidden="true"
        >
          <path d="M3 30 L15 27" stroke={BLUE} strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M10 17 L21 24" stroke={BLUE} strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M24 6 L28 19" stroke={BLUE} strokeWidth="4" strokeLinecap="round" fill="none" />
        </svg>
      </div>
    </div>
  );
}
