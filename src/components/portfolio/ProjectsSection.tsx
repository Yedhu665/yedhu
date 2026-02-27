import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { ExternalLink, TestTube2, Bug } from "lucide-react";

const projects = [
  {
    title: "Aakri App",
    description: "A waste management application tested end-to-end across user and provider platforms using modern automation tools.",
    tags: ["Playwright", "JMeter", "API Testing", "Mobile Testing", "Dashboard QA"],
    icon: TestTube2,
    highlights: ["Automated end-to-end regression suite using Playwright", "API validation and authentication testing", "Performance testing using JMeter", "Cross-platform web and mobile testing", "Dashboard functional and UI testing"],
  },
  {
    title: "Tharwah",
    description: "A waste management application tested end-to-end across user and provider platforms using modern automation tools.",
    tags: ["Playwright", "JMeter", "API Testing", "Mobile Testing", "Dashboard QA"],
    icon: Bug,
    highlights: ["Automated end-to-end regression suite using Playwright", "API validation and authentication testing", "Performance testing using JMeter", "Cross-platform web and mobile testing", "Dashboard functional and UI testing"],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="section-spacing">
      <div className="section-container">
        <ScrollReveal>
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Projects</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-16">
            Featured<br />work.
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.15}>
              <motion.div
                className="glass-card p-8 h-full group"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <project.icon className="w-7 h-7 text-primary" />
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>

                <ul className="space-y-2 mb-6">
                  {project.highlights.map((h, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="skill-tag text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
