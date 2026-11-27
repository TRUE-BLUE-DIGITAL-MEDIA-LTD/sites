"use client";

import { useState } from "react";
import {
  FacebookIcon,
  LinkedinIcon,
  MailIcon,
  TwitterIcon,
} from "@/components/Icons";

// Share buttons under a news post. Each opens the network's own share page.
// Phones get a single "Share" button, which opens the phone's share sheet
// where there is one and otherwise reveals the four buttons.
export default function ShareButtons({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const [revealed, setRevealed] = useState(false);

  async function share() {
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // The visitor closed the share sheet.
      }
    } else {
      setRevealed((v) => !v);
    }
  }

  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  const buttons = [
    {
      label: "Share",
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
      color: "bg-[#3b5998]",
      icon: <FacebookIcon className="h-[13px] w-[13px]" />,
    },
    {
      label: "Tweet",
      name: "Twitter",
      href: `https://twitter.com/intent/tweet?url=${u}&text=${t}`,
      color: "bg-[#00aced]",
      icon: <TwitterIcon className="h-[13px] w-[13px]" />,
    },
    {
      label: "Share",
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
      color: "bg-[#007bb6]",
      icon: <LinkedinIcon className="h-3 w-3" />,
    },
    {
      label: "Mail",
      name: "email",
      href: `mailto:?subject=${t}&body=${u}`,
      color: "bg-[#555555]",
      icon: <MailIcon className="h-3 w-3" />,
    },
  ];

  return (
    <>
      <button
        type="button"
        onClick={share}
        className="my-[10px] block h-[58px] w-full border-2 border-brand text-base text-brand transition-colors duration-200 hover:bg-brand hover:text-white md:hidden"
      >
        Share
      </button>
      <ul className={`flex-wrap md:flex ${revealed ? "flex" : "hidden"}`}>
        {buttons.map((b) => (
          <li key={b.name} className="mb-[10px] ml-[5px] mr-1">
            <a
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share by ${b.name}`}
              className="flex h-7 w-[74px] items-center overflow-hidden rounded border border-[#cccccc] bg-gradient-to-b from-white to-[#dedede] font-[Arial,Helvetica,sans-serif] text-xs text-[#626262] hover:to-[#cfcfcf]"
            >
              <span
                className={`flex h-full w-[26px] items-center justify-center text-white ${b.color}`}
              >
                {b.icon}
              </span>
              <span className="pl-[5px]">{b.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
