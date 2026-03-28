import type { ReactNode } from "react";

import * as DrawerComponent from "vaul";

type DrawerProps = DrawerComponent.DialogProps & {
    children: ReactNode 
}

export const Drawer = ({ children, ...props }: DrawerProps) => (
    <DrawerComponent.Root {...props}>{children}</DrawerComponent.Root>
)