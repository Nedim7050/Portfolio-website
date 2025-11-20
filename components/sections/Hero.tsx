'use client';

import { motion } from 'framer-motion';
import { Download, ArrowRight, MapPin, Briefcase } from 'lucide-react';
import { personalInfo } from '@/data/personal';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent-pink/15 rounded-full blur-3xl"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
                Hi, I'm Nadim{' '}
                <span className="inline-block animate-wave">👋</span>
              </h1>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary mb-6"
            >
              AI & Data Science Engineering Student
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed"
            >
              I build intelligent systems, real-time data pipelines, and modern web applications.
              Currently seeking a <span className="text-primary font-semibold">PFE internship</span> (National or International) with strong potential for employment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <motion.button
                onClick={() => scrollToSection('#projects')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-accent-purple to-accent-pink text-white rounded-lg hover:opacity-90 transition-opacity font-medium flex items-center gap-2 shadow-lg shadow-accent-purple/30"
              >
                View Projects
                <ArrowRight size={18} />
              </motion.button>
              <motion.a
                href="/cv.pdf"
                download="Nadim_Mejri_CV.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg hover:bg-gray-700 hover:border-primary/50 transition-colors font-medium flex items-center gap-2"
              >
                <Download size={18} />
                Download CV
              </motion.a>
            </motion.div>

            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                <MapPin size={18} className="text-primary" />
                <span className="text-gray-300 text-sm">{personalInfo.location}</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                <Briefcase size={18} className="text-primary" />
                <span className="text-gray-300 text-sm">Open to PFE Internships (National or International)</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Photo & Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex relative items-center justify-center mt-8 lg:mt-0"
          >
            <div className="relative">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent-purple/30 to-accent-pink/30 rounded-full blur-3xl animate-pulse" />
              
              {/* Photo container with border */}
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >
                <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl shadow-primary/30 bg-gray-900">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent-purple/20 rounded-full blur-xl" />
                  <motion.img
                    src="https://res.cloudinary.com/dfgycmek8/image/upload/v1763668181/nadou_portflio_fp7uhb.jpg"
                    alt="Nadim Mejri"
                    className="relative z-10 w-full h-full object-contain"
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
              </motion.div>

              {/* Floating decorative elements */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
                }}
                className="hidden lg:block absolute -top-8 -right-8 w-24 h-24 border-2 border-primary/30 rounded-lg"
              />
              <motion.div
                animate={{ 
                  rotate: -360,
                  scale: [1, 1.15, 1]
                }}
                transition={{ 
                  rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
                }}
                className="hidden lg:block absolute -bottom-8 -left-8 w-32 h-32 border-2 border-accent-purple/30 rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



