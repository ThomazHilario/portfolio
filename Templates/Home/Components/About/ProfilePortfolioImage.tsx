import { GithubIcon, LinkedinIcon } from '@/Components/Icons';
import Image from 'next/image';

import { env } from '@/Config'

export const ProfilePortfolioImage = () => (
    <div className='perfil flex flex-col gap-4 sm:h-full sm:justify-between sm:w-52.5 md:w-auto'>
        <Image 
            className='fotoPerfil size-52.5 rounded-full m-auto border-black border-2 object-cover duration-700 transition-all sm:size-45 sm:block md:size-55 md:hover:size-60'
            loading='eager'
            src='/assets/foto.png'
            alt="Imagem de perfil"
            width={210} 
            height={210} 
        />

        <div className='flex justify-center items-center gap-5'>
            <a href={env.GITHUB_URL} target='blank'><GithubIcon className='text-primary size-5'/></a>
            <a href={env.LINKEDIN_URL} target='blank'><LinkedinIcon className='text-primary size-5'/></a>
        </div>
    </div>
)