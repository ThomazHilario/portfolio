import type { ComponentProps } from "react"
import { cn } from "../../../utils"

type CardDescriptionProps = ComponentProps<"div">

export const CardDescription = ({ className, ...props }: CardDescriptionProps) => {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}