// import icons
import { SiGithub, SiLinkedin } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";

// import css
import './contatos.css'

export const Contatos = () => {
    return(
        <section id="container_Contatos">

            {/* Titulo */}  
            <h1 className='titulo'>Contatos</h1>
            
            <ul id='contatos'>
                <li>
                    <a className='linkSocial' href='mailto:thomazhilario5@gmail.com' target='blank'>
                        <HiOutlineMail color='blueviolet' size={50}/>
                        <h1>E-mail</h1>
                        <p>thomazhilario5@gmail.com</p>
                    </a>
                </li>              

               <li>
                    <a className='linkSocial' href='https://api.whatsapp.com/send?phone=5585988274949' target='blank'>
                        <FiPhone color='blueviolet' size={50}/>
                        <h1>Telefone</h1>
                        <p>(85) 98827-4949</p>
                    </a>
               </li>

                <li>
                    <a className='linkSocial' href='https://www.linkedin.com/in/thomazalvesdev/' target='blank'>
                        <SiLinkedin size={50} color='blueviolet'/>
                        <h1>Linkedin</h1>
                        <p>@thomazalvesdev</p>
                    </a>
                </li>

                <li>
                    <a className='linkSocial' href='https://github.com/ThomazHilario' target='blank'>
                        <SiGithub size={50} color='blueviolet'/>
                        <h1>GitHub</h1>
                        <p>@ThomazHilario</p>
                    </a>
                </li>
            </ul>
        </section>
    )
}