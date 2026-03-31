import useEmblaCarousel, { type EmblaViewportRefType } from "embla-carousel-react";
import { createContext, useContext, type ReactNode } from "react"

type CarouselContextProps = {
    carouselRef: EmblaViewportRefType;
    scrollPrev: () => void;
    scrollNext: () => void;
}

type CarouselProps = {
    children: ReactNode;
}


const CarouselContext = createContext<CarouselContextProps | null>(null)


export const Carousel = ({ children }: CarouselProps) => {
    const [carouselRef, emblaApi] = useEmblaCarousel()

    const scrollPrev = () => emblaApi?.scrollPrev()
    const scrollNext = () => emblaApi?.scrollNext()

    return (
        <CarouselContext.Provider value={{ carouselRef, scrollPrev, scrollNext }} >
            <div className="flex items-center justify-between gap-5">
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