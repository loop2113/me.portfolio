
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
                    <h2>Your Name</h2>
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
                    <h1>Hi, I'm <span className="highlight">Your Name</span></h1>
                    <h2>Full Stack Developer</h2>
                    <p>Passionate about creating amazing web experiences and solving complex problems through code.</p>
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
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'CSS/SCSS', level: 85 },
        { name: 'MongoDB', level: 70 }
    ];

    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <h3>Professional Summary</h3>
                        <p>
                            I'm a passionate full-stack developer with 3+ years of experience in creating 
                            web applications. I enjoy turning complex problems into simple, beautiful, 
                            and intuitive solutions.
                        </p>
                        <div className="experience">
                            <h4>Experience</h4>
                            <div className="experience-item">
                                <h5>Senior Frontend Developer</h5>
                                <p className="company">Tech Company Inc. (2022 - Present)</p>
                                <ul>
                                    <li>Led development of responsive web applications using React and TypeScript</li>
                                    <li>Improved application performance by 40% through code optimization</li>
                                    <li>Mentored junior developers and conducted code reviews</li>
                                </ul>
                            </div>
                            <div className="experience-item">
                                <h5>Full Stack Developer</h5>
                                <p className="company">Digital Agency (2020 - 2022)</p>
                                <ul>
                                    <li>Built and maintained multiple client websites and web applications</li>
                                    <li>Collaborated with design teams to implement pixel-perfect UIs</li>
                                    <li>Developed RESTful APIs using Node.js and Express</li>
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
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution built with React and Node.js",
            fullDescription: "This comprehensive e-commerce platform features user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and admin dashboard. Built with modern technologies for optimal performance and user experience.",
            image: "https://via.placeholder.com/400x250/2196F3/white?text=E-Commerce",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            liveUrl: "https://your-ecommerce-site.com",
            githubUrl: "https://github.com/yourusername/ecommerce",
            features: ["User Authentication", "Payment Integration", "Admin Dashboard", "Responsive Design"]
        },
        {
            id: 2,
            title: "Task Management App",
            description: "A collaborative task management application with real-time updates",
            fullDescription: "A powerful task management application that allows teams to collaborate in real-time. Features include task assignment, progress tracking, real-time notifications, file attachments, and detailed project analytics.",
            image: "https://via.placeholder.com/400x250/FF9800/white?text=Task+App",
            technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
            liveUrl: "https://your-task-app.com",
            githubUrl: "https://github.com/yourusername/task-app",
            features: ["Real-time Updates", "Team Collaboration", "Progress Tracking", "File Attachments"]
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description: "A responsive weather dashboard with location-based forecasts",
            fullDescription: "An intuitive weather dashboard that provides current weather conditions, 7-day forecasts, and weather maps. Features location-based services, weather alerts, and beautiful data visualizations using Chart.js.",
            image: "https://via.placeholder.com/400x250/9C27B0/white?text=Weather+App",
            technologies: ["React", "API Integration", "Chart.js", "CSS3"],
            liveUrl: "https://your-weather-app.com",
            githubUrl: "https://github.com/yourusername/weather-app",
            features: ["Location Services", "Weather Alerts", "Data Visualization", "Mobile Responsive"]
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
            title: "AWS Certified Developer",
            issuer: "Amazon Web Services",
            date: "2023",
            image: "https://via.placeholder.com/300x200/FF6B35/white?text=AWS+Cert",
            credentialUrl: "https://aws.amazon.com/certification/",
            description: "Demonstrates expertise in developing and maintaining applications on the AWS platform.",
            skills: ["Lambda Functions", "DynamoDB", "S3", "API Gateway", "CloudFormation"],
            validUntil: "2026"
        },
        {
            id: 2,
            title: "React Developer Certification",
            issuer: "Meta",
            date: "2022",
            image: "https://via.placeholder.com/300x200/61DAFB/white?text=React+Cert",
            credentialUrl: "https://developers.facebook.com/certifications/",
            description: "Validates proficiency in React development and modern JavaScript practices.",
            skills: ["React Hooks", "State Management", "Component Architecture", "Testing"],
            validUntil: "2025"
        },
        {
            id: 3,
            title: "Full Stack Web Development",
            issuer: "freeCodeCamp",
            date: "2021",
            image: "https://via.placeholder.com/300x200/0A0A23/white?text=FCC+Cert",
            credentialUrl: "https://freecodecamp.org/certification/",
            description: "Comprehensive certification covering front-end and back-end web development.",
            skills: ["HTML/CSS", "JavaScript", "Node.js", "Database Design", "API Development"],
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
                                <span>your.email@example.com</span>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-phone"></i>
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>Your City, Your Country</span>
                            </div>
                        </div>
                        <div className="social-links">
                            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
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
                <p>&copy; 2024 Your Name. All rights reserved.</p>
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
