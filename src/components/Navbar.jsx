import React from 'react';

export default function Navbar({ onLogout }) {
  // Smooth scroll handler that doesn't mess with the router URL
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <h1>TEJAS G RAO</h1>
      <nav>
        <ul>
          <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
          <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a></li>
          <li><a href="#professional-experience" onClick={(e) => scrollToSection(e, 'professional-experience')}>Experience</a></li>
          <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a></li>
          <li><a href="#certifications" onClick={(e) => scrollToSection(e, 'certifications')}>Certifications</a></li>
          <li><a href="#education" onClick={(e) => scrollToSection(e, 'education')}>Education</a></li>
          <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
          <li>
            <button onClick={onLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}