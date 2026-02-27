import { Phone, MessageCircle, Check, Truck, Package, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const timeline = [
  { label: "Pickup Requested", time: "9:00 AM", completed: true },
  { label: "Collector Assigned", time: "9:05 AM", completed: true },
  { label: "On the Way", time: "9:20 AM", completed: true },
  { label: "Arriving Soon", time: "~9:35 AM", completed: false },
  { label: "Pickup Complete", time: "--", completed: false },
];

export default function TrackPage() {
  return (
    <div className="px-5 pt-14 pb-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-2xl font-bold text-foreground mb-1">Track Pickup</h1>
        <p className="text-sm text-muted-foreground">Order #TH-20260210-0042</p>
      </motion.div>

      {/* Map Placeholder */}
      <ScrollReveal>
        <div className="relative h-48 rounded-3xl overflow-hidden mb-6 bg-surface-2 border border-border/30">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 animate-pulse">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">Live tracking</p>
              <p className="text-xs text-primary font-medium">ETA: 15 mins</p>
            </div>
          </div>
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle, hsl(var(--muted-foreground)) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>
      </ScrollReveal>

      {/* Collector Details */}
      <ScrollReveal delay={0.1}>
        <div className="glass-card p-5 flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-eco-lime flex items-center justify-center flex-shrink-0">
            <span className="text-xl font-bold text-primary-foreground">AK</span>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-foreground">Ahmed Khan</h4>
            <p className="text-xs text-muted-foreground">Eco Collector • ⭐ 4.9</p>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Phone className="w-4 h-4 text-primary" />
            </button>
            <button className="w-10 h-10 rounded-xl bg-surface-2 flex items-center justify-center border border-border/50">
              <MessageCircle className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </div>
      </ScrollReveal>

      {/* Timeline */}
      <ScrollReveal delay={0.2}>
        <h2 className="font-semibold text-foreground mb-4">Pickup Status</h2>
        <div className="glass-card p-5">
          <div className="space-y-0">
            {timeline.map((step, i) => (
              <div key={step.label} className="flex gap-4">
                {/* Dot and line */}
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    step.completed ? "bg-primary" : "bg-surface-3 border border-border"
                  }`}>
                    {step.completed ? (
                      <Check className="w-4 h-4 text-primary-foreground" />
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-muted-foreground/40" />
                    )}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className={`w-0.5 h-10 ${step.completed ? "bg-primary/50" : "bg-border"}`} />
                  )}
                </div>
                {/* Content */}
                <div className="pb-6">
                  <h4 className={`text-sm font-medium ${step.completed ? "text-foreground" : "text-muted-foreground"}`}>
                    {step.label}
                  </h4>
                  <p className="text-xs text-muted-foreground">{step.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Vehicle Info */}
      <ScrollReveal delay={0.3}>
        <div className="glass-card p-4 mt-6 flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
            <Package className="w-5 h-5 text-accent" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-muted-foreground">Vehicle</p>
            <p className="text-sm font-medium text-foreground">Eco Van • QA-1234</p>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-primary" />
            <span className="text-xs text-primary font-medium">2.3 km away</span>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
