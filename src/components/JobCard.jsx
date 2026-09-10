import React from "react";

export default function JobCard({ title, date, company, description, children }) {
    return (
        <article className="job-card">
            <div className="job-header">
                <h3>{title}</h3>
                {/* 1. Ensure className="job-date" is exact */}
                <span className="job-date">{date}</span>
            </div>
            <h4 className="company-name">{company}</h4>
            {description && <p className="job-description">{description}</p>}
            {children}
        </article>
    );
}