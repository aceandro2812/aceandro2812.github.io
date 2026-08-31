import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUpRight, Heart } from 'lucide-react';
import portfolioConfig from '@/config/portfolio';
import { navLinks } from './Navbar';

const Footer = () => {
  const { socialLinks, contact, personalInfo } = portfolioConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-24 border-t border-primary-green/15 bg-surface/40 pb-24 pt-12 lg:pb-12">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-display text-fluid-lg font-bold uppercase tracking-wide text-text-base">
            {personalInfo.name}
          </p>
          <p className="mt-2 max-w-sm font-sans text-fluid-sm leading-relaxed text-text-muted">
            {personalInfo.headline} Currently {personalInfo.availability.toLowerCase()}.
          </p>
          <div className="mt-4 flex gap-2">
            {[
              { href: socialLinks.github, icon: Github, label: 'GitHub' },
              { href: socialLinks.linkedin, icon: Linkedin, label: 'LinkedIn' },
              { href: `mailto:${contact.email}`, icon: Mail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center border border-primary-green/25 text-text-muted transition-colors hover:border-primary-green hover:bg-primary-green/10 hover:text-primary-green"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer">
          <p className="text-fluid-xs font-bold uppercase tracking-[0.2em] text-primary-green/70">
            Explore
          </p>
          <ul className="mt-3 space-y-0.5">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="link-underline inline-flex min-h-[40px] items-center text-fluid-sm text-text-muted transition-colors hover:text-text-base"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-fluid-xs font-bold uppercase tracking-[0.2em] text-primary-green/70">
            Get in touch
          </p>
          <ul className="mt-3 space-y-0.5 text-fluid-sm text-text-muted">
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="link-underline inline-flex min-h-[40px] items-center break-all hover:text-text-base"
              >
                {contact.email}
              </a>
            </li>
            <li className="py-1">{contact.location}</li>
            <li>
              <Link
                to="/resume"
                className="link-underline inline-flex min-h-[40px] items-center gap-1 hover:text-text-base"
              >
                Résumé <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-6xl flex-col gap-2 border-t border-primary-green/10 px-4 pt-5 text-[11px] text-text-muted/70 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© {year} {personalInfo.name}. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          Built with React, Vite &amp; Tailwind
          <Heart className="h-3 w-3 text-funky-accent" aria-hidden="true" />
          <span className="hidden sm:inline">· press</span>
          <kbd className="hidden border border-text-muted/30 px-1 font-mono sm:inline">?</kbd>
          <span className="hidden sm:inline">for shortcuts</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
