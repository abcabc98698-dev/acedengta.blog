<div align="center">

<img src="./public/assets/logo.png" alt="灯塔加速器 Logo" width="100" height="100" style="border-radius: 50%; box-shadow: 0 4px 12px rgba(45, 109, 195, 0.25);" />

# 灯塔加速器 · 官方品牌官网与知识库系统
### AceDengta Blog — Enterprise IEPL & VLESS Official Portal

[![Astro](https://img.shields.io/badge/Astro-6.4.2-FF5D01.svg?style=flat-square&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.1-38B2AC.svg?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6.svg?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![SEO Score](https://img.shields.io/badge/SEO_Score-98%2F100-brightgreen.svg?style=flat-square&logo=google&logoColor=white)](https://acedengta.blog)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

<p align="center">
  <b>2020 老牌稳定运营</b> · <b>企业级 IEPL 内网专线</b> · <b>轻量 VLESS 协议</b> · <b>全原生 IP 解锁</b> · <b>不限设备</b>
</p>

[🌐 访问官网](https://acedengta.blog) • [📦 套餐方案](https://acedengta.blog/pricing) • [📊 节点状态](https://acedengta.blog/status) • [📖 使用指南](https://acedengta.blog/blog)

---

</div>

## 📖 项目简介

**AceDengta Blog（灯塔加速器官方网站）** 是一套专为 **“灯塔加速器”** 独立品牌打造的高性能、企业级静态官网（SSG）与技术知识库矩阵。

项目基于现代静态站点生成框架 **Astro v6**、**Tailwind CSS v4** 以及 **MDX Content Layer** 纯净重构，彻底拔除传统模板暗桩与第三方追踪，构建了 100% 独立可控的品牌资产与全链路 SEO/GEO 优化系统。

---

## ✨ 核心特性

### 1. 🏢 独立官方品牌落地页 (Brand Landing Page)
- **品牌形象确立**：突出“官方正版授权”、“2020老牌运营”、“全内网专线”等核心背书，杜绝任何第三方机场评测、排行榜或导航站特征。
- **Hero 价值传达**：动态毫秒级时延监控面板、60+ 全球节点拓扑、核心技术优势概览。
- **4 款卡片式套餐方案**：
  - **致敬斯诺克 147 永久套餐**：`147元` / `247GB` 一次性买断，永久不限期，原生节点最高 2.5Gbps。
  - **轻量版**：`99元/年`（折合 `8.25元/月` 年付折算），`69GB/月`，入门首选。
  - **极速版 (主力推荐)**：`25元/月`，`168GB/月`，全球 IPLC 专线，全节点 ×1，最高 2.5Gbps，支持阶梯折扣。
  - **定制版**：`680元/月`，`500GB/月`，独享原生 IP 与独立物理带宽，全天候企业 VIP 运维响应。

### 2. 🛡️ 严格权重保护与全链路 SEO 优化
- **权重零流失保护**：全站所有指向外部注册/购买平台的商业链接，统一注入 `rel="nofollow noopener noreferrer"`，杜绝 Google PageRank 流失与算法惩罚。
- **完善的语义树与 H1 层级**：全站核心落地页均具备清晰严谨的 `<h1>` 语义标签与章节结构。
- **Schema.org `@graph` 体系**：全站自动化生成 `WebSite`、`BlogPosting` 与符合面包屑规范的 `BreadcrumbList`，价格页内建 `FAQPage` 结构化数据。
- **SEO 基础清单全覆盖**：标准绝对路径 Canonical URL、OpenGraph、Twitter Cards、自动化 `robots.txt` 与经过过滤的纯净 `sitemap-index.xml`。

### 3. 📚 深度技术知识库矩阵 (GEO & AEO 友好)
- 包含 4 篇 3,000~3,800+ 中文字符的深度技术指南，包含网络拓扑架构图、终端诊断排错指令与独立答案块（Answer-First）：
  - **[网络架构]** [为什么晚高峰不卡顿？IEPL 企业专线与 VLESS 协议深度技术剖析](https://acedengta.blog/blog/vless-iepl-architecture-analysis)
  - **[桌面教程]** [Clash Verge Rev 全平台订阅配置与规则分流实战指南](https://acedengta.blog/blog/clash-verge-setup-guide)
  - **[移动教程]** [iOS 小火箭 (Shadowrocket) 订阅导入与分流优化教程](https://acedengta.blog/blog/shadowrocket-ios-tutorial)
  - **[出海业务]** [跨境业务与流媒体解锁指南：ChatGPT、TikTok 与 4K 影视原生体验](https://acedengta.blog/blog/chatgpt-streaming-unlock-practice)

### 4. 🎨 极致的 UI 视觉与交互体验
- **无闪烁暗色模式**：原生预载客户端脚本，彻底消除暗色模式载入时的白屏闪烁（FOUC）。
- **完全响应式设计**：完美适配桌面端、平板电脑以及各类移动端屏幕。
- **零外部冗余追踪**：无 Google Analytics、百度统计或第三方广告脚本足迹，加载瞬时完成。

---

## 🛠️ 技术栈架构

| 层级 | 技术选型 | 说明 |
| :--- | :--- | :--- |
| **站点生成** | [Astro v6](https://astro.build/) | Islands 架构，零运行时 JS 优先，极致 SSG 性能 |
| **样式体系** | [Tailwind CSS v4](https://tailwindcss.com/) + `@tailwindcss/vite` | 现代 CSS 引擎，极速编译 |
| **内容驱动** | Astro Content Collections + MDX | 严格 TypeScript 类型验证的前置元数据与渲染 |
| **图标与动效** | [Lucide Astro](https://lucide.dev/) + Motion + AOS | 现代化科技矢量图标与轻量页面动效 |
| **部署模式** | 静态单页应用 (SSG / Static HTML) | 适用 Cloudflare Pages / Vercel / GitHub Pages 等全平台 |

---

## 📁 目录结构

```text
acedengta.blog/
├── public/                       # 静态公开资源 (favicon, logo, og图片)
│   ├── assets/                   # 品牌头像与封面图片
│   ├── favicon.svg               # 矢量站点图标
│   └── robots.txt                # 搜索引擎爬虫抓取规则
├── src/
│   ├── collections/              # 导航与菜单数据
│   │   └── menu.json
│   ├── components/               # 模块化 UI 组件
│   │   ├── home/                 # 首页专用组件 (HeroSection 等)
│   │   ├── sections/             # 通用区块 (Header, Footer, Pricing)
│   │   ├── ui/                   # 基础原子组件 (Button, Logo, Badge 等)
│   │   └── elements/             # 页面排版元素 (PageHeader, SectionHeader)
│   ├── content/                  # 内容集合源文件
│   │   ├── post/                 # MDX 深度技术指南与教程
│   │   └── changelog/            # 版本迭代日志
│   ├── layouts/                  # 全局母版布局
│   │   ├── Layout.astro          # 核心页面母版
│   │   └── Meta.astro            # SEO Meta、OpenGraph 与 JSON-LD 注入器
│   ├── pages/                    # 路由页面
│   │   ├── index.astro           # 官方品牌落地页
│   │   ├── pricing.astro         # 套餐方案与规格对比表
│   │   ├── features.astro        # 核心技术架构解析
│   │   ├── status.astro          # 节点集群实时状态监控
│   │   ├── about.astro           # 关于品牌与官方授权
│   │   ├── contact.astro         # 客户服务与工单支持
│   │   ├── privacy.astro         # 隐私保护政策 (Zero-Log)
│   │   ├── terms.astro           # 服务条款与协议
│   │   └── blog/                 # 知识库列表与动态文章路由
│   ├── config/                   # 全局站点元数据与配置
│   │   └── site.js
│   └── styles/                   # 全局样式与自定义动效
├── astro.config.mjs              # Astro 核心配置文件 (Sitemap, 301 重定向)
├── package.json                  # 项目依赖与构建指令
└── tsconfig.json                 # TypeScript 编译配置
```

---

## 🚀 本地开发与构建

### 1. 克隆代码仓库
```bash
git clone https://github.com/abcabc98698-dev/acedengta.blog.git
cd acedengta.blog
```

### 2. 安装依赖项
推荐使用 `pnpm` 进行依赖管理：
```bash
pnpm install
```

### 3. 启动本地开发服务器
```bash
pnpm dev
```
打开浏览器访问 [http://localhost:5200/](http://localhost:5200/) 即可实时预览站点。

### 4. 类型检查与生产构建
```bash
# 执行 Astro 类型检查并生成 dist/ 静态目录
pnpm build
```

### 5. 本地预览生产构建产物
```bash
pnpm preview
```

---

## ☁️ 部署说明

本项目编译输出为纯静态 HTML/CSS/JS 文件（输出在 `dist/` 目录），可一键托管于任何静态托管服务商：

- **Cloudflare Pages**：
  - 构建命令：`pnpm build`
  - 构建输出目录：`dist`
- **Vercel**：
  - 框架预设：`Astro`
  - 构建命令：`pnpm build`
  - 输出目录：`dist`
- **GitHub Pages**：
  - 可直接将 `dist` 目录部署至 `gh-pages` 分支。

---

## 🔒 合规与安全声明

1. 本网站属于品牌方正版授权官方落地页，产品信息、线路参数及价格规格均严格对齐官方标准。
2. 尊重知识产权与开源规范，严禁恶意抓取、仿冒或用于任何违反所在国家与地区法律法规的活动。
3. 遵循严格的 **Zero-Log（零日志）** 原则，保障用户的隐私安全。

---

## 📄 开源许可证

本项目基于 [MIT License](LICENSE) 协议发布与维护。
