import type { PropsWithChildren } from "react"
import { cn } from "../../../utils";

type CarouselItemProps = PropsWithChildren<{
    className?: string;
}>

export const CarouselItem = ({ children, className }: CarouselItemProps) => (
    <div className={cn("min-w-0 shrink-0 grow-0 basis-full sm:basis-auto", className)}>
        {children}
    </div>
)