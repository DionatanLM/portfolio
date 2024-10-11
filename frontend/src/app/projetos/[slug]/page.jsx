"use client";
import { projects } from "@/constants/ProjectsConstants";
import ProjectSlugPage from "@/views/ProjectSlugPage";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

function ProjectSlug() {
  const { slug } = useParams();
  const router = useRouter();
  const projectData = projects.find((project) => project.slug === slug);

  useEffect(() => {
    if (!projectData) {
      router.push("/");
    }
  }, [projectData, router]);

  return projectData && <ProjectSlugPage data={projectData} />;
}

export default ProjectSlug;
