import { useGitHubAutomatedRepos } from 'github-automated-repos'

// Components
import { CardProjetos } from './CardProjetos/index.js'
import { Container, ScaleFadeIn } from '../index.js'

// import css
import './projetos.css'

export const Projetos = () => {
    // Buscando meus projetos
    const data = useGitHubAutomatedRepos('ThomazHilario','deployed')

    return(
        <ScaleFadeIn id='container_projetos' position="right">

            {/* Titulo */}
            <h1 className='titulo'>Projetos</h1>   
            <Container dataAttribute="horizontal-padding">
                <article id='projetos'>
                    {
                        data.map((project, idx) => {
                            return(
                                <CardProjetos
                                    key={idx}
                                    homepage={project.homepage}
                                    title={project.name.replace(/(-app|-+)/g,' ')}
                                    description={project.description}
                                    topics={project.topics.filter(project => project !== 'deployed')}
                                    banner={project.banner.replace('DIGOARTHUR','ThomazHilario')}
                                />
                            )
                        })
                    }
                </article>
            </Container>    
        </ScaleFadeIn>
    )
}