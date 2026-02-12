import type { PropsWithChildren } from "react";
import "./container.css"

type ContainerProps = PropsWithChildren & {
    dataAttribute?: string;
}

export const Container = ({children, dataAttribute}:ContainerProps) => {
    return (
        <section id="container" data-container={dataAttribute}>
            {children}
        </section>
    )
}