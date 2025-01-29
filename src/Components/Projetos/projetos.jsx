import { useGitHubAutomatedRepos } from 'github-automated-repos'

// Components
import { CardProjetos } from './CardProjetos'

// import css
import './projetos.css'

export const Projetos = () => {
    // Buscando meus projetos
    const data = useGitHubAutomatedRepos('ThomazHilario','deployed')

    return(
        <section id='container_projetos'>

            {/* Titulo */}
            <h1 className='titulo'>Projetos</h1>   

            <article id='projetos'>
                {
                    data.map((item, idx) => {
                        return(
                            <CardProjetos
                                key={idx}
                                homepage={item.homepage}
                                title={item.name.replace(/(-app|-+)/g,' ')}
                                description={item.description}
                                topics={item.topics.filter(item => item !== 'deployed')}
                                banner={item.banner.replace('DIGOARTHUR','ThomazHilario')}
                            />
                        )
                    })
                }
            </article>
        </section>
    )
}