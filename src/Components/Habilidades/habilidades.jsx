// import icons
import { SiHtml5, SiCss3, SiTypescript,SiReact,SiGit, SiGithub, SiTailwindcss, SiJavascript } from "react-icons/si"

// import css
import './habilidades.css'

export const Habilidades = () => {
    return(
        <section id='container_habilidade'>

            {/* Titulo */}
            <h1 className='titulo'>Habilidades</h1>
            
            {/* Habilidades */}
            <div id='mySkills'>
                <SiHtml5 color='blueviolet' size={70}/>
                <SiCss3 color='blueviolet' size={70}/>
                <SiJavascript color='blueviolet' size={70}/>
                <SiTypescript color='blueviolet' size={70}/>
                <SiReact color='blueviolet' size={70}/>
                <SiTailwindcss color='blueviolet' size={70}/>
                <SiGit color='blueviolet' size={70}/>
                <SiGithub color='blueviolet' size={70}/>
            </div>
        </section>
    )
}