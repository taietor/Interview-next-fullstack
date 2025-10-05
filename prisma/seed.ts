import { PrismaClient } from '@prisma/client'
import { frontendQuestions, backendQuestions, databaseQuestions, devopsQuestions } from '../src/lib/questions'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Clear existing questions
  await prisma.quizAnswer.deleteMany()
  await prisma.quizSession.deleteMany()
  await prisma.question.deleteMany()

  // Insert frontend questions
  for (const question of frontendQuestions) {
    await prisma.question.create({
      data: {
        id: question.id,
        question: question.question,
        options: question.options,
        correct: question.correct,
        explanation: question.explanation,
        difficulty: question.difficulty,
        category: question.category,
        tags: question.tags,
        code: question.code,
      },
    })
  }

  // Insert backend questions
  for (const question of backendQuestions) {
    await prisma.question.create({
      data: {
        id: question.id,
        question: question.question,
        options: question.options,
        correct: question.correct,
        explanation: question.explanation,
        difficulty: question.difficulty,
        category: question.category,
        tags: question.tags,
        code: question.code,
      },
    })
  }

  // Insert database questions
  for (const question of databaseQuestions) {
    await prisma.question.create({
      data: {
        id: question.id,
        question: question.question,
        options: question.options,
        correct: question.correct,
        explanation: question.explanation,
        difficulty: question.difficulty,
        category: question.category,
        tags: question.tags,
        code: question.code,
      },
    })
  }

  // Insert devops questions
  for (const question of devopsQuestions) {
    await prisma.question.create({
      data: {
        id: question.id,
        question: question.question,
        options: question.options,
        correct: question.correct,
        explanation: question.explanation,
        difficulty: question.difficulty,
        category: question.category,
        tags: question.tags,
        code: question.code,
      },
    })
  }

  const totalQuestions = await prisma.question.count()
  console.log(`✅ Seeded ${totalQuestions} questions`)

  // Create some example users and quiz sessions for testing
  const testUser = await prisma.user.create({
    data: {
      email: 'test@example.com',
      name: 'Test User',
    },
  })

  await prisma.quizSession.create({
    data: {
      userId: testUser.id,
      category: 'frontend',
      totalQuestions: 10,
      correctAnswers: 8,
      score: 80,
      timeSpent: 600, // 10 minutes
    },
  })

  console.log('✅ Seeded test user and quiz session')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })