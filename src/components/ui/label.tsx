// src/components/ui/label.tsx
import * as React from "react"
import { cn } from "@/lib/utils"

export const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => {
  return (
    <label
      ref={ref}
      className={cn("block text-sm font-medium text-gray-700 mb-1", className)}
      {...props}
    />
  )
})

Label.displayName = "Label"
