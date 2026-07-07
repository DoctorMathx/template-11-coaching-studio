export const siteConfig = {
  brand: {
    name: "Iyabo Ogun",
    tagline: "Executive & founder coaching, quietly practiced.",
    domain: "iyabo.co",
    email: "hello@iyabo.co",
    whatsapp: "+234 700 000 0000",
    city: "Lagos · Remote worldwide",
    social: { instagram: "https://instagram.com/iyaboogun", twitter: "https://twitter.com/iyaboogun", linkedin: "https://linkedin.com/in/iyaboogun" },
  },
  coach: {
    name: "Iyabo Ogun",
    role: "Executive coach · ex-COO · ICF-certified (PCC)",
    portrait: "/img/creator.png",
    shortBio: "I coach African founders and senior leaders who are carrying more than they were trained for. My work is quiet, practical, and deeply confidential.",
    longBio: [
      "I spent 14 years as an operator — from early-stage lead to COO of a company that scaled to 400 people.",
      "I've been coaching for six years now, working almost exclusively with founders, C-suites and senior leaders across Africa and the diaspora.",
      "The work is one-to-one, over a private container of 12 sessions across six months. I take on 8 clients at a time.",
    ],
    metric: "6 years · 74 clients · 8 current spots",
    credentials: ["ICF-certified PCC coach", "MBA · Lagos Business School", "Ex-COO at a Series-B startup"],
  },
  hero: {
    tag: "2 spots open · Autumn intake",
    primaryCta: { label: "Book a 30-min introductory call", href: "/booking" },
    secondaryCta: { label: "How I work", href: "/#method" },
  },
  commerce: { currency: "₦", trust: ["Confidential and off-the-record", "12-session container over 6 months", "Full refund inside your first 2 sessions"] },
} as const;
