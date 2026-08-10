import React from "react";


export default function SkillCard({ category, skills }){
    return (
        <div>
            <h3>{category}</h3>
            <ul>
                {skills.map((skills, index) => (
                    <li key={index}>{skills}</li>
                ))}
            </ul>
        </div>
    )
}