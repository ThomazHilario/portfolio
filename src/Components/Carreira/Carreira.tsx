// Components
import { ScaleFadeIn, Container } from '../index.js'
import { CardCarreiraItem } from './CardCarreiraItem/index.js'
import { SectionContentCarreira } from './SectionContentCarreira/index.js'

// Mock
import mock from '../../Mocks/carreira.json'

// Css
import './carreira.css'

export const Carreira = () => {
    const { academico, profissional } = mock

    return(
        <ScaleFadeIn id='container__carreira' position="left">
            {/* Titulo */}
            <h1 className="titulo">💼 Carreira</h1>

            <Container>
                {/* Lista de experiências profissionais */}
                <article id="carreira__article__container">
                    {/* Carreira Profissional */}
                    <SectionContentCarreira titulo='Profissional'>

                        {profissional.map((item, index) => (
                            <CardCarreiraItem
                                key={index}
                                title={item.title}
                                description={item.description}
                                date={item.date}
                                isActive={item.isActive}
                            />
                        ))}

                    </SectionContentCarreira>

                    {/* Carreira Acadêmica */}
                    <SectionContentCarreira titulo='Acadêmico'>
                        {academico.map((item, index) => (
                            <CardCarreiraItem
                                key={index}
                                title={item.title}
                                description={item.description}
                                date={item.date}
                                isActive={item.isActive}
                            />
                        ))}
                    </SectionContentCarreira>
                </article>
            </Container>
        </ScaleFadeIn>
    )
}