import { GraduationCap, Award, ExternalLink } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';
import { Section, SectionHeading, Panel, Reveal, Chip } from '@/components/primitives';
import type { EducationItem } from '@/config/types';
import Seo from '@/components/Seo';

const Card = ({ item, verified }: { item: EducationItem; verified?: boolean }) => {
  const inner = (
    <Panel interactive className="flex h-full flex-col p-5 sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="font-display text-fluid-base font-bold uppercase tracking-wide text-text-base">
            {item.degree}
          </h3>
          <p className="mt-1 font-sans text-fluid-sm font-medium text-cyber-blue">
            {item.institution}
          </p>
        </div>
        {item.link && (
          <ExternalLink
            className="h-4 w-4 shrink-0 text-text-muted transition-colors group-hover:text-primary-green"
            aria-hidden="true"
          />
        )}
      </div>

      <div className="mt-3">
        <Chip tone="muted">{item.duration}</Chip>
        {verified && item.link && (
          <Chip tone="green" className="ml-2">
            Verified
          </Chip>
        )}
      </div>

      <p className="mt-4 flex-1 font-sans text-fluid-sm leading-relaxed text-text-muted text-pretty">
        {item.description}
      </p>
    </Panel>
  );

  if (item.link) {
    return (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block h-full"
        aria-label={`${item.degree} — view credential`}
      >
        {inner}
      </a>
    );
  }
  return <div className="group h-full">{inner}</div>;
};

const Education = () => {
  const { education, certifications } = usePortfolio();

  return (
    <>
      <Seo
        title="Education & Certifications"
        description="B.E. Computer Science from SIES GST, plus specialist AI certifications from Google DeepMind, NVIDIA, Hugging Face and DeepLearning.AI."
        path="/education"
      />

      <Section wide className="py-14 sm:py-20">
        <SectionHeading
          as="h1"
          eyebrow="Foundations"
          title="Where the fundamentals came from"
          subtitle="A computer science degree for the theory, and a steady habit of certifications to keep pace with a field that reinvents itself every six months."
        />

        <div className="mt-10">
          <h2 className="mb-4 inline-flex items-center gap-2 font-display text-fluid-base font-bold uppercase tracking-wide text-primary-green">
            <GraduationCap className="h-4 w-4" aria-hidden="true" />
            Formal education
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {education.map((item, i) => (
              <Reveal key={item.institution} delay={i * 0.05}>
                <Card item={item} />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h2 className="mb-1 inline-flex items-center gap-2 font-display text-fluid-base font-bold uppercase tracking-wide text-primary-green">
            <Award className="h-4 w-4" aria-hidden="true" />
            Certifications
          </h2>
          <p className="mb-4 font-sans text-fluid-sm text-text-muted">
            Every certificate below links to the issuer for verification — click through.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {certifications.map((item, i) => (
              <Reveal key={item.degree} delay={i * 0.05}>
                <Card item={item} verified />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Education;
