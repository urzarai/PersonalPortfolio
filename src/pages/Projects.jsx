import React from 'react';
import './Projects.css';

const projects = [
    {
    title: "BlogNest",
    description: [
      "Developed a blogging platform with secure login functionality for both users and admins, ensuring differentiated access and control based on user roles.",
      "While regular users can explore blogs, view creators, and send feedback, admins have extended privileges to create, update, and delete blog content through a dedicated admin panel."
    ],
    tech: "ReactJS, MongoDB, NodeJS, ExpressJS",
    liveDemo: "",
    gitRepo: "https://github.com/urzarai/BlogNest",
    hasLiveDemo: false
  },
    {
    title: "GitPeek",
    description: [
      "Built a command-line tool to fetch and display GitHub user profiles and compare key metrics",
      "Used GitHub’s public REST API and Rich library for styled terminal output and improved user experience."
    ],
    tech: "Python, GitHub API, Rich, CLI Tool",
    liveDemo: "",
    gitRepo: "https://github.com/urzarai/GitPeek",
    hasLiveDemo: false
  },
  {
    title: "Quick Sign",
    description: [
      "Built a responsive web application for creating and managing digital signatures.",
      "Implemented features to save, retrieve, and choose text color, background color, and font size for signatures."
    ],
    tech: "HTML, CSS, JavaScript",
    liveDemo: "https://quick-sign-sable.vercel.app/",
    gitRepo: "https://github.com/urzarai/QuickSign",
    hasLiveDemo: true
  },
  {
    title: "Expense Tracker",
    description: [
      "Developed a personal finance tracker for managing and categorizing expenses.",
      "Designed the app with a user-friendly interface for simplicity and accessibility."
    ],
    tech: "HTML, CSS, JavaScript",
    liveDemo: "https://expense-tracker-pi-fawn.vercel.app/",
    gitRepo: "https://github.com/urzarai/ExpenseTracker",
    hasLiveDemo: true
  }, 
  {
    title: "Currency Converter",
    description: [
      "Developed a web-based currency converter to convert between different currencies in real-time.",
      "Integrated a public API for fetching real-time exchange rates and ensured a responsive UI."
    ],
    tech: "React, HTML, CSS, JavaScript, API",
    liveDemo: "https://currency-converter-pi-ashy.vercel.app/", 
    gitRepo: "https://github.com/urzarai/CurrencyConverter.git",  
    hasLiveDemo: true
  },
  {
    title: "City Weather App",
    description: [
      "Built a weather forecast application that fetches real-time data using OpenWeatherMap API.",
      "Utilized responsive design principles for compatibility across devices.",
      "Designed an intuitive UI for location-based weather search."
    ],
    tech: "HTML, CSS, JavaScript, API",
    liveDemo: "https://city-weather-one.vercel.app/",
    gitRepo: "https://github.com/urzarai/WeatherInCity",
    hasLiveDemo: true
  }, 
  {
    title: "AirBnB 2016 Data Analysis Dashboard",
    description: [
      "Analyzed AirBnB 2016 dataset to derive insights into pricing trends, availability, and customer preferences.",
      "Designed an interactive Tableau dashboard to visualize key metrics, improving data-driven decision-making."
    ],
    tech: "Tableau, Data Visualization, Analytics",
    liveDemo: "https://public.tableau.com/app/profile/urza.rai/viz/AirBnB2016DataAnalysis_17394690137830/Dashboard1",
    gitRepo: "",
    hasLiveDemo: false
  },
  {
    title: "HR Analytics Dashboard",
    description: [
      "Developed an HR analytics dashboard to track employee attrition, performance, and key HR metrics.",
      "Leveraged Tableau’s visualization capabilities to present actionable insights for HR decision-making."
    ],
    tech: "Tableau, Data Visualization, HR Analytics",
    liveDemo: "https://public.tableau.com/app/profile/urza.rai/viz/HRAnalyticsDashboard_17395587748850/HRDashboard",
    gitRepo: "",
    hasLiveDemo: false
  },
  {
    title: "Data Professional’s Survey Analytics Dashboard",
    description: [
      "Developed interactive Power BI dashboards analyzing data professional survey responses, highlighting salary trends, work-life balance, and demographics.",
      "Explored correlations between education, job satisfaction, and compensation using advanced data cleaning and custom visualizations."
    ],
    tech: "Power BI, Data Visualization",
    liveDemo: "",
    gitRepo: "https://github.com/urzarai/DataVisualization/tree/main/DataProfessional_Survey_Analysis",
    hasLiveDemo: false
  },
  {
    title: "Bike Sales Analysis Dashboard",
    description: [
      "Conducted data cleaning, aggregation, and visualization using PivotTables, charts, and formulas to analyze key sales trends and customer demographics.",
      "Identified patterns in sales performance, seasonality, and customer preferences, enabling data-driven decision-making for business strategy."
    ],
    tech: "Microsoft Excel, Data Visualization",
    liveDemo: "",
    gitRepo: "https://github.com/urzarai/DataVisualization/tree/main/Bike_Sales_Analysis",
    hasLiveDemo: false
  },
  {
    title: "BMI Calculator",
    description: [
      "Created a BMI calculator to compute Body Mass Index based on user input.",
      "Implemented features for user-friendly input handling and dynamic result display."
    ],
    tech: "React, HTML, CSS, JavaScript",
    liveDemo: "https://bmi-calculator-eight-drab.vercel.app/",
    gitRepo: "https://github.com/urzarai/BMICalculator.git",
    hasLiveDemo: true
  },
  {
    title: "To-Do App",
    description: [
      "Developed a full-featured to-do list application with CRUD operations.",
      "Implemented functionality to add, edit, delete, and mark tasks as completed."
    ],
    tech: "React, HTML, CSS, JavaScript",
    liveDemo: "https://crud-app-sigma-beryl.vercel.app/",
    gitRepo: "https://github.com/urzarai/CRUD_app.git",
    hasLiveDemo: true
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1>
        <h1 className="projects-title">Projects</h1>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div className="project-card" key={idx}>
              <h2 className="project-title">{project.title}</h2>
              <ul className="project-description">
                {project.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              <p className="project-tech"><strong>Technologies:</strong> {project.tech}</p>
              <div className="project-buttons">
                {/* Tableau projects: Dashboard Link button */}
                {(project.title === "AirBnB 2016 Data Analysis Dashboard" || project.title === "HR Analytics Dashboard") ? (
                  <a
                    href={project.liveDemo}
                    className="btn btn-git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dashboard Link
                  </a>
                ) : (
                  <>
                    {/* GitHub Repo button if gitRepo exists */}
                    {project.gitRepo && (
                      <a
                        href={project.gitRepo}
                        className="btn btn-git"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub Repo
                      </a>
                    )}
                    {/* Live Demo button if hasLiveDemo is true */}
                    {project.hasLiveDemo && (
                      <a
                        href={project.liveDemo}
                        className="btn btn-live"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
