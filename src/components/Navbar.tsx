
import { NavLink } from 'react-router-dom';
import { Code, BookOpen, Star, User, Mail, Book } from 'lucide-react';

const navLinks = [
  { to: '/', text: 'Home', icon: Star },
  { to: '/experience', text: 'Experience', icon: Code },
  { to: '/education', text: 'Education', icon: BookOpen },
  { to: '/skills', text: 'Skills', icon: User },
  { to: '/vedic-learnings', text: 'Vedic Learnings', icon: Book },
  { to: '/contact', text: 'Contact', icon: Mail },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <NavLink to="/" className="mr-6 flex items-center space-x-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="font-bold font-display">Portfolio</span>
        </NavLink>
        <nav className="flex items-center gap-4 text-sm lg:gap-6">
          {navLinks.map(({ to, text, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-foreground/60'
                }`
              }
            >
              {text}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
