import type { ComponentProps } from "react";

import { Drawer as DrawerPrimitive } from "vaul";

type DrawerProps = ComponentProps<typeof DrawerPrimitive.Root>

export const Drawer = ({ children, ...props }: DrawerProps) => (
    <DrawerPrimitive.Root data-slot="drawer" {...props}>{children}</DrawerPrimitive.Root>
)