import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RedBus Booking - Sullia to Bangalore',
  description: 'Book your bus from Sullia to Bangalore',
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
