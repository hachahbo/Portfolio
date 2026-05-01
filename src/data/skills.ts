export const skills = {
  backend: ["PHP", "Laravel 11", "Python", "Django", "C", "C++98", "Java"],
  frontend: ["Vue.js", "Nuxt 3", "Next.js 15", "React", "TypeScript", "Tailwind CSS", "Shadcn/UI"],
  architecture: ["Microservices", "Docker", "Nginx", "Kong API Gateway", "RESTful APIs", "WebSockets", "Socket Programming (TCP/IP)"],
  tools: ["PostgreSQL", "Redis", "Git", "Linux / Unix Systems", "Firebase Auth", "Vercel", "CI/CD"]
};

export const skillCategories = [
  {
    category: "Backend",
    icon: "Server",
    skills: [
      { name: "PHP / Laravel 11", level: 95 },
      { name: "Python / Django", level: 85 },
      { name: "C / C++98", level: 88 },
      { name: "Java", level:40 }
    ]
  },
  {
    category: "Frontend",
    icon: "Globe",
    skills: [
      { name: "Vue.js / Nuxt 3", level: 90 },
      { name: "Next.js 15 / React", level: 85 },
      { name: "TypeScript", level: 95 },
      { name: "Tailwind CSS", level: 95 }
    ]
  },
  {
    category: "Architecture & Tools",
    icon: "Brain",
    skills: [
      { name: "Microservices", level: 90 },
      { name: "Docker / Nginx", level: 92 },
      { name: "Socket Programming", level: 85 },
      { name: "PostgreSQL / Redis", level: 88 }
    ]
  }
];
