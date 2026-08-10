import React from "react";

export default function JobCard({ title, date, company, description}) {
    return (
        <article className="job-card">
            <div className="job=header">
                <h3>{title}</h3>
                <span className="job-date">{date}</span>
            </div>
            <h4 className="company-name">{company}</h4>
            <p className="job-description">{description}</p>
        </article>
    )
}