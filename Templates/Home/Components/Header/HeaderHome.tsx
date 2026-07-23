'use client';

import { env, MENU_OPTIONS } from "@/Config";
import { ButtonRedirect } from "./ButtonRedirect";
import { MenuSidebar } from "./MenuSidebar";

export const HeaderHome = () => {

    const scrollSection = (name: string) => {
        console.log('oi')
    }

    return (
        <header className="bg-neutral/80 flex justify-between px-10 items-center min-h-20 w-full text-default-text sticky top-0 z-60 backdrop-blur-sm shadow-[0_20px_40px_-15px_rgba(96,99,238,0.1)]">

            <h1 className="text-2xl tracking-tighter font-spaceGrotesk font-bold">{env.PERSONAL_NAME}</h1>

            <nav>
                <MenuSidebar scrollSection={scrollSection}/>

                <menu className="hidden gap-5 text-sm sm:text-md lg:text-lg sm:flex">
                    {MENU_OPTIONS.map((option) => (
                        <button className="cursor-pointer" key={option.id} onClick={() => scrollSection(option.name)}>{option.name}</button>
                    ))}
                </menu>
            </nav>

            <ButtonRedirect className="hidden md:flex" />
        </header>
    )
}