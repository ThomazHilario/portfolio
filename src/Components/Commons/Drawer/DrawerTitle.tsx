import type { ComponentProps } from "react"

import { Drawer as DrawerPrimitive } from "vaul";

type DrawerTitleProps = ComponentProps<typeof DrawerPrimitive.Title>

import { cn } from "../../../utils";

export const DrawerTitle = ({
  className,
  ...props
}: DrawerTitleProps) => {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn(
        "cn-font-heading text-base font-medium text-foreground",
        className
      )}
      {...props}
    />
  )
}