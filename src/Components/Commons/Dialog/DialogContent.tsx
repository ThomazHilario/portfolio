import * as Dialog from '@radix-ui/react-dialog'
import { forwardRef, type PropsWithChildren } from 'react'
import { DialogOverlay } from './DialogOverlay'
import { cn } from 'tailwind-variants'

type DialogContentProps = PropsWithChildren<Dialog.DialogContentProps>

export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(({ children, className, ...props }, ref) => (
    <Dialog.Portal>
        <DialogOverlay />
        <Dialog.DialogContent 
            ref={ref}
            className={cn('fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-70', className)}
            data-slot='dialog-content' 
            {...props}
        >
            {children}
        </Dialog.DialogContent>
    </Dialog.Portal>
))
