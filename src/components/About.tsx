import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
            Professional <span className="text-gradient">Summary</span>
          </h2>
          
          <Card className="p-6 sm:p-8 shadow-card border-border bg-card/50 backdrop-blur">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed space-y-4">
              <span className="block">
                Seasoned IT professional with over 20 years of experience in software development, 
                systems integration, and project leadership across Banking, Healthcare, Transportation, 
                and Government sectors.
              </span>
              
              <span className="block">
                Highly skilled in <span className="text-primary font-medium">Java/Spring Boot microservices architecture</span>, 
                cloud-native solutions (AWS, GCP, Azure), and enterprise-grade system design. Expert in <span className="text-primary font-medium">workflow and AI automation using n8n, Zapier, and Make (Integromat)</span>, 
                enabling intelligent process orchestration and system integration. Combines deep 
                technical expertise with strong management, business analysis, and agile leadership.
              </span>
              
              <span className="block">
                Certified Scrum Master and SAFe Agile Practitioner, with proven success leading distributed 
                teams through full SDLC — from requirements gathering and architecture to deployment and 
                post-production support. Recognized for driving innovation, maintaining code quality, and 
                delivering mission-critical applications on time.
              </span>
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
