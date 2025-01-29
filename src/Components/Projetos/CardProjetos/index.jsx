// css
import './cardprojetos.css'


export const CardProjetos = ({homepage, title, description, topics, banner}) => {
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
                                {item[0].toUpperCase() + item.substring(1)}
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