// Importando biblioteca de animacao
import { gsap } from "gsap";
import ScrollToPlugin from 'gsap/ScrollToPlugin';

// Components
import { MenuMobile } from "./menu-mobile/index.js";

import env from "../../utils/env.js";
import { ButtonRedirect } from "./ButtonRedirect.js";

export const MENU_OPTIONS = [
    { id: "sobre-option", name: 'Sobre' },
    { id: "hability-option", name: 'Habilidades' },
    { id: "projects-options", name: 'Projetos' },
    { id: "carrer-optio", name: 'Carreira' },
    { id: "contacts-option", name: 'Contatos' },
]

export const Menu = () => {

    // Return Gsap Props
    function returnGsapProps(duration: number, sectionName: string, offsetY: number){
        return {
                duration, 
                scrollTo: {
                    y:sectionName, 
                    offsetY
                }
            }
    }

    // Scroll section
    function scrollSection(text: string){
        // Registrando plugin
        gsap.registerPlugin(ScrollToPlugin)
        
        // Caso o texto do button seja Sobre
        if(text === 'Sobre'){
            gsap.to(window,{duration:1,scrollTo:0})
        }
        
        // Casoo o texto do button seja habilidades
        if(text === 'Habilidades'){
            gsap.to(window,returnGsapProps(1, '#container_habilidade', 100))
        }

        // Caso o texto do button seja Projetos
        if(text === 'Projetos'){
            gsap.to(window, returnGsapProps(1, '#container_projetos', 100))
        }

        // Caso o texto do button seja Carreira
        if(text === 'Carreira'){
            gsap.to(window, returnGsapProps(1,'#container__carreira', 100))
        }

        // Caso o texto do button seja Contatos
        if(text === 'Contatos'){
            gsap.to(window, returnGsapProps(1, '#container_Contatos', 100))
        }
    
        

    }

    return(
        <header className="bg-neutral/80 flex justify-between px-10 items-center min-h-20 w-full text-[#dee5ff] fixed top-0 z-50 backdrop-blur-sm shadow-[0_20px_40px_-15px_rgba(96,99,238,0.1)]">

            <h1 className="text-sm sm:text-2xl tracking-tighter">{env.PERSONAL_NAME}</h1>

            <nav>

                {/* Menu Mobile */}
                <MenuMobile scrollSection={scrollSection}/>

                <menu className="flex gap-5 text-sm sm:text-md lg:text-lg">
                    {MENU_OPTIONS.map((option) => (
                        <button className="cursor-pointer" key={option.id} onClick={() => scrollSection(option.name)}>{option.name}</button>
                    ))}
                </menu>
            </nav>

            <ButtonRedirect className="hidden md:flex" />
        </header>
    )
}