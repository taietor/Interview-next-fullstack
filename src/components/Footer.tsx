import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Taietor Fullstack Trainer
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Allenati per i colloqui di lavoro fullstack con quiz interattivi, 
              esempi di codice e spiegazioni dettagliate su Next.js, React, 
              TypeScript, Prisma, Docker, AWS, Azure e molto altro.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/taietor"
                className="text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/taietor"
                className="text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://taietor.com"
                className="text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Quiz
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/quiz/frontend" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                  Frontend
                </Link>
              </li>
              <li>
                <Link href="/quiz/backend" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                  Backend
                </Link>
              </li>
              <li>
                <Link href="/quiz/database" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                  Database
                </Link>
              </li>
              <li>
                <Link href="/quiz/devops" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                  DevOps
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Risorse
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/theory" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                  Teoria
                </Link>
              </li>
              <li>
                <Link href="/examples" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                  Esempi Codice
                </Link>
              </li>
              <li>
                <Link href="/tips" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                  Consigli
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            © 2024 Taietor Fullstack Trainer. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  )
}