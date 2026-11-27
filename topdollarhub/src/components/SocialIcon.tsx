import type { SocialName } from "@/lib/site";

// Line icons for the "Follow us" row in the phone menu.
export default function SocialIcon({ name }: { name: SocialName }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {name === "email" && (
        <>
          <rect x="2" y="4" width="20" height="16" rx="3" />
          <path d="m3 7 9 6 9-6" />
        </>
      )}
      {name === "instagram" && (
        <>
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4.5" />
          <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
        </>
      )}
      {name === "linkedin" && (
        <g fill="currentColor" stroke="none">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </g>
      )}
      {name === "whatsapp" && (
        <>
          <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z" />
          <path
            d="M9.6 8.2c-.5 1.2.3 3 1.7 4.4s3.2 2.2 4.4 1.7l.5-1.3-1.7-1-.8.7c-.7-.3-1.5-1.1-1.8-1.8l.7-.8-1-1.7z"
            fill="currentColor"
            stroke="none"
          />
        </>
      )}
    </svg>
  );
}
