// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { ThemeScript } from './theme-script'
import Providers from './providers'

export const metadata: Metadata = {
  title: 'Your App Title',
  description: 'App description here',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}