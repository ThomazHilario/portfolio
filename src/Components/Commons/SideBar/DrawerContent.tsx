import type { CSSProperties, ReactNode } from "react";

import { Drawer }  from "vaul";
import { cn } from "../../../utils";

type DrawerContentProps = {
    children: ReactNode
    className?: string 
}

export const DrawerContent = ({ children, className }: DrawerContentProps) => (
    <Drawer.Content className={cn('fixed bottom-0 left-0 right-0 h-full max-w-64 z-60 backdrop-blur-md rounded-r-2xl py-5', className)} >
        {children}
    </Drawer.Content>
)