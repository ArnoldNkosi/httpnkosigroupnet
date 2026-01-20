import { motion } from "framer-motion";
import { Code2, Database, Network, Cloud, Cpu, GitBranch, Layers, Workflow, Shield } from "lucide-react";

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
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            What We Do
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Comprehensive Technology{" "}
            <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From strategy to implementation, we partner with you to deliver technology 
            solutions that create lasting value.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="glass rounded-2xl p-8 hover:shadow-glow transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="font-display text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
