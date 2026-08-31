import React from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/**
 * CRT scanline + sweep atmosphere.
 *
 * Toned down from the original (which ran a full-viewport blurred gradient on
 * an infinite loop over every page) and disabled entirely for reduced-motion
 * users. The static scanline texture is kept because it carries the theme
 * without moving.
 */
export const ScanlineOverlay: React.FC = () => {
  const reduced = useReducedMotion();

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.28)_50%)] bg-[length:100%_4px] opacity-[0.12]" />
      {!reduced && (
        <div className="absolute inset-x-0 top-0 h-[18vh] animate-sweep bg-gradient-to-b from-transparent via-primary-green/[0.04] to-transparent" />
      )}
      {/* Vignette keeps focus on the centre of the page. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.55)_100%)]" />
    </div>
  );
};

export default ScanlineOverlay;
