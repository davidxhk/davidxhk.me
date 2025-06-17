export function Separator() {
  return (
    <div
      role="separator"
      className="my-12 flex flex-nowrap justify-center gap-6"
    >
      {[...Array(3).keys()].map((i) => (
        <span key={i} className="size-1 rounded-xs bg-slate-800" />
      ))}
    </div>
  )
}
