import Image from "next/image"
import Link from "next/link"

import { ExternalIcon } from "@/lib/ui/icons/external-icon"
import { LocalTime } from "@/lib/ui/local-time"

export default function Home() {
  return (
    <>
      <header className="bg-gradient-to-bl from-rose-600 via-orange-300 to-teal-600">
        <div className="flex size-full min-h-80 items-end justify-center bg-gradient-to-b from-transparent from-50% to-white px-4 py-8 backdrop-blur-xs">
          <h1 className="font-headline text-6xl tracking-tight text-shadow-md text-shadow-white">
            Building better products for people
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4">
        <h2 className="mt-8 mb-2 font-accent text-3xl font-light">About me</h2>

        <p className="mb-4">
          Hi there! I’m David, a full stack engineer based in Singapore. Welcome
          to my personal corner of the web. It’s simple, but it shows who I am
          and what I enjoy. Hope you like it!
        </p>

        <h2 className="mt-8 mb-2 font-accent text-3xl font-light">
          My work experience
        </h2>

        <p className="mb-4">
          Since 2023, I’ve built products in spaces like mobile games and crypto
          that have been used by thousands of people: from a{" "}
          <Link
            href="/work/mythical-odyssey"
            className="text-[revert] underline-offset-4 hover:underline active:underline"
          >
            gaming web store
          </Link>{" "}
          to a{" "}
          <Link
            href="/work/bingo-on-demand"
            className="text-[revert] underline-offset-4 hover:underline active:underline"
          >
            customer verification dashboard
          </Link>
          .
        </p>

        <div className="mb-4 flex flex-wrap gap-4">
          <Link
            href="/work/mythical-odyssey"
            className="group relative w-96 max-w-full overflow-hidden rounded-md border border-gray-200 shadow-sm transition-all active:translate-y-px active:shadow-xs"
          >
            <Image
              src="/mo/topup.avif"
              alt=""
              width={1920}
              height={911}
              draggable={false}
              className="object-cover transition-all select-none group-hover:scale-105 group-active:scale-105"
            />

            <p className="absolute inset-x-0 bottom-0 bg-white/50 px-3 py-4 font-headline text-2xl tracking-tight backdrop-blur-xs text-shadow-md text-shadow-white">
              Mythical Odyssey
            </p>
          </Link>

          <Link
            href="/work/bingo-on-demand"
            className="group relative w-96 max-w-full overflow-hidden rounded-md border border-gray-200 shadow-sm transition-all active:translate-y-px active:shadow-xs"
          >
            <Image
              src="/bingo/project-list.avif"
              alt=""
              width={1920}
              height={911}
              draggable={false}
              className="object-cover transition-all select-none group-hover:scale-105 group-active:scale-105"
            />

            <p className="absolute inset-x-0 bottom-0 bg-white/50 px-3 py-4 font-headline text-2xl tracking-tight backdrop-blur-xs text-shadow-md text-shadow-white">
              BINGO on-Demand
            </p>
          </Link>
        </div>

        <p className="mb-2">
          While I have experience across the entire stack, I tend to gravitate
          more towards the frontend. I work especially well with{" "}
          <strong>Next.js</strong>, <strong>React</strong>, and{" "}
          <strong>Tailwind CSS</strong>.
        </p>

        <h2 className="mt-8 mb-2 font-accent text-3xl font-light">
          My passion in tech
        </h2>

        <p className="mb-4">
          In spite of its difficulty, I truly enjoy building for the web. I take
          pride in crafting elegant and intuitive user interfaces. It highly
          appeals to my visual-kinesthetic side, and empowers me to build great
          products for people.
        </p>

        <blockquote
          cite="https://blog.samaltman.com/super-successful-companies"
          className="mx-2 mb-2 border-l-2 border-gray-200 px-4 font-accent font-light italic"
        >
          “Companies that grow up to be extremely successful... are obsessed
          with the quality of the product/experience.”
        </blockquote>

        <p className="mb-4">
          ― Sam Altman, <cite>Super successful companies</cite>
        </p>

        <p className="mb-2">
          My interest in web building has led me to join various tech
          communities in Singapore. Through these events and meetups, I’ve been
          able to meet like-minded people, gain exposure to real-world projects,
          and learn many new things. Ultimately, I’m driven by my mission to{" "}
          <strong>build better products for people.</strong>
        </p>

        <h2 className="mt-8 mb-2 font-accent text-3xl font-light">
          What’s next
        </h2>

        <p className="mb-4">
          I’m always on the lookout for new opportunities to build products that
          solve real-world problems. If you’d like a copy of my latest resume,
          please reach out to me on{" "}
          <a
            href="https://www.linkedin.com/in/davidxhk"
            target="_blank"
            className="whitespace-nowrap text-[revert] underline-offset-4 hover:underline active:underline"
          >
            LinkedIn
            <ExternalIcon className="inline size-4 align-text-top" />
          </a>
          . I’d be happy to have a chat.
        </p>
      </main>

      <footer className="container mx-auto">
        <small className="block px-4 py-3 text-right font-light text-gray-500 italic">
          Last updated on <LocalTime unix={1749547854875} /> by{" "}
          <strong className="whitespace-nowrap">David Xie Han Keong</strong>
        </small>
      </footer>
    </>
  )
}
