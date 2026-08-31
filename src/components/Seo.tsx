import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  path?: string;
}

const SITE = 'https://aceandro2812.github.io';

const setMeta = (selector: string, attr: 'name' | 'property', key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

/**
 * Per-route document metadata.
 *
 * The site previously shipped one static title and description for every page,
 * so search results and link previews were identical regardless of destination.
 */
export const Seo = ({ title, description, path = '' }: SeoProps) => {
  useEffect(() => {
    const full = title.includes('Jatin') ? title : `${title} · Jatin Iyer`;
    document.title = full;

    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', full);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', `${SITE}${path}`);
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', full);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = `${SITE}${path}`;
  }, [title, description, path]);

  return null;
};

export default Seo;
