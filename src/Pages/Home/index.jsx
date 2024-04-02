// import css
import './home.css'

// import cv
import curriculo from '../../assets/Curriculo Thomaz Hilário.pdf'

// import Components
import { SobreMim } from '../../Components/Sobre/sobre';
import { Habilidades } from '../../Components/Habilidades/habilidades';
import { Projetos } from '../../Components/Projetos/projetos';

// import icons
import { SiGithub, SiLinkedin } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";

// Foto de perfil
import Foto from '../../assets/foto.png'

export default function Home(){
    return(
        <main id='container_main'>

            {/* Container foto */}
            <section id="container_apresentacao">

                {/* Minha Foto */}
                <img src={Foto} alt="Imagem de perfil" className='fotoPerfil'/>

                <article id='container_description'>

                    {/* Container de introducao */}
                    <div id='apresentacao'>
                        <h1>Thomaz</h1>
                        <h1>Alves</h1>

                        <p>Front-End Developer</p>

                    </div>
                </article>

                <div id='links_pessoais'>

                    <a href={curriculo} target='_blank' rel="noreferrer" id='curriculo' className='links_informacao'>Download CV</a>


                    <a href='https://api.whatsapp.com/send?phone=5585988274949' target="_blank" rel="noreferrer" className='links_informacao'>Entrar em Contato</a>
                </div>

                <div id='plataformasDigitais'>
                    <SiGithub size={25} color='blueviolet'/>
                    <SiLinkedin size={25} color='blueviolet'/>
                </div>
            </section>

            {/* Sobre mim */}
            <SobreMim/>

            {/* Habilidades */}
            <Habilidades/>

            {/* Projetos */}
            <Projetos/>

            {/* Contatos */}
            <Contatos/>
        </main>
    )
}

// Componente Contatos
function Contatos(){

    return(
        <section id="container_Contatos">
            {/* Titulo */}
            <div className='container_titulo'>
                <h1 className='titulo'>Contatos</h1>
            </div>

            <div id='contatos'>
                <a className='linkSocial' href='mailto:thomazhilario5@gmail.com' target='blank'>
                    <HiOutlineMail color='blueviolet' size={50}/>
                    <h1>E-mail</h1>
                    <p>thomazhilario5@gmail.com</p>
                </a>

                <a className='linkSocial' href='https://api.whatsapp.com/send?phone=5585988274949' target='blank'>
                    <FiPhone color='blueviolet' size={50}/>
                    <h1>Telefone</h1>
                    <p>(85) 98827-4949</p>
                </a>

                <a className='linkSocial' href='https://www.linkedin.com/in/thomazalvesdev/' target='blank'>
                    <SiLinkedin size={50} color='blueviolet'/>
                    <h1>Linkedin</h1>
                    <p>@thomazalvesdev</p>
                </a>

                <a className='linkSocial' href='https://github.com/ThomazHilario' target='blank'>
                    <SiGithub size={50} color='blueviolet'/>
                    <h1>GitHub</h1>
                    <p>@ThomazHilario</p>
                </a>
            </div>
        </section>
    )
}