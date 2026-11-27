"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Chevron, LinkedinIcon, MailIcon, PhoneIcon } from "@/components/Icons";
import MobileMenu from "@/components/MobileMenu";
import { navLinks, overlayHeaderPaths, site, type NavLink } from "@/lib/site";

// The address as the site writes it: no trailing slash, and with the site's own
// capital letters even if the visitor arrived at "/litigation".
const menuPaths = navLinks.flatMap((link) => [link, ...(link.children ?? [])]).map((l) => l.href);
function clean(path: string) {
  const trimmed = path.length > 1 ? path.replace(/\/$/, "") : path;
  return menuPaths.find((p) => p.toLowerCase() === trimmed.toLowerCase()) ?? trimmed;
}

export default function Header() {
  const pathname = clean(usePathname());
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the phone menu when the visitor goes back or forward, or when the
  // window becomes wide enough for the desktop header.
  useEffect(() => {
    const close = () => setOpen(false);
    const desktop = window.matchMedia("(min-width: 1025px)");
    window.addEventListener("popstate", close);
    desktop.addEventListener("change", close);
    return () => {
      window.removeEventListener("popstate", close);
      desktop.removeEventListener("change", close);
    };
  }, []);

  const overlay = overlayHeaderPaths.includes(pathname);
  const isCurrent = (link: NavLink): boolean =>
    link.href === pathname || (link.children?.some(isCurrent) ?? false);

  const background = scrolled ? "bg-white" : overlay ? "bg-transparent" : "bg-ink";
  const logo = scrolled ? "/images/logo-black.png" : "/images/logo-white.png";

  return (
    <>
      {/* Reserves the space the fixed header covers on pages without a banner. */}
      {!overlay && <div aria-hidden className="h-[146px] bg-ink md:h-[200px] lg:h-[203px]" />}

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${background}`}
      >
        {/* Desktop */}
        <div className="hidden lg:block">
          {!scrolled && (
            <div className="bg-[#2e2e2e] px-[15px] py-[5px]">
              <div className="mx-auto flex h-7 page-width items-start justify-between">
                <div className="flex text-white">
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="linkedin"
                    className="mr-[3px] flex h-[23px] w-[23px] items-center justify-center"
                  >
                    <LinkedinIcon className="h-[13px] w-[13px]" />
                  </a>
                  <a
                    href={`mailto:${site.email}`}
                    aria-label="email"
                    className="mr-[3px] flex h-[23px] w-[23px] items-center justify-center"
                  >
                    <MailIcon className="h-[13px] w-[13px]" />
                  </a>
                </div>
                <p className="pt-[2px] text-base text-white">
                  <strong className="font-bold">Call Us</strong> {site.phone}
                </p>
              </div>
            </div>
          )}

          <div className="p-[15px]">
            <div className="mx-auto flex page-width items-start">
              <Link
                href="/"
                aria-label="Whitecroft home"
                className={scrolled ? "" : "mt-[3px]"}
              >
                <Image
                  src={logo}
                  alt="Whitecroft"
                  width={500}
                  height={500}
                  priority
                  className="h-[132px] w-[132px]"
                />
              </Link>

              <nav
                aria-label="Main"
                className={`ml-auto py-3 ${scrolled ? "mt-[37px]" : "mt-[38px]"}`}
              >
                <ul
                  className={`flex font-playfair text-lg tracking-[0.54px] ${
                    scrolled ? "text-[#111010]" : "text-white"
                  }`}
                >
                  {navLinks.map((link) => (
                    <li
                      key={link.href}
                      data-current={isCurrent(link)}
                      className="nav-item relative flex"
                    >
                      <Link
                        href={link.href}
                        aria-current={link.href === pathname ? "page" : undefined}
                        className="flex items-center px-[15px]"
                      >
                        <span className="nav-text whitespace-nowrap">
                          {link.label}
                          {link.children && (
                            <Chevron className="ml-[10px] inline-block h-3 w-3" />
                          )}
                        </span>
                      </Link>
                      {link.children && (
                        <ul className="nav-sub absolute left-[15px] top-full z-10 bg-white text-[15px] tracking-[0.45px] text-[#111010]">
                          {link.children.map((child) => (
                            <li
                              key={child.href}
                              className="border-b border-[#d1d1d1] last:border-b-0"
                            >
                              <Link
                                href={child.href}
                                aria-current={child.href === pathname ? "page" : undefined}
                                className="block whitespace-nowrap py-[15px] pl-[15px] pr-[30px] text-left hover:bg-ink hover:text-white"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {/* Phone and tablet */}
        <div className="relative flex h-[146px] items-center justify-center md:h-[200px] lg:hidden">
          <Link href="/" aria-label="Whitecroft home">
            <Image
              src={logo}
              alt="Whitecroft"
              width={500}
              height={500}
              priority
              className="h-[126px] w-[126px] md:h-[170px] md:w-[170px]"
            />
          </Link>
          <a
            href={site.phoneHref}
            aria-label="Call us"
            className={`absolute right-[10px] top-[57px] md:hidden ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            <PhoneIcon className="h-[31px] w-[35px]" />
          </a>
          <Link
            href="/contact"
            className={`absolute left-[calc(66.667%+103px)] top-[71px] hidden h-[59px] w-[min(176px,calc(33.333%-143px))] items-center justify-center border-2 text-base transition-colors duration-200 md:flex ${
              scrolled
                ? "border-[#8f654d] text-[#8f654d] hover:bg-white"
                : "border-white text-white hover:bg-white hover:text-brand"
            }`}
          >
            Contact us
          </Link>
        </div>
      </header>

      <button
        ref={menuButton}
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className={`fixed left-[10px] top-[53px] z-[70] h-10 w-10 transition-colors duration-300 md:left-[18px] md:top-[74px] md:h-[52px] md:w-[52px] lg:hidden ${
          open ? "text-[#666666]" : scrolled ? "text-[#111010]" : "text-white"
        }`}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`absolute left-[9px] h-0.5 w-[22px] bg-current transition-[transform,opacity] duration-300 ease-out md:left-[11px] md:w-[30px] ${
              i === 0
                ? "top-[13px] md:top-[17px]"
                : i === 1
                  ? "top-[19px] md:top-[25px]"
                  : "top-[25px] md:top-[33px]"
            } ${
              open
                ? i === 0
                  ? "translate-y-[6px] rotate-45 md:translate-y-[8px]"
                  : i === 1
                    ? "opacity-0"
                    : "-translate-y-[6px] -rotate-45 md:-translate-y-[8px]"
                : ""
            }`}
          />
        ))}
      </button>

      <MobileMenu
        open={open}
        pathname={pathname}
        onClose={() => setOpen(false)}
        onEscape={() => {
          setOpen(false);
          menuButton.current?.focus();
        }}
      />
    </>
  );
}
