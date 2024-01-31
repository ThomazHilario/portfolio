import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'

// Importando biblioteca de animacao
import { gsap } from "gsap";
import ScrollToPlugin from 'gsap/ScrollToPlugin';

export default function RoutesPage(){

    return(
        <BrowserRouter>
            {/* header  */}
            <header>
                <MenuDesktop/>
            </header>

            {/* Renderização de rotas */}
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}


function MenuDesktop(){
    function scrollSection(text){
        // Registrando plugin
        gsap.registerPlugin(ScrollToPlugin)

        // Condição caso o tamanho da tela seja maior ou igual a 600px
        if(window.innerWidth >= 600){
            // Caso o texto do button seja Sobre
            if(text === 'Sobre'){
                gsap.to(window,{duration:1,scrollTo:0})
            }
            
            // Casoo o texto do button seja habilidades
            if(text === 'Habilidades'){
                gsap.to(window,{duration:1,scrollTo:550})
            }

            // Caso o texto do button seja Projetos
            if(text === 'Projetos'){
                gsap.to(window,{duration:1,scrollTo:1000})
            }
    
            // Caso o texto do button seja Contatos
            if(text === 'Contatos'){
                gsap.to(window,{duration:1,scrollTo:document.getElementById('container_Contatos')})  
            }
        }else{
             // Caso o texto do button seja Sobre
             if(text === 'Sobre'){
                gsap.to(window,{duration:1,scrollTo:0})
            }
            
            // Casoo o texto do button seja habilidades
            if(text === 'Habilidades'){
                gsap.to(window,{duration:1,scrollTo:950})
            }

            // Caso o texto do button seja Projetos
            if(text === 'Projetos'){
                gsap.to(window,{duration:1,scrollTo:1550})
            }
    
            // Caso o texto do button seja Contatos
            if(text === 'Contatos'){
                gsap.to(window,{duration:1,scrollTo:document.getElementById('container_Contatos')})  
            }
        }
        

    }
    return(
        <div id='container_menu_desktop'>
            <menu id='menu_desktop'>
                <button onClick={(e) => scrollSection(e.target.textContent)}>Sobre</button>
                <button onClick={(e) => scrollSection(e.target.textContent)}>Habilidades</button>
                <button onClick={(e) => scrollSection(e.target.textContent)}>Projetos</button>
                <button onClick={(e) => scrollSection(e.target.textContent)}>Contatos</button>
            </menu>
       </div>
    )
}