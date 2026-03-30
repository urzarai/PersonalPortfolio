import styles from './About.module.css'
import resume from '../assets/UrzaResume.pdf'

const SKILLS = {
  'Languages': ['Python', 'Java', 'C/C++', 'SQL'],
  'Frontend': ['React', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
  'Backend': ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
  'Low-Code': ['Power Apps', 'Power Automate', 'Power BI'],
  'Data & Analytics': ['Tableau', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn'],
}

const EXPERIENCE = [
  {
    role: 'Executive — BPS-BFS Unit',
    company: 'Wipro',
    period: 'January 2025 – Present',
    location: 'Pune, Maharashtra',
    accent: '#7c5cfc',
    bg: 'rgba(124,92,252,0.08)',
    emoji: '🟣',
    bullets: [
      'Developing Power Platform solutions (Power Apps, Power Automate, Power BI) for global banking and financial services clients, improving operational productivity by 25%.',
      'Building canvas apps and automated workflows that reduced manual processing time by 30% across client banking operations.',
      'Contributing to 4+ client-specific automation projects within an Agile BPS team.',
    ],
    tags: ['Power Apps', 'Power Automate', 'Power BI', 'Agile'],
  },
  {
    role: 'Customer Relations Intern',
    company: 'Mercedes-Benz — BU Bhandari',
    period: 'May 2024 – June 2024',
    location: 'Pune, Maharashtra',
    accent: '#06b6d4',
    bg: 'rgba(6,182,212,0.08)',
    emoji: '⭐',
    bullets: [
      'Improved data storage and retrieval on the MBIL Zoho Solutions server, reducing retrieval time by 20%.',
      'Developed detailed customer profiles using Excel, increasing service efficiency by 30%.',
      'Optimised a database of 1,000+ clients, achieving 98% data accuracy.',
    ],
    tags: ['Zoho CRM', 'Excel', 'Data Analysis'],
  },
]

const EDUCATION = [
  {
    degree: 'B.Tech — Computer Science (IoT)',
    school: 'Vellore Institute of Technology',
    location: 'Vellore, Tamil Nadu',
    period: 'Sep 2022 – Present',
    note: 'Building projects, publishing research, and leading student organisations.',
    badge: 'VIT',
  },
  {
    degree: 'HSC — Science',
    school: 'SNBP Rahatani',
    location: 'Pune, Maharashtra',
    period: '2020 – 2022',
    note: 'Final Percentage: 93.2%',
    badge: '93%',
  },
  {
    degree: 'SSC',
    school: 'SNBP Rahatani',
    location: 'Pune, Maharashtra',
    period: '2018 – 2020',
    note: 'Final Percentage: 95.8%',
    badge: '95%',
  },
]

const LEADERSHIP = [
  {
    role: 'Executive Operations Head & HR',
    org: 'ISTE-VIT',
    institution: 'Vellore Institute of Technology',
    period: 'April 2024 — Sophomore Year',
    accent: '#22c55e',
    bg: 'rgba(34,197,94,0.08)',
    emoji: '🏆',
    bullets: [
      'Elected as Operations Head and HR — managed a team of 150+ members.',
      'Successfully executed 15+ events, workshops, and hackathons.',
    ],
  },
]

const RESEARCH = [
  {
    title: 'AWS Cloud Services: Athena & Elastic Beanstalk',
    type: 'Survey Paper',
    guide: 'Prof. Dr. Srivani A',
    institution: 'VIT Vellore',
    period: 'January 2025',
    accent: '#f59e0b',
    bg: 'rgba(245,158,11,0.08)',
    desc: 'Analysed AWS Athena and Elastic Beanstalk — their performance, scalability, and integration in cloud-based applications.',
    link: 'https://www.academia.edu/127059937/Exploring_AWS_Athena_and_Elastic_Beanstalk_A_Survey',
  },
]

const CERTIFICATIONS = [
  { title: 'Power Apps Complete Guide', issuer: 'Microsoft', date: '04 March 2026', accent: '#7c5cfc' },
  { title: 'Power Automate Complete Guide', issuer: 'Microsoft', date: '25 March 2026', accent: '#7c5cfc' },
  { title: 'MERN Full Stack', issuer: 'Ethnus', date: '10 July 2025', accent: '#22c55e' },
]

export default function About() {
  return (
    <div className={styles.page}>
      <div className="container">

        {/* Header */}
        <div className={styles.pageHeader}>
          <p className={styles.eyebrow}>Get to know me</p>
          <h1 className={styles.pageTitle}>About Me</h1>
          <div className="divider" />
          <p className={styles.pageDesc}>
            I'm Urza Rai — a CS undergrad at VIT Vellore, currently working as a software
            engineer at Wipro. I build at the intersection of{' '}
            <strong>AI, full-stack engineering, and automation</strong>.
            Outside the terminal I lead teams, write research, and obsess over clean UI.
          </p>
        </div>

        {/* Skills */}
        <div className={styles.skillsBox}>
          {Object.entries(SKILLS).map(([cat, items]) => (
            <div key={cat} className={styles.skillRow}>
              <p className={styles.skillCat}>{cat}</p>
              <div className={styles.skillPills}>
                {items.map(s => (
                  <span key={s} className={`tag ${styles.pill}`}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Experience */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <div className={styles.expGrid}>
            {EXPERIENCE.map(e => (
              <div key={e.company} className={styles.expCard}
                style={{ '--a': e.accent, '--ab': e.bg }}>
                <div className={styles.expBar} />
                <div className={styles.expHead}>
                  <div className={styles.expLogo}>{e.emoji}</div>
                  <div>
                    <h3 className={styles.expRole}>{e.role}</h3>
                    <p className={styles.expCompany}>{e.company}</p>
                    <p className={styles.expPeriod}>{e.period} · {e.location}</p>
                  </div>
                </div>
                <ul className={styles.bullets}>
                  {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
                <div className={styles.expTags}>
                  {e.tags.map(t => <span key={t} className={styles.expTag}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.eduList}>
            {EDUCATION.map((e, i) => (
              <div key={e.degree} className={styles.eduItem}>
                <div className={styles.eduLeft}>
                  <div className={styles.eduBadge}>{e.badge}</div>
                  {i < EDUCATION.length - 1 && <div className={styles.eduLine} />}
                </div>
                <div className={styles.eduRight}>
                  <p className={styles.eduPeriod}>{e.period}</p>
                  <h3 className={styles.eduDegree}>{e.degree}</h3>
                  <p className={styles.eduSchool}>{e.school} — {e.location}</p>
                  <p className={styles.eduNote}>{e.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Leadership</h2>
          {LEADERSHIP.map(l => (
            <div key={l.org} className={styles.leaderCard}
              style={{ '--a': l.accent, '--ab': l.bg }}>
              <div className={styles.leaderLine} />
              <div className={styles.leaderHead}>
                <span className={styles.leaderEmoji}>{l.emoji}</span>
                <div>
                  <h3 className={styles.leaderRole}>{l.role}</h3>
                  <p className={styles.leaderOrg}>{l.org} · {l.institution}</p>
                  <p className={styles.leaderPeriod}>{l.period}</p>
                </div>
              </div>
              <ul className={styles.bullets}>
                {l.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </section>

        {/* Research */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Research</h2>
          {RESEARCH.map(r => (
            <div key={r.title} className={styles.researchCard}
              style={{ '--a': r.accent, '--ab': r.bg }}>
              <div className={styles.researchLine} />
              <div className={styles.researchMeta}>
                <span className={styles.researchType}>{r.type}</span>
                <span className={styles.researchPeriod}>{r.period}</span>
              </div>
              <h3 className={styles.researchTitle}>{r.title}</h3>
              <p className={styles.researchDesc}>{r.desc}</p>
              <p className={styles.researchGuide}>
                Under: <strong>{r.guide}</strong> · {r.institution}
              </p>
              <a href={r.link} target="_blank" rel="noopener noreferrer" className={styles.researchLink}>
                View Paper →
              </a>
            </div>
          ))}
        </section>

        {/* Certifications */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Certifications</h2>
          <div className={styles.certGrid}>
            {CERTIFICATIONS.map(c => (
              <div key={c.title} className={styles.certCard}
                style={{ '--a': c.accent }}>
                <p className={styles.certIssuer}>{c.issuer}</p>
                <h4 className={styles.certTitle}>{c.title}</h4>
                <p className={styles.certDate}>{c.date}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ✅ Download Resume Bottom */}
        <div className={styles.resumeBottom}>
          <a href={resume} download className={styles.resumeBtn}>
            Download Resume
          </a>
        </div>

      </div>
    </div>
  )
}