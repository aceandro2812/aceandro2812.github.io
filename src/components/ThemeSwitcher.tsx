import { useEffect, useState } from 'react';
import { Palette, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export const THEMES = [
  { id: 'matrix', label: 'Matrix', swatch: '#00FF41', hint: 'Default terminal green' },
  { id: 'ultraviolet', label: 'Ultraviolet', swatch: '#A855F7', hint: 'Deep violet + cyan' },
  { id: 'amber', label: 'Amber CRT', swatch: '#F59E0B', hint: 'Vintage phosphor' },
  { id: 'synthwave', label: 'Synthwave', swatch: '#F0489E', hint: 'Neon magenta' },
  { id: 'solarized', label: 'Daylight', swatch: '#268BD2', hint: 'Light mode, easy on the eyes' },
] as const;

export type ThemeId = (typeof THEMES)[number]['id'];

const STORAGE_KEY = 'portfolio-theme';

export function applyTheme(id: ThemeId) {
  const root = document.documentElement;
  if (id === 'matrix') root.removeAttribute('data-theme');
  else root.setAttribute('data-theme', id);
  try {
    localStorage.setItem(STORAGE_KEY, id);
  } catch {
    /* storage can be blocked in private mode — theming is non-essential */
  }
}

export function getStoredTheme(): ThemeId {
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as ThemeId | null;
    if (stored && THEMES.some((t) => t.id === stored)) return stored;
  } catch {
    /* ignore */
  }
  return 'matrix';
}

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<ThemeId>('matrix');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = getStoredTheme();
    setTheme(stored);
    applyTheme(stored);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('[data-theme-switcher]')) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const select = (id: ThemeId) => {
    setTheme(id);
    applyTheme(id);
    setOpen(false);
  };

  return (
    <div className="relative" data-theme-switcher>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Change colour theme"
        aria-haspopup="menu"
        aria-expanded={open}
        className="grid h-9 w-9 place-items-center border border-primary-green/25 text-text-muted transition-colors hover:border-primary-green/60 hover:text-primary-green"
      >
        <Palette className="h-4 w-4" aria-hidden="true" />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-11 z-50 w-56 animate-pop-in border border-primary-green/30 bg-surface/95 p-1.5 shadow-panel backdrop-blur-xl"
        >
          <p className="px-2 py-1.5 text-[10px] uppercase tracking-[0.2em] text-text-muted">
            Colour scheme
          </p>
          {THEMES.map((t) => (
            <button
              key={t.id}
              type="button"
              role="menuitemradio"
              aria-checked={theme === t.id}
              onClick={() => select(t.id)}
              className={cn(
                'flex w-full items-center gap-2.5 px-2 py-2 text-left text-fluid-xs transition-colors',
                theme === t.id
                  ? 'bg-primary-green/10 text-primary-green'
                  : 'text-text-muted hover:bg-primary-green/5 hover:text-text-base'
              )}
            >
              <span
                className="h-3.5 w-3.5 shrink-0 rounded-full border border-white/20"
                style={{ background: t.swatch }}
                aria-hidden="true"
              />
              <span className="flex-1">
                <span className="block font-bold uppercase tracking-wider">{t.label}</span>
                <span className="block text-[10px] text-text-muted/70">{t.hint}</span>
              </span>
              {theme === t.id && <Check className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
