import type { ComponentProps } from "react"
import { cn } from "@/Utils";

type SectionProps = ComponentProps<'div'>

export const Section = ({ children, className, ...props }: SectionProps) => (
    <div 
        className={cn("min-h-20 px-4 md:px-12 flex flex-col gap-20", className)} 
        data-slot="section"
        {...props}
    >
        {children}
    </div>
)