import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { programBySlug, programs } from "@/mock/products";
import { testimonials } from "@/mock/testimonials";
import { faqs } from "@/mock/faqs";
import { siteConfig } from "@/lib/site-config";
import { Section, SectionHeader } from "@/components/ui/section";
import { ProgramCard } from "@/components/ui/program-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { CtaSection } from "@/components/ui/cta-section";
import { formatLabel, formatPrice, levelLabel } from "@/lib/utils";
import { ArrowRight, Calendar, Check, Clock, Users } from "lucide-react";

export function generateStaticParams() { return programs.map((p) => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const p = programBySlug(slug);
  return { title: p?.title ?? "Program", description: p?.shortDescription };
}

export default async function ProgramDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const p = programBySlug(slug);
  if (!p) notFound();
  const related = programs.filter((x) => x.id !== p.id).slice(0, 3);
  const reviews = testimonials.filter((t) => !t.programId || t.programId === p.id).slice(0, 3);

  return (
    <>
      <section className="bg-canvas border-b border-line">
        <div className="container-x py-14 md:py-20">
          <div className="text-[13px] muted"><Link href="/programs" className="hover:text-[color:var(--ink)]">Programs</Link><span className="mx-1.5">/</span><span>{formatLabel(p.format)}</span></div>
          <div className="grid lg:grid-cols-12 gap-12 mt-8 items-start">
            <div className="lg:col-span-7">
              <div className="chip chip-accent mt-1">{levelLabel(p.level)} · {formatLabel(p.format)}</div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-[68px] font-normal italic tracking-tight leading-[1.03] mt-5">{p.title}</h1>
              <p className="prose-lede mt-5 max-w-xl">{p.fullDescription ?? p.shortDescription}</p>
              <div className="mt-8 flex flex-wrap items-center gap-6 text-[13.5px]">
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{p.duration}</span>
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{p.cadence}</span>
                {p.spots && <span className="flex items-center gap-2"><Users className="w-4 h-4" />{p.spots} spots at a time</span>}
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/booking" className="btn btn-accent btn-lg">Book an intro call <ArrowRight className="w-4 h-4" /></Link>
                <div className="text-[14px]"><span className="muted">From </span><span className="font-semibold tabular-nums">{formatPrice(p.price)}</span>{p.interval === "month" && <span className="muted"> / month</span>}</div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-canvas border border-line">
                <Image src={p.cover} alt={p.title} fill sizes="(max-width:1024px) 100vw, 40vw" className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <Section pad="md">
        <SectionHeader eyebrow="Outcomes" title="What you'll leave with." />
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {p.outcomes.map((o, i) => (
            <div key={o} className="card p-7">
              <div className="text-[13px] muted">Outcome {String(i + 1).padStart(2, "0")}</div>
              <p className="mt-3 text-[17px] leading-snug font-medium">{o}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section tone="canvas" pad="md">
        <SectionHeader eyebrow="The process" title="How the engagement unfolds." />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {p.process.map((s) => (
            <div key={s.step} className="card p-6">
              <div className="font-display italic text-3xl font-semibold text-[color:var(--accent-ink)] tabular-nums">{s.step}</div>
              <h3 className="font-display italic text-xl font-medium mt-4">{s.title}</h3>
              <p className="text-[14px] text-[color:var(--charcoal)] leading-relaxed mt-2">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Who / includes */}
      <Section pad="md">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <div className="eyebrow mb-3">Who this is for</div>
            <h2 className="font-display text-3xl md:text-4xl italic font-normal tracking-tight">You&apos;ll get the most from this if…</h2>
            <ul className="mt-6 space-y-3">
              {p.whoFor.map((w) => (<li key={w} className="flex items-start gap-3"><Users className="w-4 h-4 mt-1 shrink-0" /><span className="text-[15px] text-[color:var(--charcoal)] leading-relaxed">{w}</span></li>))}
            </ul>
          </div>
          <div>
            <div className="eyebrow mb-3">What&apos;s included</div>
            <h2 className="font-display text-3xl md:text-4xl italic font-normal tracking-tight">Every engagement includes.</h2>
            <ul className="mt-6 space-y-3">
              {p.includes.map((i) => (<li key={i} className="flex items-start gap-3"><span className="mt-1 w-5 h-5 rounded-full bg-accent-soft flex items-center justify-center shrink-0"><Check className="w-3 h-3 text-[color:var(--accent-ink)]" /></span><span className="text-[15px] text-[color:var(--charcoal)] leading-relaxed">{i}</span></li>))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Reviews */}
      {reviews.length > 0 && (
        <Section tone="canvas" pad="md">
          <SectionHeader eyebrow="Client stories" title="What clients say after." />
          <div className="grid md:grid-cols-3 gap-5">{reviews.map((r) => <TestimonialCard key={r.id} t={r} />)}</div>
        </Section>
      )}

      {/* FAQ */}
      <Section pad="md">
        <div className="grid lg:grid-cols-12 gap-12"><div className="lg:col-span-5"><SectionHeader eyebrow="Common questions" title="Answers before you book." /><Link href="/faq" className="btn btn-outline">Full FAQ</Link></div><div className="lg:col-span-7"><FaqAccordion items={faqs.slice(0, 6)} /></div></div>
      </Section>

      {related.length > 0 && (
        <Section tone="paper" pad="md">
          <SectionHeader eyebrow="Other programs" title="You might also be considering." />
          <div className="grid md:grid-cols-3 gap-5">{related.map((r) => <ProgramCard key={r.id} p={r} />)}</div>
        </Section>
      )}

      <Section pad="sm">
        <CtaSection eyebrow="One good conversation" title="Start with a 30-minute call." description={`${siteConfig.commerce.trust[0]}. ${siteConfig.commerce.trust[2]}.`} primary={{ label: "Book an intro call", href: "/booking" }} secondary={{ label: "Send a note", href: "/contact" }} />
      </Section>
    </>
  );
}
