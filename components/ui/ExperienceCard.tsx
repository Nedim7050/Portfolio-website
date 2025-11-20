import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import { Experience } from '@/data/experience';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-8 border-l-2 border-primary/30"
    >
      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full border-2 border-background-dark" />
      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">{experience.role}</h3>
            <p className="text-primary font-semibold">{experience.company}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{experience.period}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            <span>{experience.location}</span>
          </div>
        </div>
        <ul className="space-y-2">
          {experience.description.map((item, i) => (
            <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
              <span className="text-primary mt-1.5">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}



