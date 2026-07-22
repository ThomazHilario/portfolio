import { About, FooterHome, HeaderHome } from './Components'

export const HomePage = () => (
    <div className='min-h-screen'>
        <HeaderHome />
            <main className='min-h-screen'>
                <About />
            </main>
        <FooterHome />
    </div>
)