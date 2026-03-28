import type { ReactNode } from "react";

import { Drawer }  from "vaul";
import { cn } from "../../../utils";

type DrawerTriggerProps = {
    children: ReactNode
    className?: string 
}

export const DrawerTrigger = ({ children, className }: DrawerTriggerProps) => (
    <Drawer.Trigger className={cn(className)}>{children}</Drawer.Trigger>
)