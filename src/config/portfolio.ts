import { PortfolioConfig } from './types';
// Icons are referenced by string name and resolved by the components that
// render them (see src/lib/icons.ts) to keep the bundle tree-shakeable.

const portfolioConfig: PortfolioConfig = {
  personalInfo: {
    name: "Jatin Iyer",
    title: "AI Solution Developer — Agentic Systems & Applied LLMs",
    headline: "I build AI agents that actually ship.",
    subheadline:
      "Applied-AI engineer turning language models into dependable, production systems — multi-agent workflows, RAG pipelines and the full-stack plumbing that holds them together.",
    bio:
      "Passionate about orchestrating autonomous AI agentic systems and developing neural-net level solutions for complex computational problems.",
    story: [
      "I'm an AI Solution Developer at Mettler Toledo, where I take fuzzy business problems and turn them into agentic systems that run in production — not demos that impress in a meeting and break the next morning.",
      "My work sits at the seam between research and engineering: designing multi-agent workflows with LangGraph and CrewAI, grounding them with RAG so they stop hallucinating, and wrapping them in FastAPI services and interfaces that people actually use.",
      "Outside the terminal, I study the Krishna Yajurveda and Sanskrit grammar. Pāṇini wrote a formal generative grammar 2,500 years before we called it computer science — that lineage of precise, rule-based thinking is the same instinct I bring to system design.",
    ],
    avatar: "/avatar.webp",
    availability: "Open to AI/ML engineering roles & collaborations",
    github: "aceandro2812",
  },

  // Derived from the record below — no invented numbers.
  stats: [
    { label: "Years building software", value: "5", suffix: "+", detail: "Since 2021, Java & Node to applied AI" },
    { label: "In applied AI, full time", value: "3", suffix: "yrs", detail: "Agentic systems at Mettler Toledo" },
    { label: "Flagship systems shipped", value: "3", detail: "Triage, vision hardware, accessibility" },
    { label: "Specialist certifications", value: "4", detail: "Google DeepMind, NVIDIA, HF, DeepLearning.AI" },
  ],

  pillars: [
    {
      title: "Agentic Architecture",
      icon: "Workflow",
      description:
        "Multi-agent systems with LangGraph and CrewAI — planners, tool-callers and critics wired into graphs with explicit state, retries and human checkpoints.",
    },
    {
      title: "Grounded Retrieval",
      icon: "Database",
      description:
        "RAG pipelines built on FAISS and vector stores: chunking that respects meaning, hybrid retrieval, and evaluation so answers stay traceable to a source.",
    },
    {
      title: "Production Plumbing",
      icon: "Server",
      description:
        "FastAPI and Flask services, Dockerised deployments, AWS, PostgreSQL. The unglamorous layer that decides whether a model ever reaches a user.",
    },
    {
      title: "Interfaces People Use",
      icon: "MonitorSmartphone",
      description:
        "Streamlit, Gradio and React front-ends so non-technical teams can drive the system themselves instead of filing a ticket.",
    },
  ],

  experience: [
    {
      company: "Mettler Toledo International INC",
      role: "AI Solution Developer",
      duration: "2023 — Present",
      location: "Mumbai, India",
      summary: "Designing and operating enterprise AI agents end to end.",
      description:
        "Building AI systems for internal enterprise teams: NLP pipelines, generative-AI applications and autonomous agent architectures that automate work previously done by hand.",
      highlights: [
        "Design and ship multi-agent workflows using LangGraph and CrewAI, with LangSmith tracing so failures are debuggable instead of mysterious.",
        "Build RAG pipelines over internal documentation so answers stay grounded and citable rather than plausible-sounding.",
        "Wrap models in FastAPI services and Dockerised deployments, taking prototypes through to something on-call teams can run.",
        "Deliver Streamlit and Gradio interfaces that put these tools directly in the hands of business users.",
      ],
      tech: ["Python", "LangGraph", "LangChain", "CrewAI", "LangSmith", "OpenAI", "Hugging Face", "PyTorch", "TensorFlow", "FastAPI", "Docker", "AWS", "Streamlit", "Gradio"],
    },
    {
      company: "Mettler Toledo International INC",
      role: "AI Intern",
      duration: "2023 · 2 months",
      location: "Mumbai, India",
      summary: "Earned the full-time role by shipping during the internship.",
      description:
        "Supported deployment of foundational AI models and integration tooling, working across the Python backend stack and getting hands-on with practical NLP.",
      highlights: [
        "Assisted deployment and integration of foundational models into internal tooling.",
        "Built backend endpoints with Django and FastAPI against PostgreSQL.",
        "Converted the internship into a full-time AI Solution Developer offer.",
      ],
      tech: ["Python", "Jupyter", "Django", "FastAPI", "PostgreSQL", "AWS", "Git"],
    },
    {
      company: "Sahacharya Digital Solutions",
      role: "Software Engineer Intern",
      duration: "2021 — 2022",
      location: "Remote",
      summary: "Backend engineering for high-traffic web applications.",
      description:
        "Developed and maintained Node.js backend systems, focusing on performance under load and keeping services scalable as traffic grew.",
      highlights: [
        "Built and maintained Express services powering high-traffic web applications.",
        "Profiled and optimised slow endpoints to keep response times stable under load.",
        "Deployed and monitored services on AWS.",
      ],
      tech: ["Node.js", "Express", "AWS", "Git"],
    },
    {
      company: "Vedant Software Solutions PVT LTD",
      role: "Java Developer Intern",
      duration: "2018 · 3 months",
      location: "Mumbai, India",
      summary: "First professional code — Spring Boot apps for local businesses.",
      description:
        "Built Java Spring Boot applications for local shops, covering the full path from requirements conversation to a working, deployed tool.",
      highlights: [
        "Delivered Spring Boot applications backed by PostgreSQL for small local businesses.",
        "Gathered requirements directly from non-technical shop owners and translated them into features.",
      ],
      tech: ["Java", "Spring Boot", "PostgreSQL", "Git"],
    },
  ],

  education: [
    {
      institution: "SIES Graduate School of Technology",
      degree: "B.E. Computer Science",
      duration: "2020 — 2023",
      description:
        "Specialised in artificial intelligence alongside core computer science, with coursework and projects centred on deep learning architectures and neural networks.",
    },
    {
      institution: "University of Mumbai",
      degree: "Diploma in Computer Engineering",
      duration: "2017 — 2020",
      description:
        "Grounding in computer science fundamentals, data structures and programming languages — the base the rest was built on.",
    },
  ],

  certifications: [
    {
      institution: "Google DeepMind",
      degree: "Google Gen AI Intensive",
      duration: "2025",
      description:
        "End-to-end generative AI: from transformer internals through to production agents built with Google ADK and the Gemini API, including responsible-AI practice.",
      link: "https://www.linkedin.com/in/jatin-iyer-b92206215/details/certifications/1745508785618/single-media-viewer/?profileId=ACoAADZQVx4BPgNF1MjqUtvdP4u13tUbMPisAlY",
    },
    {
      institution: "Hugging Face",
      degree: "Model Context Protocol Certification",
      duration: "2025",
      description:
        "Intensive certification on the Model Context Protocol — the emerging standard for connecting models to tools and data sources.",
      link: "https://huggingface.co/datasets/mcp-course/certificates/resolve/main/certificates/jatin096/2025-05-30.png",
    },
    {
      institution: "NVIDIA",
      degree: "Rapid Application Development with LLMs",
      duration: "2024",
      description:
        "Core GenAI and agentic AI in raw Python and LangChain, running self-hosted vLLM and NVIDIA NIM in Docker, plus diffusion models and prompt pipelining.",
      link: "https://learn.nvidia.com/certificates?id=RNQhvLr-TX212MfPmK3Cjg/courses/course?course_id=course-v1:DLI+C-FX-09+V2",
    },
    {
      institution: "DeepLearning.AI",
      degree: "Multi-Agent AI Systems with CrewAI",
      duration: "2024",
      description:
        "Foundations of CrewAI: composing multi-agent systems and workflows that automate complex, tedious processes with human-like delegation.",
      link: "https://learn.deeplearning.ai/accomplishments/827fe746-f244-43ad-85d2-41ea24ad7daa?usp=sharing",
    },
  ],

  projects: [
    {
      title: "SwasthyaSetu",
      name: "SwasthyaSetu",
      tagline: "AI medical triage for people without easy access to a doctor",
      description:
        "An agentic medical triage assistant that reads a person's described symptoms, reasons over grounded medical context, and points them toward the right level of care.",
      problem:
        "In much of India the first question isn't 'which specialist?' but 'is this serious enough to travel for?'. That gap costs time in emergencies and wastes trips for things that aren't.",
      approach:
        "A LangGraph agent graph handles intake, clarifying questions and triage reasoning. Retrieval over a FAISS index keeps answers grounded in real medical context instead of model improvisation, with Gemini as the reasoning engine. Packaged in Docker for reproducible deployment.",
      outcome:
        "A working, publicly accessible triage flow that produces preliminary guidance and routes users toward appropriate local healthcare — built to be honest about uncertainty rather than to sound confident.",
      imageUrl: "/ss.webp",
      tags: ["Python", "LangGraph", "Google Gemini", "FAISS", "RAG", "Agentic AI", "Docker"],
      link: "https://github.com/aceandro2812/swasthyasetu",
      featured: true,
      year: "2025",
      status: "live",
    },
    {
      title: "KachraBOT",
      name: "KachraBOT",
      tagline: "Garbage detection on a $10 microcontroller",
      description:
        "An autonomous waste-detection unit running a FOMO computer-vision model directly on an ESP32-CAM — no cloud round-trip, no GPU, no recurring bill.",
      problem:
        "Waste monitoring solutions assume cameras with internet and servers behind them. That economics doesn't work for the places that need it most.",
      approach:
        "Trained a FOMO (Faster Objects, More Objects) model small enough to run on-device on an ESP32-CAM, doing inference at the edge so the hardware works standalone at very low unit cost.",
      outcome:
        "A functioning low-cost detection unit demonstrating that useful computer vision doesn't require expensive infrastructure — just a model shaped to fit the hardware.",
      imageUrl: "/kcb.webp",
      tags: ["Embedded ML", "ESP32-CAM", "FOMO", "Computer Vision", "Python", "Edge AI"],
      link: "https://github.com/aceandro2812/GARBOTFINAL",
      featured: true,
      year: "2023",
      status: "archived",
    },
    {
      title: "DysAssist",
      name: "DysAssist",
      tagline: "Point your camera at any text, read it without fighting it",
      description:
        "A mobile assistive tool that OCRs text from the camera in real time and re-renders it in dyslexia-friendly typography, on-device.",
      problem:
        "Roughly one in ten people has dyslexia, and the world's printed text isn't going to reformat itself. Existing tools mostly handle digital text, not the menu or form in front of you.",
      approach:
        "On-device TensorFlow models handle OCR from the live camera feed, then reflow the recognised text into OpenDyslexic rendering. Running locally keeps it fast and keeps what people read private.",
      outcome:
        "An accessibility tool that turns any physical text into a readable format in real time — the kind of small change that removes a daily friction entirely.",
      imageUrl: "/dys.webp",
      tags: ["TensorFlow.js", "OCR", "Accessibility", "React", "On-device ML", "Node.js"],
      link: "https://github.com/aceandro2812/DYSASSIST2.0",
      featured: true,
      year: "2023",
      status: "archived",
    },
  ],

  skills: [
    {
      title: "[NEURAL_NETS] // AI & MACHINE LEARNING",
      label: "AI & Machine Learning",
      blurb: "Where I spend most of my time — agents, retrieval and the models underneath.",
      skills: [
        { name: "LangGraph", icon: "SiLangchain", color: "#A855F7", level: 5, note: "Stateful multi-agent graphs" },
        { name: "LangChain", icon: "SiLangchain", color: "#A855F7", level: 5, note: "Chains, tools, agents" },
        { name: "CrewAI", icon: "BrainCircuit", color: "#8B5CF6", level: 4, note: "Role-based agent crews" },
        { name: "RAG / Vector DBs", icon: "Database", color: "#22D3EE", level: 5, note: "FAISS, chunking, eval" },
        { name: "LLM APIs", icon: "Sparkles", color: "#8B5CF6", level: 5, note: "OpenAI, Gemini, local" },
        { name: "Hugging Face", icon: "SiHuggingface", color: "#FFD21E", level: 4, note: "Models, datasets, MCP" },
        { name: "PyTorch", icon: "SiPytorch", color: "#EE4C2C", level: 4 },
        { name: "TensorFlow", icon: "SiTensorflow", color: "#FF6F00", level: 3, note: "On-device inference" },
      ],
    },
    {
      title: "[CORE] // LANGUAGES",
      label: "Languages",
      blurb: "The tools I reach for first.",
      skills: [
        { name: "Python", icon: "SiPython", color: "#3776AB", level: 5, note: "Primary language" },
        { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E", level: 4 },
        { name: "SQL", icon: "SiPostgresql", color: "#4169E1", level: 4 },
        { name: "Java", icon: "FaJava", color: "#007396", level: 3 },
        { name: "HTML5", icon: "SiHtml5", color: "#E34F26", level: 4 },
        { name: "CSS3", icon: "SiCss3", color: "#1572B6", level: 4 },
      ],
    },
    {
      title: "[MAINFRAME] // BACKEND & FRAMEWORKS",
      label: "Backend & Frameworks",
      blurb: "Turning a model into a service something else can depend on.",
      skills: [
        { name: "FastAPI", icon: "SiFastapi", color: "#009688", level: 5, note: "Default for AI services" },
        { name: "Flask", icon: "SiFlask", color: "#E0E6ED", level: 4 },
        { name: "Django", icon: "SiDjango", color: "#092E20", level: 3 },
        { name: "Node.js", icon: "SiNodedotjs", color: "#339933", level: 4 },
        { name: "Express", icon: "SiExpress", color: "#68A063", level: 4 },
        { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4", level: 4 },
      ],
    },
    {
      title: "[VAULT] // DATA & CLOUD",
      label: "Data & Cloud",
      blurb: "Storage, deployment and the parts that page you at 3am.",
      skills: [
        { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1", level: 4 },
        { name: "MongoDB", icon: "SiMongodb", color: "#47A248", level: 3 },
        { name: "Docker", icon: "SiDocker", color: "#2496ED", level: 4, note: "Reproducible deploys" },
        { name: "AWS", icon: "SiAmazon", color: "#FF9900", level: 4 },
        { name: "Linux", icon: "SiLinux", color: "#FCC624", level: 4 },
      ],
    },
    {
      title: "[TOOLKIT] // DEV OPS & UTILITIES",
      label: "Tooling",
      blurb: "Daily drivers.",
      skills: [
        { name: "Git", icon: "SiGit", color: "#F05032", level: 5 },
        { name: "GitHub", icon: "SiGithub", color: "#E0E6ED", level: 5 },
        { name: "LangSmith", icon: "Activity", color: "#22D3EE", level: 4, note: "Agent tracing & eval" },
        { name: "VS Code", icon: "TerminalSquare", color: "#007ACC", level: 5 },
        { name: "Postman", icon: "SiPostman", color: "#FF6C37", level: 4 },
        { name: "Streamlit", icon: "SiStreamlit", color: "#FF4B4B", level: 4, note: "Fast internal UIs" },
      ],
    },
  ],

  contact: {
    email: "jatin096@gmail.com",
    phone: "+91 8655851241",
    location: "Mumbai, India",
    github: "aceandro2812",
    linkedin: "jatin-iyer-b92206215",
    twitter: "jatin096",
  },

  socialLinks: {
    github: "https://github.com/aceandro2812",
    linkedin: "https://www.linkedin.com/in/jatin-iyer-b92206215",
    twitter: "https://twitter.com/jatin096",
  },
};

export default portfolioConfig;
