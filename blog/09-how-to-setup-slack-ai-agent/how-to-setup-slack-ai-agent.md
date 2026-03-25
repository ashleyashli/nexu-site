---
id: guide-slack
slug: how-to-setup-slack-ai-agent
category: Guides
title: "Channel Setup: Set Up an AI Agent in Slack — One-Click App Creation"
date: "MAR '26"
cover: blog-guide-slack.png
featured: false
---

# Channel Setup: Set Up an AI Agent in Slack — One-Click App Creation

> Create a pre-configured Slack app with one link, paste two tokens, and your AI agent is live in every channel — under 5 minutes.

Only a Signing Secret and Bot Token needed to connect a Slack bot to nexu.

## Step 1: Create a Slack App

Click the manifest link in nexu's Slack setup guide. This opens Slack's app creation page with all 25+ permissions, event subscriptions, and URLs pre-configured.

Select your workspace, click "Next."

![Pick workspace](slack-step1-pick-workspace.webp)

Confirm the pre-configured permissions and URL, click "Create."

![Review and create](slack-step1-review-create.webp)

Click "Got It."

![App created](slack-step1-welcome.webp)

## Step 2: Get Your Signing Secret

In the Slack app dashboard, go to "Basic Information" → "App Credentials." Copy the Signing Secret.

![Signing Secret](slack-step2-signing-secret.webp)

## Step 3: Get Your Bot Token

Go to "Install App", click "Install to Workspace."

![Install app](slack-step3-install-app.webp)

Click "Allow" on the authorization page.

![Authorize](slack-step3-authorize.webp)

Copy the Bot User OAuth Token.

![Bot Token](slack-step3-bot-token.webp)

## Step 4: Enable Direct Messages

Go to "App Home" → "Show Tabs" → "Messages Tab", enable it, and check "Allow users to send Slash commands and messages from the messages tab."

![App Home settings](slack-step4-app-home.webp)

## Step 5: Connect in nexu

Paste your Bot User OAuth Token and Signing Secret in nexu's Slack configuration, click "Connect."

![Connect in nexu](slack-step5-nexu-connect.webp)

After connecting, click "Chat" to jump to Slack and start talking to your AI agent.

![Slack connected](slack-step5-connected.webp)

## FAQ

**Do I need to configure permissions manually?** No. The manifest link pre-configures all scopes and event subscriptions.

**Do I need a public server?** No. nexu handles event receiving automatically.

