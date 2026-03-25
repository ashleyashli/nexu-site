---
id: ann-v016
slug: nexu-v016-faster-startup
category: Announcements
title: "nexu v0.1.6: 3x Faster Startup, Background Mode & ClawHub"
date: "MAR 24 '26"
cover: blog-release-v016.png
featured: false
---

# nexu v0.1.6: 3x Faster Startup, Background Mode & ClawHub

> v0.1.6 cuts cold start from ~22s to ~7s, adds background mode to keep bots running, introduces ClawHub for batch skill installs, and makes services crash-proof.

## Highlights

**⚡ 3x faster startup** — Cold start reduced from ~22s to ~7s. Reopening after background mode takes just ~200ms.

**🛡️ Crash-proof services** — Controller and OpenClaw now run as independent system services. If one crashes, it auto-recovers without restarting the app.

**🎨 Polished launch experience** — New animated splash screen with smooth transition. Status shows "Starting up → Connecting → Running" instead of flashing "Offline".

## What's New

**🔌 Background mode** — Close the app and keep bots running. Reopen from Dock instantly (#405, #519).

**🧩 ClawHub (formerly Explore)** — Batch skill installation with queue management (#445, #477).

**🔥 Dev hot reload** — Edit controller code, see changes in ~3s, no restart needed (#519).

**✨ UI refresh** — WeChat official logo, updated design tokens, improved cloud connection flow (#503).

**💬 Session chat improvements** — Better message display and desktop workspace links (#420).

## Bug Fixes

Fixed startup showing "Offline" status during boot (#405).

Fixed WeChat channel showing generic "Error" instead of "Reconnect required" (#405).

Fixed display sleep being blocked while app is active (#436).

## For Developers

`pnpm start` now auto-watches controller and web source files. Dev state fully isolated under `.tmp/` — no conflict with installed app. Comprehensive startup flow documentation.

## 🙌 New Contributors

@zoeforfun made their first contribution in #503.

Contributors: @lefarcen, @anthhub, @mrcfps, @alchemistklk, @nettee, @Siri-Ray, @zoeforfun, @qiongyu1999.

Full Changelog: [v0.1.5...v0.1.6](https://github.com/nexu-io/nexu/compare/v0.1.5...v0.1.6)

