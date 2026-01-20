import { motion } from "framer-motion";
import { Cloud, Server } from "lucide-react";

const azureServices = [
  "Microsoft Fabric",
  "Azure Data Factory",
  "Azure Synapse Analytics",
  "Azure Databricks",
  "Azure Data Lake Storage",
  "Azure Stream Analytics",
  "Azure Event Hubs",
  "Azure HDInsight",
  "Azure Purview",
  "Azure Machine Learning",
];

const awsServices = [
  "AWS Glue",
  "Amazon Redshift",
  "AWS Data Pipeline",
  "Amazon Kinesis",
  "Amazon EMR",
  "AWS Lake Formation",
  "Amazon Athena",
  "Amazon QuickSight",
  "AWS Step Functions",
  "Amazon MWAA",
];

const TechStack = () => {
  return (
    <section id="tech" className="py-24 relative border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Technology{" "}
            <span className="text-emerald">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Deep expertise across leading cloud platforms and data engineering technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-px bg-border">
          {/* Azure Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background p-10"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-[#0078D4] flex items-center justify-center">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold">Microsoft Azure</h3>
                <p className="text-muted-foreground text-sm">Data & Analytics Services</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {azureServices.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="py-3 border-b border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary transition-colors cursor-default"
                >
                  {service}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* AWS Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-background p-10"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-[#FF9900] flex items-center justify-center">
                <Server className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold">Amazon Web Services</h3>
                <p className="text-muted-foreground text-sm">Data Pipeline Services</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {awsServices.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="py-3 border-b border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary transition-colors cursor-default"
                >
                  {service}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
