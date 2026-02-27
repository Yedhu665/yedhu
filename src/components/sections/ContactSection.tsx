import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "West Bay, Doha, Qatar",
    subvalue: "P.O. Box 12345",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+974 4000 0000",
    subvalue: "+974 5000 0000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@tharwah.qa",
    subvalue: "support@tharwah.qa",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Sun - Thu: 8AM - 6PM",
    subvalue: "Fri - Sat: Closed",
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Start a Conversation
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to transform your waste management? Contact us today for a personalized quote.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <ScrollReveal direction="right">
            <motion.div
              className="bg-card rounded-3xl p-8 lg:p-10 shadow-apple-md"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-foreground mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12 rounded-xl border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12 rounded-xl border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    placeholder="+974 5000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12 rounded-xl border-border/50 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us about your waste management needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-32 rounded-xl border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Send Message
                  <Send className="w-5 h-5" />
                </Button>
              </form>
            </motion.div>
          </ScrollReveal>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <ScrollReveal key={info.label} delay={index * 0.1} direction="left">
                  <motion.div
                    className="flex gap-4 p-5 rounded-2xl bg-card shadow-apple-sm hover:shadow-apple-md transition-shadow"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">{info.label}</h4>
                      <p className="font-semibold text-foreground">{info.value}</p>
                      <p className="text-sm text-muted-foreground">{info.subvalue}</p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            {/* Map placeholder */}
            <ScrollReveal delay={0.4} direction="up">
              <div className="relative h-80 rounded-3xl overflow-hidden bg-muted shadow-apple-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115529.0088627694!2d51.42818366953125!3d25.28544899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x1cfa88cf2f4b9c91!2sDoha%2C%20Qatar!5e0!3m2!1sen!2s!4v1704900000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Map overlay card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-card/95 backdrop-blur-sm rounded-2xl shadow-apple-md">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Tharwah Headquarters</p>
                      <p className="text-sm text-muted-foreground">West Bay, Doha, Qatar</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
