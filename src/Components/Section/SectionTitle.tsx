import type { DetailedHTMLProps, PropsWithChildren } from "react"
import { Title } from "../Title";

type SectionTitleProps = DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> & PropsWithChildren<{
    className?: string;
}>

export const SectionTitle = ({ children, className }: SectionTitleProps) => (
    <Title as="h1" size="xs" variant="secondary" className={className}>{children}</Title>
)