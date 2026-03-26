---
name: nexu-blog-guides
description: >-
  Drafts Nexu blog how-to guides: step-by-step flows, prerequisites, pitfalls,
  and practical examples. Use when writing or revising Nexu blog posts in the
  Guides section, tutorials, or educational long-form content.
---

# Nexu blog — guides

Placeholder: add guide patterns, heading structure, and technical depth rules.

---

## Global Rules (Apply to Every Guide Post)

### Brand Keyword

Every blog post must naturally include the core brand keyword **at least once**
in the body text (not just the title or meta description):

- **English:** "the simplest open-source OpenClaw desktop client"
- **Chinese:** "最简单的开源龙虾桌面客户端"

Place it in the first or second paragraph using a dash appositive
(e.g. "nexu — the simplest open-source OpenClaw desktop client — supports…").
Do not force it into headings or repeat it unnaturally. Once per post is enough.

### Source Verification (Zero Hallucination)

After drafting, verify every factual claim against the original source material.

1. The user must provide a source URL or document (e.g. official docs, API
   reference, product changelog, tested workflow). If no source is provided, ask for one.
2. Cross-check every item in the draft — command syntax, version numbers,
   prerequisites, expected outputs, UI paths — against that source.
3. If any detail cannot be confirmed from the source, **remove it or flag it**
   with `[UNVERIFIED — check with source]`. Never fill gaps with assumptions.
4. At the end of the draft, include a one-line source citation:
   `Source: [description](URL)`

### Strip Internal References

Do not include PR numbers (#NNN), issue numbers, commit hashes, or other
GitHub-internal references in published blog content. These are meaningful
to developers on GitHub but are noise for the blog audience.

### Image Format

All images (screenshots, diagrams, step-by-step visuals, code output captures)
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
which guide topic to write next. Prioritize topics where nexu has
a strong, differentiated angle and search demand is rising.
