# Iyabo Ogun — Template 11

A premium FinStore template for **executive coaches, consultants and advisors**. Booking-focused, senior-feeling, deliberately quiet.

Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**.
Design: **Fraunces** (italic display) + **Inter** (body). Stone cream + warm ochre accent.

## Pages
`/` Home · `/programs` All programs · `/programs/[slug]` Program detail (with process, outcomes, includes, who-for) · `/about` · `/contact` · `/faq` · `/booking` (calendar-style intro call flow) · `/thank-you`

## Customise
- **Brand & coach bio** → `lib/site-config.ts`
- **Programs & packages** → `mock/products.ts`
- **Testimonials** → `mock/testimonials.ts`
- **FAQs** → `mock/faqs.ts`
- **Design tokens** → `app/globals.css`

## Run
```bash
npm install && npm run dev
```
