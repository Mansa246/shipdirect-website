"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";

export default function Magnetic({
    children,
    pull = 0.3,
}: {
    children: React.ReactElement;
    pull?: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        x.set(middleX * pull);
        y.set(middleY * pull);
    };

    const reset = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{ x: springX, y: springY }}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={reset}
            className="flex items-center justify-center w-fit h-fit"
            animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            {children}
        </motion.div>
    );
}
