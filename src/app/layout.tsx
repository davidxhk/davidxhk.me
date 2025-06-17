import type { Metadata } from "next"

import { JetBrains_Mono, Public_Sans, Sofia_Sans, Teko } from "next/font/google"
import Image from "next/image"

import { GithubIcon } from "@/lib/ui/icons/github-icon"
import { LinkedinIcon } from "@/lib/ui/icons/linkedin-icon"
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
        <footer className="bg-gradient-to-br from-amber-100 via-emerald-200 to-cyan-500">
          <div className="bg-gradient-to-b from-white to-transparent to-50% backdrop-blur-xs">
            <div className="mx-auto w-full max-w-3xl px-6 py-8">
              <a
                href="https://gravatar.com/davidxhk"
                target="_blank"
                className="inline-block"
              >
                <Image
                  alt="My avatar"
                  src="https://gravatar.com/avatar/e20e63322ebf71cc9cc83eb082510d52c1e5d97dfb5a017dfe7125e9195600fe?s=400"
                  width={400}
                  height={400}
                  className="size-40 rounded-full border border-slate-800"
                />
              </a>

              <h2 className="mt-4 mb-2 font-headline text-4xl tracking-tight text-shadow-sm text-shadow-white">
                David Xie Han Keong
              </h2>

              <p className="mb-4 font-accent font-light text-slate-600 italic text-shadow-white text-shadow-xs">
                Building better web products for people
              </p>

              <nav className="flex items-center gap-4 p-2">
                <a
                  href="https://linkedin.com/in/davidxhk"
                  target="_blank"
                  className="inline-block text-slate-700 hover:scale-105 focus-visible:scale-105 active:scale-97 active:text-slate-800"
                >
                  <LinkedinIcon className="size-8" />
                </a>

                <a
                  href="https://github.com/davidxhk"
                  target="_blank"
                  className="inline-block text-slate-700 hover:scale-105 focus-visible:scale-105 active:scale-97 active:text-slate-800"
                >
                  <GithubIcon className="size-8.5" />
                </a>
              </nav>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
