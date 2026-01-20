import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const industries = [
  {
    id: "financial",
    name: "Financial Services",
    description: "Modernize legacy banking systems, implement real-time fraud detection, and build data platforms that enable personalized customer experiences. We help financial institutions harness AI and analytics to stay ahead of regulatory requirements while driving innovation.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
  },
  {
    id: "energy",
    name: "Energy & Utilities",
    description: "Drive digital transformation with smart grid analytics, predictive maintenance systems, and IoT-enabled infrastructure monitoring. We build data pipelines that optimize energy distribution, reduce costs, and support the transition to renewable sources.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    description: "Enable data-driven healthcare with patient analytics platforms, clinical decision support systems, and secure health data exchanges. We help healthcare providers improve outcomes while maintaining strict compliance with privacy regulations.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
  },
  {
    id: "retail",
    name: "Retail & Consumer",
    description: "Build unified customer data platforms, implement demand forecasting systems, and create personalized shopping experiences. Our solutions help retailers optimize inventory, enhance customer loyalty, and drive revenue growth.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    id: "media",
    name: "Media & Entertainment",
    description: "Power content recommendation engines, build streaming analytics platforms, and optimize content delivery at scale. We help media companies understand audience behavior and monetize their digital assets effectively.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
  },
  {
    id: "telecommunications",
    name: "Telecommunications",
    description: "Optimize network performance with real-time analytics, build customer churn prediction models, and implement 5G-ready data architectures. We enable telcos to deliver superior experiences while reducing operational costs.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    description: "Implement Industry 4.0 solutions with predictive maintenance, supply chain optimization, and quality analytics. We help manufacturers increase throughput, reduce downtime, and achieve operational excellence through data.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  },
  {
    id: "gaming",
    name: "Gaming & Betting",
    description: "Build scalable platforms for real-time odds calculation, player behavior analytics, and responsible gaming systems. We help gaming companies deliver engaging experiences while managing risk and regulatory compliance.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
  },
];

const Industries = () => {
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null);

  const toggleIndustry = (id: string) => {
    setActiveIndustry(activeIndustry === id ? null : id);
  };

  return (
    <section id="industries" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Industry{" "}
            <span className="text-emerald">Knowledge</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border-b border-border"
            >
              {/* Industry Header */}
              <button
                onClick={() => toggleIndustry(industry.id)}
                className="w-full py-6 flex items-center justify-between group"
              >
                <span className={`font-display text-2xl md:text-3xl font-semibold transition-colors duration-300 ${
                  activeIndustry === industry.id 
                    ? "text-emerald" 
                    : "text-foreground group-hover:text-emerald"
                }`}>
                  {industry.name}
                </span>
                <motion.div
                  animate={{ rotate: activeIndustry === industry.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`transition-colors ${
                    activeIndustry === industry.id ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  <ChevronDown className="w-6 h-6" />
                </motion.div>
              </button>

              {/* Expandable Content */}
              <AnimatePresence>
                {activeIndustry === industry.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 grid md:grid-cols-2 gap-8">
                      {/* Image */}
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={industry.image}
                          alt={industry.name}
                          className="w-full h-full object-cover"
                        />
                        {/* Emerald overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent mix-blend-multiply" />
                      </div>

                      {/* Description */}
                      <div className="flex flex-col justify-center">
                        <h3 className="font-display text-lg font-semibold mb-3 flex items-center gap-2 text-emerald">
                          {industry.name}
                          <ArrowRight className="w-4 h-4" />
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {industry.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
