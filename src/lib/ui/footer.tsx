import Image from "next/image"

import { GithubIcon } from "@/lib/ui/icons/github-icon"
import { LinkedinIcon } from "@/lib/ui/icons/linkedin-icon"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-amber-100 via-emerald-200 to-cyan-500">
      <div className="bg-gradient-to-b from-white to-transparent to-50% backdrop-blur-xs">
        <div className="mx-auto w-full max-w-3xl px-6 py-8">
          <a
            href="https://gravatar.com/davidxhk"
            target="_blank"
            className="mb-4 inline-block"
          >
            <Image
              priority
              alt="My avatar"
              src="https://gravatar.com/avatar/e20e63322ebf71cc9cc83eb082510d52c1e5d97dfb5a017dfe7125e9195600fe?s=400"
              width={400}
              height={400}
              className="size-40 rounded-full border border-slate-800"
            />
          </a>

          <h1 className="mb-2 font-headline text-4xl tracking-tight text-shadow-sm text-shadow-white">
            David Xie Han Keong
          </h1>

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
  )
}
