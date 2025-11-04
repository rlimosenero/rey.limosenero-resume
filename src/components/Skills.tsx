import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Code2, Database, Cloud, Wrench, GitBranch, Layers } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Languages & Frameworks",
    skills: [
      "Java", "Spring Boot", "Spring Cloud", "Spring MVC", "Hibernate",
      "Angular 19", "React JS", "JavaScript", "PHP", "Struts"
    ]
  },
  {
    icon: Database,
    title: "Databases",
    skills: [
      "Oracle", "MySQL", "MariaDB", "PostgreSQL", 
      "SQL Server", "MongoDB"
    ]
  },
  {
    icon: Cloud,
    title: "Cloud & Platforms",
    skills: [
      "AWS", "GCP", "Azure", "OpenShift", 
      "Docker", "APIGEE"
    ]
  },
  {
    icon: Wrench,
    title: "Tools & Integration",
    skills: [
      "Kafka Streams", "Keycloak", "Okta", "HL7/FHIR", 
      "SmileCDR", "n8n", "Zapier", "Make"
    ]
  },
  {
    icon: GitBranch,
    title: "DevOps & CI/CD",
    skills: [
      "GitLab CI/CD", "Azure DevOps", "JIRA", 
      "Bamboo", "Jenkins"
    ]
  },
  {
    icon: Layers,
    title: "Methodologies",
    skills: [
      "Agile (Scrum)", "Kanban", "SAFe", 
      "SDLC", "Microservices"
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            Core <span className="text-gradient">Competencies</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Comprehensive technical expertise across the full stack, from cloud infrastructure to frontend frameworks
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, idx) => (
              <Card 
                key={idx} 
                className="p-6 shadow-card border-border bg-card/50 backdrop-blur hover:shadow-glow transition-smooth hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <Badge 
                      key={skillIdx} 
                      variant="secondary"
                      className="bg-secondary/80 hover:bg-primary/20 transition-smooth"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
