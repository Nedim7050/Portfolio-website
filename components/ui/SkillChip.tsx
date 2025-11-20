import { motion } from 'framer-motion';

interface SkillChipProps {
  skill: string;
  index: number;
}

export default function SkillChip({ skill, index }: SkillChipProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.1, y: -2 }}
      className="px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-full text-gray-300 hover:border-primary/50 hover:text-primary hover:bg-primary/10 transition-all duration-300 cursor-default text-sm font-medium"
    >
      {skill}
    </motion.div>
  );
}



