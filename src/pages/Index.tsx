import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Github,
  Download,
  Terminal,
  Quote,
} from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';
import { ScrambleText } from '@/components/ScrambleText';
import { Section, SectionHeading, Panel, Reveal, Chip } from '@/components/primitives';
import { getIcon } from '@/lib/icons';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { downloadVCard } from '@/components/CommandPalette';
import { recordEgg } from '@/components/easterEggs';
import Seo from '@/components/Seo';
import { toast } from 'sonner';

// The 3D particle field is ~600KB of three.js. It's decoration, so it loads
// after the page is interactive and never on reduced-motion / small screens.
const ParticleField = lazy(() => import('@/components/ParticleField'));

const AvatarPortrait = () => {
  const reduced = useReducedMotion();
  const pressTimer = useRef<ReturnType<typeof setTimeout>>();

  // Easter egg: hold the portrait for two seconds.
  const startPress = () => {
    pressTimer.current = setTimeout(() => {
      recordEgg('portrait', 'Patient observer');
      toast('Held for 2 seconds.', {
        description: 'Patience is an underrated engineering virtue. Try typing "root".',
      });
    }, 2000);
  };
  const endPress = () => clearTimeout(pressTimer.current);

  return (
    <div
      className="group relative mx-auto aspect-square w-56 select-none sm:w-64 lg:w-[21rem]"
      onMouseDown={startPress}
      onMouseUp={endPress}
      onMouseLeave={endPress}
      onTouchStart={startPress}
      onTouchEnd={endPress}
    >
      <div className="absolute inset-0 rounded-full bg-cyber-blue/20 blur-3xl transition-colors duration-700 group-hover:bg-primary-green/25" />

      <div className="relative h-full w-full overflow-hidden rounded-full border border-primary-green/40 bg-black/60 shadow-[0_0_60px_-15px_hsl(var(--brand)/0.5)]">
        <img
          src="/avatar.webp"
          alt="Jatin Iyer"
          width={336}
          height={336}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover contrast-[1.1] saturate-[1.15]"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = 'https://github.com/aceandro2812.png';
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_50%,hsl(var(--brand)/0.12)_50%)] bg-[length:100%_4px]"
        />
        {!reduced && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-primary-green/25 to-transparent blur-sm"
            animate={{ top: ['-15%', '115%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          />
        )}
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[-9%] rounded-full border border-dashed border-primary-green/25 motion-safe:animate-[spin_28s_linear_infinite]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[-18%] rounded-full border border-dotted border-cyber-blue/15 motion-safe:animate-[spin_40s_linear_infinite_reverse]"
      />

      <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap border border-primary-green/40 bg-black/90 px-3 py-1.5 backdrop-blur-sm">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-primary-green opacity-75 motion-safe:animate-ping" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-green" />
        </span>
        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary-green">
          Available for work
        </span>
      </div>
    </div>
  );
};

const Index = () => {
  const { personalInfo, stats, pillars, projects, experience, skills } = usePortfolio();
  const reduced = useReducedMotion();
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    if (reduced) return;
    if (window.matchMedia('(max-width: 767px)').matches) return;
    // Defer until the browser is idle so it never competes with first paint.
    const ric = window.requestIdleCallback;
    const show = () => setShowParticles(true);
    if (typeof ric === 'function') {
      const id = ric(show, { timeout: 2500 });
      return () => window.cancelIdleCallback?.(id);
    }
    const id = window.setTimeout(show, 1600);
    return () => window.clearTimeout(id);
  }, [reduced]);

  const featured = projects.filter((p) => p.featured);
  const currentRole = experience[0];
  const topSkills = skills[0]?.skills.slice(0, 6) ?? [];

  return (
    <>
      <Seo
        title="Jatin Iyer — AI Solution Developer"
        description="Applied-AI engineer building agentic systems, RAG pipelines and production ML. Multi-agent workflows with LangGraph and CrewAI, shipped end to end."
        path="/"
      />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {showParticles && (
          <Suspense fallback={null}>
            <ParticleField />
          </Suspense>
        )}

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.15fr_1fr] lg:gap-14 lg:px-8 lg:py-24">
          <div className="order-2 flex flex-col items-start lg:order-1">
            <Chip tone="green" className="mb-5">
              <Terminal className="h-3 w-3" aria-hidden="true" />
              {personalInfo.availability}
            </Chip>

            <h1 className="font-display text-fluid-4xl font-bold uppercase leading-[1.05] tracking-tight text-text-base text-balance">
              I build AI agents
              <br />
              <span className="text-primary-green glow-text">that actually ship.</span>
            </h1>

            <p className="mt-5 max-w-xl font-sans text-fluid-lg leading-relaxed text-text-muted text-pretty">
              {personalInfo.subheadline}
            </p>

            <div className="mt-6 flex items-center gap-2 font-mono text-fluid-xs text-primary-green/80">
              <span className="text-text-muted">$</span>
              <ScrambleText text={`${currentRole.role} @ ${currentRole.company}`} speed={22} />
              <span className="inline-block h-3.5 w-1.5 bg-primary-green motion-safe:animate-blink" aria-hidden="true" />
            </div>

            <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to="/projects"
                className="cyber-card group inline-flex h-12 items-center justify-center gap-2 border border-primary-green bg-primary-green px-6 text-fluid-sm font-bold uppercase tracking-wider text-black transition-colors hover:bg-primary-green/85"
              >
                See the work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="cyber-card inline-flex h-12 items-center justify-center gap-2 border border-primary-green/50 bg-primary-green/5 px-6 text-fluid-sm font-bold uppercase tracking-wider text-primary-green transition-colors hover:border-primary-green hover:bg-primary-green/15"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Hire me
              </Link>
              <button
                type="button"
                onClick={() => {
                  downloadVCard();
                  toast.success('Contact card saved');
                }}
                className="inline-flex h-12 items-center justify-center gap-2 border border-text-muted/25 px-5 text-fluid-sm uppercase tracking-wider text-text-muted transition-colors hover:border-cyber-blue/60 hover:text-cyber-blue"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Save contact
              </button>
            </div>

            <p className="mt-6 hidden items-center gap-2 text-fluid-xs text-text-muted/70 sm:flex">
              Press
              <kbd className="border border-text-muted/30 px-1.5 py-0.5 font-mono text-[10px]">⌘K</kbd>
              to search this site ·
              <kbd className="border border-text-muted/30 px-1.5 py-0.5 font-mono text-[10px]">?</kbd>
              for shortcuts
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <AvatarPortrait />
          </div>
        </div>
      </section>

      {/* ── Proof strip ──────────────────────────────────────────────────── */}
      <Section wide className="pb-4">
        <Reveal>
          <dl className="grid grid-cols-2 gap-px overflow-hidden border border-primary-green/20 bg-primary-green/10 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-base-bg/90 p-5">
                <dt className="text-fluid-xs uppercase tracking-wider text-text-muted">
                  {stat.label}
                </dt>
                <dd className="mt-2 font-display text-fluid-2xl font-bold text-primary-green">
                  {stat.value}
                  {stat.suffix && (
                    <span className="ml-0.5 text-fluid-base text-cyber-blue">{stat.suffix}</span>
                  )}
                </dd>
                {stat.detail && (
                  <p className="mt-1 text-[11px] leading-snug text-text-muted/70">{stat.detail}</p>
                )}
              </div>
            ))}
          </dl>
        </Reveal>
      </Section>

      {/* ── What I actually do ───────────────────────────────────────────── */}
      <Section wide className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="What I do"
          title="Four things I'm genuinely good at"
          subtitle="Not a list of every technology I've touched — the areas where I can carry a system from a whiteboard to something running in production."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => {
            const Icon = getIcon(pillar.icon);
            return (
              <Reveal key={pillar.title} delay={i * 0.06}>
                <Panel interactive className="h-full p-5">
                  <span className="mb-4 grid h-10 w-10 place-items-center border border-primary-green/30 bg-primary-green/10 text-primary-green">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-fluid-base font-bold uppercase tracking-wide text-text-base">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 font-sans text-fluid-sm leading-relaxed text-text-muted">
                    {pillar.description}
                  </p>
                </Panel>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ── Featured work ────────────────────────────────────────────────── */}
      <Section wide className="py-16 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Selected work"
            title="Three systems, three real problems"
            subtitle="Each one started with someone who couldn't do something. The tech was chosen after that, not before."
          />
          <Link
            to="/projects"
            className="link-underline inline-flex min-h-[44px] shrink-0 items-center gap-1.5 py-2 text-fluid-sm font-bold uppercase tracking-wider text-primary-green"
          >
            All projects <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 space-y-4">
          {featured.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.05}>
              <Panel interactive className="group overflow-hidden">
                <div className="grid gap-0 md:grid-cols-[minmax(0,15rem)_1fr]">
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-primary-green/15 md:aspect-auto md:border-b-0 md:border-r">
                    <img
                      src={project.imageUrl}
                      alt={`${project.name ?? project.title} — ${project.tagline}`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover opacity-70 transition-[transform,opacity] duration-700 group-hover:scale-105 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-base-bg via-transparent to-transparent md:bg-gradient-to-r" />
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-fluid-lg font-bold uppercase tracking-wide text-text-base">
                        {project.name ?? project.title}
                      </h3>
                      <Chip tone={project.status === 'live' ? 'green' : 'muted'}>
                        {project.status === 'live' ? 'Live' : 'Archived'}
                      </Chip>
                      <span className="text-fluid-xs text-text-muted/60">{project.year}</span>
                    </div>

                    <p className="font-sans text-fluid-base font-medium text-cyber-blue">
                      {project.tagline}
                    </p>
                    <p className="mt-2 max-w-2xl font-sans text-fluid-sm leading-relaxed text-text-muted">
                      {project.problem}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 5).map((tag) => (
                        <span
                          key={tag}
                          className="border border-primary-green/20 bg-primary-green/5 px-2 py-0.5 text-[11px] text-primary-green/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-3">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[44px] items-center gap-1.5 py-2 text-fluid-xs font-bold uppercase tracking-wider text-primary-green transition-colors hover:text-cyber-blue"
                      >
                        <Github className="h-3.5 w-3.5" aria-hidden="true" />
                        Source
                        <span className="sr-only">code for {project.name ?? project.title} on GitHub</span>
                      </a>
                      <Link
                        to="/projects"
                        className="inline-flex min-h-[44px] items-center gap-1.5 py-2 text-fluid-xs font-bold uppercase tracking-wider text-text-muted transition-colors hover:text-text-base"
                      >
                        Case study <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        <span className="sr-only">for {project.name ?? project.title}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Story ────────────────────────────────────────────────────────── */}
      <Section className="py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,20rem)]">
          <div>
            <SectionHeading eyebrow="The short version" title="How I got here" />
            <div className="mt-6 space-y-4">
              {personalInfo.story.map((para, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <p className="max-w-2xl font-sans text-fluid-base leading-relaxed text-text-muted text-pretty">
                    {para}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <Panel className="h-full p-5">
              <Quote className="mb-3 h-5 w-5 text-primary-green/50" aria-hidden="true" />
              <p className="font-sans text-fluid-base italic leading-relaxed text-text-base">
                “A demo proves it can work once. Engineering is making it work on a Tuesday
                afternoon when nobody's watching.”
              </p>
              <p className="mt-4 text-fluid-xs uppercase tracking-wider text-text-muted">
                — How I think about AI products
              </p>

              <div className="mt-6 border-t border-primary-green/15 pt-4">
                <p className="mb-3 text-fluid-xs font-bold uppercase tracking-[0.2em] text-cyber-blue">
                  Working with
                </p>
                <div className="flex flex-wrap gap-2">
                  {topSkills.map((skill) => {
                    const Icon = getIcon(skill.icon);
                    return (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 border border-primary-green/20 bg-black/40 px-2 py-1 text-[11px] text-text-muted"
                      >
                        <Icon className="h-3 w-3" />
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Panel>
          </Reveal>
        </div>
      </Section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <Section className="pb-8">
        <Reveal>
          <Panel className="relative overflow-hidden p-8 text-center sm:p-12">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--brand)/0.12),transparent_65%)]"
            />
            <div className="relative">
              <h2 className="font-display text-fluid-2xl font-bold uppercase tracking-wide text-text-base text-balance">
                Got a problem worth automating?
              </h2>
              <p className="mx-auto mt-3 max-w-xl font-sans text-fluid-base leading-relaxed text-text-muted text-pretty">
                I'm open to AI/ML engineering roles and interesting collaborations. Tell me what's
                slow, manual or impossible right now — I'll tell you honestly whether AI is the
                right tool for it.
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="cyber-card inline-flex h-12 items-center justify-center gap-2 border border-primary-green bg-primary-green px-7 text-fluid-sm font-bold uppercase tracking-wider text-black transition-colors hover:bg-primary-green/85"
                >
                  Start a conversation
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/resume"
                  className="cyber-card inline-flex h-12 items-center justify-center gap-2 border border-primary-green/40 px-7 text-fluid-sm font-bold uppercase tracking-wider text-primary-green transition-colors hover:bg-primary-green/10"
                >
                  Read the résumé
                </Link>
              </div>
            </div>
          </Panel>
        </Reveal>
      </Section>
    </>
  );
};

export default Index;
