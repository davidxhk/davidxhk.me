import type { Metadata } from "next"

import Image from "next/image"

import { Separator } from "@/lib/separator"
import { Header } from "@/lib/ui/header"
import { ExternalIcon } from "@/lib/ui/icons/external-icon"
import { MediaBoundary } from "@/lib/ui/media-boundary"

export const metadata: Metadata = {
  title: "Mythical Odyssey | David Xie",
  description: "My work on the Mythical Odyssey Official Payment Center",
}

export default function MythicalOdysseyPage() {
  return (
    <>
      <Header
        title="Mythical Odyssey"
        className="mb-8 bg-[url(/mo/banner.avif)] bg-cover bg-center bg-no-repeat 2xl:bg-contain"
        created={1749447021315}
        lastUpdated={1750154311340}
      />

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
          is an idle-battler mobile game developed by a company that I worked at
          in 2025.
        </p>

        <p className="mb-2">
          At the time, the game was just released, and the company wanted to
          bypass in-app purchase fees.
        </p>

        <p className="mb-2">
          As the web frontend engineer, I was tasked to build a{" "}
          <a
            href="https://mo.skyvanillagames.com/topup"
            target="_blank"
            className="whitespace-nowrap text-indigo-600 underline-offset-4 hover:underline active:text-rose-600 active:underline"
          >
            web{" "}
            <span className="whitespace-nowrap">
              store
              <ExternalIcon className="inline size-4 align-text-top" />
            </span>
          </a>{" "}
          for players to purchase in-game items.
        </p>

        <Separator />

        <h2 className="mt-8 mb-4 font-accent text-3xl font-light">
          Requirements
        </h2>

        <ol className="mb-2 ml-8 list-decimal">
          <li className="mb-2">Player can view all products</li>

          <li className="mb-2">Player can view product information</li>

          <li className="mb-2">Player can view terms and conditions</li>

          <li className="mb-2">
            Player can switch between 17 different locales, covering
            <ol className="mb-2 ml-8 list-[lower-alpha]">
              <li className="mb-2">12 regions</li>
              <li className="mb-2">4 languages</li>
            </ol>
          </li>

          <li className="mb-2">
            Player can sign in to their in-game character, involving
            <ol className="mb-2 ml-8 list-[lower-alpha]">
              <li className="mb-2">Email or third-party account login</li>
              <li className="mb-2">In-game character selection</li>
            </ol>
          </li>

          <li className="mb-2">
            Player can switch to another character after account login
          </li>

          <li className="mb-2">Player can sign out of their account</li>

          <li className="mb-2">Player can order a product for a character</li>

          <li className="mb-2">Player can view the status of an order</li>

          <li className="mb-2">
            Player can pay for an order through the{" "}
            <a
              href="https://www.payermax.com/"
              target="_blank"
              className="whitespace-nowrap text-indigo-600 underline-offset-4 hover:underline active:text-rose-600 active:underline"
            >
              PayerMax
              <ExternalIcon className="inline size-4 align-text-top" />
            </a>{" "}
            portal
          </li>

          <li className="mb-2">Player can view past orders for a character</li>

          <li className="mb-2">Player can filter past orders by date range</li>

          <li className="mb-2">Admin can configure store content easily</li>
        </ol>

        <h2 className="mt-8 mb-4 font-accent text-3xl font-light">
          Non-functional reqs
        </h2>

        <ol className="mb-2 ml-8 list-decimal">
          <li className="mb-2">
            Strong <abbr title="search engine optimization">SEO</abbr> and web
            performance
          </li>

          <li className="mb-2">Responsive and mobile-first interface</li>

          <li className="mb-2">Smooth and user-friendly payment flow</li>

          <li className="mb-2">
            Privacy and security, including
            <ol className="mb-2 ml-8 list-[lower-alpha]">
              <li className="mb-2">Not leaking player credentials</li>
              <li className="mb-2">Not exposing the backend URL</li>
            </ol>
          </li>
        </ol>

        <Separator />

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

        <Separator />

        <p className="mt-8 mb-4 font-accent font-light text-gray-500 italic">
          More information will be added in the near future. Stay tuned!
        </p>
      </main>
    </>
  )
}
