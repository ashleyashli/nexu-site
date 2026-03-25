---
id: guide-models
slug: how-to-configure-ai-models-nexu
category: Guides
title: "Model Setup: Claude, GPT & Gemini in One Client"
date: "MAR '26"
cover: blog-guide-models.png
featured: false
---

# Model Setup: Claude, GPT & Gemini in One Client

> Free hosted models or bring your own API key — switch between Claude, GPT, Gemini, and more with one click, no workflow disruption.

nexu supports two model access methods: Nexu Official (hosted, login to use) and BYOK (bring your own API Key). Both can be switched at any time without affecting existing conversations or channel connections.

## Step 1: Open Settings

Click "Settings" in the left navigation bar to enter the AI Model Providers page.

![Settings page](nexu-settings-open.webp)

## Option A — Nexu Official (Recommended)

Select "Nexu Official" in the provider list, click "Sign in to Nexu." After logging in, Claude Sonnet 4.6, Claude Opus 4.6, Claude Haiku 4.5 and more are immediately available — no API key configuration needed.

![Nexu Official models](nexu-models-official.webp)

## Option B — Bring Your Own Key (BYOK)

Select Anthropic, OpenAI, Google AI, or another provider. Paste your API key, optionally modify the API Proxy URL, click "Save." nexu auto-validates and loads available models. Your key stays on your local machine — it never touches nexu's servers.

![BYOK configuration](nexu-models-byok.webp)

## Step 3: Select Active Model

In the "Nexu Bot Model" dropdown at the top, select the model for your agent. Switch across providers anytime — mid-project — without affecting existing conversations.

![Model selector](nexu-model-select.webp)

## Supported Providers

Anthropic (Claude, sk-ant-...) · OpenAI (GPT, sk-...) · Google AI (Gemini, AIza...) · xAI (Grok, xai-...) · Custom (any OpenAI-compatible endpoint for self-hosted models or proxies).

## Best Practices

Use minimum-privilege API keys. Never expose keys in screenshots, tickets, or git commits. Click "Verify Connection" before saving a BYOK provider. Use Custom provider type for proxies, self-hosted gateways, or OpenAI-compatible inference services.

## FAQ

**Which method should I start with?** Nexu Official — log in and use high-quality models instantly, zero configuration.

**Can I configure multiple BYOK providers?** Yes. Anthropic, OpenAI, Google AI etc. can be configured independently and switched via the top model dropdown.

**Does my API key get uploaded to nexu servers?** No. API keys are stored only on your local device.

