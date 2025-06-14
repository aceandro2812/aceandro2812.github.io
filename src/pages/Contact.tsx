
import FloatingLetters from '@/components/FloatingLetters';
import { Mail, MessageCircle, Phone, MapPin, Sparkles, Brain, Cpu, Zap, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm p-8 rounded-2xl border-2 border-primary/30 shadow-2xl hover:shadow-primary/20 transition-all duration-300">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-8 flex items-center gap-3">
                <Mail className="w-7 h-7" />
                Get In Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <Mail className="w-6 h-6 text-primary" />
                  <span className="text-foreground/90 font-medium">jatiniyer404@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 hover:border-accent/40 transition-all duration-300">
                  <Phone className="w-6 h-6 text-accent" />
                  <span className="text-foreground/90 font-medium">Available for calls</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-secondary/10 to-secondary/5 border border-secondary/20 hover:border-secondary/40 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-secondary" />
                  <span className="text-foreground/90 font-medium">Mumbai, India</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 p-8 rounded-2xl border-2 border-secondary/30 backdrop-blur-sm">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-foreground mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-accent" />
                Connect with me
              </h3>
              <div className="flex gap-4">
                <Button size="lg" variant="outline" className="flex-1 border-2 border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
                <Button size="lg" variant="outline" className="flex-1 border-2 border-accent/50 hover:bg-accent/10 hover:border-accent transition-all duration-300">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>

          {/* AI Developer Showcase */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl border-2 border-primary/30 backdrop-blur-sm relative overflow-hidden">
              {/* Animated background pattern */}
              <div className="absolute inset-0 pattern-dots opacity-10"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-6 flex items-center gap-3">
                  <Brain className="w-7 h-7 text-primary animate-pulse" />
                  AI Expertise
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <span className="w-3 h-3 bg-primary rounded-full animate-pulse"></span>
                    <span className="text-foreground/90">Machine Learning</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/10 border border-accent/20">
                    <span className="w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
                    <span className="text-foreground/90">Neural Networks</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/10 border border-secondary/20">
                    <span className="w-3 h-3 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
                    <span className="text-foreground/90">Backend Systems</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <span className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></span>
                    <span className="text-foreground/90">AI Consulting</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack Visualization */}
            <div className="bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm p-8 rounded-2xl border-2 border-accent/30 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-accent mb-6 flex items-center gap-3">
                <Cpu className="w-7 h-7 animate-pulse" />
                Tech Arsenal
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {['Python', 'TensorFlow', 'PyTorch', 'Node.js', 'React', 'Docker'].map((tech, index) => (
                  <div 
                    key={tech}
                    className="text-center p-3 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 hover:border-accent/40 transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-foreground/90 font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
