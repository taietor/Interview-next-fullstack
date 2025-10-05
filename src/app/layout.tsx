import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fullstack Interview Trainer',
  description: 'Allenati per i colloqui di lavoro fullstack con Next.js, React, TypeScript, Prisma e molto altro',
  keywords: ['fullstack', 'interview', 'nextjs', 'react', 'typescript', 'prisma', 'docker', 'aws', 'azure'],
  authors: [{ name: 'Fullstack Interview Trainer' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className="h-full">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="h-full bg-gray-50 antialiased">
        <div className="min-h-full">
          {children}
        </div>
      </body>
    </html>
  )
}