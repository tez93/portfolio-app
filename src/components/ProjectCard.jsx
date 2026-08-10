import React from "react";

export default function ProjectCard({ title, description, linkText, linkUrl }) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={linkUrl} target="_blank" rel="noopener noreferrer">
        {linkText}
      </a>
    </article>
  );
}
