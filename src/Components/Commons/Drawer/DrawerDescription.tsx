import type { ComponentProps } from "react"

import { Drawer as DrawerPrimitive } from "vaul";

type DrawerDescriptionProps = ComponentProps<typeof DrawerPrimitive.Description>

import { cn } from "../../../utils";

export const DrawerDescription = ({
  className,
  ...props
}: DrawerDescriptionProps) => {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}