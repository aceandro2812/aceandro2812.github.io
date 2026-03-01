import { MessageCircle, Github, Linkedin, Instagram, Facebook, Terminal, Shield, Lock, Send, Network } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { ScrambleText } from '@/components/ScrambleText';

const socialLinks = [
  { name: 'GITHUB', icon: Github, href: 'https://github.com/aceandro2812', color: 'primary' },
  { name: 'LINKEDIN', icon: Linkedin, href: 'https://linkedin.com/jatin-iyer', color: 'accent' },
  { name: 'INSTAGRAM', icon: Instagram, href: 'https://instagram.com', color: 'secondary' },
  { name: 'FACEBOOK', icon: Facebook, href: 'https://facebook.com', color: 'primary' },
] as const;

const Contact = () => {
  const [isEncrypting, setIsEncrypting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success'>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEncrypting(true);

    // Simulate encryption and sending
    setTimeout(() => {
      setIsEncrypting(false);
      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 2500);
  };

  return (
    <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative min-h-[calc(100vh-theme(space.14))] font-mono pb-32">
      {/* Background patterns */}
      <div className="absolute inset-0 pattern-grid opacity-10"></div>

      <div className="max-w-5xl mx-auto relative z-10 pt-16">
        <div className="text-center mb-16">
          <div className="flex flex-col items-center justify-center gap-2 mb-6">
            <div className="flex items-center gap-3">
              <Lock className="w-8 h-8 text-funky-accent animate-pulse" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-widest text-text-base drop-shadow-[0_0_10px_rgba(255,0,60,0.4)]">
                <ScrambleText text="SECURE_CHANNEL" />
              </h1>
            </div>
            <span className="text-xl text-cyber-blue opacity-80 tracking-widest font-bold">[CONTACT_ME]</span>
          </div>
          <p className="text-text-muted text-sm sm:text-base max-w-2xl mx-auto uppercase tracking-widest border-b border-funky-accent/20 pb-4 inline-block">
            [ESTABLISHING_ENCRYPTED_UPLINK...]
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-8">

          {/* Left Column: Form */}
          <div className="cyber-card bg-black/50 border border-funky-accent/50 p-8 shadow-[0_0_20px_rgba(255,0,60,0.15)] relative">
            <div className="absolute top-0 right-0 p-2 text-xs text-funky-accent bg-funky-accent/10 border-b border-l border-funky-accent/50 flex items-center gap-2">
              <Shield className="w-3 h-3" />
              E2E ENCRYPTION ACTIVE
            </div>

            <h2 className="text-xl font-bold text-funky-accent mb-6 flex items-center gap-2">
              <Terminal className="w-5 h-5" />
              TRANSMIT_MESSAGE
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs text-text-muted uppercase tracking-widest">IDENTIFICATION_STRING [NAME]</label>
                <input
                  type="text"
                  required
                  className="w-full bg-black border-2 border-primary-green/20 focus:border-primary-green text-primary-green p-3 outline-none transition-colors"
                  placeholder="e.g. AGENT_007"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs text-text-muted uppercase tracking-widest">RETURN_NODE [EMAIL]</label>
                <input
                  type="email"
                  required
                  className="w-full bg-black border-2 border-primary-green/20 focus:border-primary-green text-primary-green p-3 outline-none transition-colors"
                  placeholder="e.g. intel@mi6.gov"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs text-text-muted uppercase tracking-widest">ENCRYPTED_PAYLOAD [MESSAGE]</label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-black border-2 border-primary-green/20 focus:border-primary-green text-primary-green p-3 outline-none transition-colors resize-none"
                  placeholder="Enter classified intel here..."
                ></textarea>
              </div>

              <Button
                type="submit"
                disabled={isEncrypting || submitStatus === 'success'}
                className="w-full h-12 cyber-card bg-funky-accent/20 hover:bg-funky-accent text-funky-accent hover:text-white border border-funky-accent transition-all uppercase tracking-widest font-bold grid place-items-center"
              >
                {isEncrypting ? (
                  <ScrambleText text="[ENCRYPTING_AND_SENDING...]" />
                ) : submitStatus === 'success' ? (
                  "TRANSMISSION_SUCCESSFUL"
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" /> EXECUTE_TRANSMISSION
                  </span>
                )}
              </Button>
            </form>
          </div>

          {/* Right Column: External Nodes */}
          <div className="space-y-8 flex flex-col justify-center">
            <div>
              <h2 className="text-sm font-bold text-cyber-blue mb-4 flex items-center gap-2 border-b border-cyber-blue/20 pb-2 inline-flex uppercase">
                <Network className="w-4 h-4" />
                EXTERNAL_NODES
              </h2>

              <div className="flex flex-col gap-4 mt-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex border border-primary-green/30 bg-black/40 hover:bg-primary-green/10 hover:border-primary-green transition-all p-4 items-center gap-4 w-full md:w-5/6"
                    >
                      <div className="p-2 border border-primary-green/50 bg-black text-primary-green group-hover:scale-110 group-hover:bg-primary-green group-hover:text-black transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-text-base group-hover:text-primary-green transition-colors font-bold tracking-widest">
                        {social.name}
                      </span>
                      <div className="ml-auto w-2 h-2 bg-primary-green rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="p-6 bg-black/40 border border-cyber-blue/30 text-xs text-text-muted mt-8">
              <p className="mb-2 font-bold text-cyber-blue">[SYSTEM_NOTICE]</p>
              <p>All transited data is subject to protocol verification. Unauthorized access attempts will be logged and traced.</p>
              <p className="mt-4 text-primary-green flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-green rounded-full animate-pulse inline-block" />
                STATUS: READY AND LISTENING
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
