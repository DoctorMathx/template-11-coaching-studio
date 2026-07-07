import type { NavItem } from "@/lib/types";

export const navItems: NavItem[] = [
  { label: "How I work", href: "/#method" },
  { label: "Programs", href: "/programs" },
  { label: "About", href: "/about" },
  { label: "Client stories", href: "/#stories" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  practice: [
    { label: "How I work", href: "/#method" },
    { label: "Programs", href: "/programs" },
    { label: "About", href: "/about" },
    { label: "Book a call", href: "/booking" },
  ],
  help: [
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
    { label: "Confidentiality", href: "/faq" },
    { label: "Refunds", href: "/faq" },
  ],
};
