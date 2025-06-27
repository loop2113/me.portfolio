
const { useState, useEffect } = React;

// Header Component
const Header = () => {
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
                <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>
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
    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution built with React and Node.js",
            image: "https://via.placeholder.com/400x250/2196F3/white?text=E-Commerce",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            liveUrl: "https://your-ecommerce-site.com",
            githubUrl: "https://github.com/yourusername/ecommerce"
        },
        {
            id: 2,
            title: "Task Management App",
            description: "A collaborative task management application with real-time updates",
            image: "https://via.placeholder.com/400x250/FF9800/white?text=Task+App",
            technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
            liveUrl: "https://your-task-app.com",
            githubUrl: "https://github.com/yourusername/task-app"
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description: "A responsive weather dashboard with location-based forecasts",
            image: "https://via.placeholder.com/400x250/9C27B0/white?text=Weather+App",
            technologies: ["React", "API Integration", "Chart.js", "CSS3"],
            liveUrl: "https://your-weather-app.com",
            githubUrl: "https://github.com/yourusername/weather-app"
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
                                        <a href={project.liveUrl} className="btn btn-small" target="_blank" rel="noopener noreferrer">
                                            <i className="fas fa-external-link-alt"></i> Live Demo
                                        </a>
                                        <a href={project.githubUrl} className="btn btn-small" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-github"></i> Code
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Certificates Section
const Certificates = () => {
    const certificates = [
        {
            id: 1,
            title: "AWS Certified Developer",
            issuer: "Amazon Web Services",
            date: "2023",
            image: "https://via.placeholder.com/300x200/FF6B35/white?text=AWS+Cert",
            credentialUrl: "https://aws.amazon.com/certification/"
        },
        {
            id: 2,
            title: "React Developer Certification",
            issuer: "Meta",
            date: "2022",
            image: "https://via.placeholder.com/300x200/61DAFB/white?text=React+Cert",
            credentialUrl: "https://developers.facebook.com/certifications/"
        },
        {
            id: 3,
            title: "Full Stack Web Development",
            issuer: "freeCodeCamp",
            date: "2021",
            image: "https://via.placeholder.com/300x200/0A0A23/white?text=FCC+Cert",
            credentialUrl: "https://freecodecamp.org/certification/"
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
                            </div>
                            <div className="certificate-content">
                                <h3>{cert.title}</h3>
                                <p className="issuer">{cert.issuer}</p>
                                <p className="date">{cert.date}</p>
                                <a href={cert.credentialUrl} className="btn btn-small" target="_blank" rel="noopener noreferrer">
                                    View Credential
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
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
    useEffect(() => {
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

    return (
        <div className="App">
            <Header />
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
ReactDOM.render(<App />, document.getElementById('root'));
