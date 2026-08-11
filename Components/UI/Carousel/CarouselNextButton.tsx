'use client';

import type { ComponentProps } from 'react';

import { useCarouselContext } from './Carousel';
import { Button } from '../Button';

import { ChevronRight } from 'lucide-react';

import { cn } from '@/Utils';

type CarouselNextButtonProps = ComponentProps<'button'>;

export const CarouselNextButton = ({
  children = <ChevronRight color="white" />,
  className,
}: CarouselNextButtonProps) => {
  const { scrollNext, canScrollNext } = useCarouselContext();

  return (
    <Button
      className={cn(
        'lg:absolute bg-slate-800/70 rounded-full p-0 m-0 w-10 h-10 z-50 shrink-0 lg:right-1 lg:group-hover:flex lg:disabled:hidden',
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
    >
      {children}
    </Button>
  );
};
