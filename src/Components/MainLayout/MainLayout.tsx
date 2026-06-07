import { cn } from "@/utils"
import type { ComponentProps, PropsWithChildren } from "react"

type MainProps = PropsWithChildren<ComponentProps<'main'>>

export const MainLayout = ({ children, className, ...props }: MainProps) => (
    <main id="container_main" className={cn("bg-neutral min-h-screen flex flex-col justify-center overflow-hidden gap-24", className)} {...props}>
        {children}
    </main>
)