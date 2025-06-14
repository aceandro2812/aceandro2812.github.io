
import ContactForm from '@/components/ContactForm';
import FloatingLetters from '@/components/FloatingLetters';
import { Mail, MessageCircle, Phone, MapPin, Sparkles } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative min-h-[calc(100vh-theme(space.14))]">
      {/* Enhanced background patterns */}
      <div className="absolute inset-0 pattern-diagonal opacity-15"></div>
      <div className="absolute top-20 left-1/4 w-20 h-20 border-2 border-accent/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-16 h-16 border-2 border-primary/20 rounded-lg rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <FloatingLetters />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageCircle className="w-8 h-8 text-primary animate-pulse" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-glow">
              Let's Connect
            </h1>
            <Sparkles className="w-8 h-8 text-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <div className="relative">
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Hi, I'm <span className="text-primary font-bold text-xl sm:text-2xl">Jatin Iyer</span>! 
              Ready to collaborate on your next 
              <span className="text-accent font-semibold"> innovative project</span>?
            </p>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-secondary/10 blur-lg -z-10 rounded-lg"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-card/60 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-primary/20 shadow-lg">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-6 flex items-center gap-2">
                <Mail className="w-6 h-6" />
                Get In Touch
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-foreground/80">jatiniyer404@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/5 border border-accent/10">
                  <Phone className="w-5 h-5 text-accent" />
                  <span className="text-foreground/80">Available for calls</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/5 border border-secondary/10">
                  <MapPin className="w-5 h-5 text-secondary" />
                  <span className="text-foreground/80">Mumbai, India</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 sm:p-8 rounded-xl border border-primary/20 backdrop-blur-sm">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-foreground mb-4">
                What I Can Help With
              </h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  AI & Machine Learning Solutions
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Full-Stack Web Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  Backend Architecture & APIs
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Technical Consulting
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-card/60 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-primary/20 shadow-lg">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-6">
              Send a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
