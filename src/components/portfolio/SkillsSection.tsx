import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { Bot, Hand, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Automation Testing",
    icon: Bot,
    skills: ["Playwright (JavaScript)", "Selenium WebDriver", "End-to-End Testing", "Cross-Browser Testing", "Page Object Model"],
  },
  {
    title: "Manual Testing",
    icon: Hand,
    skills: ["Test Case Design", "Functional Testing", "Regression Testing", "Smoke & Sanity Testing", "Bug Tracking with JIRA", "STLC & SDLC"],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["Playwright", "JMeter", "Postman", "JIRA", "Git & GitHub", "VS Code", "Antigravity", "MCP Server"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="section-spacing">
      <div className="section-container">
        <ScrollReveal>
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Skills</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-16">
            What I bring to<br />the table.
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
            <ScrollReveal key={category.title} delay={i * 0.1}>
              <motion.div
                className="glass-card p-8 h-full"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-5">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag text-xs">
                      {skill}
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
