import type { ComponentProps } from "react"

type DrawerFooterProps = ComponentProps<"div">

import { cn } from "../../../utils"

export const DrawerFooter = ({ className, ...props }: DrawerFooterProps) => {
  return (
    <div
      data-slot="drawer-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  )
}