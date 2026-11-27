"use client";

import { useEffect } from "react";

const MAX_SHIFT = 100;

// Drifts the photo behind every `.bg-parallax` section while it crosses the
// screen: 100px low as the section enters from the bottom, level when it is
// centred, 100px high as it leaves at the top. The value is read by the
// `.bg-parallax` rule in globals.css, which only applies on desktop.
export default function Parallax() {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(".bg-parallax"),
    );
    const desktop = window.matchMedia("(min-width: 1025px)");
    const still = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const update = () => {
      frame = 0;
      const on = desktop.matches && !still.matches;
      const viewport = window.innerHeight;
      for (const el of sections) {
        if (!on) {
          el.style.removeProperty("--parallax-y");
          continue;
        }
        const rect = el.getBoundingClientRect();
        const fromCentre = rect.top + rect.height / 2 - viewport / 2;
        const range = (viewport + rect.height) / 2;
        const progress = Math.max(-1, Math.min(1, fromCentre / range));
        el.style.setProperty(
          "--parallax-y",
          `${(progress * MAX_SHIFT).toFixed(1)}px`,
        );
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      sections.forEach((el) => el.style.removeProperty("--parallax-y"));
    };
  }, []);

  return null;
}
