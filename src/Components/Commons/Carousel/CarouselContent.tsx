import type { PropsWithChildren } from "react"
import { cn } from "../../../utils";

type CarouselContentProps = PropsWithChildren<{
    className?: string;
}>

export const CarouselContent = ({ children, className }: CarouselContentProps) => (
    <div className={cn("flex touch-pan-y touch-pinch-zoom", className)}>
        {children}
    </div>
)