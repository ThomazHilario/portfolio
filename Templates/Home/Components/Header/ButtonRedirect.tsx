import { ComponentProps } from "react";
import { Button } from "@/Components/UI";
import { cn } from "@/Utils";

type ButtonRedirectProps = ComponentProps<'button'>

export const ButtonRedirect = ({ className }: ButtonRedirectProps) => (
    <Button className={cn(className)} variant="primary">
        <a 
        href='https://api.whatsapp.com/send?phone=5585988274949' 
        target="_blank" 
        rel="noreferrer">
            Vamos Conversar
        </a>
    </Button>
)