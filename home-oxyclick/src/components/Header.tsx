"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Reserves the space the fixed header covers. */}
      <div aria-hidden className="h-16 bg-black lg:h-[91px]" />

      <header
        className={`fixed inset-x-0 top-0 z-50 flex h-16 items-center bg-black px-4 transition-[height,padding] duration-200 lg:items-start lg:pl-16 lg:pr-[58px] ${
          scrolled ? "lg:h-[90px] lg:pt-[15px]" : "lg:h-[116px] lg:pt-[21px]"
        }`}
      >
        <Link href="/" aria-label="Oxyclick home" className="shrink-0">
          <Image
            src="/images/logo.webp"
            alt="Oxyclick"
            width={640}
            height={206}
            priority
            className={`h-auto w-[150px] transition-[width] duration-200 ${
              scrolled ? "lg:w-[186px]" : "lg:w-[235px]"
            }`}
          />
        </Link>

        <nav
          aria-label="Main"
          className="hidden flex-1 justify-end pr-[13.6vw] pt-3 lg:flex 2xl:pr-[196px]"
        >
          <ul className="flex gap-10 font-poppins text-sm tracking-[0.42px]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isCurrent(link.href) ? "page" : undefined}
                  className={`nav-link ${
                    isCurrent(link.href)
                      ? "font-bold text-white"
                      : "text-body hover:text-white"
                  } transition-colors duration-200`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={site.signInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden h-[47px] w-[155px] shrink-0 items-center justify-center rounded-full border-2 border-white font-poppins text-base text-white transition-colors duration-200 hover:border-brand lg:flex"
        >
          Member Login
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="relative ml-auto h-10 w-10 lg:hidden"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`absolute left-2 h-0.5 w-6 transition-all duration-300 ${
                open ? "bg-brand" : "bg-white"
              } ${
                open
                  ? i === 0
                    ? "top-[19px] rotate-45"
                    : i === 1
                      ? "top-[19px] opacity-0"
                      : "top-[19px] -rotate-45"
                  : i === 0
                    ? "top-3"
                    : i === 1
                      ? "top-[19px]"
                      : "top-[26px]"
              }`}
            />
          ))}
        </button>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-white transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile"
          className="flex flex-col items-center gap-14 px-6 py-24"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={isCurrent(link.href) ? "page" : undefined}
              className={`border-b-4 pb-6 font-poppins text-[28px] tracking-[0.84px] text-body ${
                isCurrent(link.href) ? "border-brand" : "border-transparent"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="flex h-[50px] w-[200px] items-center justify-center rounded-full border-2 border-black font-poppins text-base text-black transition-colors duration-200 hover:border-brand"
          >
            Contact us
          </Link>
        </nav>
      </div>
    </>
  );
}
