// Components
import { Card } from "../Commons/Card"
import { ScaleFadeIn } from "../index"
import { Section, SectionHeader } from "../Section"

import { stacks } from "../../Config"
import { Carousel, CarouselContent, CarouselNextButton, CarouselPrevButton, CarouselViewport } from "../Commons/Carousel"

export const Habilidades = () => {

    return(
        <ScaleFadeIn position="left">
            <Section>
                <SectionHeader>
                    <h1 className="text-fuchsia-500">Stacks</h1>
                    <h2 className="text-white text-2xl md:text-6xl">Tecnologias</h2>
                </SectionHeader>
                
                {/* Seção de habilidades */}
                <Carousel>
                    <CarouselPrevButton />

                    <CarouselViewport>
                        <CarouselContent className="flex gap-5 justify-between">
                            {stacks.map((stack, index) => (
                                <Card className="bg-slate-900" key={index}>
                                    {stack.icon}
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