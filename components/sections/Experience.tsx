'use client';

import Section, { SectionTitle } from '@/components/ui/Section';
import ExperienceCard from '@/components/ui/ExperienceCard';
import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <Section id="experience">
      <SectionTitle title="Experience" subtitle="My professional journey" />
      
      <div className="max-w-4xl mx-auto">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} index={index} />
        ))}
      </div>
    </Section>
  );
}



