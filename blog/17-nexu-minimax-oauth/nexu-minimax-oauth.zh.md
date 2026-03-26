---
id: ann-minimax-oauth
slug: nexu-minimax-oauth
category: Announcements
title: "nexu 现已支持 MiniMax OAuth——一键连接"
date: "2026年3月26日"
cover: blog-release-v017.png
featured: false
---

# nexu 现已支持 MiniMax OAuth——一键连接

> 在 nexu 中一键接入 MiniMax 模型。无需 API Key，无需手动配置——用 MiniMax 账号登录即可在所有 IM 渠道中使用 MiniMax 模型。

## 有什么变化

nexu——最简单的开源龙虾桌面客户端——在 v0.1.7 中新增 **MiniMax OAuth**，简化的登录流程，一键将 MiniMax 账号连接到 nexu。Provider UI 重新设计，连接状态、可用模型、使用情况一目了然。

之前要在 nexu 里接入 MiniMax，需要在 MiniMax 开发者平台获取 API Key、复制到设置里、还要排查格式问题。OAuth 把这些步骤全部省掉了。

## 适合谁

**国内 MiniMax 用户**——如果你用 MiniMax 模型做中文任务（内容生成、客户支持、翻译），现在可以把这些模型接入 nexu，部署到微信和飞书渠道，无需管理 API Key。

**正在评估国内 AI 供应商的团队**——如果你在比较不同模型供应商用于中国市场的工作流，MiniMax OAuth 让你在 nexu 中零配置成本地测试 MiniMax 模型，和 OpenAI、Z.AI 等供应商并行使用。

## 如何连接

1. 打开 nexu，进入 **Settings → Providers**。
2. 找到 **MiniMax**。
3. 点击 **"Sign in with MiniMax"**。
4. 在 MiniMax 登录窗口中授权 nexu。
5. 完成——MiniMax 模型已出现在模型选择器中。

![nexu 设置页面显示 MiniMax 供应商，OAuth 登录标签页和 MiniMax 模型列表](img/blog-minimax-oauth-zh.webp)

## 你会得到什么

- MiniMax 模型在所有已连接的 IM 渠道中可用（微信、飞书、Slack、Discord）
- 全新 Provider UI，清晰展示连接状态、模型列表和断开选项
- 可以和其他 OAuth 供应商（OpenAI）及 BYOK 供应商同时使用
- 随时可从 Settings → Providers → MiniMax → "Disconnect" 断开连接

## 不包含什么

- 不提供免费 MiniMax 用量——适用你的 MiniMax 账户方案和限制
- 不包含 MiniMax 专属 Skills——标准 OpenClaw Skills 适用于所有模型

## 开始使用

下载 [nexu v0.1.7](https://github.com/nexu-io/nexu/releases/tag/v0.1.7) 或在应用内检查更新。支持 macOS（Apple Silicon）。Windows 和 Intel Mac 支持正在开发中。

来源：[GitHub Releases — nexu v0.1.7](https://github.com/nexu-io/nexu/releases/tag/v0.1.7)
