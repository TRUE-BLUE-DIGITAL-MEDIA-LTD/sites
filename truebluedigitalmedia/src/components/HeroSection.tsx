"use client";

import { useEffect, useRef } from "react";

// Home hero. On desktop the photo is fixed to the viewport and drifts up
// slowly as the page scrolls, as on the previous site.
export default function HeroSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const desktop = window.matchMedia("(min-width: 1025px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const update = () => {
      frame = 0;
      el.style.backgroundPositionY =
        desktop.matches && !reduced.matches
          ? `${-(window.scrollY + 21) * 0.1348}px`
          : "";
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="hero-bg relative z-10 pt-[191px] md:h-[586px] md:px-10 md:pt-[356px]"
      style={{ backgroundImage: "url(/images/hero.jpg)" }}
    >
      {children}
    </section>
  );
}
