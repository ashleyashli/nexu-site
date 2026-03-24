---
id: ann-v014
slug: nexu-v014-wechat-skills
category: Announcements
title: "nexu v0.1.4: WeChat Support, Skill Management & New Local Runtime"
title_zh: "nexu v0.1.4：支持微信、重构 Skill 管理、全新本地运行时"
date: "MAR 22 '26"
date_zh: "2026年3月22日"
cover: blog-release-v014.png
featured: false
---

# nexu v0.1.4: WeChat Support, Skill Management & New Local Runtime

> v0.1.4 brings WeChat QR-code login, a controller-first local runtime, curated Skill installs with Chinese localization, and 40+ bug fixes.

## ✨ New Features

Better skill management: curated installs, Chinese catalog localization, lowdb skill ledger, and catalog/package fixes (#267, #288, #317, #323).

New controller-first local runtime with OpenClaw config push, readiness feedback, and model-routing templates (#269, #274, #320).

New WeChat support with QR-code login, plus bundled image/audio/browser skills (#324, #326, #270).

Better product UI: session chat history, updated auth page, improved sidebar, restored provider icons, and desktop build metadata (#278, #309, #252, #314, #257, #290).

Better release and debug tooling: Slack reply probe, desktop diagnostics export, and improved release channel/artifact handling (#272, #289, #266, #338, #337).

## 🐛 Bug Fixes

Fixed packaged desktop skill installs and several startup/reconnect issues across local and cloud flows (#240, #237, #241, #247, #261, #256, #265).

Fixed desktop polish issues including sleep handling, drag bar spacing, traffic-light alignment, icons, and diagnostics/Sentry setup (#299, #316, #313, #291, #253, #287, #301, #303).

Fixed web/product issues including BYOK saved-state messaging, privacy/terms links, docs links, model list cleanup, and skill content rendering (#260, #259, #271, #282, #315, #294).

Fixed runtime and packaging issues by restoring local dev flow, switching to sql.js, speeding postinstall, preserving sharp paths, and stabilizing WeChat plugin config (#295, #298, #318, #330, #329).

Fixed channel and UX issues in Feishu fallback handling, Slack model routing, browser open-folder flow, and WeChat session/sidebar behavior (#319, #268, #309, #340).

## 🧹 Maintenance & Cleanup

Removed deprecated API/gateway/deploy paths, the apps/landing package, the router workspace, and old skills-catalog APIs (#296, #254, #325, #292).

Cleaned up release plumbing with refreshed runtime metadata, v tag support, safer release scripting, and final v0.1.4 prep (#332, #338, #341, #333, #342).

## 🙌 New Contributors

@qiongyu1999 made their first contribution in #248. @ashleyashli made their first contribution in #310.

Full Changelog: [v0.1.0...v0.1.4](https://github.com/nexu-io/nexu/compare/v0.1.0...v0.1.4)

---

# nexu v0.1.4：支持微信、重构 Skill 管理、全新本地运行时

> v0.1.4 新增微信扫码连接、全新本地运行时架构、中文 Skill 商店，以及 40 多项 Bug 修复。

## ✨ 新功能

更好的 Skill 管理：精选安装、中文目录本地化、lowdb Skill 账本、目录/包稳定性修复（#267, #288, #317, #323）。

新 Controller-First 本地运行时，支持 OpenClaw 配置推送、就绪反馈、模型路由模板（#269, #274, #320）。

新增微信支持，QR 扫码登录，附带图片/音频/浏览器技能（#324, #326, #270）。

产品 UI 改进：会话聊天记录、更新的认证页、改进的侧边栏、恢复供应商图标、桌面构建元数据（#278, #309, #252, #314, #257, #290）。

发布和调试工具改进：Slack 回复探测、桌面诊断导出、改进的发布渠道/构建物处理（#272, #289, #266, #338, #337）。

## 🐛 Bug 修复

修复打包桌面 Skill 安装和多个本地/云端启动/重连问题（#240, #237, #241, #247, #261, #256, #265）。

修复桌面细节问题：休眠处理、拖动条间距、红绿灯对齐、图标、诊断/Sentry 配置（#299, #316, #313, #291, #253, #287, #301, #303）。

修复 Web/产品问题：BYOK 保存状态消息、隐私/条款链接、文档链接、模型列表清理、Skill 内容渲染（#260, #259, #271, #282, #315, #294）。

修复运行时和打包问题：恢复本地开发流程、切换 sql.js、加速 postinstall、保留 sharp 路径、稳定微信插件配置（#295, #298, #318, #330, #329）。

修复渠道和 UX 问题：飞书回退处理、Slack 模型路由、浏览器打开文件夹、微信会话/侧边栏行为（#319, #268, #309, #340）。

## 🧹 维护与清理

移除废弃的 API/网关/部署路径、apps/landing 包、路由工作区、旧 skills-catalog API（#296, #254, #325, #292）。

清理发布流程：刷新运行时元数据、v 标签支持、更安全的发布脚本、v0.1.4 最终准备（#332, #338, #341, #333, #342）。

## 🙌 新贡献者

@qiongyu1999 在 #248 中做出了首次贡献。@ashleyashli 在 #310 中做出了首次贡献。

完整变更日志：[v0.1.0...v0.1.4](https://github.com/nexu-io/nexu/compare/v0.1.0...v0.1.4)

