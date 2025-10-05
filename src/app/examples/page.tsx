import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Code, Copy, ExternalLink, Github } from 'lucide-react'

const codeExamples = [
  {
    id: 'react-custom-hook',
    title: 'Custom Hook per API Calls',
    description: 'Un hook riusabile per gestire chiamate API con loading, error e data state',
    category: 'React',
    difficulty: 'Intermedio',
    tags: ['hooks', 'api', 'typescript'],
    code: `import { useState, useEffect } from 'react'

interface UseApiResult<T> {
  data: T | null
  loading: boolean
  error: string | null
  refetch: () => void
}

function useApi<T>(url: string): UseApiResult<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`)
      }
      
      const result = await response.json()
      setData(result)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [url])

  return { data, loading, error, refetch: fetchData }
}

// Utilizzo
function UserProfile({ userId }: { userId: string }) {
  const { data: user, loading, error, refetch } = useApi<User>(\`/api/users/\${userId}\`)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!user) return <div>User not found</div>

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <button onClick={refetch}>Refresh</button>
    </div>
  )
}`
  },
  {
    id: 'nextjs-api-route',
    title: 'API Route con Validation',
    description: 'API route Next.js con validazione TypeScript e error handling',
    category: 'Next.js',
    difficulty: 'Intermedio',
    tags: ['api', 'validation', 'typescript'],
    code: `// pages/api/users/[id].ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

// Schema di validazione
const updateUserSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  age: z.number().int().min(0).max(120).optional()
})

type User = {
  id: string
  name: string
  email: string
  age?: number
}

type ApiResponse<T> = {
  success: boolean
  data?: T
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<User>>
) {
  const { id } = req.query

  if (typeof id !== 'string') {
    return res.status(400).json({
      success: false,
      error: 'Invalid user ID'
    })
  }

  try {
    switch (req.method) {
      case 'GET':
        return await getUser(req, res, id)
      case 'PUT':
        return await updateUser(req, res, id)
      case 'DELETE':
        return await deleteUser(req, res, id)
      default:
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
        return res.status(405).json({
          success: false,
          error: \`Method \${req.method} not allowed\`
        })
    }
  } catch (error) {
    console.error('API Error:', error)
    return res.status(500).json({
      success: false,
      error: 'Internal server error'
    })
  }
}

async function getUser(
  req: NextApiRequest, 
  res: NextApiResponse<ApiResponse<User>>, 
  id: string
) {
  // Simulazione database query
  const user = await findUserById(id)
  
  if (!user) {
    return res.status(404).json({
      success: false,
      error: 'User not found'
    })
  }

  return res.status(200).json({
    success: true,
    data: user
  })
}

async function updateUser(
  req: NextApiRequest, 
  res: NextApiResponse<ApiResponse<User>>, 
  id: string
) {
  try {
    // Validazione input
    const validatedData = updateUserSchema.parse(req.body)
    
    const updatedUser = await updateUserById(id, validatedData)
    
    return res.status(200).json({
      success: true,
      data: updatedUser
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        error: \`Validation error: \${error.errors.map(e => e.message).join(', ')}\`
      })
    }
    throw error
  }
}`
  },
  {
    id: 'prisma-relations',
    title: 'Prisma Relations Avanzate',
    description: 'Gestione di relazioni complesse con Prisma ORM',
    category: 'Database',
    difficulty: 'Avanzato',
    tags: ['prisma', 'relations', 'database'],
    code: `// schema.prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  // Relations
  posts     Post[]
  comments  Comment[]
  profile   Profile?
  followers Follow[] @relation("UserFollowers")
  following Follow[] @relation("UserFollowing")

  @@map("users")
}

model Profile {
  id     String  @id @default(cuid())
  bio    String?
  avatar String?
  userId String  @unique
  user   User    @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@map("profiles")
}

model Post {
  id        String   @id @default(cuid())
  title     String
  content   String
  published Boolean  @default(false)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  authorId String
  author   User      @relation(fields: [authorId], references: [id])
  comments Comment[]
  tags     Tag[]

  @@map("posts")
}

model Comment {
  id        String   @id @default(cuid())
  content   String
  createdAt DateTime @default(now())

  postId String
  post   Post   @relation(fields: [postId], references: [id], onDelete: Cascade)
  
  authorId String
  author   User   @relation(fields: [authorId], references: [id])

  @@map("comments")
}

model Tag {
  id    String @id @default(cuid())
  name  String @unique
  posts Post[]

  @@map("tags")
}

model Follow {
  id          String @id @default(cuid())
  followerId  String
  followingId String

  follower  User @relation("UserFollowers", fields: [followerId], references: [id])
  following User @relation("UserFollowing", fields: [followingId], references: [id])

  @@unique([followerId, followingId])
  @@map("follows")
}

// Esempi di query avanzate
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Query con relazioni nested
async function getUserWithPosts(userId: string) {
  return await prisma.user.findUnique({
    where: { id: userId },
    include: {
      posts: {
        include: {
          comments: {
            include: {
              author: {
                select: {
                  name: true,
                  email: true
                }
              }
            }
          },
          tags: true
        },
        orderBy: {
          createdAt: 'desc'
        }
      },
      profile: true,
      _count: {
        select: {
          followers: true,
          following: true
        }
      }
    }
  })
}

// Query con aggregazioni
async function getPostStats() {
  return await prisma.post.groupBy({
    by: ['authorId'],
    _count: {
      id: true
    },
    _avg: {
      // Se avessi un campo rating
      // rating: true
    },
    having: {
      id: {
        _count: {
          gt: 5
        }
      }
    }
  })
}

// Transaction per operazioni atomiche
async function createPostWithTags(
  authorId: string, 
  title: string, 
  content: string, 
  tagNames: string[]
) {
  return await prisma.$transaction(async (tx) => {
    // Trova o crea i tag
    const tags = await Promise.all(
      tagNames.map(name =>
        tx.tag.upsert({
          where: { name },
          update: {},
          create: { name }
        })
      )
    )

    // Crea il post con i tag
    const post = await tx.post.create({
      data: {
        title,
        content,
        authorId,
        tags: {
          connect: tags.map(tag => ({ id: tag.id }))
        }
      },
      include: {
        tags: true,
        author: {
          select: {
            name: true,
            email: true
          }
        }
      }
    })

    return post
  })
}`
  },
  {
    id: 'docker-nextjs',
    title: 'Dockerfile per Next.js',
    description: 'Dockerfile ottimizzato per applicazioni Next.js in produzione',
    category: 'DevOps',
    difficulty: 'Intermedio',
    tags: ['docker', 'nextjs', 'production'],
    code: `# Dockerfile multi-stage per Next.js
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \\
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \\
  elif [ -f package-lock.json ]; then npm ci; \\
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \\
  else echo "Lockfile not found." && exit 1; \\
  fi

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build arguments
ARG DATABASE_URL
ARG NEXTAUTH_SECRET
ARG NEXTAUTH_URL

ENV DATABASE_URL=\${DATABASE_URL}
ENV NEXTAUTH_SECRET=\${NEXTAUTH_SECRET}
ENV NEXTAUTH_URL=\${NEXTAUTH_URL}

# Generate Prisma client
RUN npx prisma generate

# Build Next.js
RUN yarn build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]

# docker-compose.yml per sviluppo
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://postgres:password@db:5432/mydb
      - NEXTAUTH_SECRET=your-secret-key
      - NEXTAUTH_URL=http://localhost:3000
    depends_on:
      - db
    volumes:
      - .:/app
      - /app/node_modules
  
  db:
    image: postgres:15
    environment:
      POSTGRES_PASSWORD: password
      POSTGRES_DB: mydb
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

volumes:
  postgres_data:

# .dockerignore
node_modules
.next
.git
.gitignore
README.md
Dockerfile
.dockerignore
npm-debug.log
.nyc_output
.coverage
.coverage.*`
  }
]

export default function ExamplesPage() {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Principiante':
        return 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300'
      case 'Intermedio':
        return 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-300'
      case 'Avanzato':
        return 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300'
      default:
        return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'React':
        return 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300'
      case 'Next.js':
        return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300'
      case 'Database':
        return 'bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300'
      case 'DevOps':
        return 'bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-300'
      default:
        return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300'
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Esempi di 
                <span className="text-primary-600 dark:text-primary-400"> Codice</span>
              </h1>
              <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                Collezione di esempi pratici e pattern comuni per lo sviluppo fullstack.
                Codice pronto all'uso con spiegazioni dettagliate.
              </p>
            </div>
          </div>
        </div>

        {/* Code Examples */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-8">
            {codeExamples.map((example) => (
              <div key={example.id} className="card p-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                  <div className="mb-4 sm:mb-0">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {example.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">{example.description}</p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(example.category)}`}>
                      {example.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(example.difficulty)}`}>
                      {example.difficulty}
                    </span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {example.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Code Block */}
                <div className="relative">
                  <div className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-t-lg">
                    <div className="flex items-center space-x-2">
                      <Code className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-300 text-sm">
                        {example.category.toLowerCase()}.ts
                      </span>
                    </div>
                    
                    <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200">
                      <Copy className="h-4 w-4" />
                      <span className="text-sm">Copia</span>
                    </button>
                  </div>
                  
                  <pre className="bg-gray-900 text-gray-100 p-6 rounded-b-lg overflow-x-auto">
                    <code className="text-sm leading-relaxed">
                      {example.code}
                    </code>
                  </pre>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    💡 Prova questo codice nel tuo progetto
                  </div>
                  
                  <div className="flex space-x-4">
                    <button className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium">
                      <Github className="h-4 w-4" />
                      <span>GitHub</span>
                    </button>
                    
                    <button className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium">
                      <ExternalLink className="h-4 w-4" />
                      <span>CodeSandbox</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* More Examples CTA */}
        <div className="bg-white dark:bg-gray-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Vuoi vedere più esempi?
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-8">
              Abbiamo preparato centinaia di esempi per ogni scenario di sviluppo.
              Inizia con i quiz per scoprire i tuoi punti di forza e debolezza.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quiz/frontend"
                className="btn-primary px-8 py-3"
              >
                Fai un Quiz
              </Link>
              
              <Link
                href="/theory"
                className="btn-secondary px-8 py-3"
              >
                Studia la Teoria
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}