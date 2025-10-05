import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { 
  Code, 
  Brain, 
  BookOpen, 
  Cloud,
} from 'lucide-react'
import { QuizStats } from '@/components/server/QuizStats'
import { CategoryList } from '@/components/server/CategoryList'
import { HeroSection } from '@/components/HeroSection'
import { FeaturesSection } from '@/components/FeaturesSection'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Stats Section */}
        <QuizStats />

        {/* Features Section */}
        <FeaturesSection />

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
      <Footer />
    </>
  )
}