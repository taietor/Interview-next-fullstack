import { QuestionService } from '@/services/questionService'
import { QuizSessionService } from '@/services/quizSessionService'

interface StatsProps {
  showUserStats?: boolean
  userId?: string
}

export async function QuizStats({ showUserStats = false, userId }: StatsProps) {
  const [generalStats, userStats] = await Promise.all([
    Promise.all([
      QuestionService.getCategoryStats(),
      QuestionService.getCategoryStats('frontend'),
      QuestionService.getCategoryStats('backend'),
      QuestionService.getCategoryStats('database'),
      QuestionService.getCategoryStats('devops'),
    ]),
    showUserStats && userId ? QuizSessionService.getQuizStats(userId) : null
  ])

  const [total, frontend, backend, database, devops] = generalStats

  const stats = [
    { name: 'Quiz Disponibili', value: `${total.total}+` },
    { name: 'Esempi di Codice', value: '150+' },
    { name: 'Tecnologie Coperte', value: '20+' },
    { name: 'Livelli di Difficoltà', value: '3' },
  ]

  const categoryStats = [
    { 
      name: 'Frontend', 
      total: frontend.total,
      easy: frontend.byDifficulty.easy || 0,
      medium: frontend.byDifficulty.medium || 0,
      hard: frontend.byDifficulty.hard || 0,
    },
    { 
      name: 'Backend', 
      total: backend.total,
      easy: backend.byDifficulty.easy || 0,
      medium: backend.byDifficulty.medium || 0,
      hard: backend.byDifficulty.hard || 0,
    },
    { 
      name: 'Database', 
      total: database.total,
      easy: database.byDifficulty.easy || 0,
      medium: database.byDifficulty.medium || 0,
      hard: database.byDifficulty.hard || 0,
    },
    { 
      name: 'DevOps', 
      total: devops.total,
      easy: devops.byDifficulty.easy || 0,
      medium: devops.byDifficulty.medium || 0,
      hard: devops.byDifficulty.hard || 0,
    },
  ]

  return (
    <div className="space-y-8">
      {/* General Stats */}
      <div className="bg-white dark:bg-gray-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {stat.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="bg-gray-50 dark:bg-gray-800 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Domande per Categoria
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categoryStats.map((category) => (
              <div key={category.name} className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">{category.name}</h4>
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                  {category.total}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                  <div className="flex justify-between">
                    <span>Facile:</span>
                    <span className="text-green-600 dark:text-green-400">{category.easy}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Medio:</span>
                    <span className="text-yellow-600 dark:text-yellow-400">{category.medium}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Difficile:</span>
                    <span className="text-red-600 dark:text-red-400">{category.hard}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* User Stats */}
      {userStats && (
        <div className="bg-white dark:bg-gray-900 py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Le Tue Statistiche
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  {userStats.totalQuizzes}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Quiz Completati</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  {userStats.averageScore}%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Punteggio Medio</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  {userStats.bestScore}%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Miglior Punteggio</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  {Math.round(userStats.totalTimeSpent / 60)}m
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Tempo Totale</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}