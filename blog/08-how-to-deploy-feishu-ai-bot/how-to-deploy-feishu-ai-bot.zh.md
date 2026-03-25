---
id: guide-feishu
slug: how-to-deploy-feishu-ai-bot
category: Guides
title: "渠道配置：10 分钟在飞书上部署 AI 机器人"
date: "2026年3月"
cover: blog-guide-feishu.png
featured: false
---

# 渠道配置：10 分钟在飞书上部署 AI 机器人

> 只需获取 App ID 和 App Secret，即可将飞书机器人接入 nexu。支持消息、文档、日历、表格等全部能力。

只需获取 App ID 和 App Secret，即可将飞书机器人接入 nexu。

## 第一步：创建飞书应用

打开[飞书开放平台](https://open.feishu.cn/app)，登录你的飞书账号，点击「创建企业自建应用」。

![飞书开放平台应用列表](feishu-step1-app-list.webp)

填写应用名称、描述，选择图标，点击「创建」。

![创建企业自建应用](feishu-step1-create-app.webp)

进入「凭证与基础信息」页面，复制以下两个参数：App ID 和 App Secret。

![获取凭证](feishu-step1-credentials.webp)

## 第二步：在 nexu 中填入凭证

打开 nexu 客户端，在飞书渠道配置中填入 App ID 和 App Secret，点击「Connect」。

![在 nexu 中填入凭证](feishu-step3-nexu-connect.webp)

## 第三步：导入应用权限

在飞书开放平台，进入你的应用，点击左侧「权限管理」，然后点击「批量导入/导出权限」。

![权限管理页面](feishu-step3-permission-management.webp)

在弹窗中选择「导入」，将 nexu 提供的 JSON 粘贴到输入框，点击「下一步，确认新增权限」。

![粘贴权限 JSON](feishu-step3-paste-json.webp)

确认导入的权限列表（共 102 条），点击「申请开通」。

![确认导入权限](feishu-step3-confirm-permissions.webp)

在弹出的数据范围确认窗口中，点击「确认」完成权限导入。

![确认数据范围](feishu-step3-data-scope.webp)

这些权限涵盖了消息收发、文档读写、日历管理、电子表格操作等能力，确保 nexu Agent 的各项 Skills 能正常工作。

## 第四步：配置事件与回调

在飞书开放平台，进入你的应用，点击左侧「事件与回调」，进入「事件配置」tab。

![事件与回调页面](feishu-step4-event-config.webp)

点击订阅方式旁的编辑按钮，选择「使用长连接接收事件」，点击「保存」。

![选择长连接接收事件](feishu-step4-event-websocket.webp)

点击「添加事件」。

![添加事件按钮](feishu-step4-add-event.webp)

在弹窗中搜索并勾选以下事件，点击「添加」：用户和机器人的会话首次被创建 (p2p_chat_create)、接收消息 (im.message.receive_v1)、机器人进群 (im.chat.member.bot.added_v1)、用户进入与机器人的会话 (im.chat.access_event.bot_p2p_chat_entered_v1)。

![选择事件](feishu-step4-select-event.webp)

添加完成后，可以在「已添加事件」列表中确认。

![已添加事件列表](feishu-step4-event-list.webp)

切换到「回调配置」tab，点击订阅方式旁的编辑按钮。

![回调配置页面](feishu-step4-callback-tab.webp)

选择「使用长连接接收回调」，点击「保存」。

![选择长连接接收回调](feishu-step4-callback-websocket.webp)

点击「添加回调」。

![添加回调按钮](feishu-step4-add-callback.webp)

在弹窗中选择「卡片」分类，勾选「卡片回传交互」(card.action.trigger)，点击「添加」。

![选择卡片回传交互](feishu-step4-select-callback.webp)

## 第五步：发布应用并测试

回到飞书开放平台，进入「版本管理与发布」。

![版本管理与发布](feishu-step4-version-manage.webp)

点击「创建版本」，填写版本号和更新说明，点击「保存」。

![创建版本](feishu-step4-create-version.webp)

点击「确认发布」，等待审核通过。

![确认发布](feishu-step4-publish.webp)

等待审核通过后，在 nexu 客户端点击「Chat」即可跳转到飞书与机器人对话 🎉

![飞书已连接](feishu-step3-connected.webp)

## 常见问题

**需要公网服务器吗？**不需要。nexu 使用飞书长连接（WebSocket）模式，无需公网 IP 或回调地址。

**为什么需要这么多权限？**这些权限对应 nexu Agent 的各项 Skills（消息、文档、日历、电子表格等）。如果你只需要基础聊天功能，可以只开通 im: 开头的权限。

