import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'


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
    return(
        <div id='container_menu_desktop'>
            <menu id='menu_desktop'>
                <button>Home</button>
                <button>Sobre</button>
                <button>Projetos</button>
                <button>Contatos</button>
            </menu>
       </div>
    )
}