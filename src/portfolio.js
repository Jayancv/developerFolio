/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jayan Vidanapathirana",
  title: "Hi all, I'm Jayan",
  subTitle: emoji(
    "I'm a Software Engineer with 7+ years of experience (mostly backend) building reliable, scalable systems. With a strong Computer Science background and a recently completed a Master’s degree specialising in Software Engineering (July 2025), I bring a proactive, self-motivated approach to solving complex backend challenges. Known for clean code, team collaboration, and a passion for learning, I thrive in fast-paced environments and bring the same energy and curiosity to life outside of work as an avid adventurer."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1zJqjvuHbedbSijk5bVCWPtED6aqlA_rF/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jayancv",
  linkedin: "https://www.linkedin.com/in/jayancv/",
  gmail: "jcvidanapathirana@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/jayan.vidanapathirana/",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "BACKEND-FOCUSED DEVELOPER EAGER TO EXPAND EXPERTISE ACROSS THE ENTIRE TECH STACK, INCLUDING FRONTEND AND DEVOPS",
  skills: [
    emoji("⚡ Design and Develop scalable, high proformance system backedns"),
    emoji("⚡ Design REST APIs for frontend and API users"),
    emoji("⚡ Integration of third party systems")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "SQL (Oracle)",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Java Spring framework",
      fontAwesomeClassname: "fab fa-java"
    },
  ],

  handsOnExp: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Apache Kafka",
      fontAwesomeClassname: "fab fa-kafka"
    }
  
  ], 
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Helsinki",
      logo: require("./assets/images/edu-UniversityOfHelsinkiSq.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "Auguest 2023 - July 2025",
      desc: "Specialized in Software Engineering stream",
      descBullets: [
        "Masters Thesis - Diagram Generation with LLMs",
        "Tutor for international Computer Science Masters students in 2024"
      ]
    },
    {
      schoolName: "University of Moratuwa",
      logo: require("./assets/images/edu-UniversityOfMoratuwaSq.png"),
      subHeader: "Bachelor of Science of Engineering",
      duration: "February 2014 - December 2017",
      desc: "Specialized in Computer Science and Engineering",
      descBullets: ["GPA : 3.71/4.2 - First Class"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Fullstack",
      progressPercentage: "50%"
    },
    {
      Stack: "Frontend/Design", 
      progressPercentage: "30%"  
    },
    {
      Stack: "DevOps",  
      progressPercentage: "25%"  
    },
    {
      Stack: "Data engineering", 
      progressPercentage: "25%" 
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Assistant",
      company: "University of Helsinki",
      companylogo: require("./assets/images/edu_uoh_white.png"),
      date: "Aug 2024 – Dec 2024",
      descBullets: [
        "Joined the Empirical Software Engineering research group at the University of Helsinki as a Research Assistant.",
        "Designed and developed a software artifact that generates Engineering Process Diagrams using LLMs.",
        "Contributed to the group's research on LLM applications in software engineering by demonstrating a novel use case for automated diagram generation and adapted that research to my Master’s thesis."
      ]
    },
    {
      role: "Technical Team Lead",
      company: "CodeGen International",
      companylogo: require("./assets/images/cmp_codegen.jpg"),
      date: "Jan 2022 – May 2025",
      descBullets: [
        "As Lead of the 3rd-party H2H API Integration sub-team for CodeGen’s flagship Flight Centre Project—our largest global engagement.",
        "I orchestrated the 3rd party system integration strategy, coordinated roll-outs across multiple regions, and ensured on-time, successful delivery to globle clients.",
        "As a mentor, I have groomed my juniors within the last 2 years.",
        "Since September 2023 to May 2025, I have been working as a part-time contracted employee for CodeGen."
      ]
    },
    {
      role: "Software Engineer",
      company: "CodeGen International",
      companylogo: require("./assets/images/cmp_codegen.jpg"),
      date: "Jan 2018 – Dec 2021",
      desc: "Worked as a software develepment engineer",
      descBullets: [
        "I joined the company’s largest engagement at that time—the 120-member TravelBox™ development team—tasked with enhancing our travel-management platform for an international client (One of the world largest theme park).",
        "I was directly involved in designing, developing, and delivering functional-gap fixes and change-request solutions using Java, Spring, Oracle, and both SOAP and REST APIs, while also maintaining Swing-based desktop applications.",
        "Partnering with the Rapid Response team to monitor functional and non-functional issues after major releases in the production environment.",
        "Following the initial production rollout, I spent two months onsite(Paris) troubleshooting critical issues and triaging defects, which significantly improved system stability, accelerated subsequent rollout schedules, and strengthened client confidence in our delivery capabilities."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "WSO2",
      companylogo: require("./assets/images/cmp_wso2_white.png"),
      date: "Jul 2016 – Dec 2016",
      descBullets: [
        "Internship with WSO2’s R&D team focused on data processing.",
        "Evaluated performance of machine learning algorithms for batch vs. streaming scenarios.",
        "Provided insights that contributed to architectural decisions in WSO2’s event processor platform for integrating Streaming ML tools."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "HERE ARE SOME PROJECTS THAT ARE OPEN TO THE PUBLIC FOR VIEWING",
  projects: [
    {
      image: require("./assets/images/tbx_rect.png"),
      projectName: "TravelBox™",
      projectDesc: "Worked on various aspects of enhancing TravelBox for Flight Centre (https://www.fctgl.com/) and one of the largest theme park chain while working with CodeGen.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://codegen.co.uk/travelbox-platform/"
        }
        //  you can add extra buttons here.
      ],
      descBullets: [
        "Third party system integeration to TravelBox reservation system. (TourRadar, Travolutionary, Amadeus ...)",
        "Improved the performance of batch jobs and optimized database queries.",
        "Initiated new Tour H2H system integeration to Booking platform.",
        
      ]
    },
    {
      // image: require("./assets/images/llm_diagrams.png"),
      projectName: "Engineering Process Diagram Generation with Large Language Models",
      projectDesc: "Master's thesis research project (2024-2025)",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/Jayancv/PIGenerator"
        }
      ],
      descBullets:[
        "As part of my Master’s thesis within the Empirical Software Engineering research group, I joined an existing project to investigate automated engineering diagram generation.",
        "I developed a Python-based application that integrates a retrieval-augmented generation (RAG) system with a third-party diagram-generation tool, LLMs to produce Piping and Instrumentation Diagram (P&IDs) from textual specifications.",
        "The prototype demonstrated the feasibility of LLM-driven diagram automation, streamlining documentation workflows and laying the groundwork for further research into RAG-enhanced engineering tools."
      ]
    },
    {
      projectName: "Real-Time Human Movement Analytics Using Multiple Non-Invasive Video Feeds",
      projectDesc: "Bachelor’s Final-Year Group Project (2017)",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/eduze/OpenPosePersonDetector"
        }
      ],
      descBullets:[
        "Bachelor’s Final-Year Group Project – Real-Time Ground-Plane Human Movement Analytics.",
        "Create real-time analytics of human movement on the ground plane; address screen-space limits and poor multi-camera scalability.",
        "Built a C++/Python multi-camera pipeline with OpenCV and Integrated OpenPose/Caffe for pose estimation.",
        "Developed a Java/Spring backend for data aggregation & visualization.",
        "Delivered a scalable prototype supporting simultaneous feeds in real time, with markedly improved spatial accuracy."
      ]
    },
    {
      projectName: "Administration Support System for School of Postgraduate Studies",
      projectDesc: "Undergraduate project for SLIDA (2016)",
      // footerLink: [
      //   {
      //     name: "Visit Github",
      //     url: "https://github.com/Jayancv/PIGenerator"
      //   }
      // ],
      descBullets:[
        "Develop a web-based system for the School of Postgraduate Studies (SPS) at SLIDA to manage student registration, exam results, and financial records.",
        "Designed and implemented registration, exam-results, and finance modules using PHP with the Laravel framework. Structured and optimized data storage in MySQL and built responsive HTML interfaces. Tech: PHP, MySQL, Laravel, HTML",
        "Centralized student data workflows, eliminated paper-based processes, and improved data accuracy and accessibility for administrators and students alike."
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Sri Lankan Physics Olympiad - 2012",
      subtitle:
        "Won the Sri Lankan Physics Olympiad Gold medal.",
      // image: require("./assets/images/codeInLogo.webp"),
      // imageAlt: "Google Code-In Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "International Physics Olympiad - 2012",
      subtitle:
        "Represented Asian and international physics Olympiad competition in 2013 in Indonesia and Denmark.",
      // image: require("./assets/images/googleAssistantLogo.webp"),
      // imageAlt: "Google Assistant Action Logo",
      footerLink: [
     
      ]
    },
    {
      title: "IEEExtream 10.0 - 2016",
      subtitle: "IEEExtream 10.0 competition, island rank 20 (TeamJinx)",
      // image: require("./assets/images/pwaLogo.webp"),
      // imageAlt: "PWA Logo",
      footerLink: [
        // {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  email_address: "jcvidanapathirana@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
