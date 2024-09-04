import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'

// Components
import { Menu } from '../Components/Menu'

export default function RoutesPage(){

    return(
        <BrowserRouter>
            {/* header  */}
            <header>
                <Menu/>
            </header>

            {/* Renderização de rotas */}
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}