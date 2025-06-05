import Image from "next/image"

import { ExternalIcon } from "@/lib/ui/icons/external-icon"
import { JS_Code } from "@/lib/ui/js-code"

export default function Home() {
  return (
    <main className="container mx-auto my-4 min-h-dvh px-4">
      <h1 className="mt-8 mb-2 text-center font-headline text-6xl tracking-tight">
        Building better products for people
      </h1>

      <h2 className="mt-8 mb-2 font-accent text-3xl font-light">About me</h2>

      <p className="mb-4">
        Hi there! I’m David, a full stack engineer based in Singapore. Welcome
        to my personal corner of the web. It’s simple, but it shows who I am and
        what I enjoy. Hope you like it!
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
        My work experience
      </h2>

      <p className="mb-2">
        Since 2023, I’ve built products in spaces like mobile games and crypto,
        from a{" "}
        <a
          href="https://mo.skyvanillagames.com/en/topup"
          target="_blank"
          className="underline underline-offset-4"
        >
          gaming web store
          <ExternalIcon className="inline size-4 align-text-top" />
        </a>{" "}
        to a{" "}
        <a
          href="https://admin.bingo.parallelchain-lab.io"
          target="_blank"
          className="underline underline-offset-4"
        >
          customer verification dashboard
          <ExternalIcon className="inline size-4 align-text-top" />
        </a>
        , that have been used by thousands of people.
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

      <p className="mb-2">
        While I have experience across the entire stack, I tend to gravitate
        more towards the frontend. I work especially well with{" "}
        <span className="font-accent font-light">Next.js</span>,{" "}
        <span className="font-accent font-light">React</span>, and{" "}
        <span className="font-accent font-light">Tailwind CSS</span>.
      </p>

      <p className="mb-2">
        If you’d like a copy of my latest resume, please reach out to me on{" "}
        <a
          href="https://www.linkedin.com/in/davidxhk"
          target="_blank"
          className="underline underline-offset-4"
        >
          LinkedIn
          <ExternalIcon className="inline size-4 align-text-top" />
        </a>
        . I’d be happy to have a chat.
      </p>

      <h2 className="mt-8 mb-2 font-accent text-3xl font-light">
        My passion in tech
      </h2>

      <p className="mb-4">
        In spite of its difficulty, I truly enjoy building for the web. I take
        pride in crafting elegant and intuitive user interfaces. It highly
        appeals to my visual-kinesthetic side, and empowers me to build great
        products for people.
      </p>

      <blockquote
        cite="https://blog.samaltman.com/super-successful-companies"
        className="mb-2 ml-2 border-l-2 border-gray-200 pl-4 font-accent font-light italic"
      >
        “Companies that grow up to be extremely successful... are obsessed with
        the quality of the product/experience.”
      </blockquote>

      <p className="mb-4">
        ― Sam Altman, <cite>Super successful companies</cite>
      </p>

      <p className="mb-2">
        My interest in web building has led me to join various tech communities
        in Singapore. Through these events and meetups, I’ve been able to meet
        like-minded people, gain exposure to real-world projects, and learn many
        new things. Ultimately, I’m driven by my mission to{" "}
        <strong>build better products for people.</strong>
      </p>
    </main>
  )
}
