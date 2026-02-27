import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Phone, Mail, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/917025942479?text=${message}`, '_blank');
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-spacing bg-secondary/50">
      <div className="section-container">
        <ScrollReveal>
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Contact</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-16">
            Let's work<br />together.
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal delay={0.1}>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                Have a project that needs testing? I'd love to hear about it. Reach out via any of the channels below or fill out the form.
              </p>
              <div className="space-y-4">
                <a href="tel:+917025942479" className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium text-foreground">+91 70259 42479</p>
                  </div>
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=krishyadhu2001@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">krishyadhu2001@gmail.com</p>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/yedhukrishna-jc/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="font-medium text-foreground">linkedin.com/in/yedhukrishna-jc</p>
                  </div>
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-12 px-4 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  maxLength={255}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-12 px-4 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">Message</label>
                <textarea
                  id="message"
                  required
                  maxLength={1000}
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-foreground"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                type="submit"
                className="w-full h-14 rounded-full bg-primary text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
