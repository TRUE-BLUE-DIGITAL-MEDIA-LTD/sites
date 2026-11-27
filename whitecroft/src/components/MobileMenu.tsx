"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Chevron, MailIcon, WhatsappIcon } from "@/components/Icons";
import { navLinks, site } from "@/lib/site";

type Props = {
  open: boolean;
  pathname: string;
  onClose: () => void;
  // Closing with the Escape key, which also returns focus to the menu button.
  onEscape: () => void;
};

// Drawer that slides in from the left on phones and tablets.
export default function MobileMenu({ open, pathname, onClose, onEscape }: Props) {
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onEscape();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onEscape]);

  return (
    <div className="lg:hidden">
      <div
        aria-hidden
        onClick={onClose}
        className={`fixed inset-0 z-[55] bg-black/40 transition-[opacity,visibility] duration-300 ease-out ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      <div
        id="mobile-menu"
        inert={!open}
        className={`fixed inset-y-0 left-0 z-[60] flex w-[75vw] flex-col md:w-[35vw] overflow-y-auto bg-white transition-[transform,visibility] duration-300 ease-linear ${
          open
            ? "visible translate-x-0 shadow-[0_3px_11px_rgba(0,0,0,0.25)]"
            : "invisible -translate-x-full"
        }`}
      >
        <nav
          aria-label="Mobile"
          className="flex-1 px-5 pb-[15px] pt-20 md:pt-[140px] text-base tracking-[0.48px] text-[#272a2f]"
        >
          <ul>
            {navLinks.map((link) => {
              const isOpen = expanded === link.href;
              return (
                <li key={link.href}>
                  <div
                    className={`flex items-center ${
                      link.href === pathname || isOpen ? "text-[#b5b5b5]" : ""
                    }`}
                  >
                    <Link href={link.href} onClick={onClose} className="py-[7px]">
                      {link.label}
                    </Link>
                    {link.children && (
                      <button
                        type="button"
                        aria-label={`${isOpen ? "Hide" : "Show"} ${link.label} pages`}
                        aria-expanded={isOpen}
                        onClick={() => setExpanded(isOpen ? null : link.href)}
                        className="flex h-9 items-center pl-[15px] pr-4"
                      >
                        <Chevron
                          className={`h-[13px] w-[13px] transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  {link.children && isOpen && (
                    <ul className="animate-fade-in">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={onClose}
                            className={`block px-3 py-[5px] ${
                              child.href === pathname ? "text-[#b5b5b5]" : ""
                            }`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

          <Link
            href="/contact"
            onClick={onClose}
            className="mb-[10px] mt-[15px] flex h-[52px] items-center justify-center border-2 border-brand tracking-normal text-brand transition-colors duration-200 hover:bg-brand hover:text-white"
          >
            Contact
          </Link>
        </nav>

        <div className="flex p-5 pt-[25px] text-[#272a2f]">
          <a
            href={`mailto:${site.email}`}
            aria-label="email"
            className="mr-4 flex h-[30px] w-[25px] items-center justify-center"
          >
            <MailIcon className="h-[17px] w-[17px]" />
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="whatsapp"
            className="mr-4 flex h-[30px] w-[25px] items-center justify-center"
          >
            <WhatsappIcon className="h-[19px] w-[19px]" />
          </a>
        </div>
      </div>
    </div>
  );
}
