---
id: guide-vs-clawx
slug: nexu-vs-clawx-openclaw-desktop
category: Guides
title: "nexu vs ClawX：哪款 OpenClaw 桌面客户端适合你？"
date: "2026年3月"
cover: blog-vs-comparison.png
featured: false
---

# nexu vs ClawX：哪款 OpenClaw 桌面客户端适合你？

> 两款都是开源的 OpenClaw 桌面客户端，都能让你不碰终端就运行 AI Agent。它们面向不同的使用场景。

nexu——最简单的开源龙虾桌面客户端——和 ClawX 的起点相同：在 OpenClaw 之上提供图形界面。但在你与 AI Agent 交互的方式上，两者走了不同的路。

| | nexu | ClawX |
|--|------|-------|
| **一句话定位** | 以 IM 为核心的 OpenClaw 客户端，内置微信、飞书、Slack、Discord；公测期间顶级模型免费 | OpenClaw 的桌面图形界面，内置技能市场和定时任务 |
| **协议** | MIT | MIT |
| **GitHub Stars** | 约 1k（2026 年 3 月） | 约 4.6k（2026 年 3 月） |
| **平台** | macOS（Apple Silicon）；Windows 和 Intel 即将推出 | macOS、Windows、Linux |
| **费用** | 客户端免费；公测期间模型免费；支持自带 API Key | 客户端免费；仅支持自带 API Key |

## IM 渠道支持

nexu 围绕 **IM 渠道作为主要交互界面**而设计。连接微信（通过 ClawBot 插件扫码即可）、飞书、Slack 或 Discord，你的 Agent 就住在你已有的聊天应用里。你在手机上、用平时用的 App 就能和 Agent 对话，不用学新工具、不用开新标签页。

ClawX 在桌面应用内提供内置聊天界面，支持多会话、Markdown 渲染和 `@agent` 路由。外部渠道方面支持 Telegram。飞书和钉钉适配已被社区在 GitHub Discussions 中提出，目前尚未支持。

![nexu 主页显示飞书已连接，微信、Slack、Discord 渠道](img/blog-nexu-channels-home.webp)

## 模型接入

nexu 在**公测期间免费提供托管模型**——Claude、GPT、Gemini、Kimi、GLM 等，登录即可使用，无需 API Key。你也可以随时切换到自带 API Key 模式，无需注册账号。

ClawX 采用纯 BYOK 模式。通过设置向导配置模型供应商，支持 10+ 供应商。密钥存储在系统钥匙串中。每位用户从第一天起自行管理 API Key 和账单。

![nexu 设置页面显示 nexu Official 供应商，7 个可用模型](img/blog-nexu-settings-models.webp)

## 技能生态

nexu 开箱即带**内置 OpenClaw Skills 和完整飞书 Skills**。v0.1.6 引入的 ClawHub 页面支持浏览和批量安装技能，也支持 zip 上传导入。

ClawX 提供内置技能市场，预装了文档处理和搜索技能。技能面板支持从多来源浏览安装。部分用户反馈某些技能在 ClawX 界面中无法被搜索到。

![nexu Skills 页面显示 18 个已安装技能和 ClawHub 标签页](img/blog-nexu-skills-clawhub.webp)

## 自动化

nexu 通过 IM 渠道工作流运行 Agent——飞书机器人基于事件触发，微信 Agent 在后台模式（v0.1.6 引入）下全天候响应。核心在于聊天内的持续在线，而非桌面端的定时任务。

ClawX 内置 Cron 页面，可配置基于时间的定时任务和触发器。Agent 可以按计划自动执行任务，无需人工触发。

## 平台支持

nexu 目前支持 macOS（Apple Silicon），Windows 和 Intel Mac 即将推出。ClawX 已提供 macOS、Windows、Linux 安装包。

## 稳定性

两款产品均在 2026 年初上线，迭代速度都很快。

nexu 在 v0.1.7 中解决了启动稳定性问题——修复升级后白屏、端口冲突、渠道卡连接和数据迁移问题。launchd 服务集成重建为自愈架构。新增 OpenAI 和 MiniMax 的 OAuth 登录简化了模型接入。

ClawX 用户反馈了会话数量增多后界面卡顿以及网关连接不稳定的问题——超时断连需重启网关、渠道突然断开。这些问题出现在 GitHub Discussions 中，目前仍是公开话题。

## 完整对比表

| 维度 | nexu | ClawX |
|------|------|-------|
| IM 渠道 | 微信、飞书、Slack、Discord——内置 | Telegram；飞书/钉钉尚未支持 |
| 模型接入 | 托管（公测免费）+ BYOK | 仅 BYOK（10+ 供应商） |
| 技能 | 内置 OpenClaw + 飞书 Skills；ClawHub | 技能市场；预装文档/搜索技能 |
| 自动化 | IM 内持续在线 + 后台模式 | 内置 Cron 页面，支持触发器和时间间隔 |
| 平台 | macOS（Apple Silicon）；Windows 和 Intel 即将推出 | macOS、Windows、Linux |
| GitHub Stars | 约 1k | 约 4.6k |
| 架构 | Electron + launchd 服务（自愈架构） | Electron 40+ / React 19；双进程 |
| 协议 | MIT | MIT |
| 费用 | 免费；公测期间模型免费 | 免费；BYOK 费用取决于供应商 |

## 哪款适合你？

如果你的工作流跑在**微信、飞书、Slack 或 Discord** 上——你希望 AI Agent 在已有的聊天应用里随时可用，登录即可免费使用顶级模型——nexu 就是为此设计的。

nexu 的核心优势是 **IM 原生部署**：Agent 住在你的对话里，而不是独立的桌面窗口中。结合公测期间免费的托管模型和 OpenAI、MiniMax 一键 OAuth，从安装到 AI Agent 上线，5 分钟以内。

ClawX 走的是桌面优先的路线，内置 Cron 定时任务。两款都是 MIT 开源、基于 OpenClaw，都在快速迭代。

## 试试 nexu

从 [GitHub releases 页面](https://github.com/nexu-io/nexu/releases/tag/v0.1.7)下载最新版本，或在应用内检查更新。支持 macOS（Apple Silicon），Windows 和 Intel Mac 支持正在开发中。

公测期间，顶级模型（Claude、GPT、Gemini、Kimi、GLM）**全部免费**，无需 API Key 即可开始使用。[访问 nexu.io →](https://nexu.io)
