import type { Metadata } from "next"

import Image from "next/image"

import { Header } from "@/lib/ui/header"
import { ExternalIcon } from "@/lib/ui/icons/external-icon"
import { MediaBoundary } from "@/lib/ui/media-boundary"
import { Separator } from "@/lib/ui/separator"

export const metadata: Metadata = {
  title: "Gaming Web Store | David Xie",
  description: "My work on the Mythical Odyssey Official Payment Center",
}

export default function MythicalOdysseyPage() {
  return (
    <>
      <Header
        title="Mythical Odyssey"
        className="relative mb-8"
        created={1749447021315}
        lastUpdated={1750762809037}
      >
        <div className="absolute inset-0">
          <Image
            priority
            alt=""
            src="/work/mythical-odyssey/banner.avif"
            width={1920}
            height={400}
            draggable={false}
            className="size-full object-cover select-none 2xl:object-contain"
          />
        </div>
      </Header>

      <main className="mx-auto mb-8 w-full max-w-3xl px-6">
        <p className="mb-6">
          <a
            href="https://mo.skyvanillagames.com"
            target="_blank"
            className="text-indigo-600 underline-offset-4 hover:underline focus:outline-offset-4 focus-visible:underline active:text-rose-600 active:underline"
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

        <p className="mb-6">
          At the time, the game had just been released, and the company wanted
          to bypass in-app purchase fees. As the web frontend engineer, I was
          tasked to build a{" "}
          <a
            href="https://mo.skyvanillagames.com/topup"
            target="_blank"
            className="text-indigo-600 underline-offset-4 hover:underline focus:outline-offset-4 focus-visible:underline active:text-rose-600 active:underline"
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
          Defining requirements
        </h2>

        <p className="mb-6">
          To start off, I asked, “What is the <b>happy path</b> of the web
          store?” I then mapped it out as a flowchart to visualize the primary
          use case.
        </p>

        <figure className="mb-6">
          <div className="relative left-1/2 mb-1 w-dvw -translate-x-1/2 px-8">
            <div className="flex justify-center-safe overflow-x-auto">
              <div className="h-36 flex-none py-6">
                <Image
                  alt=""
                  src="/work/mythical-odyssey/happy-path.svg"
                  width={0}
                  height={0}
                  draggable={false}
                  className="h-full w-auto object-cover select-none"
                />
              </div>
            </div>
          </div>
          <figcaption className="text-center font-accent text-sm font-light text-gray-500 italic">
            Figure 1: Diagram showing the happy path of the web store
          </figcaption>
        </figure>

        <p className="mb-6">
          From the happy path, I identified two core flows: the{" "}
          <b>login flow</b> and the <b>purchase flow</b>. With these key
          features, I drilled deeper into the web store’s functional
          requirements.
        </p>

        <h3 className="mt-8 mb-4 font-accent text-2xl font-light">
          Functional requirements
        </h3>

        <ol className="mb-6 ml-10 list-decimal">
          <li className="mb-2">Player can view all products</li>

          <li className="mb-2">Player can view product information</li>

          <li className="mb-2">Player can view terms of purchase</li>

          <li className="mb-2">
            Player can switch between 17 different locales, covering
            <ol className="mb-2 list-inside list-[lower-alpha]">
              <li className="mb-2">12 regions</li>
              <li className="mb-2">4 languages</li>
            </ol>
          </li>

          <li className="mb-2">
            Player can sign in to their in-game character, involving
            <ol className="mb-2 list-inside list-[lower-alpha]">
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
              className="whitespace-nowrap text-indigo-600 underline-offset-4 hover:underline focus:outline-offset-4 focus-visible:underline active:text-rose-600 active:underline"
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

        <p className="mb-6">
          Next, I asked, “What are some <i>nice-to-haves</i>?” and “What{" "}
          <b>other aspects</b> should we consider?” These questions helped steer
          the conversation toward the web store’s non-functional requirements.
        </p>

        <h3 className="mt-8 mb-4 font-accent text-2xl font-light">
          Non-functional requirements
        </h3>

        <ol className="mb-6 ml-10 list-decimal">
          <li className="mb-2">
            Strong <abbr title="search engine optimization">SEO</abbr> and web
            performance
          </li>

          <li className="mb-2">Responsive and mobile-first interface</li>

          <li className="mb-2">Smooth and user-friendly payment flow</li>

          <li className="mb-2">
            Privacy and security, including
            <ol className="mb-2 list-inside list-[lower-alpha]">
              <li className="mb-2">Not leaking player credentials</li>
              <li className="mb-2">Not exposing the backend URL</li>
            </ol>
          </li>
        </ol>

        <p className="mb-6">
          After defining the requirements of the web store, I began thinking
          about how to design a user interface to support these goals.
        </p>

        <Separator />

        <h2 className="mt-8 mb-4 font-accent text-3xl font-light">
          Shaping the UI
        </h2>

        <p className="mb-6">
          To get a better understanding of existing products in this space, I
          conducted some market research, and found inspiration from the web
          stores of{" "}
          <a
            href="https://pay.gaming.com/xy/index"
            target="_blank"
            className="text-indigo-600 underline-offset-4 hover:underline focus:outline-offset-4 focus-visible:underline active:text-rose-600 active:underline"
          >
            Journey{" "}
            <span className="whitespace-nowrap">
              Renewed
              <ExternalIcon className="inline size-4 align-text-top" />
            </span>
          </a>{" "}
          and{" "}
          <a
            href="https://store.farlightgames.com/afkjourney/global"
            target="_blank"
            className="text-indigo-600 underline-offset-4 hover:underline focus:outline-offset-4 focus-visible:underline active:text-rose-600 active:underline"
          >
            AFK{" "}
            <span className="whitespace-nowrap">
              Journey
              <ExternalIcon className="inline size-4 align-text-top" />
            </span>
          </a>
          .
        </p>

        <p className="mb-6">
          I sketched a quick <b>low-fidelity prototype</b> to test ideas and
          gather feedback from the creative designer and product manager. After
          several rounds of iteration, we settled on a design that met all
          requirements.
        </p>

        <figure className="mb-6">
          <div className="relative left-1/2 mb-1 w-dvw -translate-x-1/2 px-8">
            <div className="flex justify-center-safe overflow-x-auto">
              <div className="h-96 flex-none">
                <Image
                  alt=""
                  src="/work/mythical-odyssey/login-flow.svg"
                  width={0}
                  height={0}
                  draggable={false}
                  className="h-full w-auto object-cover select-none"
                />
              </div>
            </div>
          </div>
          <figcaption className="text-center font-accent text-sm font-light text-gray-500 italic">
            Figure 2: Mockup of the web store login flow
          </figcaption>
        </figure>

        <figure className="mb-6">
          <div className="relative left-1/2 mb-1 w-dvw -translate-x-1/2 px-8">
            <div className="flex justify-center-safe overflow-x-auto">
              <div className="h-96 flex-none">
                <Image
                  alt=""
                  src="/work/mythical-odyssey/purchase-flow.svg"
                  width={0}
                  height={0}
                  draggable={false}
                  className="h-full w-auto object-cover select-none"
                />
              </div>
            </div>
          </div>
          <figcaption className="text-center font-accent text-sm font-light text-gray-500 italic">
            Figure 3: Mockup of the web store purchase flow
          </figcaption>
        </figure>

        <p className="mb-6">
          As we progressed, I partnered with the creative designer to develop a{" "}
          <b>component library</b> for the design system. This strengthened our
          collaboration and ensured the user interface remained consistent and
          cohesive.
        </p>

        <p className="mb-6">
          As the user interface began to take shape, I shifted gears to the
          engineering side of the web store, working through the data and
          planning the high-level architecture.
        </p>

        <Separator />

        <h2 className="mt-8 mb-4 font-accent text-3xl font-light">
          Modeling the data
        </h2>

        <p className="mb-6">todo</p>

        <h2 className="mt-8 mb-4 font-accent text-3xl font-light">
          Tech stack
        </h2>

        <ul className="mb-6 flex flex-wrap items-center gap-x-1 gap-y-2 p-2">
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
            Payload CMS
          </li>

          <li className="rounded-full bg-blue-200 px-2 py-px font-accent text-sm font-light">
            NextAuth
          </li>

          <li className="rounded-full bg-fuchsia-200 px-2 py-px font-accent text-sm font-light">
            next-intl
          </li>

          <li className="rounded-full bg-rose-200 px-2 py-px font-accent text-sm font-light">
            nuqs
          </li>
        </ul>

        <h2 className="mt-8 mb-4 font-accent text-3xl font-light">Showcase</h2>

        <MediaBoundary query="(max-width: 40rem) and (orientation: portrait)">
          <p className="mb-2 font-accent font-light text-gray-500 italic">
            Switch to landscape mode for a better experience.
          </p>
        </MediaBoundary>

        <div className="mb-6 grid min-h-24 snap-x snap-mandatory auto-cols-[80%] grid-flow-col gap-3 overflow-x-auto p-2">
          {[
            "/work/mythical-odyssey/topup.avif",
            "/work/mythical-odyssey/topup-options.avif",
            "/work/mythical-odyssey/terms-and-conditions.avif",
            "/work/mythical-odyssey/topup-footer.avif",
            "/work/mythical-odyssey/region-select.avif",
            "/work/mythical-odyssey/lang-select.avif",
            "/work/mythical-odyssey/login.avif",
            "/work/mythical-odyssey/select-character.avif",
            "/work/mythical-odyssey/product.avif",
            "/work/mythical-odyssey/purchase.avif",
            "/work/mythical-odyssey/order-created.avif",
            "/work/mythical-odyssey/order-completed.avif",
            "/work/mythical-odyssey/nav-menu.avif",
            "/work/mythical-odyssey/topup-history.avif",
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
