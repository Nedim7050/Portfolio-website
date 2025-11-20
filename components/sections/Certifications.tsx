'use client';

import Section, { SectionTitle } from '@/components/ui/Section';
import CertificationCard from '@/components/ui/CertificationCard';
import { certifications } from '@/data/certifications';

export default function Certifications() {
  return (
    <Section id="certifications">
      <SectionTitle title="Certifications" subtitle="Professional certifications and achievements" />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((certification, index) => (
          <CertificationCard key={index} certification={certification} index={index} />
        ))}
      </div>
    </Section>
  );
}



