import { Project } from "@/app/types";

export const projects: Project[] = [
  {
    title: "Creative Development",
    description:
      "Comprehensive application that allows users to book basic services and make payments through the website. Additionally, the application enables users to submit inquiries about more complex services, sign up for training sessions.",
    technologies: ["TypeScript", "AWS" ,"Angular", "Tailwind CSS", "MongoDB" ,"Stripe"],
    image: "/projects/creative-development.png",
    github: "https://github.com/chlip1/CreativeDevelopment",
    live: "https://www.creative-development.pl",
    docs: "https://chlip1.github.io/CreativeDevelopment/en/",
  },
  {
    title: "BMP Projekt",
    description:
      "Website created for BMP Projekt, presenting the company's offer.",
    technologies: ["Wordpress"],
    image: "/projects/bmp-projekt.png",
    live: "https://www.bmp-projekt.pl",
  },
];