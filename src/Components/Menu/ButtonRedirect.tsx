import { cn } from "../../utils";

type ButtonRedirectProps = { className?: string }

export const ButtonRedirect = ({ className }: ButtonRedirectProps) => (
    <a 
    className={cn("flex items-center justify-center bg-[#a3a6ff] text-neutral h-9 w-auto max-w-40 px-2 rounded-lg cursor-pointer", className)}
    href='https://api.whatsapp.com/send?phone=5585988274949' 
    target="_blank" 
    rel="noreferrer">
        Vamos Conversar
    </a>
)