import { Trash2, Recycle, AlertTriangle, Building2, Home, Zap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const wasteTypes = [
  { icon: Trash2, label: "General Waste", desc: "Household & sanitary", color: "text-primary", bg: "bg-primary/10", border: "border-primary/20" },
  { icon: Recycle, label: "Recyclables", desc: "Paper, plastic, metal", color: "text-eco-lime", bg: "bg-eco-lime/10", border: "border-eco-lime/20" },
  { icon: AlertTriangle, label: "Hazardous", desc: "Chemical & medical", color: "text-destructive", bg: "bg-destructive/10", border: "border-destructive/20" },
  { icon: Building2, label: "Commercial", desc: "Office & industrial", color: "text-electric", bg: "bg-electric/10", border: "border-electric/20" },
  { icon: Home, label: "Residential", desc: "Home waste pickup", color: "text-accent", bg: "bg-accent/10", border: "border-accent/20" },
  { icon: Zap, label: "E-Waste", desc: "Electronics disposal", color: "text-primary", bg: "bg-primary/10", border: "border-primary/20" },
];

export default function ServicesPage() {
  const navigate = useNavigate();

  return (
    <div className="px-5 pt-14 pb-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-2xl font-bold text-foreground mb-1">Select Service</h1>
        <p className="text-sm text-muted-foreground">Choose your waste type for pickup</p>
      </motion.div>

      {/* Waste Type Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {wasteTypes.map((type, index) => (
          <ScrollReveal key={type.label} delay={index * 0.05}>
            <motion.button
              className={`glass-card p-5 text-left w-full border ${type.border} group`}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/schedule")}
            >
              <div className={`w-12 h-12 rounded-2xl ${type.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <type.icon className={`w-6 h-6 ${type.color}`} />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-0.5">{type.label}</h3>
              <p className="text-[11px] text-muted-foreground">{type.desc}</p>
            </motion.button>
          </ScrollReveal>
        ))}
      </div>

      {/* Popular Package */}
      <ScrollReveal delay={0.3}>
        <h2 className="text-lg font-semibold text-foreground mb-4">Popular Package</h2>
        <motion.div
          className="glow-card p-6 bg-gradient-to-br from-primary/10 to-surface-2 border border-primary/20"
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate("/schedule")}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-foreground mb-1">Monthly Eco Bundle</h3>
              <p className="text-sm text-muted-foreground mb-3">8 pickups + free recycling bins</p>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary">QAR 299</span>
                <span className="text-sm text-muted-foreground line-through">QAR 450</span>
              </div>
            </div>
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-primary-foreground" />
            </div>
          </div>
        </motion.div>
      </ScrollReveal>
    </div>
  );
}
