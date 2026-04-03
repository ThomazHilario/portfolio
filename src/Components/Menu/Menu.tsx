// Importando biblioteca de animacao
import { gsap } from "gsap";
import ScrollToPlugin from 'gsap/ScrollToPlugin';

// Components
import { MenuSidebar } from "./MenuSidebar";
import { ButtonRedirect } from "./ButtonRedirect";

import env from "../../utils/env.js";
import { MENU_OPTIONS } from "./Config/options-menu.js";


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
            gsap.to(window,returnGsapProps(1, '.stacks', 100))
        }

        // Caso o texto do button seja Projetos
        if(text === 'Projetos'){
            gsap.to(window, returnGsapProps(1, '.projects', 100))
        }

        // Caso o texto do button seja Carreira
        if(text === 'Carreira'){
            gsap.to(window, returnGsapProps(1,'.carreira', 100))
        }

        // Caso o texto do button seja Contatos
        if(text === 'Contatos'){
            gsap.to(window, returnGsapProps(1, '.contatos', 100))
        }
    
        

    }

    return(
        <header className="bg-neutral/80 flex justify-between px-10 items-center min-h-20 w-full text-default-text fixed top-0 z-50 backdrop-blur-sm shadow-[0_20px_40px_-15px_rgba(96,99,238,0.1)] font-spaceGrotesk">

            <h1 className="text-2xl tracking-tighter font-spaceGrotesk font-bold">{env.PERSONAL_NAME}</h1>

            <nav>
                <MenuSidebar scrollSection={scrollSection}/>

                <menu className="hidden gap-5 text-sm sm:text-md lg:text-lg sm:flex">
                    {MENU_OPTIONS.map((option) => (
                        <button className="cursor-pointer" key={option.id} onClick={() => scrollSection(option.name)}>{option.name}</button>
                    ))}
                </menu>
            </nav>

            <ButtonRedirect className="hidden md:flex" />
        </header>
    )
}