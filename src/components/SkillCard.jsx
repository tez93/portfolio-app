import React from 'react';

export default function SkillCard({ category, skills }) {
  return (
    <div className="skill-category-card">
      <h3>{category}</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}