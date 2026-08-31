import { useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';

const KONAMI = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

export interface EggState {
  matrixRain: boolean;
  toggleMatrixRain: () => void;
}

const STORAGE_KEY = 'portfolio-eggs-found';

export function getFoundEggs(): string[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]') as string[];
  } catch {
    return [];
  }
}

export function recordEgg(id: string, label: string) {
  const found = getFoundEggs();
  if (found.includes(id)) return false;
  found.push(id);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(found));
  } catch {
    /* non-essential */
  }
  toast.success(`🥚 Easter egg found: ${label}`, {
    description: `${found.length} of 5 discovered. Press ? for a hint.`,
  });
  return true;
}

/**
 * Hidden interactions. None of them gate real content — they reward curiosity
 * without punishing anyone who never finds them.
 *
 *   1. Konami code            → matrix rain mode
 *   2. Typing "sudo"          → fake root shell toast
 *   3. Console greeting       → recruiter/dev message + hiring hint
 *   4. Long-press the logo    → handled in the hero
 *   5. `?` key                → keyboard shortcut overview
 */
export function useEasterEggs(onOpenTerminal: () => void, onShowShortcuts: () => void) {
  const [matrixRain, setMatrixRain] = useState(false);
  const konamiIndex = useRef(0);
  const typed = useRef('');

  useEffect(() => {
    const root = document.documentElement;
    if (matrixRain) root.classList.add('matrix-mode');
    else root.classList.remove('matrix-mode');
  }, [matrixRain]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const typingInField =
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable);

      // Konami
      const expected = KONAMI[konamiIndex.current];
      if (event.key === expected || event.key.toLowerCase() === expected) {
        konamiIndex.current += 1;
        if (konamiIndex.current === KONAMI.length) {
          konamiIndex.current = 0;
          setMatrixRain((v) => {
            const next = !v;
            if (next) recordEgg('konami', 'Konami Code → Matrix Mode');
            else toast('Matrix mode disabled');
            return next;
          });
        }
      } else {
        konamiIndex.current = event.key === KONAMI[0] ? 1 : 0;
      }

      if (typingInField) return;

      // Buffered word triggers
      if (/^[a-z]$/i.test(event.key)) {
        typed.current = (typed.current + event.key.toLowerCase()).slice(-12);

        if (typed.current.endsWith('sudo')) {
          recordEgg('sudo', 'sudo');
          toast.error('Permission denied: nice try, agent.', {
            description: 'This incident has (not) been reported.',
          });
          typed.current = '';
        }
        if (typed.current.endsWith('hire')) {
          recordEgg('hire', 'The magic word');
          toast.success('Excellent choice.', {
            description: 'Head to /contact — Jatin replies within a day.',
          });
          typed.current = '';
        }
        if (typed.current.endsWith('root')) {
          recordEgg('terminal', 'Hidden terminal');
          onOpenTerminal();
          typed.current = '';
        }
      }

      if (event.key === '?' && !typingInField) {
        event.preventDefault();
        onShowShortcuts();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onOpenTerminal, onShowShortcuts]);

  return {
    matrixRain,
    toggleMatrixRain: () => setMatrixRain((v) => !v),
  };
}

/** Prints a styled greeting for anyone who opens devtools. */
export function printConsoleGreeting() {
  if (typeof window === 'undefined') return;
  const brand = 'color:#00FF41;font-family:monospace;';
  console.log(
    '%c ┌─────────────────────────────────────────────┐\n' +
      ' │  JATIN IYER — AI Solution Developer          │\n' +
      ' │  Agentic systems · RAG · Production ML       │\n' +
      ' └─────────────────────────────────────────────┘',
    `${brand}font-size:12px;`
  );
  console.log(
    '%cYou opened devtools. I like you already.',
    'color:#0DF0E3;font-family:monospace;font-size:13px;'
  );
  console.log(
    '%cThings to try: press ⌘K / Ctrl+K · type "root" · type "hire" · Konami code · press ?',
    'color:#6B7280;font-family:monospace;'
  );
  console.log(
    `%cHiring? → mailto:jatin096@gmail.com`,
    'color:#00FF41;font-family:monospace;font-weight:bold;'
  );

}
