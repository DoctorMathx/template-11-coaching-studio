import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/section";
import { ProgramCard } from "@/components/ui/program-card";
import { programs } from "@/mock/products";

export const metadata: Metadata = { title: "Programs" };

export default function ProgramsPage() {
  return (
    <>
      <section className="bg-canvas border-b border-line">
        <div className="container-x py-16 md:py-24 max-w-4xl">
          <div className="eyebrow">The practice</div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-[80px] font-normal tracking-tight leading-[1.02] mt-4"><span className="italic">Five ways</span> to work together.</h1>
          <p className="prose-lede mt-6 max-w-2xl">From a single day of thinking-with, to a six-month container, to a monthly retainer — pick the shape that fits your season.</p>
        </div>
      </section>

      <Section pad="lg">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p) => <ProgramCard key={p.id} p={p} />)}
        </div>
        <div className="mt-16 p-8 md:p-10 rounded-3xl bg-paper border border-line max-w-3xl mx-auto text-center">
          <div className="eyebrow">Not sure which fits?</div>
          <h3 className="font-display text-2xl md:text-3xl italic mt-3">Start with a 30-minute call.</h3>
          <p className="text-[14.5px] muted mt-3 max-w-md mx-auto">I&apos;ll help you pick the container that fits your season. No pressure.</p>
          <div className="mt-6"><Link href="/booking" className="btn btn-accent">Book an intro call</Link></div>
        </div>
      </Section>
    </>
  );
}
