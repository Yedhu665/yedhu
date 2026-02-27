import { ArrowRight, Phone, Mail, Linkedin, CheckCircle, Zap, Shield } from "lucide-react";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";

const floatingChips = [
  { icon: Zap, label: "Playwright", delay: 0.8, position: "top-[18%] right-[6%]", color: "text-primary" },
  { icon: Shield, label: "Postman", delay: 1.0, position: "top-[40%] right-[2%]", color: "text-primary" },
  { icon: CheckCircle, label: "2+ Years Exp", delay: 1.2, position: "bottom-[32%] right-[5%]", color: "text-primary" },
];

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-background">
      {/* ── Grid layout: photo left, content right ── */}
      <div className="flex flex-col lg:flex-row min-h-screen">

        {/* ── LEFT — Full-height portrait ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative w-full lg:w-[42%] h-[55vh] lg:h-screen flex-shrink-0 overflow-hidden"
        >
          {/* Photo */}
          <img
            src={profilePhoto}
            alt="Yedhukrishna JC"
            className="w-full h-full object-cover object-top"
          />

          {/* Gradient overlay at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-background" />

          {/* Name badge overlaid on photo (mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="absolute bottom-6 left-6 right-6 lg:hidden"
          >
            <div className="bg-foreground/90 backdrop-blur-xl rounded-2xl px-5 py-4 text-background">
              <p className="text-xs font-semibold uppercase tracking-widest opacity-70 mb-1">Software Tester</p>
              <h1 className="text-2xl font-bold leading-tight">Yedhukrishna JC</h1>
              <p className="text-xs opacity-60 mt-1">Automation & Manual Testing</p>
            </div>
          </motion.div>

          {/* Floating chips — desktop only */}
          {floatingChips.map((chip) => (
            <motion.div
              key={chip.label}
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.5, delay: chip.delay }}
              className={`absolute ${chip.position} hidden lg:flex items-center gap-2 bg-background/90 backdrop-blur-xl border border-border rounded-full px-4 py-2 shadow-sm`}
            >
              <chip.icon className={`w-4 h-4 ${chip.color}`} />
              <span className="text-xs font-semibold text-foreground">{chip.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* ── RIGHT — Content ── */}
        <div className="flex-1 flex items-center">
          <div className="w-full px-6 lg:px-16 xl:px-20 py-16 lg:pt-36">

            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-8 border border-primary/20"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for opportunities
            </motion.div>

            {/* Name — hidden on mobile (shown in overlay) */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="hidden lg:block text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[0.95] mb-4"
            >
              Yedhukrishna
              <br />
              <span className="text-primary">JC</span>
            </motion.h1>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <p className="text-lg md:text-xl font-semibold text-foreground mb-2">
                Software Tester
              </p>
              <p className="text-sm text-muted-foreground mb-1 font-medium">
                Automation & Manual Testing
              </p>
              <p className="text-muted-foreground/70 text-sm mb-10 max-w-md leading-relaxed">
                Ensuring quality through smart testing and automation — from functional coverage
                to end-to-end Playwright suites.
              </p>
            </motion.div>

            {/* Stat row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex gap-8 mb-10"
            >
              {[
                { value: "2+", label: "Years Exp." },
                { value: "3", label: "Tools Mastered" },
                { value: "100%", label: "Quality Focus" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-foreground">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 mb-12"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-85 transition-all group"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full border-2 border-border text-foreground text-sm font-semibold hover:bg-muted/60 transition-all"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Contact links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="flex flex-wrap gap-5 text-muted-foreground"
            >
              <a href="tel:+917025942479" className="flex items-center gap-2 hover:text-foreground transition-colors text-sm group">
                <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </span>
                Phone
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=krishyadhu2001@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors text-sm group">
                <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </span>
                Email
              </a>
              <a href="https://www.linkedin.com/in/yedhukrishna-jc/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors text-sm group">
                <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Linkedin className="w-3.5 h-3.5" />
                </span>
                LinkedIn
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
        </div>
      </motion.div>
    </section>
  );
}
