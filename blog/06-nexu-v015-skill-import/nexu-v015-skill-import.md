---
id: ann-v015
slug: nexu-v015-skill-import
category: Announcements
title: "nexu v0.1.5: Skill Import, Richer Chat & Fewer Zombies"
title_zh: "nexu v0.1.5：Skill 导入、Markdown 聊天、告别僵尸进程"
date: "MAR 23 '26"
date_zh: "2026年3月23日"
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

---

# nexu v0.1.5：Skill 导入、Markdown 聊天、告别僵尸进程

> v0.1.5 支持通过 zip 导入 Skill、聊天支持 Markdown 渲染、运行时端口动态分配，修复了僵尸进程和飞书重启死循环。

## ✨ 新功能

**Skill 导入弹窗：**支持 zip 上传的 Skill 导入对话框，双语 UI。（#355）

**Markdown 聊天渲染：**会话聊天气泡支持渲染格式化内容——列表、链接、代码块。（#348）

**动态运行时端口：**桌面运行时动态分配端口，消除启动时的固定端口冲突。（#331）

**关于对话框 & 更新菜单：**新增应用关于对话框和应用内更新检查。（#345）

**工作区 & 运行时分析：**新增工作区和运行时生命周期追踪分析事件。（#411）

## 🐛 Bug 修复

**修复飞书重启死循环：**配置写入器跳过冗余写入，打破 restart → syncAll → write → watcher 循环，该循环导致飞书渠道不可用。（#347）

**修复退出后僵尸进程：**应用退出时等待子进程清理，3 秒后升级为 SIGKILL，防止孤儿进程阻止应用删除。（#346）

**修复冷启动配置重载：**配置写入器从磁盘种子缓存，避免每次控制器重启后不必要的 OpenClaw 重载。（#349）

**修复渠道感知更新检查：**更新器现在检查 stable/beta/nightly 渠道对应的正确 feed URL。（#345）

**修复 webview 挂载崩溃：**通过 JSX prop 设置 webview src，防止初始挂载时 null-src 崩溃。（#407）

**修复 Skill 卡片拖拽：**阻止 Skill 卡片上的拖拽事件打开第二个浏览器窗口。（#361）

**修复控制器符号链接崩溃：**在运行时插件复制时过滤 node_modules/.bin 符号链接，防止 Skill 导入时 EINVAL 错误。（#355）

## 🙌 新贡献者

@NickHood1984 在 #348 中做出了首次贡献。@zoeforfun 在 #418 中做出了首次贡献。

完整变更日志：[v0.1.4...v0.1.5](https://github.com/nexu-io/nexu/compare/v0.1.4...v0.1.5)

