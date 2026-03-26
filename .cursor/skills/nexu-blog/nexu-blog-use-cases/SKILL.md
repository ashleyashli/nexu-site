---
name: nexu-blog-use-cases
description: >-
  Drafts Nexu blog use-case stories: scenario walkthroughs, dogfood stories,
  community spotlights, and customer case studies. Use when writing or revising
  Nexu blog posts in the Use Cases section — any content where the protagonist
  is a user (or team) achieving an outcome with nexu, not nexu itself.
---

# Nexu Blog — Use Cases

This skill walks you through writing any nexu use-case post from scratch.
The protagonist is always **the user**, not the product. nexu is the enabler.
Complete every step in order. Do not skip ahead to drafting.

---

## How to Start

Type one of these prompts in Cursor chat to activate this skill.
Pick the one closest to your situation:

**When you know the scenario:**

- "Write a nexu use case: [persona] uses nexu to [outcome] via [channel]."
- "Write a scenario walkthrough for running a WeChat customer service bot with nexu."
- "Write a dogfood story about how the nexu team uses nexu for [task]."
- "Write a community spotlight about @[username]'s [project] built with nexu."

**When you have a real customer:**

- "Write a nexu customer case study for [company name]. Here's the brief: [paste]."

**When you're not sure which type:**

- "I want to write a nexu use case about [topic]. Which type should I use?"
- "Here's what I know: [paste bullet points]. Walk me through the rest."

**When you only have a keyword:**

- "The keyword '[keyword]' is trending. Write a use case that targets it."

In every case, the skill will start at Step 0 (classify the type) and walk
you through each step. If inputs are missing, it will ask you to collect
them before drafting.

---

## Step 0: Classify the Use Case Type

Pick exactly one type before doing anything else.

```
START HERE
│
├─ Do you have a real customer (external company or individual)
│  who agreed to be featured with their name, metrics, and quotes?
│  → YES → Type D: Customer Case Study
│
├─ Do you have a real community member (GitHub user, Discord user,
│  forum poster) who built something with nexu that you want to showcase?
│  → YES → Type C: Community Spotlight
│
├─ Is this about the nexu team using nexu itself?
│  (internal workflow, internal automation, dogfooding)
│  → YES → Type B: Dogfood Story
│
└─ Otherwise → Type A: Scenario Walkthrough
   (a credible, detailed, reproducible scenario — no real customer
    needed, but it must be realistic and specific enough that a
    reader could replicate it in 10-30 minutes)
```

If you're unsure, start with Type A — it's always available and doesn't
require external permissions or customer sign-off.

---

## Step 1: Gather Inputs

Collect every item on the checklist for your type **before writing a
single word**. If any item is missing, flag it. Never invent names,
metrics, quotes, or workflow details.

### Type A — Scenario Walkthrough

```
□ Persona: who is the protagonist? (role, industry, team size)
   e.g. "freelance e-commerce seller, 1-person shop, sells on Taobao"
□ Channel: which IM channel is central? (WeChat / Feishu / Slack / Discord)
□ Pain point: what does this person struggle with today?
   Be specific — "replying to customer messages" not "customer service"
□ Before state: how do they handle it now? (manual, how long, how painful)
□ Setup steps: what does the reader need to do in nexu? (walk through it yourself first)
□ After state: what does the workflow look like once nexu is running?
□ Outcome: quantifiable if possible (messages/day, hours saved, response time)
   → If you can't quantify, describe the qualitative shift ("never miss a message at 3am")
□ Screenshots: key moments in the setup + the running agent in action
□ Limitations: what this scenario does NOT cover (be honest)
□ Links: relevant skill page, docs, or download link
```

### Type B — Dogfood Story

```
□ Team context: which nexu team/person, what's their daily workflow?
□ Problem: what internal task was painful or manual?
□ What was tried before: any tools or approaches used previously?
□ Setup: how did you configure nexu for this? (channel, skills, model)
□ What happened: concrete results — messages handled, time saved, surprises
□ What didn't work: honest account of friction or limitations
□ What you'd do differently: lessons learned
□ Screenshots: the actual setup (real, not staged)
□ Links: relevant internal docs or public-facing resources
```

### Type C — Community Spotlight

```
□ User identity: handle, platform (GitHub / Discord / forum), consent obtained?
□ Project summary: what did they build? (1-2 sentences)
□ Motivation: why did they build it?
□ How it works: their setup — channel, skills, model, any custom config
□ Quote: direct words from the user (from their post, interview, or DM — with permission)
□ Link to their work: GitHub repo, forum post, or demo
□ Screenshots: their screenshots preferred; ask for permission to use
□ Your editorial angle: why is this project interesting to the broader community?
```

### Type D — Customer Case Study

```
□ Company name and logo (permission confirmed for blog use)
□ Company context: what they do, scale, industry
□ Champion: who at the company drove adoption? (name + role, with permission)
□ Challenge: the business problem, with specifics (hours/week, cost, scale)
□ Why nexu: what made them choose nexu over alternatives?
□ Implementation: what they set up (channels, skills, models, team structure)
□ Results: 2-3 hard metrics (time saved, messages handled, cost reduced, etc.)
   → MUST be from the customer, not estimated by us
□ Customer quote: 1-2 direct quotes, approved for publication
□ What's next: their planned expansion or future use
□ Approval: customer has reviewed and approved the final draft
```

---

## Step 2: Write the Opening

Write exactly two elements:

1. **Hook sentence** — a specific, concrete pain point the protagonist faces.
   NOT "managing customer messages is hard." YES "She was replying to 200
   Taobao buyer messages a day from her phone, and still missing half of them
   after midnight."

2. **Outcome sentence** — what changed, stated from the user's perspective.
   NOT "nexu automates customer service." YES "Now her WeChat agent handles
   the midnight rush while she sleeps."

### Gate

Re-read the opening. If it starts with any of these, rewrite:

- "In today's fast-paced world…"
- "nexu is a powerful tool that…"
- "Many businesses struggle with…"
- Any sentence where nexu is the grammatical subject

The **user** is the subject. nexu is the tool they used.

### Voice by Type

| Type | Voice | Think of it as… |
|------|-------|-----------------|
| A: Scenario Walkthrough | Solution architect — practical, walks beside you | A colleague showing you their setup |
| B: Dogfood Story | Internal team member — honest, specific, informal | A Slack post to #general |
| C: Community Spotlight | Community journalist — curious, showcasing | An interview write-up |
| D: Customer Case Study | Business storyteller — outcome-focused, data-backed | A conference talk summary |

Maintain the selected voice throughout the entire post. Do not mix voices.

---

## Step 3: Draft the Body Using the Skeleton

Follow the H2 outline for your type. Keep each section focused. Use Cases are
about showing **what happened**, not explaining how the product works — if you
catch yourself writing a tutorial, stop and link to a guide instead.

### Type A — Scenario Walkthrough

```
1. [Opening — from Step 2: pain point + outcome]
2. Meet [persona name] (1 paragraph — who they are, what their day looks like)
3. The problem (specific pain, before-state with numbers or vivid detail)
4. The setup (step-by-step what they did in nexu — keep concise, link to
   full guide if >5 steps)
5. The workflow in action (what a typical day looks like now — show the agent
   responding, handling edge cases, or escalating)
6. The result (quantified outcome or qualitative shift)
7. Try it yourself (CTA: link to download + relevant skill/guide)
```

**Specs:** 1,000–1,500 words. Slug: `/blog/[persona-or-scenario]-with-nexu`.

### Type B — Dogfood Story

```
1. [Opening — from Step 2: our problem + what changed]
2. The context (what our team does, what was manual or broken)
3. What we tried first (optional — shows we didn't just reach for our own tool)
4. How we set it up (channel, skills, model — be specific, include config details)
5. What happened (honest results — good and bad)
6. What surprised us (unexpected behavior, edge cases, things we didn't plan for)
7. What we'd do differently (lessons for the reader)
8. Try it yourself (CTA: link to relevant guide or skill)
```

**Specs:** 800–1,200 words. Slug: `/blog/how-we-use-nexu-for-[task]`.

### Type C — Community Spotlight

```
1. [Opening — from Step 2: what they built + why it's cool]
2. Meet [handle] (who they are, what motivated the project)
3. The project (what it does, in their words where possible)
4. How it works (their setup — channel, skills, model, any clever tricks)
5. In their words (direct quote — the heart of the piece)
6. Check it out (link to their repo/post + CTA to try nexu)
```

**Specs:** 600–1,000 words. Slug: `/blog/community-[handle-or-project]`.

### Type D — Customer Case Study

```
1. Headline metrics (2-3 key numbers displayed prominently)
2. [Opening — from Step 2: company context + challenge]
3. The challenge (business problem with specifics — scale, cost, pain)
4. Why nexu (decision rationale — what they evaluated, why they chose nexu)
5. Implementation section 1: [Agent/workflow name]
   (problem → what they built → result with metric)
6. Implementation section 2: [Agent/workflow name]
   (problem → what they built → result with metric)
7. [Optional: Implementation section 3]
8. Overall impact (summary of combined results)
9. What's next (their expansion plans)
10. CTA: "See how nexu can work for your team"
```

**Specs:** 1,500–2,500 words. Slug: `/blog/how-[company]-uses-nexu`.

---

## Step 4: Apply SEO

Use Cases are **bottom-of-funnel** content — readers are looking for proof,
not education. Optimize for scenario-specific, long-tail keywords.

```
□ Title ≤ 60 characters, includes the persona or scenario + "nexu"
   Good: "How a Taobao Seller Automates Buyer Replies with nexu"
   Bad: "nexu Use Case: Customer Service Automation"
□ Meta description ≤ 155 characters, states the outcome
□ Primary keyword in: title + first paragraph + one H2
   → Target long-tail: "WeChat AI customer service bot" not "AI chatbot"
□ URL slug: short, lowercase, hyphenated, persona or scenario-oriented
□ ≥ 2 internal links placed naturally in body
   (1 related guide + 1 product/feature page or download link)
□ Images have descriptive alt text (describe what's happening, not "screenshot")
```

For deeper SEO work (keyword research, competitive analysis, content briefs),
defer to the `seo-content-specialist` skill.

---

## Step 5: Self-Review Checklist

Run through every item before submitting the draft.

```
REVIEW CHECKLIST
────────────────
□ Protagonist test
  → Is the user (not nexu) the protagonist throughout?
  → Does the reader see themselves in this person's situation?

□ Specificity test
  → No vague outcomes. "Saves time" → how much time?
  → "Handles messages" → how many messages? From which channel?
  → "Improved efficiency" → measured how?

□ Reproducibility test (Type A only)
  → Could a reader follow the setup and get a similar result?
  → Are all steps, skills, and channels mentioned by name?

□ Honesty test
  → Are limitations stated? (what it does NOT do)
  → Are friction points mentioned? (especially for Type B dogfood)
  → No invented metrics, no made-up personas presented as real

□ Fact verification
  → All company names, user handles, metrics, and quotes
     are verified against source material (not assumed)

□ Scope check
  → Is this still a use case?
  → If any section reads like a setup tutorial,
     cut it to a summary and link to a guide post
  → If any section reads like a product announcement,
     cut it and link to the relevant announcement

□ Length check
  → Type A (Scenario Walkthrough): 1,000–1,500 words
  → Type B (Dogfood Story):        800–1,200 words
  → Type C (Community Spotlight):   600–1,000 words
  → Type D (Customer Case Study):   1,500–2,500 words

□ CTA check
  → Type A: "Try it yourself" + link to guide/download
  → Type B: "Try it yourself" + link to guide/skill
  → Type C: "Check it out" + link to user's project + download
  → Type D: "See how nexu can work for your team" + contact/download

□ Channel specificity
  → Does the post make clear WHICH IM channel (WeChat / Feishu /
     Slack / Discord) is used? Use cases without a specific channel
     feel generic. Pin it down.

□ Low-value detail filter
  → Remove implementation trivia that doesn't help the reader
     understand the outcome (internal config keys, debug logs,
     version-specific workarounds that will be outdated next release)
```

---

## Global Rules (Apply to Every Use Case Post)

### Brand Keyword

Every blog post must naturally include the core brand keyword **at least once**
in the body text (not just the title or meta description):

- **English:** "the simplest open-source OpenClaw desktop client"
- **Chinese:** "最简单的开源龙虾桌面客户端"

Place it in the first or second paragraph using a dash appositive
(e.g. "nexu — the simplest open-source OpenClaw desktop client — lets…").
Do not force it into headings or repeat it unnaturally. Once per post is enough.

### Source Verification (Zero Hallucination)

After drafting, verify every factual claim against the original source material.

1. The user must provide a source URL or document (e.g. a customer interview,
   internal metrics doc, case study brief). If no source is provided, ask for one.
2. Cross-check every item in the draft — company names, metrics, quotes,
   workflow descriptions, before/after numbers — against that source.
3. If any detail cannot be confirmed from the source, **remove it or flag it**
   with `[UNVERIFIED — check with source]`. Never fill gaps with assumptions.
4. At the end of the draft, include a one-line source citation:
   `Source: [description](URL)`

### Strip Internal References

Do not include PR numbers (#NNN), issue numbers, commit hashes, or other
GitHub-internal references in published blog content. These are meaningful
to developers on GitHub but are noise for the blog audience.

### Image Format

All images (screenshots, diagrams, workflow visuals, before/after comparisons)
must be converted to `.webp` format before publishing. When preparing assets:

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
6. Both versions must pass the self-review checklist independently.

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
which use-case scenario to write next. Prioritize scenarios that
intersect with rising search demand.

---

## Quick Reference: Type Summary

| Type | When to use | Voice | Proof required | Length | CTA |
|------|-------------|-------|----------------|--------|-----|
| A: Scenario Walkthrough | Credible scenario, no real customer needed | Solution architect, practical | Reproducible steps + plausible outcome | 1,000–1,500 words | Try it yourself |
| B: Dogfood Story | nexu team uses nexu itself | Team member, honest | Real internal results + lessons | 800–1,200 words | Try it yourself |
| C: Community Spotlight | Real user built something cool | Community journalist | User's own words + screenshots | 600–1,000 words | Check it out |
| D: Customer Case Study | Real company, real metrics, approved | Business storyteller | 2-3 hard metrics + customer quote | 1,500–2,500 words | Contact / download |

### Persona × Channel Matrix (Topic Ideas)

Use this matrix to brainstorm scenario walkthrough topics. Pick a persona
row and a channel column — the intersection is a potential blog post.

| Persona | WeChat | Feishu | Slack | Discord |
|---------|--------|--------|-------|---------|
| Freelance consultant | Client Q&A bot | — | Project status bot | — |
| E-commerce seller | Buyer auto-reply | — | — | — |
| Small dev team | — | Standup + Bitable sync | Deploy alert bot | Community FAQ bot |
| Content creator | Fan interaction agent | — | — | Audience Q&A agent |
| Ops / admin | Internal HR Q&A | Approval workflow bot | Incident alert bot | — |

"—" means the combination is unlikely or forced. Don't write it.
Fill in new rows and columns as nexu adds channels and personas.
