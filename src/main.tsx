import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// GitHub Pages has no server-side rewrite, so public/404.html bounces unknown
// paths back here with the original route in `?spa-redirect=`. Restore it
// before React Router mounts so deep links behave like a normal site.
const params = new URLSearchParams(window.location.search);
const redirect = params.get('spa-redirect');
if (redirect) {
  params.delete('spa-redirect');
  const rest = params.toString();
  const target = redirect.replace(/~and~/g, '&') + (rest ? `?${rest}` : '') + window.location.hash;
  window.history.replaceState(null, '', target);
}

// Apply the saved colour theme before first paint to avoid a flash.
try {
  const stored = localStorage.getItem('portfolio-theme');
  if (stored && stored !== 'matrix') {
    document.documentElement.setAttribute('data-theme', stored);
  }
} catch {
  /* private mode — fall back to the default theme */
}

createRoot(document.getElementById('root')!).render(<App />);
