import Prism from "prismjs"

import { cn } from "@/utils/cn"

import "prismjs/themes/prism.css"

export function JS_Code({
  children,
  className,
}: {
  children: string
  className?: string
}) {
  return (
    <pre className={cn("language-javascript", className)}>
      <code
        dangerouslySetInnerHTML={{
          __html: Prism.highlight(
            children.trim(),
            Prism.languages.javascript,
            "javascript",
          ),
        }}
      />
    </pre>
  )
}
