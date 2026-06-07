// import cv
import curriculo from '../../assets/Curriculo Thomaz Hilário.pdf'

// Components
import { SobreMim, Habilidades, Projetos, Carreira, Contatos } from '../../Components'

// import icons
import { SiGithub, SiLinkedin } from "react-icons/si";

// Foto de perfil
import Foto from '../../assets/foto.png'
import { Fragment } from 'react/jsx-runtime';

export default function Home(){
    return(
        <Fragment>
            <section className='flex flex-col-reverse justify-center items-center gap-8 sm:flex-row sm:justify-around sm:h-67.5 sm:gap-5 md:justify-between md:px-25 mt-30'>

                <article className='flex flex-col justify-between text-justify h-full'>

                    {/* Container de introducao */}
                    <section className='flex flex-col items-center px-1.5 mb-2.5 leading-6 sm:items-start sm:mt-10'>
                        <h1 className='mb-5 leading-9 sm:leading-8 text-white text-5xl'>Thomaz</h1>
                        <h1 className='mb-5 leading-9 sm:leading-8 text-white text-5xl'>Alves</h1>

                        <h3 className='mb-3 text-md font-light text-[#f0f0f0b5]'>Front-End Developer</h3>

                    </section>

                    <section className='text-xs flex items-center gap-2.5 w-full sm:flex-row sm:justify-between'>

                        <a href={curriculo} target='_blank' rel="noreferrer" className='bg-[#370f5a] rounded-3xl py-2 px-2.5 border border-[#5f377d] text-[#ffffffd1] transition-all duration-700 lg:py-2.5 lg:px-5 hover:p-2.5 hover:bg-[#6a2f9d]'>Download CV</a>


                        <a href='https://api.whatsapp.com/send?phone=5585988274949' target="_blank" rel="noreferrer" className='rounded-3xl py-2 px-2.5 border border-[#5f377d] text-[#ffffffd1] transition-all duration-700 lg:py-2.5 lg:px-5 hover:p-2.5 hover:bg-[#6a2f9d]'>Entrar em Contato</a>
                    </section>
                </article>

                <div className='perfil flex flex-col gap-4 sm:h-full sm:justify-between sm:w-52.5 md:w-auto'>
                    {/* Minha Foto */}
                    <img src={Foto} alt="Imagem de perfil" className='fotoPerfil size-52.5 rounded-full m-auto border-black border-2 object-cover duration-700 transition-all sm:size-45 sm:block md:size-55 md:hover:size-60'/>

                    <div id='plataformasDigitais' className='flex justify-center items-center gap-5'>
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
        </Fragment>
    )
}