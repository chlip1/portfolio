import { Project } from "@/app/types";

export const projects: Project[] = [
  {
    title: "JoinBee",
    tagline: "SaaS for schools, academies and clubs",
    description:
      "Schedule, attendance, payments and a public page for dance schools, sports academies and kids' clubs. Parents confirm attendance, pay by BLIK or card and chat with the school in one PWA. Each school gets a showcase page it can share with one link.",
    technologies: ["TypeScript", "AWS Lambda", "API Gateway", "DynamoDB", "Cognito", "CDK", "React", "Next.js"],
    image: "/projects/joinbee-landing.webp",
    links: [
      { label: "joinbee.pl", href: "https://joinbee.pl" },
      { label: "Docs", href: "https://docs.joinbee.pl" },
    ],
  },
  {
    title: "Creative Development",
    tagline: "Booking and payments for a social enterprise",
    description:
      "Customers book basic services and pay online, send inquiries about larger jobs and sign up for training sessions. Staff manage everything from an employee panel.",
    technologies: ["TypeScript", "Angular", "AWS", "MongoDB", "Stripe", "Tailwind CSS"],
    image: "/projects/creative-development.jpg",
    links: [
      { label: "creative-development.pl", href: "https://www.creative-development.pl" },
      { label: "Docs", href: "https://chlip1.github.io/CreativeDevelopment/en/" },
    ],
  },
  {
    title: "BMP Projekt",
    tagline: "Company website",
    description: "Website created for BMP Projekt, presenting the company's offer.",
    technologies: ["WordPress"],
    image: "/projects/bmp-projekt.jpg",
    links: [{ label: "bmp-projekt.pl", href: "https://www.bmp-projekt.pl" }],
  },
];
