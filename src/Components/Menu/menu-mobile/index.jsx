// Radix-UI
import * as Dialog from '@radix-ui/react-dialog'
import { VisuallyHidden } from '@radix-ui/themes';

// Icons
import { FiMenu, FiX } from "react-icons/fi";

// Css
import './menu-mobile.css'

export const MenuMobile = ({scrollSection}) => {
    return(
        <Dialog.Root>
            <Dialog.Trigger id='icon__menu'>
                <FiMenu color="white" size={30}/>
            </Dialog.Trigger>

            
                <Dialog.Content id='content__menu__mobile'>

                    {/* Acessibilidade */}
                    <VisuallyHidden>
                        <Dialog.Title>
                            Menu Mobile
                        </Dialog.Title>

                        <Dialog.Description>
                            Menu para acessar os botões, que irão direcionar o usuário a sua respectiva seção do portfólio.
                        </Dialog.Description>
                    </VisuallyHidden>

                    {/* Close dialog */}
                    <Dialog.Close id='menu__mobile__close__dialog'>
                        <FiX size={30} color='white'/>
                    </Dialog.Close>


                    <menu>
                        <Dialog.Close onClick={(e) => scrollSection(e.target.textContent)}>
                            Sobre
                        </Dialog.Close>

                        <Dialog.Close onClick={(e) => scrollSection(e.target.textContent)}>
                            Habilidades
                        </Dialog.Close>

                        <Dialog.Close onClick={(e) => scrollSection(e.target.textContent)}>
                            Projetos
                        </Dialog.Close>

                        <Dialog.Close onClick={(e) => scrollSection(e.target.textContent)}>
                            Carreira
                        </Dialog.Close>
                        
                        <Dialog.Close onClick={(e) => scrollSection(e.target.textContent)}>
                            Contatos
                        </Dialog.Close>
                    </menu>
                </Dialog.Content>
            
        </Dialog.Root>
    )
}