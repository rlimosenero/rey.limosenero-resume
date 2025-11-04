import { Card } from "@/components/ui/card";
import { Award, CheckCircle2 } from "lucide-react";

const certifications = [
  "Certified Scrum Master (CSM)",
  "Certified SAFe Agile Practitioner",
  "PMP Trained"
];

const specializations = [
  "Systems Integration & Architecture",
  "Agile Project Governance",
  "Business & Systems Analysis",
  "Software Development Lifecycle (SDLC)",
  "Cloud Migration & DevOps Automation"
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Certifications & <span className="text-gradient">Specializations</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Certifications */}
            <Card className="p-6 sm:p-8 shadow-card border-border bg-card/50 backdrop-blur">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-base sm:text-lg">{cert}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Specializations */}
            <Card className="p-6 sm:p-8 shadow-card border-border bg-card/50 backdrop-blur">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Areas of Specialization</h3>
              </div>
              
              <div className="space-y-4">
                {specializations.map((spec, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-primary mt-1">▹</span>
                    <span className="text-base sm:text-lg text-muted-foreground">{spec}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
