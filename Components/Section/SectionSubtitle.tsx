import type { ComponentProps, DetailedHTMLProps, PropsWithChildren } from "react"
import { Title } from "../Title";

type SectionSubtitleProps = ComponentProps<typeof Title>

export const SectionSubtitle = ({ children, className }: SectionSubtitleProps) => (
    <Title as="h1" size="xs" variant="secondary" className={className}>{children}</Title>
)