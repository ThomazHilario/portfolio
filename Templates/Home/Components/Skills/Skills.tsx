import { 
    Card, 
    CardContent, 
    CardHeader, 
    CardTitle, 
    Carousel, 
    CarouselContent, 
    CarouselNextButton, 
    CarouselPrevButton, 
    CarouselViewport,
} from "@/Components/UI";

import {
    Section, 
    SectionHeader, 
    SectionSubtitle, 
    SectionTitle 
} from '@/Components/Commons'

import { SlideIn } from "@/Components/Transitions";

import { STACKS_VALUES } from "@/Config";

export const Skills = () => (
    <SlideIn initial="slideRight" id='skills-section'>
        <Section className="stacks">
            <SectionHeader>
                <SectionTitle as="h1">Stacks</SectionTitle>
                <SectionSubtitle as="h2">Tecnologias</SectionSubtitle>
            </SectionHeader>
            
            <Carousel>
                <CarouselPrevButton className='hidden lg:flex' />

                <CarouselViewport>
                    <CarouselContent className="flex gap-5 justify-between">
                        {STACKS_VALUES.map((stack, index) => (
                            <Card className="flex justify-center items-center bg-slate-800/40" key={index}>
                                <CardHeader>
                                    <stack.icon className="text-primary size-10" />
                                </CardHeader>
                                <CardContent>
                                    <CardTitle className="text-neutral-400 px-0 pr-1 font-semibold text-xs flex justify-center items-center gap-1">
                                        {stack.name}
                                    </CardTitle>
                                </CardContent>
                            </Card>
                        ))}
                    </CarouselContent> 

                    <div className='flex justify-center items-center gap-5 mt-5 lg:hidden'>
                         <CarouselPrevButton aria-label='Botão para voltar o carrossel' />
                         <CarouselNextButton aria-label='Botão para avançar o carrossel'/>
                    </div>

                </CarouselViewport> 

                <CarouselNextButton className='hidden lg:flex' />
            </Carousel>        
        </Section>
    </SlideIn>
)