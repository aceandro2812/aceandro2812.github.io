import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface ScrambleTextProps {
    text: string;
    className?: string;
}

const chars = "!@#$%^&*()_+{}[]|;:<>?/~0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const ScrambleText: React.FC<ScrambleTextProps> = ({ text, className = "" }) => {
    const [displayText, setDisplayText] = useState("");
    const [isScrambling, setIsScrambling] = useState(true);

    useEffect(() => {
        let iteration = 0;
        let maxIterations = 10;

        const interval = setInterval(() => {
            setDisplayText((prev) =>
                text
                    .split("")
                    .map((char, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(interval);
                setIsScrambling(false);
            }

            iteration += 1 / 3;
        }, 30);

        return () => clearInterval(interval);
    }, [text]);

    return (
        <motion.span
            className={`font-display inline-block ${className}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {displayText}
        </motion.span>
    );
};
