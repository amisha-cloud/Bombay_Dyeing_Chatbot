import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import { features } from '../components/FeaturesData';
import { Link } from 'react-router-dom';
import CombinedSection from '../components/CombinedSection';

const HomePage = () => {
  const topFeatures = features.slice(0, 3);

  return (
    <>
      <Hero />

      <motion.section
        className="py-24 px-8 bg-gradient-to-b from-blue-50 via-white to-blue-100 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-16">Key Features</h2>
          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {topFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg border border-blue-100 transition-all duration-300 hover:shadow-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="w-16 h-16 flex items-center justify-center text-3xl bg-blue-100 text-blue-700 rounded-full mx-auto mb-8">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              to="/features"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 transition-all font-semibold shadow-lg"
            >
              See All Features →
            </Link>
          </div>
        </div>
      </motion.section>

      <CombinedSection />

      <Testimonials />
    </>
  );
};

export default HomePage;
