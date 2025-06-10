import { useCallback, useMemo, useSyncExternalStore } from "react"

/**
 * Custom hook to track changes in a CSS media query
 *
 * @param query The media query string to observe
 * @param defaultValue The default value for server-side rendering (default: false)
 * @returns Whether the media query matches
 */
export function useMatchMedia(query: string, defaultValue = false) {
  const media = useMemo(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query)
    }
  }, [query])

  const subscribe = useCallback(
    (callback: () => void) => {
      media?.addEventListener("change", callback)
      return () => {
        media?.removeEventListener("change", callback)
      }
    },
    [media],
  )

  const getSnapshot = useCallback(
    () => (media ? media.matches : defaultValue),
    [media, defaultValue],
  )

  const getServerSnapshot = useCallback(() => defaultValue, [defaultValue])

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
