# Actions Demo

一个使用 Next.js 14 构建的现代化 Web 应用程序演示项目。

## 特性

- ⚡ **Next.js 14** - 使用最新的 App Router 架构
- 🎨 **Tailwind CSS** - 实用优先的 CSS 框架
- 🔒 **TypeScript** - 类型安全的 JavaScript
- 📱 **响应式设计** - 适配各种设备尺寸
- 🌙 **暗色模式** - 支持系统主题切换
- 🚀 **性能优化** - 快速加载和渲染

## 技术栈

- **框架**: Next.js 14
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **路由**: App Router
- **字体**: Inter (Google Fonts)

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 在浏览器中查看结果。

### 构建生产版本

```bash
npm run build
npm start
```

## 项目结构

```
actions-demo/
├── app/                    # App Router 目录
│   ├── about/             # 关于页面
│   ├── contact/           # 联系页面
│   ├── docs/              # 文档页面
│   ├── features/          # 功能页面
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 首页
├── public/                # 静态资源
├── next.config.js         # Next.js 配置
├── tailwind.config.js     # Tailwind 配置
├── tsconfig.json          # TypeScript 配置
└── package.json           # 项目依赖
```

## 页面说明

- **首页** (`/`) - 项目介绍和导航
- **关于我们** (`/about`) - 项目详情和技术栈
- **功能特性** (`/features`) - Next.js 功能展示
- **联系我们** (`/contact`) - 联系表单和信息
- **文档中心** (`/docs`) - 开发指南和 API 参考

## 开发指南

### 添加新页面

1. 在 `app/` 目录下创建新的文件夹
2. 在文件夹中创建 `page.tsx` 文件
3. 导出默认的 React 组件

### 样式定制

项目使用 Tailwind CSS，您可以在 `tailwind.config.js` 中自定义主题。

### 类型定义

项目已配置 TypeScript，所有组件都有完整的类型支持。

## 部署

### Vercel (推荐)

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 上导入项目
3. 自动部署完成

### 其他平台

```bash
npm run build
npm start
```

## 许可证

MIT License