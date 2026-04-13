"use client";

import { motion, useMotionTemplate, useSpring } from "framer-motion";
import { MouseEvent } from "react";
import { ReactNode } from "react";

export default function FlashlightCard({
    children,
    className,
    variants,
}: {
    children: ReactNode;
    className?: string;
    variants?: any;
}) {
    const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            variants={variants}
            onMouseMove={handleMouseMove}
            className={`group relative overflow-hidden ${className}`}
        >
            {/* Spotlight that follows cursor */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            400px circle at ${mouseX}px ${mouseY}px,
                            rgba(30,111,217,0.15),
                            transparent 80%
                        )
                    `,
                }}
            />
            {children}
        </motion.div>
    );
}
