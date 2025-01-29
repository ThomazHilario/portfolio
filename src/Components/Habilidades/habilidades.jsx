// import icons
import { SiHtml5, SiCss3, SiTypescript,SiReact,SiGit, SiGithub, SiTailwindcss, SiJavascript, SiJest, SiVitest } from "react-icons/si"

// import css
import './habilidades.css'

export const Habilidades = () => {

    const propsIcons = {
        color:'blueviolet',
        size:70
    }

    return(
        <section id='container_habilidade'>

            {/* Titulo */}
            <h1 className='titulo'>Habilidades</h1>
            
            {/* Seção de habilidades */}
            <section id='mySkills'>
                <SiHtml5 {...propsIcons} />
                <SiCss3 {...propsIcons} />
                <SiJavascript {...propsIcons} />
                <SiTypescript {...propsIcons} />
                <SiReact {...propsIcons}/>
                <SiTailwindcss {...propsIcons} />
                <SiJest {...propsIcons}/>
                <SiVitest {...propsIcons} />
                <SiGit {...propsIcons} />
                <SiGithub {...propsIcons} />
            </section>
        </section>
    )
}