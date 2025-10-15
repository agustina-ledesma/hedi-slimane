// app/ClientWrapper.tsx
'use client'
import React from 'react'
import { Providers } from './providers'
import NavWrapper from './components/navWrapper'
import FooterLayout from './components/FooterLayout'

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavWrapper />
      <Providers>{children}</Providers>
      <FooterLayout></FooterLayout>

    </>
  )
}
