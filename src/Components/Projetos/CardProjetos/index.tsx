// css
import './cardprojetos.css'

// Interface
type CardProjetosProps = {
    homepage: string;
    title: string;
    description: string;
    topics: string[];
    banner: string;
}


export const CardProjetos = ({homepage, title, description, topics, banner}: CardProjetosProps) => {
    return(
        <a href={homepage} className='cardProjeto' target='blank'>
            {/* Titulo */}
            <h1>{title}</h1>

            {/* Descricao */}
            <p>{description}</p>

            {/* Tecnologias usadas */}
            <section className='container_skills'>
                {
                    topics.map((item,idx) => (
                            <span key={idx}>
                                {item[0]!.toUpperCase() + item.substring(1)}
                            </span>
                        )
                    )
                }
            </section>

            {/* imagem */}
            <img className='imgProjeto' src={banner} alt="imagem do projeto" />
        </a>
    )
}