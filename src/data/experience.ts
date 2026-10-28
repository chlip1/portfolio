import { Experience } from "@/app/types";

export const experiences: Experience[] = [
  {
    company: "ADTRAN",
    roles: [
      {
        title: "Software Engineer II",
        date: "Jul 2025 — Present",
        highlights: [
          "Single-handedly migrated 1.3M subscribers (end users) from an existing system to a new microservice, from architecture to cutover.",
          "Built a global search service on OpenSearch that ingests data from many sources into one index, replacing several separate indexes that were hard to query together.",
          "Built a gateway proxy service that connects to customer devices over a tunnel and renders the router's own UI directly inside our app.",
        ],
      },
    ],
    skills: ["TypeScript", "Node.js", "AWS", "OpenSearch", "WebSockets", "Microservices", "Event-driven"],
  },
  {
    company: "Kainos",
    roles: [
      {
        title: "Associate Software Engineer",
        date: "Oct 2024 — Jun 2025",
        highlights: [
          "DVSA MOT service: Images in Garages, attaching vehicle photos to the MOT test. Extended the PHP frontend and built the serverless TypeScript backend on AWS.",
          "Moved a Java 8 service from EC2 to Docker on Fargate.",
        ],
      },
      {
        title: "Trainee Software Engineer",
        date: "Jul 2023 — Sep 2024",
        highlights: [
          "DVLA Import: cut the time to propagate a vehicle import across UK registries from 10 minutes to 2.",
          "Rewrote integration tests of the main MOT API from Behat to Playwright.",
          "Spark Forms: customer satisfaction surveys for UK government websites in Java Spring Boot, Angular and AWS.",
        ],
      },
    ],
    skills: ["TypeScript", "AWS Lambda", "Serverless", "Fargate", "PHP", "Playwright", "Angular", "Java Spring"],
  },
  {
    company: "Radmor S.A.",
    roles: [
      {
        title: "Software Engineer",
        date: "Jul 2022 — Jun 2023",
        highlights: [
          "Data transfer between a Python test environment and a C++ server.",
          "Interactive map applications driven by real-time location data of radio stations and links between them.",
        ],
      },
    ],
    skills: ["Python", "C++", "Qt", "Linux", "SQL"],
  },
];
