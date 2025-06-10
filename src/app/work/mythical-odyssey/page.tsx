import type { Metadata } from "next"

import Image from "next/image"

import { ExternalIcon } from "@/lib/ui/icons/external-icon"
import { LocalTime } from "@/lib/ui/local-time"
import { MediaBoundary } from "@/lib/ui/media-boundary"

export const metadata: Metadata = {
  title: "Mythical Odyssey | David Xie",
  description: "My work on the Mythical Odyssey Official Payment Center",
}

export default function MythicalOdysseyPage() {
  return (
    <>
      <header className="relative container mx-auto">
        <Image
          src="/mo/topup.avif"
          alt=""
          width={1920}
          height={911}
          draggable={false}
          className="w-full object-contain select-none"
        />

        <h1 className="absolute inset-x-0 bottom-0 py-8 text-center font-headline text-6xl tracking-tight backdrop-blur-xs backdrop:bg-white">
          Mythical Odyssey
        </h1>
      </header>

      <main className="container mx-auto px-4">
        <h2 className="mt-8 mb-2 font-accent text-3xl font-light">Context</h2>

        <p className="mb-2">
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

        <p className="mb-2">
          At the time, the game was just released, and the company wanted to
          reduce in-app purchases fees. Hence, I was tasked with building a web
          store for the game.
        </p>

        <h2 className="mt-8 mb-2 font-accent text-3xl font-light">
          Requirements
        </h2>

        <ul>
          <li className="mb-2 ml-2 list-inside list-disc">
            The web store needed a{" "}
            <strong>strong web and SEO performance</strong> to maximize site
            traffic.
          </li>

          <li className="mb-2 ml-2 list-inside list-disc">
            It also needed a <strong>smooth and user-friendly</strong> payment
            experience to reduce friction and optimize its success rate.
          </li>

          <li className="mb-2 ml-2 list-inside list-disc">
            It had to support players from <strong>different regions</strong>{" "}
            and provide <strong>different languages</strong> for each region.
          </li>

          <li className="mb-2 ml-2 list-inside list-disc">
            It also had to provide players with{" "}
            <strong>email and third-party authentication</strong> options to
            login to their game account.
          </li>

          <li className="mb-2 ml-2 list-inside list-disc">
            It also needed a custom <strong>two-step login process</strong> to
            integrate with the existing game authentication server.
          </li>

          <li className="mb-2 ml-2 list-inside list-disc">
            It had to be <strong>secure</strong> to protect players’ login
            credentials and account data.
          </li>

          <li className="mb-2 ml-2 list-inside list-disc">
            It also had to <strong>avoid leaking the backend URL</strong> to
            prevent the internal game servers from being exposed.
          </li>

          <li className="mb-2 ml-2 list-inside list-disc">
            It needed to be <strong>configurable</strong> so that the web
            administrator could easily manage products and other content.
          </li>
        </ul>

        <h2 className="mt-8 mb-2 font-accent text-3xl font-light">Showcase</h2>

        <MediaBoundary query="(max-width: 40rem) and (orientation: portrait)">
          <small className="mb-2 block font-light text-gray-500 italic sm:w-2">
            Switch to landscape mode for a better experience.
          </small>
        </MediaBoundary>

        <div className="mb-4 grid snap-x snap-mandatory auto-cols-[80%] grid-flow-col gap-2 overflow-x-auto">
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

        <h2 className="mt-8 mb-2 font-accent text-3xl font-light">
          Tech stack
        </h2>

        <div className="mb-8 flex flex-wrap items-center gap-1">
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

        <p className="mb-4">
          More information will be added in the near future. Stay tuned!
        </p>
      </main>

      <footer className="container mx-auto">
        <small className="block px-4 py-3 text-right font-light text-gray-500 italic">
          Last updated on <LocalTime unix={1749550245257} /> by{" "}
          <strong className="whitespace-nowrap">David Xie Han Keong</strong>
        </small>
      </footer>
    </>
  )
}
