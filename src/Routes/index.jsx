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

        if(window.innerWidth >= 1024){
            // Caso o texto do button seja Home
            if(text === 'Home'){ 
                gsap.to(window,{duration:1,scrollTo:0})
            }
    
            // Caso o texto do button seja Sobre
            if(text === 'Sobre'){
                gsap.to(window,{duration:1,scrollTo:200})
            }
    
            // Caso o texto do button seja Projetos
            if(text === 'Projetos'){
                gsap.to(window,{duration:1,scrollTo:1086})
            }
    
            // Caso o texto do button seja Contatos
            if(text === 'Contatos'){
                gsap.to(window,{duration:1,scrollTo:1508})    
            }
        }

    }
    return(
        <div id='container_menu_desktop'>
            <menu id='menu_desktop'>
                <button onClick={(e) => scrollSection(e.target.textContent)}>Home</button>
                <button onClick={(e) => scrollSection(e.target.textContent)}>Sobre</button>
                <button onClick={(e) => scrollSection(e.target.textContent)}>Projetos</button>
                <button onClick={(e) => scrollSection(e.target.textContent)}>Contatos</button>
            </menu>
       </div>
    )
}