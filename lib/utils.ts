import { siteConfig } from "./site-config";
export function formatPrice(v: number, currency = siteConfig.commerce.currency) { return v === 0 ? "Free" : `${currency}${v.toLocaleString("en-NG")}`; }
export function cn(...c: (string | false | null | undefined)[]) { return c.filter(Boolean).join(" "); }
export function formatLabel(f: string) {
  return ({ "one-on-one": "1:1 coaching", group: "Small group", intensive: "Intensive", advisory: "Fractional advisory" } as Record<string, string>)[f] ?? f;
}
export function levelLabel(l: string) {
  return ({ founder: "Founders", "senior-leader": "Senior leaders", team: "Leadership teams", board: "Boards" } as Record<string, string>)[l] ?? l;
}
