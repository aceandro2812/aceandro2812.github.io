import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { CustomCursor } from './CustomCursor';
import { ScanlineOverlay } from './ScanlineOverlay';
import CommandPalette from './CommandPalette';
import HiddenTerminal from './HiddenTerminal';
import ShortcutsDialog from './ShortcutsDialog';
import { printConsoleGreeting, useEasterEggs } from './easterEggs';

/** Resets scroll on route change — SPAs otherwise keep the previous offset. */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [shortcutsOpen, setShortcutsOpen] = useState(false);

  const openTerminal = useCallback(() => setTerminalOpen(true), []);
  const openShortcuts = useCallback(() => setShortcutsOpen(true), []);

  useEasterEggs(openTerminal, openShortcuts);

  useEffect(() => {
    printConsoleGreeting();
  }, []);

  // Global ⌘K / Ctrl+K.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setPaletteOpen((v) => !v);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div className="relative flex min-h-[100dvh] w-full flex-col overflow-x-hidden bg-base-bg">
      <a href="#main" className="sr-only-focusable">
        Skip to content
      </a>

      <ScrollToTop />
      <CustomCursor />
      <ScanlineOverlay />

      {/* Ambient background — fixed so it never contributes to layout width. */}
      <div aria-hidden="true" className="fixed inset-0 -z-10">
        <div className="absolute inset-0 pattern-grid opacity-[0.35]" />
        <div className="absolute left-1/2 top-[-20%] h-[60vh] w-[80vw] -translate-x-1/2 rounded-full bg-primary-green/[0.06] blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[50vh] w-[50vw] rounded-full bg-cyber-blue/[0.05] blur-[120px]" />
      </div>

      <Navbar onOpenPalette={() => setPaletteOpen(true)} />

      <main id="main" className="relative z-10 flex-1 pt-14 sm:pt-16">
        {children}
      </main>

      <Footer />

      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
      <HiddenTerminal open={terminalOpen} onClose={() => setTerminalOpen(false)} />
      <ShortcutsDialog open={shortcutsOpen} onClose={() => setShortcutsOpen(false)} />
    </div>
  );
};

export default Layout;
