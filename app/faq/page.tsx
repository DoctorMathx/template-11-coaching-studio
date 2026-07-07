import Link from "next/link";
import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/section";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { CtaSection } from "@/components/ui/cta-section";
import { faqs } from "@/mock/faqs";

export const metadata: Metadata = { title: "FAQ" };

const TOPICS = [
  { id: "fit", label: "Fit" },
  { id: "confidentiality", label: "Confidentiality" },
  { id: "format", label: "Format" },
  { id: "billing", label: "Billing & refunds" },
  { id: "cadence", label: "Cadence" },
  { id: "spots", label: "Availability" },
];

export default function FaqPage() {
  return (
    <>
      <section className="bg-canvas border-b border-line">
        <div className="container-x py-16 md:py-20 max-w-4xl">
          <div className="eyebrow">Common questions</div>
          <h1 className="font-display text-5xl md:text-6xl italic font-normal tracking-tight leading-[1.02] mt-4">Everything, in one place.</h1>
          <p className="prose-lede mt-5 max-w-2xl">Fit, format, confidentiality, refunds. Can&apos;t find your answer? <Link href="/contact" className="underline underline-offset-4">Send a note</Link>.</p>
        </div>
      </section>
      <Section pad="md">
        <div className="grid lg:grid-cols-12 gap-12">
          <aside className="lg:col-span-3"><div className="lg:sticky lg:top-24"><div className="eyebrow mb-4">Topics</div><nav className="flex flex-col gap-1">{TOPICS.map((t) => <a key={t.id} href={`#${t.id}`} className="px-3 py-2 rounded-lg text-[14px] muted hover:text-[color:var(--ink)] hover:bg-paper">{t.label}</a>)}</nav></div></aside>
          <div className="lg:col-span-9 space-y-14">
            {TOPICS.map((t) => { const items = faqs.filter((f) => f.topic === t.id); if (!items.length) return null; return (<div key={t.id} id={t.id}><SectionHeader eyebrow={t.label} title={t.label} /><FaqAccordion items={items} /></div>); })}
          </div>
        </div>
      </Section>
      <Section pad="sm"><CtaSection eyebrow="Still stuck?" title="Send a note." primary={{ label: "Contact", href: "/contact" }} secondary={{ label: "Programs", href: "/programs" }} tone="light" /></Section>
    </>
  );
}
