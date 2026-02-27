import { TrendingUp, Leaf, Users, Recycle } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";

const stats = [
  {
    icon: Recycle,
    value: "125,000",
    unit: "tons",
    label: "Waste Collected",
    description: "Total waste collected and processed this year",
    color: "from-primary to-primary/80",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Leaf,
    value: "45,000",
    unit: "kg",
    label: "CO₂ Saved",
    description: "Carbon emissions prevented through recycling",
    color: "from-accent to-accent/80",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: Users,
    value: "15,000+",
    unit: "",
    label: "Active Customers",
    description: "Households and businesses we serve",
    color: "from-stat-teal to-stat-teal/80",
    iconBg: "bg-stat-teal/10",
    iconColor: "text-stat-teal",
  },
  {
    icon: TrendingUp,
    value: "98%",
    unit: "",
    label: "Recycling Rate",
    description: "Materials successfully recycled or repurposed",
    color: "from-stat-lime to-stat-lime/80",
    iconBg: "bg-stat-lime/10",
    iconColor: "text-stat-lime",
  },
];

export function AnalyticsSection() {
  return (
    <section id="analytics" className="section-padding bg-gradient-to-b from-primary to-eco-dark text-primary-foreground overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6">
            Environmental Impact
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-primary-foreground/80">
            Real-time analytics showcasing our commitment to a sustainable Qatar.
          </p>
        </ScrollReveal>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1} direction="up">
              <motion.div
                className="group relative bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-primary-foreground/15 transition-all duration-500"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${stat.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`w-7 h-7 ${stat.iconColor}`} />
                </div>

                {/* Value */}
                <div className="mb-4">
                  <span className="text-4xl lg:text-5xl font-bold">{stat.value}</span>
                  {stat.unit && (
                    <span className="text-lg text-primary-foreground/70 ml-2">{stat.unit}</span>
                  )}
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
                <p className="text-sm text-primary-foreground/70">{stat.description}</p>

                {/* Decorative gradient */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Additional metrics */}
        <ScrollReveal delay={0.4}>
          <div className="mt-16 grid md:grid-cols-3 gap-8 p-8 rounded-3xl bg-primary-foreground/5 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">365</div>
              <div className="text-primary-foreground/70">Days of Operation</div>
            </div>
            <div className="text-center border-x border-primary-foreground/10">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-primary-foreground/70">Collection Vehicles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">200+</div>
              <div className="text-primary-foreground/70">Team Members</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
