import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Users } from "lucide-react";
import type { Program } from "@/lib/types";
import { formatLabel, formatPrice, levelLabel } from "@/lib/utils";

export function ProgramCard({ p }: { p: Program }) {
  return (
    <Link href={`/programs/${p.slug}`} className="card group flex flex-col overflow-hidden">
      <div className="relative aspect-[5/4] bg-canvas overflow-hidden">
        <Image src={p.cover} alt={p.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
        <div className="absolute top-3 left-3 flex items-center gap-2 flex-wrap">
          <span className="chip bg-white/95 backdrop-blur">{formatLabel(p.format)}</span>
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="text-[11px] uppercase tracking-[.18em] muted">{levelLabel(p.level)}</div>
        <h3 className="font-display text-2xl font-medium italic tracking-tight mt-2">{p.title}</h3>
        <p className="text-[14px] text-[color:var(--charcoal)] mt-3 line-clamp-2 leading-relaxed">{p.shortDescription}</p>
        <div className="mt-5 pt-5 border-t border-line flex items-end justify-between">
          <div>
            <div className="text-[16px] font-semibold tabular-nums">{formatPrice(p.price)}</div>
            <div className="text-[11.5px] muted mt-0.5">{p.duration}</div>
          </div>
          <ArrowUpRight className="w-5 h-5 text-[color:var(--accent-ink)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
