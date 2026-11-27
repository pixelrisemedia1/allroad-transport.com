# AllRoad Transport — Completion Checklist

Source: https://allroad-transport.com
Repository: pixelrisemedia1/allroad-transport.com
Status: IN PROGRESS — unchecked items are not verified complete.
Rule: Check an item only after comparing against the source or testing the public deployment and recording evidence in the commit/issue/notes.

## 1. Routes and source pages
- [ ] Home
- [ ] About
- [ ] Accessibility
- [ ] Account
- [ ] Blog
- [ ] Blog Post
- [ ] Contact
- [ ] Cookie Policy
- [ ] Get Quote
- [ ] Privacy Policy
- [ ] Security Policy
- [ ] Services
- [ ] Terms & Conditions
- [ ] Testimonials
- [ ] Track Order
- [ ] Services / Cargo Insurance
- [ ] Services / Multimodal
- [ ] Services / Rail Freight
- [ ] Services / Road Freight
- [ ] Services / Sea Freight

## 2. Images, video, documents and other media
- [ ] assets/hero-cargo.webp — exact hero subject, aspect ratio, focal point and overlay
- [ ] assets/logo.webp — logo, header/footer/mobile sizing
- [ ] assets/coastal-card.webp and assets/coastal-shipping.webp — card and detail placements
- [ ] assets/rail-card.webp — rail service card placement/crop
- [ ] assets/road-card.webp and assets/road-freight.webp — card and detail placements
- [ ] assets/sea-card.webp and assets/sea-freight.webp — card and detail placements
- [ ] Inventory source images for About, Blog, Blog Post, testimonials, account/track/quote illustrations, icons and all service pages; record every file and placement

## 3. Site-specific content and functionality
- [ ] Build all 19 listed routes as their own source-matching pages, not only homepage sections
- [ ] Implement quote form fields, validation, confirmation/error behavior and submission destination
- [ ] Implement Track Order lookup, loading, valid result, no-result and error states; connect to a real authorized data source or disclose unavailable
- [ ] Implement Account login/register/reset/profile flows only if they are part of the original working site
- [ ] Build Blog listing, individual Blog Post template, article content, author/date, related posts and pagination if present
- [ ] Recreate testimonials with exact source attribution and only genuine source testimonials
- [ ] Recreate each service detail page: scope, benefits, process, images, FAQs and CTA
- [ ] Recreate About, Contact, Accessibility, Cookie, Privacy, Security and Terms pages from source content
- [ ] Verify service menu/mobile navigation and breadcrumb/back links across all nested service routes

## Shared production acceptance checks
- [ ] Verify source route inventory against the live source and archived export; record date and evidence for each route.
- [ ] Compare each page at matching desktop, tablet and mobile viewports; record unresolved visual differences.
- [ ] Audit every image, logo, icon, video, poster, caption, document and embedded asset; verify local/independent URL, dimensions, crop, alt text and successful public loading.
- [ ] Confirm no Base44 media URLs, SDK/runtime, API, auth, storage, form or database dependency remains in the copied site or its public requests.
- [ ] Verify every navigation destination, CTA, form, menu, carousel, modal, filter and document link; no dead controls or fake success states.
- [ ] Verify accurate title/description/social metadata, favicon, headings, canonical URL plan, robots/sitemap when appropriate and not-found behavior.
- [ ] Check keyboard use, focus visibility, contrast, labels, alt text, reduced-motion, mobile touch targets and responsive reflow.
- [ ] Check spelling, dates, claims, addresses, phone numbers, email addresses, legal content and document versions against approved source material.
- [ ] Check browser console, failed network requests, broken links, 404s, image loading and performance on desktop/mobile.
- [ ] Verify GitHub Actions deployment succeeds; open the live deployed copy in a fresh session and directly load/refresh every route.
- [ ] Record final verification date, deployed commit, public URL, and any remaining limitation. Custom domain/DNS is intentionally deferred until requested.

## Verified audit notes — 2026-11-27
- [x] Inspected source homepage navigation and visible home sections. Source links include distinct pages, service dropdowns, account, blog, quote, tracking, legal pages, cookie consent, accessibility options, and chat.
- [x] Confirmed source home uses a Base44-hosted logo plus Unsplash photography; the copy needs to use its own local equivalents throughout.
- [x] Direct request to the copy's `/Home` path returned GitHub Pages 404 during this check.
- [ ] Compare root homepage and all source page routes side by side; route coverage and homepage parity remain open.
- [ ] Verify cookie preference persistence, accessibility controls, chat behavior, account, quote and tracking flows in the independent copy.

### AllRoad image verification detail
- [x] Source homepage image audit captured: one Base44-hosted logo repeated in header/footer and five unique Unsplash photographs (hero, shipping, road, rail, coastal; some reused in service panels).
- [ ] Match each copied local file to the exact source photograph and verify all source image placements, responsive crops and alt text; source image filenames are not evidence of a correct match.
