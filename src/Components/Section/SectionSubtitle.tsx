import type { DetailedHTMLProps, PropsWithChildren } from "react"
import { cn } from "@/utils";

type SectionSubtitleProps = DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> & PropsWithChildren<{
    className?: string;
}>

export const SectionSubtitle = ({ children, className }: SectionSubtitleProps) => (
    <h2 className={cn("text-white text-2xl md:text-5xl", className)}>{children}</h2>
)