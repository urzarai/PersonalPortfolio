import React from 'react';
import './Home.css';

import profilePic from '../assets/profilePic.JPG'; // 

const Home = () => {
  return (
    <section className="home-hero">
      <div className="home-hero__container">
        <div className="home-hero__image-wrapper">
          <img src={profilePic} alt="Urza Rai" className="home-hero__image" />
        </div>
        <div className="home-hero__content">
          <h1 className="home-hero__name">Urza Rai</h1>
          <h2 className="home-hero__role">
            Computer Science Student specializing in IoT
          </h2>
          <p className="home-hero__tagline">
            Passionate about web development and data analytics—turning ideas and information into impact
          </p>
          <div className="home-hero__socials">
            <a
              href="https://linkedin.com/in/urza-rai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="home-hero__social-link"
            >
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47s-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
              </svg>
            </a>
            <a
              href="https://github.com/urzarai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="home-hero__social-link"
            >
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.019.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.804 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
          <div className="home-hero__buttons">
            <a href="/projects" className="home-hero__btn home-hero__btn">View Projects</a>
            <a href="/contact-me" className="home-hero__btn home-hero__btn">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
