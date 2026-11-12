
const { useState, useEffect } = React;

// Modal Component
const Modal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    <i className="fas fa-times"></i>
                </button>
                {children}
            </div>
        </div>
    );
};

// Header Component
const Header = ({ darkMode, toggleDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <h2>Ireneo Atenta</h2>
                </div>
                <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                    <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
                    <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
                    <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
                    <a href="#certificates" onClick={() => setIsMenuOpen(false)}>Certificates</a>
                    <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
                </nav>
                <div className="header-controls">
                    {/* <button className="theme-toggle" onClick={toggleDarkMode}>
                        <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
                    </button> */}
                    <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                </div>
            </div>
        </header>
    );
};

// Hero Section
const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <div className="profile-image">
                    <img src="images/projects/profile.jpg" alt="Profile" />
                </div>
                <div className="hero-text">
                    <h1>Hi, I'm <span className="highlight">Ireneo Atenta</span></h1>
                    <h2>Technical Project Manager & Full Stack Developer</h2>
                    <p>I blend my expertise in technical project management and full stack web development to drive impactful outcomes. With a keen eye for detail and a passion for problem-solving, I lead teams through the entire project lifecycle, from planning to deployment.</p>
                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">View My Work</a>
                        <a href="#contact" className="btn btn-secondary">Get In Touch</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

// About Section
const About = () => {
const skills = [
    { name: 'JavaScript (React, Vue, Express)', level: 95 },
    { name: 'Python (Pandas, NumPy)', level: 90 },
    { name: 'SQL (Data Querying & Optimization)', level: 90 },
    { name: 'Data Analysis & Data Cleaning', level: 95 },
    { name: 'Google Sheets (Advanced: Formulas, Pivot Tables, Apps Script integration)', level: 90 },
    { name: 'Google Apps Script', level: 95 },
    { name: 'Google Workspace Automation', level: 90 },
    { name: 'Power BI / Data Visualization', level: 85 },
    { name: 'Tableau / Dashboarding', level: 80 },
    { name: 'Statistics & Data Interpretation', level: 85 },
    { name: 'ETL Processes (Extract, Transform, Load)', level: 80 },
    { name: 'Project Management (Scrum, Agile)', level: 90 },
    { name: 'UI/UX Design (Figma)', level: 80 },
    { name: 'Docker & DevOps Basics', level: 75 },
    { name: 'Mobile Development', level: 70 }
];

    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <h3>Professional Summary</h3>
                        <p>
                            In my roles, I blend my expertise in technical project management and full stack web development to drive impactful outcomes. With a keen eye for detail and a passion for problem-solving, I lead teams through the entire project lifecycle, from planning to deployment. My proficiency in both frontend and backend technologies allows me to create robust, user-friendly web applications.
                        </p>
                        <div className="experience">
                            <h4>Work Experience</h4>
                            <div className="experience-item">
                                <h5>Advanced App Engineering Analyst</h5>
                                <p className="company">Accenture (07.2024 - Current)</p>
                                <h6>Full Stack Developer (07.2024 - Present)</h6>
                                <ul>
                                    <li>Developed and maintained web applications using React for frontend development and C# for backend development.</li>
                                    <li>Built and integrated REST APIs to support application features and frontend functionality.</li>
                                    <li>Worked with SQL databases for data storage, queries, and application operations.</li>
                                    <li>Collaborated with stakeholders and development teams to implement requirements and resolve technical issues.</li>
                                </ul>

                                <h6>Data Analyst | Business Analyst (12.2025 - 06.2026)</h6>
                                <ul>
                                    <li>Analyzed and validated datasets to support business operations and reporting.</li>
                                    <li>Prepared and transformed data to improve accuracy, consistency, and usability.</li>
                                    <li>Created reports and dashboards to provide insights for stakeholders.</li>
                                    <li>Collaborated with cross-functional teams to resolve data quality issues and support project requirements.</li>
                                </ul>

                                <h6>Full Stack Developer Support (07.2024 - 11.2025)</h6>
                                <ul>
                                    <li>Google Apps Script Developer specializing in Google Workspace Foundations</li>
                                    <li>Created custom scripts and add-ons to automate workflows across Google Sheets, Docs, Gmail, and Drive</li>
                                    <li>Expertise in API integrations, data processing, and workflow automation</li>
                                </ul>
                            </div>
                            <div className="experience-item">

                        <h5>Technical Project Manager & Full Stack Web Developer</h5>
                        <p className="company">FVA Chatting, Remimic & Simptracker (02.2024 - 06.2024)</p>
                            <ul>
                                <li>Led and managed web development projects while actively contributing to frontend and backend development.</li>
                                <li>Developed and maintained web applications using React, Node.js, Express, and MongoDB.</li>
                                <li>Integrated RESTful APIs and third-party services to support application functionality and workflows.</li>
                                <li>Worked closely with clients, stakeholders, and development teams to gather requirements and deliver project solutions.</li>
                                <li>Applied Agile methodologies, sprint planning, and task management to ensure timely project delivery.</li>
                            </ul>
                        </div>  
                            <div className="experience-item">
                                <h5>Full Stack Development Instructor</h5>
                                <p className="company">Centrive (CTI) (06.2022 - 01.2024)</p>
                                <ul>
                                    <li>Taught full spectrum of web development including frontend and backend technologies</li>
                                    <li>Covered deployment practices and UI/UX design principles</li>
                                    <li>Empowered interns to create fully functional and visually appealing web applications</li>
                                </ul>
                            </div>
                            <div className="experience-item">
                                <h5>Intern Backend Web Developer</h5>
                                <p className="company">Intelliseven Technologies Inc. (09.2023 - 12.2023)</p>
                                <ul>
                                    <li>Specialized in Node.js framework during 700-hour internship</li>
                                    <li>Led backend development for comprehensive Daily Time Record (DTR) system</li>
                                    <li>Ensured seamless integration and functionality, enhancing system efficiency</li>
                                </ul>
                            </div>
                            <div className="experience-item">
                                <h5>Freelance Full Stack Web Developer</h5>
                                <p className="company">Self-Employed (07.2021 - Current)</p>
                                <ul>
                                    <li>Specialized in PHP, React, Arduino, and web services</li>
                                    <li>Developed IoT solutions and hardware integrations</li>
                                    <li>Delivered versatile solutions across various domains</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="skills">
                        <h3>Technical Skills</h3>
                        {skills.map((skill, index) => (
                            <div key={index} className="skill-item">
                                <div className="skill-header">
                                    <span>{skill.name}</span>
                                    <span>{skill.level}%</span>
                                </div>
                                <div className="skill-bar">
                                    <div
                                        className="skill-progress"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Projects Section
const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
       {
        id: 1,
        title: "EquityDeals Mobile CRM",
        description: "Mobile CRM for real-estate investors",
        fullDescription: "Built a Flutter mobile CRM for real-estate investors that brings team SMS inboxes, calling, contacts, calendar, and tasks together across multiple sub-accounts. The UI follows Material 3 with a centralized color palette, so every screen supports Light, Dark, and System themes.",
        image: "images/projects/equitydeals.png",
        technologies: ["Flutter", "Dart", "Material 3"],
        liveUrl: "#",
        githubUrl: "#",
        features: [
            "Team SMS Inboxes",
            "Calling",
            "Contacts Management",
            "Calendar & Appointments",
            "Task Management",
            "Multiple Sub-Accounts",
            "Light, Dark & System Themes"
        ]
    },
    {
        id: 2,
        title: "Simply List Now Mobile CRM",
        description: "Mobile CRM for real-estate agents",
        fullDescription: "Built a Flutter mobile CRM for real-estate agents that keeps people, inbox, tasks, calendar, and deals in one phone app. It uses a Material 3 structure with the EquityDeals palette in Light and Dark themes.",
        image: "images/projects/simplylist.png",
        technologies: ["Flutter", "Dart", "Material 3"],
        liveUrl: "#",
        githubUrl: "#",
        features: [
            "People & Contacts",
            "Inbox",
            "Tasks",
            "Calendar",
            "Deal Tracking",
            "Light & Dark Themes"
        ]
    },
    {
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
        id: 9,
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
    },
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">My Projects</h2>
                <div className="projects-grid">
                    {projects.map(project => (
                        <div key={project.id} className="project-card">
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <button
                                            className="btn btn-small"
                                            onClick={() => setSelectedProject(project)}
                                        >
                                            <i className="fas fa-eye"></i> View Details
                                        </button>
                                        {project.liveUrl !== '#' ? (
                                            <a href={project.liveUrl} className="btn btn-small" target="_blank" rel="noopener noreferrer">
                                            <i className="fas fa-external-link-alt"></i> Live Demo
                                        </a>) : <> </>}
                                    </div>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-technologies">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                <button
                                    className="btn btn-primary btn-small"
                                    style={{ marginTop: '1rem' }}
                                    onClick={() => setSelectedProject(project)}
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
                {selectedProject && (
                    <div className="project-modal">
                        <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
                        <div className="modal-body">
                            <h2>{selectedProject.title}</h2>
                            <p className="modal-description">{selectedProject.fullDescription}</p>

                            <div className="modal-section">
                                <h3>Technologies Used</h3>
                                <div className="project-technologies">
                                    {selectedProject.technologies.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="modal-section">
                                <h3>Key Features</h3>
                                <ul className="feature-list">
                                    {selectedProject.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="modal-links">
                               {selectedProject.liveUrl !== '#' && ( <a href={selectedProject.liveUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-external-link-alt"></i> Live Demo
                                </a> )}
                                <a href={selectedProject.githubUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i> View Code
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    );
};

// Certificates Section
const Certificates = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [activeCategory, setActiveCategory] = useState('All');

    const certificates = [
        {
            id: 1,
            title: "Generative AI APIs for Practical Applications",
            category: "AI & Machine Learning",
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
            category: "AI & Machine Learning",
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
            category: "Programming & Software",
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
            category: "Programming & Software",
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
            category: "Project Management & Agile",
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
            category: "Web Development",
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
            category: "Web Development",
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
            category: "Web Development",
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
            category: "Web Development",
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
            category: "Web Development",
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
            category: "Awards & Training",
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
            category: "Awards & Training",
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
            category: "Awards & Training",
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
            category: "Awards & Training",
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
            category: "Web Development",
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
            category: "Awards & Training",
            issuer: "Quezon City University",
            date: "2021-02-11",
            image: "images/certificates/qcu-appreciation.jpg",
            credentialUrl: "#",
            description: "Certificate of Appreciation for sharing and presenting knowledge in Web Systems.",
            skills: ["Web Systems", "Public Speaking", "Knowledge Sharing"],
            validUntil: "Lifetime"
        },
        {
            id: 17,
            title: "Agile Project Planning",
            category: "Project Management & Agile",
            issuer: "Percipio & Accenture",
            date: "2025-07-12",
            image: "images/certificates/agile-project-planning.png",
            credentialUrl: "#",
            description: "Certificate of Completion for the course 'Agile Project Planning', with a duration of 43 minutes.",
            skills: ["Agile", "Project Planning", "Project Management"],
            validUntil: "Lifetime"
        },
        {
            id: 18,
            title: "Automation Design & Robotics",
            category: "Programming & Software",
            issuer: "Percipio & Accenture",
            date: "2025-07-12",
            image: "images/certificates/automation-design-robotics.png",
            credentialUrl: "#",
            description: "Certificate of Completion for the course 'Automation Design & Robotics', with a duration of 34 minutes.",
            skills: ["Automation", "Robotics", "Design"],
            validUntil: "Lifetime"
        },
        {
            id: 19,
            title: "Being an Effective Team Member",
            category: "Teamwork & Soft Skills",
            issuer: "Percipio & Accenture",
            date: "2025-07-12",
            image: "images/certificates/being-an-effective-team-member.png",
            credentialUrl: "#",
            description: "Certificate of Completion for the course 'Being an Effective Team Member', with a duration of 20 minutes.",
            skills: ["Teamwork", "Collaboration", "Soft Skills"],
            validUntil: "Lifetime"
        },
        {
            id: 20,
            title: "CCSP 2019: Identity & Access Management",
            category: "Cloud & Security",
            issuer: "Percipio & Accenture",
            date: "2025-07-17",
            image: "images/certificates/ccsp-2019-identity-access-management.png",
            credentialUrl: "#",
            description: "Certificate of Completion for the course 'CCSP 2019: Identity & Access Management', with a duration of 34 minutes.",
            skills: ["Cloud Security", "Identity Management", "Access Control"],
            validUntil: "Lifetime"
        },
        {
            id: 21,
            title: "CCSP 2022: Cloud Security Concepts & Design Principles",
            category: "Cloud & Security",
            issuer: "Percipio & Accenture",
            date: "2025-07-20",
            image: "images/certificates/ccsp-2022-cloud-security-concepts-design-principles.png",
            credentialUrl: "#",
            description: "Certificate of Completion for the course 'CCSP 2022: Cloud Security Concepts & Design Principles', with a duration of 56 minutes.",
            skills: ["Cloud Security", "Security Design", "CCSP"],
            validUntil: "Lifetime"
        },
        {
            id: 22,
            title: "Cloud Computing Fundamentals: Introduction",
            category: "Cloud & Security",
            issuer: "Percipio & Accenture",
            date: "2025-07-12",
            image: "images/certificates/cloud-computing-fundamentals-introduction.png",
            credentialUrl: "#",
            description: "Certificate of Completion for the course 'Cloud Computing Fundamentals: Introduction', with a duration of 36 minutes.",
            skills: ["Cloud Computing", "Cloud Fundamentals"],
            validUntil: "Lifetime"
        },
        {
            id: 23,
            title: "Code Quality, Testing, & Development",
            category: "Programming & Software",
            issuer: "Percipio & Accenture",
            date: "2025-07-12",
            image: "images/certificates/code-quality-testing-development.png",
            credentialUrl: "#",
            description: "Certificate of Completion for the course 'Code Quality, Testing, & Development', with a duration of 59 minutes.",
            skills: ["Code Quality", "Testing", "Software Development"],
            validUntil: "Lifetime"
        },
        {
            id: 24,
            title: "Data Access & Governance Policies: Data Classification, Encryption, & Monitoring",
            category: "Cloud & Security",
            issuer: "Percipio & Accenture",
            date: "2025-07-12",
            image: "images/certificates/data-access-governance-policies-data-classification-encryption-monitoring.png",
            credentialUrl: "#",
            description: "Certificate of Completion for the course 'Data Access & Governance Policies: Data Classification, Encryption, & Monitoring', with a duration of 1 hour and 18 minutes.",
            skills: ["Data Governance", "Data Classification", "Encryption", "Monitoring"],
            validUntil: "Lifetime"
        },
        {
            id: 25,
            title: "Effective Team Communication",
            category: "Teamwork & Soft Skills",
            issuer: "Percipio & Accenture",
            date: "2025-07-12",
            image: "images/certificates/effective-team-communication.png",
            credentialUrl: "#",
            description: "Certificate of Completion for the course 'Effective Team Communication', with a duration of 22 minutes.",
            skills: ["Communication", "Teamwork", "Soft Skills"],
            validUntil: "Lifetime"
        },
        {
            id: 26,
            title: "Embracing Agile at Scale",
            category: "Project Management & Agile",
            issuer: "Percipio & Accenture",
            date: "2025-07-12",
            image: "images/certificates/embracing-agile-at-scale.png",
            credentialUrl: "#",
            description: "Certificate of Completion for the course 'Embracing Agile at Scale', with a duration of 33 minutes.",
            skills: ["Agile", "Scaling Agile", "Project Management"],
            validUntil: "Lifetime"
        },
        {
            id: 27,
            title: "Exploring Business Process Automation",
            category: "Programming & Software",
            issuer: "Percipio & Accenture",
            date: "2025-07-12",
            image: "images/certificates/exploring-business-process-automation.png",
            credentialUrl: "#",
            description: "Certificate of Completion for the course 'Exploring Business Process Automation', with a duration of 23 minutes.",
            skills: ["Business Process Automation", "Workflow Automation"],
            validUntil: "Lifetime"
        },
        {
            id: 28,
            title: "Getting Started with Go: Introducing Go Programming Language",
            category: "Programming & Software",
            issuer: "Percipio & Accenture",
            date: "2025-12-04",
            image: "images/certificates/getting-started-with-go-introducing-go-programming-language.png",
            credentialUrl: "#",
            description: "Certificate of Completion for the course 'Getting Started with Go: Introducing Go Programming Language', with a duration of 1 hour and 13 minutes.",
            skills: ["Go", "Programming Fundamentals"],
            validUntil: "Lifetime"
        },
        {
            id: 29,
            title: "Git & GitHub: Introduction",
            category: "Programming & Software",
            issuer: "Percipio & Accenture",
            date: "2025-07-12",
            image: "images/certificates/git-github-introduction.png",
            credentialUrl: "#",
            description: "Certificate of Completion for the course 'Git & GitHub: Introduction', with a duration of 31 minutes.",
            skills: ["Git", "GitHub", "Version Control"],
            validUntil: "Lifetime"
        },
        {
            id: 30,
            title: "Go Language Basics",
            category: "Programming & Software",
            issuer: "Percipio & Accenture",
            date: "2025-12-03",
            image: "images/certificates/go-language-basics.png",
            credentialUrl: "#",
            description: "Certificate of Completion for the course 'Go Language Basics', with a duration of 56 minutes.",
            skills: ["Go", "Programming Fundamentals"],
            validUntil: "Lifetime"
        },
        {
            id: 31,
            title: "How to Transform Tables with SQL",
            category: "Programming & Software",
            issuer: "Percipio & Accenture",
            date: "2025-11-06",
            image: "images/certificates/how-to-transform-tables-with-sql.png",
            credentialUrl: "#",
            description: "Certificate of Completion for the course 'How to Transform Tables with SQL'.",
            skills: ["SQL", "Data Transformation", "Databases"],
            validUntil: "Lifetime"
        },
        {
            id: 32,
            title: "Hybrid Environment Pipelines: Hybrid Cloud Transformation",
            category: "Cloud & Security",
            issuer: "Percipio & Accenture",
            date: "2025-07-12",
            image: "images/certificates/hybrid-environment-pipelines-hybrid-cloud-transformation.png",
            credentialUrl: "#",
            description: "Certificate of Completion for the course 'Hybrid Environment Pipelines: Hybrid Cloud Transformation', with a duration of 59 minutes.",
            skills: ["Hybrid Cloud", "CI/CD Pipelines", "Cloud Transformation"],
            validUntil: "Lifetime"
        },
        {
            id: 33,
            title: "Identifying Risk (PMBOK Guide Sixth Edition)",
            category: "Project Management & Agile",
            issuer: "Percipio & Accenture",
            date: "2025-07-12",
            image: "images/certificates/identifying-risk-pmbok-guide-sixth-edition.png",
            credentialUrl: "#",
            description: "Certificate of Completion for the course 'Identifying Risk (PMBOK Guide Sixth Edition)', with a duration of 42 minutes.",
            skills: ["Risk Management", "PMBOK", "Project Management"],
            validUntil: "Lifetime"
        },
        {
            id: 34,
            title: "Inside Agentic AI: Popular Frameworks",
            category: "AI & Machine Learning",
            issuer: "Percipio & Accenture",
            date: "2026-07-27",
            image: "images/certificates/inside-agentic-ai-popular-frameworks.png",
            credentialUrl: "#",
            description: "Certificate of Completion for the course 'Inside Agentic AI: Popular Frameworks', with a duration of 32 minutes.",
            skills: ["Agentic AI", "AI Frameworks"],
            validUntil: "Lifetime"
        },
        {
            id: 35,
            title: "JavaScript Destructuring",
            category: "Web Development",
            issuer: "Percipio & Accenture",
            date: "2026-09-04",
            image: "images/certificates/javascript-destructuring.png",
            credentialUrl: "#",
            description: "Certificate of Completion for the course 'JavaScript Destructuring', with a duration of 10 minutes.",
            skills: ["JavaScript", "Destructuring", "ES6"],
            validUntil: "Lifetime"
        },
        {
            id: 36,
            title: "Leading Security Teams for GenAI Solutions: Use of Generative AI",
            category: "AI & Machine Learning",
            issuer: "Percipio & Accenture",
            date: "2025-07-12",
            image: "images/certificates/leading-security-teams-for-genai-solutions-use-of-generative-ai.png",
            credentialUrl: "#",
            description: "Certificate of Completion for the course 'Leading Security Teams for GenAI Solutions: Use of Generative AI', with a duration of 1 hour and 47 minutes.",
            skills: ["Generative AI", "Security Leadership", "AI Security"],
            validUntil: "Lifetime"
        },
        {
            id: 37,
            title: "PRINCE2 Project Management Overview (2017 Update)",
            category: "Project Management & Agile",
            issuer: "Percipio & Accenture",
            date: "2025-07-12",
            image: "images/certificates/prince2-project-management-overview-2017-update.png",
            credentialUrl: "#",
            description: "Certificate of Completion for the course 'PRINCE2 Project Management Overview (2017 Update)', with a duration of 39 minutes.",
            skills: ["PRINCE2", "Project Management"],
            validUntil: "Lifetime"
        },
        {
            id: 38,
            title: "React Virtual DOM",
            category: "Web Development",
            issuer: "Percipio & Accenture",
            date: "2026-09-04",
            image: "images/certificates/react-virtual-dom.png",
            credentialUrl: "#",
            description: "Certificate of Completion for the course 'React Virtual DOM', with a duration of 10 minutes.",
            skills: ["React", "Virtual DOM", "JavaScript"],
            validUntil: "Lifetime"
        },
        {
            id: 39,
            title: "Responsible Use of AI",
            category: "AI & Machine Learning",
            issuer: "Percipio & Accenture",
            date: "2025-07-12",
            image: "images/certificates/responsible-use-of-ai.png",
            credentialUrl: "#",
            description: "Certificate of Completion for the course 'Responsible Use of AI', with a duration of 21 minutes.",
            skills: ["AI Ethics", "Responsible AI"],
            validUntil: "Lifetime"
        },
        {
            id: 40,
            title: "Smart Contracts & Hyperledger Fabric: Working with Fabric Chaincode in Golang",
            category: "Programming & Software",
            issuer: "Percipio & Accenture",
            date: "2025-12-03",
            image: "images/certificates/smart-contracts-hyperledger-fabric-working-with-fabric-chaincode-in-golang.png",
            credentialUrl: "#",
            description: "Certificate of Completion for the course 'Smart Contracts & Hyperledger Fabric: Working with Fabric Chaincode in Golang', with a duration of 1 hour and 7 minutes.",
            skills: ["Hyperledger Fabric", "Smart Contracts", "Go", "Blockchain"],
            validUntil: "Lifetime"
        },
        {
            id: 41,
            title: "Software Design and Development: Design Patterns & SOLID Principles",
            category: "Programming & Software",
            issuer: "Percipio & Accenture",
            date: "2025-07-12",
            image: "images/certificates/software-design-and-development-design-patterns-solid-principles.png",
            credentialUrl: "#",
            description: "Certificate of Completion for the course 'Software Design and Development: Design Patterns & SOLID Principles', with a duration of 59 minutes.",
            skills: ["Design Patterns", "SOLID Principles", "Software Design"],
            validUntil: "Lifetime"
        },
        {
            id: 42,
            title: "Testing Methods",
            category: "Programming & Software",
            issuer: "Percipio & Accenture",
            date: "2025-07-12",
            image: "images/certificates/testing-methods.png",
            credentialUrl: "#",
            description: "Certificate of Completion for the course 'Testing Methods', with a duration of 39 minutes.",
            skills: ["Software Testing", "Testing Methods"],
            validUntil: "Lifetime"
        },
        {
            id: 43,
            title: "Web Development: What Is A Web App?",
            category: "Web Development",
            issuer: "Percipio & Accenture",
            date: "2026-09-04",
            image: "images/certificates/web-development-what-is-a-web-app.png",
            credentialUrl: "#",
            description: "Certificate of Completion for the course 'Web Development: What Is A Web App?', with a duration of 20 minutes.",
            skills: ["Web Development", "Web Applications"],
            validUntil: "Lifetime"
        }
    ];

    const categories = ['All', ...new Set(certificates.map(c => c.category))];
    const visibleCertificates = certificates
        .filter(c => activeCategory === 'All' || c.category === activeCategory)
        .sort((a, b) => b.date.localeCompare(a.date));

    return (
        <section id="certificates" className="certificates">
            <div className="container">
                <h2 className="section-title">Certificates & Achievements</h2>
                <div className="certificate-filters">
                    {categories.map(c => (
                        <button
                            key={c}
                            className={`filter-btn${activeCategory === c ? ' active' : ''}`}
                            onClick={() => setActiveCategory(c)}
                        >
                            {c}
                        </button>
                    ))}
                </div>
                <div className="certificates-grid">
                    {visibleCertificates.map(cert => (
                        <div key={cert.id} className="certificate-card">
                            <div className="certificate-image">
                                <img src={cert.image} alt={cert.title} />
                                <div className="certificate-overlay">
                                    <button
                                        className="btn btn-small"
                                        onClick={() => setSelectedCertificate(cert)}
                                    >
                                        <i className="fas fa-eye"></i> View Details
                                    </button>
                                </div>
                            </div>
                            <div className="certificate-content">
                                <h3>{cert.title}</h3>
                                <p className="issuer">{cert.issuer}</p>
                                <p className="date">{cert.date}</p>
                                <button
                                    className="btn btn-small"
                                    onClick={() => setSelectedCertificate(cert)}
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Modal isOpen={!!selectedCertificate} onClose={() => setSelectedCertificate(null)}>
                {selectedCertificate && (
                    <div className="certificate-modal">
                        <img src={selectedCertificate.image} alt={selectedCertificate.title} className="modal-image" />
                        <div className="modal-body">
                            <h2>{selectedCertificate.title}</h2>
                            <p className="modal-issuer">Category: <strong>{selectedCertificate.category}</strong></p>
                            <p className="modal-issuer">Issued by: <strong>{selectedCertificate.issuer}</strong></p>
                            <p className="modal-date">Date: <strong>{selectedCertificate.date}</strong></p>
                            <p className="modal-valid">Valid Until: <strong>{selectedCertificate.validUntil}</strong></p>

                            <div className="modal-section">
                                <h3>Description</h3>
                                <p>{selectedCertificate.description}</p>
                            </div>

                            <div className="modal-section">
                                <h3>Skills Validated</h3>
                                <div className="skills-tags">
                                    {selectedCertificate.skills.map((skill, index) => (
                                        <span key={index} className="skill-tag">{skill}</span>
                                    ))}
                                </div>
                            </div>
                            {selectedCertificate.credentialUrl !== '#' && (
                            <div className="modal-links">
                                <a href={selectedCertificate.credentialUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-external-link-alt"></i> Verify Credential
                                </a>
                            </div>)}
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    );
};

// Contact Section
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const [status, setStatus] = useState('idle');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const res = await fetch('https://formsubmit.co/ajax/ireneo.atenta211@gmail.com', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: `Portfolio inquiry from ${formData.name}`,
                    _replyto: formData.email,
                    _template: 'table',
                    _captcha: 'false'
                })
            });
            const data = await res.json();
            if (!res.ok || data.success === 'false' || data.success === false) throw new Error('failed');
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (err) {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Let's Work Together</h3>
                        <p>I'm open to new opportunities, freelance projects, and collaborations. Send me a message and I'll reply as soon as I can.</p>
                        <div className="contact-details">
                            <div className="contact-item">
                                <i className="fas fa-envelope"></i>
                                <span>ireneo.atenta211@gmail.com</span>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>Philippines</span>
                            </div>
                        </div>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/ireneo-atenta-770561252/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                            <a href="https://github.com/loop2113" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                            <a href="https://stackoverflow.com/users/26643119/lime-husky" target="_blank" rel="noopener noreferrer"><i className="fab fa-stack-overflow"></i></a>
                            <a href="https://www.upwork.com/freelancers/~01e2d2c2f7db76cdf2" target="_blank" rel="noopener noreferrer"><i className="fas fa-briefcase"></i></a>
                        </div>
                    </div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your email address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Tell me about your project or opportunity"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>
                        {status === 'success' && <p className="form-status success">Thank you for reaching out! Your message has been sent, and I'll get back to you soon.</p>}
                        {status === 'error' && <p className="form-status error">Sorry, your message couldn't be sent. Please try again or email me directly at ireneo.atenta211@gmail.com.</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};

// Footer Component
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Ireneo Atenta. All rights reserved.</p>
            </div>
        </footer>
    );
};

// Main App Component
const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Load dark mode preference from localStorage
        const savedDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(savedDarkMode);
        if (savedDarkMode) {
            document.body.classList.add('dark-mode');
        }

        // Smooth scrolling for navigation links
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('darkMode', newDarkMode.toString());

        if (newDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    };

    return (
        <div className="App">
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Hero />
            <About />
            <Projects />
            <Certificates />
            <Contact />
            <Footer />
        </div>
    );
};

// Render the App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
