import './home.css'
import curriculo from '../../assets/Curriculo Thomaz Hilário.pdf'
import {Link} from 'react-router-dom'

export default function Home(){
    return(
        <main id='container_home'>
            {/* Container foto */}
            <section id="container_apresentacao">
                <img src="https://images.pexels.com/photos/8919698/pexels-photo-8919698.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Imagem de perfil" className='fotoPerfil'/>

                <article id='container_description'>
                    {/* Container de introducao */}
                    <div id='apresentacao'>
                        <h1>Thomaz</h1>
                        <h1>Alves</h1>

                        <p>Front-End Developer</p>

                        <a href={curriculo} target='_blank' className='curriculo'>Meu Curriculo</a>
                    </div>
                </article>
            </section>

            {/* Sobre mim */}
            <section id='container_sobremim'>
                {/* Texto de apresentacao */}
                <p className='texto-apresentacao'>Universitario de Desenvolvimento Full-stack na Estacio, e tenho habilidades em Front-end usando ferramentas como Html5, Css3, javaScript e ReactJs.</p>
            </section>
        </main>
    )
}