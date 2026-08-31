import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, TerminalSquare } from 'lucide-react';
import portfolioConfig from '@/config/portfolio';
import { downloadVCard } from './CommandPalette';
import { recordEgg } from './easterEggs';

interface Line {
  kind: 'in' | 'out' | 'err' | 'ok';
  text: string;
}

const BANNER: Line[] = [
  { kind: 'ok', text: 'jatin-os v2.0.1 — interactive shell' },
  { kind: 'out', text: 'Type `help` for commands, `exit` to close.' },
];

interface TerminalProps {
  open: boolean;
  onClose: () => void;
}

/**
 * Hidden shell (type "root" anywhere, or run it from the palette).
 *
 * It's an easter egg, but a useful one — every command maps to something a
 * visitor might genuinely want: the stack, the projects, contact details.
 */
const HiddenTerminal = ({ open, onClose }: TerminalProps) => {
  const navigate = useNavigate();
  const [lines, setLines] = useState<Line[]>(BANNER);
  const [value, setValue] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 40);
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lines]);

  if (!open) return null;

  const push = (...next: Line[]) => setLines((prev) => [...prev, ...next]);

  const run = (raw: string) => {
    const input = raw.trim();
    if (!input) return;
    push({ kind: 'in', text: input });
    setHistory((h) => [input, ...h].slice(0, 40));
    setHistoryIndex(-1);

    const [cmd, ...args] = input.toLowerCase().split(/\s+/);

    switch (cmd) {
      case 'help':
        push(
          { kind: 'out', text: 'whoami      who is Jatin' },
          { kind: 'out', text: 'stack       core technologies' },
          { kind: 'out', text: 'projects    flagship work' },
          { kind: 'out', text: 'exp         work history' },
          { kind: 'out', text: 'contact     how to reach him' },
          { kind: 'out', text: 'vcard       download contact card' },
          { kind: 'out', text: 'goto <page> navigate (home|work|skills|contact|resume)' },
          { kind: 'out', text: 'sudo        do not' },
          { kind: 'out', text: 'clear       clear screen' },
          { kind: 'out', text: 'exit        close terminal' }
        );
        break;

      case 'whoami':
        push(
          { kind: 'ok', text: portfolioConfig.personalInfo.name },
          { kind: 'out', text: portfolioConfig.personalInfo.title },
          { kind: 'out', text: portfolioConfig.personalInfo.headline },
          { kind: 'out', text: `Location: ${portfolioConfig.contact.location}` },
          { kind: 'ok', text: portfolioConfig.personalInfo.availability }
        );
        break;

      case 'stack':
        portfolioConfig.skills.forEach((cat) => {
          push({ kind: 'ok', text: (cat.label ?? cat.title) + ':' });
          push({ kind: 'out', text: '  ' + cat.skills.map((s) => s.name).join(', ') });
        });
        break;

      case 'projects':
        portfolioConfig.projects.forEach((p) => {
          push(
            { kind: 'ok', text: `${p.name ?? p.title} (${p.year ?? '—'})` },
            { kind: 'out', text: `  ${p.tagline ?? ''}` },
            { kind: 'out', text: `  ${p.link}` }
          );
        });
        break;

      case 'exp':
      case 'experience':
        portfolioConfig.experience.forEach((e) => {
          push({ kind: 'ok', text: `${e.role} @ ${e.company}` });
          push({ kind: 'out', text: `  ${e.duration}` });
        });
        break;

      case 'contact':
        push(
          { kind: 'out', text: `email    ${portfolioConfig.contact.email}` },
          { kind: 'out', text: `github   ${portfolioConfig.socialLinks.github}` },
          { kind: 'out', text: `linkedin ${portfolioConfig.socialLinks.linkedin}` }
        );
        break;

      case 'vcard':
        downloadVCard();
        push({ kind: 'ok', text: 'jatin-iyer.vcf downloaded.' });
        break;

      case 'goto': {
        const map: Record<string, string> = {
          home: '/',
          work: '/projects',
          projects: '/projects',
          skills: '/skills',
          experience: '/experience',
          education: '/education',
          contact: '/contact',
          resume: '/resume',
          archives: '/vedic-learnings',
        };
        const dest = map[args[0]];
        if (dest) {
          push({ kind: 'ok', text: `navigating → ${dest}` });
          setTimeout(() => {
            navigate(dest);
            onClose();
          }, 350);
        } else {
          push({ kind: 'err', text: `unknown page: ${args[0] ?? '(none)'}` });
        }
        break;
      }

      case 'sudo':
        push({ kind: 'err', text: 'jatin is not in the sudoers file. This incident will be reported.' });
        recordEgg('sudo', 'sudo');
        break;

      case 'rm':
        push({ kind: 'err', text: 'Nice try. This portfolio has backups.' });
        break;

      case 'ls':
        push({ kind: 'out', text: 'projects/  experience/  skills/  education/  archives/  resume.pdf' });
        break;

      case 'clear':
        setLines(BANNER);
        break;

      case 'exit':
      case 'quit':
        onClose();
        break;

      default:
        push({ kind: 'err', text: `command not found: ${cmd} — try \`help\`` });
    }
  };

  const colour = (kind: Line['kind']) =>
    kind === 'err'
      ? 'text-funky-accent'
      : kind === 'ok'
        ? 'text-primary-green'
        : kind === 'in'
          ? 'text-cyber-blue'
          : 'text-text-muted';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Hidden terminal"
      className="fixed inset-0 z-[130] flex items-end justify-center p-3 sm:items-center sm:p-6"
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative flex h-[70dvh] w-full max-w-2xl animate-pop-in flex-col border border-primary-green/50 bg-black/95 shadow-glow-lg sm:h-[60vh]">
        <div className="flex items-center gap-2 border-b border-primary-green/25 px-3 py-2">
          <TerminalSquare className="h-4 w-4 text-primary-green" aria-hidden="true" />
          <span className="text-fluid-xs uppercase tracking-widest text-primary-green">
            root@jatin-os
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close terminal"
            className="ml-auto grid h-7 w-7 place-items-center text-text-muted transition-colors hover:text-funky-accent"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex-1 space-y-0.5 overflow-y-auto p-3 font-mono text-[12px] leading-relaxed sm:text-[13px]"
          onClick={() => inputRef.current?.focus()}
        >
          {lines.map((line, i) => (
            <p key={i} className={colour(line.kind)}>
              {line.kind === 'in' && <span className="text-primary-green">$ </span>}
              {line.text}
            </p>
          ))}
        </div>

        <form
          className="flex items-center gap-2 border-t border-primary-green/25 px-3 py-2"
          onSubmit={(e) => {
            e.preventDefault();
            run(value);
            setValue('');
          }}
        >
          <span className="text-primary-green" aria-hidden="true">$</span>
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'ArrowUp') {
                e.preventDefault();
                const next = Math.min(historyIndex + 1, history.length - 1);
                if (next >= 0) {
                  setHistoryIndex(next);
                  setValue(history[next]);
                }
              } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                const next = historyIndex - 1;
                setHistoryIndex(next);
                setValue(next >= 0 ? history[next] : '');
              } else if (e.key === 'Escape') {
                onClose();
              }
            }}
            aria-label="Terminal input"
            spellCheck={false}
            autoComplete="off"
            className="w-full bg-transparent font-mono text-[12px] text-primary-green outline-none placeholder:text-text-muted/50 sm:text-[13px]"
            placeholder="type help…"
          />
        </form>
      </div>
    </div>
  );
};

export default HiddenTerminal;
