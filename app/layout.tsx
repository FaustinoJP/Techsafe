import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Faustware Soluções',
  description: 'Faustware Soluções - Soluções para os nossos parceiros',
  generator: 'Júlio Dala and Edmilson Fernando contributor',
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/logo_faustware1.jpg" type="image/x-icon" />
      <body>{children}</body>
    </html>
  )
}
