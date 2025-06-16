interface TimeProps extends Intl.DateTimeFormatOptions {
  unix: number
  className?: string
  locale?: Intl.LocalesArgument
}

const DEFAULT_LOCALE = "en-sg"

export function Time({
  unix,
  className,
  locale = DEFAULT_LOCALE,
  ...options
}: TimeProps) {
  const date = new Date(unix)
  const formatter = new Intl.DateTimeFormat(locale, options)

  return (
    <time
      suppressHydrationWarning
      className={className}
      dateTime={date.toISOString()}
    >
      {formatter.format(date)}
    </time>
  )
}
