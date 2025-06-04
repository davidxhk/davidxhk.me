import Prism from "prismjs"

import "prismjs/themes/prism.css"

const HELLO_WORLD_SNIPPET = `\
function greet() {
  console.log("Hello world!");
}

greet();  // Hello world!`

export default function Home() {
  return (
    <main className="min-h-dvh px-4 py-12">
      <h1 className="mb-6 text-center font-headline text-6xl tracking-tight">
        Building better products for people
      </h1>

      <h2 className="mb-2 font-accent text-3xl font-light">About me</h2>

      <p className="mb-2">
        Hi there! I’m David, a full stack engineer based in Singapore. This is
        my personal website.
      </p>

      <p className="mb-6">
        It’s nothing fancy, but I hope that you will learn a bit more about me
        and the work that I do.
      </p>

      <pre className="language-javascript rounded-lg border border-gray-200 shadow-md">
        <code
          dangerouslySetInnerHTML={{
            __html: Prism.highlight(
              HELLO_WORLD_SNIPPET,
              Prism.languages.javascript,
              "javascript",
            ),
          }}
        />
      </pre>
    </main>
  )
}
