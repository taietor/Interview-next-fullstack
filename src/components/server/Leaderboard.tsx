import { QuizSessionService } from '@/services/quizSessionService'
import { Trophy, Medal, Award, Clock, Target } from 'lucide-react'

interface LeaderboardProps {
  category?: string
  limit?: number
  timeframe?: 'all' | 'month' | 'week'
}

export async function Leaderboard({ 
  category, 
  limit = 10,
  timeframe = 'all' 
}: LeaderboardProps) {
  const sessions = await QuizSessionService.getLeaderboard(category, limit)

  if (sessions.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 text-center">
        <Trophy className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
          Nessun risultato ancora
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          Completa un quiz per vedere la classifica!
        </p>
      </div>
    )
  }

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />
      default:
        return (
          <div className="w-6 h-6 flex items-center justify-center text-sm font-medium text-gray-500">
            {rank}
          </div>
        )
    }
  }

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return 'bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border-yellow-200 dark:border-yellow-800'
      case 2:
        return 'bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-800 dark:to-slate-800 border-gray-200 dark:border-gray-700'
      case 3:
        return 'bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-amber-200 dark:border-amber-800'
      default:
        return 'bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700'
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white flex items-center gap-2">
            <Trophy className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            Classifica
            {category && (
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                · {category}
              </span>
            )}
          </h3>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Top {limit}
          </div>
        </div>
      </div>

      <div className="divide-y divide-gray-100 dark:divide-gray-700">
        {sessions.map((session, index) => {
          const rank = index + 1
          const userDisplayName = session.user?.name || session.user?.email || `Utente ${session.userId?.slice(-4) || 'Anonimo'}`
          
          return (
            <div
              key={session.id}
              className={`px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${getRankColor(rank)}`}
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  {getRankIcon(rank)}
                </div>
                
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                        {userDisplayName.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {userDisplayName}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {session.category} • {new Date(session.completedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {session.score}%
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <Target className="w-3 h-3" />
                    {session.correctAnswers}/{session.totalQuestions}
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {Math.round(session.timeSpent / 60)}m {session.timeSpent % 60}s
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Tempo impiegato
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {sessions.length === limit && (
        <div className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Completa più quiz per scalare la classifica!
          </p>
        </div>
      )}
    </div>
  )
}