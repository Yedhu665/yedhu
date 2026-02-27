import { Bell, Leaf, ArrowRight, Trash2, Recycle, TrendingUp, Gift, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="px-5 pt-14 pb-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-8"
      >
        <div>
          <p className="text-muted-foreground text-sm">Good Morning 👋</p>
          <h1 className="text-2xl font-bold text-foreground">Welcome back</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="relative w-11 h-11 rounded-2xl bg-surface-2 flex items-center justify-center border border-border/50">
            <Bell className="w-5 h-5 text-muted-foreground" />
            <span className="absolute top-2 right-2.5 w-2 h-2 rounded-full bg-primary" />
          </button>
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary to-eco-lime flex items-center justify-center">
            <Leaf className="w-5 h-5 text-primary-foreground" />
          </div>
        </div>
      </motion.div>

      {/* Wallet Card */}
      <ScrollReveal>
        <motion.div
          className="glow-card p-6 mb-6 bg-gradient-to-br from-surface-2 to-surface-1 border border-border/30"
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate("/wallet")}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Gift className="w-4 h-4 text-accent" />
              <span className="text-sm text-muted-foreground">Eco Rewards</span>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="text-3xl font-bold text-foreground mb-1">2,450 <span className="text-lg text-primary font-semibold">pts</span></div>
          <p className="text-xs text-muted-foreground">Earned from 32 pickups this month</p>
        </motion.div>
      </ScrollReveal>

      {/* Main Service Cards */}
      <ScrollReveal delay={0.1}>
        <h2 className="text-lg font-semibold text-foreground mb-4">Our Services</h2>
      </ScrollReveal>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <ScrollReveal delay={0.15}>
          <motion.button
            className="glass-card p-5 text-left group"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/services")}
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
              <Trash2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">DH Waste</h3>
            <p className="text-xs text-muted-foreground">Sanitary waste pickup</p>
            <div className="mt-3 flex items-center gap-1 text-primary text-xs font-medium">
              Book now <ArrowRight className="w-3 h-3" />
            </div>
          </motion.button>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <motion.button
            className="glass-card p-5 text-left group"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/services")}
          >
            <div className="w-12 h-12 rounded-2xl bg-accent/15 flex items-center justify-center mb-4 group-hover:bg-accent/25 transition-colors">
              <Recycle className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Scrap Pickup</h3>
            <p className="text-xs text-muted-foreground">Recyclable collection</p>
            <div className="mt-3 flex items-center gap-1 text-accent text-xs font-medium">
              Book now <ArrowRight className="w-3 h-3" />
            </div>
          </motion.button>
        </ScrollReveal>
      </div>

      {/* Upcoming Pickup */}
      <ScrollReveal delay={0.25}>
        <h2 className="text-lg font-semibold text-foreground mb-4">Upcoming Pickup</h2>
        <motion.div
          className="glass-card p-5 flex items-center gap-4"
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate("/track")}
        >
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Trash2 className="w-7 h-7 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-foreground">DH Waste Collection</h4>
            <p className="text-sm text-muted-foreground">Tomorrow, 9:00 AM</p>
          </div>
          <div className="stat-pill bg-primary/15 text-primary">
            Scheduled
          </div>
        </motion.div>
      </ScrollReveal>

      {/* Impact Stats */}
      <ScrollReveal delay={0.3}>
        <h2 className="text-lg font-semibold text-foreground mt-8 mb-4">Your Impact</h2>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Collected", value: "125kg", icon: Trash2, color: "text-primary", bg: "bg-primary/10" },
            { label: "CO₂ Saved", value: "45kg", icon: Leaf, color: "text-eco-lime", bg: "bg-eco-lime/10" },
            { label: "Recycled", value: "89%", icon: TrendingUp, color: "text-accent", bg: "bg-accent/10" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="glass-card p-4 text-center"
              whileHover={{ y: -2 }}
            >
              <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center mx-auto mb-2`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div className={`text-lg font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-[10px] text-muted-foreground mt-0.5">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
