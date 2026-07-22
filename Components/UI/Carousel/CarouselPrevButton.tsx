'use client';

import type { PropsWithChildren } from "react"

import { cn } from "@/Utils";
import { useCarouselContext } from './Carousel';
import { Button } from '../Button';

import { ChevronLeft } from 'lucide-react'

type CarouselPrevButtonProps = PropsWithChildren<{
    className?: string;
}>

export const CarouselPrevButton = ({ children = <ChevronLeft color="white" />, className }: CarouselPrevButtonProps) => {

    const { scrollPrev, canScrollPrev } = useCarouselContext()

    return (
        <Button className={cn("lg:absolute bg-slate-800/70 rounded-full w-10 h-10 z-50 shrink-0 lg:left-1 lg:group-hover:flex lg:disabled:hidden", className)} disabled={!canScrollPrev} onClick={scrollPrev}>
            {children}
        </Button>
    )
}