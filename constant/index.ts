import { NavItem } from "@/types/NavItem";

export const listItem: NavItem[] = [
  { id: 'about', name: 'About' },
  { id: 'experience', name: 'Experience' },
  { id: 'skills', name: 'Skills' },
  { id: 'projects', name: 'Projects' },
  { id: 'contact', name: 'Contact' },
]

export const experiences = [
  {
    company: "MyTravally Worldwide",
    location: "Bangalore",
    title: "Full-Stack Software Developer",
    period: "Aug 2024 - Present",
    achievements: [
      "Developed a property management system, HBC by integrating RESTful APIs, implementing authentication and role-based access control, and coordinating frontend interactions with backend payment APIs.",
      "Led migration of MyTravaly OTA from React.js to Next.js by restructuring routing and optimizing asset loading, improving Lighthouse performance score by 42%.",
      "Built a Playwright-based web scraping service deployed on AWS EC2 to extract real-time competitor pricing data, reducing manual effort and enabling pricing optimization workflows.",
      "Built StayConfirm and implemented a Gen-AI based content generation system within the admin portal to automate property descriptions, reducing manual effort and accelerating content publishing workflows."
    ]
  },
  {
    company: "Tensorblue",
    location: "Lucknow",
    title: "Software Development Intern",
    period: "July 2023 - Aug 2024",
    achievements: [
      "Contributed to building a generative AI product (Ideaverse), improving frontend performance (3x) and increasing user retention.",
      "Integrated AI models and optimized backend queries, reducing response time by 30% and improving overall system responsiveness.",
      "Migrated state management from Context API to Redux Toolkit, reducing unnecessary re-renders by 30% and improving debugging via DevOps.",
      "Implemented scalable storage and deployment solutions using AWS S3 and EC2, and enhanced chatbot capabilities using vector embeddings and semantic search."
    ]
  }
]

export const liveProjects = [
  {
    id: 1,
    title: "MyTravaly",
    description: "End-to-end Online Travel Agency (OTA) connecting travelers with hotels worldwide.",
    techStack: ["React.js", "Next.js", "Zustand", "Tailwind CSS", "REST API", "AWS EC2", "AWS S3"],
    github: null,
    demo: "https://mytravaly.in",
    image: "/projects/mytravaly.png"
  },
  {
    id: 2,
    title: "StayConfirm",
    description: "Direct booking engine for hoteliers to capture commission-free reservations and reduce OTA dependency.",
    techStack: ["React.js", "Tailwind CSS", "Context API", "REST API", "AI API endpoints", "AWS S3", "AWS EC2"],
    github: null,
    demo: "https://stayconfirm.com",
    image: "/projects/stayconfirm.png"
  },
  {
    id: 3,
    title: "HBC",
    description: "Complete Property Management System (PMS) with booking engine, channel manager, and role-based access.",
    techStack: ["React.js", "Redux", "Tailwind CSS", "REST API", "RBAC"],
    github: null,
    demo: "https://hbc.mytravaly.com",
    image: "/projects/hbc.png"
  },
  {
    id: 4,
    title: "Ideaverse",
    description: "Unified subscription platform aggregating multiple AI models including LLMs, image generators, and assistants.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "AI endpoints", "AWS S3", "AWS EC2", "Vector Embeddings"],
    github: null,
    demo: "https://ideaverse.ai",
    image: "/projects/ideaverse.png"
  }
]

export const personalProjects = [
  {
    id: 5,
    title: "Order LLM",
    description: "Intelligent order automation bot with admin portal for menu management and user control.",
    techStack: ["React.js", "TypeScript", "Firebase", "Node.js", "Express.js", "OpenAI API", "LangChain", "MongoDB"],
    github: "https://github.com/mank-423/order-llm",
    demo: "orderllmui.onrender.com",
    image: "/projects/orderllm.png"
  },
  {
    id: 6,
    title: "Chatty",
    description: "Real-time messaging platform with secure auth, offline queuing, typing indicators, and infinite scroll.",
    techStack: ["TypeScript", "React", "Socket.IO", "Zustand", "Node.js", "MongoDB", "JWT", "Cloudinary", "Daisy UI"],
    github: "https://github.com/mank-423/chatty",
    demo: "https://chatty-demo.vercel.app",
    image: "/projects/chatty.png"
  },
  {
    id: 7,
    title: "Agency Portfolio",
    description: "Portfolio website for a production / media agency, Interlude",
    techStack: ["React.js", "TypeScript", "GSAP", "Lenis", "Tailwind CSS"],
    // github: "https://github.com/mank-423/Reform",
    demo: "https://reform-s1n0.onrender.com",
    image: "/projects/interlude.png"
  },
  {
    id: 8,
    title: "Deverse",
    description: "Web3 decentralized publishing platform for content storage, monetization, and distribution using smart contracts.",
    techStack: ["React.js", "Redux", "Tailwind CSS", "IPFS", "Solidity", "Truffle", "Web3.js", "Pinata"],
    github: "https://github.com/mank-423/deverse",
    image: "/projects/deverse.png",
    paper: "https://ieeexplore.ieee.org/document/10716143"
  }
]
