import { Experience } from "@/app/types";

export const experiences: Experience[] = [
  {
    company: "ADTRAN",
    role: "Software Engineer II",
    date: "July 2025 - Present",
    description: "Developing and maintaining scalable backend services and full-stack features for telecommunications infrastructure solutions. Responsible for API design, system architecture decisions, cloud deployments, and improving developer workflows. Working with distributed systems, event-driven patterns, and modern DevOps practices to deliver reliable, high-performance software.",
    skills: [
      "TypeScript",
      "Node.js",
      "AWS",
      "Serverless",
      "CI/CD",
      "Microservices",
      "Event-driven architecture"
    ]
  },
  {
    role: "Associate Software Engineer",
    company: "Kainos",
    date: "October 2024 - now",
    description: "Worked on the Images In Garages project, i.e. adding the ability to add a photo of the vehicle during the MOT test. Solution added to existing frontend application in PHP, creating additional backend using Serverless, Typescript, AWS.",
    skills: ["TypeScript", "AWS", "Serverless", "NodeJS", "PHP", "SQL/Non-SQL Databases"]
  },
  {
    role: "Trainee Software Engineer",
    company: "Kainos",
    date: "July 2023 - September 2024",
    description: "Worked on various projects focusing on delivering scalable and compliant solutions. Implementation of a serverless solution for data integration between multiple databases of newly registered vehicles in the UK. Created integration tests using Playwright to replace legacy Behat tests for an existing PHP API. Developed a survey application using Java Spring, AWS, and Angular, ensuring compliance with GDS guidelines.",
    skills: ["TypeScript", "AWS", "Serverless", "Lambda", "Playwright", "PHP", "Angular", "Integration Testing", "SQL/Non-SQL Databases"]
  },
  {
    company: "Radmor S.A.",
    role: "Software Engineer",
    date: "July 2022 - June 2023",
    description: "Developed software to facilitate data transfer between a Python-based test environment and a C++ server. Designed and implemented interactive map applications using real-time location data. Contributed to an internship project and gained experience in Linux environment management and documentation.",
    skills: ["Python", "C++", "Linux", "SQL", "QT"]
  }
];