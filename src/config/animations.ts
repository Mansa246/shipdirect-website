import { Variants } from "framer-motion";

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1, y: 0,
        transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
    }
}

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
}

export const slideLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1, x: 0,
        transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
    }
}

export const slideRight: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1, x: 0,
        transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
    }
}

export const scaleUp: Variants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
        opacity: 1, scale: 1,
        transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }
    }
}

export const staggerContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
}
