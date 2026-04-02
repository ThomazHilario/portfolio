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
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from "@/Components/Section"

import { ScaleFadeIn } from "../index"

import { GoDotFill } from "react-icons/go";

import { stacks } from "@/Config"

export const Habilidades = () => {

    return(
        <ScaleFadeIn position="left">
            <Section>
                <SectionHeader>
                    <SectionTitle>Stacks</SectionTitle>
                    <SectionSubtitle>Tecnologias</SectionSubtitle>
                </SectionHeader>
                
                <Carousel>
                    <CarouselPrevButton />

                    <CarouselViewport>
                        <CarouselContent className="flex gap-5 justify-between">
                            {stacks.map((stack, index) => (
                                <Card className="flex justify-center items-center bg-slate-800/40" key={index}>
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