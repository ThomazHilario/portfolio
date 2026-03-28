import type { ReactNode } from "react";

import type { DialogPortalProps } from "@radix-ui/react-dialog";

import { Drawer }  from "vaul";

type DrawerPortalProps = DialogPortalProps & {
    children: ReactNode
}

export const DrawerPortal = ({ children }: DrawerPortalProps) => (
    <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        {children}
    </Drawer.Portal>
)