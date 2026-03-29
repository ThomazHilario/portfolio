import type { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from "react"
import { cn } from "../../../utils";

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> &PropsWithChildren<{
    className?: string;
    variant?: keyof typeof buttonVariants | undefined;
}>

const buttonVariants = {
    primary: "bg-[#a3a6ff] h-9 w-auto max-w-40 cursor-pointer",
    secondary: "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded",
    danger: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
    sidebarItems:"bg-transparent text-neutral-300/90 min-w-48 hover:bg-[#494BD6]/10 justify-start border-l-3 border-transparent hover:border-violet-500",
}

export const Button = ({ children, className, variant = undefined, type = "button", ...props }: ButtonProps) => {
    return (
    <button 
        className={cn(
            "flex items-center justify-center text-neutral rounded-lg px-2 h-9 cursor-pointer transition-colors duration-300", 
            className, 
            variant && buttonVariants[variant]
        )} 
        type={type}
        {...props}
    >
        {children}
    </button>
)
}