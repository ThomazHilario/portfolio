import type { ComponentProps } from "react";

import { Drawer as DrawerPrimitive}  from "vaul";

type DrawerPortalProps = ComponentProps<typeof DrawerPrimitive.Portal>

export const DrawerPortal = ({ children, ...props }: DrawerPortalProps) => (
    <DrawerPrimitive.Portal {...props}>
        <DrawerPrimitive.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        {children}
    </DrawerPrimitive.Portal>
)