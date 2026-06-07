import useEmblaCarousel, { type EmblaViewportRefType, type UseEmblaCarouselType } from "embla-carousel-react";
import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react"

import { cn } from "@/utils";

type EmbleaApiProps = UseEmblaCarouselType[1]

type CarouselContextProps = {
    carouselRef: EmblaViewportRefType;
    scrollPrev: () => void;
    scrollNext: () => void;
    canScrollPrev: boolean;
    canScrollNext: boolean;
}

type CarouselProps = {
    setApi?: (api: EmbleaApiProps) => void;
    children: ReactNode;
    className?: string;
}


const CarouselContext = createContext<CarouselContextProps | null>(null)


export const Carousel = ({ children, className, setApi }: CarouselProps) => {
    const [carouselRef, emblaApi] = useEmblaCarousel()

    const scrollPrev = () => emblaApi?.scrollPrev()
    const scrollNext = () => emblaApi?.scrollNext()
    
    const [canScrollNext, setCanScrollNext] = useState(false)
    const [canScrollPrev, setCanScrollPrev] = useState(false)

    const onSelect = useCallback((api: EmbleaApiProps) => {
        if (!api) return
        setCanScrollPrev(api.canScrollPrev())
        setCanScrollNext(api.canScrollNext())
    }, [])

    useEffect(() => {
        if (!emblaApi || !setApi) return
        setApi(emblaApi)
    }, [emblaApi, setApi])

    useEffect(() => {
        if (!emblaApi) return
        onSelect(emblaApi)
        emblaApi.on("reInit", onSelect)
        emblaApi.on("select", onSelect)
        return () => {
        emblaApi?.off("select", onSelect)
        }
    }, [emblaApi, onSelect])

    return (
        <CarouselContext.Provider value={{ carouselRef, scrollPrev, scrollNext, canScrollNext, canScrollPrev }} >
            <div className={cn("flex items-center justify-between gap-5 relative group/carousel", className)}>
                {children}
            </div>
        </CarouselContext.Provider>
    )
}

export const useCarouselContext = () => {
    const context = useContext(CarouselContext)

    if(!context){
        throw new Error('Not is possible using context')
    }

    return context
}