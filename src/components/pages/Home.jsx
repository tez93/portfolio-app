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
              Software Engineer with 2+ years of software development
              experience, primarily focused on Java and Spring Boot backend
              development, with additional experience in healthcare operations.
              Hands-on experience developing REST APIs and backend services in a
              microservices-based HRMS SaaS platform. Experienced with Spring
              Data JPA/Hibernate, PostgreSQL, RabbitMQ, JUnit, Mockito, Docker,
              and Azure DevOps CI/CD. Currently expanding skills in React.js,
              frontend development, and AWS Amazon Connect contact center
              solutions.
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
              category="Backend"
              skills={[
                "Java 17",
                "Java 21",
                "Spring Boot",
                "REST APIs",
                "Microservices",
                "Spring Data JPA",
                "Hibernate",
                "JPA Queries.",
              ]}
            />
            <SkillCard category="Database" skills={["PostgreSQL"]} />
            <SkillCard category="Messaging" skills={["RabbitMQ"]} />
            <SkillCard
              category="Testing & API Tools"
              skills={["JUnit", "Mockito", "Postman", "Swagger"]}
            />
            <SkillCard
              category="DevOps & Tools"
              skills={[
                "Docker",
                "Git",
                "Azure Repos",
                "Azure Boards",
                "Azure Pipelines",
                "CI/CD",
                "Build & Release Pipelines",
              ]}
            />
            <SkillCard
              category="Frontend"
              skills={["HTML", "CSS", "JavaScript", "React.js"]}
            />
            <SkillCard
              category="AWS"
              skills={[
                "Amazon Connect",
                "Contact Flows",
                "IVR",
                "Queues",
                "Routing Profiles",
                "AWS Lambda",
              ]}
            />
          </div>
        </section>
        {/* Experience Section */}
        <section id="professional-experience">
          <SectionHeader title="Professional Experience" />
          <JobCard
            title="Accounts Receivable Support Specialist"
            date="March 2025 – May 2026"
            company="3Gen Consulting Services / Forefront Healthcare"
          >
            <ul className="job-bullet-list">
              <li>
                Performed accounts receivable follow-up and supported healthcare
                revenue-cycle operations.
              </li>
              <li>
                Processed insurance claims, including claim submission and
                resubmission activities.
              </li>
              <li>
                Performed eligibility and benefits verification and supported
                denial management and follow-up.
              </li>
              <li>
                Prepared operational reports and maintained spreadsheets using
                Microsoft Excel; worked with AdvancedMD and ComitMD.
              </li>
            </ul>
          </JobCard>
          <JobCard
            title="Software Developer"
            date="Aug 2022 – July 2024"
            company="Nsplus Technologies"
          >
            <ul className="job-bullet-list">
              <li>
                Developed and enhanced REST APIs using Java 17/21, Spring Boot,
                Spring Data JPA/Hibernate, and PostgreSQL for an HRMS SaaS
                platform.
              </li>
              <li>
                Implemented backend business logic for Company Onboarding,
                Employee Onboarding, and Employee Management modules.
              </li>
              <li>
                Developed backend functionality for asset approval workflows
                following employee onboarding, including approval/rejection and
                asset status updates.
              </li>
              <li>
                Worked on individual services within a microservices
                architecture, with basic RabbitMQ integration/support.
              </li>
              <li>
                Tested APIs using Postman and Swagger and wrote unit tests using
                JUnit and Mockito, including validation of error scenarios.
              </li>
              <li>
                Used Docker, Git, Azure Repos, Azure Boards, and Azure Pipelines
                for development, task tracking, code reviews, CI/CD, and
                deployment through existing pipelines.
              </li>
              <li>
                Resolved API bugs and production issues while participating in
                Agile/Scrum ceremonies and working from user stories and
                requirements.
              </li>
            </ul>
          </JobCard>
          
        </section>

        {/* Projects Section */}
        <section id="projects">
          <SectionHeader title="Projects" />
          <ProjectCard
            title="Amazon Connect Contact Center"
            description="Created and configured an Amazon Connect instance, including users/agents and contact numbers. Built contact flows and configured IVR menus, queues, routing profiles, and prompts/audio. Implemented a basic AWS Lambda integration to perform a backend action from an Amazon Connect contact flow. Configured contact-center and call-routing workflows through AWS documentation and hands-on implementation."
          />
          <ProjectCard
            title="Personal Portfolio Website"
            description="Built and deployed a responsive personal portfolio website using HTML, CSS, JavaScript, and React.js. Used Git/GitHub for source-code management and deployed the website through GitHub Pages. Implemented responsive layouts for desktop and mobile viewing."
            linkText="View Portfolio"
            linkUrl="https://tez93.github.io/portfolio-app/#/tejas-portfolio"
          />
        </section>

        {/* Certifications Section */}
        <section id="certifications">
          <SectionHeader title="ADDITIONAL LEARNING" />

          <CertCard
            title="Frontend Development & React.js (Self-Taught)"
            description="Hands-on learning covering HTML, CSS, JavaScript, and React. Implemented modular components, React Router, state management, and responsive design by building full portfolio applications. Also added Test cases with 100% coverage using Vitest and React Testing Library."
            imgSrc={testcase}
            imgAlt="testcase coverage report"
          />
          <CertCard
            title="Java SE 8 Developer Bootcamp"
            description="Completed Udemy course with certificate."
            linkUrl="https://ude.my/UC-ba3a77ff-5a84-4a37-9b7b-43cc6fc9e698"
            imgSrc={udemyImg}
            imgAlt="Udemy Course completed certificate"
          />
          <CertCard
            title="Decoding DevOps"
            description=" Currently pursuing Udemy training."
            topicsCovered="Git, Docker, CI/CD, Linux, AWS Fundamentals"
            imgSrc={devops}
            imgAlt="Udemy course pursuing"
          />
          <CertCard
            title="AWS CONNECT"
            description="Self-taught through AWS documentation and hands-on implementation. Currently Pursuing The AWS CONNECT."
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
              <a href="mailto:tejasgrao@example.com">tejasgrock@gmail.com</a>
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
