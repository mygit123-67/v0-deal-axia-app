import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' })

export const metadata: Metadata = {
  title: 'Dealaxia - AI-Powered M&A Deal Execution Platform',
  description: 'Run a professional-grade M&A process without a full investment bank. AI-powered CIM generation, valuations, deal management, and secure data rooms.',
  keywords: ['M&A', 'business broker', 'CIM generation', 'business valuation', 'deal management', 'data room', 'investment banking'],
  openGraph: {
    title: 'Dealaxia - AI-Powered M&A Deal Execution Platform',
    description: 'Run a professional-grade M&A process without a full investment bank.',
    type: 'website',
    url: 'https://dealaxia.com',
  },
}

export const viewport: Viewport = {
  themeColor: '#09090b',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
