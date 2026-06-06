import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home/index.jsx'

// Components
import { Header } from '../Components/index.js'
import { Footer } from '@/Components'

export default function RoutesPage(){

    return(
        <BrowserRouter>
            <Header/>

            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}