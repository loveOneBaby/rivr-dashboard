# Rivr Dashboard

Rivr 的落地 / 仪表盘页面原型，React + TypeScript + Vite 实现，包含 Hero 与 Ecosystem 两个主要章节，以及角落卡片、导航栏等装饰性区块。

## 技术栈

- **框架**：React + TypeScript + Vite
- **Lint**：Oxlint（`.oxlintrc.json`）

## 目录结构

```text
rivr-dashboard/
├── src/
│   ├── App.tsx                  # Hero + Ecosystem 组合
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── Ecosystem.tsx
│   │   ├── Navbar.tsx
│   │   ├── HeroBadge.tsx
│   │   ├── BottomLeftCard.tsx
│   │   └── BottomRightCorner.tsx
│   └── ...
├── index.html
└── vite.config.ts
```

## 本地开发

```bash
npm install
npm run dev
npm run build
npm run preview
```
