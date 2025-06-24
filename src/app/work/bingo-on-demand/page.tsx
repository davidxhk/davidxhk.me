import type { Metadata } from "next"

import Image from "next/image"

import { Header } from "@/lib/ui/header"
import { MediaBoundary } from "@/lib/ui/media-boundary"
import { Separator } from "@/lib/ui/separator"

export const metadata: Metadata = {
  title: "SaaS Admin Panel | David Xie",
  description: "My work on the BINGO on-Demand Customer Verification Dashboard",
}

export default function BingoOnDemandPage() {
  return (
    <>
      <Header
        title="BINGO on-Demand"
        className="relative mb-8"
        created={1749447021315}
        lastUpdated={1749550686643}
      >
        <div className="absolute inset-0">
          <Image
            priority
            alt=""
            src="/work/bingo-on-demand/banner.avif"
            width={1920}
            height={400}
            draggable={false}
            className="size-full object-cover select-none 2xl:object-contain"
          />
        </div>
      </Header>

      <main className="mx-auto mb-8 w-full max-w-3xl px-6">
        <h2 className="mt-8 mb-4 font-accent text-3xl font-light">Showcase</h2>

        <MediaBoundary query="(max-width: 40rem) and (orientation: portrait)">
          <p className="mb-2 font-accent font-light text-gray-500 italic">
            Switch to landscape mode for a better experience.
          </p>
        </MediaBoundary>

        <div className="mb-6 grid snap-x snap-mandatory auto-cols-[80%] grid-flow-col gap-3 overflow-x-auto p-2">
          {[
            "/work/bingo-on-demand/register.avif",
            "/work/bingo-on-demand/login.avif",
            "/work/bingo-on-demand/project-list.avif",
            "/work/bingo-on-demand/project.avif",
            "/work/bingo-on-demand/create-new-project.avif",
            "/work/bingo-on-demand/send-unique-invite.avif",
            "/work/bingo-on-demand/account.avif",
            "/work/bingo-on-demand/billing-history.avif",
            "/work/bingo-on-demand/team.avif",
            "/work/bingo-on-demand/invite-template.avif",
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
