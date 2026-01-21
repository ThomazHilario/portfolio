// import css
import './home.css'

// import cv
import curriculo from '../../assets/Curriculo Thomaz Hilário.pdf'

// Components
import { ScaleFadeIn } from '../../Components/Animations/ScaleFadeIn';
import { SobreMim } from '../../Components/Sobre/sobre';
import { Habilidades } from '../../Components/Habilidades/habilidades';
import { Projetos } from '../../Components/Projetos/projetos';
import { Carreira } from '../../Components/Carreira';
import { Contatos } from '../../Components/Contatos/contatos';

// import icons
import { SiGithub, SiLinkedin } from "react-icons/si";

// Foto de perfil
import Foto from '../../assets/foto.png'

export default function Home(){
    return(
        <main id='container_main'>

            {/* Container foto */}
            <section id="container_apresentacao">

                <article id='container_description'>

                    {/* Container de introducao */}
                    <section id='apresentacao'>
                        <h1>Thomaz</h1>
                        <h1>Alves</h1>

                        <h3>Front-End Developer</h3>

                    </section>

                    <section id='links_pessoais'>

                        <a href={curriculo} target='_blank' rel="noreferrer" id='curriculo' className='links_informacao'>Download CV</a>


                        <a href='https://api.whatsapp.com/send?phone=5585988274949' target="_blank" rel="noreferrer" className='links_informacao'>Entrar em Contato</a>
                    </section>
                </article>

                <div className='perfil'>
                    {/* Minha Foto */}
                    <img src={Foto} alt="Imagem de perfil" className='fotoPerfil'/>

                    <div id='plataformasDigitais'>
                        <a href='https://github.com/ThomazHilario' target='blank'><SiGithub size={25} color='blueviolet'/></a>
                        <a href='https://www.linkedin.com/in/thomazalvesdev/' target='blank'><SiLinkedin size={25} color='blueviolet'/></a>
                    </div>
                </div>
            </section>

            {/* Sobre mim */}
            <SobreMim/>

            {/* Habilidades */}
            <Habilidades/>

            {/* Projetos */}
            <Projetos/>

            {/* Carreira */}
            <Carreira/>

            {/* Contatos */}
            <Contatos/>
        </main>
    )
}