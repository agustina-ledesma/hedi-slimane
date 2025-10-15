// app/layout.tsx
import ClientWrapper from './ClientWrapper'
import type { Metadata } from 'next'
import './css/globals.css';

export const metadata: Metadata = {
  title: "Hedi Slimane",
  description: "Exploring the fashion houses and photography of Hedi Slimane",
  icons: { icon: "/favicon.ico" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  )
}
