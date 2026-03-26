---
id: ann-v017
slug: nexu-v017-oauth-stable-startup
category: Announcements
title: "nexu v0.1.7：一键 OAuth 登录，启动稳如磐石"
date: "2026年3月25日"
cover: blog-release-v017.png
featured: false
---

# nexu v0.1.7：一键 OAuth 登录，启动稳如磐石

> nexu——最简单的开源龙虾桌面客户端——现在支持一键登录 OpenAI 和 MiniMax，无需 API Key。v0.1.7 同时解决了白屏、渠道连接卡住、端口冲突等问题，无论上次如何关闭应用，启动都万无一失。

## 亮点

**🔑 OpenAI Codex OAuth** —— 如果你有 ChatGPT Plus 或 Pro 订阅，直接用 OpenAI 账号登录即可在 nexu 中使用 GPT 模型，无需单独配置 API Key。

**🔑 MiniMax OAuth** —— 一键 OAuth 登录使用 MiniMax 模型，Provider UI 全面优化。

**🚀 智谱 Z.AI 快捷方案** —— 快速接入 GLM 模型，支持全球/中国大陆地区切换。

**🔧 启动稳定性重建** —— 修复"白屏"、"打不开"、"渠道一直在连接中"等问题。启动流程现在能自动应对端口冲突、版本升级和强制退出恢复。

**🛡️ 服务自愈机制** —— launchd 集成全面重构：自动检测 plist 配置漂移，启动时清理残留服务，停止/启动按钮可靠运作。

## 谁会受益

**ChatGPT Plus/Pro 用户** —— 不用再找 API Key，直接用 OpenAI 账号登录就能使用 GPT 模型。

**升级后遇到白屏的用户** —— 启动流程现在能自动处理端口冲突、配置漂移和升级中断。

**经常强制退出的用户** —— 残留端口和僵尸进程在重启时自动清理。

## 新内容

**📖 微信接入指南** —— 新增英文版渠道配置文档。

**📖 Discord 指南更新** —— 更新截图并简化权限配置说明。

## Bug 修复

修复升级后应用白屏——plist 配置漂移现在自动检测并重新引导。

修复默认端口被另一个 nexu 实例占用时"渠道一直在连接"的问题。

修复停止按钮被 KeepAlive 忽略的问题——现在会正确注销服务。

修复 launchd 模式下停止/启动按钮灰色不可用的问题。

修复强制退出后残留 Web 端口——重启时自动检测已终止的 Electron PID。

修复 v0.1.6 数据丢失——会话、技能和渠道状态从错误目录迁移回来。

修复云端状态刷新时未处理的 rejection 崩溃。

修复 OAuth 断开连接后模型未从选择器中清除——现在正确删除 Provider 并同步。

修复模型列表显示已过期 OAuth Provider 的问题。

修复技能详情"返回"按钮总是重置到初始标签页的问题。

## UI 优化

技能页面在 URL 中保存当前标签页（你的/ClawHub），支持书签。

GitHub 导入标签页输入框设为只读（即将上线）。


## 如何开始

从 [GitHub releases 页面](https://github.com/nexu-io/nexu/releases/tag/v0.1.7) 下载 nexu v0.1.7，或在应用内检查更新。

连接 OpenAI OAuth：打开 设置 → Providers → OpenAI Codex → "Sign in with ChatGPT"，无需 API Key。

**现已发布**，支持 macOS（Apple Silicon）。Windows 和 Intel Mac 支持正在开发中。

## 贡献者

@lefarcen, @nettee, @qiongyu1999, @alchemistklk, @mrcfps。

完整变更日志：[v0.1.6...v0.1.7](https://github.com/nexu-io/nexu/compare/v0.1.6...v0.1.7)

来源：[GitHub Releases — nexu v0.1.7](https://github.com/nexu-io/nexu/releases/tag/v0.1.7)
