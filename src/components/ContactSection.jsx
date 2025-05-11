import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "emailjs-com";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  

  const SERVICE_ID = "service_portfolio";
  const TEMPLATE_ID = "template_portfolio";
  const PUBLIC_KEY = "kx4XT4sAHWye047XU";

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        toast({
          title: "Message sent!",
          description: `Message sent successfully from ${e.target.from_name.value}.`,
        });
        e.target.reset();
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
        });
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:akshayrathore1197@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    akshayrathore1197@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+919111801197"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 9111801197
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground hover:text-primary transition-colors">
                    Bhopal, MP, India
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/akshayrathore9010"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>

                <a
                  href="https://www.instagram.com/akshay_rathore__/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                </a>

                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Twitter />
                </a>
              </div>
            </div>
          </div>

          <form
            className="bg-card p-8 rounded-lg shadow-xs space-y-6"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <div>
              <label
                htmlFor="from_name"
                className="block text-sm font-medium mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                placeholder="Akshay Rathore..."
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                placeholder="akshayrathore1197@gmail.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                placeholder="Hello, I'd like to talk about..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "cosmic-button w-full flex items-center justify-center gap-2"
              )}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
