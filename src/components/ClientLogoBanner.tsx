import { motion } from "framer-motion";

const clients = [
  { name: "BMW Group", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" },
  { name: "Absa Bank", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Absa_Group_Limited_logo.svg/1200px-Absa_Group_Limited_logo.svg.png" },
  { name: "Momentum Metropolitan", logo: "https://www.momentum.co.za/momentum/images/logos/momentum-logo.svg" },
  { name: "Dimension Data", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Dimension_Data_logo.svg/1200px-Dimension_Data_logo.svg.png" },
  { name: "Betway", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Betway_logo.svg/1200px-Betway_logo.svg.png" },
  { name: "MultiChoice", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/MultiChoice_logo.svg/1200px-MultiChoice_logo.svg.png" },
];

const ClientLogoBanner = () => {
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-16 border-y border-border/50 overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm uppercase tracking-widest font-display"
        >
          Trusted by Industry Leaders
        </motion.p>
      </div>
      
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex animate-marquee">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 mx-12 flex items-center justify-center h-16 w-48 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-12 max-w-full object-contain filter brightness-0 invert"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `<span class="text-foreground/70 font-display font-semibold text-lg">${client.name}</span>`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogoBanner;
