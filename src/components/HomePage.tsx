'use client'

import Link from 'next/link'
import { 
  Code, 
  Brain, 
  BookOpen, 
  Cloud,
} from 'lucide-react'
import { QuizStats } from '@/components/server/QuizStats'
import { CategoryList } from '@/components/server/CategoryList'
import { useLanguage } from '@/contexts/LanguageContext'

export default function HomePage() {
  const { t } = useLanguage()

  const features = [
    {
      name: 'Quiz Interattivi',
      description: 'Testa le tue conoscenze con quiz su Frontend, Backend, Database e DevOps',
      icon: Brain,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20',
    },
    {
      name: 'Esempi di Codice',
      description: 'Esplora esempi pratici con Next.js, React, TypeScript, Prisma e altro',
      icon: Code,
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900/20',
    },
    {
      name: 'Spiegazioni Dettagliate',
      description: 'Comprendi i concetti con spiegazioni chiare e esempi pratici',
      icon: BookOpen,
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-100 dark:bg-purple-900/20',
    },
    {
      name: 'Tecnologie Moderne',
      description: 'Focalizzati su tecnologie attuali: AWS, Azure, Docker, Kubernetes',
      icon: Cloud,
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-100 dark:bg-orange-900/20',
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              {t('home.title')}
              <span className="text-primary-600 dark:text-primary-400"> {t('home.title.highlight')}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
              {t('home.subtitle')}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/quiz/frontend"
                className="btn-primary px-8 py-3 text-lg"
              >
                {t('home.cta.quiz')}
              </Link>
              <Link
                href="/theory"
                className="btn-secondary px-8 py-3 text-lg"
              >
                {t('home.cta.theory')}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <QuizStats />

      {/* Features Section */}
      <div className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">
              Tutto quello che ti serve per il successo
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              Una piattaforma completa per prepararti ai colloqui di lavoro 
              nel mondo del web development moderno.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="card p-6 text-center hover:shadow-md transition-shadow duration-200"
              >
                <div className={`mx-auto h-12 w-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Topics Section */}
      <div className="bg-white dark:bg-gray-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Argomenti Coperti
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              Esplora tutte le aree del fullstack development con contenuti 
              aggiornati e esempi pratici.
            </p>
          </div>
          
          <CategoryList />
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-600">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Inizia il tuo percorso di preparazione oggi
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-primary-100">
              Non aspettare il colloquio per scoprire le tue lacune. 
              Inizia ora e arriva preparato al meglio.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/quiz/frontend"
                className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Inizia Subito
              </Link>
              <Link
                href="/examples"
                className="text-white hover:text-primary-100 font-semibold"
              >
                Vedi Esempi →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}