import type { Metadata } from "next"

import Image from "next/image"

import { LocalTime } from "@/lib/ui/local-time"
import { MediaBoundary } from "@/lib/ui/media-boundary"

export const metadata: Metadata = {
  title: "BINGO on-Demand | David Xie",
  description: "My work on the BINGO on-Demand Customer Verification Dashboard",
}

export default function BingoOnDemandPage() {
  return (
    <>
      <header className="relative container mx-auto">
        <Image
          src="/bingo/project-list.avif"
          alt=""
          width={1920}
          height={911}
          draggable={false}
          className="w-full object-contain select-none"
        />

        <h1 className="absolute inset-x-0 bottom-0 py-8 text-center font-headline text-6xl tracking-tight backdrop-blur-xs backdrop:bg-white">
          BINGO on-Demand
        </h1>
      </header>

      <main className="container mx-auto px-4">
        <h2 className="mt-8 mb-2 font-accent text-3xl font-light">Showcase</h2>

        <MediaBoundary query="(max-width: 40rem) and (orientation: portrait)">
          <small className="mb-2 block font-light text-gray-500 italic sm:w-2">
            Switch to landscape mode for a better experience.
          </small>
        </MediaBoundary>

        <div className="mb-4 grid snap-x snap-mandatory auto-cols-[80%] grid-flow-col gap-2 overflow-x-auto">
          {[
            "/bingo/register.avif",
            "/bingo/login.avif",
            "/bingo/project-list.avif",
            "/bingo/project.avif",
            "/bingo/create-new-project.avif",
            "/bingo/send-unique-invite.avif",
            "/bingo/account.avif",
            "/bingo/billing-history.avif",
            "/bingo/team.avif",
            "/bingo/invite-template.avif",
          ].map((path, i) => (
            <Image
              key={i}
              src={path}
              alt=""
              width={1920}
              height={911}
              draggable={false}
              className="snap-center snap-always rounded-lg border border-gray-200 shadow-md select-none"
            />
          ))}
        </div>

        <p className="mb-4">
          More information will be added in the near future. Stay tuned!
        </p>
      </main>

      <footer className="container mx-auto">
        <small className="block px-4 py-3 text-right font-light text-gray-500 italic">
          Last updated on <LocalTime unix={1749550686643} /> by{" "}
          <strong className="whitespace-nowrap">David Xie Han Keong</strong>
        </small>
      </footer>
    </>
  )
}
