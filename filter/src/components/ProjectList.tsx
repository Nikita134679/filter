import React from "react";
import { ProjectListProps } from "../types";

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <div key={index} className="project">
          <img src={project.image} alt={project.name || project.category} />
          <p>{project.name || project.category}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
