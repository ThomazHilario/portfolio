// Radix-UI
import * as Dialog from '@radix-ui/react-dialog'
import { VisuallyHidden } from '@radix-ui/themes';

// Icons
import { FiMenu, FiX } from "react-icons/fi";

// Css
import './menu-mobile.css'
import { MENU_OPTIONS } from '../Menu.js';

// type
type MenuMobileProps = {
    scrollSection: (text: string) => void;
}

export const MenuMobile = ({scrollSection}: MenuMobileProps) => {
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
                        {MENU_OPTIONS.map((option) => (
                            <Dialog.Close key={option.id} onClick={() => scrollSection(option.name)}>
                                {option.name}
                            </Dialog.Close>
                        ))}
                    </menu>
                </Dialog.Content>
            
        </Dialog.Root>
    )
}