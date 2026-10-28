import { SkillGroup } from "@/app/types";

export const skillGroups: SkillGroup[] = [
  { name: "Languages", items: ["TypeScript", "JavaScript", "PHP", "Python", "C++", "Java", "SQL"] },
  { name: "Cloud", items: ["AWS Lambda", "API Gateway", "DynamoDB", "Cognito", "OpenSearch", "S3", "CloudFront", "Fargate", "CDK", "Serverless Framework"] },
  { name: "Frontend", items: ["React", "Next.js", "Angular", "Tailwind CSS", "TanStack Query"] },
  { name: "Backend & data", items: ["Node.js", "REST", "WebSockets", "JSON-RPC", "MongoDB", "MySQL", "MariaDB"] },
  { name: "Quality & tooling", items: ["Jest", "Playwright", "k6", "Docker", "GitHub Actions", "GitLab CI"] },
];
