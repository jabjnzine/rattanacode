// app/providers.tsx

"use client" 
import {HeroUIProvider} from '@heroui/react'
import { ThemeProvider } from './contexts/ThemeContext'

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <HeroUIProvider>
        {children}
      </HeroUIProvider>
    </ThemeProvider>
  )
}