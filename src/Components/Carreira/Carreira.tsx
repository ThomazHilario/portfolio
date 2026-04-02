// Components
import { ScaleFadeIn } from '@/Components/Animations'
import { Carousel, CarouselViewport, CarouselContent, CarouselNextButton, CarouselPrevButton } from '@/Components/Commons'
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from "@/Components/Section"
import { CardCarreiraItem } from './CardCarreiraItem/index.js'

// Mock
import mock from '../../Mocks/carreira.json'

export const Carreira = () => {
    const { academico, profissional } = mock

    return(
        <ScaleFadeIn position="left">
            <Section>
                <SectionHeader>
                    <SectionTitle>Carreira</SectionTitle>
                    <SectionSubtitle>Trajetoria Profissional / Educacional:</SectionSubtitle>
                </SectionHeader>

                <Carousel>
                    <CarouselViewport>
                        <CarouselContent className='flex text-white gap-4'>
                            {profissional.map((item, index) => (
                                <CardCarreiraItem
                                    key={index}
                                    title={item.title}
                                    role={item.role}
                                    description={item.description}
                                    date={item.date}
                                    isActive={item.isActive}
                                />
                            ))}

                            {academico.map((item, index) => (
                                <CardCarreiraItem
                                    key={index}
                                    title={item.title}
                                    role={item.role}
                                    description={item.description}
                                    date={item.date}
                                    isActive={item.isActive}
                                />
                            ))}
                        </CarouselContent>
                    </CarouselViewport>
                </Carousel>
            </Section>
        </ScaleFadeIn>
    )
}