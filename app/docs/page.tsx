import Link from 'next/link'

export default function Docs() {
  const sections = [
    {
      title: "快速开始",
      description: "了解如何快速搭建 Next.js 项目",
      items: [
        "安装和设置",
        "创建第一个页面",
        "了解文件结构",
        "运行开发服务器"
      ]
    },
    {
      title: "核心概念",
      description: "掌握 Next.js 的核心概念",
      items: [
        "App Router vs Pages Router",
        "服务器组件和客户端组件",
        "路由和导航",
        "数据获取"
      ]
    },
    {
      title: "样式和UI",
      description: "学习如何美化您的应用",
      items: [
        "CSS 模块",
        "Tailwind CSS 集成",
        "响应式设计",
        "暗色模式"
      ]
    },
    {
      title: "部署和优化",
      description: "将应用部署到生产环境",
      items: [
        "构建优化",
        "Vercel 部署",
        "性能监控",
        "SEO 优化"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 mb-8"
          >
            ← 返回首页
          </Link>
          
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            文档中心
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            完整的 Next.js 开发指南和最佳实践
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {sections.map((section, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  {section.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {section.description}
                </p>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="text-green-500 mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">API 参考</h2>
            <p className="text-xl mb-6 opacity-90">
              查看完整的 API 文档和示例代码
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black/20 rounded-lg p-4">
                <h3 className="font-semibold mb-2">页面组件</h3>
                <div className="font-mono text-sm space-y-1">
                  <div className="text-blue-400">export default function Page()</div>
                  <div className="text-gray-300">  return &lt;div&gt;Hello World&lt;/div&gt;</div>
                </div>
              </div>
              <div className="bg-black/20 rounded-lg p-4">
                <h3 className="font-semibold mb-2">API 路由</h3>
                <div className="font-mono text-sm space-y-1">
                  <div className="text-blue-400">export async function GET()</div>
                  <div className="text-gray-300">  return Response.json(data)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
