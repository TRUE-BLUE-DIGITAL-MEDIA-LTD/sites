"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import SocialIcon from "@/components/SocialIcon";
import { navLinks, site, social } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The menu only exists below the desktop breakpoint; close it if the window
  // grows past that (e.g. a tablet turned sideways) so the page isn't left
  // with scrolling locked.
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onChange = () => desktop.matches && setOpen(false);
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  // While the menu is open the page behind it can't be scrolled or tabbed into.
  useEffect(() => {
    if (!open) return;
    const behind = document.querySelectorAll("main, footer");
    document.body.style.overflow = "hidden";
    behind.forEach((el) => el.setAttribute("inert", ""));
    // Escape closes the menu and hands focus back to the button that opened
    // it, since whatever had focus inside the menu is about to be hidden.
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      behind.forEach((el) => el.removeAttribute("inert"));
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const close = () => setOpen(false);

  return (
    <>
      {/* Reserves the space the fixed header covers. */}
      <div aria-hidden className="h-[55px] bg-black md:h-[76px] lg:h-[87px]" />

      <header
        className={`fixed inset-x-0 top-0 z-50 flex h-[55px] items-center pl-[29px] pr-[10px] transition-[height,padding,background-color] duration-200 md:h-[76px] md:bg-black md:pl-10 md:pr-6 lg:items-start lg:pl-16 lg:pr-[58px] ${
          open ? "bg-transparent" : "bg-black"
        } ${scrolled ? "lg:h-[77px] lg:pt-[11px]" : "lg:h-[87px] lg:pt-[21px]"}`}
      >
        <Link
          href="/"
          aria-label="Top Dollar Hub home"
          onClick={close}
          className={`shrink-0 max-md:mt-[7px] ${open ? "max-md:invisible" : ""}`}
        >
          <Image
            src="/images/logo.png"
            alt="Top Dollar"
            width={876}
            height={180}
            priority
            className={`h-auto w-[173px] transition-transform duration-200 md:w-[243px] lg:w-[228px] ${
              scrolled ? "lg:scale-[0.8]" : ""
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
          className="hidden h-[47px] w-[155px] shrink-0 items-center justify-center rounded-full border-2 border-white bg-black font-poppins text-base text-white transition-colors duration-200 hover:border-brand lg:flex"
        >
          Member Login
        </a>

        <button
          ref={toggleRef}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="phone-menu tablet-menu"
          onClick={() => setOpen((v) => !v)}
          className="relative ml-auto h-10 w-10 lg:hidden"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`absolute left-[9px] h-0.5 w-[22px] transition-all duration-300 ${
                open ? "bg-white md:bg-brand" : "bg-white"
              } ${
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
      </header>

      {/* Phone menu: a black panel that slides in over the whole screen. */}
      <div
        id="phone-menu"
        className={`fixed inset-0 z-40 overflow-y-auto bg-black transition-[transform,visibility] duration-300 ease-linear md:hidden ${
          open ? "visible translate-x-0" : "invisible -translate-x-full"
        }`}
      >
        <div className="border-b border-white/5 p-5">
          <Image
            src="/images/emblem.png"
            alt=""
            width={500}
            height={499}
            className="h-[106px] w-[106px]"
          />
        </div>
        <nav aria-label="Mobile" className="px-5 pb-[73px] pt-[30px]">
          <ul className="font-poppins text-xl tracking-[0.6px] text-white">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={close}
                  aria-current={isCurrent(link.href) ? "page" : undefined}
                  className="flex h-[61px] items-center"
                >
                  <span
                    className={`border-b-2 py-[9px] ${
                      isCurrent(link.href) ? "border-brand" : "border-transparent"
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={site.signInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-[219px] flex h-12 w-[196px] items-center justify-center rounded-full border-2 border-brand font-poppins text-base text-white"
          >
            Member Login
          </a>
        </nav>
        <div className="border-t border-white/5 px-5 pb-[25px]">
          <p className="font-poppins text-[22px] font-semibold leading-[1.5] text-white">
            Follow us
          </p>
          <ul className="mt-[2px] flex gap-[15px]">
            {social.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  aria-label={item.label}
                  {...(item.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="flex h-[34px] w-[29px] items-center justify-center text-brand"
                >
                  <SocialIcon name={item.name} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tablet menu: a white panel below the header. */}
      <div
        id="tablet-menu"
        className={`fixed inset-x-0 bottom-0 top-[76px] z-40 hidden overflow-y-auto bg-white transition-[opacity,visibility] duration-300 md:block lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav
          aria-label="Tablet"
          className="flex flex-col items-center gap-14 px-6 py-24"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
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
            onClick={close}
            className="flex h-[50px] w-[200px] items-center justify-center rounded-full border-2 border-black font-poppins text-base text-black transition-colors duration-200 hover:border-brand"
          >
            Contact us
          </Link>
        </nav>
      </div>
    </>
  );
}
