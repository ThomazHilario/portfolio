import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import iconLikedin from '../icons/icons8-linkedin-48.png'
import iconGithub from '../icons/icons8-github-48.png'
import iconInstagram from '../icons/icons8-instagram-48.png'
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
                <div id='sociais'>
                    <a href=''><img src={iconLikedin} alt="icon" className='icons' /></a>
                    <a href=''><img src={iconGithub} alt="icon" className='icons' /></a>
                    <a href=''><img src={iconInstagram} alt="icon" className='icons'  /></a>
                </div>

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
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/projetos">Projetos</Link>
                <Link to="/contatos">Contatos</Link>
            </menu>
       </div>
    )
}