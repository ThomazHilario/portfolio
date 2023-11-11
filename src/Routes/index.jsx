import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from '../Pages/Home'

export default function RoutesPage(){
    // Função do menu
    function menuzin(){
        const menu = document.querySelector('#menu_mobile')

        if(window.outerWidth < 481){
            if(menu.style.display === 'block'){
                menu.style.display = 'none'
            } else{
                menu.style.display = 'block'
            }
        }
    }

    return(
        <BrowserRouter>
        {/* header  */}
            <header>
                <h1>Thomaz</h1>

                <MenuDesktop/>
                <i class="bi bi-list" onClick={menuzin}></i>
            </header>

            {/* menu mobile */}
            <MenuMobile/>

            {/* Renderização de rotas */}
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}


function MenuMobile(){
    return(
        <menu id='menu_mobile'>
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/projetos">Projetos</Link>
            <Link to="/contatos">Contatos</Link>
        </menu>
    )
}

function MenuDesktop(){
    return(
        <div id='container_menu_desktop'>
            <menu id='menu_desktop'>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/projetos">Projetos</Link>
                <Link to="/contatos">Contatos</Link>
            </menu>
       </div>
    )
}