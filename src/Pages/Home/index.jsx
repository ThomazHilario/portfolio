import './home.css'
import {Link} from 'react-router-dom'

export default function Home(){
    return(
        <main id='container_home'>
            {/* Container foto */}
            <section id="container_foto">
                <img src="https://images.pexels.com/photos/8919698/pexels-photo-8919698.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Imagem de perfil"/>
            </section>

            {/* Container descricao */}
            <section id="container_description">

                {/* Container de introducao */}
                <div id='apresentacao'>
                    <h1>Ola, eu sou Thomaz Alves</h1>
                    <p>Desenvolvedor front-end</p>
                </div>

                {/* Texto de apresentacao */}
                <p className='texto-apresentacao'>Universitario de Desenvolvimento Full-stack na Estacio, e tenho habilidades em Front-end usando ferramentas como Html5, Css3, javaScript e ReactJs.</p>

                {/* Link para acessar a rota de projetos */}
                <Link to="/projetos" id='btn-projeto' className='rounded-sm bg-indigo-500 text-white'>Projetos</Link>
            </section>
        </main>
    )
}