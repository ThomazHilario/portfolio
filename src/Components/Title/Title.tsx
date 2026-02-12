import type { ReactNode } from "react";

// Interface
type TitleProps = {
    children: ReactNode;
}

// Css
import './title.css'

export const Title = ({ children }: TitleProps) => {
    return <h1 className="titulo">{children}</h1>
}