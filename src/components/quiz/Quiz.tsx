'use client'

import { useState, useEffect } from 'react'
import { Question, QuizSession, QuizResult } from '@/lib/types'
import { getQuestionsByCategory, shuffleArray } from '@/lib/questions'
import QuizQuestion from './QuizQuestion'
import QuizResults from './QuizResults'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Clock, Brain, Target } from 'lucide-react'

interface QuizProps {
  category: string
  categoryDisplayName: string
}

export default function Quiz({ category, categoryDisplayName }: QuizProps) {
  const [session, setSession] = useState<QuizSession | null>(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [showResult, setShowResult] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [timeSpent, setTimeSpent] = useState(0)
  const [startTime, setStartTime] = useState<number>(0)

  // Timer effect
  useEffect(() => {
    if (session && !quizCompleted) {
      const interval = setInterval(() => {
        setTimeSpent(Math.floor((Date.now() - startTime) / 1000))
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [session, quizCompleted, startTime])

  const initializeQuiz = (questionCount: number = 10) => {
    const allQuestions = getQuestionsByCategory(category)
    const shuffledQuestions = shuffleArray(allQuestions).slice(0, questionCount)
    
    const newSession: QuizSession = {
      questions: shuffledQuestions,
      currentQuestionIndex: 0,
      answers: {},
      startTime: Date.now(),
      isCompleted: false,
    }
    
    setSession(newSession)
    setCurrentQuestionIndex(0)
    setAnswers({})
    setShowResult(false)
    setQuizCompleted(false)
    setStartTime(Date.now())
    setTimeSpent(0)
  }

  const handleAnswer = (questionId: string, answerIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }))
  }

  const handleNext = () => {
    if (!session) return

    if (currentQuestionIndex < session.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
      setShowResult(false)
    } else {
      // Quiz completed
      completeQuiz()
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1)
      setShowResult(false)
    }
  }

  const showCurrentResult = () => {
    setShowResult(true)
  }

  const completeQuiz = () => {
    setQuizCompleted(true)
  }

  const getQuizResults = (): QuizResult | null => {
    if (!session) return null

    const correctAnswers: Question[] = []
    const incorrectAnswers: Question[] = []

    session.questions.forEach(question => {
      const userAnswer = answers[question.id]
      if (userAnswer === question.correct) {
        correctAnswers.push(question)
      } else {
        incorrectAnswers.push(question)
      }
    })

    return {
      score: Math.round((correctAnswers.length / session.questions.length) * 100),
      totalQuestions: session.questions.length,
      correctAnswers,
      incorrectAnswers,
      timeSpent
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  // Quiz setup screen
  if (!session) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-gray-50 py-8">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Quiz {categoryDisplayName}
              </h1>
              <p className="text-lg text-gray-600">
                Testa le tue competenze in {categoryDisplayName.toLowerCase()} 
                con domande pratiche e teoriche
              </p>
            </div>

            <div className="card p-8 max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <Brain className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  Inizia il Quiz
                </h2>
                <p className="text-gray-600">
                  Scegli il numero di domande e inizia l'allenamento
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <button
                  onClick={() => initializeQuiz(5)}
                  className="p-4 border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors duration-200"
                >
                  <Target className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                  <div className="font-semibold">Quiz Rapido</div>
                  <div className="text-sm text-gray-600">5 domande</div>
                </button>
                
                <button
                  onClick={() => initializeQuiz(10)}
                  className="p-4 border-2 border-primary-500 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors duration-200"
                >
                  <Brain className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                  <div className="font-semibold">Quiz Standard</div>
                  <div className="text-sm text-gray-600">10 domande</div>
                </button>
                
                <button
                  onClick={() => initializeQuiz(20)}
                  className="p-4 border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors duration-200"
                >
                  <Clock className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                  <div className="font-semibold">Quiz Completo</div>
                  <div className="text-sm text-gray-600">20 domande</div>
                </button>
              </div>

              <div className="text-center text-sm text-gray-500">
                <p>💡 Consiglio: Inizia con il quiz rapido per familiarizzare</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  // Quiz completed screen
  if (quizCompleted) {
    const results = getQuizResults()
    if (!results) return null

    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-gray-50 py-8">
          <QuizResults
            results={results}
            category={categoryDisplayName}
            onRestart={() => {
              setSession(null)
              setQuizCompleted(false)
            }}
            onNewQuiz={() => initializeQuiz(session.questions.length)}
          />
        </main>
        <Footer />
      </>
    )
  }

  // Quiz in progress
  const currentQuestion = session.questions[currentQuestionIndex]
  const selectedAnswer = answers[currentQuestion.id]
  const canGoNext = selectedAnswer !== undefined || showResult
  const canGoPrevious = currentQuestionIndex > 0

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          {/* Quiz Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Quiz {categoryDisplayName}
              </h1>
              <p className="text-gray-600">
                Domanda {currentQuestionIndex + 1} di {session.questions.length}
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-gray-600">
                <Clock className="h-5 w-5 mr-2" />
                <span className="font-mono">{formatTime(timeSpent)}</span>
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={showCurrentResult}
                  disabled={selectedAnswer === undefined || showResult}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    selectedAnswer !== undefined && !showResult
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Mostra Risposta
                </button>
              </div>
            </div>
          </div>

          <QuizQuestion
            question={currentQuestion}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={session.questions.length}
            onAnswer={handleAnswer}
            selectedAnswer={selectedAnswer}
            showResult={showResult}
            onNext={handleNext}
            onPrevious={handlePrevious}
            canGoNext={canGoNext}
            canGoPrevious={canGoPrevious}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}