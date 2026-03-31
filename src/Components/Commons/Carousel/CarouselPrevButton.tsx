import type { PropsWithChildren } from "react"
import { cn } from "../../../utils";
import { useCarouselContext } from './Carousel';
import { Button } from '../Button';
import { FaAngleLeft } from "react-icons/fa";

type CarouselPrevButtonProps = PropsWithChildren<{
    className?: string;
}>

export const CarouselPrevButton = ({ children = <FaAngleLeft color="white" />, className }: CarouselPrevButtonProps) => {

    const { scrollPrev } = useCarouselContext()

    return (
        <Button className={cn("bg-slate-900 rounded-full w-10 h-10 shrink-0", className)} onClick={scrollPrev}>
            {children}
        </Button>
    )
}