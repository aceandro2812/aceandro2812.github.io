import { BookOpen, MapPin, User } from 'lucide-react';
import { Section, SectionHeading, Panel, Reveal, Chip } from '@/components/primitives';
import Seo from '@/components/Seo';

const studies = [
  {
    title: 'Krishna Yajurveda',
    file: 'KRISHNA_YAJURVEDA',
    image: '/brahm.webp',
    alt: 'Illustration representing Vedic study',
    teachers: [
      'Mahamahopadhyaya Sheshadrinatha Sastrigal',
      'Veda Ratnam Dr Ramesh Dravid Ghanapathi (Kashi)',
      'Rajesh Iyer',
    ],
    location: 'Shankara Shanti Nilayam Patashala, Kalady, Kerala',
    note: 'Taught online following the post-Covid adaptation of the patashala.',
    body: 'An oral tradition preserved with error-correcting recitation patterns — ghana, jata and krama — that encode the same text in multiple interleavings so corruption in transmission becomes detectable. It is, functionally, a checksum designed three thousand years before the term existed.',
  },
  {
    title: 'Sanskrit Language & Grammar',
    file: 'SANSKRIT_GRAMMAR',
    image: '/sans.webp',
    alt: 'Illustration representing Sanskrit study',
    teachers: [
      'Swami Guhatmananda Saraswati',
      'Brahmaleen Swami Omakarananda Brahmendra Saraswati',
      'Rajesh Iyer',
    ],
    location: 'Traditional guru–shishya instruction',
    note: 'Ongoing study.',
    body: "Pāṇini's Aṣṭādhyāyī describes the whole of Sanskrit in roughly 4,000 ordered rules, with meta-rules governing which applies when conflicts arise. It is a formal generative grammar with an inheritance hierarchy and conflict resolution — the concepts we now teach as compiler design.",
  },
];

const VedicLearnings = () => (
  <>
    <Seo
      title="Archives — Vedic & Sanskrit Studies"
      description="Jatin Iyer's parallel study of the Krishna Yajurveda and Sanskrit grammar, and what Pāṇini's formal rule systems have in common with modern computer science."
      path="/vedic-learnings"
    />

    <Section className="py-14 sm:py-20">
      <SectionHeading
        as="h1"
        eyebrow="The other archive"
        title="Ancient algorithms"
        subtitle="Alongside the engineering work I study the Krishna Yajurveda and Sanskrit grammar. This isn't a hobby section — it is where I learned that precise, rule-based systems are older than the machines we run them on."
      />

      <Reveal>
        <Panel className="mt-8 border-l-2 border-l-cyber-blue p-5 sm:p-6">
          <p className="font-sans text-fluid-base leading-relaxed text-text-base text-pretty">
            Pāṇini wrote a complete formal grammar for a natural language around the 5th century
            BCE. Backus and Naur arrived at a comparable notation for programming languages in 1959
            — which is why the field sometimes calls it{' '}
            <span className="text-primary-green">Panini–Backus form</span>. Studying one tradition
            makes the other easier to see clearly.
          </p>
        </Panel>
      </Reveal>

      <div className="mt-8 space-y-5">
        {studies.map((study, i) => (
          <Reveal key={study.title} delay={i * 0.06}>
            <Panel interactive className="group overflow-hidden">
              <div className="grid gap-0 md:grid-cols-[minmax(0,16rem)_1fr]">
                <div className="relative aspect-[4/3] overflow-hidden border-b border-primary-green/15 md:aspect-auto md:border-b-0 md:border-r">
                  <img
                    src={study.image}
                    alt={study.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover opacity-70 transition-[transform,opacity] duration-700 group-hover:scale-105 group-hover:opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base-bg/80 to-transparent" />
                </div>

                <div className="p-5 sm:p-7">
                  <Chip tone="blue" className="mb-3">
                    <BookOpen className="h-3 w-3" aria-hidden="true" />
                    {study.file}
                  </Chip>

                  <h2 className="font-display text-fluid-lg font-bold uppercase tracking-wide text-text-base">
                    {study.title}
                  </h2>

                  <p className="mt-3 max-w-2xl font-sans text-fluid-sm leading-relaxed text-text-muted text-pretty">
                    {study.body}
                  </p>

                  <div className="mt-5 border-t border-primary-green/10 pt-4">
                    <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-primary-green">
                      Studied under
                    </p>
                    <ul className="space-y-1.5">
                      {study.teachers.map((teacher) => (
                        <li key={teacher} className="flex items-start gap-2">
                          <User className="mt-0.5 h-3 w-3 shrink-0 text-text-muted" aria-hidden="true" />
                          <span className="font-sans text-fluid-sm text-text-base/85">{teacher}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-3 flex items-start gap-2 font-sans text-fluid-xs text-text-muted">
                      <MapPin className="mt-0.5 h-3 w-3 shrink-0" aria-hidden="true" />
                      <span>
                        {study.location}
                        <span className="block italic text-text-muted/70">{study.note}</span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </Panel>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-12 border-t border-primary-green/15 pt-8 text-center">
          <p className="font-sanskrit text-fluid-xl leading-relaxed text-primary-green glow-text">
            गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः
          </p>
          <p className="mt-3 font-sans text-fluid-sm italic text-text-muted">
            “The teacher is Brahma, the teacher is Vishnu, the teacher is Maheshvara.”
          </p>
        </div>
      </Reveal>
    </Section>
  </>
);

export default VedicLearnings;
