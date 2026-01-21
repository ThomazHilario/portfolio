// Frame motion
import { motion } from "motion/react"

export const ScaleFadeIn = ({position, amountValue, children, id}) => (
    <motion.section 
        id={id}
        children={children}
        initial={{ opacity: 0, x: position === 'right' ? -80 : 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: amountValue || 0.25 }}
        transition={{ duration: 0.6 }} 
    />
)