import Image from 'next/image';
import Link from 'next/link';

import { GithubIcon, LinkedinIcon } from '@/Components/Icons';

import { env } from '@/Config';

export const ProfilePortfolioImage = () => (
  <div className="perfil flex flex-col gap-4 sm:h-full sm:justify-between sm:w-52.5 md:w-auto">
    <Image
      className="fotoPerfil size-52.5 rounded-full m-auto border-black border-2 object-cover duration-700 transition-all sm:size-45 sm:block md:size-55 md:hover:size-60"
      loading="eager"
      src="/assets/foto.png"
      alt="Imagem de perfil"
      width={210}
      height={210}
    />

    <div className="flex justify-center items-center gap-5">
      <Link
        href={env.GITHUB_URL}
        target="blank"
        aria-label="Botão que redireciona o usuário para o github"
      >
        <GithubIcon className="text-primary size-5" />
      </Link>
      <Link
        href={env.LINKEDIN_URL}
        target="blank"
        aria-label="Botão que redireciona o usuário para o linkedin"
      >
        <LinkedinIcon className="text-primary size-5" />
      </Link>
    </div>
  </div>
);
