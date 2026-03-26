---
id: ann-zai-coding
slug: nexu-zai-coding-plan
category: Announcements
title: "nexu Adds Z.AI Coding Plan — GLM Models with Global/CN Region Toggle"
date: "MAR 26 '26"
cover: blog-release-v017.png
featured: false
---

# nexu Adds Z.AI Coding Plan — GLM Models with Global/CN Region Toggle

> Quick-setup for Zhipu Z.AI GLM models in nexu. Choose Global or CN region, enter your API key, and GLM models are ready to use across all your IM channels.

## What Changed

nexu, the simplest open-source OpenClaw desktop client, adds a **Z.AI Coding Plan** provider option in v0.1.7 — a streamlined setup flow for Zhipu's GLM models. The key addition is a **Global/CN region toggle** that lets you choose the API endpoint based on your location, so latency stays low whether you're in mainland China or overseas.

## Who This Is For

**Developers using Zhipu GLM models** — if GLM is your primary model for Chinese-language reasoning, code generation, or conversational AI, you can now connect it to nexu and deploy across WeChat, Feishu, Slack, and Discord.

**Teams that need region-specific endpoints** — the Global/CN toggle means you don't have to manually configure API base URLs. Select your region and nexu routes requests to the right endpoint automatically.

**Multilingual teams** — if your workflow spans both Chinese and international markets, combine Z.AI for Chinese-language tasks with OpenAI or other providers for English, all within the same nexu instance.

## How to Set Up

1. Open nexu and go to **Settings → Providers**.
2. Find **Z.AI Coding Plan** in the provider list.
3. Select your region: **Global** or **CN**.
4. Enter your Z.AI API key.
5. Done — GLM models appear in your model selector.

![nexu Settings showing GLM provider with Z.AI Coding Plan and Global/CN region toggle](img/blog-zai-coding-en.webp)

## What You Get

- GLM models available across all connected IM channels (WeChat, Feishu, Slack, Discord)
- Region toggle: Global (for overseas users) or CN (for mainland China) — lower latency, no manual URL config
- Can be used alongside other providers (OpenAI OAuth, MiniMax OAuth, BYOK) simultaneously
- Switch regions anytime from Settings → Providers → Z.AI

## What It Doesn't Do

- Does not include OAuth sign-in — Z.AI requires an API key (obtain from [open.bigmodel.cn](https://open.bigmodel.cn))
- Does not provide free Z.AI usage — your Z.AI account's plan and billing apply

## Get Started

Download [nexu v0.1.7](https://github.com/nexu-io/nexu/releases/tag/v0.1.7) or update in-app. Available for macOS (Apple Silicon). Windows and Intel Mac support is in development.

Source: [GitHub Releases — nexu v0.1.7](https://github.com/nexu-io/nexu/releases/tag/v0.1.7)
