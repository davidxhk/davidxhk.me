"use client"

import { useIsClient } from "../hooks/use-is-client"

export function LocalTime({
  unix,
  ...props
}: React.ComponentProps<"time"> & { unix: number }) {
  const date = new Date(unix)

  const isClient = useIsClient()
  if (!isClient) {
    // To prevent hydration errors
    setUTC(date)
  }

  return (
    <time dateTime={toDateTimeString(date)} {...props}>
      {formatDate(date)}
    </time>
  )
}

function setUTC(date: Date) {
  const time = date.getTime()
  const utcOffset = date.getTimezoneOffset() * 60000
  date.setTime(time + utcOffset)
}

function toDateTimeString(date: Date) {
  const pad = (num: number) => String(num).padStart(2, "0")
  const year = date.getFullYear()
  const month = pad(date.getMonth() + 1)
  const day = pad(date.getDate())
  const hours = pad(date.getHours())
  const minutes = pad(date.getMinutes())
  const seconds = pad(date.getSeconds())
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`
}

function formatDate(date: Date) {
  const formatter = new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  })
  return formatter.format(date)
}
