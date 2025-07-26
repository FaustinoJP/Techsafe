import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TechSafe Solutions',
  description: 'Techsafe Solutions - Your Trusted Partner',
  generator: 'Júlio Dala',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
