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
      <header className="mb-8 bg-[url(/mo/banner.avif)] bg-cover bg-center bg-no-repeat 2xl:bg-contain">
        <div className="bg-gradient-to-b from-transparent from-50% to-white backdrop-blur-xs">
          <div className="mx-auto flex min-h-80 w-full max-w-3xl flex-col items-center justify-end gap-1 px-6 py-8">
            <h1 className="font-headline text-6xl tracking-tight text-shadow-md text-shadow-white">
              Mythical Odyssey
            </h1>

            <div className="flex flex-wrap gap-[inherit] text-sm text-gray-500">
              <span className="whitespace-nowrap">
                <span className="font-light italic">Created on </span>
                <Time unix={1749447021315} dateStyle="medium" />
                <span className="font-light">.</span>
              </span>

              <span className="whitespace-nowrap">
                <span className="font-light italic">Last updated on </span>
                <Time
                  unix={1749550830330}
                  dateStyle="medium"
                  timeStyle="short"
                />
                <span className="font-light">.</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto mb-8 w-full max-w-3xl px-6">
        <p className="mb-2">
          <a
            href="https://mo.skyvanillagames.com"
            target="_blank"
            className="whitespace-nowrap text-indigo-600 underline-offset-4 hover:underline active:text-rose-600 active:underline"
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

        <p className="mb-2">
          At the time, the game was just released, and the company wanted to
          reduce in-app purchases fees. Hence, I was tasked with building a web
          store for the game.
        </p>

        <h2 className="mt-8 mb-4 font-accent text-3xl font-light">
          Requirements
        </h2>

        <ol>
          <li className="mb-2 ml-2 list-inside list-decimal">
            The web store needed strong SEO and performance to maximize traffic.
          </li>

          <li className="mb-2 ml-2 list-inside list-decimal">
            It needed a smooth, user-friendly payment flow to minimize friction
            and boost success rates.
          </li>

          <li className="mb-2 ml-2 list-inside list-decimal">
            It had to support players from different regions with
            region-specific languages.
          </li>

          <li className="mb-2 ml-2 list-inside list-decimal">
            It needed to let players login using email or third-party
            authentication.
          </li>

          <li className="mb-2 ml-2 list-inside list-decimal">
            It also required a custom two-step login for players to sign in and
            choose their character.
          </li>

          <li className="mb-2 ml-2 list-inside list-decimal">
            It had to be secure to protect players’ login credentials and
            account data.
          </li>

          <li className="mb-2 ml-2 list-inside list-decimal">
            It also had to hide the backend URL to protect internal game
            servers.
          </li>

          <li className="mb-2 ml-2 list-inside list-decimal">
            It needed to allow the web admin to easily configure products and
            other content.
          </li>
        </ol>

        <h2 className="mt-8 mb-4 font-accent text-3xl font-light">
          Tech stack
        </h2>

        <ul className="mb-2 flex flex-wrap items-center gap-x-1 gap-y-2 p-2">
          <li className="rounded-full bg-amber-200 px-2 py-px font-accent text-sm font-light">
            Next.js
          </li>

          <li className="rounded-full bg-lime-200 px-2 py-px font-accent text-sm font-light">
            React
          </li>

          <li className="rounded-full bg-emerald-200 px-2 py-px font-accent text-sm font-light">
            Tailwind CSS
          </li>

          <li className="rounded-full bg-cyan-200 px-2 py-px font-accent text-sm font-light">
            NextAuth
          </li>

          <li className="rounded-full bg-blue-200 px-2 py-px font-accent text-sm font-light">
            next-intl
          </li>

          <li className="rounded-full bg-fuchsia-200 px-2 py-px font-accent text-sm font-light">
            nuqs
          </li>

          <li className="rounded-full bg-rose-200 px-2 py-px font-accent text-sm font-light">
            Payload CMS
          </li>
        </ul>

        <h2 className="mt-8 mb-4 font-accent text-3xl font-light">Showcase</h2>

        <MediaBoundary query="(max-width: 40rem) and (orientation: portrait)">
          <p className="mb-2 font-accent font-light text-gray-500 italic">
            Switch to landscape mode for a better experience.
          </p>
        </MediaBoundary>

        <div className="mb-2 grid snap-x snap-mandatory auto-cols-[80%] grid-flow-col gap-3 overflow-x-auto p-2">
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
