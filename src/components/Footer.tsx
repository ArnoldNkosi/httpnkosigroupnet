import { Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground text-lg">D</span>
              </div>
              <div>
                <span className="font-display font-bold text-xl">Datao</span>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Nkosi Group</p>
              </div>
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Enterprise technology consultancy specializing in software engineering, 
              data platforms, and cloud architecture.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {["Industries", "Services", "Technology", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-6">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:contact@nkosigroup.net" className="hover:text-foreground transition-colors">
                  contact@nkosigroup.net
                </a>
              </li>
              <li>nkosigroup.net</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Datao. A Nkosi Group Company. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="mailto:contact@nkosigroup.net"
              className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
