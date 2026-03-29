// Icons
import { FiMenu, FiX } from "react-icons/fi";

import { VisuallyHidden } from "@radix-ui/themes";
import { Button, Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '../../Commons';
import { ButtonRedirect } from '../ButtonRedirect';

import env from "../../../utils/env.js";
import { useDisclosure } from "../../../utils";
import { MENU_OPTIONS } from "../Config";

// type
type MenuMobileProps = {
    scrollSection: (text: string) => void;
}

export const MenuSidebar = ({scrollSection}: MenuMobileProps) => {
    const { isOpen, setOpen, onClose } = useDisclosure();

    const handleScrollSection = (callback: () => void) => {
        onClose();
        callback();
    }

    return(
        <Drawer direction='left' open={isOpen} onOpenChange={setOpen}>
            <DrawerTrigger className='sm:hidden cursor-pointer' aria-label="Abrir menu de navegação">
                <FiMenu color="gray" size={30} />
            </DrawerTrigger>

            <DrawerContent className='flex flex-col items-center bg-neutral/95 text-default-text font-spaceGrotesk'>

                <VisuallyHidden>
                    <DrawerDescription>
                        Componente responsavel para visualizar um menu sidebar para o usuário.
                    </DrawerDescription>
                </VisuallyHidden>

                <DrawerHeader className='flex flex-row pb-4 gap-14 border-b border-primary/10'>
                    <DrawerTitle className="text-xl tracking-tighter">{env.PERSONAL_NAME}</DrawerTitle>

                    <DrawerClose className='cursor-pointer' aria-label="Fechar menu de navegação">
                        <FiX size={20} color='gray'/>
                    </DrawerClose>
                </DrawerHeader>

                <menu className='mt-8 flex flex-col items-start gap-5'>
                    {MENU_OPTIONS.map((option) => (
                        <Button 
                            key={option.id} 
                            className="gap-3"
                            variant="sidebarItems"
                            onClick={() => handleScrollSection(() => scrollSection(option.name))}     
                            aria-label={`Navegar para seção ${option.name}`}
                        >
                            {option.icon}
                            {option.name}
                        </Button>
                    ))}
                </menu>

                <DrawerFooter>
                    <ButtonRedirect className='flex md:flex mt-auto'/>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}