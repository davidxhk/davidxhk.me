import type { Metadata } from "next"

import Image from "next/image"

import { MediaBoundary } from "@/lib/ui/media-boundary"
import { Time } from "@/lib/ui/time"

export const metadata: Metadata = {
  title: "BINGO on-Demand | David Xie",
  description: "My work on the BINGO on-Demand Customer Verification Dashboard",
}

export default function BingoOnDemandPage() {
  return (
    <>
      <header className="mb-8 bg-[url(/bingo/banner.avif)] bg-cover bg-center bg-no-repeat 2xl:bg-contain">
        <div className="flex size-full min-h-80 flex-col items-center justify-end gap-1 bg-gradient-to-b from-transparent from-50% to-white px-6 py-8 backdrop-blur-xs">
          <h1 className="font-headline text-6xl tracking-tight text-shadow-md text-shadow-white">
            BINGO on-Demand
          </h1>

          <div className="flex flex-wrap gap-[inherit] text-sm text-gray-500">
            <span className="whitespace-nowrap">
              <span className="font-light italic">Created on </span>
              <Time unix={1749447021315} dateStyle="medium" />
              <span className="font-light">.</span>
            </span>

            <span className="whitespace-nowrap">
              <span className="font-light italic">Last updated on </span>
              <Time unix={1749550686643} dateStyle="medium" timeStyle="short" />
              <span className="font-light">.</span>
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto mb-8 w-full max-w-3xl px-6">
        <h2 className="mt-8 mb-4 font-accent text-3xl font-light">Showcase</h2>

        <MediaBoundary query="(max-width: 40rem) and (orientation: portrait)">
          <p className="mb-2 font-accent font-light text-gray-500 italic">
            Switch to landscape mode for a better experience.
          </p>
        </MediaBoundary>

        <div className="mb-2 grid snap-x snap-mandatory auto-cols-[80%] grid-flow-col gap-3 overflow-x-auto p-2">
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
              className="snap-center snap-always rounded-lg border border-slate-800 shadow-md select-none"
            />
          ))}
        </div>

        <p className="mt-8 mb-4 font-accent font-light text-gray-500 italic">
          More information will be added in the near future. Stay tuned!
        </p>
      </main>
    </>
  )
}
