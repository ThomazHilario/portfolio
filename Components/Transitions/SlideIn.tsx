import { AnimatePresence, Variants } from 'motion/react';
import * as motion from 'motion/react-client';

import { ComponentProps } from 'react';

const slideInVariants: Variants = {
  slideLeft: {
    opacity: 0,
    x: 80,
  },
  slideRight: {
    opacity: 0,
    x: -80,
  },
};

type SlideInProps = ComponentProps<typeof motion.div>;

export const SlideIn = ({ children, initial, ...props }: SlideInProps) => (
  <AnimatePresence>
    <motion.div
      variants={slideInVariants}
      children={children}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{
        once: false,
        margin: '-100px 0px',
      }}
      exit={{
        scale: 0.95,
      }}
      {...props}
    />
  </AnimatePresence>
);
