import type { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from "react"
import { cn } from "../../../utils";

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> &PropsWithChildren<{
    className?: string;
    variant?: keyof typeof buttonVariants;
}>

const buttonVariants = {
    primary: "bg-[#a3a6ff] h-9 w-auto max-w-40 px-2 rounded-lg cursor-pointer",
    secondary: "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded",
    danger: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
}

export const Button = ({ children, className, variant = "primary" }: ButtonProps) => {
    return (
    <button className={cn("flex items-center justify-center text-neutral", className, buttonVariants[variant])}>
        {children}
    </button>
)
}