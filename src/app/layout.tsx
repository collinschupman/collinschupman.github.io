import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Collin Schupman - Audio Programmer & Musician",
  description: "Collin Schupman is an audio programmer and musician specializing in pro audio and gaming",
  openGraph: {
    title: "Collin Schupman - Audio Programmer & Musician",
    description: "Collin Schupman is an audio programmer and musician specializing in pro audio and gaming",
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
