// Components
import { ScaleFadeIn } from '../index.js'

// import css
import './sobre.css'

export const SobreMim = () => {
    return(
        <ScaleFadeIn id='container_sobremim' position="right">
            
            {/* Titulo */}
            <h1 className='titulo'>🙂 Sobre mim</h1>
            

            <section id='container_texto'>
                {/* Texto de apresentacao */}
                <article>
                    <p className='texto-apresentacao'>👋 Hello World! Thomaz. Prazer!</p>
                    <p className='texto-apresentacao'>🎓 Universitário de Desenvolvimento Full-Stack pelo Sistema Estacio.</p>
                    <p className='texto-apresentacao'>💡 Interesse em Desenvolvimento Front-End com Javascript, TypeScript, React, Tailwind...</p>
                    <p className='texto-apresentacao'>🚀 Sempre aprendendo...</p>
                </article>
            </section>
        </ScaleFadeIn> 
    )
}