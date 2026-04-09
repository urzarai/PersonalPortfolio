import { useState } from 'react'
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'
import styles from './Projects.module.css'

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const FEATURED = [
  {
    id: 'surakshid',
    title: 'SurakshID',
    description: 'Full-stack KYC/AML document verification system that automates financial onboarding. Extracts structured fields from passports, Aadhaar cards, and PAN cards via Tesseract OCR and Groq LLM, then screens against OFAC and UN sanctions watchlists.',
    detail: 'Built a 6-stage verification pipeline (upload → classify → extract → validate → screen → score) with AML watchlist screening using fuse.js fuzzy name matching against OFAC Consolidated and UN Security Council lists. Produces a weighted 0–100 risk score with compliance-grade PDF audit reports via PDFKit. Deployed via Docker on Render + Vercel with MongoDB Atlas.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Groq AI', 'Tesseract OCR'],
    accent: '#3451d1',
    accentBg: 'rgba(52,81,209,0.08)',
    emoji: '🛡️',
    size: 'large',
    live: 'https://suraksh-id.vercel.app/',
    github: 'https://github.com/urzarai/SurakshID',
  },
  {
    id: 'reqclarity',
    title: 'ReqClarity AI',
    description: 'AI-powered SRS quality analyser that detects ambiguity, non-testability, and incompleteness across 16 rule patterns. Generates a weighted 0–100 quality score per requirement using Llama 3.3 70B via Groq API.',
    detail: 'Built a 5-stage pipeline (parse → detect → score → AI rewrite → persist) with a rule-based NLP engine. Produces IEEE 830-compliant rewrites with an interactive accept/reject workflow. Deployed on Vercel + Render with MongoDB Atlas and client-side PDF export via jsPDF.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Groq AI', 'NLP'],
    accent: '#7c5cfc',
    accentBg: 'rgba(124,92,252,0.08)',
    emoji: '🔍',
    size: 'large',
    live: 'https://req-clarity-ai.vercel.app/',
    github: 'https://github.com/urzarai/ReqClarity_AI',
  },
  {
    id: 'clearclause',
    title: 'ClearClause',
    description: 'Full-stack AI legal document analyser. Extracts clauses from PDFs and explains each in plain English with Low/Medium/High risk ratings and a 0–100 safety score stored in MongoDB Atlas.',
    detail: 'NLP pipeline for clause segmentation, TF-IDF keyword scoring, and named entity extraction. JWT auth, background AI processing, real-time status polling, and client-side PDF report generation via jsPDF.',
    tags: ['React', 'Node.js', 'MongoDB', 'NLP', 'Groq AI', 'JWT'],
    accent: '#06b6d4',
    accentBg: 'rgba(6,182,212,0.08)',
    emoji: '⚖️',
    size: 'medium',
    live: 'https://clear-clause-murex.vercel.app/',
    github: 'https://github.com/urzarai/ClearClause',
  },
  {
    id: 'blognest',
    title: 'BlogNest',
    description: 'Full-stack MERN blogging platform with JWT auth, role-based access control (User/Admin), and Cloudinary image uploads.',
    detail: 'Separate User and Admin login profiles. Admins manage all posts and users; regular users manage their own content. RESTful Express backend with MongoDB and Cloudinary cover image storage.',
    tags: ['MongoDB', 'React', 'Express.js', 'Node.js', 'Cloudinary', 'JWT'],
    accent: '#f59e0b',
    accentBg: 'rgba(245,158,11,0.08)',
    emoji: '✍️',
    size: 'medium',
    live: 'https://blognest-gvv7.onrender.com',
    github: 'https://github.com/urzarai/BlogNest',
  },
  {
    id: 'gitpeek',
    title: 'GitPeek',
    description: 'CLI tool to fetch and display GitHub user profiles and compare key metrics directly in the terminal, with styled output via the Rich library.',
    detail: 'Uses GitHub\'s public REST API to pull profile data, repos, stars, and follower counts. Rich library renders coloured, styled terminal tables for easy comparison across multiple profiles.',
    tags: ['Python', 'GitHub API', 'Rich', 'CLI'],
    accent: '#22c55e',
    accentBg: 'rgba(34,197,94,0.08)',
    emoji: '🐙',
    size: 'medium',
    live: null,
    github: 'https://github.com/urzarai/GitPeek',
  },
  {
    id: 'hr-analytics',
    title: 'HR Analytics Dashboard',
    description: 'Interactive Tableau dashboard tracking employee attrition, performance, and key HR metrics — delivering actionable insights for HR decision-making.',
    detail: 'Leveraged Tableau\'s visualisation capabilities to present attrition trends, performance distributions, and headcount metrics. Designed for non-technical HR stakeholders with drill-down filters.',
    tags: ['Tableau', 'Data Visualisation', 'HR Analytics'],
    accent: '#ec4899',
    accentBg: 'rgba(236,72,153,0.08)',
    emoji: '📈',
    size: 'medium',
    live: 'https://public.tableau.com/app/profile/urza.rai/viz/HRAnalyticsDashboard_17395587748850/HRDashboard',
    github: null,
  },
]

const MORE = [
  {
    id: 'currency',
    title: 'Currency Converter',
    description: 'Real-time currency converter integrating a public exchange-rate API with a fully responsive UI.',
    tags: ['React', 'JavaScript', 'API'],
    accent: '#7c5cfc', accentBg: 'rgba(124,92,252,0.08)',
    emoji: '💱',
    live: 'https://currency-converter-pi-ashy.vercel.app/',
    github: 'https://github.com/urzarai/CurrencyConverter',
  },
  {
    id: 'github-viewer',
    title: 'GitHub Profile Viewer',
    description: 'Tool to search and display GitHub profiles with repositories, bio, and details using GitHub API.',
    tags: ['HTML', 'CSS', 'JavaScript', 'API'],
    accent: '#22c55e', accentBg: 'rgba(34,197,94,0.08)',
    emoji: '👤',
    live: 'https://git-hub-profile-viewer-gray.vercel.app/',
    github: 'https://github.com/urzarai/GitHub_Profile_Viewer',
  },
  {
    id: 'todo',
    title: 'To-Do App',
    description: 'Full-featured to-do list app with CRUD operations and task completion tracking.',
    tags: ['React', 'JavaScript'],
    accent: '#06b6d4', accentBg: 'rgba(6,182,212,0.08)',
    emoji: '📝',
    live: 'https://crud-app-sigma-beryl.vercel.app/',
    github: 'https://github.com/urzarai/CRUD_app',
  },
  {
    id: 'bmi',
    title: 'BMI Calculator',
    description: 'Calculator to compute Body Mass Index with dynamic input handling and instant results.',
    tags: ['React', 'JavaScript'],
    accent: '#f59e0b', accentBg: 'rgba(245,158,11,0.08)',
    emoji: '⚖️',
    live: 'https://bmi-calculator-eight-drab.vercel.app/',
    github: 'https://github.com/urzarai/BMICalculator',
  },
  {
    id: 'expense',
    title: 'Expense Tracker',
    description: 'Personal finance tracker for managing and categorising expenses with a clean interface.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    accent: '#ec4899', accentBg: 'rgba(236,72,153,0.08)',
    emoji: '💸',
    live: 'https://expense-tracker-pi-fawn.vercel.app/',
    github: 'https://github.com/urzarai/ExpenseTracker',
  },
  {
    id: 'airbnb',
    title: 'AirBnB 2016 Data Analysis',
    description: 'Tableau dashboard analysing pricing trends, availability, and customer preferences.',
    tags: ['Tableau'],
    accent: '#22c55e', accentBg: 'rgba(34,197,94,0.08)',
    emoji: '🏠',
    live: 'https://public.tableau.com/app/profile/urza.rai/viz/AirBnB2016DataAnalysis_17394690137830/Dashboard1',
    github: '#',
  },
  {
    id: 'survey',
    title: 'Data Professionals Survey',
    description: 'Power BI dashboard showing salary trends and work-life balance insights.',
    tags: ['Power BI'],
    accent: '#7c5cfc', accentBg: 'rgba(124,92,252,0.08)',
    emoji: '📊',
    live: '#',
    github: 'https://github.com/urzarai/DataVisualization/tree/main/DataProfessional_Survey_Analysis',
  },
  {
    id: 'bike-sales',
    title: 'Bike Sales Analysis',
    description: 'Excel dashboard analysing sales trends and customer demographics.',
    tags: ['Excel'],
    accent: '#06b6d4', accentBg: 'rgba(6,182,212,0.08)',
    emoji: '🚲',
    live: '#',
    github: 'https://github.com/urzarai/DataVisualization/tree/main/Bike_Sales_Analysis',
  },
]

function Card({ p, large = false }) {
  if (!p) return null

  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={`${styles.card} ${large ? styles.large : ''}`}
      style={{ '--a': p.accent, '--ab': p.accentBg }}
    >
      <div className={styles.cardTop}>
        <span className={styles.emoji}>{p.emoji}</span>

        <div className={styles.links}>
          {p.github && p.github !== '#' && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconBtn}
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
          )}

          {p.live && p.live !== '#' && (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconBtn}
              aria-label="Live demo"
            >
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>

      <h3 className={styles.cardTitle}>{p.title}</h3>

      <p className={styles.cardDesc}>
        {expanded && p.detail ? p.detail : p.description}
      </p>

      <div className={styles.tags}>
        {p.tags.map(t => (
          <span key={t} className={styles.tag}>
            {t}
          </span>
        ))}
      </div>

      {p.detail && (
        <button
          className={styles.detailBtn}
          onClick={() => setExpanded(v => !v)}
        >
          {expanded ? 'Less ↑' : 'Details ↓'}
        </button>
      )}

      <div className={styles.accentLine} />
    </div>
  )
}

export default function Projects() {
  const [showMore, setShowMore] = useState(false)
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>My Work</p>
          <h1 className={styles.title}>Projects</h1>
          <div className="divider" />
          <p className={styles.sub}>A selection of things I've built — from AI tooling to data dashboards.</p>
        </div>

        <div className={styles.bento}>
          <Card p={FEATURED[0]} large />
          <Card p={FEATURED[1]} />
          <Card p={FEATURED[2]} />
          <Card p={FEATURED[3]} />
          <Card p={FEATURED[4]} />
        </div>

        <div className={styles.moreWrap}>
          <button className="btn btn-ghost" onClick={() => setShowMore(v => !v)}>
            {showMore
              ? <><ChevronUp size={16} /> Hide</>
              : <><ChevronDown size={16} /> More Projects ({MORE.length})</>}
          </button>

          {showMore && (
            <div className={styles.bento}>
              {MORE.map(p => <Card key={p.id} p={p} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}