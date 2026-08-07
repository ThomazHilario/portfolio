'use client';

import { Menu, X } from "lucide-react";

import { VisuallyHidden } from "@radix-ui/themes";
import { 
    Button, 
    Drawer, 
    DrawerClose, 
    DrawerContent, 
    DrawerDescription, 
    DrawerFooter, 
    DrawerHeader, 
    DrawerTitle,
    DrawerTrigger 
} from '@/Components/UI';
import { ButtonRedirect } from './ButtonRedirect';

import { env } from "@/Config";
import { useDisclosure } from "@/Utils";
import { MENU_OPTIONS } from "@/Config";

// type
type MenuMobileProps = {
    scrollSection: (sectioId: string) => void;
}

export const MenuSidebar = ({ scrollSection }: MenuMobileProps) => {
    const { isOpen, OnToggle, onClose } = useDisclosure();

    const handleScrollSection = (callback: () => void) => {
        onClose();
        callback();
    }

    return(
        <Drawer direction='left' open={isOpen} onOpenChange={OnToggle}>
            <DrawerTrigger 
                aria-label="Abrir menu de navegação" 
                className='sm:hidden cursor-pointer' 
                title="Botão para abrir menu de navegação"
            >
                <Menu color="gray" size={30} />
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
                        <X size={20} color='gray'/>
                    </DrawerClose>
                </DrawerHeader>

                <menu className='mt-8 flex flex-col items-start gap-5'>
                    {MENU_OPTIONS.map((option) => (
                        <Button 
                            key={option.id} 
                            className="gap-3"
                            variant="sidebarItem"
                            onClick={() => handleScrollSection(() => scrollSection(option.id))}     
                            aria-label={`Navegar para seção ${option.name}`}
                        >
                            {<option.icon size={20} color="gray" />}
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