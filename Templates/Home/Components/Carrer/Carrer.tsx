import { 
    Carousel, 
    CarouselViewport, 
    CarouselContent, 
    CarouselNextButton, 
    CarouselPrevButton 
} from '@/Components/UI'

import { 
    Section, 
    SectionHeader, 
    SectionTitle, 
    SectionSubtitle 
} from "@/Components/Commons"

import { CARRER_INFORMATION } from '@/Config'
import { CardCarrerItem } from './CardCarrerItem'

export const Carrer = () => {
    const { academico, profissional } = CARRER_INFORMATION

    return(
        <Section className='carreira'>
            <SectionHeader>
                <SectionTitle as='h1'>Carreira</SectionTitle>
                <SectionSubtitle as='h2'>Trajetoria Profissional / Educacional:</SectionSubtitle>
            </SectionHeader>

            <Carousel>
                <CarouselPrevButton className='hidden lg:flex' />

                <CarouselViewport>
                    <CarouselContent className='flex text-white gap-4'>
                        {profissional.map((item, index) => (
                            <CardCarrerItem
                                key={index}
                                title={item.title}
                                role={item.role}
                                description={item.description}
                                date={item.date}
                                isActive={item.isActive}
                            />
                        ))}

                        {academico.map((item, index) => (
                            <CardCarrerItem
                                key={index}
                                title={item.title}
                                role={item.role}
                                description={item.description}
                                date={item.date}
                                isActive={item.isActive}
                            />
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
}