// Components
import { ScaleFadeIn, Title } from '../index'

export const SobreMim = () => {
    return(
        <ScaleFadeIn position="right">
            
            {/* Titulo */}
            <Title>🙂 Sobre mim</Title>
            

            <section className='p-1.5 flex flex-col-reverse justify-center items-center gap-10 lg:h-62.5'>
                <article>
                    <p className='p-2.5 text-justify font-lighter text-[#f0f0f0b6] text-[0.9rem] lg:text-[1.375rem]'>👋 Hello World! Thomaz. Prazer!</p>
                    <p className='p-2.5 text-justify font-lighter text-[#f0f0f0b6] text-[0.9rem] lg:text-[1.375rem]'>🎓 Universitário de Desenvolvimento Full-Stack pelo Sistema Estacio.</p>
                    <p className='p-2.5 text-justify font-lighter text-[#f0f0f0b6] text-[0.9rem] lg:text-[1.375rem]'>💡 Interesse em Desenvolvimento Front-End com Javascript, TypeScript, React, Tailwind...</p>
                    <p className='p-2.5 text-justify font-lighter text-[#f0f0f0b6] text-[0.9rem] lg:text-[1.375rem]'>🚀 Sempre aprendendo...</p>
                </article>
            </section>
        </ScaleFadeIn> 
    )
}