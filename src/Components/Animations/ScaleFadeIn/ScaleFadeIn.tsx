// Frame motion
import { motion, AnimatePresence } from "motion/react"
import type { ReactNode } from "react";

type ScaleFadeInProps = {
    id?: string;
    position: string;  
    children: ReactNode;
    className?:string;
}

export const ScaleFadeIn = ({position, children, id, className}: ScaleFadeInProps) => (
    <AnimatePresence>
        <motion.div 
            id={id}
            className={className}
            children={children}
            initial={{ opacity: 0, x: position === 'right' ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6 }} 
            viewport={{
                once: false, 
                margin: "-100px 0px",
            }}
            exit={{
                opacity: 0,
                x: position === "right" ? -80 : 80,
                scale: 0.95,
            }}
        />
    </AnimatePresence>
)