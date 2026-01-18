import './App.css'

function App() {
  const highlights = [
    {
      title: 'Business Analyst Intern - Operations',
      org: 'Novo3D',
      period: 'Apr 2024 - Jun 2024',
      points: [
        'Analyzed CRM and operational datasets to identify workflow inefficiencies.',
        'Developed KPI reports using Excel and Power BI for decision-making.',
        'Translated business requirements into structured reports and insights.',
        'Documented workflows and supported basic automation initiatives.',
      ],
    },
    {
      title: 'Business Analyst - Operations & Logistics',
      org: 'Ekart Logistics (Flipkart)',
      period: 'Oct 2023 - Mar 2024',
      points: [
        'Analyzed last-mile delivery and sorting operations for bottlenecks.',
        'Performed gap analysis against expected performance metrics.',
        'Tracked KPIs for delivery timelines, sorting accuracy, and handling.',
        'Prepared daily and weekly performance summaries for review.',
      ],
    },
    {
      title: 'Junior Business Systems Support Intern',
      org: 'Hospital IT Network',
      period: 'Sep 2022 - Feb 2023',
      points: [
        'Supported analysis and maintenance of hospital IT systems.',
        'Documented system issues, user requirements, and workflows.',
        'Coordinated with IT and admin stakeholders for system uptime.',
        'Gained exposure to real-time operational systems.',
      ],
    },
  ]

  const education = [
    {
      program: 'Master of Business Administration (MBA)',
      focus: 'Business Analytics',
      school: 'Anna University',
      period: '2024 - Present',
      score: 'CGPA: 8.22',
    },
    {
      program: 'Bachelor of Science (B.Sc.)',
      focus: 'Computer Science with Cognitive Systems',
      school: 'Sri Ramakrishna College of Arts & Science',
      period: '2021 - 2024',
      score: 'CGPA: 8.11',
    },
  ]

  const certificates = [
    'RPA Developer Foundation - 2023',
    'Sainya Ranakshetram Hackathon Participant - Indian Army (2022)',
  ]

  const coreSkills = [
    'BRD preparation',
    'Functional requirements documentation',
    'Gap analysis',
    'User requirement analysis',
    'Data validation',
    'KPI definition',
  ]

  const technicalSkills = [
    'SQL',
    'Microsoft Excel (Advanced)',
    'Power BI',
    'Python',
    'Pandas',
    'NumPy',
    'Scikit-learn',
    'Jupyter Notebook',
    'Regression Analysis',
    'Forecasting',
    'Predictive Analysis',
    'Data Cleaning',
    'Exploratory Data Analysis (EDA)',
    'CRM Data Analysis',
    'Process Automation (RPA Fundamentals)',
    'Workflow Optimization',
  ]

  const softSkills = [
    'Analytical Thinking',
    'Stakeholder Communication',
    'Problem Solving',
    'Documentation',
    'Time Management',
    'Adaptability',
  ]

  return (
    <div className="page">
      <header className="hero">
        <div className="hero-content reveal">
          <p className="eyebrow">MBA Business Analytics Fresher</p>
          <h1>Sugil R</h1>
          <p className="lede">
            Entry-level Business Analyst with hands-on experience in operations
            analytics, KPI tracking, and gap analysis across logistics and
            manufacturing environments.
          </p>
          <div className="contact-grid">
            <div>
              <p className="label">Phone</p>
              <p className="value">+91 80724 35399</p>
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
                href="https://www.linkedin.com/in/sugill4"
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
              href="https://www.linkedin.com/in/sugil14"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
        <div className="hero-card reveal delay-1">
          <p className="card-title">Analytics Snapshot</p>
          <div className="pill-row">
            <span>Operations Analytics</span>
            <span>KPI Tracking</span>
            <span>Process Optimization</span>
          </div>
          <div className="mini-dashboard">
            <div className="chart-card">
              <p className="label">KPI Trendline</p>
              <div className="line-chart chart-ghost">
                <svg viewBox="0 0 200 100" aria-hidden="true">
                  <path d="M10 70 L50 56 L85 62 L120 38 L155 42 L190 24" />
                </svg>
                <div className="line-dots">
                  <span style={{ left: '8%', top: '70%' }} />
                  <span style={{ left: '25%', top: '56%' }} />
                  <span style={{ left: '42%', top: '62%' }} />
                  <span style={{ left: '60%', top: '38%' }} />
                  <span style={{ left: '78%', top: '42%' }} />
                  <span style={{ left: '94%', top: '24%' }} />
                </div>
              </div>
            </div>
            <div className="chart-card">
              <p className="label">Weekly Output</p>
              <div className="bar-chart chart-ghost">
                <span style={{ height: '42%' }} />
                <span style={{ height: '56%' }} />
                <span style={{ height: '68%' }} />
                <span style={{ height: '52%' }} />
                <span style={{ height: '76%' }} />
                <span style={{ height: '88%' }} />
              </div>
            </div>
          </div>
          <div className="stat-grid">
            <div>
              <p className="label">Internships</p>
              <p className="value">3</p>
            </div>
            <div>
              <p className="label">KPI Coverage</p>
              <p className="value">Delivery + CRM</p>
            </div>
            <div>
              <p className="label">MBA CGPA</p>
              <p className="value">8.22</p>
            </div>
            <div>
              <p className="label">UG CGPA</p>
              <p className="value">8.11</p>
            </div>
          </div>
        </div>
      </header>

      <section className="section reveal delay-2" id="about">
        <div className="section-heading">
          <h2>Professional Summary</h2>
          <p>
            Skilled in SQL, Excel, Power BI, and Python to convert business
            requirements into dashboards and actionable insights. Comfortable
            with stakeholder communication, documentation, and KPI definition.
          </p>
        </div>
      </section>

      <section className="section reveal delay-3" id="dashboard">
        <div className="section-heading">
          <h2>Analytics Dashboard</h2>
          <p>
            Visual storytelling built around operations KPIs, gap analysis, and
            workflow optimization.
          </p>
        </div>
        <div className="dashboard">
          <article className="dashboard-card tall">
            <div>
              <p className="label">Operations Trend</p>
              <h3>Delivery Performance Trajectory</h3>
              <p className="muted">
                Trendline focus on SLA adherence, sorting accuracy, and package
                handling efficiency.
              </p>
            </div>
            <div className="line-chart large chart-ghost">
              <svg viewBox="0 0 240 120" aria-hidden="true">
                <path d="M10 90 L40 80 L70 86 L100 62 L130 68 L160 44 L190 50 L220 28" />
              </svg>
              <div className="line-dots">
                <span style={{ left: '6%', top: '88%' }} />
                <span style={{ left: '16%', top: '80%' }} />
                <span style={{ left: '30%', top: '86%' }} />
                <span style={{ left: '44%', top: '62%' }} />
                <span style={{ left: '58%', top: '68%' }} />
                <span style={{ left: '72%', top: '44%' }} />
                <span style={{ left: '86%', top: '50%' }} />
                <span style={{ left: '96%', top: '28%' }} />
              </div>
            </div>
            <div className="dashboard-footer">
              <div className="metric-stack">
                <p className="label">Primary KPIs</p>
                <p className="value">SLA | Accuracy | Throughput</p>
              </div>
              <div className="metric-badge">
                <span className="label">Focus</span>
                <span className="value">Gap Analysis</span>
              </div>
            </div>
          </article>
          <article className="dashboard-card">
            <div>
              <p className="label">KPI Breakdown</p>
              <h3>Sorting Accuracy Scores</h3>
              <p className="muted">
                Bar view of weekly operational accuracy and peak-day recovery.
              </p>
            </div>
            <div className="bar-chart large chart-ghost">
              <span style={{ height: '42%' }} />
              <span style={{ height: '58%' }} />
              <span style={{ height: '74%' }} />
              <span style={{ height: '64%' }} />
              <span style={{ height: '78%' }} />
              <span style={{ height: '88%' }} />
              <span style={{ height: '82%' }} />
            </div>
          </article>
          <article className="dashboard-card">
            <div>
              <p className="label">Workflow Health</p>
              <h3>Automation Readiness</h3>
              <p className="muted">
                Tracking documentation coverage, data validation, and KPI
                adoption.
              </p>
            </div>
            <div className="metric-stack">
              <div>
                <p className="label">Documentation</p>
                <div className="progress">
                  <span style={{ width: '78%' }} />
                </div>
              </div>
              <div>
                <p className="label">Data Validation</p>
                <div className="progress">
                  <span style={{ width: '72%' }} />
                </div>
              </div>
              <div>
                <p className="label">KPI Adoption</p>
                <div className="progress">
                  <span style={{ width: '86%' }} />
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section reveal delay-4" id="experience">
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

      <section className="section reveal delay-5" id="education">
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

      <section className="section reveal delay-6" id="project">
        <div className="section-heading">
          <h2>Featured Project</h2>
          <p>Business analysis case study grounded in healthcare analytics.</p>
        </div>
        <article className="card project-card">
          <div>
            <h3>Healthcare Analytics - Business Analysis Case Study</h3>
            <p className="muted">Mar 2024</p>
            <p>
              Analyzed healthcare diagnostic challenges and translated them into
              a data-driven problem statement. Evaluated AI-driven diagnostic
              solutions, mapped business requirements to analytical outcomes,
              and defined metrics that improve decision-making efficiency.
            </p>
          </div>
          <div className="project-metrics">
            <div>
              <p className="label">Focus</p>
              <p className="value">Decision Support</p>
            </div>
            <div>
              <p className="label">Methods</p>
              <p className="value">Requirements Mapping</p>
            </div>
            <div>
              <p className="label">Tools</p>
              <p className="value">Excel, Power BI, Python</p>
            </div>
          </div>
        </article>
      </section>

      <section className="section reveal delay-7" id="skills">
        <div className="section-heading">
          <h2>Skills</h2>
          <p>Technical stack and soft skills that support business analytics.</p>
        </div>
        <div className="skills-grid">
          <div className="card">
            <h3>Core Business Analyst Skills</h3>
            <div className="tag-list">
              {coreSkills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
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

      <section className="section reveal delay-8" id="certifications">
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

      <section className="section reveal delay-9" id="languages">
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

      <section className="section closing reveal delay-10" id="contact">
        <div>
          <h2>Let us connect</h2>
          <p>Open to analytics roles, internships, and collaborative projects.</p>
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

