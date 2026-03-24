---
id: guide-discord
slug: how-to-add-discord-ai-bot
category: Guides
title: "Channel Setup: Add an AI Agent to Discord in 5 Minutes"
title_zh: "渠道配置：5 分钟把 AI Agent 加入 Discord 服务器"
date: "MAR '26"
date_zh: "2026年3月"
cover: blog-guide-discord.png
featured: false
---

# Channel Setup: Add an AI Agent to Discord in 5 Minutes

> Create a Discord application, enable Message Content Intent, invite the bot — your AI agent is ready for your community.

Only an Application ID and Bot Token needed to connect a Discord bot to nexu.

## Step 1: Create a Discord Application

Go to the [Discord Developer Portal](https://discord.com/developers/applications), click "New Application."

![](discord-step1-applications.webp)

Fill in the application name, click "Create."

![](discord-step1-create-app.webp)

Go to "General Information" and copy the Application ID.

![](discord-step1-general-info.webp)

In the left menu, go to "Bot", click "Reset Token", and copy the Bot Token.

![](discord-step3-bot-token.webp)

## Step 2: Connect in nexu

Paste your App ID and Bot Token in nexu's Discord configuration, click "Connect."

![](discord-step2-nexu-connect.webp)

## Step 3: Configure Permissions and Invite

Back in the Discord Developer Portal, in "Bot" page, enable "Message Content Intent" under Privileged Gateway Intents.

![](discord-step4-intents.webp)

Go to "OAuth2" → "URL Generator." Check "bot" and "applications.commands" under Scopes.

![](discord-step5-scopes.webp)

Under Bot Permissions, check: View Channels, Send Messages, Read Message History, Embed Links, Attach Files, Add Reactions, Use External Emojis, Use External Stickers.

![](discord-step5-permissions.webp)

Copy the generated URL at the bottom.

![](discord-step5-generated-url.webp)

Open the URL in your browser, select your server, click "Continue."

![](discord-step3-select-server.webp)

Confirm the permissions, click "Authorize."

![](discord-step3-authorize.webp)

## Step 4: Test

After connecting, click "Chat" in nexu to jump to Discord and start chatting with your AI bot.

![](discord-step4-connected.webp)

## FAQ

**Do I need a public server?** No. nexu uses Discord Gateway (WebSocket) — no public IP or callback URLs needed.

**Bot not responding?** Make sure Message Content Intent is enabled, otherwise the bot cannot read message content.

---

# 渠道配置：5 分钟把 AI Agent 加入 Discord 服务器

> 只需获取 Application ID 和 Bot Token，即可将 Discord 机器人接入 nexu。

只需获取 Application ID 和 Bot Token，即可将 Discord 机器人接入 nexu。

## 第一步：创建 Discord 应用

打开 [Discord Developer Portal](https://discord.com/developers/applications)，点击「New Application」。

![](discord-step1-applications.webp)

填写应用名称，点击「Create」。

![](discord-step1-create-app.webp)

进入「General Information」页面，复制保存 Application ID。

![](discord-step1-general-info.webp)

在左侧菜单进入「Bot」，点击「Reset Token」生成 Bot Token，复制保存。

![](discord-step3-bot-token.webp)

## 第二步：在 nexu 中填入凭证

打开 nexu 客户端，在 Discord 渠道配置中填入 App ID 和 Bot Token，点击「Connect」。

![](discord-step2-nexu-connect.webp)

## 第三步：配置权限并邀请机器人

回到 Discord Developer Portal，在「Bot」页面下方开启 Privileged Gateway Intents 中的 Message Content Intent。

![](discord-step4-intents.webp)

在左侧菜单进入「OAuth2」→「URL Generator」，勾选 Scopes 中的 bot 和 applications.commands。

![](discord-step5-scopes.webp)

在下方 Bot Permissions 中勾选：View Channels、Send Messages、Read Message History、Embed Links、Attach Files、Add Reactions、Use External Emojis、Use External Stickers。

![](discord-step5-permissions.webp)

复制页面底部生成的 URL。

![](discord-step5-generated-url.webp)

在浏览器中打开该 URL，选择你的服务器，点击「Continue」。

![](discord-step3-select-server.webp)

确认权限列表，点击「Authorize」，授权机器人加入。

![](discord-step3-authorize.webp)

## 第四步：测试

连接成功后，在 nexu 客户端点击「Chat」即可跳转到 Discord 与机器人对话 🎉

![](discord-step4-connected.webp)

## 常见问题

**需要公网服务器吗？**不需要。nexu 使用 Discord Gateway（WebSocket），无需公网 IP 或回调地址。

**机器人没有回复消息？**请确认已开启 Message Content Intent，否则机器人无法读取消息内容。

