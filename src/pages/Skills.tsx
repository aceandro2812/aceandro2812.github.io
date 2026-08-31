import { usePortfolio } from '@/context/PortfolioContext';
import { Section, SectionHeading, Panel, Reveal } from '@/components/primitives';
import { getIcon } from '@/lib/icons';
import { cn } from '@/lib/utils';
import Seo from '@/components/Seo';

const LEVEL_LABELS: Record<number, string> = {
  1: 'Familiar',
  2: 'Working knowledge',
  3: 'Comfortable',
  4: 'Strong',
  5: 'Daily driver',
};

const SkillRow = ({
  name,
  icon,
  color,
  level = 3,
  note,
}: {
  name: string;
  icon: string;
  color: string;
  level?: number;
  note?: string;
}) => {
  const Icon = getIcon(icon);

  return (
    <li className="group flex items-center gap-3 border border-primary-green/10 bg-black/25 p-3 transition-colors hover:border-primary-green/40 hover:bg-primary-green/[0.04]">
      <span
        className="grid h-9 w-9 shrink-0 place-items-center border border-primary-green/20 bg-black/50 transition-colors"
        style={{ color }}
      >
        <Icon className="h-[18px] w-[18px]" />
      </span>

      <span className="min-w-0 flex-1">
        <span className="block truncate font-sans text-fluid-sm font-medium text-text-base">
          {name}
        </span>
        {note && <span className="block truncate text-[11px] text-text-muted">{note}</span>}
      </span>

      {/* Honest proficiency meter rather than a meaningless "95%" bar. */}
      <span
        className="flex shrink-0 items-center gap-1"
        title={LEVEL_LABELS[level]}
        aria-label={`${name}: ${LEVEL_LABELS[level]}`}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            aria-hidden="true"
            className={cn(
              'h-4 w-1 transition-colors',
              i < level ? 'bg-primary-green/80' : 'bg-text-muted/20'
            )}
          />
        ))}
      </span>
    </li>
  );
};

const Skills = () => {
  const { skills } = usePortfolio();

  return (
    <>
      <Seo
        title="Skills & Stack"
        description="The tools Jatin Iyer works with daily: LangGraph, LangChain, CrewAI, RAG and vector stores, FastAPI, Docker, AWS, PyTorch and more — with honest proficiency levels."
        path="/skills"
      />

      <Section wide className="py-14 sm:py-20">
        <SectionHeading
          as="h1"
          eyebrow="Capabilities"
          title="The stack, honestly rated"
          subtitle="Five bars means I use it most weeks and can debug it under pressure. Three means I'm productive but would check the docs. No inflated percentages."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {skills.map((category, index) => (
            <Reveal key={category.title} delay={index * 0.05}>
              <Panel className="h-full p-5 sm:p-6">
                <div className="mb-4">
                  <h2 className="font-display text-fluid-base font-bold uppercase tracking-wide text-primary-green">
                    {category.label ?? category.title}
                  </h2>
                  {category.blurb && (
                    <p className="mt-1 font-sans text-fluid-sm leading-relaxed text-text-muted">
                      {category.blurb}
                    </p>
                  )}
                </div>

                <ul className="grid gap-2">
                  {category.skills.map((skill) => (
                    <SkillRow key={skill.name} {...skill} />
                  ))}
                </ul>
              </Panel>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <Panel className="mt-8 p-5 sm:p-6">
            <h2 className="font-display text-fluid-base font-bold uppercase tracking-wide text-cyber-blue">
              What I'm learning right now
            </h2>
            <p className="mt-2 max-w-3xl font-sans text-fluid-sm leading-relaxed text-text-muted text-pretty">
              Evaluation harnesses for agentic systems — the part everyone skips. If you can't
              measure whether an agent got better after a prompt change, you're guessing. I'm
              working through eval-driven development with LangSmith traces, plus the Model Context
              Protocol as a cleaner way to hand tools to models.
            </p>
          </Panel>
        </Reveal>
      </Section>
    </>
  );
};

export default Skills;
