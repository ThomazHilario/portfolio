import { useGitHubAutomatedRepos } from 'github-automated-repos'

// Components
import { CardProjetos } from './CardProjetos'

// import css
import './projetos.css'
import { ScaleFadeIn } from '../Animations/ScaleFadeIn'

export const Projetos = () => {
    // Buscando meus projetos
    const data = useGitHubAutomatedRepos('ThomazHilario','deployed')

    return(
        <ScaleFadeIn id='container_projetos' position="right" amountValue={window.innerWidth < 768 ? 0 : 0.25}>

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
        </ScaleFadeIn>
    )
}