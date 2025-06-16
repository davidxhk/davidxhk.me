import type { Metadata } from "next"

import Image from "next/image"

import { ExternalIcon } from "@/lib/ui/icons/external-icon"
import { Time } from "@/lib/ui/time"
import { MediaBoundary } from "@/lib/ui/media-boundary"

export const metadata: Metadata = {
  title: "Mythical Odyssey | David Xie",
  description: "My work on the Mythical Odyssey Official Payment Center",
}

export default function MythicalOdysseyPage() {
  return (
    <>
      <header className="bg-[url(/mo/banner.avif)] bg-cover bg-center bg-no-repeat 2xl:bg-contain">
        <div className="flex size-full min-h-80 flex-col items-center justify-end gap-1 bg-gradient-to-b from-transparent from-50% to-white px-6 py-8 backdrop-blur-xs">
          <h1 className="font-headline text-6xl tracking-tight text-shadow-md text-shadow-white">
            Mythical Odyssey
          </h1>

          <small className="flex flex-wrap gap-[inherit] text-gray-500">
            <span className="font-light whitespace-nowrap">
              <i>Created on </i>
              <Time
                unix={1749447021315}
                className="font-normal"
                dateStyle="medium"
              />
              .
            </span>
            <span className="font-light whitespace-nowrap">
              <i>Last updated on </i>
              <Time
                unix={1749550830330}
                className="font-normal"
                dateStyle="medium"
                timeStyle="short"
              />
              .
            </span>
          </small>
        </div>
      </header>

      <main className="mx-auto my-8 w-full max-w-3xl px-6">
        <p className="my-2">
          <a
            href="https://mo.skyvanillagames.com"
            target="_blank"
            className="whitespace-nowrap text-[revert] underline-offset-4 hover:underline active:underline"
          >
            Mythical{" "}
            <span className="whitespace-nowrap">
              Odyssey
              <ExternalIcon className="inline size-4 align-text-top" />
            </span>
          </a>{" "}
          was an idle-battler mobile game developed by a company that I worked
          at in 2025.
        </p>

        <p className="my-2">
          At the time, the game was just released, and the company wanted to
          reduce in-app purchases fees. Hence, I was tasked with building a web
          store for the game.
        </p>

        <h2 className="mt-8 mb-4 font-accent text-3xl font-light">
          Requirements
        </h2>

        <ul>
          <li className="my-2 ml-2 list-inside list-disc">
            The web store needed strong SEO and performance to maximize traffic.
          </li>

          <li className="my-2 ml-2 list-inside list-disc">
            It also needed a smooth, user-friendly payment flow to minimize
            friction and boost success rates.
          </li>

          <li className="my-2 ml-2 list-inside list-disc">
            It had to support players from different regions with
            region-specific languages.
          </li>

          <li className="my-2 ml-2 list-inside list-disc">
            It needed to let players login using email or third-party
            authentication.
          </li>

          <li className="my-2 ml-2 list-inside list-disc">
            It also required a custom two-step login for players to sign in and
            choose their character.
          </li>

          <li className="my-2 ml-2 list-inside list-disc">
            It had to be secure to protect players’ login credentials and
            account data.
          </li>

          <li className="my-2 ml-2 list-inside list-disc">
            It also had to hide the backend URL to protect internal game
            servers.
          </li>

          <li className="my-2 ml-2 list-inside list-disc">
            It needed to allow the web admin to easily configure products and
            other content.
          </li>
        </ul>

        <h2 className="mt-8 mb-4 font-accent text-3xl font-light">Showcase</h2>

        <MediaBoundary query="(max-width: 40rem) and (orientation: portrait)">
          <small className="my-2 block font-light text-gray-500 italic sm:w-2">
            Switch to landscape mode for a better experience.
          </small>
        </MediaBoundary>

        <div className="my-4 grid snap-x snap-mandatory auto-cols-[80%] grid-flow-col gap-2 overflow-x-auto">
          {[
            "/mo/topup.avif",
            "/mo/topup-options.avif",
            "/mo/terms-and-conditions.avif",
            "/mo/topup-footer.avif",
            "/mo/region-select.avif",
            "/mo/lang-select.avif",
            "/mo/login.avif",
            "/mo/select-character.avif",
            "/mo/product.avif",
            "/mo/purchase.avif",
            "/mo/order-created.avif",
            "/mo/order-completed.avif",
            "/mo/nav-menu.avif",
            "/mo/topup-history.avif",
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

        <h2 className="mt-8 mb-4 font-accent text-3xl font-light">
          Tech stack
        </h2>

        <div className="my-4 flex flex-wrap items-center gap-1 p-2">
          <small className="rounded-full bg-amber-200 px-2 py-px font-accent font-light">
            Next.js
          </small>

          <small className="rounded-full bg-lime-200 px-2 py-px font-accent font-light">
            React
          </small>

          <small className="rounded-full bg-emerald-200 px-2 py-px font-accent font-light">
            Tailwind CSS
          </small>

          <small className="rounded-full bg-cyan-200 px-2 py-px font-accent font-light">
            NextAuth
          </small>

          <small className="rounded-full bg-blue-200 px-2 py-px font-accent font-light">
            next-intl
          </small>

          <small className="rounded-full bg-fuchsia-200 px-2 py-px font-accent font-light">
            nuqs
          </small>

          <small className="rounded-full bg-rose-200 px-2 py-px font-accent font-light">
            Payload CMS
          </small>
        </div>

        <p className="mt-8 mb-4">
          More information will be added in the near future. Stay tuned!
        </p>
      </main>
    </>
  )
}
