import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import ThemeToggle from "./ThemeToggle";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ThemeToggle />
      
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="AI Technology Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 gradient-hero opacity-90" />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              Rey B. <span className="text-gradient">Limosenero</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
              Technical Lead | Automation Consultant | Certified Scrum Master
            </p>
            <p className="text-lg sm:text-xl text-primary">
              SAFe Agile Practitioner
            </p>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            20+ years crafting enterprise solutions across Banking, Healthcare, and Transportation. 
            Specializing in Java/Spring Boot microservices, cloud-native architectures, and AI-driven automation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm sm:text-base">
            <a href="tel:+639914409408" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth">
              <Phone className="w-4 h-4" />
              <span>+63 991 440 9408</span>
            </a>
            <span className="text-muted-foreground">|</span>
            <a href="mailto:rey.limosenero@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth">
              <Mail className="w-4 h-4" />
              <span>rey.limosenero@gmail.com</span>
            </a>
            <span className="text-muted-foreground">|</span>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Philippines</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button size="lg" className="shadow-glow animate-glow">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
            <Button size="lg" variant="outline">
              View Projects
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
