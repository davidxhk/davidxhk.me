interface TimeProps extends Intl.DateTimeFormatOptions {
  unix: number
  className?: string
  locale?: Intl.LocalesArgument
}

const DEFAULT_LOCALE = "en-sg"
const DEFAULT_TIMEZONE = "Asia/Singapore"

export function Time({
  unix,
  className,
  locale = DEFAULT_LOCALE,
  timeZone = DEFAULT_TIMEZONE,
  ...options
}: TimeProps) {
  const date = new Date(unix)
  const formatter = new Intl.DateTimeFormat(locale, { timeZone, ...options })

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
