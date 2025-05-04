'use client'

import { ThemeProvider } from 'next-themes'
import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'

export default function ClientThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
      {mounted ? (
        <>
          <Navbar />
          <main>{children}</main>
        </>
      ) : (
        <main>{children}</main>
      )}
    </ThemeProvider>
  )
}