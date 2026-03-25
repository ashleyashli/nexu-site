---
id: ann-v016
slug: nexu-v016-faster-startup
category: Announcements
title: "nexu v0.1.6：启动速度提升 3 倍、后台模式、ClawHub 上线"
date: "2026年3月24日"
cover: blog-release-v016.png
featured: false
---

# nexu v0.1.6：启动速度提升 3 倍、后台模式、ClawHub 上线

> v0.1.6 冷启动从约 22 秒降至约 7 秒，新增后台模式保持机器人运行，推出 ClawHub 批量安装技能，服务崩溃自动恢复。

## 亮点

**⚡ 启动速度提升 3 倍**——冷启动从约 22 秒降至约 7 秒。后台模式下重新打开仅需约 200ms。

**🛡️ 服务崩溃自动恢复**——Controller 和 OpenClaw 现在作为独立系统服务运行。任一服务崩溃后自动恢复，无需重启应用。

**🎨 启动体验优化**——全新动画启动屏幕，状态显示"启动中 → 连接中 → 运行中"，不再闪烁"离线"状态。

## 新功能

**🔌 后台模式**——关闭应用窗口后机器人继续运行，从 Dock 即时重新打开（#405, #519）。

**🧩 ClawHub（原 Explore）**——支持批量技能安装和队列管理（#445, #477）。

**🔥 开发热重载**——编辑 Controller 代码，约 3 秒即可看到变化，无需重启（#519）。

**✨ UI 刷新**——微信官方 Logo、更新设计规范、改进云端连接流程（#503）。

**💬 会话聊天改进**——更好的消息展示和桌面工作区链接（#420）。

## Bug 修复

修复启动时显示"离线"状态的问题（#405）。

修复微信渠道显示通用"错误"而非"需要重新连接"的问题（#405）。

修复应用活跃时阻止屏幕休眠的问题（#436）。

## 开发者相关

`pnpm start` 现在自动监听 Controller 和 Web 源文件变更。开发状态完全隔离在 `.tmp/` 下，不与已安装的应用冲突。新增完整的启动流程文档。

## 🙌 新贡献者

@zoeforfun 在 #503 中做出了首次贡献。

贡献者：@lefarcen, @anthhub, @mrcfps, @alchemistklk, @nettee, @Siri-Ray, @zoeforfun, @qiongyu1999。

完整变更日志：[v0.1.5...v0.1.6](https://github.com/nexu-io/nexu/compare/v0.1.5...v0.1.6)

