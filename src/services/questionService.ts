import { prisma } from '@/lib/prisma'
import { Question } from '@/types'

export class QuestionService {
  static transformPrismaQuestion(prismaQuestion: any): Question {
    return {
      id: prismaQuestion.id,
      question: prismaQuestion.question,
      options: prismaQuestion.options,
      correct: prismaQuestion.correct,
      explanation: prismaQuestion.explanation,
      difficulty: prismaQuestion.difficulty as 'easy' | 'medium' | 'hard',
      category: prismaQuestion.category as 'frontend' | 'backend' | 'database' | 'devops',
      tags: prismaQuestion.tags,
      code: prismaQuestion.code || undefined,
    }
  }

  static async getQuestionsByCategory(category: string, limit?: number): Promise<Question[]> {
    const questions = await prisma.question.findMany({
      where: {
        category: category.toLowerCase(),
      },
      take: limit,
      orderBy: {
        createdAt: 'desc'
      }
    })

    return questions.map(this.transformPrismaQuestion)
  }

  static async getRandomQuestionsByCategory(category: string, count: number = 10): Promise<Question[]> {
    // Get all questions for the category first
    const totalQuestions = await prisma.question.count({
      where: {
        category: category.toLowerCase(),
      }
    })

    if (totalQuestions === 0) return []

    // Get random questions using raw SQL for better performance
    const questions = await prisma.$queryRaw<Question[]>`
      SELECT * FROM questions 
      WHERE category = ${category.toLowerCase()}
      ORDER BY RANDOM()
      LIMIT ${count}
    `

    return questions
  }

  static async getQuestionById(id: string): Promise<Question | null> {
    const question = await prisma.question.findUnique({
      where: { id }
    })
    
    return question ? this.transformPrismaQuestion(question) : null
  }

  static async getQuestionsByDifficulty(difficulty: string, limit?: number): Promise<Question[]> {
    const questions = await prisma.question.findMany({
      where: {
        difficulty: difficulty.toLowerCase(),
      },
      take: limit,
      orderBy: {
        createdAt: 'desc'
      }
    })
    
    return questions.map(this.transformPrismaQuestion)
  }

  static async getQuestionsByTags(tags: string[], limit?: number): Promise<Question[]> {
    const questions = await prisma.question.findMany({
      where: {
        tags: {
          hasSome: tags
        }
      },
      take: limit,
      orderBy: {
        createdAt: 'desc'
      }
    })
    
    return questions.map(this.transformPrismaQuestion)
  }

  static async getCategoryStats(category?: string) {
    const whereClause = category ? { category: category.toLowerCase() } : {}
    
    const [total, byDifficulty, tagStats] = await Promise.all([
      prisma.question.count({ where: whereClause }),
      prisma.question.groupBy({
        by: ['difficulty'],
        where: whereClause,
        _count: {
          id: true
        }
      }),
      prisma.question.findMany({
        where: whereClause,
        select: { tags: true },
      })
    ])

    // Count tags frequency
    const tagCounts: Record<string, number> = {}
    tagStats.forEach(question => {
      question.tags.forEach(tag => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1
      })
    })

    return {
      total,
      byDifficulty: byDifficulty.reduce((acc, item) => {
        acc[item.difficulty] = item._count.id
        return acc
      }, {} as Record<string, number>),
      byTag: tagCounts,
    }
  }
}