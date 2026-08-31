import { useEffect, useState, type RefObject } from 'react';

interface Options {
  rootMargin?: string;
  threshold?: number | number[];
  /** Stop observing after the first intersection. Default: true. */
  once?: boolean;
}

/**
 * Reveals content as it scrolls into view.
 *
 * Defaults to `once: true` — the previous implementation re-animated elements
 * every time they left and re-entered the viewport, which made scrolling back
 * up feel broken.
 */
export function useInView<T extends Element>(
  ref: RefObject<T>,
  { rootMargin = '0px 0px -12% 0px', threshold = 0.1, once = true }: Options = {}
): boolean {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, rootMargin, threshold, once]);

  return inView;
}

export default useInView;
