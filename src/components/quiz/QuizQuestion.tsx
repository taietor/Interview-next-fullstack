'use client'

import { useState } from 'react'
import { Question } from '@/lib/types'
import { CheckCircle, XCircle, Clock, Code } from 'lucide-react'

interface QuizQuestionProps {
  question: Question
  questionNumber: number
  totalQuestions: number
  onAnswer: (questionId: string, answerIndex: number) => void
  selectedAnswer?: number
  showResult?: boolean
  onNext: () => void
  onPrevious: () => void
  canGoNext: boolean
  canGoPrevious: boolean
}

export default function QuizQuestion({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  selectedAnswer,
  showResult = false,
  onNext,
  onPrevious,
  canGoNext,
  canGoPrevious,
}: QuizQuestionProps) {
  const [showExplanation, setShowExplanation] = useState(false)

  const handleAnswerSelect = (answerIndex: number) => {
    if (!showResult) {
      onAnswer(question.id, answerIndex)
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-800'
      case 'medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'hard':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const isCorrectAnswer = (index: number) => index === question.correct
  const isSelectedAnswer = (index: number) => index === selectedAnswer

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium text-gray-500">
            Domanda {questionNumber} di {totalQuestions}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(question.difficulty)}`}>
            {question.difficulty}
          </span>
          <span className="px-2 py-1 bg-primary-100 text-primary-800 rounded-full text-xs font-medium">
            {question.category}
          </span>
        </div>
        
        {/* Progress Bar */}
        <div className="flex-1 max-w-xs ml-8">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Question Card */}
      <div className="card p-8 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          {question.question}
        </h2>

        {question.code && (
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <Code className="h-4 w-4 text-gray-500 mr-2" />
              <span className="text-sm font-medium text-gray-700">Codice di esempio:</span>
            </div>
            <pre className="code-block">
              <code>{question.code}</code>
            </pre>
          </div>
        )}

        {/* Options */}
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={showResult}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                showResult && isCorrectAnswer(index)
                  ? 'border-green-500 bg-green-50 text-green-900'
                  : showResult && isSelectedAnswer(index) && !isCorrectAnswer(index)
                  ? 'border-red-500 bg-red-50 text-red-900'
                  : isSelectedAnswer(index)
                  ? 'border-primary-500 bg-primary-50 text-primary-900'
                  : 'border-gray-200 bg-white text-gray-900 hover:border-gray-300 hover:bg-gray-50'
              } ${showResult ? 'cursor-default' : 'cursor-pointer'}`}
            >
              <div className="flex items-center">
                <span className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-current mr-3 flex items-center justify-center text-xs font-medium">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="flex-1">{option}</span>
                {showResult && (
                  <span className="flex-shrink-0 ml-3">
                    {isCorrectAnswer(index) ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : isSelectedAnswer(index) && !isCorrectAnswer(index) ? (
                      <XCircle className="h-5 w-5 text-red-600" />
                    ) : null}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Explanation */}
        {showResult && (
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <button
              onClick={() => setShowExplanation(!showExplanation)}
              className="w-full text-left flex items-center justify-between text-blue-900 font-medium mb-2"
            >
              <span>Spiegazione</span>
              <span className="text-blue-600">
                {showExplanation ? '−' : '+'}
              </span>
            </button>
            {showExplanation && (
              <div className="text-blue-800 prose prose-sm max-w-none">
                <div dangerouslySetInnerHTML={{ __html: question.explanation.replace(/`([^`]+)`/g, '<code class="bg-blue-100 px-1 py-0.5 rounded text-xs">$1</code>').replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>') }} />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button
          onClick={onPrevious}
          disabled={!canGoPrevious}
          className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
            canGoPrevious
              ? 'bg-gray-200 text-gray-900 hover:bg-gray-300'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          Precedente
        </button>

        <div className="flex items-center space-x-2 text-sm text-gray-500">
          {question.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          onClick={onNext}
          disabled={!canGoNext}
          className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
            canGoNext
              ? 'btn-primary'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          {questionNumber === totalQuestions ? 'Termina Quiz' : 'Successiva'}
        </button>
      </div>
    </div>
  )
}