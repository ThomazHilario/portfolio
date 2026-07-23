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
    If, 
    Section, 
    SectionHeader, 
    SectionSubtitle, 
    SectionTitle 
} from "@/Components";
import { STACKS_VALUES } from "@/Config";

export const Skills = () => (
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
                    <CarouselPrevButton/>
                    <CarouselNextButton/>
                </div>

            </CarouselViewport> 

            <CarouselNextButton className='hidden lg:flex' />
        </Carousel>        
    </Section>
)