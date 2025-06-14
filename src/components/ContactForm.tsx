// This component is no longer used but keeping for potential future use
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactForm = () => {
  return (
    <form className="space-y-6 w-full max-w-lg mx-auto">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Your Name" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="your@email.com" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" placeholder="Your message..." rows={5} />
      </div>
      <Button type="submit" className="w-full" variant="secondary">Send Message</Button>
    </form>
  )
}

export default ContactForm;
