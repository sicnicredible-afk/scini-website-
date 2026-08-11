# Product Requirements Document
## SICNI / SIRAC Digital Platform

**Status:** Draft v1.0
**Owner:** SICNI Executive Committee
**Prepared for:** Social Impact Catalyst Network Initiative (SICNI) & Social Impact Research & Analytics Center (SIRAC)

---

## 1. Overview

SICNI is a non-partisan leadership-development organization; SIRAC is its technical research and analytics arm. Neither institution currently has a digital presence that reflects the scale of their work — nationwide field operations across 36 states and the FCT, five flagship leadership programs, and an institutional client base spanning governments, UN agencies, NGOs, foundations, and corporates.

This PRD defines the requirements for a public website that serves as the primary digital front door for both institutions: a credibility asset for winning institutional trust, a lead-generation channel for commissioned research and partnerships, and a knowledge home for published findings.

---

## 2. Problem Statement

- **No verifiable public presence.** Prospective clients (governments, UN agencies, donors) currently have no way to independently evaluate SICNI/SIRAC's credibility, methodology, or track record before a first conversation.
- **Two institutions, one confusing story.** SICNI (leadership empowerment) and SIRAC (research arm) are distinct but interdependent; without a unifying platform, partners struggle to understand who does what.
- **No inbound channel.** Partnership, funding, and research-commissioning inquiries currently rely entirely on personal networks and offline introductions — there's no self-serve way for an interested organization to start a conversation.
- **No home for published research.** Reports, indices (e.g. LPPI, SALGPI), and tracking-study findings have no durable, linkable public record.

---

## 3. Goals & Success Metrics

| Goal | Metric | Target (6 months post-launch) |
|---|---|---|
| Establish institutional credibility | Avg. time on About/SIRAC/Leadership pages | > 90 seconds |
| Generate qualified inbound leads | Contact form submissions from institutional email domains (.gov, .org, .un.org, etc.) | 15+/month |
| Drive Tracking Study sign-ups | "Join the tracking study" CTA clicks → form completions | 10% conversion |
| Support press/partner credibility checks | Organic search impressions for "SICNI" / "SIRAC" | 500+/month |
| Reduce time-to-first-response on inquiries | Form submission → team response | < 48 hours |

### Non-goals (out of scope for v1)
- E-commerce or paid report purchases
- Client login portal / dashboard access to raw data
- Multi-language localization (English only for v1)
- Native mobile app

---

## 4. Target Users

| Persona | Description | Primary need |
|---|---|---|
| **Institutional Buyer** | Program officer at a UN agency, government MDA, or foundation evaluating research vendors | Verify credibility, methodology, past work, and reach the right contact quickly |
| **Policy / Media Researcher** | Journalist, academic, or policy analyst citing governance data | Find and cite specific reports, indices, and findings |
| **Prospective Partner** | NGO or private-sector org exploring collaboration | Understand SICNI's programs and how to get involved |
| **Prospective Team Member / Field Coordinator** | Researcher evaluating SIRAC as an employer or collaborator | Understand team, culture, and technical rigor |
| **Existing Client** | Organization mid-engagement or repeat client | Quick access to contact info and program details |

---

## 5. Scope: Pages & Functional Requirements

### 5.1 Home
- Communicate the SICNI ↔ SIRAC relationship within the first screen.
- Surface key credibility signals above the fold: national coverage (36 states + FCT), scale (50,000+ respondents in a single study), and program count.
- Link out to all five flagship programs and both institutional pages.
- Primary CTA: partnership/contact; secondary CTA: explore SIRAC.

### 5.2 About (SICNI)
- Founding story, vision, mission.
- Full core values (5) and objectives (5).
- Organizational structure: Board of Trustees → Executive Committee → execution teams.
- **Requirement:** structure content must be easy to update as the Board of Trustees roster grows ("work in progress" per source material).

### 5.3 SIRAC (Research Arm)
- Service portfolio across four pillars: Research, MEL, Data Science & Analytics, Policy & Governance Advisory.
- Methodology (quantitative/qualitative/mixed).
- 12-step quality assurance framework.
- Digital tools and sector expertise.
- National coverage messaging (6 geopolitical zones).

### 5.4 Programs
- Detail all five flagship programs (SALGPI, Leadership Performance Scorecard & Awards, Credible Leadership Initiative, Voter Perception & Rating Surveys, Research & Public Analysis Reports) with purpose, features, and impact per program.
- Feature the Quarterly Leadership & Governance Tracking Study as the flagship recurring platform, with a dedicated sign-up CTA.
- Include Women & Gender Equality Research and SYLIP (youth) as secondary research streams.

### 5.5 Insights
- Ledger/index of selected past assignments (purpose + outcome).
- **v1:** static summary list. **v2 requirement:** each entry should support linking to a downloadable report or detail page once SIRAC publishes formal outputs.
- Client-type coverage (governments, UN agencies, NGOs, foundations, development partners, corporates).

### 5.6 Leadership
- Full team roster (Board, Executive Committee, Directors, Regional Coordinators, Research staff) with bios.
- **Requirement:** must be maintainable without a developer — see Section 7 (CMS).

### 5.7 Contact
- Static contact details (address, phone, email).
- Structured inquiry form with an "interest" field (commission research / join tracking study / partnership / funding / other) to enable lead routing.
- **v1:** form requires backend wiring to a live inbox or CRM (currently front-end only demo — see Section 9, Risks).

---

## 6. Non-Functional Requirements

- **Responsive:** fully usable from 360px mobile width through desktop.
- **Accessibility:** visible keyboard focus states, sufficient color contrast, respects `prefers-reduced-motion`.
- **Performance:** no external font/script dependencies that introduce failed network requests or render-blocking delays.
- **No fabricated data:** all statistics, program details, and bios must trace back to verified source material — nothing invented for effect.
- **Credibility-first design:** visual tone should read as institutional and evidentiary (data, governance, evidence), not promotional.

---

## 7. Content & CMS Requirements

The current v1 build is a static single-file site with hardcoded content. This is acceptable for launch but creates a maintenance risk:

- **Leadership roster** changes as staff join/leave and as the Board of Trustees list grows.
- **Program details** may be updated as SALGPI, the Scorecard, and the Tracking Study mature.
- **Insights/reports** will grow over time as SIRAC publishes new studies.

**Recommendation:** Phase 2 should move content (leadership bios, program copy, insights entries) into a lightweight CMS or structured data file so non-technical staff can update the site without engineering support.

---

## 8. Technical Requirements

- **v1:** static HTML/CSS/JS, single-page-application style client-side navigation (no page reloads), hash-based routing for shareable links.
- **Hosting:** any static host (Netlify, Vercel, GitHub Pages, or the client's existing web host).
- **Form backend:** requires integration with an email service (e.g. Formspree, a serverless function, or a CRM webhook) — not yet wired in v1.
- **Analytics:** not yet integrated — recommend adding a privacy-respecting analytics tool (e.g. Plausible, GA4) to measure the KPIs in Section 3.
- **Domain:** align with `www.sicnetworkinitiative.org` referenced in source material (note: distinct from the `sicnetworkinitiarive.org` domain used in the current contact email — this discrepancy should be resolved before launch, see Risks).

---

## 9. Risks & Open Questions

| Risk / Question | Impact | Suggested resolution |
|---|---|---|
| Contact form is currently front-end only (no backend) | Leads submitted go nowhere | Wire to email/CRM before launch |
| Email domain (`sicnetworkinitiarive.org`) and website domain (`sicnetworkinitiative.org`) don't match in source material | Confusing/untrustworthy to prospects | Confirm correct domain(s) with the client before publishing |
| One field leadership bio has an incomplete name in source material ("Director, Field Operations") | Incomplete team page | Confirm full name/title with SIRAC before publishing |
| No CMS — content changes require editing code | Slows down routine updates (new hires, new reports) | Scope CMS migration as Phase 2 |
| No analytics currently wired | Can't measure success metrics in Section 3 | Add analytics as part of launch checklist |
| Single language (English) | May limit reach in non-English-speaking regions of Africa | Evaluate demand before committing to localization |

---

## 10. Roadmap

**Phase 1 — Launch (current)**
Static site, all core pages, no backend integrations.

**Phase 2 — Operational readiness**
- Wire contact form to live inbox/CRM.
- Add analytics.
- Resolve domain/contact discrepancies.
- Confirm and complete all leadership bios.

**Phase 3 — Content scale**
- Move leadership, programs, and insights content into a CMS.
- Add downloadable/linkable report detail pages under Insights.
- Add a press/media kit section if inbound press inquiries increase.

**Phase 4 — Growth**
- Evaluate need for a client portal (tracking study subscribers viewing quarterly data).
- Evaluate multi-language support.

---

## 11. Stakeholders

- **Executive Director** (Clement Igenegba) — final approval authority.
- **Director, Research & Programme** (Emma C. Nduka) — content accuracy for programs/research.
- **Director, Reporting & Proposal Development** (Kunle Osanyegbemi) — messaging and report presentation.
- **Board of Trustees** — brand and governance sign-off.
