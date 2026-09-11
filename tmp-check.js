(() => {
  // script.js
  var { useState, useEffect } = React;
  var Modal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
      return () => {
        document.body.style.overflow = "unset";
      };
    }, [isOpen]);
    if (!isOpen) return null;
    return /* @__PURE__ */ React.createElement("div", { className: "modal-overlay", onClick: onClose }, /* @__PURE__ */ React.createElement("div", { className: "modal-content", onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("button", { className: "modal-close", onClick: onClose }, /* @__PURE__ */ React.createElement("i", { className: "fas fa-times" })), children));
  };
  var Header = ({ darkMode, toggleDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return /* @__PURE__ */ React.createElement("header", { className: "header" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "logo" }, /* @__PURE__ */ React.createElement("h2", null, "Ireneo Atenta")), /* @__PURE__ */ React.createElement("nav", { className: `nav ${isMenuOpen ? "nav-open" : ""}` }, /* @__PURE__ */ React.createElement("a", { href: "#home", onClick: () => setIsMenuOpen(false) }, "Home"), /* @__PURE__ */ React.createElement("a", { href: "#about", onClick: () => setIsMenuOpen(false) }, "About"), /* @__PURE__ */ React.createElement("a", { href: "#projects", onClick: () => setIsMenuOpen(false) }, "Projects"), /* @__PURE__ */ React.createElement("a", { href: "#certificates", onClick: () => setIsMenuOpen(false) }, "Certificates"), /* @__PURE__ */ React.createElement("a", { href: "#contact", onClick: () => setIsMenuOpen(false) }, "Contact")), /* @__PURE__ */ React.createElement("div", { className: "header-controls" }, /* @__PURE__ */ React.createElement("button", { className: "menu-toggle", onClick: () => setIsMenuOpen(!isMenuOpen) }, /* @__PURE__ */ React.createElement("i", { className: `fas ${isMenuOpen ? "fa-times" : "fa-bars"}` })))));
  };
  var Hero = () => {
    return /* @__PURE__ */ React.createElement("section", { id: "home", className: "hero" }, /* @__PURE__ */ React.createElement("div", { className: "hero-content" }, /* @__PURE__ */ React.createElement("div", { className: "profile-image" }, /* @__PURE__ */ React.createElement("img", { src: "images/projects/profile.jpg", alt: "Profile" })), /* @__PURE__ */ React.createElement("div", { className: "hero-text" }, /* @__PURE__ */ React.createElement("h1", null, "Hi, I'm ", /* @__PURE__ */ React.createElement("span", { className: "highlight" }, "Ireneo Atenta")), /* @__PURE__ */ React.createElement("h2", null, "Technical Project Manager & Full Stack Developer"), /* @__PURE__ */ React.createElement("p", null, "I blend my expertise in technical project management and full stack web development to drive impactful outcomes. With a keen eye for detail and a passion for problem-solving, I lead teams through the entire project lifecycle, from planning to deployment."), /* @__PURE__ */ React.createElement("div", { className: "hero-buttons" }, /* @__PURE__ */ React.createElement("a", { href: "#projects", className: "btn btn-primary" }, "View My Work"), /* @__PURE__ */ React.createElement("a", { href: "#contact", className: "btn btn-secondary" }, "Get In Touch")))));
  };
  var About = () => {
    const skills = [
      { name: "JavaScript (React, Vue, Express)", level: 95 },
      { name: "Python (Pandas, NumPy)", level: 90 },
      { name: "SQL (Data Querying & Optimization)", level: 90 },
      { name: "Data Analysis & Data Cleaning", level: 95 },
      { name: "Google Sheets (Advanced: Formulas, Pivot Tables, Apps Script integration)", level: 90 },
      { name: "Google Apps Script", level: 95 },
      { name: "Google Workspace Automation", level: 90 },
      { name: "Power BI / Data Visualization", level: 85 },
      { name: "Tableau / Dashboarding", level: 80 },
      { name: "Statistics & Data Interpretation", level: 85 },
      { name: "ETL Processes (Extract, Transform, Load)", level: 80 },
      { name: "Project Management (Scrum, Agile)", level: 90 },
      { name: "UI/UX Design (Figma)", level: 80 },
      { name: "Docker & DevOps Basics", level: 75 },
      { name: "Mobile Development", level: 70 }
    ];
    return /* @__PURE__ */ React.createElement("section", { id: "about", className: "about" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, "About Me"), /* @__PURE__ */ React.createElement("div", { className: "about-content" }, /* @__PURE__ */ React.createElement("div", { className: "about-text" }, /* @__PURE__ */ React.createElement("h3", null, "Professional Summary"), /* @__PURE__ */ React.createElement("p", null, "In my roles, I blend my expertise in technical project management and full stack web development to drive impactful outcomes. With a keen eye for detail and a passion for problem-solving, I lead teams through the entire project lifecycle, from planning to deployment. My proficiency in both frontend and backend technologies allows me to create robust, user-friendly web applications."), /* @__PURE__ */ React.createElement("div", { className: "experience" }, /* @__PURE__ */ React.createElement("h4", null, "Work Experience"), /* @__PURE__ */ React.createElement("div", { className: "experience-item" }, /* @__PURE__ */ React.createElement("h5", null, "Advanced App Engineering Analyst"), /* @__PURE__ */ React.createElement("p", { className: "company" }, "Accenture (07.2024 - Current)"), /* @__PURE__ */ React.createElement("h6", null, "Data Analyst | Business Analyst (12.2025 - 06.2026)"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Analyzed and validated datasets to support business operations and reporting."), /* @__PURE__ */ React.createElement("li", null, "Prepared and transformed data to improve accuracy, consistency, and usability."), /* @__PURE__ */ React.createElement("li", null, "Created reports and dashboards to provide insights for stakeholders."), /* @__PURE__ */ React.createElement("li", null, "Collaborated with cross-functional teams to resolve data quality issues and support project requirements.")), /* @__PURE__ */ React.createElement("h6", null, "Full Stack Developer Support (07.2024 - 11.2025)"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Google Apps Script Developer specializing in Google Workspace Foundations"), /* @__PURE__ */ React.createElement("li", null, "Created custom scripts and add-ons to automate workflows across Google Sheets, Docs, Gmail, and Drive"), /* @__PURE__ */ React.createElement("li", null, "Expertise in API integrations, data processing, and workflow automation"))), /* @__PURE__ */ React.createElement("div", { className: "experience-item" }, /* @__PURE__ */ React.createElement("h5", null, "Technical Project Manager & Full Stack Web Developer"), /* @__PURE__ */ React.createElement("p", { className: "company" }, "Autofy.ai (02.2024 - 06.2024)"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Led development teams while actively contributing to coding efforts"), /* @__PURE__ */ React.createElement("li", null, "Created and integrated RESTful APIs into React frontend applications"), /* @__PURE__ */ React.createElement("li", null, "Utilized agile methodologies to guide project execution and foster collaboration"))), /* @__PURE__ */ React.createElement("div", { className: "experience-item" }, /* @__PURE__ */ React.createElement("h5", null, "Full Stack Development Instructor"), /* @__PURE__ */ React.createElement("p", { className: "company" }, "Centrive (CTI) (06.2022 - 01.2024)"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Taught full spectrum of web development including frontend and backend technologies"), /* @__PURE__ */ React.createElement("li", null, "Covered deployment practices and UI/UX design principles"), /* @__PURE__ */ React.createElement("li", null, "Empowered interns to create fully functional and visually appealing web applications"))), /* @__PURE__ */ React.createElement("div", { className: "experience-item" }, /* @__PURE__ */ React.createElement("h5", null, "Intern Backend Web Developer"), /* @__PURE__ */ React.createElement("p", { className: "company" }, "Intelliseven Technologies Inc. (09.2023 - 12.2023)"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Specialized in Node.js framework during 700-hour internship"), /* @__PURE__ */ React.createElement("li", null, "Led backend development for comprehensive Daily Time Record (DTR) system"), /* @__PURE__ */ React.createElement("li", null, "Ensured seamless integration and functionality, enhancing system efficiency"))), /* @__PURE__ */ React.createElement("div", { className: "experience-item" }, /* @__PURE__ */ React.createElement("h5", null, "Freelance Full Stack Web Developer"), /* @__PURE__ */ React.createElement("p", { className: "company" }, "Self-Employed (07.2021 - Current)"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Specialized in PHP, React, Arduino, and web services"), /* @__PURE__ */ React.createElement("li", null, "Developed IoT solutions and hardware integrations"), /* @__PURE__ */ React.createElement("li", null, "Delivered versatile solutions across various domains"))))), /* @__PURE__ */ React.createElement("div", { className: "skills" }, /* @__PURE__ */ React.createElement("h3", null, "Technical Skills"), skills.map((skill, index) => /* @__PURE__ */ React.createElement("div", { key: index, className: "skill-item" }, /* @__PURE__ */ React.createElement("div", { className: "skill-header" }, /* @__PURE__ */ React.createElement("span", null, skill.name), /* @__PURE__ */ React.createElement("span", null, skill.level, "%")), /* @__PURE__ */ React.createElement("div", { className: "skill-bar" }, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "skill-progress",
        style: { width: `${skill.level}%` }
      }
    ))))))));
  };
  var Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const projects = [
      {
        id: 1,
        title: "Property Management Portal",
        description: "Property management and resident portal for condos and communities",
        fullDescription: "Developed a property management platform that helps administrators manage properties, residents, billing, payments, maintenance, and announcements while providing residents with a personalized portal for their property and account.",
        image: "images/projects/crm-realstate-portal.png",
        technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Axios"],
        liveUrl: "#",
        githubUrl: "#",
        features: [
          "Property & Resident Management",
          "Billing & Payment Tracking",
          "Maintenance Requests",
          "Community Announcements",
          "Resident Portal",
          "Role-Based Access Control"
        ]
      },
      {
        id: 2,
        title: "San Miguel Barangay Portal",
        description: "Digital platform for community services and certificate requests",
        fullDescription: "Developed a one-stop digital platform for community services, updates, and certificate requests. The portal allows residents to stay connected with their local government and access online services 24/7. Key features include a resident registration system, certificate issuance tracking, and community updates.",
        image: "images/projects/barangay-portal.png",
        technologies: [
          "React",
          "Node.js",
          "Express",
          "PostgreSQL",
          "JavaScript"
        ],
        liveUrl: "#",
        githubUrl: "#",
        features: [
          "Online Certificate Request",
          "Registered Residents Database",
          "Community Updates",
          "24/7 Online Services"
        ]
      },
      {
        id: 3,
        title: "Cockfight Management System",
        description: "Comprehensive management & ticketing system for cockfighting events",
        fullDescription: "I led the development of a comprehensive management and ticketing system for cockfighting events, focusing on enhancing user experience and operational efficiency. This project involved creating a robust platform that streamlines event management, ticket sales, and user engagement.",
        image: "images/projects/cockfight.png",
        technologies: ["Next.js", "Express", "MongoDB", "Tailwind CSS"],
        liveUrl: "#",
        githubUrl: "#",
        features: [
          "Event Management",
          "Ticketing System",
          "User Authentication",
          "Real-time Notifications",
          "Role-Based Access Control",
          "Income Tracking",
          "Payment Integration"
        ]
      },
      {
        id: 4,
        title: "Remimic",
        description: "AI-powered media generation platform",
        fullDescription: "Played a key role in developing and managing an AI-powered media generation platform, contributing to web development, API integrations, and user-facing features for AI-generated content.",
        image: "images/projects/remimic.png",
        technologies: ["React", "Next.js", "AI Integration", "Express", "APIs"],
        liveUrl: "#",
        githubUrl: "#",
        features: [
          "AI Content Generation",
          "Media Processing",
          "API Integration",
          "Subscription Management",
          "User-Friendly Interface"
        ]
      },
      {
        id: 5,
        title: "FVA Chatting",
        description: "Communication and management platform for agencies and creators",
        fullDescription: "As a web development project manager, I helped drive the development of a communication and management platform designed to improve workflow, engagement, and operational efficiency for agencies and creators.",
        image: "images/projects/fvachat.png",
        technologies: ["React", "Real-time Chat", "Express", "MongoDB"],
        liveUrl: "#",
        githubUrl: "#",
        features: [
          "Real-time Communication",
          "Agency Management",
          "Performance Analytics",
          "User Engagement Tools"
        ]
      },
      {
        id: 6,
        title: "Simptracker",
        description: "Content creation and management platform for creators",
        fullDescription: "Oversaw the development and implementation of a digital platform focused on content management, analytics, and workflow automation, helping creators organize their content and improve their overall workflow.",
        image: "images/projects/simptracker.png",
        technologies: ["React", "Node.js", "Analytics", "Workflow Automation"],
        liveUrl: "#",
        githubUrl: "#",
        features: [
          "Content Management",
          "Analytics Dashboard",
          "Creator Tools",
          "Workflow Automation"
        ]
      },
      {
        id: 7,
        title: "Custom POS System - Kmroute21",
        description: "Tailored Point-of-Sale system for business operations",
        fullDescription: "Developed a tailored Point-of-Sale solution for order management, payment processing, inventory control, and reporting, ensuring business-specific needs are met. As a full-stack developer, I managed the design, deployment, and ongoing support to maintain optimal performance.",
        image: "images/projects/kmroute21.png",
        technologies: ["PHP", "Laravel", "MySQL", "JavaScript"],
        liveUrl: "#",
        githubUrl: "#",
        features: [
          "Order Management",
          "Payment Processing",
          "Inventory Control",
          "Business Reports"
        ]
      }
    ];
    return /* @__PURE__ */ React.createElement("section", { id: "projects", className: "projects" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, "My Projects"), /* @__PURE__ */ React.createElement("div", { className: "projects-grid" }, projects.map((project) => /* @__PURE__ */ React.createElement("div", { key: project.id, className: "project-card" }, /* @__PURE__ */ React.createElement("div", { className: "project-image" }, /* @__PURE__ */ React.createElement("img", { src: project.image, alt: project.title }), /* @__PURE__ */ React.createElement("div", { className: "project-overlay" }, /* @__PURE__ */ React.createElement("div", { className: "project-links" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "btn btn-small",
        onClick: () => setSelectedProject(project)
      },
      /* @__PURE__ */ React.createElement("i", { className: "fas fa-eye" }),
      " View Details"
    ), project.liveUrl !== "#" ? /* @__PURE__ */ React.createElement("a", { href: project.liveUrl, className: "btn btn-small", target: "_blank", rel: "noopener noreferrer" }, /* @__PURE__ */ React.createElement("i", { className: "fas fa-external-link-alt" }), " Live Demo") : /* @__PURE__ */ React.createElement(React.Fragment, null, " ")))), /* @__PURE__ */ React.createElement("div", { className: "project-content" }, /* @__PURE__ */ React.createElement("h3", null, project.title), /* @__PURE__ */ React.createElement("p", null, project.description), /* @__PURE__ */ React.createElement("div", { className: "project-technologies" }, project.technologies.map((tech, index) => /* @__PURE__ */ React.createElement("span", { key: index, className: "tech-tag" }, tech))), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "btn btn-primary btn-small",
        style: { marginTop: "1rem" },
        onClick: () => setSelectedProject(project)
      },
      "View Details"
    )))))), /* @__PURE__ */ React.createElement(Modal, { isOpen: !!selectedProject, onClose: () => setSelectedProject(null) }, selectedProject && /* @__PURE__ */ React.createElement("div", { className: "project-modal" }, /* @__PURE__ */ React.createElement("img", { src: selectedProject.image, alt: selectedProject.title, className: "modal-image" }), /* @__PURE__ */ React.createElement("div", { className: "modal-body" }, /* @__PURE__ */ React.createElement("h2", null, selectedProject.title), /* @__PURE__ */ React.createElement("p", { className: "modal-description" }, selectedProject.fullDescription), /* @__PURE__ */ React.createElement("div", { className: "modal-section" }, /* @__PURE__ */ React.createElement("h3", null, "Technologies Used"), /* @__PURE__ */ React.createElement("div", { className: "project-technologies" }, selectedProject.technologies.map((tech, index) => /* @__PURE__ */ React.createElement("span", { key: index, className: "tech-tag" }, tech)))), /* @__PURE__ */ React.createElement("div", { className: "modal-section" }, /* @__PURE__ */ React.createElement("h3", null, "Key Features"), /* @__PURE__ */ React.createElement("ul", { className: "feature-list" }, selectedProject.features.map((feature, index) => /* @__PURE__ */ React.createElement("li", { key: index }, feature)))), /* @__PURE__ */ React.createElement("div", { className: "modal-links" }, selectedProject.liveUrl !== "#" && /* @__PURE__ */ React.createElement("a", { href: selectedProject.liveUrl, className: "btn btn-primary", target: "_blank", rel: "noopener noreferrer" }, /* @__PURE__ */ React.createElement("i", { className: "fas fa-external-link-alt" }), " Live Demo"), /* @__PURE__ */ React.createElement("a", { href: selectedProject.githubUrl, className: "btn btn-secondary", target: "_blank", rel: "noopener noreferrer" }, /* @__PURE__ */ React.createElement("i", { className: "fab fa-github" }), " View Code"))))));
  };
  var Certificates = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const certificates = [
      {
        id: 1,
        title: "Generative AI APIs for Practical Applications",
        issuer: "Professional Development",
        date: "2025-03-27",
        image: "images/certificates/generative-ai-apis.png",
        credentialUrl: "#",
        description: "Introduction to practical applications of Generative AI APIs in real-world scenarios.",
        skills: ["AI Integration", "API Development", "Machine Learning", "Automation"],
        validUntil: "Lifetime"
      },
      {
        id: 2,
        title: "Artificial Intelligence and Machine Learning",
        issuer: "Professional Development",
        date: "2025-03-26",
        image: "images/certificates/ai-ml.png",
        credentialUrl: "#",
        description: "Comprehensive understanding of AI and Machine Learning principles and applications.",
        skills: ["Machine Learning", "AI Algorithms", "Data Processing", "Neural Networks"],
        validUntil: "Lifetime"
      },
      {
        id: 3,
        title: "Visual Studio Code Editor: Languages and Tasks",
        issuer: "Professional Development",
        date: "2024-11-28",
        image: "images/certificates/vscode-editor.png",
        credentialUrl: "#",
        description: "Advanced proficiency in Visual Studio Code for multi-language development.",
        skills: ["IDE Mastery", "Multi-language Support", "Task Automation", "Development Tools"],
        validUntil: "Lifetime"
      },
      {
        id: 4,
        title: "Working with WebLOAD",
        issuer: "Percipio & Accenture",
        date: "2024-11-27",
        image: "images/certificates/percipio-webload.png",
        credentialUrl: "#",
        description: "Certificate of Completion for the course 'Working with WebLOAD', covering WebLOAD 10.3.1. The course duration was 1 hour and 3 minutes.",
        skills: ["WebLOAD", "Performance Testing", "Software Testing"],
        validUntil: "Lifetime"
      },
      {
        id: 5,
        title: "Defining a Project Scope and Team",
        issuer: "Percipio & Accenture",
        date: "2024-11-20",
        image: "images/certificates/percipio-project-scope.png",
        credentialUrl: "#",
        description: "Certificate of Completion for the course 'Defining a Project Scope and Team', with a duration of 22 minutes.",
        skills: ["Project Management", "Scope Definition", "Team Building"],
        validUntil: "Lifetime"
      },
      {
        id: 6,
        title: "Keeping Up With the Javascripts: ES6",
        issuer: "Pirple.com",
        date: "2024-10-08",
        image: "images/certificates/pirple-es6.png",
        credentialUrl: "#",
        description: "Certificate for successfully completing the course 'Keeping Up With the Javascripts: ES6' on Pirple.com. Topics covered include Data Types, If-Statements, Operators, Functions, Switch Statements, Loops, the DOM, Template Literals, Destructuring, Exceptions, Object Oriented Programming, Classes, Callbacks, Promises, the Fetch API, Rest and Spread, Object Properties, Maps, Sets, and Build Tools.",
        skills: ["JavaScript", "ES6", "DOM", "Object-Oriented Programming", "Asynchronous JavaScript", "Fetch API"],
        validUntil: "Lifetime"
      },
      {
        id: 7,
        title: "Web Fundamentals: Web Development with HTML",
        issuer: "Percipio & Accenture",
        date: "2024-08-08",
        image: "images/certificates/percipio-html.png",
        credentialUrl: "#",
        description: "Certificate of Completion for the course 'Web Fundamentals: Web Development with HTML', with a duration of 1 hour and 19 minutes.",
        skills: ["HTML", "Web Development", "Web Fundamentals"],
        validUntil: "Lifetime"
      },
      {
        id: 8,
        title: "JavaScript: Advanced Function Operations",
        issuer: "Percipio & Accenture",
        date: "2024-08-07",
        image: "images/certificates/percipio-js-advanced.png",
        credentialUrl: "#",
        description: "Certificate of Completion for the course 'JavaScript: Advanced Function Operations' (ECMAScript 2019), with a duration of 42 minutes.",
        skills: ["JavaScript", "ECMAScript 2019", "Advanced Functions"],
        validUntil: "Lifetime"
      },
      {
        id: 9,
        title: "JavaScript: Functions & Arrays in JavaScript",
        issuer: "Percipio & Accenture",
        date: "2024-08-07",
        image: "images/certificates/percipio-js-functions-arrays.png",
        credentialUrl: "#",
        description: "Certificate of Completion for the course 'JavaScript: Functions & Arrays in JavaScript' (ECMAScript 2019), with a duration of 1 hour and 44 minutes.",
        skills: ["JavaScript", "ECMAScript 2019", "Functions", "Arrays"],
        validUntil: "Lifetime"
      },
      {
        id: 10,
        title: "JavaScript: Introduction",
        issuer: "Percipio & Accenture",
        date: "2024-08-07",
        image: "images/certificates/percipio-js-intro.png",
        credentialUrl: "#",
        description: "Certificate of Completion for the introductory course on JavaScript (ECMAScript 2019), with a duration of 59 minutes.",
        skills: ["JavaScript", "ECMAScript 2019", "Programming Fundamentals"],
        validUntil: "Lifetime"
      },
      {
        id: 11,
        title: "National Certificate III in Bookkeeping",
        issuer: "Technical Education and Skills Development Authority (TESDA)",
        date: "2019-11-16",
        image: "images/certificates/tesda-bookkeeping.jpg",
        credentialUrl: "https://www.tesda.gov.ph",
        description: "National Certificate III for completing the competency requirements in Bookkeeping under the Philippine TVET Competency Assessment and Certification System. This certification covers basic, common, and core competencies in bookkeeping.",
        skills: ["Bookkeeping", "Workplace Communication", "Teamwork", "Solving Workplace Problems", "Mathematical Concepts", "Relevant Technologies", "Quality Standards", "Customer Relations", "Personal Performance", "Journalizing Transactions", "Posting Transactions", "Trial Balance", "Financial Reports", "Internal Control"],
        validUntil: "2024-11-15"
      },
      {
        id: 12,
        title: "Contact Center Services NC II",
        issuer: "Eclaro Academy",
        date: "2019-07-18",
        image: "images/certificates/eclaro-contact-center-ncii.jpg",
        credentialUrl: "#",
        description: "Certificate of Completion for completing the competency requirements in Contact Center Services NC II under the Technical Education and Skills Development Authority (TESDA).",
        skills: ["Participate in workplace communication", "Work in a team environment", "Practice career professionalism", "Practice occupational health and safety procedures", "Apply quality standards", "Perform computer operations", "Communicate effectively in English for customer service", "Perform customer service delivery processes", "Demonstrate ability to effectively engage customers"],
        validUntil: "Lifetime"
      },
      {
        id: 13,
        title: "Best in Call Center Agent",
        issuer: "TESDA - Eclaro Academy",
        date: "2019-06-15",
        image: "images/certificates/eclaro-call-center.jpg",
        credentialUrl: "#",
        description: "Recognition for commendable performance in Contact Center Services NC II, awarded as Best in Call Center Agent.",
        skills: ["Customer Service", "Communication", "Call Center Operations", "Problem Solving"],
        validUntil: "Lifetime"
      },
      {
        id: 14,
        title: "Programmer of the Year",
        issuer: "AMA Computer College - Tacloban City, Inc.",
        date: "2019-05-11",
        image: "images/certificates/ama-programmer-of-the-year.png",
        credentialUrl: "#",
        description: "Award for Outstanding Performance and Excellence in Programming.",
        skills: ["Programming", "Excellence", "Performance"],
        validUntil: "Lifetime"
      },
      {
        id: 15,
        title: "Frontend Fundamentals",
        issuer: "Pirple.com",
        date: "2021-02-20",
        image: "images/certificates/pirple-frontend.png",
        credentialUrl: "#",
        description: "Certificate for successfully passing the Pirple.com course 'Frontend Fundamentals', including all quizzes, homework, projects, and exams. The course covered HTML5 and CSS3 skills.",
        skills: ["HTML5", "CSS3", "Responsive Web Design", "Frontend Development"],
        validUntil: "Lifetime"
      },
      {
        id: 16,
        title: "Certificate of Appreciation Web Systems Teaching",
        issuer: "Quezon City University",
        date: "2021-02-11",
        image: "images/certificates/qcu-appreciation.jpg",
        credentialUrl: "#",
        description: "Certificate of Appreciation for sharing and presenting knowledge in Web Systems.",
        skills: ["Web Systems", "Public Speaking", "Knowledge Sharing"],
        validUntil: "Lifetime"
      }
    ];
    return /* @__PURE__ */ React.createElement("section", { id: "certificates", className: "certificates" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, "Certificates & Achievements"), /* @__PURE__ */ React.createElement("div", { className: "certificates-grid" }, certificates.map((cert) => /* @__PURE__ */ React.createElement("div", { key: cert.id, className: "certificate-card" }, /* @__PURE__ */ React.createElement("div", { className: "certificate-image" }, /* @__PURE__ */ React.createElement("img", { src: cert.image, alt: cert.title }), /* @__PURE__ */ React.createElement("div", { className: "certificate-overlay" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "btn btn-small",
        onClick: () => setSelectedCertificate(cert)
      },
      /* @__PURE__ */ React.createElement("i", { className: "fas fa-eye" }),
      " View Details"
    ))), /* @__PURE__ */ React.createElement("div", { className: "certificate-content" }, /* @__PURE__ */ React.createElement("h3", null, cert.title), /* @__PURE__ */ React.createElement("p", { className: "issuer" }, cert.issuer), /* @__PURE__ */ React.createElement("p", { className: "date" }, cert.date), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "btn btn-small",
        onClick: () => setSelectedCertificate(cert)
      },
      "View Details"
    )))))), /* @__PURE__ */ React.createElement(Modal, { isOpen: !!selectedCertificate, onClose: () => setSelectedCertificate(null) }, selectedCertificate && /* @__PURE__ */ React.createElement("div", { className: "certificate-modal" }, /* @__PURE__ */ React.createElement("img", { src: selectedCertificate.image, alt: selectedCertificate.title, className: "modal-image" }), /* @__PURE__ */ React.createElement("div", { className: "modal-body" }, /* @__PURE__ */ React.createElement("h2", null, selectedCertificate.title), /* @__PURE__ */ React.createElement("p", { className: "modal-issuer" }, "Issued by: ", /* @__PURE__ */ React.createElement("strong", null, selectedCertificate.issuer)), /* @__PURE__ */ React.createElement("p", { className: "modal-date" }, "Date: ", /* @__PURE__ */ React.createElement("strong", null, selectedCertificate.date)), /* @__PURE__ */ React.createElement("p", { className: "modal-valid" }, "Valid Until: ", /* @__PURE__ */ React.createElement("strong", null, selectedCertificate.validUntil)), /* @__PURE__ */ React.createElement("div", { className: "modal-section" }, /* @__PURE__ */ React.createElement("h3", null, "Description"), /* @__PURE__ */ React.createElement("p", null, selectedCertificate.description)), /* @__PURE__ */ React.createElement("div", { className: "modal-section" }, /* @__PURE__ */ React.createElement("h3", null, "Skills Validated"), /* @__PURE__ */ React.createElement("div", { className: "skills-tags" }, selectedCertificate.skills.map((skill, index) => /* @__PURE__ */ React.createElement("span", { key: index, className: "skill-tag" }, skill)))), selectedCertificate.credentialUrl !== "#" && /* @__PURE__ */ React.createElement("div", { className: "modal-links" }, /* @__PURE__ */ React.createElement("a", { href: selectedCertificate.credentialUrl, className: "btn btn-primary", target: "_blank", rel: "noopener noreferrer" }, /* @__PURE__ */ React.createElement("i", { className: "fas fa-external-link-alt" }), " Verify Credential"))))));
  };
  var Contact = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: ""
    });
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      alert("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    };
    return /* @__PURE__ */ React.createElement("section", { id: "contact", className: "contact" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, "Get In Touch"), /* @__PURE__ */ React.createElement("div", { className: "contact-content" }, /* @__PURE__ */ React.createElement("div", { className: "contact-info" }, /* @__PURE__ */ React.createElement("h3", null, "Let's Connect"), /* @__PURE__ */ React.createElement("p", null, "I'm always interested in hearing about new opportunities and projects."), /* @__PURE__ */ React.createElement("div", { className: "contact-details" }, /* @__PURE__ */ React.createElement("div", { className: "contact-item" }, /* @__PURE__ */ React.createElement("i", { className: "fas fa-envelope" }), /* @__PURE__ */ React.createElement("span", null, "ireneo.atenta211@gmail.com")), /* @__PURE__ */ React.createElement("div", { className: "contact-item" }, /* @__PURE__ */ React.createElement("i", { className: "fas fa-map-marker-alt" }), /* @__PURE__ */ React.createElement("span", null, "Philippines"))), /* @__PURE__ */ React.createElement("div", { className: "social-links" }, /* @__PURE__ */ React.createElement("a", { href: "https://www.linkedin.com/in/ireneo-atenta-770561252/", target: "_blank", rel: "noopener noreferrer" }, /* @__PURE__ */ React.createElement("i", { className: "fab fa-linkedin" })), /* @__PURE__ */ React.createElement("a", { href: "https://github.com/loop2113", target: "_blank", rel: "noopener noreferrer" }, /* @__PURE__ */ React.createElement("i", { className: "fab fa-github" })), /* @__PURE__ */ React.createElement("a", { href: "https://stackoverflow.com/users/26643119/lime-husky", target: "_blank", rel: "noopener noreferrer" }, /* @__PURE__ */ React.createElement("i", { className: "fab fa-stack-overflow" })), /* @__PURE__ */ React.createElement("a", { href: "https://www.upwork.com/freelancers/~01e2d2c2f7db76cdf2", target: "_blank", rel: "noopener noreferrer" }, /* @__PURE__ */ React.createElement("i", { className: "fas fa-briefcase" })))), /* @__PURE__ */ React.createElement("form", { className: "contact-form", onSubmit: handleSubmit }, /* @__PURE__ */ React.createElement("div", { className: "form-group" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        name: "name",
        placeholder: "Your Name",
        value: formData.name,
        onChange: handleChange,
        required: true
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "form-group" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "email",
        name: "email",
        placeholder: "Your Email",
        value: formData.email,
        onChange: handleChange,
        required: true
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "form-group" }, /* @__PURE__ */ React.createElement(
      "textarea",
      {
        name: "message",
        placeholder: "Your Message",
        rows: "5",
        value: formData.message,
        onChange: handleChange,
        required: true
      }
    )), /* @__PURE__ */ React.createElement("button", { type: "submit", className: "btn btn-primary" }, "Send Message")))));
  };
  var Footer = () => {
    return /* @__PURE__ */ React.createElement("footer", { className: "footer" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("p", null, "\xA9 ", (/* @__PURE__ */ new Date()).getFullYear(), " Ireneo Atenta. All rights reserved.")));
  };
  var App = () => {
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
      const savedDarkMode = localStorage.getItem("darkMode") === "true";
      setDarkMode(savedDarkMode);
      if (savedDarkMode) {
        document.body.classList.add("dark-mode");
      }
      const links = document.querySelectorAll('a[href^="#"]');
      links.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const target = document.querySelector(link.getAttribute("href"));
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        });
      });
    }, []);
    const toggleDarkMode = () => {
      const newDarkMode = !darkMode;
      setDarkMode(newDarkMode);
      localStorage.setItem("darkMode", newDarkMode.toString());
      if (newDarkMode) {
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
      }
    };
    return /* @__PURE__ */ React.createElement("div", { className: "App" }, /* @__PURE__ */ React.createElement(Header, { darkMode, toggleDarkMode }), /* @__PURE__ */ React.createElement(Hero, null), /* @__PURE__ */ React.createElement(About, null), /* @__PURE__ */ React.createElement(Projects, null), /* @__PURE__ */ React.createElement(Certificates, null), /* @__PURE__ */ React.createElement(Contact, null), /* @__PURE__ */ React.createElement(Footer, null));
  };
  var root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(/* @__PURE__ */ React.createElement(App, null));
})();
