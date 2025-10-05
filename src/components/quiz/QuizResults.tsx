'use client'

import { QuizResult } from '@/lib/types'
import { CheckCircle, XCircle, Trophy, Clock, Target, RotateCcw, Play } from 'lucide-react'

interface QuizResultsProps {
  results: QuizResult
  category: string
  onRestart: () => void
  onNewQuiz: () => void
}

export default function QuizResults({ results, category, onRestart, onNewQuiz }: QuizResultsProps) {
  const { score, totalQuestions, correctAnswers, incorrectAnswers, timeSpent } = results
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600'
    if (score >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getScoreMessage = (score: number) => {
    if (score >= 90) return '🎉 Eccellente! Sei un esperto!'
    if (score >= 80) return '👏 Ottimo lavoro! Molto bene!'
    if (score >= 70) return '👍 Buono! Continua così!'
    if (score >= 60) return '📚 Discreto, ma puoi migliorare'
    return '💪 Continua a studiare, ce la farai!'
  }

  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Header Results */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-4">
          <Trophy className="h-10 w-10 text-primary-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Quiz {category} Completato!
        </h1>
        <p className="text-lg text-gray-600">
          {getScoreMessage(score)}
        </p>
      </div>

      {/* Score Card */}
      <div className="card p-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className={`text-4xl font-bold mb-2 ${getScoreColor(score)}`}>
              {score}%
            </div>
            <div className="text-gray-600">Punteggio</div>
          </div>
          
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">
              {correctAnswers.length}/{totalQuestions}
            </div>
            <div className="text-gray-600">Risposte Corrette</div>
          </div>
          
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">
              {formatTime(timeSpent)}
            </div>
            <div className="text-gray-600">Tempo Impiegato</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Progresso</span>
            <span>{correctAnswers.length} su {totalQuestions}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className={`h-3 rounded-full transition-all duration-500 ${
                score >= 80 ? 'bg-green-500' : score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
              }`}
              style={{ width: `${score}%` }}
            />
          </div>
        </div>
      </div>

      {/* Detailed Results */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Correct Answers */}
        <div className="card p-6">
          <div className="flex items-center mb-4">
            <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">
              Risposte Corrette ({correctAnswers.length})
            </h3>
          </div>
          
          <div className="space-y-3">
            {correctAnswers.map((question) => (
              <div key={question.id} className="p-3 bg-green-50 border border-green-200 rounded-lg">
                <div className="font-medium text-green-900 mb-1">
                  {question.question}
                </div>
                <div className="text-sm text-green-700">
                  {question.category} • {question.difficulty}
                </div>
              </div>
            ))}
            
            {correctAnswers.length === 0 && (
              <div className="text-center text-gray-500 py-4">
                Nessuna risposta corretta questa volta 😅
              </div>
            )}
          </div>
        </div>

        {/* Incorrect Answers */}
        <div className="card p-6">
          <div className="flex items-center mb-4">
            <XCircle className="h-6 w-6 text-red-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">
              Da Rivedere ({incorrectAnswers.length})
            </h3>
          </div>
          
          <div className="space-y-3">
            {incorrectAnswers.map((question) => (
              <div key={question.id} className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <div className="font-medium text-red-900 mb-1">
                  {question.question}
                </div>
                <div className="text-sm text-red-700 mb-2">
                  {question.category} • {question.difficulty}
                </div>
                <details className="text-sm">
                  <summary className="cursor-pointer text-red-800 font-medium">
                    Vedi spiegazione
                  </summary>
                  <div className="mt-2 text-red-700 prose prose-sm">
                    <div dangerouslySetInnerHTML={{ 
                      __html: question.explanation.replace(
                        /`([^`]+)`/g, 
                        '<code class="bg-red-100 px-1 py-0.5 rounded text-xs">$1</code>'
                      ).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
                    }} />
                  </div>
                </details>
              </div>
            ))}
            
            {incorrectAnswers.length === 0 && (
              <div className="text-center text-gray-500 py-4">
                Perfetto! Tutte le risposte corrette! 🎉
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={onNewQuiz}
          className="btn-primary px-8 py-3 flex items-center justify-center"
        >
          <Play className="h-5 w-5 mr-2" />
          Nuovo Quiz
        </button>
        
        <button
          onClick={onRestart}
          className="btn-secondary px-8 py-3 flex items-center justify-center"
        >
          <RotateCcw className="h-5 w-5 mr-2" />
          Cambia Categoria
        </button>
      </div>

      {/* Tips Section */}
      <div className="card p-6 mt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          💡 Consigli per Migliorare
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
          <div>
            <strong>Per i colloqui:</strong>
            <ul className="list-disc list-inside mt-1 space-y-1">
              <li>Spiega il tuo ragionamento</li>
              <li>Ammetti quando non sai qualcosa</li>
              <li>Fai domande di chiarimento</li>
            </ul>
          </div>
          
          <div>
            <strong>Per lo studio:</strong>
            <ul className="list-disc list-inside mt-1 space-y-1">
              <li>Rivedi gli argomenti sbagliati</li>
              <li>Pratica con esempi reali</li>
              <li>Studia i pattern comuni</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}