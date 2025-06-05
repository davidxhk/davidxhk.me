import Image from "next/image"
import Link from "next/link"

import { ExternalIcon } from "@/lib/ui/icons/external-icon"
import { JS_Code } from "@/lib/ui/js-code"

export default function Home() {
  return (
    <main className="container mx-auto min-h-dvh px-4">
      <h1 className="mt-8 mb-2 text-center font-headline text-6xl tracking-tight">
        Building better products for people
      </h1>

      <h2 className="mt-8 mb-2 font-accent text-3xl font-light">About me</h2>

      <p className="mb-2">
        Hi there! I’m David, a full stack engineer based in Singapore. Welcome
        to my personal corner of the web.
      </p>

      <p className="mb-4">
        This site’s a simple one, but it gives you a glimpse into who I am and
        the kind of work I enjoy doing.
      </p>

      <JS_Code className="rounded-lg border border-gray-200 shadow-md">
        {`
function greet() {
  console.log("Hello world!");
}

greet();  // Hello world!
`}
      </JS_Code>

      <h2 className="mt-8 mb-2 font-accent text-3xl font-light">
        Work experience
      </h2>

      <p className="mb-2">
        Since 2023, I’ve been building products in spaces like mobile games and
        crypto, from a{" "}
        <Link
          href="https://mo.skyvanillagames.com/en/topup"
          target="_blank"
          className="underline underline-offset-4"
        >
          gaming web store
          <ExternalIcon className="inline size-4 align-text-top" />
        </Link>{" "}
        to a{" "}
        <Link
          href="https://admin.bingo.parallelchain-lab.io"
          target="_blank"
          className="underline underline-offset-4"
        >
          customer verification dashboard
          <ExternalIcon className="inline size-4 align-text-top" />
        </Link>
        , that are used by thousands of people.
      </p>

      <h3 className="mt-4 mb-2 font-headline text-2xl tracking-tight">
        Mythical Odyssey Official Payment Center
      </h3>

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
            className="snap-center snap-always rounded-lg border border-gray-200 shadow-md"
          />
        ))}
      </div>

      <h3 className="mt-4 mb-2 font-headline text-2xl tracking-tight">
        BINGO on-Demand Customer Verification Dashboard
      </h3>

      <div className="mb-8 grid snap-x snap-mandatory auto-cols-[80%] grid-flow-col gap-2 overflow-x-auto">
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
