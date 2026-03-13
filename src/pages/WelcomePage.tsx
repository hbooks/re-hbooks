import { Link } from "react-router-dom";
import { useState } from "react";

const WelcomePage = () => {
  const [hovered, setHovered] = useState<"visitor" | "insider" | null>(null);

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center max-w-2xl w-full space-y-12 animate-fade-in">
        <div className="space-y-4 animate-float">
          <h1 className="text-4xl md:text-6xl font-display font-light tracking-wide text-foreground">
            Welcome to Raphael's Exclusives Scenes
          </h1>
          <p className="text-lg text-muted-foreground font-body">
            You're in the right place.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-8 md:p-12 gold-glow animate-fade-in-delay-1 space-y-8">
          <p className="text-xl font-display text-foreground">
            What brings you here today?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/shop"
              className={`border border-accent text-accent px-8 py-4 rounded-md font-body font-medium text-lg transition-all duration-300 hover:bg-accent hover:text-accent-foreground ${
                hovered === "insider" ? "opacity-50" : "opacity-100"
              }`}
              onMouseEnter={() => setHovered("visitor")}
              onMouseLeave={() => setHovered(null)}
            >
              One-time visitor
            </Link>
            <Link
              to="/insider"
              className={`bg-accent text-accent-foreground px-8 py-4 rounded-md font-body font-medium text-lg transition-all duration-300 hover:bg-accent/90 ${
                hovered === "visitor" ? "opacity-50" : "opacity-100"
              }`}
              onMouseEnter={() => setHovered("insider")}
              onMouseLeave={() => setHovered(null)}
            >
              Exclusive insider
            </Link>
          </div>
        </div>

        <div className="animate-fade-in-delay-2">
          <Link
            to="/info"
            className="text-muted-foreground hover:text-accent transition-colors text-sm font-body underline underline-offset-4"
          >
            What's the difference?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
