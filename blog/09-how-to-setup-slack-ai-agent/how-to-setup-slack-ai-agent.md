---
id: guide-slack
slug: how-to-setup-slack-ai-agent
category: Guides
title: "Channel Setup: Set Up an AI Agent in Slack — One-Click App Creation"
title_zh: "渠道配置：一键创建 Slack AI Agent，零配置上手"
date: "MAR '26"
date_zh: "2026年3月"
cover: blog-guide-slack.png
featured: false
---

# Channel Setup: Set Up an AI Agent in Slack — One-Click App Creation

> Create a pre-configured Slack app with one link, paste two tokens, and your AI agent is live in every channel — under 5 minutes.

Only a Signing Secret and Bot Token needed to connect a Slack bot to nexu.

## Step 1: Create a Slack App

Click the manifest link in nexu's Slack setup guide. This opens Slack's app creation page with all 25+ permissions, event subscriptions, and URLs pre-configured.

Select your workspace, click "Next."

![](slack-step1-pick-workspace.webp)

Confirm the pre-configured permissions and URL, click "Create."

![](slack-step1-review-create.webp)

Click "Got It."

![](slack-step1-welcome.webp)

## Step 2: Get Your Signing Secret

In the Slack app dashboard, go to "Basic Information" → "App Credentials." Copy the Signing Secret.

![](slack-step2-signing-secret.webp)

## Step 3: Get Your Bot Token

Go to "Install App", click "Install to Workspace."

![](slack-step3-install-app.webp)

Click "Allow" on the authorization page.

![](slack-step3-authorize.webp)

Copy the Bot User OAuth Token.

![](slack-step3-bot-token.webp)

## Step 4: Enable Direct Messages

Go to "App Home" → "Show Tabs" → "Messages Tab", enable it, and check "Allow users to send Slash commands and messages from the messages tab."

![](slack-step4-app-home.webp)

## Step 5: Connect in nexu

Paste your Bot User OAuth Token and Signing Secret in nexu's Slack configuration, click "Connect."

![](slack-step5-nexu-connect.webp)

After connecting, click "Chat" to jump to Slack and start talking to your AI agent.

![](slack-step5-connected.webp)

## FAQ

**Do I need to configure permissions manually?** No. The manifest link pre-configures all scopes and event subscriptions.

**Do I need a public server?** No. nexu handles event receiving automatically.

---

# 渠道配置：一键创建 Slack AI Agent，零配置上手

> 只需获取 Signing Secret 和 Bot Token，即可将 Slack 机器人接入 nexu。

只需获取 Signing Secret 和 Bot Token，即可将 Slack 机器人接入 nexu。

## 第一步：创建 Slack 应用

点击 nexu Slack 配置指南中的 manifest 链接，使用预配置的 manifest 一键创建 Slack 应用（权限、事件订阅等已自动配好）。

选择要安装到的 Workspace，点击「Next」。

![](slack-step1-pick-workspace.webp)

确认预配置的权限和 URL，点击「Create」。

![](slack-step1-review-create.webp)

创建成功后，点击「Got It」。

![](slack-step1-welcome.webp)

## 第二步：获取 Signing Secret

进入「Basic Information」→「App Credentials」，复制保存 Signing Secret。

![](slack-step2-signing-secret.webp)

## 第三步：获取 Bot Token

在侧边栏进入「Install App」，点击「Install to Workspace」。

![](slack-step3-install-app.webp)

在授权页面点击「允许」。

![](slack-step3-authorize.webp)

复制保存 Bot User OAuth Token。

![](slack-step3-bot-token.webp)

## 第四步：开启私信

在侧边栏进入「App Home」，向下找到「Show Tabs」→「Messages Tab」，确认已开启，并勾选「Allow users to send Slash commands and messages from the messages tab」。

![](slack-step4-app-home.webp)

## 第五步：在 nexu 中填入凭证

打开 nexu 客户端，在 Slack 渠道配置中填入 Bot User OAuth Token 和 Signing Secret，点击「Connect」。

![](slack-step5-nexu-connect.webp)

连接成功后，点击「Chat」即可跳转到 Slack 与机器人对话 🎉

![](slack-step5-connected.webp)

## 常见问题

**需要手动配置权限吗？**不需要。通过上方链接创建的应用已自动配置好所有权限和事件订阅。

**需要公网服务器吗？**不需要。nexu 会自动处理事件接收，无需额外配置回调地址。

