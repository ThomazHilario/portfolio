import type { ComponentProps, DetailedHTMLProps, PropsWithChildren } from "react"
import { Title } from "../Title";

type SectionTitleProps = ComponentProps<typeof Title>

export const SectionTitle = ({ children, className }: SectionTitleProps) => (
    <Title as="h1" size="xs" variant="secondary" className={className}>{children}</Title>
)