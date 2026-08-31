import React, { useEffect, useRef, useState } from 'react';
import { useHasFinePointer, useReducedMotion } from '@/hooks/useReducedMotion';

/**
 * Reticle-style custom cursor.
 *
 * Deliberately opt-out-able: it is skipped entirely on touch devices and for
 * users who prefer reduced motion. The previous version applied
 * `cursor: none` to every element globally, which left touch and keyboard
 * users with no visible pointer at all.
 *
 * Uses direct style writes inside rAF rather than React state so cursor motion
 * never triggers a re-render of the tree.
 */
export const CustomCursor: React.FC = () => {
  const finePointer = useHasFinePointer();
  const reducedMotion = useReducedMotion();
  const enabled = finePointer && !reducedMotion;

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [interactive, setInteractive] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (enabled) root.classList.add('custom-cursor-active');
    else root.classList.remove('custom-cursor-active');
    return () => root.classList.remove('custom-cursor-active');
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { ...target };
    let raf = 0;

    const onMove = (event: MouseEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
      setVisible(true);

      const el = event.target as HTMLElement | null;
      setInteractive(
        !!el?.closest('a, button, [role="button"], input, textarea, select, [data-cursor="interactive"]')
      );
    };

    const onLeave = () => setVisible(false);

    const tick = () => {
      // Ring trails the dot with simple easing — cheap and smooth.
      ring.x += (target.x - ring.x) * 0.18;
      ring.y += (target.y - ring.y) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.x - 3}px, ${target.y - 3}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x - 18}px, ${ring.y - 18}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[9999]" style={{ opacity: visible ? 1 : 0 }}>
      <div
        ref={dotRef}
        className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-primary-green shadow-glow-sm"
      />
      <div
        ref={ringRef}
        className="absolute left-0 top-0 h-9 w-9 rounded-full border border-primary-green/60 transition-[width,height,opacity,border-color] duration-200"
        style={{
          borderStyle: interactive ? 'solid' : 'dashed',
          opacity: interactive ? 1 : 0.55,
          borderColor: interactive ? 'hsl(var(--brand))' : 'hsl(var(--brand) / 0.5)',
        }}
      />
    </div>
  );
};

export default CustomCursor;
