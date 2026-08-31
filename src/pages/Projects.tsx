import { useMemo, useState } from 'react';
import { Github, ExternalLink, Filter, ArrowUpRight } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';
import { Section, SectionHeading, Panel, Reveal, Chip } from '@/components/primitives';
import GithubProjects from '@/components/GithubProjects';
import Seo from '@/components/Seo';
import { cn } from '@/lib/utils';

const Projects = () => {
  const { projects, personalInfo } = usePortfolio();
  const [activeTag, setActiveTag] = useState<string>('All');

  const tags = useMemo(() => {
    const all = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => all.add(t)));
    return ['All', ...Array.from(all).sort()];
  }, [projects]);

  const visible = useMemo(
    () => (activeTag === 'All' ? projects : projects.filter((p) => p.tags.includes(activeTag))),
    [projects, activeTag]
  );

  return (
    <>
      <Seo
        title="Work — Case Studies"
        description="Deep dives into SwasthyaSetu (agentic medical triage), KachraBOT (edge computer vision) and DysAssist (on-device accessibility OCR)."
        path="/projects"
      />

      <Section wide className="py-14 sm:py-20">
        <SectionHeading
          as="h1"
          eyebrow="Selected work"
          title="Problem, approach, outcome"
          subtitle="Three systems written up honestly — what wasn't working, how I built it, and what it actually changed. Source is public for all of them."
        />

        {/* Tag filter */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <span className="mr-1 inline-flex items-center gap-1.5 text-fluid-xs uppercase tracking-wider text-text-muted">
            <Filter className="h-3.5 w-3.5" aria-hidden="true" />
            Filter
          </span>
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              aria-pressed={activeTag === tag}
              className={cn(
                'inline-flex min-h-[44px] items-center border px-3 py-1.5 text-[11px] uppercase tracking-wider transition-colors',
                activeTag === tag
                  ? 'border-primary-green bg-primary-green text-black'
                  : 'border-primary-green/25 text-text-muted hover:border-primary-green/60 hover:text-primary-green'
              )}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="mt-10 space-y-6">
          {visible.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.05}>
              <Panel interactive className="group overflow-hidden">
                <div className="grid gap-0 lg:grid-cols-[minmax(0,22rem)_1fr]">
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-primary-green/15 lg:aspect-auto lg:border-b-0 lg:border-r">
                    <img
                      src={project.imageUrl}
                      alt={`${project.name ?? project.title} preview`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover opacity-75 transition-[transform,opacity] duration-700 group-hover:scale-105 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-base-bg/90 via-transparent to-transparent" />
                    <div className="absolute left-4 top-4 flex gap-2">
                      <Chip tone={project.status === 'live' ? 'green' : 'muted'}>
                        {project.status === 'live' ? '● Live' : '○ Archived'}
                      </Chip>
                    </div>
                  </div>

                  <div className="p-5 sm:p-7">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h2 className="font-display text-fluid-xl font-bold uppercase tracking-wide text-text-base">
                        {project.name ?? project.title}
                      </h2>
                      <span className="font-mono text-fluid-xs text-text-muted/60">
                        {project.year}
                      </span>
                    </div>
                    <p className="mt-1 font-sans text-fluid-base font-medium text-cyber-blue">
                      {project.tagline}
                    </p>

                    <dl className="mt-5 space-y-4">
                      {[
                        { term: 'The problem', value: project.problem, tone: 'text-funky-accent' },
                        { term: 'The approach', value: project.approach, tone: 'text-cyber-blue' },
                        { term: 'The outcome', value: project.outcome, tone: 'text-primary-green' },
                      ]
                        .filter((row) => row.value)
                        .map((row) => (
                          <div key={row.term} className="border-l-2 border-primary-green/20 pl-4">
                            <dt
                              className={cn(
                                'text-[11px] font-bold uppercase tracking-[0.18em]',
                                row.tone
                              )}
                            >
                              {row.term}
                            </dt>
                            <dd className="mt-1 font-sans text-fluid-sm leading-relaxed text-text-muted text-pretty">
                              {row.value}
                            </dd>
                          </div>
                        ))}
                    </dl>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => setActiveTag(tag)}
                          aria-label={`Filter projects by ${tag}`}
                          className="inline-flex min-h-[28px] items-center border border-primary-green/20 bg-primary-green/5 px-2 py-1 text-[11px] text-primary-green/80 transition-colors hover:border-primary-green/60 hover:text-primary-green"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 items-center gap-2 border border-primary-green/50 bg-primary-green/5 px-4 text-fluid-xs font-bold uppercase tracking-wider text-primary-green transition-colors hover:bg-primary-green hover:text-black"
                      >
                        <Github className="h-3.5 w-3.5" aria-hidden="true" />
                        View source
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-10 items-center gap-2 border border-cyber-blue/40 px-4 text-fluid-xs font-bold uppercase tracking-wider text-cyber-blue transition-colors hover:bg-cyber-blue/10"
                        >
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                          Live demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* GitHub activity */}
      <Section wide className="border-t border-primary-green/15 py-16 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Open source"
            title="Latest from GitHub"
            subtitle="Pulled live from the public API — the most recently updated repositories, unfiltered."
          />
          <a
            href={`https://github.com/${personalInfo.github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline inline-flex shrink-0 items-center gap-1.5 text-fluid-sm font-bold uppercase tracking-wider text-primary-green"
          >
            All repos <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-10">
          <GithubProjects username={personalInfo.github} />
        </div>
      </Section>
    </>
  );
};

export default Projects;
