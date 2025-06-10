"use client"

import { useMatchMedia } from "../hooks/use-match-media"

export function MediaBoundary({
  query,
  children,
  fallback,
}: {
  query: string
  children?: React.ReactNode
  fallback?: React.ReactNode
}) {
  const matches = useMatchMedia(query)

  if (!matches) {
    return fallback
  }

  return children
}
