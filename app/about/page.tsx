import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-8"
          >
            ← 返回首页
          </Link>
          
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            关于我们
          </h1>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              项目介绍
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              这是一个使用 Next.js 14 构建的现代化 Web 应用程序演示项目。
              我们采用了最新的 App Router 架构，集成了 Tailwind CSS 进行样式设计，
              并使用了 TypeScript 来提供更好的开发体验。
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              技术栈
            </h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Next.js 14 - React 全栈框架</li>
              <li>React 18 - 用户界面库</li>
              <li>TypeScript - 类型安全的 JavaScript</li>
              <li>Tailwind CSS - 实用优先的 CSS 框架</li>
              <li>App Router - 新的路由系统</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 mt-8">
              特性
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 dark:text-blue-200">响应式设计</h3>
                <p className="text-blue-600 dark:text-blue-300 text-sm">适配各种设备尺寸</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 dark:text-green-200">暗色模式</h3>
                <p className="text-green-600 dark:text-green-300 text-sm">支持系统主题切换</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 dark:text-purple-200">SEO 优化</h3>
                <p className="text-purple-600 dark:text-purple-300 text-sm">搜索引擎友好</p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-800 dark:text-orange-200">性能优化</h3>
                <p className="text-orange-600 dark:text-orange-300 text-sm">快速加载和渲染</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
