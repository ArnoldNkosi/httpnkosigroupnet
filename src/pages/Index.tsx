import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Industries />
        <Services />
        <div id="tech">
          <TechStack />
        </div>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
