import type { ComponentProps, DetailedHTMLProps, PropsWithChildren } from "react"
import { cn } from "@/Utils";

type SectionHeaderProps = ComponentProps<'div'>

export const SectionHeader = ({ children, className, ...props }: SectionHeaderProps) => (
    <div 
        className={cn("flex flex-col gap-5 font-spaceGrotesk", className)} 
        card-slot="section-header"
        {...props}
    >
        {children}
    </div>
)