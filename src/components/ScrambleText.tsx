import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';

interface ScrambleTextProps {
  text: string;
  className?: string;
  /** Milliseconds between scramble frames. */
  speed?: number;
  /** Delay before the effect starts. */
  delay?: number;
}

const CHARS = '!<>-_\\/[]{}—=+*^?#01';

/**
 * Decodes text with a scramble effect.
 *
 * Two fixes over the original: it renders the final string immediately for
 * reduced-motion users (and never animates), and it only starts once the
 * element is on screen so off-screen headings don't burn frames. The real text
 * is always exposed to assistive tech via aria-label.
 */
export const ScrambleText: React.FC<ScrambleTextProps> = ({
  text,
  className = '',
  speed = 28,
  delay = 0,
}) => {
  const reducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(reducedMotion ? text : '');
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      setDisplay(text);
      return;
    }
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setStarted(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion, text]);

  useEffect(() => {
    if (reducedMotion || !started) return;

    let frame = 0;
    let interval: ReturnType<typeof setInterval>;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setDisplay(
          text
            .split('')
            .map((char, index) => {
              if (char === ' ') return ' ';
              if (index < frame) return text[index];
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join('')
        );

        if (frame >= text.length) clearInterval(interval);
        frame += 1 / 2;
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, delay, reducedMotion, started]);

  return (
    <span ref={ref} className={cn('inline-block', className)} aria-label={text}>
      <span aria-hidden="true">{display || '\u00A0'}</span>
    </span>
  );
};

export default ScrambleText;
