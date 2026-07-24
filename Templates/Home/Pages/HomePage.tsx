import { About, Carrer, Contacts, FooterHome, HeaderHome, Projects, Skills } from '../Components'

export const HomePage = () => (
    <div className='min-h-screen space-y-10'>
        <HeaderHome />
            <main className='min-h-screen space-y-10'>
                <About />

                <Skills />

                <Projects />

                <Carrer />

                <Contacts />
            </main>
        <FooterHome />
    </div>
)