export const site = {
  name: "True Blue Digital Media",
  legalName: "True Blue Digital Media Ltd",
  url: "https://www.truebluedigitalmedia.com",
  phone: "(+44) 7946-146-835",
  phoneHref: "tel:+447946146835",
  email: "hello@truebluedigitalmedia.com",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const registeredOffice = [
  "Henge Barn",
  "Pury Hill Business Park",
  "Alderton Road",
  "Towcester",
  "NN12 7LS",
];

// Same office as the footer's registered address (the live site still showed
// the old Kettering address here).
export const contactAddress = [
  "Henge Barn",
  "Pury Hill Business Park",
  "Towcester, NN12 7LS",
  "United Kingdom",
];

export const openingHours = [
  { days: "Mon - Fri", open: "9:00 am", close: "5:00 pm" },
  { days: "Sat - Sun" },
];

// Home page service cards, in order. `imagePosition` is the CSS
// background-position of the square crop.
export const serviceCards = [
  {
    title: "Amazing Optimisations",
    text: "Advanced Testing; GEO Targeting; Device Redirecting; Layout Testing; Design Testing; Our A/B testing is a continuous part of our service to partners. Because our technologies are paid on results services so it is in our best interest to keep improving conversion and moving with the changing tides of traffic and user behavior.",
    image: "/images/service-optimisations.jpg",
    imagePosition: "50% 50%",
  },
  {
    title: "Global optimisations",
    text: "We pay special attention to all traffic GEO’s. When a new GEO pops up on our radar that we are currently not monetizing we aim to fix it. This means the odd few clicks you receive from “junk” GEO’s don’t go to waste.",
    image: "/images/service-global.jpg",
    imagePosition: "0 50%",
  },
  {
    title: "Key Communication",
    text: "If we notice an optimization we can recommend we will let you know ASAP. We won’t hang around for the usual weekly/monthly “hey, how're your campaigns going” on Skype a lot of networks are guilty of. We will be available by whatever medium you prefer whether it’s Skype, WhatsApp, Telephone, Email or even smoke signal.",
    image: "/images/service-communication.jpg",
    imagePosition: "50% 50%",
  },
  {
    title: "Reporting Analytics",
    text: "Our platform generates accurate, meaningful reports that will allow you to refine your campaigns. Your publisher manager will also keep a close eye on them and will normally be in contact with recommendations regularly. We can help you choose which campaigns to A/B test with other advertisers and even create you a smartlink based on reports.",
    image: "/images/service-analytics.jpg",
    imagePosition: "50% 50%",
  },
];

export const values = [
  "Accuracy",
  "Expertise",
  "Confidentiality",
  "Experience",
  "Trust",
  "Professional",
];

export const team = [
  {
    name: "Will",
    bio: "As Director of True Blue Digital Media Will has been responsible for guiding CPA networks to success with a focus on improving ROI for partners.",
    image: "/images/team-will.jpg",
    imagePosition: "50% 0",
  },
  {
    name: "Oleg",
    bio: "As Traffic Manager for Top Dollar Hub, Oleg brings vast experience of traffic management and long-term business and budget  planning.",
    image: "/images/team-oleg.png",
    imagePosition: "50% 50%",
  },
];

// Options of the "Service Required" field on the contact form.
export const services = [
  "Campaign Optimisation Support",
  "ROI Strategy Support",
  "Tools for Optimisation",
  "Full Account Management",
];
