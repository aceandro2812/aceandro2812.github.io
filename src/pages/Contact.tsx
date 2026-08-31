import { useState } from 'react';
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Send,
  Copy,
  Check,
  Download,
  Loader2,
  Clock,
} from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';
import { Section, SectionHeading, Panel, Reveal, Chip } from '@/components/primitives';
import { downloadVCard } from '@/components/CommandPalette';
import Seo from '@/components/Seo';
import { toast } from 'sonner';

type Status = 'idle' | 'sending' | 'sent';

const Contact = () => {
  const { contact, socialLinks, personalInfo } = usePortfolio();
  const [status, setStatus] = useState<Status>('idle');
  const [copied, setCopied] = useState(false);

  const formspreeId = import.meta.env.VITE_FORMSPREE_ID as string | undefined;

  /**
   * The old form was theatre: it faked a 2.5s "encrypting" delay and threw the
   * message away. Now it either POSTs to Formspree (when configured) or falls
   * back to a prefilled mailto, so a message always reaches an inbox.
   */
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '');
    const email = String(data.get('email') ?? '');
    const message = String(data.get('message') ?? '');

    setStatus('sending');

    if (formspreeId) {
      try {
        const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: data,
        });
        if (!response.ok) throw new Error('Form service rejected the request');
        setStatus('sent');
        form.reset();
        toast.success('Message sent — Jatin will reply soon.');
        return;
      } catch {
        toast.error('Sending failed. Opening your mail client instead.');
      }
    }

    // Fallback: hand off to the visitor's mail client with everything filled in.
    const subject = encodeURIComponent(`Portfolio enquiry from ${name || 'a visitor'}`);
    const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setStatus('sent');
    form.reset();
    setTimeout(() => setStatus('idle'), 4000);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      toast.success('Email copied');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error(`Copy blocked — the address is ${contact.email}`);
    }
  };

  const inputClass =
    'w-full border border-primary-green/20 bg-black/50 px-3 py-2.5 font-sans text-fluid-sm text-text-base outline-none transition-colors placeholder:text-text-muted/50 focus:border-primary-green';

  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with Jatin Iyer about AI/ML engineering roles, agentic system builds or collaborations. Usually replies within a day."
        path="/contact"
      />

      <Section className="py-14 sm:py-20">
        <SectionHeading
          as="h1"
          eyebrow="Get in touch"
          title="Let's talk about what you're building"
          subtitle="Roles, collaborations, or just a hard problem you want a second opinion on. I read everything and reply to anything that isn't a template."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          {/* Form */}
          <Reveal>
            <Panel className="p-5 sm:p-7">
              <h2 className="font-display text-fluid-base font-bold uppercase tracking-wide text-text-base">
                Send a message
              </h2>
              <p className="mt-1 font-sans text-fluid-sm text-text-muted">
                {formspreeId
                  ? 'Goes straight to my inbox.'
                  : 'Opens your mail app with everything prefilled — nothing is stored here.'}
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-fluid-xs uppercase tracking-wider text-text-muted">
                    Your name
                  </label>
                  <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} placeholder="Ada Lovelace" />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-fluid-xs uppercase tracking-wider text-text-muted">
                    Your email
                  </label>
                  <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} placeholder="you@company.com" />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-fluid-xs uppercase tracking-wider text-text-muted">
                    Message
                  </label>
                  <textarea id="message" name="message" required rows={5} className={`${inputClass} resize-y`} placeholder="What are you working on?" />
                </div>

                <button
                  type="submit"
                  disabled={status !== 'idle'}
                  className="cyber-card inline-flex h-12 w-full items-center justify-center gap-2 border border-primary-green bg-primary-green text-fluid-sm font-bold uppercase tracking-wider text-black transition-colors hover:bg-primary-green/85 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'sending' && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
                  {status === 'sent' && <Check className="h-4 w-4" aria-hidden="true" />}
                  {status === 'idle' && <Send className="h-4 w-4" aria-hidden="true" />}
                  {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Message sent' : 'Send message'}
                </button>

                <p className="flex items-center gap-1.5 text-[11px] text-text-muted/70">
                  <Clock className="h-3 w-3" aria-hidden="true" />
                  Typical reply time: within one working day.
                </p>
              </form>
            </Panel>
          </Reveal>

          {/* Direct channels */}
          <Reveal delay={0.08}>
            <div className="space-y-4">
              <Panel className="p-5 sm:p-6">
                <h2 className="font-display text-fluid-base font-bold uppercase tracking-wide text-text-base">
                  Or reach me directly
                </h2>

                <div className="mt-4 space-y-2.5">
                  <div className="flex items-center gap-3 border border-primary-green/15 bg-black/30 p-3">
                    <Mail className="h-4 w-4 shrink-0 text-primary-green" aria-hidden="true" />
                    <a href={`mailto:${contact.email}`} className="min-w-0 flex-1 truncate font-sans text-fluid-sm text-text-base hover:text-primary-green">
                      {contact.email}
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      aria-label="Copy email address"
                      className="shrink-0 text-text-muted transition-colors hover:text-primary-green"
                    >
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>

                  {[
                    { icon: Github, label: `github.com/${contact.github}`, href: socialLinks.github },
                    { icon: Linkedin, label: 'LinkedIn profile', href: socialLinks.linkedin },
                  ].map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 border border-primary-green/15 bg-black/30 p-3 transition-colors hover:border-primary-green/50 hover:bg-primary-green/5"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-primary-green" aria-hidden="true" />
                      <span className="min-w-0 flex-1 truncate font-sans text-fluid-sm text-text-base">
                        {label}
                      </span>
                    </a>
                  ))}

                  <div className="flex items-center gap-3 border border-primary-green/15 bg-black/30 p-3">
                    <MapPin className="h-4 w-4 shrink-0 text-primary-green" aria-hidden="true" />
                    <span className="font-sans text-fluid-sm text-text-base">{contact.location}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    downloadVCard();
                    toast.success('Contact card saved');
                  }}
                  className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 border border-cyber-blue/40 text-fluid-xs font-bold uppercase tracking-wider text-cyber-blue transition-colors hover:bg-cyber-blue/10"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Save contact card (.vcf)
                </button>
              </Panel>

              <Panel className="p-5 sm:p-6">
                <Chip tone="green">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-green motion-safe:animate-pulse" />
                  {personalInfo.availability}
                </Chip>
                <p className="mt-3 font-sans text-fluid-sm leading-relaxed text-text-muted text-pretty">
                  Best fit: applied AI / ML engineering, agentic systems, or GenAI product work.
                  Happy to talk remote or Mumbai-based. If you're unsure whether your problem needs
                  AI at all, that's a conversation I enjoy having.
                </p>
              </Panel>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
};

export default Contact;
