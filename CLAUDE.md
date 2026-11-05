# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Front-end-only clone of https://fabula.meander.software ("Fabula | Tender Project", a tender/contractor portal), built with Next.js 14 (App Router), React 18, TypeScript and plain CSS. There is no backend, no auth and no test suite. `PAGE.CSV` is the original page/URL spec, and `design/*.png` are the reference screenshots (mostly 800px-wide mobile captures; `home.png` is the only desktop one).

## Commands

- `npm run dev`: dev server on port 3000.
- `npm run build`: production build. `npm start` serves it on port **4799**.
- `npm run lint`: `next lint` (`next/core-web-vitals`). Type check with `npx tsc --noEmit`.
- There are no tests, so there is no single-test command.

`next dev` and `next build` both use `.next/`. Running `rm -rf .next` or `next build` while a dev server is running breaks that server (500 errors on some routes). Stop the dev server first, or build with the dev server off.

`next/font/google` (Cormorant Garamond + Outfit in `src/app/layout.tsx`) fetches fonts at build time. A build can fail with `TypeError: Cannot read properties of null (reading '1')` when Google Fonts is unreachable. Retrying fixes it.

## Architecture

- **Data lives in JSON, not in components.** `src/data/*.json` (site, home, tenders, plans, faqs, legal, about, bids, messages, profile) are imported through the single loader `src/lib/data.ts`, which also exports `getTender`, `getRelatedTenders` and `formatMoney`. Pages read from there, so a future API only has to replace that layer. All content is sample data. `tenders.json` has 20 tenders with ids 1..20, and `generateStaticParams` for `/tenders-details/[id]` is built from it.
- **Two route trees with different shells:**
  - `src/app/(public)/` is the marketing site. Its `layout.tsx` wraps pages in `AuthProvider` + `Header` + `Footer`. Routes: `/`, `/tenders-list`, `/tenders-details/[id]` (+ `/bid`), `/pricing`, `/about-us`, `/contact`, `/faq`, `/terms-and-conditions`, `/cookies`, `/register`, `/login`.
  - `src/app/contractor/` is the dashboard. Its layout is `DashboardShell`, a sidebar (>= 1024px) / drawer shell with its own styles. `/contractor` redirects to `/contractor/profile`. These routes have **no auth guard**.
  - `src/app/layout.tsx` (root) loads fonts, `globals.css`, `CookieBanner` and `ScrollTopButton`. `src/app/not-found.tsx` is the 404 page.
- **Login is a modal, not just a page.** `components/auth/AuthProvider.tsx` holds modal state in context. `Header` and `RegisterForm` call `useAuth().openLogin()`. `/login` renders `OpenLoginOnMount`, which opens the modal, and closing it navigates back to `/`. Login and register are front-end only: any valid email "signs in" and pushes to `/contractor/profile`.
- **Forms do not submit anywhere.** `DemoForm` (public) and `dashboard/DbForm` (dashboard) just `preventDefault` and show a success message. Replace their `onSubmit` when a backend exists.
- **Redirects** are in `next.config.js`: the legacy `/terms&condition` URL (from `PAGE.CSV`) redirects to `/terms-and-conditions`.
- **Images:** photos are Unsplash placeholders in `public/images/` (IDs and pages in `public/images/CREDITS.md`). They are referenced from CSS `url("/images/...")`. Swap in real photos with the same file names. Tender and company logos are still grey placeholder circles.

## Styling conventions

Plain CSS with no UI library. `src/app/globals.css` holds the design tokens (`--dark`, `--lime`, `--sage`, `--brown`, ...), reset, typography and the shared pieces (`.btn*`, `.container`, header, footer, page hero, CTA band, `.acc*` accordion, cookie banner, `.field`). Page areas have their own CSS files in `src/styles/` with a **class prefix per area**, so they do not collide: `home-` (home.css), `tnd-` (tenders.css), `pg-` (pages.css), `db-` (dashboard.css), `au-` (auth.css). Each page or component imports its stylesheet itself. New area-specific styles should go in that area's file with its prefix. Only truly shared styles go in `globals.css`. The dashboard does not rely on global classes such as `.card` or `.table`.

Client components (`"use client"`) are only used where state is needed: header menu, accordions, tender search/filter/pagination (`TendersExplorer`), FAQ tabs, carousels, `MessagesView`, forms, auth.
