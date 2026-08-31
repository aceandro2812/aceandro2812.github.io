import { X } from 'lucide-react';
import { getFoundEggs } from './easterEggs';

const SHORTCUTS = [
  { keys: ['⌘', 'K'], alt: ['Ctrl', 'K'], label: 'Open the command palette' },
  { keys: ['?'], label: 'Show this panel' },
  { keys: ['Esc'], label: 'Close any overlay' },
  { keys: ['↑', '↓'], label: 'Move through palette results' },
  { keys: ['↵'], label: 'Run the selected item' },
];

const HINTS = [
  'There is a classic cheat code from the 1980s. Arrows, then two letters.',
  'Type a four-letter word for superuser access. It will refuse you.',
  'Type the word for "give someone a job" and see what happens.',
  'Type the name of the topmost Unix user to open a hidden shell.',
  'Open your browser devtools console. Someone left a note.',
];

const ShortcutsDialog = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  if (!open) return null;
  const found = getFoundEggs();

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Keyboard shortcuts"
      className="fixed inset-0 z-[125] flex items-center justify-center p-4"
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={onClose} />
      <div className="relative max-h-[80dvh] w-full max-w-md animate-pop-in overflow-y-auto border border-primary-green/40 bg-surface/95 p-5 shadow-glow backdrop-blur-xl">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h2 className="font-display text-fluid-lg font-bold uppercase tracking-wide text-text-base">
              Keyboard shortcuts
            </h2>
            <p className="mt-1 text-fluid-xs text-text-muted">
              This site is built to be driven without a mouse.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="grid h-8 w-8 shrink-0 place-items-center border border-primary-green/25 text-text-muted transition-colors hover:text-funky-accent"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <ul className="space-y-1.5">
          {SHORTCUTS.map((s) => (
            <li
              key={s.label}
              className="flex items-center justify-between gap-4 border border-primary-green/10 bg-black/30 px-3 py-2"
            >
              <span className="text-fluid-xs text-text-muted">{s.label}</span>
              <span className="flex shrink-0 gap-1">
                {s.keys.map((k) => (
                  <kbd
                    key={k}
                    className="min-w-[1.6rem] border border-primary-green/30 bg-primary-green/5 px-1.5 py-0.5 text-center font-mono text-[11px] text-primary-green"
                  >
                    {k}
                  </kbd>
                ))}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-5 border-t border-primary-green/15 pt-4">
          <h3 className="text-fluid-xs font-bold uppercase tracking-[0.2em] text-cyber-blue">
            Easter eggs · {found.length}/5 found
          </h3>
          <ol className="mt-2 space-y-1.5 text-[11px] leading-relaxed text-text-muted">
            {HINTS.map((hint, i) => (
              <li key={hint} className="flex gap-2">
                <span className="text-primary-green/60">{String(i + 1).padStart(2, '0')}</span>
                <span>{hint}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ShortcutsDialog;
