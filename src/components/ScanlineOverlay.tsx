import React from 'react';
import { motion } from 'framer-motion';

export const ScanlineOverlay: React.FC = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-[9000] overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-20"></div>
            <motion.div
                className="absolute w-full h-[15vh] bg-gradient-to-b from-transparent via-primary-green/5 to-transparent blur-sm"
                animate={{
                    top: ["-20%", "120%"]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
        </div>
    );
};
