/** @type {import('next').NextConfig} */
const nextConfig = {
  // 启用静态导出以支持 GitHub Pages
  output: 'export',
  // 禁用图片优化（静态导出不支持）
  images: {
    unoptimized: true,
  },
  // 减少 hydration 警告
  reactStrictMode: true,
  // 优化开发体验
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  // 设置基础路径（如果需要部署到子目录）
  // basePath: '/actions-demo',
  // trailingSlash: true,
}

module.exports = nextConfig
