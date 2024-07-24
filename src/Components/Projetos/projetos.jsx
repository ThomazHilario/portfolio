import { useGitHubAutomatedRepos } from 'github-automated-repos'

// Apresentações dos projetos
import capputeenoImage from '../../images/CapputeenoImage.png'
import crudApp from '../../images/crudappimage.png'
import jogoDaMemoria from '../../videos/jogo-da-memoria-projeto.mp4'
import decodificador from '../../images/Decodificador-de-codigo.png'
import notesImg from '../../images/notesImg.jpeg'

// import css
import './projetos.css'

export const Projetos2 = () => {

    return(
        <section id='container_projetos'>

            {/* Titulo */}
            <div className='container_titulo'>
                <h1 className='titulo'>Projetos</h1>
            </div>

            <div id='projetos'>

                {/* Projeto capputeeno */}
                <a href='https://capputeeno-app.vercel.app' target='blank' className='cardProjeto'>
                    {/* Titulo */}
                    <h5>Capputeeno</h5>

                    {/* Descricao */}
                    <p>Desafio de um site de E-commerce da Rocketseat.</p>

                    {/* Tecnologias usadas */}
                    <div className='container_skills'>
                        <span>React</span>
                        <span>TypeScript</span>
                        <span>TailwindCss</span>
                    </div>
                    
                    <img className='imgProjeto' src={capputeenoImage} alt='imagem capputeeno'/>
                </a>

                <a href='https://crud-app-cyan.vercel.app' target='blank' className='cardProjeto'>
                    {/* Title */}
                    <h5>Crud App</h5>

                    {/* Descrição */}
                    <p>Implementação de um sistema de chamados com banco de dados.</p>

                    {/* Tecnologias usadas */}
                    <div className='container_skills'>
                        <span>React</span>
                        <span>Firebase</span>
                    </div>

                    {/* imagem do projeto */}
                    <img className='imgProjeto' src={crudApp} alt='image crudapp'/>
                </a>

                <a href='' target='blank' className='cardProjeto'>
                    {/* Title */}
                    <h5>Jogo da memória</h5>

                    {/* Descrição */}
                    <p>App web de jogo da memória, com experiência intuitiva e divertida.</p>

                    {/* Tecnologias */}
                    <div className='container_skills'>
                        <span>React</span>
                    </div>

                    {/* Apresentação do projeto */}
                    <video autoPlay loop muted>
                        <source src={jogoDaMemoria} />
                    </video>
                </a>

                <a href='https://thomazhilario.github.io/Decodificador-de-texto/'  target='blank' className='cardProjeto'>
                    {/* Title */}
                    <h5>Decodificador de texto</h5>

                    {/* Descricao */}
                    <p>Decodificador de texto desenvolvido em uma colaboração entre o Challenge One e a Alura.</p>

                    <div className='container_skills'>
                        <span>Html</span>
                        <span>Css</span>
                        <span>JavaScript</span>
                    </div>

                    <img src={decodificador} className='imgProjeto' alt='Imagem do decodificador de texto'/>
                </a>

                <a href='https://notes-nlw-rocketseat.vercel.app/' target='blank' className='cardProjeto'>
                    {/* Titulo */}
                    <h5>Notes</h5>

                    {/* Descricao */}
                    <p>App da NLW - Expert da Rocketseat. Plataforma para criar e gerenciar notas</p>

                    {/* Tecnologias usadas */}
                    <div className='container_skills'>
                        <span>React</span>
                        <span>TypeScript</span>
                        <span>TailwindCss</span>
                        <span>Firebase</span>
                    </div>
                    
                    <img className='imgProjeto' src={notesImg} alt='imagem do notes'/>
                </a>

            </div>

        </section>
    )
}

export const Projetos = () => {
    // Buscando meus projetos
    const data = useGitHubAutomatedRepos('ThomazHilario','deployed')

    return(
        <section id='container_projetos'>
            {/* Titulo */}
            <div className='container_titulo'>
                    <h1 className='titulo'>Projetos</h1>
            </div>

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