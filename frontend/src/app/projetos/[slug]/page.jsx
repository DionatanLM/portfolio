"use client";
import { projects } from "@/constants/ProjectsConstants";
import ProjectSlugPage from "@/views/ProjectSlugPage";
import { useParams } from "next/navigation";
import React from "react";

function ProjectSlug() {
  const { slug } = useParams();
  const projectData = projects.find((project) => project.slug === slug);

  return projectData && <ProjectSlugPage data={projectData} />;
}

export default ProjectSlug;
