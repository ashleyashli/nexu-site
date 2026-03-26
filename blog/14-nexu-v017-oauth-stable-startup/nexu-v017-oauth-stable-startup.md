---
id: ann-v017
slug: nexu-v017-oauth-stable-startup
category: Announcements
title: "nexu v0.1.7: One-Click OAuth & Rock-Solid Startup"
date: "MAR 25 '26"
cover: blog-release-v017.png
featured: false
---

# nexu v0.1.7: One-Click OAuth & Rock-Solid Startup

> nexu — the simplest open-source OpenClaw desktop client — now lets you log in to OpenAI and MiniMax with one click, no API keys needed. v0.1.7 also eliminates white-screen, stuck-channel, and port-conflict issues, making startup reliable no matter how the app was last closed.

## Highlights

**🔑 OpenAI Codex OAuth** — If you have a ChatGPT Plus or Pro subscription, connect GPT models to nexu through your existing OpenAI account. No separate API key required.

**🔑 MiniMax OAuth** — One-click MiniMax model access via OAuth, with a polished provider UI.

**🚀 Z.AI Coding Plan** — Quick-setup for GLM models with a Global/CN region toggle.

**🔧 Rock-solid startup** — Fixed "white screen", "can't open", and "channels stuck connecting" issues. Startup is now resilient to port conflicts, app upgrades, and force-quit recovery.

**🛡️ Self-healing services** — Launchd integration rebuilt: plist config drift auto-detected, stale services cleaned up on startup, Stop/Start buttons work reliably.

## Who This Helps

**ChatGPT Plus/Pro users** who want GPT models in nexu without managing API keys — sign in with your existing OpenAI account and you're ready to go.

**Anyone who hit the white screen** after upgrading from an earlier version — startup is now resilient to port conflicts, config drift, and interrupted upgrades.

**Power users who force-quit frequently** — stale ports and zombie processes are cleaned up automatically on restart.

## What's New

**📖 WeChat setup guide** — English-language channel setup documentation.

**📖 Discord guide refresh** — Updated screenshots and simplified permissions guide.

## Bug Fixes

Fixed app showing white screen after upgrade — plist config drift now auto-detected and re-bootstrapped.

Fixed "channels connecting forever" when default port is occupied by another nexu instance.

Fixed Stop button being ignored by KeepAlive — now properly unregisters service.

Fixed Stop/Start buttons greyed out in launchd mode.

Fixed force-quit leaving stale web port — dead Electron PID now detected on restart.

Fixed v0.1.6 data loss — sessions, skills, and channel state migrated back from wrong directory.

Fixed unhandled rejection crash in cloud status refresh.

Fixed OAuth disconnect not clearing models from selector — now properly deletes provider and syncs.

Fixed model list showing expired OAuth providers.

Fixed skill detail "Back" button always resetting to initial tab.

## UI Polish

Skills page persists active tab (Yours/ClawHub) in URL for bookmarking.

GitHub import tab input set to read-only (coming soon).


## How to Get Started

Download nexu v0.1.7 from the [GitHub releases page](https://github.com/nexu-io/nexu/releases/tag/v0.1.7), or check for updates in-app.

To connect OpenAI via OAuth: open Settings → Providers → OpenAI Codex → "Sign in with ChatGPT." No API key needed.

**Available now** for macOS (Apple Silicon). Windows and Intel Mac support is in development.

## Contributors

@lefarcen, @nettee, @qiongyu1999, @alchemistklk, @mrcfps.

Full Changelog: [v0.1.6...v0.1.7](https://github.com/nexu-io/nexu/compare/v0.1.6...v0.1.7)

Source: [GitHub Releases — nexu v0.1.7](https://github.com/nexu-io/nexu/releases/tag/v0.1.7)
