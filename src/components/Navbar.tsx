import { NavLink, useLocation } from 'react-router-dom';
import {
  BookOpen,
  Briefcase,
  GraduationCap,
  Home,
  Mail,
  Menu,
  Search,
  Sparkles,
  User,
  X,
  FileText,
} from 'lucide-react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import ThemeSwitcher from './ThemeSwitcher';

export const navLinks = [
  { to: '/', label: 'Home', code: 'HOME', icon: Home },
  { to: '/projects', label: 'Work', code: 'WORK', icon: Briefcase },
  { to: '/experience', label: 'Experience', code: 'EXPERIENCE', icon: User },
  { to: '/skills', label: 'Skills', code: 'SKILLS', icon: Sparkles },
  { to: '/education', label: 'Education', code: 'EDUCATION', icon: GraduationCap },
  { to: '/vedic-learnings', label: 'Archives', code: 'ARCHIVES', icon: BookOpen },
  { to: '/contact', label: 'Contact', code: 'CONTACT', icon: Mail },
];

/** Primary nav on the mobile bottom dock — kept to five for thumb ergonomics. */
const dockLinks = [navLinks[0], navLinks[1], navLinks[2], navLinks[3], navLinks[6]];

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 220, damping: 40, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-primary-green via-cyber-blue to-funky-accent"
    />
  );
};

interface NavbarProps {
  onOpenPalette: () => void;
}

const Navbar = ({ onOpenPalette }: NavbarProps) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        data-site-chrome=""
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-colors duration-300 print:hidden',
          scrolled
            ? 'border-b border-primary-green/15 bg-base-bg/85 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        )}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 lg:px-8"
        >
          <NavLink
            to="/"
            className="group flex shrink-0 items-center gap-2 font-display text-fluid-sm font-bold uppercase tracking-[0.2em] text-text-base"
          >
            <span className="grid h-8 w-8 place-items-center border border-primary-green/50 bg-primary-green/10 text-primary-green transition-colors group-hover:bg-primary-green group-hover:text-black">
              JI
            </span>
            <span className="hidden text-primary-green xs:inline">Jatin<span className="text-text-muted">.iyer</span></span>
          </NavLink>

          {/* Desktop links */}
          <ul className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map(({ to, label, icon: Icon }) => {
              const active = location.pathname === to;
              return (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={cn(
                      'relative flex items-center gap-2 rounded-sm px-3 py-2 text-fluid-xs font-medium uppercase tracking-wider transition-colors',
                      active ? 'text-primary-green' : 'text-text-muted hover:text-text-base'
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    {label}
                    {active && (
                      <motion.span
                        layoutId={reduced ? undefined : 'nav-active'}
                        className="absolute inset-x-2 -bottom-0.5 h-px bg-primary-green shadow-glow-sm"
                      />
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <div className="flex shrink-0 items-center gap-1.5">
            <button
              type="button"
              onClick={onOpenPalette}
              aria-label="Open command palette (Ctrl or Cmd + K)"
              className="hidden items-center gap-2 border border-primary-green/25 bg-surface/60 px-3 py-1.5 text-fluid-xs text-text-muted transition-colors hover:border-primary-green/60 hover:text-primary-green sm:flex"
            >
              <Search className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Search</span>
              <kbd className="ml-1 border border-text-muted/30 px-1 font-mono text-[10px] leading-4">⌘K</kbd>
            </button>

            <button
              type="button"
              onClick={onOpenPalette}
              aria-label="Open command palette"
              className="grid h-9 w-9 place-items-center border border-primary-green/25 text-text-muted transition-colors hover:border-primary-green/60 hover:text-primary-green sm:hidden"
            >
              <Search className="h-4 w-4" aria-hidden="true" />
            </button>

            <ThemeSwitcher />

            <NavLink
              to="/resume"
              className="hidden min-h-[40px] items-center gap-2 border border-primary-green bg-primary-green/10 px-3 py-1.5 text-fluid-xs font-bold uppercase tracking-wider text-primary-green transition-colors hover:bg-primary-green hover:text-black md:flex"
            >
              <FileText className="h-3.5 w-3.5" aria-hidden="true" />
              Résumé
            </NavLink>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="grid h-9 w-9 place-items-center border border-primary-green/25 text-primary-green transition-colors hover:bg-primary-green/10 lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
        <ScrollProgress />
      </header>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="absolute inset-0 bg-base-bg/95 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              aria-label="Mobile"
              className="absolute inset-x-0 top-14 max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-y border-primary-green/20 bg-surface/95 p-4 sm:top-16"
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <ul className="grid gap-1.5">
                {navLinks.map(({ to, label, code, icon: Icon }, i) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        cn(
                          'flex items-center gap-3 border px-4 py-3 text-fluid-sm uppercase tracking-wider transition-colors',
                          isActive
                            ? 'border-primary-green bg-primary-green/10 text-primary-green'
                            : 'border-primary-green/15 text-text-muted hover:border-primary-green/40 hover:text-text-base'
                        )
                      }
                    >
                      <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span className="font-bold">{label}</span>
                      <span className="ml-auto font-mono text-[10px] text-text-muted/60">
                        0{i + 1}
                      </span>
                    </NavLink>
                  </li>
                ))}
                <li>
                  <NavLink
                    to="/resume"
                    className="mt-2 flex items-center justify-center gap-2 border border-primary-green bg-primary-green px-4 py-3 text-fluid-sm font-bold uppercase tracking-wider text-black"
                  >
                    <FileText className="h-4 w-4" aria-hidden="true" />
                    View Résumé
                  </NavLink>
                </li>
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile bottom dock — thumb-reachable primary navigation. */}
      <nav
        aria-label="Quick navigation"
        className="safe-bottom fixed inset-x-0 bottom-0 z-40 border-t border-primary-green/20 bg-base-bg/90 backdrop-blur-xl lg:hidden"
      >
        <ul className="mx-auto flex max-w-lg items-stretch justify-between px-1">
          {dockLinks.map(({ to, label, icon: Icon }) => {
            const active = location.pathname === to;
            return (
              <li key={to} className="flex-1">
                <NavLink
                  to={to}
                  className={cn(
                    'flex min-h-[3.25rem] flex-col items-center justify-center gap-1 px-1 py-2 text-[10px] font-bold uppercase tracking-wider transition-colors',
                    active ? 'text-primary-green' : 'text-text-muted'
                  )}
                >
                  <span className="relative">
                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                    {active && (
                      <span className="absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary-green" />
                    )}
                  </span>
                  <span className="truncate">{label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
