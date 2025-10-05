export interface Question {
  id: string
  question: string
  options: string[]
  correct: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  category: 'frontend' | 'backend' | 'database' | 'devops'
  tags: string[]
  code?: string
}

export interface QuizSession {
  questions: Question[]
  currentQuestionIndex: number
  answers: Record<string, number>
  startTime: number
  isCompleted: boolean
}

export interface QuizResult {
  score: number
  totalQuestions: number
  correctAnswers: Question[]
  incorrectAnswers: Question[]
  timeSpent: number
}

export interface QuizAnswer {
  questionId: string
  userAnswer: number
  isCorrect: boolean
  timeSpent?: number
}

export interface QuizStats {
  totalQuizzes: number
  averageScore: number
  bestScore: number
  totalTimeSpent: number
  categoryStats: Record<string, {
    totalQuizzes: number
    averageScore: number
    bestScore: number
  }>
}