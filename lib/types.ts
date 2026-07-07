export type ProgramFormat = "one-on-one" | "group" | "intensive" | "advisory";
export type ProgramLevel = "founder" | "senior-leader" | "team" | "board";

export type Program = {
  id: string;
  title: string;
  slug: string;
  format: ProgramFormat;
  level: ProgramLevel;
  shortDescription: string;
  fullDescription?: string;
  price: number;
  interval?: "one-time" | "month" | "package";
  cover: string;
  duration: string;
  cadence: string;
  spots?: number;
  outcomes: string[];
  process: { step: string; title: string; body: string }[];
  whoFor: string[];
  includes: string[];
  ctaLabel: string;
  featured?: boolean;
  flagship?: boolean;
};

export type Testimonial = { id: string; quote: string; name: string; role?: string; company?: string; rating?: number; programId?: string };
export type Faq = { id: string; question: string; answer: string; topic?: string };
export type NavItem = { label: string; href?: string; children?: { label: string; href: string; description?: string }[] };
