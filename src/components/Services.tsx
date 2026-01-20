import { motion } from "framer-motion";
import { Code2, Database, Network, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Software Engineering",
    description: "End-to-end software development, from modern web applications to complex enterprise systems. We specialize in scalable architectures and clean, maintainable code.",
    features: ["Full-Stack Development", "API Design & Integration", "Legacy Modernization", "DevOps & CI/CD"],
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Build robust data pipelines and platforms that turn raw data into actionable insights. We design systems that scale with your business needs.",
    features: ["ETL/ELT Pipelines", "Data Lake Architecture", "Real-time Streaming", "Data Quality & Governance"],
  },
  {
    icon: Network,
    title: "Architecture Advisory",
    description: "Strategic guidance on technology decisions, system design, and digital transformation. We help you build for today while preparing for tomorrow.",
    features: ["Cloud Migration Strategy", "System Design Review", "Technology Roadmapping", "Performance Optimization"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Services = () => {
  return (
    <section id="services" className="py-24 relative border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Digital & Tech{" "}
            <span className="text-emerald">Capabilities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            We implement and secure large-scale tech programs, architect platforms 
            and enable digital capabilities of the future.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-px bg-border"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="bg-background p-10 group hover:bg-card transition-colors duration-500"
            >
              <div className="mb-8">
                <service.icon className="w-12 h-12 text-primary" strokeWidth={1.5} />
              </div>
              
              <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-emerald transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <span className="w-1 h-1 bg-primary rounded-full" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-4 transition-all">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
