import { prisma } from '@/lib/prisma'
import { QuizStats } from '@/types'

export class QuizSessionService {
  static async createSession(data: {
    userId?: string
    category: string
    totalQuestions: number
    correctAnswers: number
    score: number
    timeSpent: number
    answers: Array<{
      questionId: string
      userAnswer: number
      isCorrect: boolean
      timeSpent?: number
    }>
  }) {
    return await prisma.quizSession.create({
      data: {
        userId: data.userId,
        category: data.category,
        totalQuestions: data.totalQuestions,
        correctAnswers: data.correctAnswers,
        score: data.score,
        timeSpent: data.timeSpent,
        answers: {
          create: data.answers
        }
      },
      include: {
        answers: {
          include: {
            question: true
          }
        }
      }
    })
  }

  static async getSessionById(id: string) {
    return await prisma.quizSession.findUnique({
      where: { id },
      include: {
        answers: {
          include: {
            question: true
          }
        },
        user: true
      }
    })
  }

  static async getUserSessions(userId: string) {
    return await prisma.quizSession.findMany({
      where: { userId },
      orderBy: { completedAt: 'desc' },
      include: {
        answers: {
          include: {
            question: true
          }
        }
      }
    })
  }

  static async getQuizStats(userId?: string): Promise<QuizStats> {
    const whereClause = userId ? { userId } : {}

    const [sessions, categoryStats] = await Promise.all([
      prisma.quizSession.findMany({
        where: whereClause,
        select: {
          score: true,
          timeSpent: true,
          category: true
        }
      }),
      prisma.quizSession.groupBy({
        by: ['category'],
        where: whereClause,
        _count: {
          id: true
        },
        _avg: {
          score: true
        },
        _max: {
          score: true
        }
      })
    ])

    const totalQuizzes = sessions.length
    const averageScore = sessions.length > 0 
      ? Math.round(sessions.reduce((sum, session) => sum + session.score, 0) / sessions.length)
      : 0
    const bestScore = sessions.length > 0 
      ? Math.max(...sessions.map(s => s.score))
      : 0
    const totalTimeSpent = sessions.reduce((sum, session) => sum + session.timeSpent, 0)

    const categoryStatsFormatted = categoryStats.reduce((acc, stat) => {
      acc[stat.category] = {
        totalQuizzes: stat._count.id,
        averageScore: Math.round(stat._avg.score || 0),
        bestScore: stat._max.score || 0
      }
      return acc
    }, {} as Record<string, { totalQuizzes: number; averageScore: number; bestScore: number }>)

    return {
      totalQuizzes,
      averageScore,
      bestScore,
      totalTimeSpent,
      categoryStats: categoryStatsFormatted
    }
  }

  static async getLeaderboard(category?: string, limit: number = 10) {
    const whereClause = category ? { category } : {}

    return await prisma.quizSession.findMany({
      where: whereClause,
      orderBy: [
        { score: 'desc' },
        { timeSpent: 'asc' }
      ],
      take: limit,
      include: {
        user: {
          select: {
            name: true,
            email: true
          }
        }
      }
    })
  }
}