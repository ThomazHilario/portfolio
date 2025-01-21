// Components
import { CardCarreiraItem } from './CardCarreiraItem'
import { SectionContentCarreira } from './SectionContentCarreira'

// Css
import './carreira.css'

export const Carreira = () => {
    return(
        <section>
            {/* Titulo */}
            <h1 className="titulo">💼 Carreira</h1>

            {/* Lista de experiências profissionais */}
            <article id="carreira__article__container">
                {/* Carreira Profissional */}
                <SectionContentCarreira titulo='Profissional'>

                    <CardCarreiraItem
                        Title='Compass Uol (Estagiário) | Desenvolvedor FullStack React & NodeJs'
                        Description='Atuei como estagiário na Compass UOL, onde adquiri conhecimentos em Desenvolvimento Front-End com React e Desenvolvimento Back-End com NestJS. Durante o estágio, desenvolvi projetos, como um e-commerce, aplicando as tecnologias aprendidas.'
                        Date='Junho / 2024 - Novembro / 2024'
                        isActive={false}
                    />

                </SectionContentCarreira>

                {/* Carreira Acadêmica */}
                <SectionContentCarreira titulo='Acadêmico'>

                    <CardCarreiraItem
                        Title='Básico | Ensino Médio Completo'
                        Description='Ao final de 2023 me formei no ensino médio na instituição Colégio Cascavelense.'
                        Date='Janeiro / 2020 - Dezembro / 2023'
                        isActive={false}
                    />

                </SectionContentCarreira>
            </article>
        </section>
    )
}