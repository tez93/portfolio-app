import React from "react";

export default function CertCard({
  title,
  description,
  topicsCovered,
  linkUrl,
  imgSrc,
  imgAlt,
}) {
  return (
    <div className="cert-card">
      <div className="cert-text">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{topicsCovered}</p>
        {linkUrl && (
          <a href={linkUrl} target="_blank" rel="noopener noreferrer">
            View Certificate
          </a>
        )}
      </div>

      {imgSrc && (
        <div className="cert-media">
          <img src={imgSrc} alt={imgAlt || title} />
        </div>
      )}
    </div>
  );
}
