import type { DetailedHTMLProps, PropsWithChildren } from "react"
import { cn } from "../../utils";

type SectionHeaderProps = DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & PropsWithChildren<{
    className?: string;
}>

export const SectionHeader = ({ children, className, ...props }: SectionHeaderProps) => (
    <section className={cn("flex flex-col gap-5", className)} {...props}>
        {children}
    </section>
)