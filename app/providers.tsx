'use client'

import { ThemeProvider } from 'next-themes'
import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system" 
      enableSystem={true}
      // This disables server-side theme application
      enableColorScheme={true}
      // This tells next-themes to not apply the theme class during SSR
      disableTransitionOnChange
    >
      <div suppressHydrationWarning>
        {mounted && <Navbar />}
        <main>{children}</main>
      </div>
    </ThemeProvider>
  )
}