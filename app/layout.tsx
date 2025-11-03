import type { Metadata } from 'next'
import { Open_Sans, Poppins, Rajdhani } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const rajdhani = Rajdhani({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-rajdhani',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Axio Ventures - Your Trusted Partner in Procurement, Technology & Security Solutions',
  description: 'Axio Ventures delivers tailored, innovative, and cost-effective solutions in government & defense procurement, smart security, IT & software development, infrastructure, and technology sourcing.',
  keywords: 'procurement, technology solutions, security, IT services, government procurement, defense',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${openSans.variable} ${poppins.variable} ${rajdhani.variable}`}>
      <body className="font-sans bg-background text-gray-800">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
