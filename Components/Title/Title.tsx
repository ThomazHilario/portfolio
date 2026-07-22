import { createElement, type ComponentProps, type PropsWithChildren } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const TitleVariants = tv({
    variants: {
        variant: {
            primary:'text-white',
            secondary: 'text-fuchsia-500'
        },
        size: {
            xs:'text-lg',
            sm: 'text-xl',
            md: 'text-2xl',
            lg: 'text-3xl',
        }
    },
    defaultVariants: {
        variant: 'primary',
        size: 'lg'
    }
})

type TagsTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type TitleProps = VariantProps<typeof TitleVariants> & ComponentProps<TagsTypes> & PropsWithChildren<{
    as: TagsTypes
}>

export const Title = ({ children, className, as = 'h1', size, variant, ...props }: TitleProps) => {
    return createElement(
        as,
        {
            className: TitleVariants({ className, size, variant }),
            ...props
        },
        children
    )
}