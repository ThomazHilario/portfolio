import type { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from "react"
import { cn } from "@/Utils";
import { tv } from "tailwind-variants";

const ButtonVariants = tv({
    base: 'flex items-center justify-center text-neutral cursor-pointer transition-colors duration-300',
    variants: {
        variant: {
            primary: 'bg-[#a3a6ff] h-9 w-auto max-w-40 rounded-lg px-2',
            secondary: 'bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded',
            danger: 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded',
            sidebarItem: 'bg-transparent text-neutral-300/90 min-w-48 hover:bg-[#494BD6]/10 justify-start border-l-3 border-transparent hover:border-violet-500 max-w-40 h-10 px-2 rounded-lg',
        },
    },
    defaultVariants: {
        variant: 'primary',
    }
})

type ButtonProps = ComponentsProps<'button'> & VariantProps<typeof ButtonVariants>

export const Button = ({ children, className, variant, type = "button", ...props }: ButtonProps) => {
    return (
        <button 
            className={ButtonVariants({ className, variant })} 
            type={type}
            {...props}
        >
            {children}
        </button>
    )
}