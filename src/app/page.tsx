import Image from "next/image"
import Link from "next/link"

import { Separator } from "@/lib/ui/separator"
import { Header } from "@/lib/ui/header"
import { ExternalIcon } from "@/lib/ui/icons/external-icon"

export default function Home() {
  return (
    <>
      <Header
        title="Building better web products for people"
        className="mb-8 bg-gradient-to-br from-teal-600 via-orange-300 to-rose-600"
        created={1749019230400}
        lastUpdated={1750751427419}
      />

      <main className="mx-auto mb-8 w-full max-w-3xl px-6">
        <p className="mb-6">
          Hi there! I’m David, a frontend-focused full stack engineer based in
          Singapore. Welcome to my personal corner of the web, thank you for
          visiting!
        </p>

        <p className="mb-6">
          I built this website by hand to showcase my work experience and share
          my knowledge with the world. I hope I can teach you something new
          today.
        </p>

        <Separator />

        <h2 className="mt-8 mb-4 font-accent text-3xl font-light">
          My work experience
        </h2>

        <p className="mb-6">
          Since 2023, I’ve built web apps in spaces like mobile games and{" "}
          <a
            href="https://www.coinbase.com/learn/crypto-taxes/what-is-know-your-customer-kyc"
            target="_blank"
            className="whitespace-nowrap text-indigo-600 underline-offset-4 hover:underline focus:outline-offset-4 focus-visible:underline active:text-rose-600 active:underline"
          >
            <abbr title="know your customer">KYC</abbr>
            <ExternalIcon className="inline size-4 align-text-top" />
          </a>{" "}
          software that have been used by thousands of people: from a{" "}
          <Link
            href="/work/mythical-odyssey"
            className="text-indigo-600 underline-offset-4 hover:underline focus:outline-offset-4 focus-visible:underline active:text-rose-600 active:underline"
          >
            gaming web store
          </Link>{" "}
          to an{" "}
          <Link
            href="/work/bingo-on-demand"
            className="text-indigo-600 underline-offset-4 hover:underline focus:outline-offset-4 focus-visible:underline active:text-rose-600 active:underline"
          >
            SaaS admin panel
          </Link>
          .
        </p>

        <div className="mb-6 flex flex-wrap gap-4 p-2">
          <Link
            href="/work/mythical-odyssey"
            className="group relative w-full max-w-84 overflow-hidden rounded-md border border-slate-800 shadow-sm transition-all active:translate-y-px active:shadow-xs"
          >
            <Image
              src="/work/mythical-odyssey/topup.avif"
              alt=""
              width={1920}
              height={911}
              draggable={false}
              className="object-cover transition-all select-none group-hover:scale-105 group-focus-visible:scale-105 group-active:scale-105"
            />

            <p className="absolute inset-x-0 bottom-0 bg-white/50 px-3 py-4 font-headline text-2xl tracking-tight backdrop-blur-xs text-shadow-md text-shadow-white">
              Mythical Odyssey
            </p>
          </Link>

          <Link
            href="/work/bingo-on-demand"
            className="group relative w-full max-w-84 overflow-hidden rounded-md border border-slate-800 shadow-sm transition-all active:translate-y-px active:shadow-xs"
          >
            <Image
              src="/work/bingo-on-demand/project-list.avif"
              alt=""
              width={1920}
              height={911}
              draggable={false}
              className="object-cover transition-all select-none group-hover:scale-105 group-focus-visible:scale-105 group-active:scale-105"
            />

            <p className="absolute inset-x-0 bottom-0 bg-white/50 px-3 py-4 font-headline text-2xl tracking-tight backdrop-blur-xs text-shadow-md text-shadow-white">
              BINGO on-Demand
            </p>
          </Link>
        </div>

        <p className="mb-6">
          While I have experience across the entire stack, I tend to gravitate
          more towards the frontend. I work especially well with <b>Next.js</b>,{" "}
          <b>React</b>, and <b>Tailwind CSS</b>.
        </p>

        <h2 className="mt-8 mb-4 font-accent text-3xl font-light">
          My passion in tech
        </h2>

        <p className="mb-6">
          In spite of its difficulty, I truly enjoy building for the web. It
          highly appeals to my visual-kinesthetic side, and I take pride in
          crafting elegant and intuitive user interfaces that just work.
        </p>

        <div className="mb-6 p-2">
          <blockquote
            cite="https://blog.samaltman.com/super-successful-companies"
            className="mb-2 border-l-2 border-gray-200 px-4 font-accent font-light italic"
          >
            “Companies that grow up to be extremely successful... are obsessed
            with the quality of the product/experience.”
          </blockquote>

          <p>
            ― Sam Altman, <cite>Super successful companies</cite>
          </p>
        </div>

        <p className="mb-6">
          My interest in web building has led me to join various tech
          communities in Singapore. Through these events and meetups, I’ve been
          able to meet like-minded people, gain exposure to real-world projects,
          and learn many new things. Ultimately, I’m driven by my mission to{" "}
          <b>build better web products for people.</b>
        </p>

        <Separator />

        <h2 className="mt-8 mb-4 font-accent text-3xl font-light">
          What’s next
        </h2>

        <p className="mb-6">
          I’m always on the lookout to embark on new projects that solve
          real-world problems. If you’d like a copy of my latest resume, please
          reach out to me on{" "}
          <a
            href="https://linkedin.com/in/davidxhk"
            target="_blank"
            className="whitespace-nowrap text-indigo-600 underline-offset-4 hover:underline focus:outline-offset-4 focus-visible:underline active:text-rose-600 active:underline"
          >
            LinkedIn
            <ExternalIcon className="inline size-4 align-text-top" />
          </a>
          . I’d be happy to have a chat.
        </p>
      </main>
    </>
  )
}
