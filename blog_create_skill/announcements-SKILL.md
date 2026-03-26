---
name: nexu-blog-announcements
description: >-
  Write Nexu blog announcements across five types: funding/milestone,
  new capability, feature/improvement, pricing/packaging, and platform shift.
  Use when drafting, revising, or reviewing any Nexu blog post in the
  Announcements section — including release notes, product launches,
  fundraising news, pricing changes, UX redesigns, or "what's new" updates.
  Guides the writer from type classification through input gathering, drafting,
  SEO, and self-review. Pairs with seo-content-specialist for deeper SEO work.
---

# Nexu Blog — Announcements

This skill walks you through writing any Nexu announcement from scratch.
Complete every step in order. Do not skip ahead to drafting.

---

## How to Start

Type one of these prompts in Cursor chat to activate this skill.
Pick the one closest to your situation:

**When you know the announcement type:**

- "Write a Nexu funding announcement. We raised $[X]M Series [X]."
- "Write a Nexu feature announcement for [feature name]."
- "Write a Nexu pricing change announcement."
- "Write a Nexu new capability announcement for [capability name]."
- "Write a Nexu platform update announcement."

**When you're not sure which type:**

- "Write a Nexu announcement for: [paste the one-line summary of the news here]."
- "I need to announce [paste what happened]. Which announcement type should I use?"

**When you have a draft already:**

- "Review this Nexu announcement draft: [paste or attach the draft]."
- "Is this announcement the right type? [paste draft]."

**When you only have raw inputs:**

- "Here are the facts for a Nexu announcement: [paste bullet points of what you know]. Walk me through the rest."

In every case, the skill will start at Step 0 (classify the type) and walk you
through each step. If inputs are missing, it will ask you to collect them
before drafting.

---

## Step 0: Classify the Announcement Type

Pick exactly one type before doing anything else.

```
START HERE
│
├─ Is this about money the company raised, a major partnership,
│  or a company-level milestone (not a product feature)?
│  → YES → Type A: Funding / Milestone
│
├─ Is this about pricing, plan tiers, credits, or billing changes?
│  → YES → Type B: Pricing / Packaging
│
├─ Does the reader need to learn a brand-new mental model
│  before they can understand why this matters?
│
│  Litmus test: can you write the title as
│  "You can now [verb]" and the reader immediately gets it?
│
│  → If NO, the reader would say "wait, what is that?"
│    → Type C: New Capability
│
│  Examples that ARE new capabilities:
│    • Nexu introduces "AI procurement agents" for the first time
│      (readers have no model for what an AI agent does in procurement)
│    • Nexu launches OpenClaw as an open-source framework
│      ("OpenClaw" is an unknown; needs conceptual grounding)
│    • Nexu adds a "workspace" concept for team collaboration
│      (readers have never seen "workspaces" in Nexu before)
│
│  Examples that are NOT new capabilities (→ features instead):
│    • Agents can now auto-negotiate supplier pricing
│      (agents already exist; this is a new thing they can do)
│    • OpenClaw adds an invoice-parsing API endpoint
│      (OpenClaw already understood; incremental addition)
│    • Workspace now supports role-based permissions
│      (workspace concept already exists; enhancement)
│
├─ Is this a significant change to the product's overall look,
│  navigation, or platform direction — a "reintroduction"?
│  → YES → Type D: Platform / Vision Shift
│
└─ Otherwise → Type E: Feature / Improvement
   (includes UX theme changes, new color systems, design overhauls,
    new integrations, performance upgrades, and incremental ships)
```

If you are unsure which type applies, ask your manager. Do not guess.

---

## Step 1: Gather Inputs

Collect every item on the checklist for your type **before writing a single word**.
If any item is missing, flag it with your manager. Never invent dates, numbers,
customer names, or availability claims.

### Type A — Funding / Milestone

```
□ Funding amount and round name (e.g. "$20M Series A")
□ Lead investor and participating investors
□ Investor quote (approved for publication)
□ Customer logos approved for use (list which ones)
□ Key traction numbers (users, revenue milestone, growth %)
□ What the funding will be used for (1-2 sentences)
□ Team size and hiring link
□ Founder/CEO quote or voice notes for the narrative
□ Links: careers page, product page, press coverage
```

### Type B — Pricing / Packaging

```
□ What is changing (plan names, tiers, credits, pricing)
□ Why it is changing (1-2 sentences, user-benefit framing)
□ Old plan → new plan mapping (every tier, exact numbers)
□ Effective date
□ Grandfathering policy (who is exempt, for how long)
□ FAQ: 3-5 questions a current customer would ask
□ Link to updated pricing page
□ Link to support/contact for billing questions
```

### Type C — New Capability

```
□ Capability name (exact product terminology)
□ One-paragraph plain-language explanation of what it is
□ Why it exists — what user problem motivated it
□ How it works (mechanism, not marketing)
□ What it consists of (components, structure, parts)
□ Internal usage story or early-adopter anecdote
□ 2-3 concrete scenarios showing the capability in action
□ Limitations or known gaps
□ Tips for getting started
□ Risks or caveats (if applicable)
□ Link to docs, spec, or GitHub
□ Screenshot or diagram
```

### Type D — Platform / Vision Shift

```
□ What shifted and why (design philosophy, user feedback, market change)
□ What the product looked like / worked like before
□ What it looks like / works like now
□ Before/after screenshots or video
□ What users need to do (nothing / re-learn navigation / migrate)
□ What stayed the same (reassure existing users)
□ Link to docs or walkthrough
```

### Type E — Feature / Improvement

```
□ Feature name (exact product terminology)
□ One-sentence summary: "Users can now ______"
□ Who is affected (all users / admins / enterprise / specific role)
□ Availability: beta / GA / rolling out / region-limited
□ Date: when is it live or when does rollout start
□ 3 concrete scenarios where a real user would use this
□ Setup steps: does the user need to do anything to enable it?
□ Limitations or known gaps (what it does NOT do yet)
□ Screenshot or demo link
   → If this is a visual/UX change: before + after screenshots required
□ Link to docs or changelog
□ Internal links: 1 related blog post + 1 product page
```

---

## Step 2: Write the Opening Paragraph

Write exactly two sentences:

1. **Sentence 1** — answers "What can the user do now that they couldn't before?"
   (For funding: "What does this mean for users going forward?")
2. **Sentence 2** — says why that matters in the user's world, not yours.

### Gate

Re-read the paragraph. If it starts with any of these patterns, rewrite it:

- "We're excited to announce…"
- "After months of hard work…"
- "The team has been working on…"
- "[Company] is proud to…"

Lead with the reader's world, not the company's internal journey.

### Voice by Type

| Type | Voice | Think of it as… |
|------|-------|-----------------|
| A: Funding / Milestone | Founder — personal, mission-driven, we-language | A letter to your community |
| B: Pricing / Packaging | Ops — transparent, structured, zero spin | A clear memo to existing customers |
| C: New Capability | Product thinker — educational, builds understanding | A teacher introducing a new subject |
| D: Platform / Vision Shift | Designer/CEO — reflective, forward-looking | A "state of the product" address |
| E: Feature / Improvement | PM — practical, "you can now…" | A concise release note with context |

Maintain the selected voice throughout the entire post. Do not mix voices.

---

## Step 3: Draft the Body Using the Skeleton

Follow the H2 outline for your type. Each section should be 2-5 sentences.
If any section grows past a full screen, you are writing a guide, not an
announcement — stop and split the deep content into a separate guide post,
then link to it.

### Type A — Funding / Milestone

```
1. [Opening paragraph — from Step 2]
2. What we've built (product overview, 1-2 paragraphs)
3. Traction (named customers, numbers — not vanity metrics)
4. Why now (market timing, model improvements, strategic moment)
5. Investors and partners (lead investor quote, participant names)
6. The team (size, culture, what makes them special)
7. What's next (hiring, roadmap direction — no promises without dates)
```

### Type B — Pricing / Packaging

```
1. [Opening paragraph — from Step 2: lead with what's better for the user]
2. Why we changed pricing (user feedback, simplification rationale)
3. What's changing (plain-language summary of plan consolidation/changes)
4. Migration table (old plan → new plan, every tier, exact numbers)
5. FAQ (3-5 real questions: "Will I lose features?", "When does this take effect?")
```

### Type C — New Capability

```
1. [Opening paragraph — from Step 2]
2. What is [capability name]? (plain-language definition, no jargon)
3. How does it work? (mechanism — show don't tell, diagrams if possible)
4. What does it consist of? (components, folder structure, parts)
5. What does this mean for you? (2-3 concrete user impact statements)
6. Tips for getting started (practical first steps)
7. Risks or caveats (honest limitations, security notes if relevant)
```

### Type D — Platform / Vision Shift

```
1. [Opening paragraph — from Step 2]
2. Why we made this change (user feedback, design principles, data)
3. What's different (feature-by-feature or area-by-area walkthrough)
4. Before → After (screenshots side by side)
5. What stayed the same (reassurance for existing users)
6. How to get oriented (link to walkthrough or docs)
```

### Type E — Feature / Improvement

```
1. [Opening paragraph — from Step 2]
2. What's changing (user-visible behavior, not internal architecture)
3. Examples (3 concrete scenarios, each 2-3 sentences)
   → If UX/visual change: replace scenarios with before/after screenshots
     and lead with the design rationale (accessibility, speed, user feedback)
4. How to get started (setup steps, or "it's already live — no action needed")
5. Availability & timeline (beta/GA, regions, rollout dates)
6. What's next (optional — only if there's a confirmed follow-up)
```

---

## Step 4: Apply SEO

For **Feature**, **New Capability**, and **Platform Shift** types, SEO matters.
Run this checklist:

```
□ Title ≤ 60 characters, starts with action or outcome
□ Meta description ≤ 155 characters, one compelling sentence
□ Primary keyword in: title + first paragraph + one H2
□ URL slug: short, lowercase, hyphenated, no stop words
□ ≥ 2 internal links placed naturally in body
  (1 related blog post + 1 product/feature page)
□ Images have descriptive alt text
```

For **Funding** and **Pricing** types, SEO is secondary:

- Still write a clean title and meta description.
- Do not force keywords. Optimize for shareability and clarity instead.
- Internal links are still required (link to product page and careers/pricing page).

For deeper SEO work (keyword research, competitive analysis, content briefs),
defer to the `seo-content-specialist` skill's Step 3 SEO Checklist.

---

## Step 5: Self-Review Checklist

Run through every item before submitting the draft.

```
REVIEW CHECKLIST
────────────────
□ First-paragraph test
  → Does it answer "what does this mean for me?" in plain language?

□ Precision test
  → No vague adjectives without specifics
  → "faster" → how much faster? "improved" → what metric improved?
  → "soon" → give a date or say "date TBD"

□ Fact verification
  → All dates, dollar amounts, customer names, and availability claims
     are verified against source material (not assumed or rounded)

□ CTA match
  → Funding:          "we're hiring" + "try the product"
  → Pricing:          "see new pricing" + "contact support"
  → New capability:   "read the docs" + "try it"
  → Platform shift:   "explore the new experience" + "read the walkthrough"
  → Feature:          "here's how to turn it on" + "read the docs"

□ Nexu terminology
  → Product names, feature names, and legal terms are consistent
     with current official naming (check product docs if unsure)

□ Scope check
  → Is this still an announcement?
  → If any section reads like a tutorial or step-by-step guide,
     cut it down to a summary and link to a separate guide post.

□ Length check
  → Feature / Pricing:        ≤ 4 minutes read (~800-1000 words)
  → New Capability / Funding:  ≤ 6 minutes read (~1200-1500 words)
  → Platform Shift:            ≤ 5 minutes read (~1000-1200 words)

□ Internal links present
  → At least 1 blog post link + 1 product page link

□ Opening re-read
  → Read the first paragraph one final time out loud.
     If it sounds like a press release, rewrite it to sound like
     a message to someone who uses the product every day.

□ Low-value item filter
  → Remove trivial bug fixes and micro-polish that mean nothing
     to the reader: spacing tweaks, font adjustments, tooltip typos,
     internal disclaimer text changes, read-only input cosmetics, etc.
  → Rule of thumb: if a non-developer user would never notice the
     change, it does not belong in the public blog.
  → These items belong in the GitHub changelog, not the blog.
```

---

## Global Rules (Apply to Every Announcement)

### Brand Keyword

Every blog post must naturally include the core brand keyword **at least once**
in the body text (not just the title or meta description):

- **English:** "the simplest open-source OpenClaw desktop client"
- **Chinese:** "最简单的开源龙虾桌面客户端"

Place it in the first or second paragraph using a dash appositive
(e.g. "nexu — the simplest open-source OpenClaw desktop client — adds…").
Do not force it into headings or repeat it unnaturally. Once per post is enough.

### Source Verification (Zero Hallucination)

After drafting, verify every factual claim against the original source material.

1. The user must provide a source URL or document (e.g. a GitHub release page,
   internal product doc, Notion page, Slack thread). If no source is provided, ask for one.
2. Cross-check every item in the draft — feature names, dates, version numbers,
   contributor names, availability, limitations — against that source.
3. If any detail cannot be confirmed from the source, **remove it or flag it**
   with `[UNVERIFIED — check with source]`. Never fill gaps with assumptions.
4. At the end of the draft, include a one-line source citation:
   `Source: [description](URL)`

### Strip Internal References

Do not include PR numbers (#537), issue numbers (#544), commit hashes, or other
GitHub-internal references in the published blog content. These are meaningful
to developers on GitHub but are noise for the blog audience.

- Remove all `(#NNN)` references from the final draft.
- If a reader needs the technical reference, link to the full changelog at the
  bottom of the post instead (e.g. "Full Changelog: v0.1.6...v0.1.7").

### Image Format

All images (screenshots, diagrams, before/after comparisons) must be converted
to `.webp` format before publishing. When preparing assets for the blog:

- Convert PNG, JPG, and GIF source files to WebP.
- Use lossy WebP for photographs and screenshots (quality 80-85).
- Use lossless WebP for diagrams, icons, and text-heavy images.
- Keep the original source file for internal archives; only `.webp` goes live.
- All `<img>` tags and markdown image references must point to `.webp` files.

### Bilingual Output (English + Chinese)

Every finished blog post must be delivered in **both English and Chinese**.
When the draft is complete:

1. Finalize the English version first (all steps, review checklist passed).
2. Produce a Chinese (简体中文) version of the same post.
3. The Chinese version is **not a literal translation** — adapt idioms, examples,
   and tone to read naturally for a native Chinese audience.
4. Keep all product names, feature names, and technical terms in their original
   English form (e.g. "OpenClaw", "OAuth", "ClawHub"). Do not transliterate them.
5. Preserve the same H2 structure, internal links, and CTA placement.
6. Both versions must pass the Step 5 self-review checklist independently.

Deliver both versions clearly labeled: `## English Version` and `## 中文版本`.

### Topic Discovery (Trending × Relevance)

Before planning a new post, run this workflow to maximize SEO impact:

```
Step 1 — Scan trending keywords
  Use Google Trends, Ahrefs, SEMrush, or similar tools to find
  currently rising search terms in your domain (AI agents, desktop
  clients, automation, IM bots, OpenClaw ecosystem, etc.).
  Collect 10-20 candidates.

Step 2 — Score relevance to nexu
  For each keyword, ask: "Can nexu credibly speak to this topic?"
  Rate each 1-5:
    5 = core feature / direct capability
    4 = strong adjacent (e.g. nexu + WeChat automation)
    3 = tangential but linkable
    1-2 = no real connection → drop it

Step 3 — Pick the sweet spot
  Select keywords that are BOTH trending (search volume rising)
  AND high-relevance (score 4-5). These are your priority topics.
  A trending-but-irrelevant keyword wastes effort.
  A relevant-but-dead keyword won't drive traffic.

Step 4 — Map to content type
  For each selected keyword, decide which blog section fits:
    → Announcements: if it aligns with a ship or milestone
    → Guides: if the reader needs a how-to or comparison
    → Use Cases: if the reader wants proof it works in practice
```

Apply this workflow when planning content calendars or choosing
which announcement angle to emphasize for SEO.

---

## Quick Reference: Type Summary

| Type | When to use | Voice | Proof | CTA |
|------|-------------|-------|-------|-----|
| A: Funding / Milestone | Raised money, major partnership, traction milestone | Founder, personal | Named customers, investor quote, team size | Hiring + try product |
| B: Pricing / Packaging | Plan changes, credit adjustments, billing updates | Ops, transparent | Old vs new comparison table | See pricing + contact support |
| C: New Capability | Reader must learn a new concept before the news makes sense | Product thinker, educational | Internal usage story, diagrams, scenarios | Read docs + try it |
| D: Platform / Vision Shift | Product look/feel or direction fundamentally changed | Designer/CEO, reflective | Before/after screenshots | Explore new experience |
| E: Feature / Improvement | Incremental ship, new integration, UX redesign, performance upgrade | PM, practical | 3 user scenarios (or before/after for visual changes) | How to enable + docs |
