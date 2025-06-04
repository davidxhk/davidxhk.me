export default function Home() {
  return (
    <main className="w-full p-4">
      <h1 className="mb-4 font-headline text-6xl">
        Building better products for people
      </h1>

      <h2 className="mb-2 font-accent text-3xl font-light">About me</h2>

      <p className="mb-2">
        I’m David, a full stack engineer based in Singapore. This is my personal
        website.
      </p>

      <p className="mb-6">
        It’s nothing fancy, but I hope that you will learn a bit more about me
        and the work that I do.
      </p>

      <pre className="rounded-lg border border-gray-200 p-2 font-mono shadow-md">{`\
function greet() {
  console.log("Hello world!");
}

greet();`}</pre>
    </main>
  )
}
