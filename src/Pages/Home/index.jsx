import './home.css'
import curriculo from '../../assets/Curriculo Thomaz Hilário.pdf'
import imgIlustrativa from '../../icons/PC.jpg'
import { SiHtml5, SiCss3, SiTypescript,SiReact,SiGit, SiGithub, SiTailwindcss, SiJavascript  } from "react-icons/si";


export default function Home(){
    return(
        <main id='container_home'>

            {/* Container foto */}
            <section id="container_apresentacao">
                {/* Minha Foto */}
                <img src="https://images.pexels.com/photos/8919698/pexels-photo-8919698.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Imagem de perfil" className='fotoPerfil'/>

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
                    <a href={curriculo} target="_blank" rel="noreferrer" className='links_informacao'>Entrar em Contato</a>
                </div>
            </section>

            {/* Sobre mim */}
            <SobreMim/>

            {/* Habilidades */}
            <Habilidades/>

            {/* Projetos */}
            <Projetos/>
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

            </div>

        </section>
    )
}