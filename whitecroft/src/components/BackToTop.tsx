"use client";

import { useEffect, useState } from "react";

// Small "back to top" button shown on phones once the page has
// been scrolled, as on the original site.
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0 })}
      className={`fixed bottom-[10px] right-[10px] z-40 flex h-[30px] w-[30px] items-center justify-center border border-white bg-black/60 text-white shadow-[0_0_1px_rgba(247,247,247,0.4)] transition-[opacity,visibility] duration-300 md:hidden ${
        visible ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <svg viewBox="0 0 16 16" fill="none" aria-hidden className="h-4 w-4">
        <path d="m2.5 11 5.5-5.5 5.5 5.5" stroke="currentColor" strokeWidth="2.6" />
      </svg>
    </button>
  );
}
