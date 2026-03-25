---
id: ann-v015
slug: nexu-v015-skill-import
category: Announcements
title: "nexu v0.1.5: Skill Import, Richer Chat & Fewer Zombies"
date: "MAR 23 '26"
cover: blog-release-v015.png
featured: false
---

# nexu v0.1.5: Skill Import, Richer Chat & Fewer Zombies

> v0.1.5 adds Skill zip import, markdown rendering in chat, dynamic runtime ports, and kills the zombie process and Feishu restart bugs.

## ✨ New Features

**Skill import modal:** Import Skill dialog with zip upload support and bilingual UI. (#355)

**Markdown chat rendering:** Session chat bubbles now render formatted content — lists, links, code blocks. (#348)

**Dynamic runtime ports:** Desktop runtime allocates ports dynamically, eliminating fixed-port conflicts on startup. (#331)

**About dialog & update menu:** Added app About dialog and in-app update check actions. (#345)

**Workspace & runtime analytics:** Added analytics events for workspace and runtime lifecycle tracking. (#411)

## 🐛 Bug Fixes

**Fix Feishu restart loop:** Config writer now skips redundant writes, breaking the restart → syncAll → write → watcher cycle that made Feishu channels unusable. (#347)

**Fix zombie processes on quit:** App quit now awaits child process cleanup and escalates to SIGKILL after 3s, preventing orphaned processes that block app deletion. (#346)

**Fix cold-start config reload:** Config writer seeds its cache from disk on startup, avoiding unnecessary OpenClaw reloads after every controller restart. (#349)

**Fix channel-aware update checks:** Updater now checks the correct feed URL for stable/beta/nightly channels. (#345)

**Fix webview mount crash:** Set webview src via JSX prop to prevent null-src crash on initial mount. (#407)

**Fix skill card drag:** Prevent drag event on skill cards from opening a second browser window. (#361)

**Fix controller symlink crash:** Filter out node_modules/.bin symlinks during runtime plugin copy to prevent EINVAL on skill import. (#355)

## 🙌 New Contributors

@NickHood1984 made their first contribution in #348. @zoeforfun made their first contribution in #418.

Full Changelog: [v0.1.4...v0.1.5](https://github.com/nexu-io/nexu/compare/v0.1.4...v0.1.5)

