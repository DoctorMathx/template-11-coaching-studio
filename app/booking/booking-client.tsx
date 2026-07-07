"use client";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { programs } from "@/mock/products";
import { siteConfig } from "@/lib/site-config";
import { ArrowLeft, ArrowRight, Calendar, Clock, MessageCircle, Shield } from "lucide-react";

const DAYS = [
  { d: "Tue", n: "9" }, { d: "Wed", n: "10" }, { d: "Thu", n: "11" }, { d: "Fri", n: "12" }, { d: "Mon", n: "15" }, { d: "Tue", n: "16" },
];
const SLOTS = ["09:00", "10:30", "13:00", "15:00", "16:30"];

export function BookingClient() {
  const router = useRouter();
  const [interest, setInterest] = useState<string>("p-flagship");
  const [day, setDay] = useState<string>("11");
  const [slot, setSlot] = useState<string>("13:00");
  const [submitting, setSubmitting] = useState(false);
  const p = useMemo(() => programs.find((x) => x.id === interest) ?? programs[0], [interest]);

  const submit = (e: React.FormEvent) => { e.preventDefault(); setSubmitting(true); setTimeout(() => router.push("/thank-you"), 700); };

  return (
    <div className="bg-canvas min-h-screen">
      <div className="container-x py-10 md:py-14">
        <Link href="/" className="inline-flex items-center gap-2 text-[13.5px] muted hover:text-[color:var(--ink)]"><ArrowLeft className="w-4 h-4" /> Back</Link>

        <div className="mt-8 grid lg:grid-cols-12 gap-8">
          <form onSubmit={submit} className="lg:col-span-7 space-y-6">
            <div className="p-6 md:p-8 rounded-3xl border border-line bg-white">
              <h1 className="font-display italic text-3xl md:text-[38px] font-normal">Book a 30-minute intro call</h1>
              <p className="text-[14px] muted mt-1">Free. No pressure, no pitch. A conversation to see whether we should keep talking.</p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <Field id="name" label="Full name" required />
                <Field id="email" label="Email" type="email" required />
                <Field id="role" label="Your role" placeholder="Founder, VP, etc." />
                <Field id="company" label="Company" />
              </div>
            </div>

            <div className="p-6 md:p-8 rounded-3xl border border-line bg-white">
              <h2 className="font-display italic text-xl font-medium">Which program are you considering?</h2>
              <div className="mt-4 space-y-2">
                {programs.map((prog) => (
                  <label key={prog.id} className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-colors ${interest === prog.id ? "border-[color:var(--ink)] bg-canvas" : "border-line hover:border-[color:var(--ink)]"}`}>
                    <input type="radio" name="prog" checked={interest === prog.id} onChange={() => setInterest(prog.id)} className="mt-1 accent-black" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-3"><div className="text-[14px] font-medium">{prog.title}</div><div className="text-[12px] muted tabular-nums">{prog.duration}</div></div>
                      <p className="text-[12.5px] muted mt-0.5 line-clamp-1">{prog.shortDescription}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="p-6 md:p-8 rounded-3xl border border-line bg-white">
              <h2 className="font-display italic text-xl font-medium">Pick a time</h2>
              <p className="text-[13.5px] muted mt-1">West Africa Time (WAT)</p>
              <div className="mt-4 grid grid-cols-3 sm:grid-cols-6 gap-2">
                {DAYS.map((dd) => (
                  <button key={dd.n} type="button" onClick={() => setDay(dd.n)} className={`p-3 rounded-xl border text-center transition ${day === dd.n ? "border-[color:var(--ink)] bg-canvas" : "border-line hover:border-[color:var(--ink)]"}`}>
                    <div className="text-[11px] uppercase tracking-[.14em] muted">{dd.d}</div>
                    <div className="font-display text-lg font-semibold tabular-nums mt-0.5">{dd.n}</div>
                  </button>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-3 sm:grid-cols-5 gap-2">
                {SLOTS.map((s) => (
                  <button key={s} type="button" onClick={() => setSlot(s)} className={`py-2 rounded-xl border text-[14px] tabular-nums transition ${slot === s ? "border-[color:var(--ink)] bg-canvas" : "border-line hover:border-[color:var(--ink)]"}`}>{s}</button>
                ))}
              </div>
            </div>

            <div className="p-6 md:p-8 rounded-3xl border border-line bg-white">
              <label className="label" htmlFor="ctx">Anything I should know before we speak?</label>
              <textarea id="ctx" rows={5} className="input mt-1.5 resize-y" placeholder="A short paragraph is enough. What you're working on, and what you're hoping coaching might help with." />
              <button disabled={submitting} className="btn btn-accent btn-lg w-full mt-5">{submitting ? "Booking…" : "Confirm intro call"}</button>
              <p className="mt-3 text-[12px] muted text-center">You&apos;ll get a calendar invite and a short pre-call questionnaire.</p>
            </div>
          </form>

          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-24 space-y-4">
              <div className="p-6 md:p-8 rounded-3xl border border-line bg-white">
                <h2 className="font-display italic text-lg font-medium">Booking summary</h2>
                <div className="mt-5 flex items-start gap-4">
                  <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-canvas border border-line shrink-0"><Image src={p.cover} alt="" fill sizes="56px" className="object-cover" /></div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] uppercase tracking-[.16em] muted">You&apos;re interested in</div>
                    <div className="text-[14.5px] font-medium leading-snug mt-1">{p.title}</div>
                  </div>
                </div>
                <div className="mt-5 pt-5 border-t border-line space-y-3 text-[14px]">
                  <div className="flex items-center gap-3"><Calendar className="w-4 h-4 muted" />July {day} · {DAYS.find((d) => d.n === day)?.d}</div>
                  <div className="flex items-center gap-3"><Clock className="w-4 h-4 muted" />{slot} WAT · 30 minutes</div>
                  <div className="flex items-center gap-3"><MessageCircle className="w-4 h-4 muted" />Zoom (link in the invite)</div>
                </div>
              </div>
              <div className="p-5 rounded-3xl bg-white border border-line flex items-start gap-3"><Shield className="w-4 h-4 mt-1 text-[color:var(--accent-ink)]" /><div><div className="text-[14px] font-medium">Confidential</div><div className="text-[12.5px] muted mt-0.5">Everything you share is off-the-record. Always.</div></div></div>
              <p className="text-[12px] muted px-2 text-center">Questions first? Email {siteConfig.brand.email}.</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function Field({ id, label, type = "text", placeholder, required }: { id: string; label: string; type?: string; placeholder?: string; required?: boolean }) {
  return <div><label className="label" htmlFor={id}>{label}</label><input id={id} type={type} required={required} placeholder={placeholder} className="input mt-1.5" /></div>;
}
