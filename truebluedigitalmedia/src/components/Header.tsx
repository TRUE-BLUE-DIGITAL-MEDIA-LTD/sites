"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronUpIcon, PhoneIcon } from "@/components/icons";
import { navLinks, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  // Close the menu when the page changes by any route, including the
  // browser's Back button.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 135);
      setShowTop(window.scrollY > 350);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      menuButton.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Close the menu if the window grows into the desktop layout, so the page
  // is not left unable to scroll behind a menu that is no longer shown.
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1025px)");
    const onChange = () => desktop.matches && setOpen(false);
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Reserves the space the fixed header covers. */}
      <div aria-hidden className="h-[101px] desk:h-[135px]" />

      {/* Desktop header: shrinks once the page is scrolled. */}
      <header
        className={`fixed inset-x-0 top-0 z-50 hidden bg-white transition-[height] duration-200 desk:block ${
          scrolled ? "h-[106px]" : "h-[135px]"
        }`}
      >
        <Link
          href="/"
          aria-label={`${site.name} home`}
          className={`absolute transition-[left,top] duration-200 ${
            scrolled ? "left-[73px] top-[15px]" : "left-16 top-[25px]"
          }`}
        >
          <Image
            src="/images/logo.png"
            alt={site.name}
            width={172}
            height={172}
            priority
            className={`transition-[width,height] duration-200 ${
              scrolled ? "size-[76px]" : "size-[95px]"
            }`}
          />
        </Link>

        <nav
          aria-label="Main"
          className={`absolute left-[calc(45.84vw-155px)] transition-[top] duration-200 ${
            scrolled ? "top-[27px]" : "top-[18px]"
          }`}
        >
          <ul className="flex gap-[15px] text-sm leading-7 tracking-[0.42px]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isCurrent(link.href) ? "page" : undefined}
                  className={`block rounded-[30px] px-5 py-3 transition-colors duration-200 hover:bg-ink hover:text-[#fafafa] ${
                    isCurrent(link.href) ? "bg-ink text-[#fafafa]" : "text-body"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/contact"
          className="absolute left-[calc(75vw+29px)] top-[25px] flex h-[55px] w-[212px] items-center justify-center rounded-[50px] border-2 border-navy bg-white text-base text-navy transition-colors duration-200 hover:border-brand hover:bg-brand hover:text-white"
        >
          Contact us
        </Link>
      </header>

      {/* Phone and tablet header. */}
      <header className="fixed inset-x-0 top-0 z-50 h-[101px] bg-white desk:hidden">
        <button
          ref={menuButton}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="absolute left-[10px] top-[31px] size-10"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`absolute left-[9px] h-0.5 w-[22px] bg-brand transition-[transform,opacity,top] duration-300 ease-out ${
                open
                  ? i === 0
                    ? "top-[19px] rotate-45"
                    : i === 1
                      ? "top-[19px] opacity-0"
                      : "top-[19px] -rotate-45"
                  : i === 0
                    ? "top-[13px]"
                    : i === 1
                      ? "top-[19px]"
                      : "top-[25px]"
              }`}
            />
          ))}
        </button>

        <Link
          href="/"
          aria-label={`${site.name} home`}
          onClick={() => setOpen(false)}
          className="absolute left-1/2 top-[10px] -translate-x-1/2"
        >
          <Image
            src="/images/logo.png"
            alt={site.name}
            width={172}
            height={172}
            priority
            className="size-[81px]"
          />
        </Link>

        <a
          href={site.phoneHref}
          aria-label={`Call ${site.phone}`}
          className="absolute right-[10px] top-[35px] text-brand"
        >
          <PhoneIcon className="h-[30px] w-[34px]" />
        </a>
      </header>

      {/* Dimmed backdrop behind the menu. */}
      <div
        aria-hidden
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-30 bg-black/40 transition-[opacity,visibility] duration-300 ease-out desk:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      {/* Menu that slides down from under the header and fills the screen. */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-[101px] z-40 flex h-[calc(100dvh-101px)] flex-col overflow-y-auto bg-white transition-[translate,visibility] duration-300 ease-linear desk:hidden ${
          open ? "visible translate-y-0" : "invisible -translate-y-[calc(100%+101px)]"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col items-center px-[35px] pt-[57px]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={isCurrent(link.href) ? "page" : undefined}
              className="flex h-[55px] w-full items-center justify-center text-base tracking-[0.48px]"
            >
              <span
                className={`border-b-[3px] py-[9px] ${
                  isCurrent(link.href)
                    ? "border-steel text-body"
                    : "border-transparent text-black"
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <Link
            href="/contact#ContactForm"
            onClick={() => setOpen(false)}
            className="mt-[38px] flex h-[51px] w-[255px] items-center justify-center rounded-[50px] border-2 border-black bg-white text-base text-black"
          >
            Contact us
          </Link>
        </nav>
      </div>

      {/* Back-to-top button, phones only, once the page is scrolled. */}
      <button
        type="button"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0 })}
        className={`fixed bottom-[10px] right-[10px] z-20 flex size-[30px] items-center justify-center bg-black/60 text-white transition-[opacity,visibility] duration-[400ms] md:hidden ${
          showTop ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ChevronUpIcon className="size-[30px]" />
      </button>
    </>
  );
}
