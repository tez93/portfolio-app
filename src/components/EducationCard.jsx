import React from "react";

export default function EducationCard({ institution, details }){
    return (
        <article>
            <h3>{institution}</h3>
            <p>{details}</p>
        </article>
    )
}