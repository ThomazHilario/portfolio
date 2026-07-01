import * as Dialog from '@radix-ui/react-dialog'
import { type PropsWithChildren } from 'react'
import { DialogOverlay } from './DialogOverlay'
import { cn } from 'tailwind-variants'

type DialogContentProps = PropsWithChildren<Dialog.DialogContentProps>

export const DialogContent = ({ children, className, ...props }: DialogContentProps) => (
    <Dialog.Portal>
        <DialogOverlay />
        <Dialog.DialogContent
            className={cn('fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-70', className)}
            data-slot='dialog-content' 
            {...props}
        >
            {children}
        </Dialog.DialogContent>
    </Dialog.Portal>
)
