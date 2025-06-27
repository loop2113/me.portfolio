
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
                    <button className="theme-toggle" onClick={toggleDarkMode}>
                        <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
                    </button>
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
                    <img src="https://via.placeholder.com/300x300/4CAF50/white?text=Your+Photo" alt="Profile" />
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
        { name: 'JavaScript (React/Vue/Express)', level: 95 },
        { name: 'PHP & Laravel', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Google Apps Script', level: 90 },
        { name: 'Project Management (Scrum/Agile)', level: 95 },
        { name: 'UI/UX Design (Figma)', level: 80 },
        { name: 'Docker & DevOps', level: 75 },
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
                                <ul>
                                    <li>Google Apps Script Developer specializing in Google Workspace Foundations</li>
                                    <li>Created custom scripts and add-ons to automate workflows across Google Sheets, Docs, Gmail, and Drive</li>
                                    <li>Expertise in API integrations, data processing, and workflow automation</li>
                                </ul>
                            </div>
                            <div className="experience-item">
                                <h5>Technical Project Manager & Full Stack Web Developer</h5>
                                <p className="company">Autofy.ai (02.2024 - 06.2024)</p>
                                <ul>
                                    <li>Led development teams while actively contributing to coding efforts</li>
                                    <li>Created and integrated RESTful APIs into React frontend applications</li>
                                    <li>Utilized agile methodologies to guide project execution and foster collaboration</li>
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
                                        style={{width: `${skill.level}%`}}
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
            title: "Simptracker",
            description: "OnlyFans content creation and management platform for creators",
            fullDescription: "I oversaw the development and implementation of Simptracker within the constantly evolving digital sphere, where the fusion of technology and creativity revolutionizes content creation and sharing, specifically catering to OnlyFans creators. This platform helps creators manage their content workflow and analytics.",
            image: "https://via.placeholder.com/400x250/2196F3/white?text=Simptracker",
            technologies: ["React", "Node.js", "API Integration", "Project Management"],
            liveUrl: "#",
            githubUrl: "#",
            features: ["Content Management", "Analytics Dashboard", "Creator Tools", "Workflow Automation"]
        },
        {
            id: 2,
            title: "FVA Chatting",
            description: "Platform enhancement for OnlyFans agencies and creators",
            fullDescription: "As FVA Chatting's web development project manager, I drove initiatives to boost platform appeal and profitability, propelling OnlyFans success for agencies and creators. The platform focuses on communication management and engagement optimization.",
            image: "https://via.placeholder.com/400x250/FF9800/white?text=FVA+Chat",
            technologies: ["React", "Real-time Chat", "Express", "MongoDB"],
            liveUrl: "#",
            githubUrl: "#",
            features: ["Real-time Communication", "Agency Management", "Performance Analytics", "User Engagement Tools"]
        },
        {
            id: 3,
            title: "Remimic",
            description: "Advanced deepfake technology platform",
            fullDescription: "I played a pivotal role in developing and managing a groundbreaking deepfake website, leveraging advanced replication techniques alongside my involvement in web development. The platform utilizes cutting-edge AI technology for content creation.",
            image: "https://via.placeholder.com/400x250/9C27B0/white?text=Remimic",
            technologies: ["React", "AI Integration", "Python", "Advanced APIs"],
            liveUrl: "#",
            githubUrl: "#",
            features: ["AI Technology", "Content Replication", "Advanced Processing", "User-Friendly Interface"]
        },
        {
            id: 4,
            title: "Custom POS System - Kmroute21",
            description: "Tailored Point-of-Sale system for business operations",
            fullDescription: "Developed a tailored Point-of-Sale solution for order management, payment processing, inventory control, and reporting, ensuring business-specific needs are met. As a full-stack developer, I managed the design, deployment, and ongoing support to maintain optimal performance.",
            image: "https://via.placeholder.com/400x250/4CAF50/white?text=POS+System",
            technologies: ["PHP", "Laravel", "MySQL", "JavaScript"],
            liveUrl: "#",
            githubUrl: "#",
            features: ["Order Management", "Payment Processing", "Inventory Control", "Business Reports"]
        }
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
                                        <a href={project.liveUrl} className="btn btn-small" target="_blank" rel="noopener noreferrer">
                                            <i className="fas fa-external-link-alt"></i> Live Demo
                                        </a>
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
                                    style={{marginTop: '1rem'}}
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
                                <a href={selectedProject.liveUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-external-link-alt"></i> Live Demo
                                </a>
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

    const certificates = [
        {
            id: 1,
            title: "Generative AI APIs for Practical Applications",
            issuer: "Professional Development",
            date: "03/27/25",
            image: "https://via.placeholder.com/300x200/FF6B35/white?text=AI+APIs",
            credentialUrl: "#",
            description: "Introduction to practical applications of Generative AI APIs in real-world scenarios.",
            skills: ["AI Integration", "API Development", "Machine Learning", "Automation"],
            validUntil: "Lifetime"
        },
        {
            id: 2,
            title: "Artificial Intelligence and Machine Learning",
            issuer: "Professional Development",
            date: "03/26/25",
            image: "https://via.placeholder.com/300x200/61DAFB/white?text=AI+ML",
            credentialUrl: "#",
            description: "Comprehensive understanding of AI and Machine Learning principles and applications.",
            skills: ["Machine Learning", "AI Algorithms", "Data Processing", "Neural Networks"],
            validUntil: "Lifetime"
        },
        {
            id: 3,
            title: "Visual Studio Code Editor: Languages and Tasks",
            issuer: "Professional Development",
            date: "11/28/24",
            image: "https://via.placeholder.com/300x200/0A0A23/white?text=VS+Code",
            credentialUrl: "#",
            description: "Advanced proficiency in Visual Studio Code for multi-language development.",
            skills: ["IDE Mastery", "Multi-language Support", "Task Automation", "Development Tools"],
            validUntil: "Lifetime"
        },
        {
            id: 4,
            title: "Contact Center Services NCII",
            issuer: "TESDA",
            date: "01/01/19",
            image: "https://via.placeholder.com/300x200/4CAF50/white?text=TESDA",
            credentialUrl: "#",
            description: "National certification for contact center operations and customer service.",
            skills: ["Customer Service", "Communication", "Problem Solving", "Technical Support"],
            validUntil: "Lifetime"
        },
        {
            id: 5,
            title: "Programmer of the Year",
            issuer: "AMACC Tacloban",
            date: "01/01/19",
            image: "https://via.placeholder.com/300x200/9C27B0/white?text=Award",
            credentialUrl: "#",
            description: "Recognition for outstanding programming achievement and excellence.",
            skills: ["Programming Excellence", "Problem Solving", "Code Quality", "Innovation"],
            validUntil: "Lifetime"
        },
        {
            id: 6,
            title: "Web Systems Student Teacher",
            issuer: "Quezon City University",
            date: "01/01/21",
            image: "https://via.placeholder.com/300x200/FF5722/white?text=Teaching",
            credentialUrl: "#",
            description: "Teaching certification for web systems and development education.",
            skills: ["Web Development", "Teaching", "Curriculum Design", "Student Mentoring"],
            validUntil: "Lifetime"
        }
    ];

    return (
        <section id="certificates" className="certificates">
            <div className="container">
                <h2 className="section-title">Certificates & Achievements</h2>
                <div className="certificates-grid">
                    {certificates.map(cert => (
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

                            <div className="modal-links">
                                <a href={selectedCertificate.credentialUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-external-link-alt"></i> Verify Credential
                                </a>
                            </div>
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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        alert('Thank you for your message! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Let's Connect</h3>
                        <p>I'm always interested in hearing about new opportunities and projects.</p>
                        <div className="contact-details">
                            <div className="contact-item">
                                <i className="fas fa-envelope"></i>
                                <span>ireneo.atenta@email.com</span>
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
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
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
                <p>&copy; 2024 Ireneo Atenta. All rights reserved.</p>
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
