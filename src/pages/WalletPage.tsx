import { Gift, ArrowUpRight, ArrowDownLeft, Leaf, ShoppingBag, Zap, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const transactions = [
  { label: "DH Waste Pickup", points: "+120", type: "earn", date: "Today", icon: Leaf },
  { label: "Scrap Recycling", points: "+350", type: "earn", date: "Yesterday", icon: TrendingUp },
  { label: "Redeemed - Coffee Voucher", points: "-500", type: "spend", date: "Feb 8", icon: ShoppingBag },
  { label: "Monthly Bonus", points: "+200", type: "earn", date: "Feb 5", icon: Zap },
  { label: "General Waste", points: "+80", type: "earn", date: "Feb 3", icon: Leaf },
];

const redeemOptions = [
  { label: "Coffee Voucher", points: "500 pts", image: "☕" },
  { label: "Plant a Tree", points: "1,000 pts", image: "🌳" },
  { label: "Free Pickup", points: "750 pts", image: "🚛" },
];

export default function WalletPage() {
  return (
    <div className="px-5 pt-14 pb-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <h1 className="text-2xl font-bold text-foreground mb-1">Eco Wallet</h1>
        <p className="text-sm text-muted-foreground">Your green rewards</p>
      </motion.div>

      {/* Balance Card */}
      <ScrollReveal>
        <div className="glow-card p-6 mb-8 bg-gradient-to-br from-primary/20 via-surface-2 to-accent/10 border border-primary/20">
          <div className="flex items-center gap-2 mb-3">
            <Gift className="w-5 h-5 text-accent" />
            <span className="text-sm text-muted-foreground">Total Balance</span>
          </div>
          <div className="text-4xl font-bold text-foreground mb-1">
            2,450 <span className="text-xl text-primary">pts</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div className="stat-pill bg-primary/15 text-primary">
              <TrendingUp className="w-3 h-3" />
              +750 this month
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Redeem Options */}
      <ScrollReveal delay={0.1}>
        <h2 className="font-semibold text-foreground mb-4">Redeem Rewards</h2>
        <div className="flex gap-3 overflow-x-auto pb-2 mb-8 scrollbar-none">
          {redeemOptions.map((opt) => (
            <motion.button
              key={opt.label}
              className="glass-card p-4 flex-shrink-0 w-32 text-center border border-border/50"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="text-3xl mb-2">{opt.image}</div>
              <h4 className="text-xs font-semibold text-foreground mb-1">{opt.label}</h4>
              <p className="text-[10px] text-primary font-medium">{opt.points}</p>
            </motion.button>
          ))}
        </div>
      </ScrollReveal>

      {/* Transaction History */}
      <ScrollReveal delay={0.2}>
        <h2 className="font-semibold text-foreground mb-4">History</h2>
        <div className="space-y-3">
          {transactions.map((tx, i) => (
            <motion.div
              key={i}
              className="glass-card p-4 flex items-center gap-3"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.05 }}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                tx.type === "earn" ? "bg-primary/10" : "bg-accent/10"
              }`}>
                <tx.icon className={`w-5 h-5 ${tx.type === "earn" ? "text-primary" : "text-accent"}`} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-foreground">{tx.label}</h4>
                <p className="text-xs text-muted-foreground">{tx.date}</p>
              </div>
              <div className="flex items-center gap-1">
                {tx.type === "earn" ? (
                  <ArrowDownLeft className="w-3 h-3 text-primary" />
                ) : (
                  <ArrowUpRight className="w-3 h-3 text-accent" />
                )}
                <span className={`text-sm font-semibold ${
                  tx.type === "earn" ? "text-primary" : "text-accent"
                }`}>
                  {tx.points}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
