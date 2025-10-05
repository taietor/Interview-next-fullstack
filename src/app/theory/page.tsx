import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { 
  Code, 
  Database, 
  Cloud, 
  Server, 
  BookOpen,
  ArrowRight
} from 'lucide-react'

const theoryTopics = [
  {
    category: 'Frontend',
    icon: Code,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    description: 'React, Next.js, TypeScript, CSS moderno',
    topics: [
      {
        title: 'React Fundamentals',
        description: 'Components, State, Props, Lifecycle',
        difficulty: 'Principiante'
      },
      {
        title: 'React Hooks',
        description: 'useState, useEffect, custom hooks',
        difficulty: 'Intermedio'
      },
      {
        title: 'Next.js Features',
        description: 'SSR, SSG, API Routes, App Router',
        difficulty: 'Intermedio'
      },
      {
        title: 'TypeScript Avanzato',
        description: 'Generics, Utility Types, Conditional Types',
        difficulty: 'Avanzato'
      },
      {
        title: 'Performance Optimization',
        description: 'Code Splitting, Lazy Loading, Memoization',
        difficulty: 'Avanzato'
      }
    ]
  },
  {
    category: 'Backend',
    icon: Server,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    description: 'Node.js, Express, API Design, Authentication',
    topics: [
      {
        title: 'Node.js Fundamentals',
        description: 'Event Loop, Modules, File System',
        difficulty: 'Principiante'
      },
      {
        title: 'Express.js',
        description: 'Routing, Middleware, Error Handling',
        difficulty: 'Intermedio'
      },
      {
        title: 'API Design',
        description: 'REST, GraphQL, OpenAPI, Versioning',
        difficulty: 'Intermedio'
      },
      {
        title: 'Authentication & Security',
        description: 'JWT, OAuth, CORS, Rate Limiting',
        difficulty: 'Avanzato'
      },
      {
        title: 'Microservices',
        description: 'Architecture, Communication, Deployment',
        difficulty: 'Avanzato'
      }
    ]
  },
  {
    category: 'Database',
    icon: Database,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    description: 'SQL, NoSQL, ORM, Database Design',
    topics: [
      {
        title: 'SQL Fundamentals',
        description: 'Queries, Joins, Indexes, Transactions',
        difficulty: 'Principiante'
      },
      {
        title: 'Database Design',
        description: 'Normalization, ER Diagrams, Constraints',
        difficulty: 'Intermedio'
      },
      {
        title: 'Prisma ORM',
        description: 'Schema, Migrations, Relations, Performance',
        difficulty: 'Intermedio'
      },
      {
        title: 'NoSQL Databases',
        description: 'MongoDB, Redis, Document Stores',
        difficulty: 'Intermedio'
      },
      {
        title: 'Database Performance',
        description: 'Query Optimization, Caching, Scaling',
        difficulty: 'Avanzato'
      }
    ]
  },
  {
    category: 'DevOps',
    icon: Cloud,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
    description: 'Docker, AWS, Azure, CI/CD, Kubernetes',
    topics: [
      {
        title: 'Docker Basics',
        description: 'Containers, Images, Dockerfile, Compose',
        difficulty: 'Principiante'
      },
      {
        title: 'AWS Services',
        description: 'EC2, S3, RDS, Lambda, CloudFormation',
        difficulty: 'Intermedio'
      },
      {
        title: 'Azure Platform',
        description: 'App Service, Functions, SQL Database',
        difficulty: 'Intermedio'
      },
      {
        title: 'CI/CD Pipelines',
        description: 'GitHub Actions, Azure DevOps, Jenkins',
        difficulty: 'Intermedio'
      },
      {
        title: 'Kubernetes',
        description: 'Pods, Services, Deployments, Helm',
        difficulty: 'Avanzato'
      }
    ]
  }
]

export default function TheoryPage() {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Principiante':
        return 'bg-green-100 text-green-800'
      case 'Intermedio':
        return 'bg-yellow-100 text-yellow-800'
      case 'Avanzato':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-primary-50 to-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Teoria e Concetti
                <span className="text-primary-600"> Fullstack</span>
              </h1>
              <p className="max-w-2xl mx-auto text-lg text-gray-600">
                Approfondisci i concetti teorici fondamentali per il web development moderno.
                Spiegazioni chiare, esempi pratici e best practices per ogni argomento.
              </p>
            </div>
          </div>
        </div>

        {/* Theory Topics */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-12">
            {theoryTopics.map((category) => (
              <div key={category.category} className="card p-8">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg ${category.bgColor} mr-4`}>
                    <category.icon className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {category.category}
                    </h2>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.topics.map((topic) => (
                    <div
                      key={topic.title}
                      className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer group"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                          {topic.title}
                        </h3>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary-600 transition-colors duration-200" />
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4">
                        {topic.description}
                      </p>
                      
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(topic.difficulty)}`}>
                        {topic.difficulty}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <Link
                    href={`/quiz/${category.category.toLowerCase()}`}
                    className="btn-primary inline-flex items-center"
                  >
                    <BookOpen className="h-4 w-4 mr-2" />
                    Fai il Quiz {category.category}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Study Tips */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Come Studiare Efficacemente
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-600">
                Suggerimenti per massimizzare il tuo apprendimento e prepararti al meglio per i colloqui.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Teoria Prima
                </h3>
                <p className="text-gray-600">
                  Studia i concetti teorici prima di fare i quiz. 
                  Comprendi il "perché" dietro ogni soluzione.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Pratica Attiva
                </h3>
                <p className="text-gray-600">
                  Scrivi codice, fai esperimenti. La programmazione 
                  si impara facendo, non solo leggendo.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Ripeti Spesso
                </h3>
                <p className="text-gray-600">
                  Ripassa regolarmente i concetti. La ripetizione 
                  spaziata è la chiave per la memorizzazione.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}