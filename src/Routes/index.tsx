import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home/index.jsx'

// Components
import { Menu } from '../Components/index.js'

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