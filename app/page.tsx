import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, ChevronRight, MessageCircle, Quote, Shield, Users } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { ProgramCard } from "@/components/ui/program-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { CtaSection } from "@/components/ui/cta-section";
import { siteConfig } from "@/lib/site-config";
import { flagshipProgram, featuredPrograms } from "@/mock/products";
import { testimonials, proofStats } from "@/mock/testimonials";
import { faqs } from "@/mock/faqs";

export default function HomePage() {
  const flagship = flagshipProgram();
  const featured = featuredPrograms();
  return (
    <>
      {/* Editorial hero */}
      <section className="relative bg-canvas overflow-hidden">
        <div className="absolute inset-0 grain opacity-50 pointer-events-none" />
        <div className="container-x pt-16 md:pt-24 pb-16 md:pb-24 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="chip chip-accent"><span className="w-1.5 h-1.5 rounded-full bg-[color:var(--accent)]" />{siteConfig.hero.tag}</div>
              <h1 className="font-display text-5xl sm:text-6xl md:text-[80px] lg:text-[100px] font-normal tracking-tight leading-[1.02] mt-6">
                A quieter kind of<br /><span className="italic font-medium">executive</span> coaching.
              </h1>
              <p className="prose-lede mt-8 max-w-xl">
                I coach a small number of African founders and senior leaders through the seasons of their work.
                My practice is private, senior, and slow-moving on purpose.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link href={siteConfig.hero.primaryCta.href} className="btn btn-accent btn-lg">{siteConfig.hero.primaryCta.label} <ArrowRight className="w-4 h-4" /></Link>
                <Link href={siteConfig.hero.secondaryCta.href} className="btn btn-outline btn-lg">{siteConfig.hero.secondaryCta.label}</Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-canvas border border-line">
                <Image src={siteConfig.coach.portrait} alt={siteConfig.coach.name} fill sizes="(max-width:1024px) 100vw, 40vw" className="object-cover" priority />
              </div>
              <div className="mt-4 grid grid-cols-3 text-center">
                {proofStats.slice(0, 3).map((s) => (
                  <div key={s.label} className="border-l first:border-l-0 border-line py-2 px-3">
                    <div className="font-display text-xl font-semibold tabular-nums">{s.value}</div>
                    <div className="text-[11px] muted mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted / logos strip */}
      <section className="bg-white border-y border-line">
        <div className="container-x py-10">
          <div className="flex items-center justify-center flex-wrap gap-x-10 gap-y-4 text-[12px] uppercase tracking-[.24em] muted">
            <span>Coached founders at</span>
            <span className="font-display italic text-[color:var(--ink)] text-lg">Paystack</span>
            <span className="font-display italic text-[color:var(--ink)] text-lg">Flutterwave</span>
            <span className="font-display italic text-[color:var(--ink)] text-lg">Kuda</span>
            <span className="font-display italic text-[color:var(--ink)] text-lg">Cowrywise</span>
            <span className="font-display italic text-[color:var(--ink)] text-lg">Piggyvest</span>
            <span className="font-display italic text-[color:var(--ink)] text-lg">Andela</span>
          </div>
        </div>
      </section>

      {/* Method / how I work */}
      <Section pad="lg" id="method">
        <SectionHeader eyebrow="How I work" title="Four things that never change." lede="The container is different for every client. The way I hold it is not." />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {[
            { icon: Shield, title: "Off-the-record", body: "Everything is confidential. No notes shared, no client stories published without written permission." },
            { icon: MessageCircle, title: "Senior thinking-with", body: "Not therapy, not consulting. A senior peer to think with, honestly, on your hardest calls." },
            { icon: Calendar, title: "A held cadence", body: "A fortnightly rhythm you can plan around. Voice-memo access between sessions when it matters." },
            { icon: Users, title: "Very small caseload", body: "Eight active clients at a time. Full stop. When one finishes, one spot opens." },
          ].map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="card p-7">
                <div className="w-11 h-11 rounded-full bg-accent-soft text-[color:var(--accent-ink)] flex items-center justify-center"><Icon className="w-5 h-5" /></div>
                <h3 className="font-display italic text-xl font-medium mt-5">{f.title}</h3>
                <p className="text-[14.5px] text-[color:var(--charcoal)] leading-relaxed mt-2">{f.body}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Flagship */}
      <Section tone="canvas" pad="lg">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="eyebrow">The flagship container</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[56px] font-normal italic tracking-tight leading-[1.05] mt-4">{flagship.title}</h2>
            <p className="prose-lede mt-5">{flagship.fullDescription}</p>
            <ul className="mt-6 space-y-2.5">
              {flagship.outcomes.slice(0, 3).map((o) => <li key={o} className="flex items-start gap-3 text-[15px] text-[color:var(--charcoal)]"><ChevronRight className="w-4 h-4 text-[color:var(--accent-ink)] mt-1 shrink-0" />{o}</li>)}
            </ul>
            <div className="mt-8"><Link href={`/programs/${flagship.slug}`} className="btn btn-primary">Read the full brief <ArrowRight className="w-4 h-4" /></Link></div>
          </div>
          <div className="lg:col-span-7">
            <div className="relative aspect-[5/4] rounded-3xl overflow-hidden bg-canvas border border-line">
              <Image src="/img/team-boardroom.png" alt="A private session" fill sizes="(max-width:1024px) 100vw, 55vw" className="object-cover" />
            </div>
          </div>
        </div>
      </Section>

      {/* Programs */}
      <Section pad="lg">
        <SectionHeader eyebrow="The practice" title="Five ways to work together." lede="Choose the container that fits your season." action={<Link href="/programs" className="btn btn-outline btn-sm">All programs <ArrowRight className="w-3.5 h-3.5" /></Link>} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {featured.map((p) => <ProgramCard key={p.id} p={p} />)}
        </div>
      </Section>

      {/* Big pull quote */}
      <Section tone="graphite" pad="lg">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="w-6 h-6 text-[color:var(--accent)] mx-auto" />
          <p className="font-display italic text-3xl md:text-4xl lg:text-5xl leading-[1.2] mt-5 text-white">
            &ldquo;Iyabo is the calmest room I get to sit in every fortnight. I&apos;ve become a different founder inside her container.&rdquo;
          </p>
          <p className="mt-6 text-[13px] uppercase tracking-[.2em] text-white/60">Kemi A. · CEO · Series-B fintech</p>
        </div>
      </Section>

      {/* Client stories */}
      <Section pad="lg" id="stories">
        <SectionHeader eyebrow="Client stories" title="What clients tell others." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {testimonials.slice(0, 6).map((t) => <TestimonialCard key={t.id} t={t} />)}
        </div>
      </Section>

      {/* About the coach */}
      <Section tone="paper" pad="lg">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-canvas border border-line max-w-md">
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
            <div className="mt-6"><Link href="/about" className="btn btn-outline">More about me</Link></div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section pad="lg">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5"><SectionHeader eyebrow="Common questions" title="Before you book." /><Link href="/faq" className="btn btn-outline">Full FAQ</Link></div>
          <div className="lg:col-span-7"><FaqAccordion items={faqs.slice(0, 6)} /></div>
        </div>
      </Section>

      <Section pad="sm">
        <CtaSection eyebrow="Ready when you are" title="Start with a 30-minute call." description="No pressure, no pitch. Just a short conversation to see whether we should keep talking." primary={{ label: "Book an intro call", href: "/booking" }} secondary={{ label: "Send a note first", href: "/contact" }} />
      </Section>
    </>
  );
}
