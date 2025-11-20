import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { Certification } from '@/data/certifications';

interface CertificationCardProps {
  certification: Certification;
  index: number;
}

export default function CertificationCard({ certification, index }: CertificationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
          <Award className="text-primary" size={24} />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-1">
            {certification.name}
          </h3>
          <p className="text-primary text-sm mb-1">{certification.issuer}</p>
          {certification.year && (
            <p className="text-gray-400 text-xs">{certification.year}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}



