import { Text } from '@/Components'
import { SlideIn } from '@/Components/Transitions'

import { Profile } from './Profile'

export const About = () => {
    return(
        <SlideIn initial='slideLeft'>  
            <Profile />     

            <section className='p-1.5 flex flex-col-reverse justify-center items-center gap-20 lg:h-62.5'>
                <article>
                    <Text variant='secondary'>👋 Hello World! Thomaz. Prazer!</Text>
                    <Text variant='secondary'>🎓 Universitário de Desenvolvimento Full-Stack pelo Sistema Estacio.</Text>
                    <Text variant='secondary'>💡 Interesse em Desenvolvimento Front-End com Javascript, TypeScript, React, Tailwind...</Text>
                    <Text variant='secondary'>🚀 Sempre aprendendo...</Text> 
                </article>    
            </section>
        </SlideIn> 
    )
}