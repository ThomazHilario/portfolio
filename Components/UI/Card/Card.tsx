import type { ComponentProps } from 'react';
import { cn } from '@/Utils';

type Cardprops = ComponentProps<'div'>;

export const Card = ({ className, ...props }: Cardprops) => {
  return (
    <div
      data-slot="card"
      className={cn(
        'group/card flex min-h-30 min-w-30 flex-col gap-4 overflow-hidden rounded-xl bg-card py-4 text-sm text-card-foreground ring-foreground/10 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl font-spaceGrotesk cursor-pointer select-none',
        className,
      )}
      {...props}
    />
  );
};
