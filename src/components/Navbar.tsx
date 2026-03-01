import { NavLink, useLocation } from 'react-router-dom';
import { Code, BookOpen, User, Mail, Briefcase, TerminalSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const navLinks = [
  { to: '/', text: '[ HOME ]', icon: TerminalSquare },
  { to: '/experience', text: '[ EXPERIENCE ]', icon: Code },
  { to: '/projects', text: '[ PROJECTS ]', icon: Briefcase },
  { to: '/skills', text: '[ SKILLS ]', icon: User },
  { to: '/vedic-learnings', text: '[ ARCHIVES ]', icon: BookOpen },
  { to: '/contact', text: '[ CONTACT ]', icon: Mail },
];

const Navbar = () => {
  const location = useLocation();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  return (
    <motion.div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100]"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
    >
      {/* Outer spinning targeting ring */}
      <div className="absolute -inset-3 sm:-inset-4 rounded-full border border-primary-green/20 border-dashed animate-[spin_10s_linear_infinite] pointer-events-none" />
      <div className="absolute -inset-2 sm:-inset-3 rounded-full border border-cyber-blue/10 border-dotted animate-[spin_15s_linear_infinite_reverse] pointer-events-none" />

      <nav className="relative flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 rounded-full border border-primary-green/40 bg-black/80 backdrop-blur-xl shadow-[0_0_30px_rgba(0,255,65,0.2)] overflow-x-auto max-w-[95vw] scrollbar-hide pointer-events-auto">
        {navLinks.map(({ to, text, icon: Icon }) => {
          const isActive = location.pathname === to || (to === '/experience' && location.pathname.startsWith('/experience')) || (to === '/projects' && location.pathname.startsWith('/projects'));
          const isHovered = hoveredPath === to;

          return (
            <NavLink
              key={to}
              to={to}
              onMouseEnter={() => setHoveredPath(to)}
              onMouseLeave={() => setHoveredPath(null)}
              className={cn(
                "group relative flex items-center justify-center h-10 sm:h-12 px-3 sm:px-4 rounded-full transition-colors duration-300 z-10 font-mono focus:outline-none",
                isActive ? "text-black font-bold" : "text-primary-green/60 hover:text-primary-green"
              )}
            >
              {/* Active Background Pill */}
              {isActive && (
                <motion.div
                  layoutId="navbar-active-pill"
                  className="absolute inset-0 rounded-full bg-primary-green shadow-[0_0_15px_rgba(0,255,65,0.8)] border border-white/40 -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}

              {/* Hover highlight (non-active) */}
              <AnimatePresence>
                {!isActive && isHovered && (
                  <motion.div
                    layoutId="navbar-hover-glow"
                    className="absolute inset-0 rounded-full bg-primary-green/15 border border-primary-green/40 -z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  />
                )}
              </AnimatePresence>

              <div className="flex items-center gap-2">
                <Icon className={cn("w-5 h-5 sm:w-5 sm:h-5 transition-transform duration-300", isHovered && !isActive && "scale-110")} />

                {/* Text reveal for hover or active */}
                <motion.div
                  className="overflow-hidden whitespace-nowrap flex items-center"
                  initial={false}
                  animate={{
                    width: (isHovered || isActive) ? 'auto' : 0,
                    opacity: (isHovered || isActive) ? 1 : 0,
                    marginLeft: (isHovered || isActive) ? '4px' : 0
                  }}
                  transition={{ duration: 0.3, ease: 'backOut' }}
                >
                  <span className={cn("text-xs sm:text-sm tracking-widest", isActive ? "text-black" : "")}>
                    {text}
                  </span>
                </motion.div>
              </div>

              {/* Status Dot */}
              <AnimatePresence>
                {isActive && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black rounded-full shadow-[0_0_5px_rgba(0,0,0,0.5)] border border-primary-green"
                  />
                )}
                {!isActive && isHovered && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-green rounded-full shadow-[0_0_10px_#00FF41] animate-ping"
                  />
                )}
              </AnimatePresence>
            </NavLink>
          );
        })}
      </nav>
    </motion.div>
  );
};

export default Navbar;
