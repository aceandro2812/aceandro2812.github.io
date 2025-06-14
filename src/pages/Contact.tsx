import FloatingLetters from '@/components/FloatingLetters';
import { MessageCircle, Sparkles, Brain, Cpu, Zap, Github, Linkedin, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const socialLinkClasses = {
  primary: 'border-primary/50 hover:bg-primary/10 hover:border-primary group-hover:shadow-primary/20 text-primary',
  accent: 'border-accent/50 hover:bg-accent/10 hover:border-accent group-hover:shadow-accent/20 text-accent',
  secondary: 'border-secondary/50 hover:bg-secondary/10 hover:border-secondary group-hover:shadow-secondary/20 text-secondary',
};

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com', color: 'primary' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com', color: 'accent' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com', color: 'secondary' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com', color: 'primary' },
] as const;

const Contact = () => {
  return (
    <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative min-h-[calc(100vh-theme(space.14))]">
      {/* Enhanced AI-themed background patterns */}
      <div className="absolute inset-0 pattern-diagonal opacity-15"></div>
      <div className="absolute top-20 left-1/4 w-24 h-24 border-2 border-accent/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-20 h-20 border-2 border-primary/20 rounded-lg rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* AI Circuit Animations */}
      <div className="absolute top-32 right-20 animate-bounce" style={{ animationDelay: '0.5s' }}>
        <Brain className="w-12 h-12 text-accent/30" />
      </div>
      <div className="absolute bottom-32 left-20 animate-bounce" style={{ animationDelay: '1.5s' }}>
        <Cpu className="w-10 h-10 text-primary/30" />
      </div>
      <div className="absolute top-1/2 left-10 animate-bounce" style={{ animationDelay: '2.5s' }}>
        <Zap className="w-8 h-8 text-secondary/30" />
      </div>
      
      <FloatingLetters />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <MessageCircle className="w-7 h-7 text-primary animate-pulse" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-glow">
              Let's Connect
            </h1>
            <Sparkles className="w-7 h-7 text-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <div className="relative">
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Hi, I'm <span className="text-primary font-bold text-lg sm:text-xl">Jatin Iyer</span>! 
              Ready to collaborate on your next 
              <span className="text-accent font-semibold"> innovative AI project</span>?
            </p>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-secondary/10 blur-lg -z-10 rounded-lg"></div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-12 pt-8">
          {/* Animated avatar with glow */}
          <div className="relative animate-fade-in-up" style={{ animationDuration: '0.8s' }}>
            <div 
              className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary via-accent to-secondary opacity-70 blur-2xl animate-pulse"
              style={{ animationDelay: '0.5s', animationDuration: '4s' }}
            ></div>
            <Avatar className="relative w-48 h-48 sm:w-64 sm:h-64 border-4 border-primary/50 shadow-2xl">
              <AvatarImage src="/lovable-uploads/6bcc43fb-c89a-4b05-afcc-afd638ead9a6.png" alt="Jatin Iyer" />
              <AvatarFallback>JI</AvatarFallback>
            </Avatar>
          </div>
          
          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group animate-fade-in-up"
                  style={{ animationDelay: `${500 + index * 150}ms` }}
                >
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className={`
                      border-2 
                      ${socialLinkClasses[social.color]}
                      transition-all duration-300 transform
                      group-hover:scale-110 group-hover:shadow-lg
                      flex items-center gap-2
                    `}
                  >
                    <Icon className="w-6 h-6" />
                    <span className="text-foreground">{social.name}</span>
                  </Button>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
