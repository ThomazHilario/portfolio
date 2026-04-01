// Components
import { ScaleFadeIn } from '../index.js'
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from "@/Components/Section"
import { CardCarreiraItem } from './CardCarreiraItem/index.js'

// Mock
import mock from '../../Mocks/carreira.json'

export const Carreira = () => {
    const { academico, profissional } = mock

    return(
        <ScaleFadeIn className='space-y-7' position="left">
            <Section>
                <SectionHeader>
                    <SectionTitle>Carreira</SectionTitle>
                    <SectionSubtitle>Trajetoria Profissional / Educacional:</SectionSubtitle>
                </SectionHeader>

                {/* Lista de experiências profissionais */}
                <article className='flex text-white text-wrap gap-4'>

                    {profissional.map((item, index) => (
                        <CardCarreiraItem
                            key={index}
                            title={item.title}
                            description={item.description}
                            date={item.date}
                            isActive={item.isActive}
                        />
                    ))}

                    {academico.map((item, index) => (
                        <CardCarreiraItem
                            key={index}
                            title={item.title}
                            description={item.description}
                            date={item.date}
                            isActive={item.isActive}
                        />
                    ))}
                </article>
            </Section>
        </ScaleFadeIn>
    )
}