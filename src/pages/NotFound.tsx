import { Link, useLocation } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Section, Panel } from '@/components/primitives';
import Seo from '@/components/Seo';

const NotFound = () => {
  const location = useLocation();

  return (
    <>
      <Seo
        title="404 — Route not found"
        description="That page does not exist on Jatin Iyer's portfolio."
        path={location.pathname}
      />

      <Section className="flex min-h-[65vh] items-center py-16">
        <Panel className="mx-auto w-full max-w-lg p-8 text-center">
          <p className="font-display text-fluid-4xl font-bold text-primary-green glow-text">404</p>
          <h1 className="mt-2 font-display text-fluid-lg font-bold uppercase tracking-wide text-text-base">
            Route not found
          </h1>
          <p className="mt-3 font-sans text-fluid-sm leading-relaxed text-text-muted">
            Nothing is mapped to{' '}
            <code className="break-all border border-primary-green/20 bg-black/40 px-1.5 py-0.5 text-primary-green">
              {location.pathname}
            </code>
            . It may have moved, or the link may be stale.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="cyber-card inline-flex h-11 items-center justify-center gap-2 border border-primary-green bg-primary-green px-5 text-fluid-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-primary-green/85"
            >
              <Home className="h-4 w-4" aria-hidden="true" />
              Go home
            </Link>
            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex h-11 items-center justify-center gap-2 border border-primary-green/40 px-5 text-fluid-xs font-bold uppercase tracking-wider text-primary-green transition-colors hover:bg-primary-green/10"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Go back
            </button>
          </div>

          <p className="mt-6 flex items-center justify-center gap-1.5 text-[11px] text-text-muted/70">
            <Search className="h-3 w-3" aria-hidden="true" />
            Tip: press
            <kbd className="border border-text-muted/30 px-1 font-mono">⌘K</kbd>
            to search the site.
          </p>
        </Panel>
      </Section>
    </>
  );
};

export default NotFound;
