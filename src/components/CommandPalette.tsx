import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  CornerDownLeft,
  ArrowUp,
  ArrowDown,
  Command as CommandIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import portfolioConfig from '@/config/portfolio';
import { navLinks } from './Navbar';
import { applyTheme, THEMES, type ThemeId } from './ThemeSwitcher';
import { toast } from 'sonner';

interface Item {
  id: string;
  label: string;
  hint?: string;
  group: string;
  keywords: string;
  run: () => void;
}

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/**
 * ⌘K / Ctrl+K palette.
 *
 * Gives power users (recruiters skimming fast, engineers who live on the
 * keyboard) a single entry point to every page, project, skill and action —
 * including things that are otherwise buried, like downloading the vCard.
 */
const CommandPalette = ({ open, onOpenChange }: CommandPaletteProps) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const items = useMemo<Item[]>(() => {
    const close = (fn: () => void) => () => {
      onOpenChange(false);
      fn();
    };

    const pages: Item[] = navLinks.map((link) => ({
      id: `page-${link.to}`,
      label: link.label,
      hint: 'Page',
      group: 'Navigate',
      keywords: `${link.label} ${link.code} ${link.to}`,
      run: close(() => navigate(link.to)),
    }));

    pages.push({
      id: 'page-resume',
      label: 'Résumé',
      hint: 'Printable one-pager',
      group: 'Navigate',
      keywords: 'resume cv print pdf download',
      run: close(() => navigate('/resume')),
    });

    const projects: Item[] = portfolioConfig.projects.map((p) => ({
      id: `project-${p.title}`,
      label: p.name ?? p.title,
      hint: p.tagline,
      group: 'Projects',
      keywords: `${p.title} ${p.tagline ?? ''} ${p.tags.join(' ')}`,
      run: close(() => window.open(p.link, '_blank', 'noopener,noreferrer')),
    }));

    const skills: Item[] = portfolioConfig.skills.flatMap((cat) =>
      cat.skills.map((s) => ({
        id: `skill-${cat.title}-${s.name}`,
        label: s.name,
        hint: cat.label ?? 'Skill',
        group: 'Skills',
        keywords: `${s.name} ${cat.label ?? ''} ${s.note ?? ''}`,
        run: close(() => navigate('/skills')),
      }))
    );

    const actions: Item[] = [
      {
        id: 'action-email',
        label: 'Email Jatin',
        hint: portfolioConfig.contact.email,
        group: 'Actions',
        keywords: 'email mail contact hire reach out',
        run: close(() => {
          window.location.href = `mailto:${portfolioConfig.contact.email}`;
        }),
      },
      {
        id: 'action-github',
        label: 'Open GitHub profile',
        hint: `@${portfolioConfig.personalInfo.github}`,
        group: 'Actions',
        keywords: 'github code repos source',
        run: close(() =>
          window.open(portfolioConfig.socialLinks.github, '_blank', 'noopener,noreferrer')
        ),
      },
      {
        id: 'action-linkedin',
        label: 'Open LinkedIn profile',
        hint: 'Professional network',
        group: 'Actions',
        keywords: 'linkedin profile network connect',
        run: close(() =>
          window.open(portfolioConfig.socialLinks.linkedin, '_blank', 'noopener,noreferrer')
        ),
      },
      {
        id: 'action-vcard',
        label: 'Save contact card (.vcf)',
        hint: 'Adds Jatin to your phone contacts',
        group: 'Actions',
        keywords: 'vcard contact save phone address book download',
        run: close(() => {
          downloadVCard();
          toast.success('Contact card downloaded');
        }),
      },
      {
        id: 'action-copy-email',
        label: 'Copy email address',
        hint: portfolioConfig.contact.email,
        group: 'Actions',
        keywords: 'copy clipboard email address',
        run: close(async () => {
          try {
            await navigator.clipboard.writeText(portfolioConfig.contact.email);
            toast.success('Email copied to clipboard');
          } catch {
            toast.error('Clipboard blocked — email is ' + portfolioConfig.contact.email);
          }
        }),
      },
      {
        id: 'action-print',
        label: 'Print / save résumé as PDF',
        hint: 'Opens the print dialog',
        group: 'Actions',
        keywords: 'print pdf resume cv save export',
        run: close(() => {
          navigate('/resume');
          setTimeout(() => window.print(), 600);
        }),
      },
    ];

    const themes: Item[] = THEMES.map((t) => ({
      id: `theme-${t.id}`,
      label: `Theme: ${t.label}`,
      hint: t.hint,
      group: 'Appearance',
      keywords: `theme colour color ${t.label} ${t.hint}`,
      run: close(() => {
        applyTheme(t.id as ThemeId);
        toast.success(`${t.label} theme applied`);
      }),
    }));

    return [...pages, ...projects, ...actions, ...themes, ...skills];
  }, [navigate, onOpenChange]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items.filter((i) => i.group !== 'Skills').slice(0, 14);
    return items
      .filter((i) => `${i.label} ${i.keywords}`.toLowerCase().includes(q))
      .slice(0, 20);
  }, [items, query]);

  const grouped = useMemo(() => {
    const map = new Map<string, Item[]>();
    filtered.forEach((item) => {
      const list = map.get(item.group) ?? [];
      list.push(item);
      map.set(item.group, list);
    });
    return Array.from(map.entries());
  }, [filtered]);

  useEffect(() => setActive(0), [query, open]);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 30);
      document.body.style.overflow = 'hidden';
      return () => {
        clearTimeout(t);
        document.body.style.overflow = '';
      };
    }
    setQuery('');
  }, [open]);

  useEffect(() => {
    listRef.current
      ?.querySelector<HTMLElement>(`[data-index="${active}"]`)
      ?.scrollIntoView({ block: 'nearest' });
  }, [active]);

  if (!open) return null;

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i) => (i + 1) % Math.max(filtered.length, 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i) => (i - 1 + filtered.length) % Math.max(filtered.length, 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      filtered[active]?.run();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onOpenChange(false);
    }
  };

  let flatIndex = -1;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      className="fixed inset-0 z-[120] flex items-start justify-center px-4 pt-[12vh] sm:pt-[15vh]"
    >
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />
      <div
        className="relative w-full max-w-xl animate-pop-in overflow-hidden border border-primary-green/40 bg-surface/95 shadow-glow-lg backdrop-blur-xl"
        onKeyDown={onKeyDown}
      >
        <div className="flex items-center gap-3 border-b border-primary-green/20 px-4">
          <Search className="h-4 w-4 shrink-0 text-primary-green" aria-hidden="true" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages, projects, skills, actions…"
            aria-label="Search"
            role="combobox"
            aria-expanded="true"
            aria-controls="command-palette-list"
            aria-activedescendant={filtered[active] ? `cmd-opt-${active}` : undefined}
            aria-autocomplete="list"
            className="h-12 w-full bg-transparent text-fluid-sm text-text-base outline-none placeholder:text-text-muted/60"
          />
          <kbd className="hidden shrink-0 border border-text-muted/30 px-1.5 py-0.5 text-[10px] text-text-muted sm:block">
            ESC
          </kbd>
        </div>

        <div
          ref={listRef}
          id="command-palette-list"
          role="listbox"
          aria-label="Results"
          className="max-h-[52vh] overflow-y-auto p-1.5"
        >
          {filtered.length === 0 && (
            <p className="px-3 py-8 text-center text-fluid-sm text-text-muted" role="status">
              No matches for “{query}”.
            </p>
          )}
          {grouped.map(([group, groupItems]) => (
            <div key={group} className="mb-1" role="group" aria-label={group}>
              <p className="px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-text-muted/70">
                {group}
              </p>
              {groupItems.map((item) => {
                flatIndex += 1;
                const index = flatIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    id={`cmd-opt-${index}`}
                    role="option"
                    aria-selected={index === active}
                    data-index={index}
                    onMouseEnter={() => setActive(index)}
                    onClick={item.run}
                    className={cn(
                      'flex w-full items-center gap-3 px-3 py-2.5 text-left transition-colors',
                      index === active
                        ? 'bg-primary-green/15 text-primary-green'
                        : 'text-text-base hover:bg-primary-green/5'
                    )}
                  >
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-fluid-sm font-medium">{item.label}</span>
                      {item.hint && (
                        <span className="block truncate text-[11px] text-text-muted">
                          {item.hint}
                        </span>
                      )}
                    </span>
                    {index === active && (
                      <CornerDownLeft className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 border-t border-primary-green/20 px-4 py-2 text-[10px] uppercase tracking-wider text-text-muted">
          <span className="flex items-center gap-1">
            <ArrowUp className="h-3 w-3" />
            <ArrowDown className="h-3 w-3" /> navigate
          </span>
          <span className="flex items-center gap-1">
            <CornerDownLeft className="h-3 w-3" /> select
          </span>
          <span className="ml-auto hidden items-center gap-1 sm:flex">
            <CommandIcon className="h-3 w-3" /> K to reopen
          </span>
        </div>
      </div>
    </div>
  );
};

/** Builds a vCard on the fly so recruiters can save contact details in one tap. */
export function downloadVCard() {
  const { name, title } = portfolioConfig.personalInfo;
  const { email, phone, location } = portfolioConfig.contact;
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${name}`,
    'N:Iyer;Jatin;;;',
    `TITLE:${title}`,
    'ORG:Mettler Toledo International INC',
    `EMAIL;TYPE=INTERNET:${email}`,
    `TEL;TYPE=CELL:${phone}`,
    `ADR;TYPE=WORK:;;;${location};;;India`,
    `URL:${portfolioConfig.socialLinks.github}`,
    `URL:${portfolioConfig.socialLinks.linkedin}`,
    'END:VCARD',
  ].join('\r\n');

  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'jatin-iyer.vcf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export default CommandPalette;
