import { GithubIcon, LinkedinIcon } from '@/Components/Icons';

export const ProfilePortfolioImage = () => (
    <div className='perfil flex flex-col gap-4 sm:h-full sm:justify-between sm:w-52.5 md:w-auto'>
        <img 
            className='fotoPerfil size-52.5 rounded-full m-auto border-black border-2 object-cover duration-700 transition-all sm:size-45 sm:block md:size-55 md:hover:size-60'
            src='/assets/foto.png'
            alt="Imagem de perfil" 
        />

        <div className='flex justify-center items-center gap-5'>
            <a href='https://github.com/ThomazHilario' target='blank'><GithubIcon color='blueviolet'/></a>
            <a href='https://www.linkedin.com/in/thomazalvesdev/' target='blank'><LinkedinIcon color='blueviolet'/></a>
        </div>
    </div>
)