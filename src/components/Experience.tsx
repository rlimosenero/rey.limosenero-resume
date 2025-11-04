import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Nityo Infotech",
    role: "Technical Lead / Spring Boot Developer",
    client: "Bank of the Philippine Islands (BPI)",
    period: "Mar 2024 – Present",
    highlights: [
      "Lead 5-member team for EVO Project integrating Spring Boot, Angular 19, and AI-driven automation",
      "Designed MVP scope, sprint milestones, and system architecture for enterprise banking",
      "Integrated Spring AI with RAG pipeline using PostgreSQL (pgvector) for embeddings",
      "Created AI-powered assistant chatbot for technical query interpretation",
      "Implemented workflow orchestration using n8n, Zapier, and Make (Integromat)"
    ],
    tech: ["Spring Boot", "Spring AI", "Angular 19", "PostgreSQL", "Docker", "GitLab CI/CD", "n8n"]
  },
  {
    company: "Cognizant Softvision",
    role: "Spring Boot Developer",
    client: "JPMC, WindAxiom, BDO",
    period: "Mar 2022 – Jul 2023",
    highlights: [
      "Developed backend microservices using Spring Boot and Spring Batch",
      "Designed REST APIs for client integrations on GCP Cloud Run",
      "Integrated with APIGEE API Gateway and deployed to GCP/AWS",
      "Implemented CI/CD pipelines with Azure DevOps"
    ],
    tech: ["Spring Boot", "Spring Batch", "GCP", "AWS", "MongoDB", "Kafka", "Keycloak"]
  },
  {
    company: "Vertere Global Solutions",
    role: "Spring Boot Developer",
    client: "Accenture Healthcare",
    period: "Feb 2021 – Mar 2022",
    highlights: [
      "Developed FHIR-based APIs for EHR data exchange following HL7 standards",
      "Implemented REST APIs and microservices for healthcare integrations",
      "Full-stack development with GitLab merge request reviews",
      "Complex data integration analysis and troubleshooting"
    ],
    tech: ["Spring Boot", "GitLab", "MongoDB", "Kafka", "FHIR/HL7", "SmileCDR"]
  },
  {
    company: "RCG Information Technology",
    role: "Sr Software Engineer",
    client: "Macquarie",
    period: "Apr 2017 – May 2019",
    highlights: [
      "Developed REST API services for VDM data parser UI integration",
      "Served as Scrum Master (Kanban methodology)",
      "DevOps operations on SOAP web services and batch jobs",
      "Deployed applications on OpenShift Container Platform"
    ],
    tech: ["Spring Boot", "Angular", "OpenShift", "JBoss EAP", "Bamboo"]
  },
  {
    company: "Beau-Tec Pte. Ltd.",
    role: "Architect / Sr. Software Engineer",
    location: "Singapore",
    period: "Jun 2013 – Oct 2016",
    highlights: [
      "Designed full-stack applications using Spring MVC",
      "Built Point-of-Sale and Inventory + Accounting Systems from scratch",
      "Managed project budgets and developer hiring across SG/MY"
    ],
    tech: ["Spring MVC", "MySQL", "iReport", "Java"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Two decades of delivering enterprise solutions for global clients
          </p>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <Card 
                key={idx} 
                className="p-6 sm:p-8 shadow-card border-border bg-card/50 backdrop-blur hover:shadow-glow transition-smooth"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 mt-1">
                        <Building2 className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                        <p className="text-lg text-primary">{exp.company}</p>
                        {exp.client && (
                          <p className="text-sm text-muted-foreground">Client: {exp.client}</p>
                        )}
                        {exp.location && (
                          <p className="text-sm text-muted-foreground">{exp.location}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground shrink-0">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-4 ml-14">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="text-muted-foreground text-sm sm:text-base flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 ml-14">
                  {exp.tech.map((tech, tIdx) => (
                    <Badge 
                      key={tIdx} 
                      variant="secondary"
                      className="bg-secondary/80"
                    >
                      {tech}
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

export default Experience;
