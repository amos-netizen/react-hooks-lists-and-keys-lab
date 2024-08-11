import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {Array.isArray(technologies) ? (
          technologies.map((tech, index) => <span key={index}>{tech}</span>)
        ) : (
          <span>No technologies specified</span>
        )}
      </div>
    </div>
  );
}

export default ProjectItem;