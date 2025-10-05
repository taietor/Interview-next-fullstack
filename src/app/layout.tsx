import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata: Metadata = {
  title: {
    default: 'Taietor Fullstack Trainer',
    template: '%s | Taietor Fullstack Trainer'
  },
  description: 'Allenati per i colloqui di lavoro fullstack con quiz interattivi su React, Next.js, Node.js, TypeScript, database e DevOps. Preparazione completa per sviluppatori fullstack.',
  keywords: [
    'fullstack developer',
    'interview preparation', 
    'react quiz',
    'nextjs training',
    'typescript interview',
    'nodejs quiz',
    'database training',
    'devops quiz',
    'web development',
    'coding interview',
    'javascript training',
    'frontend developer',
    'backend developer',
    'taietor'
  ],
  authors: [{ name: 'Taietor', url: 'https://taietor.com' }],
  creator: 'Taietor',
  publisher: 'Taietor',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://taietor.com'),
  alternates: {
    canonical: '/',
    languages: {
      'it-IT': '/it',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    alternateLocale: ['en_US'],
    title: 'Taietor Fullstack Trainer - Preparazione Colloqui Sviluppatori',
    description: 'Allenati per i colloqui di lavoro fullstack con quiz interattivi e spiegazioni dettagliate. React, Next.js, Node.js, TypeScript e molto altro.',
    siteName: 'Taietor Fullstack Trainer',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Taietor Fullstack Trainer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taietor Fullstack Trainer',
    description: 'Allenati per i colloqui di lavoro fullstack con quiz interattivi e spiegazioni dettagliate.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className="h-full" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6366f1" />
        <meta name="application-name" content="Taietor Fullstack Trainer" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Taietor Trainer" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#6366f1" />
      </head>
      <body className="h-full bg-gray-50 dark:bg-gray-900 antialiased transition-colors duration-300" suppressHydrationWarning>
        <ThemeProvider>
          <LanguageProvider>
            <div className="min-h-full">
              {children}
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}