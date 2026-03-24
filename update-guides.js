const fs = require('fs');
const path = require('path');

let html = fs.readFileSync(path.join(__dirname, 'site/blog.html'), 'utf-8');

// ===== FEISHU =====
const feishuOld = `      {
        id: 'guide-feishu',
        category: 'Guides',
        slug: 'how-to-deploy-feishu-ai-bot',
        title: 'Deploy an AI Bot on Feishu in Under 10 Minutes',
        title_zh: '10 \\u5206\\u949f\\u5728\\u98de\\u4e66\\u4e0a\\u90e8\\u7f72 AI \\u673a\\u5668\\u4eba',`;

const feishuNew = `      {
        id: 'guide-feishu',
        category: 'Guides',
        slug: 'how-to-deploy-feishu-ai-bot',
        title: 'Channel Setup: Deploy an AI Bot on Feishu in 10 Minutes',
        title_zh: '渠道配置：10 分钟在飞书上部署 AI 机器人',`;

html = html.replace(feishuOld, feishuNew);

// Replace feishu desc
html = html.replace(
  `desc_zh: '\\u521b\\u5efa\\u98de\\u4e66\\u5e94\\u7528\\uff0c\\u7c98\\u8d34\\u4e24\\u4e2a\\u51ed\\u8bc1\\uff0c\\u4e00\\u952e\\u5bfc\\u5165 102 \\u6761\\u6743\\u9650\\u2014\\u2014\\u4f60\\u7684 AI Agent \\u5904\\u7406\\u6d88\\u606f\\u3001\\u6587\\u6863\\u3001\\u8868\\u683c\\u548c\\u65e5\\u5386\\u3002',`,
  `desc_zh: '只需获取 App ID 和 App Secret，即可将飞书机器人接入 nexu。支持消息、文档、日历、表格等全部能力。',`
);

// Replace feishu sections - find the exact boundary
const feishuSectionsStart = "        sections: [\n          { type: 'p', text: 'If your team runs on Feishu";
const feishuSectionsEnd = "          { type: 'p', text: '<a class=\"blog-link\" href=\"#how-to-install-ai-agent-skills\">\\u5b89\\u88c5 Skills</a> \\u8ba9\\u5b83\\u83b7\\u5f97\\u4e13\\u4e1a\\u80fd\\u529b\\u3002<a class=\"blog-link\" href=\"#how-to-configure-ai-models-nexu\">\\u5207\\u6362 AI \\u6a21\\u578b</a>\\u627e\\u5230\\u6700\\u9002\\u5408\\u4f60\\u56e2\\u961f\\u7684\\u65b9\\u6848\\u3002' }\n        ]\n      },";

const feishuSectionsNew = `        sections: [
          { type: 'p', text: 'Only an App ID and App Secret needed to connect a Feishu bot to nexu.' },
          { type: 'h2', text: 'Step 1: Create a Feishu App' },
          { type: 'p', text: 'Go to the <a class="blog-link" href="https://open.feishu.cn/app">Feishu Open Platform</a>, log in, and click "Create Enterprise App."' },
          { type: 'img', src: 'img/docs/feishu-step1-app-list.webp', alt: 'Feishu app list' },
          { type: 'p', text: 'Fill in the app name and description, select an icon, and click "Create."' },
          { type: 'img', src: 'img/docs/feishu-step1-create-app.webp', alt: 'Create enterprise app' },
          { type: 'p', text: 'Go to the "Credentials & Basic Info" page and copy these two parameters: App ID and App Secret.' },
          { type: 'img', src: 'img/docs/feishu-step1-credentials.webp', alt: 'App ID and App Secret' },
          { type: 'h2', text: 'Step 2: Enter Credentials in nexu' },
          { type: 'p', text: 'Open the nexu desktop client. In the Feishu channel configuration, paste your App ID and App Secret, then click "Connect."' },
          { type: 'img', src: 'img/docs/feishu-step3-nexu-connect.webp', alt: 'Paste credentials in nexu' },
          { type: 'h2', text: 'Step 3: Import App Permissions' },
          { type: 'p', text: 'In the Feishu Open Platform, go to your app, click "Permission Management" on the left, then click "Batch Import/Export Permissions."' },
          { type: 'img', src: 'img/docs/feishu-step3-permission-management.webp', alt: 'Permission management page' },
          { type: 'p', text: 'In the popup, select "Import", paste the JSON that nexu provides, and click "Next, confirm new permissions."' },
          { type: 'img', src: 'img/docs/feishu-step3-paste-json.webp', alt: 'Paste permissions JSON' },
          { type: 'p', text: 'Confirm the imported permission list (102 total) and click "Apply to Enable."' },
          { type: 'img', src: 'img/docs/feishu-step3-confirm-permissions.webp', alt: 'Confirm permissions' },
          { type: 'p', text: 'In the data scope confirmation popup, click "Confirm" to complete the import.' },
          { type: 'img', src: 'img/docs/feishu-step3-data-scope.webp', alt: 'Data scope confirmation' },
          { type: 'p', text: 'These permissions cover messaging, document read/write, calendar management, spreadsheet operations, and more — everything your agent\\'s Skills need to work properly.' },
          { type: 'h2', text: 'Step 4: Configure Events & Callbacks' },
          { type: 'p', text: 'In the Feishu Open Platform, go to "Events & Callbacks" and select the "Event Configuration" tab.' },
          { type: 'img', src: 'img/docs/feishu-step4-event-config.webp', alt: 'Events & Callbacks page' },
          { type: 'p', text: 'Click the edit button next to the subscription method, select "Use Long Connection to Receive Events", and click "Save."' },
          { type: 'img', src: 'img/docs/feishu-step4-event-websocket.webp', alt: 'Select long connection' },
          { type: 'p', text: 'Click "Add Event."' },
          { type: 'img', src: 'img/docs/feishu-step4-add-event.webp', alt: 'Add event button' },
          { type: 'p', text: 'Search and check these events, then click "Add": First chat creation (p2p_chat_create), Message received (im.message.receive_v1), Bot added to group (im.chat.member.bot.added_v1), User enters bot chat (im.chat.access_event.bot_p2p_chat_entered_v1).' },
          { type: 'img', src: 'img/docs/feishu-step4-select-event.webp', alt: 'Select events' },
          { type: 'p', text: 'After adding, confirm in the "Added Events" list.' },
          { type: 'img', src: 'img/docs/feishu-step4-event-list.webp', alt: 'Added events list' },
          { type: 'p', text: 'Switch to the "Callback Configuration" tab and click the edit button next to the subscription method.' },
          { type: 'img', src: 'img/docs/feishu-step4-callback-tab.webp', alt: 'Callback configuration' },
          { type: 'p', text: 'Select "Use Long Connection to Receive Callbacks" and click "Save."' },
          { type: 'img', src: 'img/docs/feishu-step4-callback-websocket.webp', alt: 'Select long connection for callbacks' },
          { type: 'p', text: 'Click "Add Callback."' },
          { type: 'img', src: 'img/docs/feishu-step4-add-callback.webp', alt: 'Add callback button' },
          { type: 'p', text: 'In the popup, select "Card" category, check "Card Action Trigger" (card.action.trigger), and click "Add."' },
          { type: 'img', src: 'img/docs/feishu-step4-select-callback.webp', alt: 'Select card action trigger' },
          { type: 'h2', text: 'Step 5: Publish and Test' },
          { type: 'p', text: 'Go to "Version Management & Release."' },
          { type: 'img', src: 'img/docs/feishu-step4-version-manage.webp', alt: 'Version management' },
          { type: 'p', text: 'Click "Create Version," fill in the version number and update notes, and click "Save."' },
          { type: 'img', src: 'img/docs/feishu-step4-create-version.webp', alt: 'Create version' },
          { type: 'p', text: 'Click "Confirm Release" and wait for approval.' },
          { type: 'img', src: 'img/docs/feishu-step4-publish.webp', alt: 'Confirm release' },
          { type: 'p', text: 'After approval, click "Chat" in the nexu client to jump to Feishu and start chatting with your AI bot.' },
          { type: 'img', src: 'img/docs/feishu-step3-connected.webp', alt: 'Feishu connected' },
          { type: 'h2', text: 'FAQ' },
          { type: 'p', text: '<strong>Do I need a public server?</strong> No. nexu uses Feishu\\'s WebSocket long connection — no public IP or callback URLs needed.' },
          { type: 'p', text: '<strong>Why so many permissions?</strong> The 102 permissions map to nexu\\'s various Skills (messages, docs, calendars, spreadsheets). If you only need basic chat, enable just the "im:" permissions.' }
        ],
        sections_zh: [
          { type: 'p', text: '只需获取 App ID 和 App Secret，即可将飞书机器人接入 nexu。' },
          { type: 'h2', text: '第一步：创建飞书应用' },
          { type: 'p', text: '打开<a class="blog-link" href="https://open.feishu.cn/app">飞书开放平台</a>，登录你的飞书账号，点击「创建企业自建应用」。' },
          { type: 'img', src: 'img/docs/feishu-step1-app-list.webp', alt: '飞书开放平台应用列表' },
          { type: 'p', text: '填写应用名称、描述，选择图标，点击「创建」。' },
          { type: 'img', src: 'img/docs/feishu-step1-create-app.webp', alt: '创建企业自建应用' },
          { type: 'p', text: '进入「凭证与基础信息」页面，复制以下两个参数：App ID 和 App Secret。' },
          { type: 'img', src: 'img/docs/feishu-step1-credentials.webp', alt: '获取 App ID 和 App Secret' },
          { type: 'h2', text: '第二步：在 nexu 中填入凭证' },
          { type: 'p', text: '打开 nexu 客户端，在飞书渠道配置中填入 App ID 和 App Secret，点击「Connect」。' },
          { type: 'img', src: 'img/docs/feishu-step3-nexu-connect.webp', alt: '在 nexu 中填入凭证' },
          { type: 'h2', text: '第三步：导入应用权限' },
          { type: 'p', text: '在飞书开放平台，进入你的应用，点击左侧「权限管理」，然后点击「批量导入/导出权限」。' },
          { type: 'img', src: 'img/docs/feishu-step3-permission-management.webp', alt: '权限管理页面' },
          { type: 'p', text: '在弹窗中选择「导入」，将 nexu 提供的 JSON 粘贴到输入框，点击「下一步，确认新增权限」。' },
          { type: 'img', src: 'img/docs/feishu-step3-paste-json.webp', alt: '粘贴权限 JSON' },
          { type: 'p', text: '确认导入的权限列表（共 102 条），点击「申请开通」。' },
          { type: 'img', src: 'img/docs/feishu-step3-confirm-permissions.webp', alt: '确认导入权限' },
          { type: 'p', text: '在弹出的数据范围确认窗口中，点击「确认」完成权限导入。' },
          { type: 'img', src: 'img/docs/feishu-step3-data-scope.webp', alt: '确认数据范围' },
          { type: 'p', text: '这些权限涵盖了消息收发、文档读写、日历管理、电子表格操作等能力，确保 nexu Agent 的各项 Skills 能正常工作。' },
          { type: 'h2', text: '第四步：配置事件与回调' },
          { type: 'p', text: '在飞书开放平台，进入你的应用，点击左侧「事件与回调」，进入「事件配置」tab。' },
          { type: 'img', src: 'img/docs/feishu-step4-event-config.webp', alt: '事件与回调页面' },
          { type: 'p', text: '点击订阅方式旁的编辑按钮，选择「使用长连接接收事件」，点击「保存」。' },
          { type: 'img', src: 'img/docs/feishu-step4-event-websocket.webp', alt: '选择长连接接收事件' },
          { type: 'p', text: '点击「添加事件」。' },
          { type: 'img', src: 'img/docs/feishu-step4-add-event.webp', alt: '添加事件按钮' },
          { type: 'p', text: '在弹窗中搜索并勾选以下事件，点击「添加」：用户和机器人的会话首次被创建 (p2p_chat_create)、接收消息 (im.message.receive_v1)、机器人进群 (im.chat.member.bot.added_v1)、用户进入与机器人的会话 (im.chat.access_event.bot_p2p_chat_entered_v1)。' },
          { type: 'img', src: 'img/docs/feishu-step4-select-event.webp', alt: '选择事件' },
          { type: 'p', text: '添加完成后，可以在「已添加事件」列表中确认。' },
          { type: 'img', src: 'img/docs/feishu-step4-event-list.webp', alt: '已添加事件列表' },
          { type: 'p', text: '切换到「回调配置」tab，点击订阅方式旁的编辑按钮。' },
          { type: 'img', src: 'img/docs/feishu-step4-callback-tab.webp', alt: '回调配置页面' },
          { type: 'p', text: '选择「使用长连接接收回调」，点击「保存」。' },
          { type: 'img', src: 'img/docs/feishu-step4-callback-websocket.webp', alt: '选择长连接接收回调' },
          { type: 'p', text: '点击「添加回调」。' },
          { type: 'img', src: 'img/docs/feishu-step4-add-callback.webp', alt: '添加回调按钮' },
          { type: 'p', text: '在弹窗中选择「卡片」分类，勾选「卡片回传交互」(card.action.trigger)，点击「添加」。' },
          { type: 'img', src: 'img/docs/feishu-step4-select-callback.webp', alt: '选择卡片回传交互' },
          { type: 'h2', text: '第五步：发布应用并测试' },
          { type: 'p', text: '回到飞书开放平台，进入「版本管理与发布」。' },
          { type: 'img', src: 'img/docs/feishu-step4-version-manage.webp', alt: '版本管理与发布' },
          { type: 'p', text: '点击「创建版本」，填写版本号和更新说明，点击「保存」。' },
          { type: 'img', src: 'img/docs/feishu-step4-create-version.webp', alt: '创建版本' },
          { type: 'p', text: '点击「确认发布」，等待审核通过。' },
          { type: 'img', src: 'img/docs/feishu-step4-publish.webp', alt: '确认发布' },
          { type: 'p', text: '等待审核通过后，在 nexu 客户端点击「Chat」即可跳转到飞书与机器人对话 🎉' },
          { type: 'img', src: 'img/docs/feishu-step3-connected.webp', alt: '飞书已连接' },
          { type: 'h2', text: '常见问题' },
          { type: 'p', text: '<strong>需要公网服务器吗？</strong>不需要。nexu 使用飞书长连接（WebSocket）模式，无需公网 IP 或回调地址。' },
          { type: 'p', text: '<strong>为什么需要这么多权限？</strong>这些权限对应 nexu Agent 的各项 Skills（消息、文档、日历、电子表格等）。如果你只需要基础聊天功能，可以只开通 im: 开头的权限。' }
        ]
      },`;

// Find feishu sections boundaries
const feishuSecStart = html.indexOf("{ type: 'p', text: 'If your team runs on Feishu");
if (feishuSecStart === -1) {
  // Try alternative - the sections might have already been partially updated
  console.log('Feishu sections start not found, trying different approach');
}

// Let's do a simpler approach - replace the entire guide articles block
// Find from guide-feishu to guide-skills end

// Actually let me just replace the entire remaining guides via the full file
// Let me find each article by its id and replace

// For feishu, slack, discord, models, skills - replace title_zh and content
// I'll write the full replacement as a new file and merge

console.log('Script approach changed - will use StrReplace for individual articles');
