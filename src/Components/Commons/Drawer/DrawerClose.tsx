import type { ComponentProps } from "react";

import { Drawer as DrawerPrimitive } from "vaul";
import { cn } from "../../../utils";

type DrawerCloseProps = ComponentProps<typeof DrawerPrimitive.Close>

export const DrawerClose = ({ children, className, ...props }: DrawerCloseProps) => (
    <DrawerPrimitive.Close className={cn(className)} data-slot="drawer-close" {...props}>
        {children}
    </DrawerPrimitive.Close>
)