import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden wireframe-bg">
      {/* Geometric wireframe SVG background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute w-full h-full opacity-30"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Geometric lines */}
          <motion.path
            d="M0 450 L400 200 L800 350 L1200 150 L1440 300"
            fill="none"
            stroke="hsl(220 90% 56%)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <motion.path
            d="M0 600 L300 450 L700 550 L1100 400 L1440 500"
            fill="none"
            stroke="hsl(220 90% 56%)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
          />
          <motion.path
            d="M200 0 L400 300 L350 600 L500 900"
            fill="none"
            stroke="hsl(220 90% 56%)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          />
          <motion.path
            d="M1000 0 L900 250 L1100 500 L950 900"
            fill="none"
            stroke="hsl(220 90% 56%)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 2, delay: 0.7, ease: "easeOut" }}
          />
          
          {/* Glowing nodes */}
          <motion.circle
            cx="400"
            cy="200"
            r="4"
            fill="hsl(220 90% 56%)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          />
          <motion.circle
            cx="800"
            cy="350"
            r="4"
            fill="hsl(220 90% 56%)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.7 }}
          />
          <motion.circle
            cx="1200"
            cy="150"
            r="4"
            fill="hsl(220 90% 56%)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.9 }}
          />
        </svg>
      </div>

      {/* Subtle glow effects */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="container relative z-10 mx-auto px-6 pt-24">
        <div className="max-w-5xl mx-auto">
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-muted-foreground text-sm md:text-base uppercase tracking-[0.3em] mb-8"
          >
            Unlocking Potential & Creating Impact
          </motion.p>

          {/* Main heading - BCG style large typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8"
          >
            Accelerating{" "}
            <span className="text-emerald">Growth</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
          >
            We are technology-minded specialists. Our deep expertise in software 
            engineering, data platforms, and cloud architecture helps enterprises 
            transform and thrive.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="xl" onClick={scrollToContact}>
              Start a Conversation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="xl" onClick={scrollToServices}>
              Explore Our Services
            </Button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-border"
          >
            {[
              { number: "50+", label: "Clients empowered" },
              { number: "100+", label: "Projects delivered" },
              { number: "15+", label: "Years experience" },
              { number: "24/7", label: "Support available" },
            ].map((stat, index) => (
              <div key={stat.label} className="text-left">
                <p className="text-4xl md:text-5xl font-bold text-emerald mb-2">{stat.number}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
