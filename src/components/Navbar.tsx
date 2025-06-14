
import { NavLink } from 'react-router-dom';
import { Code, BookOpen, Star, User, Mail, Book, Briefcase, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { to: '/', text: 'Home', icon: Star },
  { to: '/experience', text: 'Experience', icon: Code },
  { to: '/education', text: 'Education', icon: BookOpen },
  { to: '/projects', text: 'Projects', icon: Briefcase },
  { to: '/skills', text: 'Skills', icon: User },
  { to: '/vedic-learnings', text: 'Indic Education', icon: Book },
  { to: '/contact', text: 'Contact', icon: Mail },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center space-x-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="font-bold font-display text-sm sm:text-base">Jatin Iyer</span>
        </NavLink>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-4 text-sm">
          {navLinks.map(({ to, text, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `transition-colors hover:text-primary px-2 py-1 rounded-md ${
                  isActive ? 'text-primary bg-primary/10' : 'text-foreground/60'
                }`
              }
            >
              <span className="hidden lg:inline">{text}</span>
              <Icon className="h-4 w-4 lg:hidden" />
            </NavLink>
          ))}
        </nav>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="absolute top-14 left-0 right-0 bg-background/95 backdrop-blur border-b border-border/40 md:hidden">
            <nav className="flex flex-col p-4 space-y-2">
              {navLinks.map(({ to, text, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                      isActive ? 'text-primary bg-primary/10' : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
                    }`
                  }
                >
                  <Icon className="h-4 w-4" />
                  <span>{text}</span>
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
