import { Target, Leaf, Globe, Award } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To revolutionize waste management in Qatar through innovative technology and sustainable practices that protect our environment for future generations.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We're committed to achieving zero-waste goals by maximizing recycling, reducing landfill dependency, and promoting circular economy principles.",
  },
  {
    icon: Globe,
    title: "Environmental Impact",
    description: "Every action we take is measured against its environmental benefit, ensuring our operations contribute positively to Qatar's ecosystem.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in waste collection, processing, and customer service, backed by international certifications.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div>
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                About Tharwah
              </span>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Building a Greener Future for Qatar
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Founded with a vision to transform waste management in the region, Tharwah combines cutting-edge technology with environmental responsibility to deliver services that make a real difference.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="grid sm:grid-cols-2 gap-4">
                {values.slice(0, 2).map((value) => (
                  <div key={value.title} className="flex gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Visual / Values Grid */}
          <div className="grid gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1} direction="left">
                <motion.div
                  className="group flex gap-6 p-6 rounded-3xl bg-card shadow-apple-sm hover:shadow-apple-md transition-all duration-300"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
