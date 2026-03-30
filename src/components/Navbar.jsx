import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Sun, Moon, Menu, X } from 'lucide-react'
import styles from './Navbar.module.css'

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  const navLinks = [
    { to: '/',         label: 'Home'     },
    { to: '/about',    label: 'About'    },
    { to: '/projects', label: 'Projects' },
    { to: '/contact',  label: 'Contact'  },
  ]

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <NavLink to="/" className={styles.logo}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M11 2L20 7V15L11 20L2 15V7L11 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
            <path d="M11 2V20M2 7L20 15M20 7L2 15" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" opacity="0.4"/>
          </svg>
          <span>Urza.dev</span>
        </NavLink>

        <nav className={styles.nav}>
          {navLinks.map(link => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'}
              className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button className={styles.burger} onClick={() => setMenuOpen(p => !p)} aria-label="Toggle menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map(link => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'}
              className={({ isActive }) => `${styles.mobileLink} ${isActive ? styles.active : ''}`}>
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}