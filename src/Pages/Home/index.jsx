import './home.css'
import curriculo from '../../assets/Curriculo Thomaz Hilário.pdf'
import imgIlustrativa from '../../icons/PC.jpg'
import { SiHtml5, SiCss3, SiTypescript,SiReact,SiGit, SiGithub, SiTailwindcss, SiJavascript, SiLinkedin } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";

// Foto de perfil
import Foto from '../../assets/foto.png'

// Apresentações dos projetos
import capputeenoImage from '../../images/CapputeenoImage.png'
import crudApp from '../../images/crudappimage.png'
import jogoDaMemoria from '../../videos/jogo-da-memoria-projeto.mp4'
import decodificador from '../../images/Decodificador-de-codigo.png'
import notesImg from '../../images/notesImg.jpeg'

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

//Componente SobreMim
function SobreMim(){
    return(
        <section id='container_sobremim'>
            <div className='container_titulo'>
                {/* Titulo */}
                <h1 className='titulo'>🙂 Sobre mim</h1>
            </div>

            <div id='container_texto'>
                {/* Texto de apresentacao */}
                <article>
                    <p className='texto-apresentacao'>👋 Hello World! Thomaz. Prazer!</p>
                    <p className='texto-apresentacao'>🎓 Universitário de Desenvolvimento Full-Stack pelo Sistema Estacio.</p>
                    <p className='texto-apresentacao'>💡 Interesse em Desenvolvimento Front-End com Javascript, TypeScript, React, Tailwind...</p>
                    <p className='texto-apresentacao'>🚀 Sempre aprendendo...</p>
                </article>

                {/* Imagem */}
                <img src={imgIlustrativa} alt='imagem computador' id='imgIlustrativa'/>
            </div>
        </section> 
    )
}

// Componente Habilidades
function Habilidades(){
    return(
        <section id='container_habilidade'>
            {/* Titulo */}
            <div className='container_titulo'>
                <h1 className='titulo'>Habilidades</h1>
            </div>

            {/* Habilidades */}
            <div id='mySkills'>
                <SiHtml5 color='blueviolet' size={70}/>
                <SiCss3 color='blueviolet' size={70}/>
                <SiJavascript color='blueviolet' size={70}/>
                <SiTypescript color='blueviolet' size={70}/>
                <SiReact color='blueviolet' size={70}/>
                <SiTailwindcss color='blueviolet' size={70}/>
                <SiGit color='blueviolet' size={70}/>
                <SiGithub color='blueviolet' size={70}/>
            </div>
        </section>
    )
}

// Componente Projetos
function Projetos(){
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