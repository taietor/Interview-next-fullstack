export interface Question {
  id: string
  question: string
  code?: string
  options: string[]
  correct: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  category: string
  tags: string[]
}

export interface QuizResult {
  score: number
  totalQuestions: number
  correctAnswers: Question[]
  incorrectAnswers: Question[]
  timeSpent: number
}

export interface QuizSession {
  questions: Question[]
  currentQuestionIndex: number
  answers: Record<string, number>
  startTime: number
  isCompleted: boolean
}