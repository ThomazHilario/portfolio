import { Root, type DialogProps as DialogTypes } from '@radix-ui/react-dialog'
import type { PropsWithChildren } from 'react'

type DialogProps = PropsWithChildren<DialogTypes>

export const Dialog = ({ children, ...props }: DialogProps) => (
    <Root {...props}>
        {children}
    </Root>
)