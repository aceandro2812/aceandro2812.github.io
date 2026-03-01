import { PortfolioConfig } from './types';
// Icons are now referenced by string names in the config
// and imported/rendered in the components that use them

const portfolioConfig: PortfolioConfig = {
  personalInfo: {
    name: "Jatin Iyer",
    title: "AI DEV. OPR / RESEARCH / AGENT_ID: JATIN_2812",
    bio: "Passionate about orchestrating autonomous AI agentic systems and developing neural-net level solutions for complex computational problems.",
    avatar: "/avatar.jpg",
    github: "aceandro2812"
  },
  experience: [
    {
      company: "Mettler Toledo International INC",
      role: "AI Solution Developer [OPERATIVE CLASS]",
      duration: "2023 - Present",
      description: "Developing specialized AI protocols for internal enterprise nodes. Focus on NLP pipelines, Generative AI, and autonomous agent collaboration architectures.",
      tech: ["Python", "TensorFlow", "PyTorch", "AWS", "Docker", "LangChain", "Hugging Face", "OpenAI", "Streamlit", "Gradio", "LangSmith", "LangGraph", "Crewai"]
    },
    {
      company: "Mettler Toledo International INC",
      role: "Intern [TRAINEE PROTOCOL]",
      duration: "2023 2 months",
      description: "Assisted in the deployment of foundational AI models and integration tools. Gained clearance level in basic NLP operations.",
      tech: ["Python", "Jupyter", "Django", "FASTAPI", "PostgreSQL", "AWS", "Git"]
    },
    {
      company: "Sahacharya Digital Solutions",
      role: "Software Engineer intern",
      duration: "2021 - 2022",
      description: "Developed and maintained backend systems for high-traffic web applications. Focused on optimizing performance and ensuring scalability.",
      tech: ["Node.js", "Express", "aws", "git"]
    },
    {
      company: "Vedant SoftwareSolutions PVT LTD",
      role: "Java Developer intern",
      duration: "2018 - 3 months",
      description: "Built java springboot based applications for local shops .",
      tech: ["Java", "SpringBoot", "PostgreSQL", "Git"]
    }
  ],
  education: [
    {
      institution: "SIES Graduate School of Technology",
      degree: "Bachelor of Engineering in Computer Science",
      duration: "2020 - 2023",
      description: "Specialized in Artificial Intelligence and Core Computer Science with focus on deep learning architectures and neural networks."
    },
    {
      institution: "University of Mumbai",
      degree: "Diploma in Computer Engineering",
      duration: "2017 - 2020",
      description: "Focused on computer science fundamentals and programming languages."
    }
  ],
  certifications: [
    {
      institution: "Hugging Face",
      degree: "Certification in Model Context Protocol",
      duration: "2025",
      description: "Completed an intensive certification program focused on Model Context Protocol.",
      link: "https://huggingface.co/datasets/mcp-course/certificates/resolve/main/certificates/jatin096/2025-05-30.png"
    },
    {
      institution: "DeepLearning.ai",
      degree: "Multi agent AI systems with Crew AI",
      duration: "2024",
      description: "Mastered the foundations of CrewAI, understood how to build Multi Agent AI systems and Workflows to achieve Human-Like automation of complex and tedious processes.",
      link: "https://learn.deeplearning.ai/accomplishments/827fe746-f244-43ad-85d2-41ea24ad7daa?usp=sharing"
    },
    {
      institution: "Google Deepmind",
      degree: "Google Gen AI Intensive",
      duration: "2025",
      description: "Took in depth Understanding of generative Artifcial Intelligence right from a simple transformer architecture upto AI agents using google ADK and gemini api's with a tinge of safe and responsible AI.",
      link: "https://www.linkedin.com/in/jatin-iyer-b92206215/details/certifications/1745508785618/single-media-viewer/?profileId=ACoAADZQVx4BPgNF1MjqUtvdP4u13tUbMPisAlY"
    },
    {
      institution: "Nvidia",
      degree: "Rapid Application Development using LLM's",
      duration: "2024",
      description: "Mastered Core concepts of GenAI and Agentic AI , using raw python code and langchain with dockerized self hosted instances of Vllm and Nvidia NIM , Learnt a lot about Diffusion models and Image generation too along with prompt chaining and pipelining.",
      link: "https://learn.nvidia.com/certificates?id=RNQhvLr-TX212MfPmK3Cjg/courses/course?course_id=course-v1:DLI+C-FX-09+V2"
    }
  ],
  projects: [
    {
      title: "PROTOCOL: SwasthyaSetu",
      description: "Autonomous, AI-powered medical triage routine deployed for public access. Parses user symptoms to output preliminary diagnostics and route to local healthcare nodes.",
      imageUrl: "/ss.png",
      tags: ["Python", "Cloud", "Docker", "LangGraph", "Google Gemini", "FAISS", "RAG", "Agentic AI"],
      link: "https://github.com/aceandro2812/swasthyasetu"
    },
    {
      title: "UNIT: KachraBOT",
      description: "Autonomous garbage detection hardware unit utilizing FOMO ML model on an ESP32 CAM module. High efficiency, low operational cost.",
      imageUrl: "/kcb.png",
      tags: ["Python", "FastAPI", "spaCy", "Docker", "Kubernetes"],
      link: "https://github.com/aceandro2812/GARBOTFINAL"
    },
    {
      title: "SYSTEM: DysAssist",
      description: "Mobile interface utilizing on-device TensorFlow ML to OCR text feeds real-time and translate to open-dyslexic rendering protocols, augmenting user readability.",
      imageUrl: "/dys.png",
      tags: ["React", "TensorFlow.js", "D3.js", "Node.js"],
      link: "https://github.com/aceandro2812/DYSASSIST2.0"
    }
  ],
  skills: [
    {
      title: "[COMBAT_GEAR] // FRONTEND & MARKUP",
      skills: [
        { name: "Python", icon: "SiPython", color: "#3776AB" },
        { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
        // { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
        { name: "Java", icon: "FaJava", color: "#007396" },
        { name: "HTML5", icon: "SiHtml5", color: "#E34F26" },
        { name: "CSS3", icon: "SiCss3", color: "#1572B6" },
        { name: "SQL", icon: "SiPostgresql", color: "#4169E1" },
      ]
    },
    {
      title: "[MAINFRAME] // BACKEND & FRAMEWORKS",
      skills: [
        // { name: "React", icon: "SiReact", color: "#61DAFB" },
        // { name: "Next.js", icon: "SiNextdotjs", color: "#FFFFFF" },
        { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
        { name: "Express.js", icon: "SiExpress", color: "#68A063" },
        { name: "Flask", icon: "SiFlask", color: "#FFFFFF" },
        { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" },
      ]
    },
    {
      title: "[NEURAL_NETS] // AI & MACHINE LEARNING",
      skills: [
        { name: "LLM APIs", icon: "BrainCircuit", color: "#8B5CF6" },
        { name: "LangChain", icon: "SiLangchain", color: "#A855F7" },
        { name: "Vector DBs", icon: "SiHuggingface", color: "#FFD21E" },
        { name: "PyTorch", icon: "SiPytorch", color: "#EE4C2C" },
        { name: "Hugging Face", icon: "SiHuggingface", color: "#FFD21E" },
      ]
    },
    {
      title: "[VAULT] // DATABASES & CLOUD",
      skills: [
        { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
        { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1" },
        // { name: "Firebase", icon: "SiFirebase", color: "#FFCA28" },
        { name: "AWS", icon: "SiAmazon", color: "#FF9900" },
        { name: "Docker", icon: "SiDocker", color: "#2496ED" },
        // { name: "Vercel", icon: "SiVercel", color: "#FFFFFF" },
      ]
    },
    {
      title: "[TOOLKIT] // DEV OPS & UTILITIES",
      skills: [
        { name: "Git", icon: "SiGit", color: "#F05032" },
        { name: "GitHub", icon: "SiGithub", color: "#FFFFFF" },
        { name: "VS Code", icon: "SiVscode", color: "#007ACC" },
        { name: "Postman", icon: "SiPostman", color: "#FF6C37" },
        { name: "Linux", icon: "SiLinux", color: "#FCC624" },
      ]
    }
  ],
  contact: {
    email: "jatin096@gmail.com",
    phone: "+91 8655851241",
    location: "Mumbai, INDIA",
    github: "aceandro2812",
    linkedin: "jatin-iyer-b92206215",
    twitter: "jatin_123"
  },
  socialLinks: {
    github: "https://github.com/aceandro2812",
    linkedin: "https://linkedin.com/in/jatin-iyer-b92206215",
    twitter: "https://twitter.com/jatin096"
  }
};

export default portfolioConfig;
