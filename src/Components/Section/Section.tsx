import type { DetailedHTMLProps, PropsWithChildren } from "react"
import { cn } from "../../utils";

type SectionProps = DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & PropsWithChildren<{
    className?: string;
}>

export const Section = ({ children, className, ...props }: SectionProps) => (
    <section className={cn("min-h-20 px-4 md:px-12 flex flex-col gap-24", className)} {...props}>
        {children}
    </section>
)