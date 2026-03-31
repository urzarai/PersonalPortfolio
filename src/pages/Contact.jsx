import { useState } from 'react'
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react'
import styles from './Contact.module.css'

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)

const CONTACT_INFO = [
  { icon: <Mail size={18} />,    label: 'Email',    value: 'raiurza@gmail.com',  href: 'mailto:raiurza@gmail.com' },
  { icon: <MapPin size={18} />,  label: 'Location', value: 'Pune, Maharashtra',  href: null },
]

const SOCIALS = [
  { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/urza-rai/' },
  { icon: <GithubIcon />,   label: 'GitHub',   href: 'https://github.com/urzarai'    },
]

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', message: '' })
  const [status, setStatus]   = useState('idle') // idle | sending | sent | error
  const [errors, setErrors]   = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim())                          e.name    = 'Name is required'
    if (!form.email.trim())                         e.email   = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email))     e.email   = 'Enter a valid email'
    if (!form.message.trim())                       e.message = 'Message is required'
    return e
  }

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: '' }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setStatus('sending')
    try {
      // Using Formspree — replace YOUR_FORM_ID with your actual Formspree form ID
      const res = await fetch('https://formspree.io/f/xzzgdrlp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className={styles.page}>
      <div className="container">

        <div className={styles.header}>
          <p className={styles.eyebrow}>Get In Touch</p>
          <h1 className={styles.title}>Contact Me</h1>
          <div className="divider" />
          <p className={styles.sub}>
            Have a project in mind or just want to chat? Let's connect!
          </p>
        </div>

        <div className={styles.layout}>

          {/* Left — info panel */}
          <div className={styles.infoPanel}>
            <div className={styles.infoCard}>
              <h2 className={styles.infoHeading}>Let's build something together.</h2>
              <p className={styles.infoText}>
                I'm open to full-time roles, freelance projects, and interesting
                collaborations. If you have an idea, I'd love to hear it.
              </p>

              <div className={styles.infoItems}>
                {CONTACT_INFO.map(item => (
                  <div key={item.label} className={styles.infoItem}>
                    <span className={styles.infoIcon}>{item.icon}</span>
                    <div>
                      <p className={styles.infoLabel}>{item.label}</p>
                      {item.href
                        ? <a href={item.href} className={styles.infoValue}>{item.value}</a>
                        : <p className={styles.infoValue}>{item.value}</p>
                      }
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.socialRow}>
                {SOCIALS.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className={styles.socialBtn} aria-label={s.label}>
                    {s.icon}
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className={styles.availBadge}>
              <span className={styles.availDot} />
              Available for opportunities
            </div>
          </div>

          {/* Right — form */}
          <div className={styles.formWrap}>
            {status === 'sent' ? (
              <div className={styles.successState}>
                <CheckCircle size={48} className={styles.successIcon} />
                <h3>Message sent!</h3>
                <p>Thanks for reaching out — I'll get back to you soon.</p>
                <button className="btn btn-ghost" onClick={() => setStatus('idle')}>
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form} noValidate>

                <div className={styles.fieldRow}>
                  <div className={`${styles.field} ${errors.name ? styles.fieldError : ''}`}>
                    <label htmlFor="name" className={styles.label}>Name</label>
                    <input
                      id="name" name="name" type="text"
                      placeholder="Your name"
                      className={styles.input}
                      value={form.name}
                      onChange={handleChange}
                    />
                    {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
                  </div>

                  <div className={`${styles.field} ${errors.email ? styles.fieldError : ''}`}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input
                      id="email" name="email" type="email"
                      placeholder="you@example.com"
                      className={styles.input}
                      value={form.email}
                      onChange={handleChange}
                    />
                    {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
                  </div>
                </div>

                <div className={`${styles.field} ${errors.message ? styles.fieldError : ''}`}>
                  <label htmlFor="message" className={styles.label}>Message</label>
                  <textarea
                    id="message" name="message"
                    placeholder="Tell me about your project or just say hi..."
                    className={`${styles.input} ${styles.textarea}`}
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                  />
                  {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
                </div>

                {status === 'error' && (
                  <p className={styles.submitError}>
                    Something went wrong. Try emailing me directly at raiurza@gmail.com
                  </p>
                )}

                <button
                  type="submit"
                  className={`btn btn-primary ${styles.submitBtn}`}
                  disabled={status === 'sending'}
                >
                  {status === 'sending'
                    ? <><span className={styles.spinner} /> Sending...</>
                    : <><Send size={15} /> Send Message</>
                  }
                </button>

                <p className={styles.formNote}>
                  Prefer email?{' '}
                  <a href="mailto:raiurza@gmail.com">raiurza@gmail.com</a>
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}