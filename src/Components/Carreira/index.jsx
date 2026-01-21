// Components
import { CardCarreiraItem } from './CardCarreiraItem'
import { SectionContentCarreira } from './SectionContentCarreira'

// Mock
import mock from '../../Mocks/carreira.json'

// Css
import './carreira.css'

export const Carreira = () => {
    const { academico, profissional } = mock

    return(
        <section id='container__carreira'>
            {/* Titulo */}
            <h1 className="titulo">💼 Carreira</h1>

            {/* Lista de experiências profissionais */}
            <article id="carreira__article__container">
                {/* Carreira Profissional */}
                <SectionContentCarreira titulo='Profissional'>

                    {profissional.map((item, index) => (
                        <CardCarreiraItem
                            key={index}
                            Title={item.title}
                            Description={item.description}
                            Date={item.date}
                            isActive={item.isActive}
                        />
                    ))}

                </SectionContentCarreira>

                {/* Carreira Acadêmica */}
                <SectionContentCarreira titulo='Acadêmico'>
                    {academico.map((item, index) => (
                        <CardCarreiraItem
                            key={index}
                            Title={item.title}
                            Description={item.description}
                            Date={item.date}
                            isActive={item.isActive}
                        />
                    ))}
                </SectionContentCarreira>
            </article>
        </section>
    )
}