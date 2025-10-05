import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CategoryList } from '@/components/server/CategoryList'
import { Leaderboard } from '@/components/server/Leaderboard'
import { Brain, Trophy, Target } from 'lucide-react'

export default function QuizPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="text-center">
              <Brain className="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Scegli una Categoria Quiz
              </h1>
              <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                Metti alla prova le tue competenze fullstack
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-9xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Categories */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  Categorie Disponibili
                </h2>
                <CategoryList showStats={true} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  Top Punteggi
                </h2>
                <Leaderboard limit={5} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}