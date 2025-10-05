'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export function HeroSection() {
  const { t } = useLanguage()

  return (
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
  )
}