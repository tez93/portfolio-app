import React from 'react';

export default function Navbar() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <h1>TEJAS G RAO</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#professional-experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#education">Education</a></li>
          
          {/* Blue Contact Button using your header nav button styling */}
          <li>
            <button type="button" onClick={scrollToContact}>
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}