import './App.css'

function App() {
  const highlights = [
    {
      title: 'Business Operations Analyst',
      org: 'novo3D',
      period: 'Apr 2024 - Jun 2024',
      points: [
        'Coordinated daily operations across teams to keep deliverables on schedule.',
        'Supported real-time system development and process automation.',
        'Maintained CRM databases with accurate, timely updates.',
      ],
    },
    {
      title: 'Logistics Operations Analyst',
      org: 'EKART Logistics (Flipkart Instakart Services)',
      period: 'Oct 2023 - Mar 2024',
      points: [
        'Improved sorting efficiency by 15 percent through workflow optimization.',
        'Supported last-mile sorting to ensure accurate dispatches.',
        'Met time-sensitive delivery targets with reliable package handling.',
      ],
    },
    {
      title: 'IT Network Support Engineer',
      org: 'Sri Ramakrishna Hospitals',
      period: 'Sep 2022 - Feb 2023',
      points: [
        'Troubleshot hardware and software for hospital IT infrastructure.',
        'Supported real-time systems in a high-demand healthcare setting.',
        'Partnered with IT and admin teams during critical operations.',
      ],
    },
  ]

  const education = [
    {
      program: 'Master of Business Administration (MBA)',
      focus: 'Business Analytics',
      school: 'Anna University',
      period: '2024 - Present',
      score: '85%',
    },
    {
      program: 'Bachelor of Science (B.Sc.)',
      focus: 'Computer Science with Cognitive Systems',
      school: 'Sri Ramakrishna College of Arts & Science',
      period: '2021 - 2024',
      score: '86%',
    },
  ]

  const certificates = [
    'Certified in Sainya Ranakshetram Hackathon by Indian Army - 2022',
    'Completion on RPA Developer Foundation - 2023',
    'Knowledge of Robotic Process Automation - 2023',
  ]

  const technicalSkills = [
    'SQL',
    'Regression',
    'Jupyter Notebook',
    'Scikit-learn',
    'MS Excel',
    'Power BI',
    'Tableau',
    'Pandas',
    'NumPy',
    'Matplotlib',
    'Seaborn',
    'Forecasting',
    'Data Cleaning',
    'Predictive Modeling',
    'Dashboard Development',
  ]

  const softSkills = [
    'Problem Solving',
    'Handling Multiple Tasks',
    'Adaptability',
    'Team Collaboration',
    'Time Management',
  ]

  return (
    <div className="page">
      <header className="hero">
        <div className="hero-content reveal">
          <p className="eyebrow">MBA Business Analytics Fresher</p>
          <h1>Sugil R</h1>
          <p className="lede">
            Business analytics professional with a B.Sc. in Computer Science and
            hands-on experience in operations, logistics, and IT support.
          </p>
          <div className="contact-grid">
            <div>
              <p className="label">Phone</p>
              <p className="value">+91-80724-35399</p>
            </div>
            <div>
              <p className="label">Email</p>
              <p className="value">sugilll14@gmail.com</p>
            </div>
            <div>
              <p className="label">Location</p>
              <p className="value">Coimbatore, Tamil Nadu</p>
            </div>
            <div>
              <p className="label">LinkedIn</p>
              <a
                className="value link"
                href="https://www.linkedin.com/in/sugilll14"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/sugil14
              </a>
            </div>
          </div>
          <div className="cta-row">
            <a className="btn primary" href="mailto:sugilll14@gmail.com">
              Email Me
            </a>
            <a
              className="btn ghost"
              href="https://www.linkedin.com/in/sugilll14"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
        <div className="hero-card reveal delay-1">
          <p className="card-title">Focus Areas</p>
          <div className="pill-row">
            <span>Business Analytics</span>
            <span>Process Automation</span>
            <span>Operations Strategy</span>
          </div>
          <div className="stat-grid">
            <div>
              <p className="label">Internships</p>
              <p className="value">3</p>
            </div>
            <div>
              <p className="label">Project Accuracy</p>
              <p className="value">89%</p>
            </div>
            <div>
              <p className="label">Education Score</p>
              <p className="value">85% MBA</p>
            </div>
            <div>
              <p className="label">UG Score</p>
              <p className="value">86% B.Sc.</p>
            </div>
          </div>
        </div>
      </header>

      <section className="section reveal delay-2" id="about">
        <div className="section-heading">
          <h2>About</h2>
          <p>
            I combine analytics skills with operational experience to improve
            workflows, automate processes, and deliver data-driven insights.
          </p>
        </div>
      </section>

      <section className="section reveal delay-3" id="experience">
        <div className="section-heading">
          <h2>Internships and Work Experience</h2>
          <p>Hands-on roles across operations, logistics, and IT support.</p>
        </div>
        <div className="grid cards stagger">
          {highlights.map((item) => (
            <article className="card" key={item.title}>
              <div className="card-head">
                <div>
                  <h3>{item.title}</h3>
                  <p className="muted">{item.org}</p>
                </div>
                <span className="chip">{item.period}</span>
              </div>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section reveal delay-4" id="education">
        <div className="section-heading">
          <h2>Education</h2>
          <p>Strong academic foundation in analytics and computer science.</p>
        </div>
        <div className="grid cards stagger">
          {education.map((item) => (
            <article className="card" key={item.program}>
              <div className="card-head">
                <div>
                  <h3>{item.program}</h3>
                  <p className="muted">{item.focus}</p>
                </div>
                <span className="chip">{item.period}</span>
              </div>
              <p className="muted">{item.school}</p>
              <p className="score">Score: {item.score}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section reveal delay-5" id="project">
        <div className="section-heading">
          <h2>Featured Project</h2>
          <p>AI-powered healthcare model built with CNN architecture.</p>
        </div>
        <article className="card project-card">
          <div>
            <h3>Pneumonia Detection Using CNN</h3>
            <p className="muted">Mar 2024</p>
            <p>
              Built a deep learning model to classify chest X-ray images into
              pneumonia-positive and normal categories with 89 percent test
              accuracy. Evaluated performance using confusion matrix, precision,
              recall, F1-score, and ROC-AUC to demonstrate real-world diagnostic
              potential.
            </p>
          </div>
          <div className="project-metrics">
            <div>
              <p className="label">Accuracy</p>
              <p className="value">89%</p>
            </div>
            <div>
              <p className="label">Model</p>
              <p className="value">Custom CNN</p>
            </div>
            <div>
              <p className="label">Tools</p>
              <p className="value">Python, Scikit-learn</p>
            </div>
          </div>
        </article>
      </section>

      <section className="section reveal delay-6" id="skills">
        <div className="section-heading">
          <h2>Skills</h2>
          <p>Technical stack and soft skills that support business analytics.</p>
        </div>
        <div className="skills-grid">
          <div className="card">
            <h3>Technical Skills</h3>
            <div className="tag-list">
              {technicalSkills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
          <div className="card">
            <h3>Soft Skills</h3>
            <div className="tag-list">
              {softSkills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section reveal delay-7" id="certifications">
        <div className="section-heading">
          <h2>Courses and Certificates</h2>
          <p>Continuous learning in analytics and automation.</p>
        </div>
        <div className="card">
          <ul className="list">
            {certificates.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section reveal delay-8" id="languages">
        <div className="section-heading">
          <h2>Languages</h2>
          <p>Comfortable in multiple languages for diverse teams.</p>
        </div>
        <div className="tag-list">
          <span>Tamil</span>
          <span>English</span>
          <span>Hindi</span>
        </div>
      </section>

      <section className="section closing reveal delay-9" id="contact">
        <div>
          <h2>Let us connect</h2>
          <p>
            Open to analytics roles, internships, and collaborative projects.
          </p>
        </div>
        <div className="cta-row">
          <a className="btn primary" href="mailto:sugilll14@gmail.com">
            Email Me
          </a>
          <a className="btn ghost" href="tel:+918072435399">
            Call Now
          </a>
        </div>
      </section>
    </div>
  )
}

export default App
