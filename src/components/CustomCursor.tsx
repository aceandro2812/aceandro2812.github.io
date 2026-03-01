import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-primary-green rounded-full pointer-events-none z-[9999]"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                }}
                transition={{ type: "spring", stiffness: 1000, damping: 50, mass: 0.1 }}
                style={{
                    boxShadow: "0 0 10px #00FF41, 0 0 20px #00FF41"
                }}
            />
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border-2 border-dashed border-primary-green/50 rounded-full pointer-events-none z-[9998]"
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                    rotate: 360
                }}
                transition={{
                    x: { type: "spring", stiffness: 500, damping: 28 },
                    y: { type: "spring", stiffness: 500, damping: 28 },
                    rotate: { duration: 5, repeat: Infinity, ease: "linear" }
                }}
            />
        </>
    );
};
