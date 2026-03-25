---
id: guide-wechat
slug: how-to-connect-wechat-ai-agent
category: Guides
title: "Channel Setup: Connect Your AI Agent to WeChat in 5 Minutes"
date: "MAR '26"
cover: blog-guide-wechat.png
featured: false
---

# Channel Setup: Connect Your AI Agent to WeChat in 5 Minutes

> Scan one QR code — that's it. Use nexu's ClawBot plugin to run your AI agent directly in personal WeChat, no API keys or servers needed.

With nexu, connecting your AI agent to personal WeChat takes one QR code scan and under 5 minutes. No public server, no API keys, no WeChat developer account.

## Prerequisites

WeChat version ≥ 8.0.7 (minimum version supporting the ClawBot plugin). macOS 12+ (Apple Silicon).

## Step 1: Update WeChat to 8.0.7

Open WeChat and update to version 8.0.7 or higher. This is the minimum version that supports the ClawBot plugin.

## Step 2: Download and Install nexu

Go to [nexu.io](https://nexu.io/) and click "Download Mac Client".

![nexu download page](wechat-step1-download.webp)

Open the .dmg file and drag the nexu icon into your Applications folder.

![Drag nexu to Applications](wechat-step1-install.webp)

## Step 3: Launch nexu and Log In

On the welcome screen, choose your login method. "Use your Nexu account" (recommended) gives you free access to Claude, GPT, Gemini and more — no API key needed. "Use your own models (BYOK)" lets you bring your own API keys without creating an account.

![nexu login screen](wechat-step2-login.webp)

## Step 4: Select WeChat Channel

After logging in, on the nexu home screen, click "WeChat" in the "Choose a channel to get started" area.

![Choose WeChat channel](wechat-step3-choose-wechat.webp)

## Step 5: Scan the QR Code

In the "Connect WeChat" dialog, click the green "Scan to Connect" button.

![WeChat connect dialog](wechat-step4-connect-dialog.webp)

nexu automatically installs the WeChat ClawBot plugin and generates a QR code. The screen shows "Waiting for scan...".

![QR code scan screen](wechat-step4-scan-qrcode.webp)

Open WeChat on your phone, use the built-in scanner, scan the QR code, and confirm the connection on your phone.

## Step 6: Connection Successful

After confirming, the WeChat channel on nexu's home screen shows "Connected" status.

![WeChat connected](wechat-step5-connected.webp)

## Step 7: Chat in WeChat

Open WeChat — you'll see a conversation called "WeChat ClawBot". Send it a message and your OpenClaw Agent will reply directly in the chat. Available on your phone anytime, anywhere.

![Chat with ClawBot in WeChat](wechat-step6-chat.webp)

## FAQ

**Do I need a public server?** No. nexu connects through the ClawBot plugin directly — no public IP or callback URLs needed.

**Do I need an enterprise WeChat or official account?** No. WeChat 8.0.7 natively supports ClawBot — personal WeChat is all you need.

**Will my account get banned?** No. ClawBot is an official WeChat plugin, fully compliant.

**What if my computer sleeps?** Keep nexu running in the background with your Mac awake, and your agent responds 24/7.

**Can I connect other channels too?** Yes. nexu supports WeChat, [Feishu](#how-to-deploy-feishu-ai-bot), [Slack](#how-to-setup-slack-ai-agent), and [Discord](#how-to-add-discord-ai-bot) simultaneously.

