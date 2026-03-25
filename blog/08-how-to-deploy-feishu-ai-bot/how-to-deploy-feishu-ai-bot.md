---
id: guide-feishu
slug: how-to-deploy-feishu-ai-bot
category: Guides
title: "Channel Setup: Deploy an AI Bot on Feishu in 10 Minutes"
date: "MAR '26"
cover: blog-guide-feishu.png
featured: false
---

# Channel Setup: Deploy an AI Bot on Feishu in 10 Minutes

> Get your App ID and App Secret, import 102 permissions in one click — your AI agent handles messages, docs, spreadsheets, and calendars.

Only an App ID and App Secret needed to connect a Feishu bot to nexu.

## Step 1: Create a Feishu App

Go to the [Feishu Open Platform](https://open.feishu.cn/app), log in, and click "Create Enterprise App."

![Feishu app list](feishu-step1-app-list.webp)

Fill in the app name and description, select an icon, and click "Create."

![Create enterprise app](feishu-step1-create-app.webp)

Go to the "Credentials & Basic Info" page and copy: App ID and App Secret.

![App ID and App Secret](feishu-step1-credentials.webp)

## Step 2: Enter Credentials in nexu

Open the nexu desktop client. In the Feishu channel config, paste your App ID and App Secret, click "Connect."

![Paste credentials in nexu](feishu-step3-nexu-connect.webp)

## Step 3: Import App Permissions

In the Feishu Open Platform, go to "Permission Management" and click "Batch Import/Export Permissions."

![Permission management](feishu-step3-permission-management.webp)

Select "Import", paste the JSON nexu provides, click "Next, confirm new permissions."

![Paste permissions JSON](feishu-step3-paste-json.webp)

Confirm the permission list (102 total), click "Apply to Enable."

![Confirm permissions](feishu-step3-confirm-permissions.webp)

In the data scope confirmation popup, click "Confirm."

![Data scope](feishu-step3-data-scope.webp)

These permissions cover messaging, doc read/write, calendar management, spreadsheet operations — everything your agent's Skills need.

## Step 4: Configure Events & Callbacks

Go to "Events & Callbacks", select "Event Configuration" tab.

![Events page](feishu-step4-event-config.webp)

Click edit next to subscription method, select "Use Long Connection to Receive Events", save.

![Long connection](feishu-step4-event-websocket.webp)

Click "Add Event."

![Add event](feishu-step4-add-event.webp)

Search and check: First chat creation (p2p_chat_create), Message received (im.message.receive_v1), Bot added to group (im.chat.member.bot.added_v1), User enters bot chat (im.chat.access_event.bot_p2p_chat_entered_v1). Click "Add."

![Select events](feishu-step4-select-event.webp)

Confirm in the "Added Events" list.

![Event list](feishu-step4-event-list.webp)

Switch to "Callback Configuration" tab, click edit.

![Callback tab](feishu-step4-callback-tab.webp)

Select "Use Long Connection to Receive Callbacks", save.

![Callback long connection](feishu-step4-callback-websocket.webp)

Click "Add Callback."

![Add callback](feishu-step4-add-callback.webp)

Select "Card" category, check "Card Action Trigger" (card.action.trigger), click "Add."

![Card action trigger](feishu-step4-select-callback.webp)

## Step 5: Publish and Test

Go to "Version Management & Release."

![Version management](feishu-step4-version-manage.webp)

Click "Create Version", fill in version number and notes, save.

![Create version](feishu-step4-create-version.webp)

Click "Confirm Release", wait for approval.

![Confirm release](feishu-step4-publish.webp)

After approval, click "Chat" in nexu to jump to Feishu and start chatting with your AI bot.

![Feishu connected](feishu-step3-connected.webp)

## FAQ

**Do I need a public server?** No. nexu uses Feishu's WebSocket long connection — no public IP or callback URLs needed.

**Why so many permissions?** The 102 permissions map to nexu's Skills (messages, docs, calendars, spreadsheets). For basic chat only, enable just "im:" permissions.

