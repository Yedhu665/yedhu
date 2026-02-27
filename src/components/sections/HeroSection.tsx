import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Recycle, Truck } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-secondary/50 to-background">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/5 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-8"
            >
              <Leaf className="w-4 h-4" />
              <span className="text-sm font-medium">Sustainable Solutions for Qatar</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hero-headline text-foreground mb-6"
            >
              Smart Waste Solutions for a{" "}
              <span className="text-primary">Cleaner Tomorrow</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="hero-subtext mx-auto lg:mx-0 mb-10"
            >
              Tharwah delivers innovative, eco-friendly waste management services that protect our environment and build a sustainable future for generations to come.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="hero" size="lg" className="group">
                Request Pickup
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="lg">
                Get a Quote
              </Button>
            </motion.div>

            {/* Stats preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-16"
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">15K+</div>
                <div className="text-sm text-muted-foreground">Active Customers</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Recycling Rate</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse" style={{ animationDuration: "4s" }} />
              
              {/* Floating icons */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-20 h-20 rounded-2xl bg-card shadow-apple-lg flex items-center justify-center float">
                <Recycle className="w-10 h-10 text-accent" />
              </div>
              
              <div className="absolute bottom-16 left-8 w-16 h-16 rounded-2xl bg-card shadow-apple-lg flex items-center justify-center float" style={{ animationDelay: "1s" }}>
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              
              <div className="absolute bottom-16 right-8 w-16 h-16 rounded-2xl bg-card shadow-apple-lg flex items-center justify-center float" style={{ animationDelay: "2s" }}>
                <Truck className="w-8 h-8 text-stat-teal" />
              </div>

              {/* Center content */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <div className="text-5xl font-bold mb-2">50K+</div>
                  <div className="text-sm opacity-90">Tons Recycled</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
        </div>
      </div>
    </section>
  );
}