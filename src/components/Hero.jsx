import { Link } from 'react-router-dom'
import { Mail, LayoutGrid, ExternalLink } from 'lucide-react'
import styles from './Hero.module.css'

// Brand SVG icons (lucide-react doesn't ship brand logos)
const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const SOCIAL_LINKS = [
  { href: 'https://github.com/urzarai', label: 'GitHub', icon: <GithubIcon /> },
  { href: 'https://www.linkedin.com/in/urza-rai/', label: 'LinkedIn', icon: <LinkedInIcon /> },
]

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background blobs + grid */}
      <div className={styles.blobWrap} aria-hidden>
        <div className={`${styles.blob} ${styles.blob1}`} />
        <div className={`${styles.blob} ${styles.blob2}`} />
        <div className={styles.grid} />
      </div>

      <div className={`container ${styles.content}`}>
        {/* Availability badge */}
        <div className={styles.badge}>
          <span className={styles.dot} />
          Open to opportunities
        </div>

        {/* Main heading */}
        <div className={styles.heading}>
          <h1 className={styles.h1}>
            Hey, I'm <span className={styles.nameAccent}>Urza</span>{' '}
            <span className={styles.sparkle}>✦</span>
          </h1>
          <h1 className={styles.h1Sub}>
            A <span className={styles.gradientText}>Full-Stack Developer</span>
          </h1>
        </div>

        {/* Description */}
        <p className={styles.desc}>
          A <strong>software engineer</strong> with expertise in the MERN stack,
          low-code platforms, and data analytics. I build systems that are{' '}
          <strong>scalable, smart, and human-centred</strong> — from AI-powered
          SRS analysers to banking automation workflows.
        </p>

        {/* CTA Row */}
        <div className={styles.ctaRow}>
          <Link to="/contact" className="btn btn-primary">
            <Mail size={16} />
            Contact Me
          </Link>
          <Link to="/projects" className="btn btn-ghost">
            <LayoutGrid size={16} />
            View Projects
          </Link>

          <span className={styles.dividerLine} />

          <div className={styles.socials}>
            {SOCIAL_LINKS.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={styles.socialBtn}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className={styles.stats}>
          {[
            { value: '3+', label: 'Full-Stack Projects' },
            { value: '93%', label: 'HSC Score' },
            { value: '30%', label: 'Efficiency Gains @ Wipro' },
          ].map(stat => (
            <div key={stat.label} className={styles.stat}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}