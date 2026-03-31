import type { ComponentProps } from "react"
import { cn } from "../../../utils"

type CardTitleProps = ComponentProps<"div">

export const CardTitle = ({ className, ...props }: CardTitleProps) => {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "cn-font-heading text-base leading-snug font-medium group-data-[size=sm]/card:text-sm",
        className
      )}
      {...props}
    />
  )
}