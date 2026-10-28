# Ace灯塔 — 开发备忘与指导规范

Ace灯塔是一个基于 Astro 6 与 Tailwind CSS 构建的静态优先数字化产品与博客平台。

## 命令速查
- `pnpm dev` - 启动本地开发服务 (http://localhost:5200)
- `pnpm build` - 完整构建生产制品 (包含 astro check 与静态输出)
- `pnpm preview` - 本地预览构建产物

## 架构原则
- 保持 100% 纯净度与独立性，不引入无必要的外部追踪脚本与外链。
- 保持 SEO 友好，严格遵循语义化 HTML 规范与 OpenGraph / JSON-LD 标准。
