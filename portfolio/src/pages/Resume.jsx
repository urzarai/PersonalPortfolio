import React from 'react';
import './Resume.css';

import UrzaResume from '../assets/UrzaResume.pdf';

const Resume = () => {
  return (
    <section className="resume-section">
      <div className="resume-container">
        <h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1>
        <h1 className="resume-title">Resume</h1>

        {/* Download Resume Button */}
        <div className="resume-download">
          <a
            href={UrzaResume}
            download
            className="btn btn-download"
          >
            Download Resume (PDF)
          </a>
        </div>

        {/* Education Timeline */}
        <div className="resume-card">
          <h2 className="resume-section-title">Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div>
                <h3>VIT Vellore</h3>
                <p>B.Tech Computer Science (IoT specialization)</p>
                <p>Current CGPA: <strong>9.01</strong></p>
                <span className="timeline-year">Sep 2022 – Present
                </span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div>
                <h3>SNBP Rahatani</h3>
                <p>HSC (Class 12)</p>
                <p>Percentage: <strong>93.2%</strong></p>
                <span className="timeline-year">Apr 2020 – Jul 2022</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div>
                <h3>SNBP Rahatani</h3>
                <p>SSC (Class 10)</p>
                <p>Percentage: <strong>95.8%</strong></p>
                <span className="timeline-year">Jul 2018 – Mar 2020</span>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Experience */}
        <div className="resume-card">
          <h2 className="resume-section-title">Professional Experience</h2>
          <h3>Customer Relations Intern, Mercedes Benz</h3>
          <ul>
            <li>Improved data storage and retrieval systems on the MBIL Zoho Solutions server, reducing data retrieval time by 20%.</li>
            <li>Performed data analysis and developed detailed customer profiles using Excel, increasing customer service efficiency by 30%.</li>
            <li>Optimized the customer database for 1,000+ clients, achieving 98% data accuracy and maintaining current information.</li>
          </ul>
        </div>

        {/* Achievements */}
        <div className="resume-card">
          <h2 className="resume-section-title">Achievements</h2>
          <ul>
            <li>Branch Migration from CSE with Bioinformatics to CSE with IoT specialization (for academic excellence).</li>
            <li>Operations Head of ISTE-VIT, awarded Elite Chapter Award during my tenure as a board member.</li>
          </ul>
        </div>

        {/* Research Experience */}
        <div className="resume-card">
          <h2 className="resume-section-title">Research Experience</h2>
          <div className="research-entry">
            <h3>Research Report <span className="research-date">(March 2025)</span></h3>
            <p>
              <span className="research-guide">Under the guidance of Prof. Dr. Kausser Ahmed, VIT Vellore</span><br />
              Researched and designed an innovative IoT-based soil monitoring and irrigation control system leveraging edge computing to reduce water usage by 20-30% for small-scale farmers, validated through TinkerCad simulations and agricultural datasets.
              <br />
              <a href="https://www.academia.edu/128481709/Smart_Agriculture_with_Edge_Computing_IoT_Based_Soil_Monitoring_and_Irrigation_Control_System" target="_blank" rel="noopener noreferrer" className="resume-link">[Link to Paper]</a>
            </p>
          </div>
          <div className="research-entry">
            <h3>Survey Paper <span className="research-date">(January 2025)</span></h3>
            <p>
              <span className="research-guide">Under the guidance of Prof. Dr. Srivani A, VIT Vellore</span><br />
              Wrote a survey paper on AWS Athena and AWS Elastic Beanstalk, analyzing their performance, scalability, and integration capabilities in cloud-based applications.
              <br />
              <a href="https://www.academia.edu/127059937/Exploring_AWS_Athena_and_Elastic_Beanstalk_A_Survey" target="_blank" rel="noopener noreferrer" className="resume-link">[Link to Paper]</a>
            </p>
          </div>
        </div>

        {/* Certifications & Courses */}
        <div className="resume-card">
          <h2 className="resume-section-title">Certifications & Courses</h2>
          <ul>
            <li>
              MongoDB
              <a href="#" target="_blank" rel="noopener noreferrer" className="resume-link">[Certificate]</a>
            </li>
            <li>
              Cloud Practitioner AWS
              <a href="#" target="_blank" rel="noopener noreferrer" className="resume-link">[Certificate]</a>
            </li>
            <li>
              MERN Full Stack Course by Ethnus
              <a href="#" target="_blank" rel="noopener noreferrer" className="resume-link">[Certificate]</a>
            </li>
          </ul>
        </div>

        {/* Relevant Coursework */}
        <div className="resume-card">
          <h2 className="resume-section-title">Relevant Coursework</h2>
          <ul className="coursework-list">
            <li>Web Programming</li>
            <li>AWS Solutions Architect</li>
            <li>Data Structures and Algorithms</li>
            <li>Design and Analysis of Algorithms</li>
            <li>Database Management Systems</li>
            <li>Operating Systems</li>
            <li>Cryptography & Network Security</li>
            <li>Structured and Object Oriented Programming</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

export default Resume;
