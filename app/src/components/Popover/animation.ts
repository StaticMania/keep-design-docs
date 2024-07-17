import { Variants } from 'framer-motion'

export interface PopoverIVariants {
  left: Variants
  right: Variants
  top: Variants
  bottom: Variants
}

const popoverVariants: PopoverIVariants = {
  top: {
    initial: {
      opacity: 0,
      y: '20px',
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'anticipate',
      },
    },
    exit: {
      opacity: 0,
      y: '20px',
    },
  },
  bottom: {
    initial: {
      opacity: 0,
      y: '20px',
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'anticipate',
      },
    },
    exit: {
      opacity: 0,
      y: '20px',
    },
  },
  left: {
    initial: {
      opacity: 0,
      x: '-20px',
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'anticipate',
      },
    },
    exit: {
      opacity: 0,
      x: '-20px',
    },
  },
  right: {
    initial: {
      opacity: 0,
      x: '20px',
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'anticipate',
      },
    },
    exit: {
      opacity: 0,
      x: '20px',
    },
  },
}

export { popoverVariants }
