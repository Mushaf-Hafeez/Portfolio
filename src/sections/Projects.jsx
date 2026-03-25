import React from "react";

// importing data
import { projects } from "@/constants";
import Project from "@/components/custom-components/Project";

const Projects = () => {
  return (
    <section className="min-h-screen w-full bg-gradient text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 md:px-16 lg:px-40 pt-20 gap-4">
      {projects.map((project, index) => (
        <Project key={project.id} project={project} />
      ))}
    </section>
  );
};

export default Projects;
