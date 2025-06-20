export function Separator() {
  return (
    <div
      role="separator"
      className="mx-auto my-12 flex items-center justify-center gap-px text-slate-800"
    >
      <div className="size-1.5 rotate-45 bg-current" />
      <div>
        <div className="border-x-3 border-b-5 border-x-transparent" />
        <div className="border-x-3 border-t-5 border-x-transparent" />
        <div className="border-x-3 border-b-5 border-x-transparent" />
        <div className="border-x-3 border-t-5 border-x-transparent" />
      </div>
      <div className="size-1.5 rounded-full bg-current" />
      <div>
        <div className="border-x-3 border-b-5 border-x-transparent" />
        <div className="border-x-3 border-t-5 border-x-transparent" />
        <div className="border-x-3 border-b-5 border-x-transparent" />
        <div className="border-x-3 border-t-5 border-x-transparent" />
      </div>
      <div className="size-1.5 rotate-45 bg-current" />
    </div>
  )
}
