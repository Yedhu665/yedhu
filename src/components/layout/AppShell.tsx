import { ReactNode } from "react";
import { Home, Package, CalendarDays, MapPin, Wallet } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const tabs = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Package, label: "Services", path: "/services" },
  { icon: CalendarDays, label: "Schedule", path: "/schedule" },
  { icon: MapPin, label: "Track", path: "/track" },
  { icon: Wallet, label: "Wallet", path: "/wallet" },
];

export function AppShell({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="app-shell">
      {children}

      {/* Bottom Tab Bar */}
      <div className="tab-bar">
        <div className="flex items-center justify-around py-2 px-2">
          {tabs.map((tab) => {
            const isActive = location.pathname === tab.path;
            return (
              <button
                key={tab.path}
                onClick={() => navigate(tab.path)}
                className="relative flex flex-col items-center gap-1 py-2 px-3 rounded-2xl transition-all duration-300"
              >
                {isActive && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute inset-0 bg-primary/10 rounded-2xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <tab.icon
                  className={`w-5 h-5 relative z-10 transition-colors duration-300 ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                />
                <span
                  className={`text-[10px] font-semibold relative z-10 transition-colors duration-300 ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
