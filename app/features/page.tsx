import Link from 'next/link'

export default function Features() {
  const features = [
    {
      title: "服务器端渲染 (SSR)",
      description: "提供更好的 SEO 和初始加载性能",
      icon: "🚀"
    },
    {
      title: "静态站点生成 (SSG)",
      description: "预渲染页面以获得最佳性能",
      icon: "⚡"
    },
    {
      title: "API 路由",
      description: "内置 API 端点，无需额外服务器",
      icon: "🔌"
    },
    {
      title: "自动代码分割",
      description: "按需加载，减少初始包大小",
      icon: "📦"
    },
    {
      title: "图片优化",
      description: "自动优化和响应式图片",
      icon: "🖼️"
    },
    {
      title: "TypeScript 支持",
      description: "开箱即用的类型安全",
      icon: "🔒"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 mb-8"
          >
            ← 返回首页
          </Link>
          
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            功能特性
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            探索 Next.js 的强大功能
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">开始使用</h2>
            <p className="text-xl mb-6 opacity-90">
              准备好构建您的下一个项目了吗？
            </p>
            <div className="bg-black/20 rounded-lg p-4 font-mono text-sm">
              <div className="text-green-400">$ npx create-next-app@latest my-app</div>
              <div className="text-gray-300">$ cd my-app</div>
              <div className="text-gray-300">$ npm run dev</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
