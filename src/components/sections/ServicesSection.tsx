import { Home, Building2, Recycle, AlertTriangle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";

const services = [
  {
    icon: Home,
    title: "Residential Collection",
    description: "Regular doorstep waste collection with flexible scheduling for homes and apartments.",
    features: ["Weekly pickup", "Recycling bins included", "SMS reminders"],
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Building2,
    title: "Commercial Management",
    description: "Complete waste solutions for businesses, offices, and industrial facilities.",
    features: ["Custom schedules", "Compliance reports", "Volume discounts"],
    color: "text-stat-teal",
    bgColor: "bg-stat-teal/10",
  },
  {
    icon: Recycle,
    title: "Recycling Services",
    description: "State-of-the-art recycling programs that maximize material recovery.",
    features: ["Multi-stream sorting", "Certified processing", "Impact tracking"],
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: AlertTriangle,
    title: "Hazardous Waste",
    description: "Safe handling and disposal of dangerous materials with full regulatory compliance.",
    features: ["Certified handling", "Safe transport", "Documentation"],
    color: "text-stat-lime",
    bgColor: "bg-stat-lime/10",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Complete Waste Management Solutions
          </h2>
          <p className="text-xl text-muted-foreground">
            From residential pickups to industrial waste handling, we provide comprehensive services tailored to your needs.
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ScrollReveal
              key={service.title}
              delay={index * 0.1}
              direction="up"
            >
              <motion.div
                className="service-card group h-full"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`w-14 h-14 rounded-2xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-7 h-7 ${service.color}`} />
                </div>

                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full ${service.bgColor.replace('/10', '')}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:bg-transparent">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal className="text-center mt-16" delay={0.4}>
          <Button variant="hero" size="lg">
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
