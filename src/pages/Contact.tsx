
import { useState, useEffect } from "react";
import { Github, Linkedin, Instagram, Facebook } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Contact = () => {
  const [showSocials, setShowSocials] = useState(false);
  const [loadedItems, setLoadedItems] = useState<number[]>([]);
  const [showBounce, setShowBounce] = useState(true);

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/yourprofile",
      color: "hover:text-blue-500",
      bgColor: "hover:bg-blue-500/10"
    },
    {
      name: "GitHub", 
      icon: Github,
      url: "https://github.com/yourprofile",
      color: "hover:text-gray-300",
      bgColor: "hover:bg-gray-500/10"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/yourprofile", 
      color: "hover:text-pink-500",
      bgColor: "hover:bg-pink-500/10"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/yourprofile",
      color: "hover:text-blue-600", 
      bgColor: "hover:bg-blue-600/10"
    }
  ];

  useEffect(() => {
    // Stop bounce animation after 2 seconds
    const bounceTimer = setTimeout(() => {
      setShowBounce(false);
    }, 2000);

    // Start showing socials after profile loads
    const socialsTimer = setTimeout(() => {
      setShowSocials(true);
    }, 1500);

    return () => {
      clearTimeout(bounceTimer);
      clearTimeout(socialsTimer);
    };
  }, []);

  useEffect(() => {
    if (showSocials) {
      // Animate social links one by one
      socialLinks.forEach((_, index) => {
        setTimeout(() => {
          setLoadedItems(prev => [...prev, index]);
        }, index * 200);
      });
    }
  }, [showSocials]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-theme(space.14))] text-center py-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 space-y-8">
        {/* Profile Photo with Bounce then Glow Animation */}
        <div className="relative">
          <div className={showBounce ? "animate-bounce" : ""}>
            <Avatar className={`w-48 h-48 mx-auto border-4 border-primary/20 shadow-2xl shadow-primary/20 transition-all duration-1000 ${!showBounce ? 'shadow-primary/30 shadow-xl ring-2 ring-primary/10 ring-offset-2 ring-offset-background' : ''}`}>
              <AvatarImage 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" 
                alt="Profile"
                className="object-cover"
              />
              <AvatarFallback className="text-6xl font-bold bg-gradient-to-br from-primary to-secondary text-white">
                AI
              </AvatarFallback>
            </Avatar>
          </div>
          
          {/* Subtle pulsing ring around avatar - only when not bouncing */}
          {!showBounce && (
            <>
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse opacity-60" style={{ animationDuration: '3s' }}></div>
              <div className="absolute inset-1 rounded-full border border-secondary/10 animate-pulse opacity-40" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
            </>
          )}
        </div>

        {/* Title and Description */}
        <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <h1 className="text-5xl font-display font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Let's Connect
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI & Backend Architect | Exploring the confluence of technology and wisdom
          </p>
        </div>

        {/* Loading Text */}
        {!showSocials && (
          <div className="flex items-center justify-center space-x-2 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
            <span className="text-muted-foreground font-medium">Loading connections...</span>
          </div>
        )}

        {/* Social Media Links */}
        {showSocials && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              const isLoaded = loadedItems.includes(index);
              
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    group relative p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm
                    transition-all duration-500 transform hover:scale-105 hover:border-primary/50
                    ${social.bgColor} ${social.color}
                    ${isLoaded 
                      ? 'opacity-100 translate-y-0 animate-fade-in-up' 
                      : 'opacity-0 translate-y-8'
                    }
                  `}
                  style={{ 
                    animationDelay: `${index * 0.2}s`,
                    transitionDelay: `${index * 0.1}s`
                  }}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative flex flex-col items-center space-y-3">
                    <div className="relative">
                      <Icon className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
                      
                      {/* Loading ring for each icon */}
                      {!isLoaded && (
                        <div className="absolute inset-0 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                      )}
                    </div>
                    
                    <span className="font-medium text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                      {social.name}
                    </span>
                  </div>

                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-primary/30 transition-colors duration-300"></div>
                </a>
              );
            })}
          </div>
        )}

        {/* Bottom text */}
        {showSocials && (
          <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
            <p className="text-muted-foreground">
              Click any platform to connect with me
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
