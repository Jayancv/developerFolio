/*
 * All portfolio content lives here. Edit this file to update the site.
 * Set `display: false` on any section to hide it.
 */

const profile = {
  name: "Jayan Vidanapathirana",
  shortName: "Jayan",
  role: "Software Engineer · Backend",
  headline: "I build reliable, scalable backend systems.",
  intro:
    "Software Engineer with 7+ years of experience, primarily in backend development. MSc in Computer Science (Software Engineering) from the University of Helsinki.",
  location: "Helsinki, Finland",
  availability: "Open to roles in Finland & Germany · relocation & remote",
  portrait: require("./assets/images/myPortraits.png"),
  resumeLink:
    "https://drive.google.com/file/d/1trvRvT8Ai0vX9smNEJdI6m5c5gOqODFH/view?usp=sharing",
  email: "jcvidanapathirana@gmail.com"
};

const about = {
  display: true,
  paragraphs: [
    "I'm a Software Engineer with 7+ years of experience, primarily in backend development, building reliable and scalable systems. With a strong Computer Science background and a Master's degree specialising in Software Engineering (July 2025), I bring a proactive, self-motivated approach to solving complex backend challenges.",
    "I'm known for writing clean code, strong team collaboration and a passion for learning. I thrive in fast-paced environments and bring the same energy and curiosity to life outside of work as an avid adventurer."
  ],
  highlights: [
    {value: "7+", label: "Years of experience"},
    {value: "MSc", label: "Software Engineering"},
    {value: "3", label: "Certifications"}
  ]
};

const socialLinks = [
  {name: "GitHub", url: "https://github.com/jayancv", icon: "fab fa-github"},
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/jayancv/",
    icon: "fab fa-linkedin-in"
  },
  {
    name: "Email",
    url: "mailto:jcvidanapathirana@gmail.com",
    icon: "fas fa-envelope"
  }
];

const skills = {
  display: true,
  title: "Skills",
  subtitle:
    "Backend-focused, and expanding across the stack into frontend and DevOps.",
  focus: [
    "Designing and developing scalable, high-performance backend systems",
    "Designing REST APIs for frontends and external API consumers",
    "Integrating third-party systems"
  ],
  groups: [
    {
      name: "Core",
      items: [
        "Java",
        "Spring",
        "Python",
        "FastAPI",
        "SQL (Oracle, MySQL)",
        "REST & SOAP APIs",
        "Git"
      ]
    },
    {
      name: "Messaging & Infra",
      items: [
        "Apache Kafka",
        "RabbitMQ",
        "MQTT",
        "Redis",
        "Docker",
        "Kubernetes",
        "AWS",
        "CI/CD"
      ]
    },
    {
      name: "Also worked with",
      items: [
        "TypeScript",
        "JavaScript",
        "React",
        "Angular",
        "Node.js",
        "PHP / Laravel",
        "LLMs & RAG"
      ]
    }
  ]
};

const experience = {
  display: true,
  title: "Experience",
  items: [
    {
      role: "Summer Developer",
      company: "Reaktor",
      logo: require("./assets/images/reaktor.jpg"),
      date: "Jun 2026 – Sep 2026",
      bullets: [
        "Delivered client work in a software consultancy, supporting Admares through the MVP phase of an edge-first smart-home platform built for large-scale residential delivery.",
        "Owned features end to end, from clarifying requirements with client stakeholders through implementation, validation and handover, across backend services, integrations and the user interface.",
        "Worked in a lean cross-functional Scrum team, balancing iterative delivery with structured planning to keep scope, quality and timelines on track toward production readiness."
      ]
    },
    {
      role: "Software Engineer",
      company: "PromisQ (Berlin)",
      logo: require("./assets/images/promiseq_logo.png"),
      date: "Oct 2025 – Jan 2026",
      bullets: [
        "Designed and developed event-driven microservices from scratch to deployment, implementing real-time notification handling to power a scalable video-surveillance alert system for a Berlin-based startup.",
        "Built a Python FastAPI microservice from scratch, handling the end-to-end event notification flow including the REST API layer, service logic and deployment.",
        "Implemented a Kafka consumer pipeline to process high-throughput surveillance event streams and an MQTT publisher to distribute real-time alerts to downstream clients."
      ]
    },
    {
      role: "Research Assistant",
      company: "University of Helsinki",
      logo: require("./assets/images/edu_uoh_white.png"),
      date: "Aug 2024 – Dec 2024",
      bullets: [
        "Joined the Empirical Software Engineering research group as a Research Assistant.",
        "Designed and developed a software artifact that generates engineering process diagrams using LLMs.",
        "Contributed to the group's research on LLM applications in software engineering by demonstrating a novel use case for automated diagram generation, and adapted that research into my Master's thesis."
      ]
    },
    {
      role: "Technical Team Lead",
      company: "CodeGen International",
      logo: require("./assets/images/cmp_codegen.jpg"),
      date: "Jan 2022 – May 2025",
      bullets: [
        "Led the third-party H2H API integration sub-team for CodeGen's flagship Flight Centre project, the company's largest global engagement.",
        "Orchestrated the third-party integration strategy, coordinated roll-outs across multiple regions and ensured on-time delivery to global clients.",
        "Mentored and grew junior engineers over two years.",
        "From September 2023 to May 2025, continued as a part-time contracted engineer while completing my Master's."
      ]
    },
    {
      role: "Software Engineer",
      company: "CodeGen International",
      logo: require("./assets/images/cmp_codegen.jpg"),
      date: "Jan 2018 – Dec 2021",
      bullets: [
        "Joined the 120-member TravelBox™ team, enhancing the travel-management platform for one of the world's largest theme-park operators.",
        "Designed, developed and delivered functional-gap fixes and change requests using Java, Spring, Oracle, and SOAP and REST APIs, while maintaining Swing-based desktop applications.",
        "Partnered with the Rapid Response team to monitor functional and non-functional issues after major production releases.",
        "Spent two months on-site in Paris after the initial rollout, troubleshooting critical issues and triaging defects, which improved stability, accelerated later rollouts and strengthened client confidence."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "WSO2",
      logo: require("./assets/images/cmp_wso2_white.png"),
      date: "Jul 2016 – Dec 2016",
      bullets: [
        "Interned with WSO2's R&D team focused on data processing.",
        "Evaluated the performance of machine-learning algorithms in batch vs. streaming scenarios.",
        "Provided insights that informed architectural decisions for integrating streaming ML tools into WSO2's event processor platform."
      ]
    }
  ]
};

const projects = {
  display: true,
  title: "Projects",
  subtitle: "Selected work from industry, research and university.",
  items: [
    {
      name: "Admares Smart Home Platform",
      context: "Reaktor · 2026",
      image: require("./assets/images/admares.png"),
      description:
        "An edge-first platform that monitors and controls household devices locally, keeping device control available without internet connectivity.",
      bullets: [
        "TypeScript services integrating hardware over MQTT and REST, plus Bosch Home Connect cloud integration and notification workflows.",
        "React interface for wall-mounted kiosk tablets with responsive layouts and notification UX.",
        "Docker packaging and CI pipelines for repeatable deployments to edge hardware.",
        "Used Claude Code with custom subagents, skills and MCP servers to speed up development, reviewing all generated code, pull requests and architecture docs."
      ],
      tags: ["TypeScript", "React", "MQTT", "Docker"],
      links: [
        {name: "Website", url: "https://admares.com/smart-home-technology/"}
      ]
    },
    {
      name: "TravelBox™",
      context: "CodeGen · 2018–2025",
      image: require("./assets/images/tbx_rect.png"),
      description:
        "Enhancing the TravelBox™ travel platform for Flight Centre and one of the largest theme-park chains.",
      bullets: [
        "REST APIs for web frontends and external consumers, integrating TourRadar, Travolutionary, Amadeus and Livn from concept to production.",
        "Features across Hotel, Tour, Car, Flight and Insurance domains, including financial modules and performance work.",
        "Java services and Swing UIs, optimised scheduler jobs and complex SQL, Redis caching and RabbitMQ messaging.",
        "Production support including on-site work, and end-to-end release handling that reduced delays and risk."
      ],
      tags: ["Java", "Spring", "Oracle", "Redis", "RabbitMQ"],
      links: [
        {name: "Website", url: "https://codegen.co.uk/travelbox-platform/"}
      ]
    },
    {
      name: "Engineering Diagram Generation with LLMs",
      context: "Master's thesis · 2024–2025",
      description:
        "Generating Piping and Instrumentation Diagrams (P&IDs) from textual specifications using LLMs and retrieval-augmented generation.",
      bullets: [
        "Python application combining a RAG system and LLMs with a third-party diagram-generation tool.",
        "Demonstrated the feasibility of LLM-driven diagram automation and laid groundwork for further research."
      ],
      tags: ["Python", "LLMs", "RAG"],
      links: [{name: "GitHub", url: "https://github.com/Jayancv/PIGenerator"}]
    },
    {
      name: "Real-Time Human Movement Analytics",
      context: "Bachelor's final-year project · 2017",
      description:
        "Real-time ground-plane analytics of human movement from multiple non-invasive video feeds.",
      bullets: [
        "C++/Python multi-camera pipeline with OpenCV, integrating OpenPose/Caffe for pose estimation.",
        "Java/Spring backend for data aggregation and visualisation, supporting simultaneous real-time feeds."
      ],
      tags: ["C++", "Python", "OpenCV", "Spring"],
      links: [
        {
          name: "GitHub",
          url: "https://github.com/eduze/OpenPosePersonDetector"
        }
      ]
    },
    {
      name: "Postgraduate Administration System",
      context: "Undergraduate project for SLIDA · 2016",
      description:
        "A web system for SLIDA's School of Postgraduate Studies to manage registrations, exam results and finances.",
      bullets: [
        "Registration, exam-results and finance modules built with Laravel and MySQL, replacing paper-based workflows."
      ],
      tags: ["PHP", "Laravel", "MySQL"],
      links: []
    }
  ]
};

const certifications = {
  display: true,
  title: "Certifications & Achievements",
  items: [
    {
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      image: require("./assets/images/aws-certified-solutions-architect-associate.png"),
      url: "https://www.credly.com/badges/c3220a4c-4df3-499d-acf5-d0972bb5aa2d/public_url"
    },
    {
      title: "AWS Certified AI Practitioner",
      issuer: "Amazon Web Services",
      image: require("./assets/images/AI_Practitioner.png"),
      url: "https://www.credly.com/badges/47db7d3c-48f4-49a9-993a-920f303ef1c0/public_url"
    },
    {
      title: "Certified ScrumMaster (CSM)",
      issuer: "7 years of hands-on Scrum experience",
      image: require("./assets/images/CSM.webp"),
      url: "https://app.badgecert.com/public/badges/oisjobbt"
    },
    {
      title: "IEEEXtreme 10.0",
      issuer: "Island rank 20 · Team Jinx · 2016",
      image: require("./assets/images/LogoXtreme16.png")
    },
    {
      title: "International Physics Olympiad",
      issuer:
        "Asian & International Physics Olympiads · Indonesia & Denmark · 2013",
      image: require("./assets/images/IPhO-2013-logo.png")
    },
    {
      title: "Sri Lankan Physics Olympiad",
      issuer: "Gold medal · 2012",
      image: require("./assets/images/SLPH.png")
    }
  ]
};

const education = {
  display: true,
  title: "Education",
  items: [
    {
      school: "University of Helsinki",
      logo: require("./assets/images/edu-UniversityOfHelsinkiSq.png"),
      degree: "MSc in Computer Science",
      date: "Aug 2023 – Jul 2025",
      detail: "Software Engineering specialisation",
      bullets: [
        "Thesis: Diagram Generation with LLMs",
        "Tutor for international Computer Science Master's students (2024)"
      ]
    },
    {
      school: "University of Moratuwa",
      logo: require("./assets/images/edu-UniversityOfMoratuwaSq.png"),
      degree: "BSc Engineering",
      date: "Feb 2014 – Dec 2017",
      detail: "Computer Science and Engineering",
      bullets: ["GPA 3.71 / 4.2 · First Class Honours"]
    }
  ]
};

const contact = {
  title: "Let's work together",
  subtitle:
    "Have a role, a project, or just want to say hi? My inbox is always open."
};

export {
  profile,
  about,
  socialLinks,
  skills,
  experience,
  projects,
  certifications,
  education,
  contact
};
