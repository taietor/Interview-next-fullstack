import { QuestionService } from '@/services/questionService'
import Quiz from '@/components/quiz/Quiz'
import Link from 'next/link'

interface ServerQuizProps {
  category: string
  categoryDisplayName: string
}

export async function ServerQuiz({ 
  category, 
  categoryDisplayName
}: ServerQuizProps) {
  // Check if questions exist for this category
  const questionsCount = await QuestionService.getCategoryStats(category)

  if (questionsCount.total === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Nessuna domanda trovata
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Non ci sono domande disponibili per la categoria "{categoryDisplayName}".
          </p>
          <Link
            href="/quiz"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 focus:ring-offset-white dark:focus:ring-offset-gray-900"
          >
            Torna alle Categorie
          </Link>
        </div>
      </div>
    )
  }

  // Render the Quiz component which will handle its own data loading
  return (
    <Quiz 
      category={category}
      categoryDisplayName={categoryDisplayName}
    />
  )
}