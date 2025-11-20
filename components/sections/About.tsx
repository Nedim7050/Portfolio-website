'use client';

import { motion } from 'framer-motion';
import { Target, GraduationCap } from 'lucide-react';
import Section, { SectionTitle } from '@/components/ui/Section';

export default function About() {
  return (
    <Section id="about">
      <SectionTitle title="About Me" />
      
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Main Description */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <p className="text-gray-300 leading-relaxed">
            I'm currently pursuing an Engineering Cycle in <span className="text-primary font-semibold">AI & Data Science</span> at{' '}
            <span className="text-primary font-semibold">Université Centrale</span>, where I'm developing expertise in machine learning,
            deep learning, data engineering, cloud computing, and full-stack development.
          </p>
          <p className="text-gray-300 leading-relaxed">
            My passion lies in building intelligent systems that solve real-world problems, from developing real-time data pipelines
            to creating modern web applications with AI capabilities. I'm particularly interested in computer vision, natural language
            processing, and scalable data architectures.
          </p>
          <p className="text-gray-300 leading-relaxed">
            My goal is to gain valuable experience through a PFE internship (National or International), where I can contribute to impactful projects and grow into a full-time role. I'm looking for
            opportunities that combine cutting-edge technology with meaningful impact.
          </p>
        </motion.div>

        {/* Key Facts Grid */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white">Key Facts</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▸</span>
                <span>Engineering Cycle in AI & Data Science</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▸</span>
                <span>Strong focus on ML, DL, Data Engineering & Cloud</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▸</span>
                <span>Full-stack development experience</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▸</span>
                <span>Multiple internships in software & data engineering</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-accent-purple/10 rounded-lg">
                <Target className="text-accent-purple" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white">What I'm Looking For</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-accent-purple mt-1">▸</span>
                <span><strong className="text-white">PFE Internship</strong> (National or International)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-purple mt-1">▸</span>
                <span>Topics: AI, ML, Computer Vision, NLP, Data Engineering</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-purple mt-1">▸</span>
                <span>Real-world impact & learning opportunities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-purple mt-1">▸</span>
                <span>Potential for full-time employment</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}



