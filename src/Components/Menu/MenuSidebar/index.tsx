// Icons
import { FiMenu, FiX } from "react-icons/fi";

import { MENU_OPTIONS } from '../Menu.js';
import { Drawer, DrawerClose, DrawerContent, DrawerPortal, DrawerTrigger } from '../../Commons/index.js';

import env from "../../../utils/env.js";
import { ButtonRedirect } from '../ButtonRedirect.js';

// type
type MenuMobileProps = {
    scrollSection: (text: string) => void;
}

export const MenuSidebar = ({scrollSection}: MenuMobileProps) => {
    return(
        <Drawer direction='left'>
            <DrawerTrigger className='sm:hidden cursor-pointer'>
                <FiMenu color="gray" size={30} />
            </DrawerTrigger>

            <DrawerPortal>
                <DrawerContent className='flex flex-col items-center bg-neutral/95 text-default-text font-spaceGrotesk'>

                    <div className='flex justify-between items-center pb-4 gap-14 border-b border-primary/10'>
                        <h1 className="text-xl tracking-tighter">{env.PERSONAL_NAME}</h1>

                        <DrawerClose className='cursor-pointer'>
                            <FiX size={20} color='gray'/>
                        </DrawerClose>
                    </div>


                    <menu className='mt-8 flex flex-col items-start gap-5'>
                        {MENU_OPTIONS.map((option) => (
                            <DrawerClose key={option.id} onClick={() => scrollSection(option.name)}>
                                {option.name}
                            </DrawerClose>
                        ))}
                    </menu>

                    <ButtonRedirect className='flex md:flex mt-auto'/>
                </DrawerContent>
            </DrawerPortal>
            
        </Drawer>
    )
}