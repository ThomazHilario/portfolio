import type { DetailedHTMLProps, PropsWithChildren } from "react"
import { cn } from "@/utils";

type SectionTitleProps = DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> & PropsWithChildren<{
    className?: string;
}>

export const SectionTitle = ({ children, className }: SectionTitleProps) => (
    <h1 className={cn("text-fuchsia-500", className)}>{children}</h1>
)