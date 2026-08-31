import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { motion, type HTMLMotionProps } from 'framer-motion';

/** Page shell: consistent max width, gutters and bottom clearance for the dock. */
export const Section = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement> & { wide?: boolean }>(
  ({ className, wide, children, ...props }, ref) => (
    <section
      ref={ref}
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        wide ? 'max-w-7xl' : 'max-w-6xl',
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
);
Section.displayName = 'Section';

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'left' | 'center';
  /** Use `h1` once per page for the primary heading; `h2` for sections. */
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
}

export const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  as: Heading = 'h2',
  className,
}: SectionHeadingProps) => (
  <div
    className={cn(
      'flex flex-col gap-3',
      align === 'center' ? 'items-center text-center' : 'items-start text-left',
      className
    )}
  >
    {eyebrow && (
      <span className="eyebrow">
        <span className="h-px w-6 bg-primary-green/60" aria-hidden="true" />
        {eyebrow}
      </span>
    )}
    <Heading className="font-display text-fluid-2xl font-bold uppercase tracking-wide text-text-base text-balance">
      {title}
    </Heading>
    {subtitle && (
      <p
        className={cn(
          'max-w-2xl font-sans text-fluid-base leading-relaxed text-text-muted text-pretty',
          align === 'center' && 'mx-auto'
        )}
      >
        {subtitle}
      </p>
    )}
  </div>
);

/** Standard content surface with the angled cyber corner. */
export const Panel = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { interactive?: boolean }>(
  ({ className, interactive, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('panel cyber-card', interactive && 'panel-hover', className)}
      {...props}
    >
      {children}
    </div>
  )
);
Panel.displayName = 'Panel';

type RevealProps = HTMLMotionProps<'div'> & { delay?: number };

/** Scroll-triggered entrance that collapses to a no-op under reduced motion. */
export const Reveal = ({ delay = 0, children, className, ...props }: RevealProps) => {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div className={className as string}>{children as React.ReactNode}</div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/** Small status chip used for availability, project state, etc. */
export const Chip = ({
  children,
  tone = 'green',
  className,
}: {
  children: React.ReactNode;
  tone?: 'green' | 'blue' | 'accent' | 'muted';
  className?: string;
}) => {
  const tones = {
    green: 'border-primary-green/40 bg-primary-green/10 text-primary-green',
    blue: 'border-cyber-blue/40 bg-cyber-blue/10 text-cyber-blue',
    accent: 'border-funky-accent/40 bg-funky-accent/10 text-funky-accent',
    muted: 'border-text-muted/30 bg-text-muted/10 text-text-muted',
  } as const;

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 border px-2 py-0.5 text-fluid-xs font-medium uppercase tracking-wider',
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
};
