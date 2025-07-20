import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { SideItem } from '@/components/layout/SideItem'
import './global.css'

const tossFace = localFont({
  src: './fonts/TossFaceFontMac.ttf',
  display: 'swap',
  variable: '--font-toss-face',
})

const title = '2025 국민연금 계산기'
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
    <html
      lang="ko"
      className={`
        ${tossFace.variable}
      `}
    >
      <head>
        <link
          rel="stylesheet"
          as="style"
          precedence="default"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body
        className="h-screen w-screen antialiased"
      >
        <div className="relative flex h-full w-full items-center justify-center">
          <div id="app-layout-side">
            <SideItem />
          </div>
          <div
            id="app-layout"
            className={`
              relative flex flex-col items-center justify-center bg-white
            `}
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
