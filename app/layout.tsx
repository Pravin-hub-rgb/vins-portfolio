// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { ThemeScript } from './theme-script'
import Providers from './providers'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: `Vin's Portfolio`,
  description: 'App description here',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}