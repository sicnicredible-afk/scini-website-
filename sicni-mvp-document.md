# MVP Document
## SICNI / SIRAC Digital Platform — v1 Launch Scope

**Status:** Draft v1.0
**Related doc:** Product Requirements Document (SICNI/SIRAC Digital Platform)

---

## 1. Purpose of This Document

The PRD defines the full vision for the SICNI/SIRAC platform across multiple phases. This document answers a narrower question: **what is the smallest version of this site we can launch that still does its job?**

The job is: let an institutional visitor (government, UN agency, NGO, foundation) land on the site, believe SICNI/SIRAC is credible within two minutes, and have a working way to start a conversation. Everything in this document exists to serve that job. Anything that doesn't move that outcome is deferred.

---

## 2. MVP Success Criteria

The MVP is done when all of the following are true:

1. A first-time visitor can understand what SICNI and SIRAC each do within 10 seconds on the homepage.
2. A first-time visitor can find evidence of real, verifiable published research within 2 clicks of landing.
3. A visitor can submit an inquiry and it **actually reaches a person** (not a dead form).
4. The site works correctly on a mobile phone, not just desktop.
5. Nothing on the site is fabricated — every statistic, quote, and bio traces back to a real source document.

If any of these five are false, it is not ready to launch, regardless of how polished the visuals are.

---

## 3. In Scope for MVP (Must Ship)

### 3.1 Pages

| Page | Why it's MVP, not Phase 2 |
|---|---|
| **Home** | Primary entry point; must establish the SICNI/SIRAC relationship and surface credibility signals immediately. |
| **About (SICNI)** | Institutional buyers need to vet the parent organization before engaging. |
| **SIRAC** | The research arm is the actual product being sold to institutional clients — this page carries the most weight for conversion. |
| **Programs** | Explains what SICNI actually does (the 5 flagship programs) — required to answer "what would we be paying for." |
| **Published Research** | The single biggest credibility lever available. Without it, every claim on the site is unverifiable marketing copy. |
| **Leadership** | Institutional clients vet the people, not just the organization, before signing anything. |
| **Contact** | The entire point of the site is to generate a working inbound channel — this is non-negotiable for MVP. |

### 3.2 Homepage sections (must-have)

- Hero with the SICNI ↔ SIRAC framing
- Stat strip (36 states + FCT, 50,000+ respondents, 5 programs, etc.)
- "Two Institutions, One Purpose" section
- Flagship programs preview
- **Previous Research section** (already scoped and mocked up) — links to the full Published Research page
- Nationwide reach / coverage section
- Closing partnership CTA

### 3.3 Published Research page (must-have)

- Featured full survey report (SICNI Leadership Rating Polls, July 2025)
- The 3 thematic briefs (Governance & Trust, Gender & Leadership, Youth Leadership) with real stats from the source documents
- Working links/CTAs to contact the research team

### 3.4 Functional requirements

- **Contact form must be wired to a live inbox or CRM.** A front-end-only demo form does not satisfy MVP — this was flagged as a hard blocker in the PRD and it stays a blocker here.
- Mobile-responsive across all shipped pages.
- No broken external dependencies (e.g., the earlier Google Fonts network failure — confirm zero console errors before launch).
- Domain and contact email consistency resolved (the `sicnetworkinitiative.org` vs `sicnetworkinitiarive.org` discrepancy must be settled, not shipped as-is).

---

## 4. Explicitly Out of Scope for MVP (Deferred to Later Phases)

Cutting these is what makes this an MVP rather than the full PRD vision. None of them are required to prove the core value proposition on day one.

| Deferred item | Why it can wait |
|---|---|
| CMS / non-technical content editing | Static content is fine for launch; only becomes a problem once updates are frequent. |
| Downloadable PDF versions of every report | Linking to a "Read the findings" page is sufficient at launch; full document downloads can follow. |
| Analytics dashboard / detailed conversion tracking | Basic analytics (page views, form submits) is enough for MVP; deeper funnels come later. |
| Newsletter / email capture | Nice-to-have, not required to prove the core loop (visit → trust → inquiry). |
| Multi-language support | No signal yet that this is blocking a real client relationship. |
| Client portal / tracking-study dashboard | This is a Phase 4 feature in the PRD and assumes an MVP has already validated demand. |
| Press/media kit page | Only needed once press interest materializes. |
| Filter tabs on the Published Research page (All / Governance / Gender / Youth) | With only 4 documents total, filtering adds UI complexity without solving a real problem yet — add once the library grows past ~8-10 entries. |

---

## 5. What "Good Enough" Looks Like Per Page (MVP Bar)

This isn't a polish checklist — it's the minimum bar each page must clear:

- **Home:** A stranger can explain what SICNI/SIRAC does after reading it once.
- **About / SIRAC:** No unverified claims; all values, objectives, and services trace to source documents.
- **Programs:** All 5 flagship programs listed with purpose, features, and impact — no placeholder copy.
- **Published Research:** Every statistic matches the source docx/pptx exactly. No invented numbers.
- **Leadership:** Every bio is complete (the "Director, Field Operations" incomplete-name issue from the PRD must be resolved before this ships).
- **Contact:** A test submission from an external email actually arrives somewhere a human will see it within 48 hours.

---

## 6. Pre-Launch Checklist

- [ ] Contact form wired to live email/CRM and test-submitted successfully
- [ ] Domain/email discrepancy resolved and confirmed with the client
- [ ] All leadership bios complete and confirmed by SIRAC
- [ ] Zero console/runtime errors across all 7 pages (desktop + mobile)
- [ ] Every statistic on Home, SIRAC, Programs, and Published Research cross-checked against source documents
- [ ] Mobile nav, forms, and cards tested on an actual small viewport (not just browser resize)
- [ ] Basic analytics installed (page views + form submission events, at minimum)

---

## 7. Sequencing After MVP

Once the MVP ships and the checklist above is clear, the PRD's Phase 2–4 roadmap picks up in this order:

1. **Operational readiness** — CMS for leadership/programs/research content, analytics depth, downloadable report PDFs.
2. **Content scale** — filter/search on the Research page once volume justifies it, press kit if inbound press appears.
3. **Growth** — client portal, multi-language, if and when there's real signal (not before).

The rule of thumb: nothing in Phase 2+ gets pulled forward unless a real client interaction proves it's blocking a deal — not because it would be nice to have.
