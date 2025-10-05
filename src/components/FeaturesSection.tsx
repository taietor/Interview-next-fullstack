'use client'

import { 
  Code, 
  Brain, 
  BookOpen, 
  Cloud,
} from 'lucide-react'

export function FeaturesSection() {
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
  )
}