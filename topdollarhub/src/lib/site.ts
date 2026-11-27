export const site = {
  name: "Top Dollar Hub",
  url: "https://topdollarhub.com",
  description:
    "Top Dollar Hub provides only the best offers of your Dating & Gambling Traffic. Get the best rates for your Dating & Gambling Traffic only with Top Dollar Hub.",
  signInUrl: "https://affiliates.topdollarhub.com/affiliate/login",
  signUpUrl: "https://affiliates.topdollarhub.com/affiliate/signup/?q=5J473L",
  // Google Analytics property carried over from the previous site.
  gaId: "G-ZRT672L260",
};

// Open Graph fields every page shares. A page that sets its own `openGraph`
// replaces the layout's one instead of adding to it, so each page spreads this in.
export const sharedOpenGraph = {
  type: "website" as const,
  images: ["/images/og-image.png"],
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// "Follow us" links in the phone menu, carried over from the previous site.
export type SocialName = "email" | "instagram" | "linkedin" | "whatsapp";
export const social: { name: SocialName; label: string; href: string }[] = [
  { name: "email", label: "Email", href: "mailto:will@truebluedigitalmedia.com" },
  { name: "instagram", label: "Instagram", href: "http://instagram.com/" },
  { name: "linkedin", label: "LinkedIn", href: "http://linkedin.com/" },
  { name: "whatsapp", label: "WhatsApp", href: "https://wa.me/447946146835" },
];

export const testimonials = [
  {
    quote:
      "“Working with Top Dollar Hub has been seamless experience for me - thanks to the exceptional support from their AMs”",
    author: "YamiLeads",
  },
  {
    quote:
      "“Always a pleasure to work with. We could always find ways to grow together.”",
    author: "Olya",
  },
  {
    quote:
      "“Lovely partnership! Quick communication, transparent, friendly, effective and dedicated all in one!”",
    author: "REBLL",
  },
];

// The suffix is set smaller than the number on phones.
export const stats = [
  { value: "$14", suffix: "m+", label: "PAID OUT" },
  { value: "100", suffix: "+", label: "TOP OFFERS" },
  { value: "1000", suffix: "+", label: "PARTNERS" },
  { value: "30", suffix: "+", label: "COUNTRIES" },
];

// Events shown on the home page, in order.
export const events = [
  {
    name: "SBC | SUMMIT",
    venue: "FIL,",
    place: "Lisbon",
    dates: "29 Sept - 1 Oct, 2026",
    image: "/images/event-lisbon.webp",
  },
  {
    name: "AW ASIA 2026",
    venue: "Bangkok,",
    place: "Thailand",
    dates: "9 - 10 December, 2026",
    image: "/images/event-bangkok.webp",
  },
];

export const services = [
  "Campaign Optimisation Support",
  "ROI Strategy Support",
  "Tools for Optimisation",
  "Full Account Management",
];
