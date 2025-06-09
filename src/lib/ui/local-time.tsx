"use client"

import { useIsClient } from "../hooks/use-is-client"

export function LocalTime({
  unix,
  ...props
}: React.ComponentProps<"time"> & { unix: number }) {
  const isClient = useIsClient()
  if (!isClient) {
    return null
  }

  const date = new Date(unix)
  const datetime = toDateTimeString(date)
  const timestamp = formatDate(date)

  return (
    <time dateTime={datetime} {...props}>
      {timestamp}
    </time>
  )
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
