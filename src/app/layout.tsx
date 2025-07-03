import type { Metadata } from 'next'
import './global.css'

const title = '개혁신당 국민연금 계산기'
const description = '구/신연금 분리하면 어떻게 될까요?'

export const metadata: Metadata = {
  title,
  description,
  appleWebApp: {
    capable: true,
    title: 'NextJS Lite',
    statusBarStyle: 'default',
  },
  openGraph: {
    title,
    description,
    images: [{
      url: '/og.png',
      width: 1200,
      height: 630,
      alt: 'Site preview',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  )
}
