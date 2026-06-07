import * as Dialog from '@radix-ui/react-dialog'
import type { PropsWithChildren } from 'react'

import { cn } from 'tailwind-variants'

type DialogTriggerProps = PropsWithChildren<Dialog.DialogTriggerProps>

export const DialogTrigger = ({ children, className, ...props }: DialogTriggerProps) => (
    <Dialog.DialogTrigger 
        className={cn(className)}
        data-slot="dialog-trigger"
        {...props}
    >
        {children}
    </Dialog.DialogTrigger>
)
