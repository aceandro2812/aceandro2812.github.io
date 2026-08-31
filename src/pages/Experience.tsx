import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { MapPin, Check } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';
import { Section, SectionHeading, Panel, Reveal, Chip } from '@/components/primitives';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import Seo from '@/components/Seo';

const Experience = () => {
  const { experience } = usePortfolio();
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end end'],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 28, restDelta: 0.001 });

  return (
    <>
      <Seo
        title="Experience"
        description="Five years from Java internships to shipping agentic AI systems in production at Mettler Toledo — roles, outcomes and the stack behind each."
        path="/experience"
      />

      <Section className="py-14 sm:py-20">
        <SectionHeading
          as="h1"
          eyebrow="Track record"
          title="Where I've built things"
          subtitle="Reverse chronological. Each entry leads with what changed as a result of the work, not a list of responsibilities."
        />

        <div ref={containerRef} className="relative mt-12">
          {/* Progress spine (desktop only) */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[7px] top-2 hidden w-px bg-primary-green/15 md:block"
          >
            {!reduced && (
              <motion.div
                style={{ scaleY }}
                className="h-full w-full origin-top bg-gradient-to-b from-primary-green via-cyber-blue to-funky-accent"
              />
            )}
          </div>

          <ol className="space-y-6 md:space-y-8">
            {experience.map((item, index) => (
              <li key={`${item.company}-${item.role}`} className="relative md:pl-10">
                {/* Node */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-6 hidden h-[15px] w-[15px] rotate-45 border-2 border-primary-green bg-base-bg md:block"
                  style={{ boxShadow: index === 0 ? '0 0 16px hsl(var(--brand) / 0.6)' : undefined }}
                />

                <Reveal delay={index * 0.05}>
                  <Panel interactive className="p-5 sm:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h2 className="font-display text-fluid-lg font-bold uppercase tracking-wide text-text-base">
                          {item.role}
                        </h2>
                        <p className="mt-1 font-sans text-fluid-base font-medium text-cyber-blue">
                          {item.company}
                        </p>
                      </div>
                      <div className="flex shrink-0 flex-col items-start gap-1.5 sm:items-end">
                        <Chip tone={index === 0 ? 'green' : 'muted'}>
                          {index === 0 && (
                            <span className="h-1.5 w-1.5 rounded-full bg-primary-green motion-safe:animate-pulse" />
                          )}
                          {item.duration}
                        </Chip>
                        {item.location && (
                          <span className="inline-flex items-center gap-1 text-[11px] text-text-muted">
                            <MapPin className="h-3 w-3" aria-hidden="true" />
                            {item.location}
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="mt-4 max-w-2xl font-sans text-fluid-sm leading-relaxed text-text-muted text-pretty">
                      {item.description}
                    </p>

                    {item.highlights && (
                      <ul className="mt-4 space-y-2">
                        {item.highlights.map((highlight) => (
                          <li key={highlight} className="flex gap-2.5">
                            <Check
                              className="mt-[3px] h-3.5 w-3.5 shrink-0 text-primary-green"
                              aria-hidden="true"
                            />
                            <span className="font-sans text-fluid-sm leading-relaxed text-text-base/85 text-pretty">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-5 flex flex-wrap gap-1.5 border-t border-primary-green/10 pt-4">
                      {item.tech.map((tech) => (
                        <span
                          key={tech}
                          className="border border-primary-green/20 bg-primary-green/5 px-2 py-0.5 text-[11px] text-primary-green/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Panel>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Section>
    </>
  );
};

export default Experience;
