import { ScaleFadeIn, Text } from '../index'
import { Profile } from './Profile'

export const SobreMim = () => {
    return(
        <ScaleFadeIn position="right" className='space-y-15'>  
            <Profile />     

            <section className='p-1.5 flex flex-col-reverse justify-center items-center gap-20 lg:h-62.5'>
                <article>
                    <Text variant='secondary'>👋 Hello World! Thomaz. Prazer!</Text>
                    <Text variant='secondary'>🎓 Universitário de Desenvolvimento Full-Stack pelo Sistema Estacio.</Text>
                    <Text variant='secondary'>💡 Interesse em Desenvolvimento Front-End com Javascript, TypeScript, React, Tailwind...</Text>
                    <Text variant='secondary'>🚀 Sempre aprendendo...</Text> 
                </article>    
            </section>
        </ScaleFadeIn> 
    )
}