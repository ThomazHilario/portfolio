import { cn } from "@/utils"
import type { ComponentProps, PropsWithChildren } from "react"

type FooterProps = PropsWithChildren<ComponentProps<'footer'>>

export const Footer = ({ children, className, ...props }: FooterProps) => (
    <footer className={cn("bg-neutral/80 flex justify-center px-10 items-center min-h-20 w-full text-default-text backdrop-blur-sm shadow-[0_20px_40px_10px_rgba(96,99,238,0.1)] font-spaceGrotesk", className)} {...props}>
        <p>Feito por Thomaz Alves</p>
    </footer>
)