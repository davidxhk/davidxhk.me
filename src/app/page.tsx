import Image from "next/image"
import Link from "next/link"

import { ExternalIcon } from "@/lib/ui/icons/external-icon"
import { JS_Code } from "@/lib/ui/js-code"
import { LocalTime } from "@/lib/ui/local-time"

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
        Since 2023, I’ve built products in spaces like mobile games and crypto
        that have been used by thousands of people: from a{" "}
        <Link
          href="/work/mythical-odyssey"
          className="underline underline-offset-4"
        >
          gaming web store
        </Link>{" "}
        to a{" "}
        <Link
          href="/work/bingo-on-demand"
          className="underline underline-offset-4"
        >
          customer verification dashboard
        </Link>
        .
      </p>

      <h3 className="mt-4 mb-2 font-headline text-2xl tracking-tight">
        Mythical Odyssey
      </h3>

      <div className="group relative mb-4 overflow-hidden rounded-lg border border-gray-200 shadow-md">
        <Image
          src="/mo/topup.avif"
          alt=""
          width={1920}
          height={911}
          className="-z-1 object-cover transition-all group-hover:scale-105 group-hover:blur-sm max-sm:blur-sm max-sm:group-active:scale-105 max-sm:group-active:blur-none"
        />

        <Link
          href="/work/mythical-odyssey"
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="text-center font-accent text-xl font-light text-transparent blur-sm transition-all group-hover:text-black group-hover:blur-none max-sm:text-black max-sm:blur-none max-sm:group-active:text-transparent max-sm:group-active:blur-sm">
            Mythical Odyssey Official Payment Center
          </span>
        </Link>
      </div>

      <h3 className="mt-4 mb-2 font-headline text-2xl tracking-tight">
        BINGO on-Demand
      </h3>

      <div className="group relative mb-4 overflow-hidden rounded-lg border border-gray-200 shadow-md">
        <Image
          src="/bingo/project-list.avif"
          alt=""
          width={1920}
          height={911}
          className="-z-1 object-cover transition-all group-hover:scale-105 group-hover:blur-sm max-sm:blur-sm max-sm:group-active:scale-105 max-sm:group-active:blur-none"
        />

        <Link
          href="/work/bingo-on-demand"
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="text-center font-accent text-xl font-light text-transparent blur-sm transition-all group-hover:text-black group-hover:blur-none max-sm:text-black max-sm:blur-none max-sm:group-active:text-transparent max-sm:group-active:blur-sm">
            Bingo on-Demand Customer Verification Dashboard
          </span>
        </Link>
      </div>

      <p className="mb-2">
        While I have experience across the entire stack, I tend to gravitate
        more towards the frontend. I work especially well with{" "}
        <span className="font-accent font-light">Next.js</span>,{" "}
        <span className="font-accent font-light">React</span>, and{" "}
        <span className="font-accent font-light">Tailwind CSS</span>.
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
        className="mx-2 mb-2 border-l-2 border-gray-200 px-4 font-accent font-light italic"
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

      <h2 className="mt-8 mb-2 font-accent text-3xl font-light">What’s next</h2>

      <p className="mb-2">
        Someone once told me, “for full stack engineers, the web is their
        oyster”. I couldn’t have said it better myself.
      </p>

      <p className="mb-2">
        I’m always on the lookout for new opportunities to build products that
        solve real-world problems. If you’d like a copy of my latest resume,
        please reach out to me on{" "}
        <a
          href="https://www.linkedin.com/in/davidxhk"
          target="_blank"
          className="whitespace-nowrap underline underline-offset-4"
        >
          LinkedIn
          <ExternalIcon className="inline size-4 align-text-top" />
        </a>
        . I’d be happy to have a chat.
      </p>

      <p className="mb-2">
        This is just the beginning: more updates coming soon. Until next time!
      </p>

      <small className="mt-8 mb-2 block font-light text-gray-500 italic">
        Last updated on <LocalTime unix={1749447728227} />
      </small>
    </main>
  )
}
