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
                <div className='container_titulo'>
                    {/* Titulo */}
                    <h1 className='titulo_sobremim'>🙂 Sobre mim</h1>
                </div>

                <div id='container_texto'>
                    {/* Texto de apresentacao */}
                    <p className='texto-apresentacao'>👋 Hello World! Thomaz. Prazer!</p>
                    <p className='texto-apresentacao'>🎓 Universitário de Desenvolvimento Full-Stack pelo Sistema Estacio.</p>
                    <p className='texto-apresentacao'>💡 Interesse em Desenvolvimento Front-End com React</p>
                    <p className='texto-apresentacao'>🚀 Sempre aprendendo...</p>
                </div>
            </section>
        </main>
    )
}