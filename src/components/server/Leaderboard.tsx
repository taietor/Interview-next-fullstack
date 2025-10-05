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
      <div className="bg-white rounded-lg shadow-sm p-8 text-center">
        <Trophy className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Nessun risultato ancora
        </h3>
        <p className="text-gray-500">
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
        return 'bg-gradient-to-r from-yellow-50 to-amber-50 border-yellow-200'
      case 2:
        return 'bg-gradient-to-r from-gray-50 to-slate-50 border-gray-200'
      case 3:
        return 'bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200'
      default:
        return 'bg-white border-gray-100'
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-primary-600" />
            Classifica
            {category && (
              <span className="text-sm font-normal text-gray-500">
                · {category}
              </span>
            )}
          </h3>
          <div className="text-sm text-gray-500">
            Top {limit}
          </div>
        </div>
      </div>

      <div className="divide-y divide-gray-100">
        {sessions.map((session, index) => {
          const rank = index + 1
          const userDisplayName = session.user?.name || session.user?.email || `Utente ${session.userId?.slice(-4) || 'Anonimo'}`
          
          return (
            <div
              key={session.id}
              className={`px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors ${getRankColor(rank)}`}
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  {getRankIcon(rank)}
                </div>
                
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-primary-700">
                        {userDisplayName.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {userDisplayName}
                      </p>
                      <p className="text-xs text-gray-500">
                        {session.category} • {new Date(session.completedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-900">
                    {session.score}%
                  </div>
                  <div className="text-xs text-gray-500 flex items-center gap-1">
                    <Target className="w-3 h-3" />
                    {session.correctAnswers}/{session.totalQuestions}
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-700">
                    {Math.round(session.timeSpent / 60)}m {session.timeSpent % 60}s
                  </div>
                  <div className="text-xs text-gray-500 flex items-center gap-1">
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
        <div className="px-6 py-3 bg-gray-50 text-center">
          <p className="text-sm text-gray-500">
            Completa più quiz per scalare la classifica!
          </p>
        </div>
      )}
    </div>
  )
}