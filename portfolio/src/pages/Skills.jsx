import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <h1 className="skills-title"></h1>
        <h1 className="skills-title">Skills</h1>
        <div className="skills-grid">

          {/* Programming Languages */}
          <div className="skills-group">
            <h2 className="skills-group-title">Programming Languages</h2>
            <ul className="skills-list">
              <li>Python</li>
              <li>Java</li>
              <li>C/C++</li>
              <li>SQL</li>
            </ul>
          </div>

          {/* Frontend */}
          <div className="skills-group">
            <h2 className="skills-group-title">Frontend</h2>
            <ul className="skills-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>ReactJS</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="skills-group">
            <h2 className="skills-group-title">Backend</h2>
            <ul className="skills-list">
              <li>NodeJS</li>
              <li>ExpressJS</li>
              <li>MongoDB</li>
            </ul>
          </div>

          {/* Data Visualization */}
          <div className="skills-group">
            <h2 className="skills-group-title">Data Visualization</h2>
            <ul className="skills-list">
              <li>Tableau</li>
              <li>Power BI</li>
              <li>Microsoft Excel</li>
            </ul>
          </div>

          {/* Soft Skills */}
          <div className="skills-group">
            <h2 className="skills-group-title">Soft Skills</h2>
            <ul className="skills-list">
              <li>Leadership</li>
              <li>Team Management</li>
              <li>Problem Solving</li>
            </ul>
          </div>

          {/* Developer Tools */}
          <div className="skills-group">
            <h2 className="skills-group-title">Developer Tools</h2>
            <ul className="skills-list">
              <li>VS Code</li>
              <li>Eclipse</li>
              <li>Git & GitHub</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
