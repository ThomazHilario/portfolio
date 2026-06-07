import Foto from '../../assets/foto.png'

import { SiGithub, SiLinkedin } from "react-icons/si";

import { Title } from '../Title';
import { SocialMedia } from './SocialMedia';


export const Profile = () => (
    <section className='flex flex-col-reverse justify-center items-center gap-8 sm:flex-row sm:justify-around sm:h-67.5 sm:gap-5 md:justify-between md:px-25 mt-30'>
        <article className='flex flex-col justify-between text-justify h-full'>

            <section className='flex flex-col items-center px-1.5 mb-2.5 leading-6 sm:items-start sm:mt-10'>
                <Title as='h1' className='mb-5 text-center leading-9 sm:leading-12 sm:text-start text-white text-5xl'>
                    Thomaz
                    <br/>
                    Alves
                </Title>

                <Title as='h3' className='mb-3 text-md font-light text-neutral-300/70'>Front-End Developer</Title>
            </section>

            <SocialMedia />
        </article>

        <div className='perfil flex flex-col gap-4 sm:h-full sm:justify-between sm:w-52.5 md:w-auto'>
            <img src={Foto} alt="Imagem de perfil" className='fotoPerfil size-52.5 rounded-full m-auto border-black border-2 object-cover duration-700 transition-all sm:size-45 sm:block md:size-55 md:hover:size-60'/>

            <div className='flex justify-center items-center gap-5'>
                <a href='https://github.com/ThomazHilario' target='blank'><SiGithub size={25} color='blueviolet'/></a>
                <a href='https://www.linkedin.com/in/thomazalvesdev/' target='blank'><SiLinkedin size={25} color='blueviolet'/></a>
            </div>
        </div>
    </section>
)