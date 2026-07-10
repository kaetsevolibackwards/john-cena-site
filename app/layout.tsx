import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Error',
  description: 'An error has occurred',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
