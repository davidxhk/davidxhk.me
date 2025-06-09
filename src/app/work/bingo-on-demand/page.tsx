import type { Metadata } from "next"

import Image from "next/image"

export const metadata: Metadata = {
  title: "Bingo on-Demand | David Xie",
  description: "My work on the BINGO on-Demand Customer Verification Dashboard",
}

export default function BingoOnDemandPage() {
  return (
    <main className="container mx-auto my-4 min-h-dvh px-4">
      <h1 className="mt-8 mb-2 text-center font-headline text-6xl tracking-tight">
        BINGO on-Demand Customer Verification Dashboard
      </h1>

      <p className="mb-2">
        More information will be added in the near future. Meanwhile, check out
        some screenshots below:
      </p>

      <small className="mb-2 hidden font-light text-gray-500 italic max-sm:block">
        Switch to landscape mode for a better experience.
      </small>

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
            className="snap-center snap-always rounded-lg border border-gray-200 shadow-md"
          />
        ))}
      </div>
    </main>
  )
}
