export const site = {
  name: "Whitecroft",
  url: "https://www.whitecroft.co.th",
  // Default title and description, used by pages that do not set their own.
  title: "Whitecroft Business Legal Services | Business related legal help in Thailand",
  description:
    "Whitecroft Legal Services can help with Company, VAT Registration, Visa and Work Permit Applications as well as advice resolving business disputes.",
  gaId: "G-QRBBBQ69DM",
  phone: "+66-822-355-977",
  phoneHref: "tel:0822-355-977",
  email: "tidarat@whitecroft.co.th",
  address: ["282 Moo 5,", "Mukdahan, 40000"],
  linkedin: "https://www.linkedin.com/company/whitecroft-co-ltd",
  whatsapp: "https://wa.me/66822355977",
  // Marker position of the map on the contact page.
  map: { lat: 16.57301, lng: 104.71125, zoom: 13 },
};

export type NavLink = { label: string; href: string; children?: NavLink[] };

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Practice Areas",
    href: "/practiceareas",
    children: [
      { label: "Corporate", href: "/corporate" },
      { label: "Litigation", href: "/Litigation" },
      { label: "Employment", href: "/employment" },
      { label: "Notary Service", href: "/notary" },
      { label: "Document Library", href: "/legal-document-library" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [{ label: "Our Team", href: "/our-team" }],
  },
  { label: "Contact", href: "/contact" },
];

// Pages that open with a photo: the header sits on top of it and stays
// see-through until the page is scrolled. Every other page gets a dark header.
export const overlayHeaderPaths = [
  "/",
  "/practiceareas",
  "/corporate",
  "/Litigation",
  "/employment",
  "/notary",
  "/legal-document-library",
  "/about",
];

export const practiceAreas = [
  {
    title: "Litigation",
    href: "/Litigation",
    image: "/images/litigation.jpg",
    teaser: "Business disputes are part of every business. We help you protect your best interests.",
    summary:
      "We apply forward-thinking ideas and solutions to the most challenging legal issues you face, and approach each case with passion and commitment.",
  },
  {
    title: "Employment",
    href: "/employment",
    image: "/images/employment.jpg",
    teaser: "We provide employers with practical and strategic advice and guidance.",
    summary:
      "Employers receive the practical and strategic advice they need to enable them to make sound decisions that are consistent with applicable labor laws.",
  },
  {
    title: "Corporate",
    href: "/corporate",
    image: "/images/corporate.jpg",
    teaser:
      "We help create business entities, such as corporations, partnerships and joint ventures.",
    summary:
      "We represent both foreign and domestic companies to ensure the legal passage of goods, services, capital and more across borders.",
  },
];

export const highlights = [
  { icon: "scales", title: "Qualified Experts", text: "Our Experts on hand to help" },
  {
    icon: "person",
    title: "Satisfied Clients",
    text: "We strive to give our clients the best service",
  },
  { icon: "gavel", title: "Litigation Support", text: "We can help with your disputes" },
] as const;

export const testimonials = [
  {
    quote:
      "“Whitecroft has been there for all of my legal research and writings. Tidarat is both pragmatic and very intelligent, and takes every case very seriously.\"",
    author: "Jiraporn",
  },
  {
    quote:
      "\"I want to say thank you for all of your support. I could not have handled this alone, and am very grateful that everything was done so quickly and professionally.\"",
    author: "Benjaporn",
  },
];

export const documents = [
  {
    title: "Debt Repayment Agreement",
    files: [
      {
        label: "Debt Repayment Agreement (Thai)  .doc",
        href: "/files/Debt-Repayment-Agreement.doc",
      },
      {
        label: "Debt Repayment Agreement (Thai)  .pdf",
        href: "/files/Debt-Repayment-Agreement.pdf",
      },
    ],
  },
];
