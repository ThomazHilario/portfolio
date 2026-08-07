import type { ComponentProps, PropsWithChildren } from "react"
import { tv, type VariantProps } from "tailwind-variants"

const TextVariants = tv({
    base: 'font-medium break-all md:break-normal',
    variants: {
        variant: {
            primary: 'text-white',
            secondary: 'font-lighter text-neutral-300/70 p-2.5 text-justify',
        },
        size: {
            md:'text-[0.9rem] lg:text-[1.375rem]'
        }
    },
    defaultVariants: {
        variant: 'primary',
        size: 'md'
    }
})

type TextProps = PropsWithChildren<ComponentProps<'p'>> & VariantProps<typeof TextVariants>


export const Text = ({ children, variant, size, className }: TextProps) => (
    <p className={TextVariants({ className, variant, size })}>{children}</p>
)