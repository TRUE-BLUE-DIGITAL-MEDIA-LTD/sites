"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/lib/site";

const AUTOPLAY_MS = 7000;

// Cross-fading testimonial slider (shown on phones only, as on the original).
export default function TestimonialSlider() {
  const count = testimonials.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    // No automatic slide changes for visitors who asked for reduced motion.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, count, index]);

  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + count) % count);

  return (
    <div
      className="relative h-[294px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="What our clients say"
    >
      <ul>
        {testimonials.map((t, i) => (
          <li
            key={t.author}
            aria-hidden={i !== index}
            className={`absolute inset-0 flex items-center justify-center transition-[opacity,visibility] duration-[600ms] ${
              i === index ? "visible opacity-100" : "invisible opacity-0"
            }`}
          >
            <div className={`w-[70%] ${i === index ? "animate-fade-in-left" : ""}`}>
              <blockquote className="text-center text-base italic text-white">
                {t.quote}
              </blockquote>
              <p className="text-left font-playfair text-[19px] text-brand">{t.author}</p>
            </div>
          </li>
        ))}
      </ul>

      <SliderArrow direction="prev" onClick={() => go(-1)} />
      <SliderArrow direction="next" onClick={() => go(1)} />
    </div>
  );
}

function SliderArrow({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  const prev = direction === "prev";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={prev ? "Previous testimonial" : "Next testimonial"}
      className={`absolute top-1/2 flex h-8 w-8 -translate-y-[24px] items-center justify-center text-white opacity-70 transition-opacity duration-300 hover:opacity-100 ${
        prev ? "left-[10px]" : "right-[10px]"
      }`}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
        <path
          d={prev ? "M11.5 3 5.5 9l6 6" : "m6.5 3 6 6-6 6"}
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    </button>
  );
}
