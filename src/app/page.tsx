import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { 
  Code, 
  Database, 
  Cloud, 
  Server, 
  Brain, 
  BookOpen, 
  CheckCircle, 
  Users,
  Zap,
  Target
} from 'lucide-react'
import { QuizStats } from '@/components/server/QuizStats'
import { CategoryList } from '@/components/server/CategoryList'

const features = [
  {
    name: 'Quiz Interattivi',
    description: 'Testa le tue conoscenze con quiz su Frontend, Backend, Database e DevOps',
    icon: Brain,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    name: 'Esempi di Codice',
    description: 'Esplora esempi pratici con Next.js, React, TypeScript, Prisma e altro',
    icon: Code,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    name: 'Spiegazioni Dettagliate',
    description: 'Comprendi i concetti con spiegazioni chiare e esempi pratici',
    icon: BookOpen,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    name: 'Tecnologie Moderne',
    description: 'Focalizzati su tecnologie attuali: AWS, Azure, Docker, Kubernetes',
    icon: Cloud,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
  },
]



export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Allena le tue competenze
                <span className="text-primary-600"> Fullstack</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                Preparati per i colloqui di lavoro con quiz interattivi, esempi pratici 
                e spiegazioni dettagliate su tutte le tecnologie moderne del web development.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/quiz/frontend"
                  className="btn-primary px-8 py-3 text-lg"
                >
                  Inizia Quiz
                </Link>
                <Link
                  href="/theory"
                  className="btn-secondary px-8 py-3 text-lg"
                >
                  Studia Teoria
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <QuizStats />

        {/* Features Section */}
        <div className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="section-title">
                Tutto quello che ti serve per il successo
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.name}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Topics Section */}
        <div className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-title">
                Argomenti Coperti
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
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
      <Footer />
    </>
  )
}