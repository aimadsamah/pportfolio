import type { Metadata } from 'next'
import { Syne, DM_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-dm-mono',
  display: 'swap',
})

// Cabinet Grotesk via Google Fonts variable import
const cabinet = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-cabinet',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aimad Samah — Full-Stack Developer',
  description:
    'Full-Stack Web Developer based in Algeria. Building performant, elegant applications with React, Next.js, Node.js, and TypeScript.',
  keywords: ['Full-Stack Developer', 'React', 'Next.js', 'TypeScript', 'Algeria'],
  authors: [{ name: 'Aimad Samah' }],
  openGraph: {
    title: 'Aimad Samah — Full-Stack Developer',
    description: 'Building digital products from Algeria to the world.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${syne.variable} ${dmMono.variable} ${cabinet.variable} bg-black text-white font-cabinet antialiased overflow-x-hidden cursor-none`}
      >
        {children}
      </body>
    </html>
  )
}
