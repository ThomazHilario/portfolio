import type { PropsWithChildren } from "react"

import { useCarouselContext } from './Carousel';
import { Button } from '../Button';

import { FaAngleRight } from "react-icons/fa";

import { cn } from "../../../utils";

type CarouselNextButtonProps = PropsWithChildren<{
    className?: string;
}>

export const CarouselNextButton = ({ children = <FaAngleRight color="white" />, className }: CarouselNextButtonProps) => {

    const { scrollNext } = useCarouselContext()

    return (
        <Button className={cn("bg-slate-900 rounded-full p-0 m-0 w-10 h-10 shrink-0", className)} onClick={scrollNext}>
            {children}
        </Button>
    )
}