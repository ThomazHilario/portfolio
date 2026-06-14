import { Title } from '../../Title';
import { SocialMedia } from '../SocialMedia';

import { ProfilePortfolioImage } from './ProfilePortfolioImage';

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

        <ProfilePortfolioImage />
    </section>
)