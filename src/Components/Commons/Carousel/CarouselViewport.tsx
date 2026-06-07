import type { PropsWithChildren } from "react"
import { cn } from "../../../utils";
import { useCarouselContext } from './Carousel';

type CarouselViewportProps = PropsWithChildren<{
    className?: string;
}>

export const CarouselViewport = ({ children, className }: CarouselViewportProps) => {

    const { carouselRef } = useCarouselContext()

    return (
        <div className={cn("overflow-hidden", className)} ref={carouselRef}>
            {children}
        </div>
    )
}