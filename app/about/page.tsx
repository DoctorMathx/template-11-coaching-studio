import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/section";
import { CtaSection } from "@/components/ui/cta-section";
import { siteConfig } from "@/lib/site-config";
import { proofStats } from "@/mock/testimonials";
import { Award, Check } from "lucide-react";

export const metadata: Metadata = { title: "About" };

const VALUES = [
  { title: "Slow before fast", body: "Most good decisions are slower than they feel. Coaching gives them the room they need." },
  { title: "Practical over profound", body: "You leave every session with something concrete to do or stop doing this week." },
  { title: "Quiet and off-the-record", body: "Everything is confidential. No client stories, no notes, no anecdotes shared without permission." },
  { title: "Small caseload, always", body: "Eight active clients. Ever. That is what makes the container work." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-canvas border-b border-line">
        <div className="container-x py-16 md:py-24 max-w-4xl">
          <div className="eyebrow">About</div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-[80px] font-normal tracking-tight leading-[1.02] mt-4">A <span className="italic">quiet</span> practice.</h1>
          <p className="prose-lede mt-6 max-w-2xl">{siteConfig.coach.shortBio}</p>
        </div>
      </section>

      <Section pad="lg">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-canvas border border-line">
              <Image src={siteConfig.coach.portrait} alt={siteConfig.coach.name} fill sizes="(max-width:1024px) 100vw, 40vw" className="object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="eyebrow">The coach</div>
            <h2 className="font-display text-3xl md:text-5xl italic font-normal tracking-tight leading-[1.1] mt-3">{siteConfig.coach.name}</h2>
            <p className="text-[15px] muted mt-2">{siteConfig.coach.role}</p>
            <div className="mt-6 space-y-4 max-w-xl text-[16px] leading-relaxed text-[color:var(--charcoal)]">
              {siteConfig.coach.longBio.map((p) => <p key={p}>{p}</p>)}
            </div>
            <div className="mt-8">
              <div className="eyebrow mb-3">Credentials</div>
              <ul className="space-y-2 text-[14.5px]">
                {siteConfig.coach.credentials.map((c) => (<li key={c} className="flex items-center gap-3"><Award className="w-4 h-4 text-[color:var(--accent-ink)]" />{c}</li>))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <div className="container-x">
        <div className="relative aspect-[21/9] rounded-3xl overflow-hidden bg-canvas border border-line">
          <Image src="/img/hero-scene.jpg" alt="A working session" fill sizes="1200px" className="object-cover" />
        </div>
      </div>

      <Section tone="canvas" pad="lg">
        <SectionHeader eyebrow="What I hold" title="Four things that don't change." />
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {VALUES.map((v, i) => (
            <div key={v.title} className="card p-7">
              <div className="font-display italic text-3xl font-semibold text-[color:var(--accent-ink)] tabular-nums">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="font-display italic text-xl font-medium mt-3">{v.title}</h3>
              <p className="text-[15px] text-[color:var(--charcoal)] leading-relaxed mt-2">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section pad="lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          {proofStats.map((s) => (<div key={s.label} className="border-t border-line pt-4"><div className="font-display text-3xl font-semibold tabular-nums">{s.value}</div><div className="text-[12px] muted mt-1">{s.label}</div></div>))}
        </div>
      </Section>

      <Section pad="sm">
        <CtaSection eyebrow="Ready?" title="Start with a call." primary={{ label: "Book an intro call", href: "/booking" }} secondary={{ label: "Send a note", href: "/contact" }} />
      </Section>
    </>
  );
}
