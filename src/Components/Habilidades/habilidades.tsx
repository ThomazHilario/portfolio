// Components
import { 
    Carousel, 
    CarouselContent, 
    CarouselNextButton, 
    CarouselPrevButton, 
    CarouselViewport, 
    Card, CardContent, 
    CardHeader, 
    CardTitle,
} from "@/Components/Commons"
import { Section, SectionHeader } from "@/Components/Section"

import { ScaleFadeIn } from "../index"

import { GoDotFill } from "react-icons/go";

import { stacks } from "@/Config"

export const Habilidades = () => {

    return(
        <ScaleFadeIn position="left">
            <Section>
                <SectionHeader>
                    <h1 className="text-fuchsia-500">Stacks</h1>
                    <h2 className="text-white text-2xl md:text-6xl">Tecnologias</h2>
                </SectionHeader>
                
                <Carousel>
                    <CarouselPrevButton />

                    <CarouselViewport>
                        <CarouselContent className="flex gap-5 justify-between">
                            {stacks.map((stack, index) => (
                                <Card className="flex justify-center items-center flex-col bg-slate-800/40" key={index}>
                                    <CardHeader>
                                        {stack.icon}
                                    </CardHeader>
                                    <CardContent>
                                        <CardTitle className="text-neutral-400 px-0 pr-1 font-semibold text-xs flex justify-center items-center gap-1">
                                            <GoDotFill color="purple" />
                                            {stack.name}
                                        </CardTitle>
                                    </CardContent>
                                </Card>
                            ))}
                        </CarouselContent> 
                    </CarouselViewport> 

                    <CarouselNextButton />
                </Carousel>        
            </Section>
        </ScaleFadeIn>
    )
}