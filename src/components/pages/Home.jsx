import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Import Assets
import passportImg from "../../assets/images/passport.jpg";
import udemyImg from "../../assets/images/udemy.jpg";
import testcase from "../../assets/images/testcase.jpg";
import devops from "../../assets/images/devops.jpg";
import Awsconnect from "../../assets/images/Awsconnect.webp";
import TEJAS_G_RAO_SOFTWARE_ENGINEER_RESUME from "../../assets/TEJAS G RAO_SOFTWARE_ENGINEER_RESUME.pdf";

// Import Components
import Navbar from "../Navbar";
import SectionHeader from "../SectionHeader";
import SkillCard from "../SkillCard";
import JobCard from "../JobCard";
import ProjectCard from "../ProjectCard";
import CertCard from "../CertCard";
import EducationCard from "../EducationCard";

export default function Home() {
  useEffect(() => {
    console.log("Welcome to Tejas G Rao's Portfolio!");
  }, []);

  const handleLogout = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* Reusable Navbar Component */}
      <Navbar onLogout={handleLogout} />

      <main>
        {/* About Section */}
        {/* About Section */}
        <section id="about">
          <img
            src={passportImg}
            height="250"
            width="400"
            alt="Tejas G Rao profile picture"
          />
          <div>
            <p>
              Software Engineer with 2+ years of experience in backend and
              frontend development using Java, Spring Boot, REST APIs,
              Microservices, PostgreSQL, React.js, JavaScript, and Azure DevOps.
              Experienced in building scalable enterprise applications,
              responsive user interfaces, and collaborating with
              cross-functional teams. Expanding into full-stack development
              through self-directed learning, mastering HTML, CSS, JavaScript
              (ES6+), and React to build dynamic, responsive web applications
              like this portfolio.
            </p>
            <p>
              Currently learning AWS Amazon Connect and cloud-based contact
              center technologies, with a focus on IVR, contact flows, call
              routing, queues, and AWS service integrations.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <SectionHeader title="Skills" />
          <div id="skills-grid">
            <SkillCard
              category="Programming"
              skills={["Java", "SQL", "Python"]}
            />
            <SkillCard
              category="Backend"
              skills={["Spring Boot", "REST APIs", "Microservices"]}
            />
            <SkillCard
              category="Frontend"
              skills={["HTML", "CSS", "JavaScript", "React"]}
            />
            <SkillCard category="Database" skills={["PostgreSQL", "MySQL"]} />
            <SkillCard
              category="DevOps"
              skills={[
                "Azure DevOps",
                "Docker",
                "CI/CD",
                "Git",
                "AWS",
                "AWS CONNECT",
              ]}
            />
            <SkillCard category="Messaging" skills={["Kafka", "RabbitMQ"]} />
            <SkillCard
              category="Tools"
              skills={["Postman", "Swagger", "Mockito", "JaCoCo"]}
            />
            <SkillCard category="Methodologies" skills={["Agile", "Scrum"]} />
          </div>
        </section>
        {/* Experience Section */}
        <section id="professional-experience">
          <SectionHeader title="Professional Experience" />
          <JobCard
            title="Accounts Receivable Support Specialist – Healthcare Operations"
            date="March 2025 – May 2026"
            company="3Gen Consulting Services Pvt. Ltd"
            description="Utilized Azure DevOps CI/CD pipelines to automate build and deployment processes. 
            Designed and optimized database schemas using PostgreSQL.
            Implemented messaging integration using Kafka and RabbitMQ for distributed system
communication.
Analyzed claim statuses and payment trends to support efficient revenue cycle management .
Collaborated with insurance clients to resolve billing discrepancies and claim denials on the Health care systems Using REST API's.
Maintained HIPAA compliance while handling sensitive patient data"
          />
          <JobCard
            title="Software Developer"
            date="Aug 2022 – July 2024"
            company="Nsplus Technologies"
            description="Developed and maintained RESTful APIs and microservices for the Assisto HR Management platform
using Java, Spring Boot, PostgreSQL, and MySQL.
Collaborated with stakeholders and development teams to analyze business requirements and
implement solutions for employee onboarding, HR verification, project allocation, and timesheet
workflows.
Designed and optimized database schemas and integrated RabbitMQ for distributed system
communication.
Utilized Azure DevOps CI/CD, Docker, Git, and Agile methodologies to support application
development and deployment.
Performed API testing using Postman, documented APIs with Swagger, and developed unit tests
using Mockito while monitoring code coverage with JaCoCo.
Participated in requirement analysis, sprint planning, code reviews, and continuous process
improvements within the software development lifecycle.
"
          />
        </section>

        {/* Projects Section */}
        <section id="projects">
          <SectionHeader title="Projects" />
          <ProjectCard
            title="React Personal Portfolio"
            description="A responsive single-page web application built using React, React Router, reusable components, and custom CSS styling to showcase skills, experience, and projects."
            linkText="View Portfolio Code"
            linkUrl="https://github.com/tez93/portfolio-app" // Update with your actual GitHub link when hosted
          />
          <ProjectCard
            title="Calculator App"
            description="A functional single-page calculator built with React and custom CSS. Features a dynamic layout, state-driven math operations (+, -, ×, ÷), division-by-zero validation, and step-by-step history tracking."
            linkText="View Calculator Code"
            linkUrl="https://github.com/tez93/calculator-app"
          />
          <ProjectCard
            title="React To-Do Task Manager"
            description="An interactive task management web application built using React hooks (useState). Demonstrates core CRUD functionality including task creation, dynamic array rendering using JavaScript .map(), and item deletion via array filtering."
            linkText="View To-Do App Code"
            linkUrl="https://github.com/tez93/todoapp"
          />
          <ProjectCard
            title="Assisto HRMS Web Application"
            description="Developed and maintained RESTful APIs and microservices for the Assisto."
            linkText="Assisto"
            linkUrl="https://assisto.com"
          />
          <ProjectCard
            title="AWS Connect (Ongoing Project)"
            description="Currently learning AWS Amazon Connect and cloud-based contact center technologies, with a focus on IVR, contact flows, call routing, queues, and AWS service integrations."
            linkText=""
            linkUrl=""
          />
        </section>

        {/* Certifications Section */}
        <section id="certifications">
          <SectionHeader title="Certifications & Training" />

          <CertCard
            title="Frontend Development & React.js (Self-Taught)"
            description="Hands-on learning covering HTML, CSS, JavaScript, and React. Implemented modular components, React Router, state management, and responsive design by building full portfolio applications. Also added Test cases with 100% coverage using Vitest and React Testing Library."
            imgSrc={testcase}
            imgAlt="testcase coverage report"
          />
          <CertCard
            title="Java SE 8 Developer Bootcamp"
            description="Course completed on Java SE 8 Developer Bootcamp on udemy"
            linkUrl="https://ude.my/UC-ba3a77ff-5a84-4a37-9b7b-43cc6fc9e698"
            imgSrc={udemyImg}
            imgAlt="Udemy Course completed certificate"
          />
          <CertCard
            title="Decoding DevOps"
            description="Currently Pursuing The DevOps course on udemy"
            topicsCovered="Git, Docker, CI/CD, Linux, AWS Fundamentals"
            imgSrc={devops}
            imgAlt="Udemy course pursuing"
          />
          <CertCard
            title="AWS CONNECT"
            description="Currently Pursuing The AWS CONNECT (Self-Taught)"
            topicsCovered="Connect Flow,Contact,Channels,Amazon Connect Architecture, Connect Instance,Contact Flow, Flow Blocks,Lambda,Queues,Routing Profile,Prompts and Hours of Operation"
            imgSrc={Awsconnect}
            imgAlt="Awsconnect Pursuing"
          />
        </section>

        {/* Education Section */}
        <section id="education">
          <SectionHeader title="Education" />
          <EducationCard
            institution="The National Institute of Engineering"
            details="Bachelor of Engineering (B.E) in Information Science - 2022"
          />
          <EducationCard
            institution="Srimath Polytechnic"
            details="Diploma in Computer Science - 2015."
          />
          <EducationCard
            institution="Maharshi High School"
            details="10th Standard (SSLC) - 2009."
          />
        </section>

        {/* Contact Section - Updated to Contact Card */}
        <section id="contact">
          <SectionHeader title="Contact" />
          <div className="contact-card">
            <div className="contact-item">
              <strong>Phone:</strong>
              <a href="tel:+919876543210">+91 973882634</a>
            </div>
            <div className="contact-item">
              <strong>Email:</strong>
              <a href="mailto:tejasgrao@example.com">tejasgrao@gmail.com</a>
            </div>
            <div className="contact-item">
              <strong>Address:</strong>
              <span>Mysore, Karnataka, India</span>
            </div>
            <div className="contact-item" style={{ marginTop: "0.8rem" }}>
              <a
                href={TEJAS_G_RAO_SOFTWARE_ENGINEER_RESUME}
                download="TEJAS G RAO SOFTWARE_ENGINEER_RESUME.pdf"
                className="resume-blue-btn"
              >
                Download Resume
              </a>
              <a
                href={TEJAS_G_RAO_SOFTWARE_ENGINEER_RESUME}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-blue-btn"
              >
                View Resume
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; 2026 Tejas G Rao. All rights reserved.</p>
        <p>
          <a
            href="https://github.com/tez93/portfolio-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>{" "}
          |
          <a
            href="https://www.linkedin.com/in/tejasgrao"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
        </p>
      </footer>
    </div>
  );
}
