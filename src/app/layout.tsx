import type { Metadata } from "next"

import { JetBrains_Mono, Public_Sans, Sofia_Sans, Teko } from "next/font/google"

import { cn } from "@/utils/cn"

import "./globals.css"

const jetBrains_Mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

const public_Sans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
})

const sofia_Sans = Sofia_Sans({
  subsets: ["latin"],
  variable: "--font-sofia-sans",
})

const teko = Teko({
  subsets: ["latin"],
  variable: "--font-teko",
})

export const metadata: Metadata = {
  title: "Full Stack Engineer | David Xie",
  description: "My personal website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn(
        jetBrains_Mono.variable,
        public_Sans.variable,
        sofia_Sans.variable,
        teko.variable,
        "font-sans",
      )}
    >
      <body className="min-h-dvh max-w-screen overflow-x-hidden overflow-y-auto">
        {children}
      </body>
    </html>
  )
}
