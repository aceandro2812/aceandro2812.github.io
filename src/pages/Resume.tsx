import { Printer, Download, Mail, Github, Linkedin, MapPin, Globe } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';
import { Section } from '@/components/primitives';
import { downloadVCard } from '@/components/CommandPalette';
import Seo from '@/components/Seo';
import { toast } from 'sonner';

/**
 * Print-optimised one-pager.
 *
 * Recruiters overwhelmingly want a document, not a website. Rather than
 * maintaining a separate PDF that drifts out of date, this renders the same
 * config through print styles — "Save as PDF" always produces a current CV.
 */
const Resume = () => {
  const { personalInfo, contact, socialLinks, experience, education, certifications, skills, projects } =
    usePortfolio();

  return (
    <>
      <Seo
        title="Résumé"
        description="One-page résumé for Jatin Iyer — AI Solution Developer specialising in agentic systems, RAG and production ML. Print or save as PDF."
        path="/resume"
      />

      <Section className="py-10 sm:py-14">
        {/* Toolbar — hidden when printing */}
        <div className="no-print mb-8 flex flex-wrap items-center justify-between gap-3 border border-primary-green/20 bg-surface/60 p-4">
          <div>
            <p className="font-display text-fluid-base font-bold uppercase tracking-wide text-text-base">
              Résumé
            </p>
            <p className="mt-0.5 font-sans text-fluid-xs text-text-muted">
              Always current — generated from the same data as this site.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex h-10 items-center gap-2 border border-primary-green bg-primary-green px-4 text-fluid-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-primary-green/85"
            >
              <Printer className="h-3.5 w-3.5" aria-hidden="true" />
              Print / Save PDF
            </button>
            <button
              type="button"
              onClick={() => {
                downloadVCard();
                toast.success('Contact card saved');
              }}
              className="inline-flex h-10 items-center gap-2 border border-cyber-blue/40 px-4 text-fluid-xs font-bold uppercase tracking-wider text-cyber-blue transition-colors hover:bg-cyber-blue/10"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              .vcf
            </button>
          </div>
        </div>

        {/* Document */}
        <article className="mx-auto max-w-3xl border border-primary-green/15 bg-surface/40 p-6 print:border-0 print:bg-white print:p-0 sm:p-10">
          <header className="border-b border-primary-green/25 pb-5 print:border-black/25">
            <h1 className="font-display text-fluid-2xl font-bold uppercase tracking-wide text-text-base print:text-black">
              {personalInfo.name}
            </h1>
            <p className="mt-1 font-sans text-fluid-base font-medium text-cyber-blue print:text-black">
              {personalInfo.title}
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 font-sans text-fluid-xs text-text-muted print:text-black">
              <li className="inline-flex items-center gap-1.5">
                <Mail className="h-3 w-3 print:hidden" aria-hidden="true" />
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li className="inline-flex items-center gap-1.5">
                <MapPin className="h-3 w-3 print:hidden" aria-hidden="true" />
                {contact.location}
              </li>
              <li className="inline-flex items-center gap-1.5">
                <Github className="h-3 w-3 print:hidden" aria-hidden="true" />
                <a href={socialLinks.github}>github.com/{contact.github}</a>
              </li>
              <li className="inline-flex items-center gap-1.5">
                <Linkedin className="h-3 w-3 print:hidden" aria-hidden="true" />
                <a href={socialLinks.linkedin}>LinkedIn</a>
              </li>
              <li className="inline-flex items-center gap-1.5">
                <Globe className="h-3 w-3 print:hidden" aria-hidden="true" />
                aceandro2812.github.io
              </li>
            </ul>
          </header>

          <section className="print-block mt-6">
            <h2 className="mb-2 font-display text-fluid-sm font-bold uppercase tracking-[0.18em] text-primary-green print:text-black">
              Profile
            </h2>
            <p className="font-sans text-fluid-sm leading-relaxed text-text-muted print:text-black">
              {personalInfo.subheadline}
            </p>
          </section>

          <section className="print-block mt-6">
            <h2 className="mb-3 font-display text-fluid-sm font-bold uppercase tracking-[0.18em] text-primary-green print:text-black">
              Experience
            </h2>
            <div className="space-y-4">
              {experience.map((item) => (
                <div key={`${item.company}-${item.role}`} className="print-block">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-sans text-fluid-sm font-bold text-text-base print:text-black">
                      {item.role} · <span className="text-cyber-blue print:text-black">{item.company}</span>
                    </h3>
                    <span className="font-mono text-[11px] text-text-muted print:text-black">
                      {item.duration}
                    </span>
                  </div>
                  {item.highlights && (
                    <ul className="mt-1.5 list-disc space-y-1 pl-4 font-sans text-fluid-xs leading-relaxed text-text-muted marker:text-primary-green print:text-black">
                      {item.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  )}
                  <p className="mt-1.5 font-mono text-[10px] uppercase tracking-wide text-text-muted/70 print:text-black">
                    {item.tech.join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="print-block mt-6">
            <h2 className="mb-3 font-display text-fluid-sm font-bold uppercase tracking-[0.18em] text-primary-green print:text-black">
              Selected projects
            </h2>
            <div className="space-y-3">
              {projects.map((p) => (
                <div key={p.title} className="print-block">
                  <h3 className="font-sans text-fluid-sm font-bold text-text-base print:text-black">
                    {p.name ?? p.title} <span className="font-normal text-text-muted print:text-black">— {p.tagline}</span>
                  </h3>
                  <p className="mt-0.5 font-sans text-fluid-xs leading-relaxed text-text-muted print:text-black">
                    {p.outcome ?? p.description}
                  </p>
                  <a href={p.link} className="font-mono text-[10px] text-primary-green print:text-black">
                    {p.link}
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section className="print-block mt-6">
            <h2 className="mb-2 font-display text-fluid-sm font-bold uppercase tracking-[0.18em] text-primary-green print:text-black">
              Technical skills
            </h2>
            <dl className="space-y-1.5">
              {skills.map((cat) => (
                <div key={cat.title} className="flex flex-wrap gap-x-2 font-sans text-fluid-xs">
                  <dt className="font-bold text-text-base print:text-black">
                    {cat.label ?? cat.title}:
                  </dt>
                  <dd className="text-text-muted print:text-black">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <section className="print-block">
              <h2 className="mb-2 font-display text-fluid-sm font-bold uppercase tracking-[0.18em] text-primary-green print:text-black">
                Education
              </h2>
              {education.map((e) => (
                <div key={e.institution} className="mb-2">
                  <p className="font-sans text-fluid-xs font-bold text-text-base print:text-black">
                    {e.degree}
                  </p>
                  <p className="font-sans text-fluid-xs text-text-muted print:text-black">
                    {e.institution} · {e.duration}
                  </p>
                </div>
              ))}
            </section>

            <section className="print-block">
              <h2 className="mb-2 font-display text-fluid-sm font-bold uppercase tracking-[0.18em] text-primary-green print:text-black">
                Certifications
              </h2>
              {certifications.map((c) => (
                <div key={c.degree} className="mb-2">
                  <p className="font-sans text-fluid-xs font-bold text-text-base print:text-black">
                    {c.degree}
                  </p>
                  <p className="font-sans text-fluid-xs text-text-muted print:text-black">
                    {c.institution} · {c.duration}
                  </p>
                </div>
              ))}
            </section>
          </div>
        </article>
      </Section>
    </>
  );
};

export default Resume;
