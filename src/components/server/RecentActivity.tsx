import { QuizSessionService } from '@/services/quizSessionService'
import { Clock, TrendingUp, Target, Award, Calendar } from 'lucide-react'
import Link from 'next/link'

interface RecentActivityProps {
  userId?: string
  limit?: number
  showGlobalActivity?: boolean
}

export async function RecentActivity({ 
  userId, 
  limit = 5,
  showGlobalActivity = true 
}: RecentActivityProps) {
  // Get recent quiz sessions
  const recentSessions = await QuizSessionService.getLeaderboard(undefined, limit * 2)
  
  // Filter by user if userId provided, otherwise show global activity
  const sessions = userId 
    ? recentSessions.filter(session => session.userId === userId).slice(0, limit)
    : recentSessions.slice(0, limit)

  if (sessions.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-primary-600" />
          {userId ? 'La Tua Attività Recente' : 'Attività Recente'}
        </h3>
        <div className="text-center py-8">
          <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500 mb-4">
            {userId ? 'Non hai ancora completato nessun quiz.' : 'Nessuna attività recente.'}
          </p>
          <Link
            href="/quiz/frontend"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
          >
            Inizia il Primo Quiz
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-6 flex items-center gap-2">
        <Clock className="w-5 h-5 text-primary-600" />
        {userId ? 'La Tua Attività Recente' : 'Attività Recente'}
        {!userId && (
          <span className="text-sm font-normal text-gray-500 ml-2">
            · Ultimi {limit} quiz
          </span>
        )}
      </h3>

      <div className="space-y-4">
        {sessions.map((session, index) => {
          const isRecent = new Date().getTime() - new Date(session.completedAt).getTime() < 24 * 60 * 60 * 1000
          const userDisplayName = session.user?.name || session.user?.email || `Utente ${session.userId?.slice(-4) || 'Anonimo'}`
          
          return (
            <div
              key={session.id}
              className={`flex items-center justify-between p-4 rounded-lg border transition-all hover:shadow-md ${
                isRecent ? 'bg-primary-50 border-primary-200' : 'bg-gray-50 border-gray-200'
              }`}
            >
              <div className="flex items-center gap-4">
                {/* Rank indicator */}
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  index === 0 ? 'bg-yellow-100 text-yellow-800' :
                  index === 1 ? 'bg-gray-100 text-gray-700' :
                  index === 2 ? 'bg-orange-100 text-orange-700' :
                  'bg-gray-50 text-gray-600'
                }`}>
                  {index + 1}
                </div>

                <div className="min-w-0 flex-1">
                  {!userId && (
                    <p className="text-sm font-medium text-gray-900 mb-1">
                      {userDisplayName}
                    </p>
                  )}
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="capitalize font-medium">
                      {session.category}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span>
                      {new Date(session.completedAt).toLocaleDateString('it-IT', {
                        day: 'numeric',
                        month: 'short',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                    {isRecent && (
                      <>
                        <span className="text-gray-400">•</span>
                        <span className="text-primary-600 font-medium">Nuovo!</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {/* Score */}
                <div className="text-right">
                  <div className={`text-lg font-bold ${
                    session.score >= 80 ? 'text-green-600' :
                    session.score >= 60 ? 'text-yellow-600' :
                    'text-red-600'
                  }`}>
                    {session.score}%
                  </div>
                  <div className="text-xs text-gray-500 flex items-center gap-1">
                    <Target className="w-3 h-3" />
                    {session.correctAnswers}/{session.totalQuestions}
                  </div>
                </div>

                {/* Time */}
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-700">
                    {Math.floor(session.timeSpent / 60)}:{(session.timeSpent % 60).toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs text-gray-500">tempo</div>
                </div>

                {/* Performance indicator */}
                <div className="flex-shrink-0">
                  {session.score >= 90 ? (
                    <Award className="w-5 h-5 text-yellow-500" />
                  ) : session.score >= 70 ? (
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  ) : (
                    <Target className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Show more link */}
      {sessions.length === limit && (
        <div className="mt-6 text-center">
          <Link
            href="/dashboard"
            className="text-sm font-medium text-primary-600 hover:text-primary-700"
          >
            Vedi Tutta l'Attività →
          </Link>
        </div>
      )}
    </div>
  )
}