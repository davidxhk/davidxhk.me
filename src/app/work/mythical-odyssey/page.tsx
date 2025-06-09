import type { Metadata } from "next"

import Image from "next/image"

export const metadata: Metadata = {
  title: "Mythical Odyssey | David Xie",
  description: "My work on the Mythical Odyssey Official Payment Center",
}

export default function MythicalOdysseyPage() {
  return (
    <main className="container mx-auto my-4 min-h-dvh px-4">
      <h1 className="mt-8 mb-2 text-center font-headline text-6xl tracking-tight">
        Mythical Odyssey Official Payment Center
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
    </main>
  )
}
