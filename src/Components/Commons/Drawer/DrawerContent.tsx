import { type ComponentProps } from "react";
import { Drawer as DrawerPrimitive} from "vaul";
import { cn } from "../../../utils";
import { DrawerPortal } from "./DrawerPortal";

type DrawerContentProps = ComponentProps<typeof DrawerPrimitive.Content>

export const DrawerContent = (
  ({ children, className }: DrawerContentProps) => (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          "fixed bottom-0 left-0 right-0 h-full max-w-64 z-60 backdrop-blur-md rounded-r-2xl py-3",
          className
        )}
      >
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
);