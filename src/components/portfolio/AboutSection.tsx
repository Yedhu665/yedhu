import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "2+ years of experience in software testing",
  "Expertise in Playwright, MCP Server, JMeter & Postman",
  "Hands-on with the Aakri waste management application",
  "Focus on quality, usability & performance testing",
];

export function AboutSection() {
  return (
    <section id="about" className="section-spacing bg-secondary/50">
      <div className="section-container">
        <ScrollReveal>
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">About Me</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
            Passionate about<br />delivering quality.
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-start mt-10">
          <ScrollReveal delay={0.1}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a dedicated Software Tester with a strong foundation in both automation and manual testing. 
              With experience across web and mobile platforms, I specialize in ensuring applications meet 
              the highest standards of quality, usability, and performance. I thrive in agile environments 
              and love collaborating with cross-functional teams to ship reliable software.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border/50"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
