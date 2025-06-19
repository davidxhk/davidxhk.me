import type { Metadata } from "next"

import Image from "next/image"

import { Header } from "@/lib/ui/header"
import { MediaBoundary } from "@/lib/ui/media-boundary"
import { Separator } from "@/lib/separator"

export const metadata: Metadata = {
  title: "BINGO on-Demand | David Xie",
  description: "My work on the BINGO on-Demand Customer Verification Dashboard",
}

export default function BingoOnDemandPage() {
  return (
    <>
      <Header
        title="BINGO on-Demand"
        className="mb-8 bg-[url(/bingo/banner.avif)] bg-cover bg-center bg-no-repeat 2xl:bg-contain"
        created={1749447021315}
        lastUpdated={1749550686643}
      />

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

        <Separator />

        <p className="mt-8 mb-4 font-accent font-light text-gray-500 italic">
          More information will be added in the near future. Stay tuned!
        </p>
      </main>
    </>
  )
}
