import { useGitHubAutomatedRepos } from 'github-automated-repos'

// Components
import { CardProjetos } from './CardProjetos/index'
import { Container, ScaleFadeIn, Title } from '../index'

// import css
import './projetos.css'

// env 
import env from '../../utils/env'

export const Projetos = () => {
    // Buscando meus projetos
    const data = useGitHubAutomatedRepos(env.GITHUB_USERNAME, env.GITHUB_REPOSITORIES_TYPE)
    
    return(
        <ScaleFadeIn id='container_projetos' position="right">

            {/* Titulo */}
            <Title>Projetos</Title> 

            <Container dataAttribute="horizontal-padding">
                <article id='projetos'>
                    {
                        data.map((project) => {
                            return(
                                <CardProjetos
                                    key={project.id}
                                    homepage={project.homepage}
                                    title={project.name.replace(/(-app|-+)/g,' ')}
                                    description={project.description}
                                    topics={project.topics.filter(topic => topic !== 'deployed')}
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