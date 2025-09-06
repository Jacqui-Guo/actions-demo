import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-8">
            Actions Demo
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            一个使用 Next.js 14 构建的现代化 Web 应用程序
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link
              href="/about"
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="mb-3 text-2xl font-semibold text-gray-800 dark:text-gray-200">
                关于我们{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  →
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                了解更多关于这个项目的信息。
              </p>
            </Link>

            <Link
              href="/features"
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="mb-3 text-2xl font-semibold text-gray-800 dark:text-gray-200">
                功能特性{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  →
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                探索我们提供的各种功能。
              </p>
            </Link>

            <Link
              href="/contact"
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="mb-3 text-2xl font-semibold text-gray-800 dark:text-gray-200">
                联系我们{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  →
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                有任何问题？随时联系我们。
              </p>
            </Link>

            <Link
              href="/docs"
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="mb-3 text-2xl font-semibold text-gray-800 dark:text-gray-200">
                文档{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  →
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                查看详细的使用文档和API参考。
              </p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
