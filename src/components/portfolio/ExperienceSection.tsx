import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Tester",
    company: "Aakri Impact Pvt Ltd",
    period: "Apr 2024 – Present",
    points: [
      "End-to-end testing of waste management application",
      "Tested user-facing and provider-side apps",
      "Worked on dashboard modules, QR features, and chatbot",
      "Reported and tracked bugs using JIRA",
    ],
  },
  {
    role: "Software Tester Trainee",
    company: "STC Technologies",
    period: "Previous",
    points: [
      "Manual and automation testing internship",
      "Gained hands-on experience with Selenium and testing frameworks",
      "Participated in STLC and learned industry best practices",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="section-spacing bg-secondary/50">
      <div className="section-container">
        <ScrollReveal>
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Experience</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-16">
            Where I've<br />worked.
          </h2>
        </ScrollReveal>

        <div className="space-y-8 max-w-3xl">
          {experiences.map((exp, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="relative pl-8 border-l-2 border-primary/20">
                <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary" />
                <div className="glass-card p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <Briefcase className="w-4 h-4" />
                        <span className="text-sm">{exp.company}</span>
                      </div>
                    </div>
                    <span className="text-sm text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
