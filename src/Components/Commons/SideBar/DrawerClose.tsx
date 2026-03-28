import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { Drawer }  from "vaul";
import { cn } from "../../../utils";

type DrawerCloseProps = ComponentPropsWithoutRef<typeof Drawer.Close> & {
    children: ReactNode
    className?: string 
}

export const DrawerClose = ({ children, className }: DrawerCloseProps) => (
    <Drawer.Close className={cn(className)}>{children}</Drawer.Close>
)