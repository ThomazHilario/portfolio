import type { ComponentProps } from "react"
import { cn } from "../../../utils"

type CardContentProps = ComponentProps<"div">

export const CardContent = ({ className, ...props }: CardContentProps) => {
  return (
    <div
      data-slot="card-content"
      className={cn("flex flex-col px-4 group-data-[size=sm]/card:px-3", className)}
      {...props}
    />
  )
}