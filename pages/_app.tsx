import React from 'react'
import type { AppProps } from 'next/app'
import '@/index.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  )
}
