import { Time } from "./time"

export function Header({
  title,
  className,
  children,
  created,
  lastUpdated,
}: {
  title: string
  className?: string
  children?: React.ReactNode
  created: number
  lastUpdated: number
}) {
  return (
    <header className={className}>
      {children}
      <div className="bg-gradient-to-b from-transparent from-50% to-white backdrop-blur-xs">
        <div className="mx-auto flex min-h-80 w-full max-w-3xl flex-col items-center justify-end gap-1 px-6 py-8">
          <h1 className="font-headline text-6xl tracking-tight text-shadow-md text-shadow-white">
            {title}
          </h1>

          <div className="flex flex-wrap gap-[inherit] text-sm text-gray-500">
            <span className="whitespace-nowrap">
              <span className="font-light italic">Created on </span>
              <Time unix={created} dateStyle="medium" />
              <span className="font-light">.</span>
            </span>

            <span className="whitespace-nowrap">
              <span className="font-light italic">Last updated on </span>
              <Time unix={lastUpdated} dateStyle="medium" timeStyle="short" />
              <span className="font-light">.</span>
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
