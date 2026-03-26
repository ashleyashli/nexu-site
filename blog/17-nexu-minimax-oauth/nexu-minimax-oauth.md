---
id: ann-minimax-oauth
slug: nexu-minimax-oauth
category: Announcements
title: "nexu Now Supports MiniMax OAuth — Connect in One Click"
date: "MAR 26 '26"
cover: blog-release-v017.png
featured: false
---

# nexu Now Supports MiniMax OAuth — Connect in One Click

> One-click MiniMax model access in nexu. No API key, no manual configuration — sign in with your MiniMax account and start using MiniMax models across all your IM channels.

## What Changed

nexu, the simplest open-source OpenClaw desktop client, adds **MiniMax OAuth** in v0.1.7 — a streamlined sign-in flow that connects your MiniMax account to nexu in one click. The provider UI has been redesigned for clarity, so you can see your connection status, active models, and usage at a glance.

Before this, connecting MiniMax models required obtaining an API key from the MiniMax developer platform, copying it into nexu's settings, and troubleshooting formatting issues. OAuth eliminates all of that.

## Who This Is For

**MiniMax users in China** — if you use MiniMax models for Chinese-language tasks (content generation, customer support, translation), you can now bring those models into nexu and deploy them across WeChat and Feishu without managing API keys.

**Teams evaluating domestic AI providers** — if you're comparing model providers for Chinese-market workflows, MiniMax OAuth lets you test MiniMax models in nexu alongside other providers (OpenAI, Z.AI, etc.) with zero configuration overhead.

## How to Connect

1. Open nexu and go to **Settings → Providers**.
2. Find **MiniMax** in the provider list.
3. Click **"Sign in with MiniMax"**.
4. Authorize nexu in the MiniMax login window.
5. Done — MiniMax models appear in your model selector.

![nexu Settings showing MiniMax provider with OAuth Login tab and MiniMax model list](img/blog-minimax-oauth-en.webp)

## What You Get

- MiniMax models available across all connected IM channels (WeChat, Feishu, Slack, Discord)
- Polished provider UI showing connection status, model list, and disconnect option
- Can be used alongside other OAuth providers (OpenAI) and BYOK providers simultaneously
- Disconnect anytime from Settings → Providers → MiniMax → "Disconnect"

## What It Doesn't Do

- Does not provide free MiniMax usage — your MiniMax account's plan and limits apply
- Does not include MiniMax-specific skills — standard OpenClaw skills work with any model

## Get Started

Download [nexu v0.1.7](https://github.com/nexu-io/nexu/releases/tag/v0.1.7) or update in-app. Available for macOS (Apple Silicon). Windows and Intel Mac support is in development.

Source: [GitHub Releases — nexu v0.1.7](https://github.com/nexu-io/nexu/releases/tag/v0.1.7)
