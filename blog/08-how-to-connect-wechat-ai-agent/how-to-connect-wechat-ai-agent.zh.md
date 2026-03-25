---
id: guide-wechat
slug: how-to-connect-wechat-ai-agent
category: Guides
title: "渠道配置：5 分钟把 AI Agent 接入微信"
date: "2026年3月"
cover: blog-guide-wechat.png
featured: false
---

# 渠道配置：5 分钟把 AI Agent 接入微信

> 扫一次码就搞定。用 nexu 的 ClawBot 插件，在个人微信里直接运行 AI Agent，不需要 API Key，不需要服务器。

通过 nexu 客户端，只需扫一次码，即可将微信 OpenClaw 🦞 ClawBot 接入你的个人微信——全程不到 5 分钟。

## 前置条件

微信版本 ≥ 8.0.7（支持 ClawBot 插件的最低版本）。macOS 12+（Apple Silicon）。

## 第一步：更新微信至 8.0.7

在微信中将版本更新到 8.0.7 或更高版本。这是支持 ClawBot 插件的最低版本。

## 第二步：下载并安装 nexu

打开 [nexu 官网](https://nexu.io/)，点击「下载 Mac 客户端」。

![nexu 下载页面](wechat-step1-download.webp)

下载完成后，打开 .dmg 文件，将 Nexu 图标拖入 Applications 文件夹。

![拖入应用程序](wechat-step1-install.webp)

## 第三步：启动 nexu 并登录

在欢迎页面选择登录方式：Use your Nexu account（推荐）——使用 nexu 账号登录，即可免费使用 Claude、GPT、Gemini 等顶级模型。Use your own models (BYOK)——填入自己的 API Key，无需注册。

![登录界面](wechat-step2-login.webp)

## 第四步：选择微信渠道

登录后进入 nexu 首页，在「Choose a channel to get started」区域中点击 WeChat。

![选择微信渠道](wechat-step3-choose-wechat.webp)

## 第五步：扫码连接微信

弹出「连接微信」对话框后，点击绿色的「扫码连接」按钮。

![连接微信对话框](wechat-step4-connect-dialog.webp)

nexu 会自动安装微信 ClawBot 插件并生成二维码，页面显示「等待扫码...」。

![等待扫码](wechat-step4-scan-qrcode.webp)

打开手机上的微信，使用「扫一扫」扫描屏幕上的二维码，然后在手机上点击确认连接。

## 第六步：连接成功

扫码确认后，nexu 首页的微信渠道会显示已连接状态。

![微信已连接](wechat-step5-connected.webp)

## 第七步：在微信中对话

打开微信，你会看到一个名为「微信 ClawBot」的对话。直接发消息就能和你的 OpenClaw Agent 聊天——手机上随时随地可用，不受桌面限制。

![在微信中对话](wechat-step6-chat.webp)

## 常见问题

**需要公网服务器吗？**不需要。nexu 通过微信 ClawBot 插件直连，无需公网 IP 或回调地址。

**需要企业微信或公众号吗？**不需要。微信 8.0.7 原生支持 ClawBot 插件，个人微信即可使用。

**会不会被封号？**不会。ClawBot 是微信官方推出的插件，完全合规。

**手机和电脑都关了，Agent 还能回复吗？**需要保持 nexu 客户端运行。只要 nexu 在后台运行（电脑不休眠），Agent 就能 7×24 小时在线回复微信消息。

**可以同时接入多个渠道吗？**可以。nexu 支持同时连接[微信](#how-to-connect-wechat-ai-agent)、[飞书](#how-to-deploy-feishu-ai-bot)、[Slack](#how-to-setup-slack-ai-agent)、[Discord](#how-to-add-discord-ai-bot) 等多个渠道。

