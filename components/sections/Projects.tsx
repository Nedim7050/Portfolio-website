'use client';

import Section, { SectionTitle } from '@/components/ui/Section';
import ProjectCard from '@/components/ui/ProjectCard';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <Section id="projects">
      <SectionTitle title="Projects" subtitle="A showcase of my recent work" />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}



