import type { ComponentProps } from "react"

type DrawerHeaderProps = ComponentProps<"div">

import { cn } from "../../../utils"

export const DrawerHeader = ({ className, ...props }: DrawerHeaderProps) => {
  return (
    <div
      data-slot="drawer-header"
      className={cn(
        "flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-0.5 md:text-left",
        className
      )}
      {...props}
    />
  )
}