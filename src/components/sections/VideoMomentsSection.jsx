import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Volume2, VolumeX } from "lucide-react";
import SectionHeading from "../ui/SectionHeading.jsx";

const NAVY = "#1E2A5E";

const SIZES = {
  large: "h-36 w-36 sm:h-44 sm:w-44 md:h-72 md:w-72",
  medium: "h-36 w-36 sm:h-44 sm:w-44 md:h-56 md:w-56",
  small: "h-36 w-36 sm:h-44 sm:w-44 md:h-44 md:w-44",
};

const BUBBLES = [
  {
    src: "/assets/video/Video-19234.mp4",
    color: "#4361EE",
    size: "large",
    layout: "lg:absolute lg:left-[1%] lg:top-[10px]",
  },
  {
    src: "/assets/video/Video-55369.mp4",
    color: "#FBB740",
    size: "medium",
    layout: "mt-8 lg:mt-0 lg:absolute lg:left-[37%] lg:top-[80px]",
  },
  {
    src: "/assets/video/Video-70873.mp4",
    color: "#6FBD30",
    size: "large",
    layout: "lg:absolute lg:left-[67%] lg:top-0",
  },
  {
    src: "/assets/video/Video-74576.mp4",
    color: "#FF5733",
    size: "small",
    layout: "mt-8 lg:mt-0 lg:absolute lg:left-[9%] lg:top-[430px]",
  },
  {
    src: "/assets/video/Video-92783.mp4",
    color: "#8FB0FF",
    size: "medium",
    layout: "lg:absolute lg:left-[38%] lg:top-[390px]",
  },
  {
    src: "/assets/video/Video-96393.mp4",
    color: NAVY,
    size: "small",
    layout: "mt-8 lg:mt-0 lg:absolute lg:left-[71%] lg:top-[365px]",
  },
];

const STARS = [
  { cls: "left-[5%] top-[4%]", size: 28, fill: "#FBB740", show: "" },
  { cls: "right-[6%] top-[3%]", size: 32, fill: "#FF5733", show: "" },
  { cls: "left-[47%] top-[2%]", size: 20, fill: "#4361EE", show: "hidden sm:block" },
  { cls: "left-[3%] bottom-[14%]", size: 24, fill: "#6FBD30", show: "" },
  { cls: "right-[4%] bottom-[10%]", size: 26, fill: "#FBB740", show: "" },
  { cls: "left-[55%] bottom-[5%]", size: 20, fill: "#FF5733", show: "hidden sm:block" },
];

const DOTS = [
  { cls: "left-[22%] top-[6%]", size: 12, fill: "#FF5733" },
  { cls: "right-[24%] top-[9%]", size: 10, fill: "#6FBD30" },
  { cls: "left-[34%] bottom-[8%]", size: 12, fill: "#4361EE" },
  { cls: "right-[14%] bottom-[24%]", size: 10, fill: "#FBB740" },
  { cls: "left-[8%] top-[44%]", size: 10, fill: "#FBB740" },
  { cls: "right-[7%] top-[46%]", size: 12, fill: "#FF5733" },
];

function CartoonStar({ size, fill }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2L14.6 9.4L22 12L14.6 14.6L12 22L9.4 14.6L2 12L9.4 9.4Z"
        fill={fill}
        stroke={NAVY}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function VideoMomentsSection() {
  const sectionRef = useRef(null);
  const videoRefs = useRef([]);
  const [soundIdx, setSoundIdx] = useState(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "350px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const mm = gsap.matchMedia(sectionRef);

    mm.add(
      {
        reduce: "(prefers-reduced-motion: reduce)",
        desktop: "(min-width: 768px)",
      },
      (context) => {
        const { reduce, desktop } = context.conditions;
        if (reduce) return;

        gsap.utils.toArray("[data-float]").forEach((el, i) => {
          const dist = gsap.utils.random(12, 20);
          const rot = gsap.utils.random(1.5, 3) * (desktop ? 1 : 0.5);
          gsap.set(el, { rotate: -rot });
          gsap.to(el, {
            y: `+=${dist}`,
            rotate: rot,
            duration: gsap.utils.random(3, 6),
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: i * 0.45 + gsap.utils.random(0, 0.6),
          });
        });

        gsap.utils.toArray("[data-pulse]").forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0.3 },
            {
              opacity: 0.6,
              duration: gsap.utils.random(2, 3.5),
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1,
            }
          );
        });

        gsap.utils.toArray("[data-string]").forEach((el) => {
          gsap.fromTo(
            el,
            { rotate: -6 },
            {
              rotate: 6,
              duration: gsap.utils.random(2, 3.5),
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1,
              transformOrigin: "50% 0%",
            }
          );
        });

        gsap.utils.toArray("[data-deco-star]").forEach((el, i) => {
          gsap.fromTo(
            el,
            { scale: 0.75, rotate: -10 },
            {
              scale: 1.15,
              rotate: 10,
              duration: gsap.utils.random(1.6, 2.8),
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1,
              delay: i * 0.3,
            }
          );
        });

        gsap.utils.toArray("[data-deco-dot]").forEach((el) => {
          gsap.to(el, {
            y: `+=${gsap.utils.random(8, 14)}`,
            duration: gsap.utils.random(2.5, 4.5),
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
        });
      }
    );

    return () => mm.revert();
  }, []);

  useEffect(() => {
    const videos = videoRefs.current.filter(Boolean);
    if (!("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            const p = video.play();
            if (p && p.catch) p.catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.15 }
    );

    videos.forEach((v) => observer.observe(v));
    return () => observer.disconnect();
  }, []);

  const enableSound = (idx) => {
    videoRefs.current.forEach((v, j) => {
      if (v) v.muted = j !== idx;
    });
    const active = videoRefs.current[idx];
    if (active) {
      const p = active.play();
      if (p && p.catch) {
        p.catch(() => {
          active.muted = true;
          active.play().catch(() => {});
          setSoundIdx(null);
        });
      }
    }
    setSoundIdx(idx);
  };

  const disableSound = () => {
    videoRefs.current.forEach((v) => {
      if (v) v.muted = true;
    });
    setSoundIdx(null);
  };

  const handleEnter = (e, idx) => {
    const root = e.currentTarget;
    gsap.to(root, { scale: 1.08, duration: 0.35, ease: "back.out(2)", overwrite: "auto" });
    gsap.to(root.querySelector("[data-glow]"), { opacity: 1, duration: 0.25, overwrite: "auto" });
    enableSound(idx);
  };

  const handleLeave = (e) => {
    const root = e.currentTarget;
    gsap.to(root, { scale: 1, duration: 0.35, ease: "power2.out", overwrite: "auto" });
    gsap.to(root.querySelector("[data-glow]"), { opacity: 0, duration: 0.25, overwrite: "auto" });
    disableSound();
  };

  const handleClick = (e, idx) => {
    if (e.nativeEvent.pointerType === "mouse") return;
    if (soundIdx === idx) {
      disableSound();
    } else {
      enableSound(idx);
    }
  };

  return (
    <section
      id="magical-moments"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F2F6FF] py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {STARS.map((s, i) => (
          <div key={`star-${i}`} data-deco-star className={`absolute ${s.cls} ${s.show}`}>
            <CartoonStar size={s.size} fill={s.fill} />
          </div>
        ))}
        {DOTS.map((d, i) => (
          <div
            key={`dot-${i}`}
            data-deco-dot
            className={`absolute rounded-full border-2 ${d.cls}`}
            style={{
              width: d.size,
              height: d.size,
              backgroundColor: d.fill,
              borderColor: NAVY,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Magical Moments"
          title="Little Stars in Action"
          subtitle="Watch our happy learners explore, play and grow every day at NexGen!"
          center
        />
      </div>

      <div className="relative z-10 mx-auto mt-14 grid max-w-6xl grid-cols-2 items-start justify-items-center gap-x-4 gap-y-6 px-4 md:gap-y-10 lg:relative lg:mt-16 lg:block lg:h-[720px]">
        {BUBBLES.map((b, i) => {
          const isActive = soundIdx === i;
          return (
            <div key={b.src} className={`flex justify-center ${b.layout}`}>
              <div data-float className="relative pb-14">
                <div
                  className={`relative cursor-pointer rounded-full outline-none ${SIZES[b.size]}`}
                  role="button"
                  tabIndex={0}
                  aria-label={`Magical moment video ${i + 1}. ${isActive ? "Sound on" : "Sound off"}`}
                  aria-pressed={isActive}
                  onPointerEnter={(e) => {
                    if (e.pointerType === "mouse") handleEnter(e, i);
                  }}
                  onPointerLeave={(e) => {
                    if (e.pointerType === "mouse") handleLeave(e);
                  }}
                  onFocus={(e) => handleEnter(e, i)}
                  onBlur={handleLeave}
                  onClick={(e) => handleClick(e, i)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      if (isActive) disableSound();
                      else enableSound(i);
                    }
                  }}
                >
                  <div
                    data-pulse
                    className="pointer-events-none absolute -inset-3 rounded-full border-[3px]"
                    style={{ borderColor: b.color, opacity: 0.3 }}
                  />
                  <div
                    data-glow
                    className="pointer-events-none absolute -inset-2 rounded-full border-[5px] border-white opacity-0"
                    style={{ boxShadow: `0 0 0 2px ${NAVY}` }}
                  />

                  <div
                    className="relative h-full w-full overflow-hidden rounded-full"
                    style={{
                      border: `7px solid ${b.color}`,
                      boxShadow: `0 0 0 3px ${NAVY}, 6px 6px 0 3px ${NAVY}`,
                      backgroundColor: b.color,
                    }}
                  >
                    <video
                      ref={(el) => {
                        videoRefs.current[i] = el;
                        if (el && !el.dataset.init) {
                          el.dataset.init = "1";
                          el.defaultMuted = true;
                          el.muted = true;
                        }
                      }}
                      className="h-full w-full object-cover"
                      src={inView ? b.src : undefined}
                      autoPlay={inView}
                      muted
                      loop
                      playsInline
                      preload={inView ? "metadata" : "none"}
                      aria-hidden="true"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 rounded-full border-[3px]"
                      style={{ borderColor: NAVY }}
                    />
                  </div>

                  <div
                    className="pointer-events-none absolute rounded-full border-2 bg-white"
                    style={{
                      left: "17%",
                      top: "13%",
                      width: "24%",
                      height: "12%",
                      transform: "rotate(-38deg)",
                      borderColor: NAVY,
                    }}
                  />
                  <div
                    className="pointer-events-none absolute rounded-full border-2 bg-white"
                    style={{
                      left: "33%",
                      top: "30%",
                      width: "8%",
                      height: "8%",
                      borderColor: NAVY,
                    }}
                  />

                  <div
                    className="absolute bottom-[9%] right-[9%] flex h-9 w-9 items-center justify-center rounded-full border-[3px] bg-white"
                    style={{ borderColor: NAVY, color: NAVY }}
                  >
                    {isActive ? (
                      <Volume2 size={16} strokeWidth={2.5} aria-hidden="true" />
                    ) : (
                      <VolumeX size={16} strokeWidth={2.5} aria-hidden="true" />
                    )}
                  </div>

                  <svg
                    data-string
                    className="pointer-events-none absolute left-1/2 top-full -ml-[14px] overflow-visible"
                    style={{ marginTop: 3 }}
                    width="28"
                    height="56"
                    viewBox="0 0 28 60"
                    aria-hidden="true"
                  >
                    <path
                      d="M14 12C2 22 26 32 14 42C4 50 20 54 14 60"
                      fill="none"
                      stroke={NAVY}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M14 1L22 12L6 12Z"
                      fill={b.color}
                      stroke={NAVY}
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
