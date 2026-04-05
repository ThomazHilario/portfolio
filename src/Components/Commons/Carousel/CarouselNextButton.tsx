import type { PropsWithChildren } from "react"

import { useCarouselContext } from './Carousel';
import { Button } from '../Button';

import { FaAngleRight } from "react-icons/fa";

import { cn } from "../../../utils";

type CarouselNextButtonProps = PropsWithChildren<{
    className?: string;
}>

export const CarouselNextButton = ({ children = <FaAngleRight color="white" />, className }: CarouselNextButtonProps) => {

    const { scrollNext, canScrollNext } = useCarouselContext()

    return (
        <Button className={cn("lg:absolute bg-slate-800/70 rounded-full p-0 m-0 w-10 h-10 z-50 shrink-0 lg:right-1 lg:group-hover:flex lg:disabled:hidden", className)} disabled={!canScrollNext} onClick={scrollNext}>
            {children}
        </Button>
    )
}