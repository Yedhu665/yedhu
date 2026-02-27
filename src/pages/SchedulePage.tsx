import { useState } from "react";
import { CalendarDays, Clock, MapPin, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const timeSlots = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];
const days = [
  { day: "Mon", date: "10", active: false },
  { day: "Tue", date: "11", active: false },
  { day: "Wed", date: "12", active: true },
  { day: "Thu", date: "13", active: false },
  { day: "Fri", date: "14", active: false },
  { day: "Sat", date: "15", active: false },
  { day: "Sun", date: "16", active: false },
];

export default function SchedulePage() {
  const [selectedDay, setSelectedDay] = useState(2);
  const [selectedTime, setSelectedTime] = useState(1);

  return (
    <div className="px-5 pt-14 pb-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-2xl font-bold text-foreground mb-1">Schedule Pickup</h1>
        <p className="text-sm text-muted-foreground">Choose your preferred date and time</p>
      </motion.div>

      {/* Date Selector */}
      <ScrollReveal>
        <div className="flex items-center gap-2 mb-2">
          <CalendarDays className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground">Select Date</h2>
        </div>
        <p className="text-xs text-muted-foreground mb-4">February 2026</p>

        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-none">
          {days.map((d, i) => (
            <motion.button
              key={i}
              className={`flex-shrink-0 w-14 py-3 rounded-2xl flex flex-col items-center gap-1 border transition-all ${
                selectedDay === i
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-surface-2 text-muted-foreground border-border/50 hover:border-primary/40"
              }`}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedDay(i)}
            >
              <span className="text-[10px] font-medium uppercase">{d.day}</span>
              <span className="text-lg font-bold">{d.date}</span>
            </motion.button>
          ))}
        </div>
      </ScrollReveal>

      {/* Time Slots */}
      <ScrollReveal delay={0.1}>
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground">Select Time</h2>
        </div>

        <div className="grid grid-cols-4 gap-2 mb-8">
          {timeSlots.map((time, i) => (
            <motion.button
              key={i}
              className={`py-3 rounded-xl text-xs font-medium border transition-all ${
                selectedTime === i
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-surface-2 text-muted-foreground border-border/50 hover:border-primary/40"
              }`}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedTime(i)}
            >
              {time}
            </motion.button>
          ))}
        </div>
      </ScrollReveal>

      {/* Address */}
      <ScrollReveal delay={0.2}>
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground">Pickup Address</h2>
        </div>

        <motion.div
          className="glass-card p-4 flex items-center gap-4 mb-8"
          whileTap={{ scale: 0.98 }}
        >
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-foreground text-sm">Home</h4>
            <p className="text-xs text-muted-foreground truncate">West Bay, Tower 5, Apt 1204, Doha</p>
          </div>
          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
            <Check className="w-3 h-3 text-primary" />
          </div>
        </motion.div>
      </ScrollReveal>

      {/* Summary & CTA */}
      <ScrollReveal delay={0.3}>
        <div className="glass-card p-5 mb-6">
          <h3 className="font-semibold text-foreground mb-3">Pickup Summary</h3>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Service</span>
              <span className="text-foreground font-medium">DH Waste Collection</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Date</span>
              <span className="text-foreground font-medium">Wed, Feb 12</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Time</span>
              <span className="text-foreground font-medium">{timeSlots[selectedTime]}</span>
            </div>
          </div>
          <div className="border-t border-border/50 pt-3 flex justify-between">
            <span className="text-muted-foreground text-sm">Estimated Cost</span>
            <span className="text-primary font-bold">QAR 35</span>
          </div>
        </div>

        <Button
          className="w-full h-14 rounded-2xl bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90"
          size="lg"
        >
          Confirm Pickup
        </Button>
      </ScrollReveal>
    </div>
  );
}
