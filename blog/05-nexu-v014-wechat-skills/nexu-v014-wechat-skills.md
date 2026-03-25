---
id: ann-v014
slug: nexu-v014-wechat-skills
category: Announcements
title: "nexu v0.1.4: WeChat Support, Skill Management & New Local Runtime"
date: "MAR 22 '26"
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

