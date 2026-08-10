import React from 'react';

export default function Navbar({ onLogout }) {
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
          <li><a href="#contact">Contact</a></li>
          <li>
            <button onClick={onLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}