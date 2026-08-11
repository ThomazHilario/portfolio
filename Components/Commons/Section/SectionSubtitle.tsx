import type { ComponentProps } from 'react';
import { Title } from '../Title';

type SectionSubtitleProps = ComponentProps<typeof Title>;

export const SectionSubtitle = ({
  children,
  className,
}: SectionSubtitleProps) => (
  <Title as="h1" size="xl" variant="primary" className={className}>
    {children}
  </Title>
);
