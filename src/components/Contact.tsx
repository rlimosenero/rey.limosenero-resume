import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Open to new opportunities and collaborations. Feel free to reach out!
          </p>

          <Card className="p-8 sm:p-12 shadow-card border-border bg-card/50 backdrop-blur">
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <a 
                href="mailto:rey.limosenero@gmail.com"
                className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-smooth hover:scale-105 group"
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-sm sm:text-base">rey.limosenero@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+639914409408"
                className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-smooth hover:scale-105 group"
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+63 991 440 9408</p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 sm:col-span-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Philippines</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="shadow-glow">
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </Button>
              <Button size="lg" variant="outline">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button size="lg" variant="outline">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
