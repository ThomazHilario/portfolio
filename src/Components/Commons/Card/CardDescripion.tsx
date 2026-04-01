import type { ComponentProps } from "react"
import { cn } from "../../../utils"

type CardDescriptionProps = ComponentProps<"div">

export const CardDescription = ({ className, ...props }: CardDescriptionProps) => {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground font-spaceGrotesk whitespace-break-spaces text-justify break-all", className)}
      {...props}
    />
  )
}