'use client';

import { motion } from 'framer-motion';
import { Brain, Database, Code, Cloud, Terminal } from 'lucide-react';
import Section, { SectionTitle } from '@/components/ui/Section';
import SkillChip from '@/components/ui/SkillChip';
import { skills } from '@/data/skills';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  brain: Brain,
  database: Database,
  code: Code,
  cloud: Cloud,
  terminal: Terminal,
};

export default function Skills() {
  return (
    <Section id="skills">
      <SectionTitle title="Skills" subtitle="Technologies and tools I work with" />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((category, categoryIndex) => {
          const Icon = iconMap[category.icon] || Code;
          return (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <SkillChip key={skill} skill={skill} index={skillIndex} />
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}



