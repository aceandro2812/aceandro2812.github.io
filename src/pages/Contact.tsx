
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center py-12">
      <h1 className="text-4xl font-display font-bold animate-fade-in-up">Contact Me</h1>
      <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision.
      </p>
      <div className="mt-12 w-full animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
