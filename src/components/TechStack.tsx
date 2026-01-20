import { motion } from "framer-motion";
import { Cloud, Database, Workflow, Layers, Cpu, GitBranch, Server, Zap } from "lucide-react";

const azureServices = [
  { name: "Microsoft Fabric", description: "Unified analytics platform" },
  { name: "Azure Data Factory", description: "Cloud ETL service" },
  { name: "Azure Synapse Analytics", description: "Limitless analytics" },
  { name: "Azure Databricks", description: "Apache Spark analytics" },
  { name: "Azure Data Lake Storage", description: "Scalable data lake" },
  { name: "Azure Stream Analytics", description: "Real-time analytics" },
  { name: "Azure Event Hubs", description: "Big data streaming" },
  { name: "Azure HDInsight", description: "Open-source analytics" },
  { name: "Azure Purview", description: "Data governance" },
  { name: "Azure Machine Learning", description: "Enterprise ML platform" },
];

const awsServices = [
  { name: "AWS Glue", description: "Serverless ETL" },
  { name: "Amazon Redshift", description: "Cloud data warehouse" },
  { name: "AWS Data Pipeline", description: "Data workflow orchestration" },
  { name: "Amazon Kinesis", description: "Real-time data streaming" },
  { name: "Amazon EMR", description: "Big data processing" },
  { name: "AWS Lake Formation", description: "Data lake builder" },
  { name: "Amazon Athena", description: "Interactive query service" },
  { name: "Amazon QuickSight", description: "BI visualization" },
  { name: "AWS Step Functions", description: "Workflow coordination" },
  { name: "Amazon MWAA", description: "Managed Apache Airflow" },
];

const TechStack = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Technology Expertise
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Cloud & Data{" "}
            <span className="text-gradient">Platforms</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Deep expertise across leading cloud platforms and data engineering technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Azure Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#0078D4] flex items-center justify-center">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold">Microsoft Azure</h3>
                <p className="text-muted-foreground text-sm">Data & Analytics Services</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {azureServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                >
                  <p className="font-medium text-sm group-hover:text-primary transition-colors">{service.name}</p>
                  <p className="text-xs text-muted-foreground">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* AWS Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#FF9900] flex items-center justify-center">
                <Server className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold">Amazon Web Services</h3>
                <p className="text-muted-foreground text-sm">Data Pipeline Services</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {awsServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                >
                  <p className="font-medium text-sm group-hover:text-primary transition-colors">{service.name}</p>
                  <p className="text-xs text-muted-foreground">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Additional capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: Database, label: "SQL & NoSQL" },
            { icon: Workflow, label: "Apache Airflow" },
            { icon: Layers, label: "Terraform & IaC" },
            { icon: GitBranch, label: "CI/CD Pipelines" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 p-4 rounded-xl bg-secondary/30 border border-border/50"
            >
              <item.icon className="w-5 h-5 text-primary" />
              <span className="font-medium text-sm">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
