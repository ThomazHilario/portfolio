import * as Dialog from '@radix-ui/react-dialog'
import { forwardRef, type PropsWithChildren } from 'react'
import { cn } from 'tailwind-variants'

type DialogOverlayProps = PropsWithChildren<Dialog.DialogOverlayProps>

export const DialogOverlay = forwardRef<HTMLDivElement, DialogOverlayProps>(({ className, ...props }, ref) => (
    <Dialog.DialogOverlay 
        ref={ref}
        className={cn('fixed inset-0 bg-black/50 data-[state=open]:animate-overlayShow duration-700 transition-all z-60', className)}
        data-slot='dialog-overlay'
        {...props}
    />
))