---
id: guide-discord
slug: how-to-add-discord-ai-bot
category: Guides
title: "Channel Setup: Add an AI Agent to Discord in 5 Minutes"
date: "MAR '26"
cover: blog-guide-discord.png
featured: false
---

# Channel Setup: Add an AI Agent to Discord in 5 Minutes

> Create a Discord application, enable Message Content Intent, invite the bot — your AI agent is ready for your community.

All you need is an Application ID and a Bot Token to connect your Discord bot to nexu.

## Step 1: Create a Discord Application

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications) and click "New Application".

![Discord applications page](discord-step1-applications.webp)

2. Enter the application name and click "Create".

![Create application](discord-step1-create-app.webp)

3. On the "General Information" page, copy and save the **Application ID**.

![Application ID](discord-step1-general-info.webp)

4. In the left menu, go to "Bot", click "Reset Token" to generate a Bot Token, and copy it.

![Bot Token](discord-step3-bot-token.webp)

## Step 2: Add Credentials to nexu

Open the nexu client, enter the App ID and Bot Token in the Discord channel settings, and click "Connect".

![Connect in nexu](discord-step2-nexu-connect.webp)

## Step 3: Configure Permissions and Invite the Bot

1. Back in the Discord Developer Portal, on the "Bot" page, enable the following Privileged Gateway Intents: **Message Content Intent**.

![Message Content Intent](discord-step4-intents.webp)

2. In the left menu, go to "OAuth2". Under Scopes, select `bot`. Under Bot Permissions, select `Administrator`.

![Scopes and Bot Permissions](discord-step5-scopes.webp)

3. Copy the generated URL at the bottom of the page and open it in your browser.

![Generated URL](discord-step5-generated-url.webp)

4. Select your server and click "Continue".

![Select server](discord-step3-select-server.webp)

5. Confirm the permissions and click "Authorize" to add the bot.

![Authorize](discord-step3-authorize.webp)

## Step 4: Test

Once connected, click "Chat" in the nexu client to jump to Discord and chat with your bot 🎉

![Discord connected](discord-step4-connected.webp)

## FAQ

**Q: Do I need a public server?** No. nexu uses the Discord Gateway (WebSocket) — no public IP or callback URL required.

**Q: The bot doesn't reply to messages?** Make sure you've enabled Message Content Intent, otherwise the bot cannot read message content.

