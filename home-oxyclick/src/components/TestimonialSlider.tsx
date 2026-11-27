"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { testimonials } from "@/lib/site";

const AUTOPLAY_MS = 4000;
const SLIDE_MS = 600;

// Horizontal carousel that loops in one direction: a copy of the last slide
// sits before the first and a copy of the first after the last, and the track
// jumps back (without animation) once a copy has slid into view.
export default function TestimonialSlider() {
  const count = testimonials.length;
  const track = [testimonials[count - 1], ...testimonials, testimonials[0]];

  const [pos, setPos] = useState(1);
  const [animate, setAnimate] = useState(true);
  const [settled, setSettled] = useState(true);
  const [paused, setPaused] = useState(false);
  const moving = useRef(false);

  const go = useCallback((dir: 1 | -1) => {
    if (moving.current) return;
    moving.current = true;
    setSettled(false);
    setAnimate(true);
    setPos((p) => p + dir);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, go]);

  const onTransitionEnd = (e: React.TransitionEvent<HTMLUListElement>) => {
    if (e.target !== e.currentTarget) return;
    moving.current = false;
    setSettled(true);
    if (pos === 0 || pos === count + 1) {
      setAnimate(false);
      setPos(pos === 0 ? count : 1);
    }
  };

  return (
    <div
      className="relative mx-auto max-w-[832px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="What people say about us"
    >
      <div className="overflow-hidden">
        <ul
          className="flex"
          style={{
            transform: `translate3d(-${pos * 100}%, 0, 0)`,
            transition: animate ? `transform ${SLIDE_MS}ms ease` : "none",
          }}
          onTransitionEnd={onTransitionEnd}
        >
          {track.map((t, i) => {
            return (
              <li
                key={i}
                aria-hidden={i !== pos}
                className="flex min-h-[374px] w-full shrink-0 items-center justify-center px-9 pb-24 pt-10 text-center md:min-h-[401px] md:px-[125px] md:pb-10"
              >
                <div
                  className={settled && i === pos ? "animate-pulse-once" : ""}
                >
                  <blockquote className="font-helvetica text-2xl font-bold leading-[1.15] text-white md:text-4xl md:leading-[1.15]">
                    {t.quote}
                  </blockquote>
                  <p className="mt-9 font-poppins text-base text-brand md:text-lg">
                    {t.author}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

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
      className={`absolute top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center text-white/80 transition-colors duration-300 hover:text-white ${
        prev ? "left-0" : "right-0"
      }`}
    >
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <path
          d={prev ? "M14 4 7 11l7 7" : "m8 4 7 7-7 7"}
          stroke="currentColor"
          strokeWidth="3.5"
        />
      </svg>
    </button>
  );
}
