import { useGitHubAutomatedRepos } from 'github-automated-repos'

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
                            <a key={idx} href={item.homepage} target='blank' className='cardProjeto'>
                                {/* Titulo */}
                                <h1>{item.name.replace(/(-app|-+)/g,' ')}</h1>

                                {/* Descricao */}
                                <p>{item.description}</p>

                                {/* Tecnologias usadas */}
                                <div className='container_skills'>
                                    {
                                        item.topics.filter(item => item !== 'deployed').map((item,idx) => <span key={idx}>{item[0].toUpperCase() + item.substring(1)}</span>)
                                    }
                                </div>

                                {/* imagem */}
                                <img className='imgProjeto' src={item.banner.replace('DIGOARTHUR','ThomazHilario')} alt="imagem do projeto" />
                            </a>
                        )
                    })
                }
            </article>
        </section>
    )
}