import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h1></h1>
        <h1></h1>
        <h1></h1>
        <h1></h1>
        <h1></h1>
        
        <h1 className="about-title">About Me</h1>

        <div className="about-cards">

          <div className="about-card">
            <h2 className="about-card-title">Personal Introduction</h2>
            <p>
              Hi! I’m Urza Rai, a Computer Science student passionate about web development and data analytics. I love building modern, impactful solutions that connect technology with real-world needs. My journey is driven by curiosity, adaptability, and a constant desire to learn and lead.
            </p>
          </div>

          <div className="about-card">
            <h2 className="about-card-title">Academic Journey at VIT, Vellore</h2>
            <p>
              I began my studies at VIT in Computer Science with a specialization in Bioinformatics. Due to consistent academic excellence, I was selected for a highly competitive branch migration and now specialize in Internet of Things (IoT). This opportunity, awarded to only a select few, has broadened my technical perspective and deepened my expertise in emerging technologies.
            </p>
          </div>

          <div className="about-card">
            <h2 className="about-card-title">Industry Experience</h2>
            <p>
              As a Customer Relation Intern at Mercedes Benz, I gained hands-on experience at the intersection of technology and customer experience in a global enterprise. This role taught me the importance of communication, problem-solving, and the impact of technology-driven solutions in the real world.
            </p>
          </div>

          <div className="about-card">
            <h2 className="about-card-title">Leadership & Achievements</h2>
            <p>
              I served as Operations Head at ISTE-VIT, one of the university’s most reputed technical chapters. During my tenure as a Board Member, ISTE-VIT was honored with the Elite Chapter Award, recognizing our commitment to excellence, innovation, and teamwork.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
