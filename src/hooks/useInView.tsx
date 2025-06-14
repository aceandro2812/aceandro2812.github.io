
import { useState, useEffect, RefObject } from 'react';

interface Options extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

export const useInView = (ref: RefObject<Element>, options: Options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const { triggerOnce = false, ...observerOptions } = options;

  useEffect(() => {
    // Ensure IntersectionObserver is available
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else {
            if (!triggerOnce) {
                setIsInView(false);
            }
        }
      },
      observerOptions
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, triggerOnce, observerOptions]);

  return isInView;
};
