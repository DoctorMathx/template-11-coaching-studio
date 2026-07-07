import Link from "next/link";
import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/lib/site-config";
import { CheckCircle2, Calendar, Mail, ArrowRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = { title: "You're booked" };

export default function ThankYouPage() {
  return (
    <>
      <section className="bg-canvas border-b border-line">
        <div className="container-x py-16 md:py-24 max-w-3xl">
          <div className="chip chip-accent"><CheckCircle2 className="w-4 h-4" /> Booking confirmed</div>
          <h1 className="font-display text-5xl md:text-6xl italic font-normal tracking-tight leading-[1.02] mt-6">Thank you. I&apos;ll see you soon.</h1>
          <p className="prose-lede mt-5 max-w-xl">Your intro call is on my calendar. Below is everything else you need — also on its way to your inbox.</p>
        </div>
      </section>
      <Section pad="md">
        <div className="grid lg:grid-cols-3 gap-4">
          {[
            { icon: Calendar, title: "Calendar invite sent", body: "Check your inbox for a Zoom link and add the call to your calendar." },
            { icon: Mail, title: "A short questionnaire", body: "Three questions to help us make the most of the 30 minutes. Reply when you can." },
            { icon: MessageCircle, title: "Bring one hard thing", body: "Not a full agenda — just one thing you want to think about together." },
          ].map((s) => { const Icon = s.icon; return (<div key={s.title} className="card p-6"><div className="w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center text-[color:var(--accent-ink)]"><Icon className="w-4 h-4" /></div><div className="font-display italic text-lg font-medium mt-4">{s.title}</div><p className="text-[14px] text-[color:var(--charcoal)] leading-relaxed mt-1">{s.body}</p></div>); })}
        </div>
      </Section>
      <Section tone="canvas" pad="md"><div className="max-w-2xl mx-auto text-center"><h2 className="font-display italic text-3xl md:text-4xl">Something to read while you wait.</h2><p className="prose-lede mt-4">In the meantime, you might enjoy reading through how I work and what past clients say.</p><div className="mt-6 flex flex-wrap gap-3 justify-center"><Link href="/#method" className="btn btn-outline">How I work</Link><Link href="/programs" className="btn btn-accent">All programs <ArrowRight className="w-4 h-4" /></Link></div><p className="mt-6 text-[12px] muted">Reach me any time at {siteConfig.brand.email}.</p></div></Section>
    </>
  );
}
