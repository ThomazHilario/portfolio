import type { ComponentProps } from "react";

import { Drawer as DrawerPrimitive}  from "vaul";
import { cn } from "../../../utils";

type DrawerTriggerProps = ComponentProps<typeof DrawerPrimitive.Trigger>

export const DrawerTrigger = ({ children, className }: DrawerTriggerProps) => (
    <DrawerPrimitive.Trigger className={cn(className)}>{children}</DrawerPrimitive.Trigger>
)