import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { features } from '../components/FeaturesData';
import HowItWorks from '../components/HowItWorks'; // Import How It Works section

const AllFeatures = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-indigo-50 via-blue-100 to-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* How It Works Section */}
        <div className="mb-16 bg-gradient-to-r from-blue-50 via-white to-blue-200 p-8 rounded-xl shadow-lg">
          <HowItWorks /> {/* This will render the How It Works section first */}
        </div>

        {/* All Features Section */}
        <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
          All Features
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-12 text-base lg:text-lg leading-relaxed">
          Explore the complete set of intelligent features crafted to enhance employee experience, streamline communication, and boost productivity.
        </p>

        {/* Features Grid */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl border border-blue-200 transition-all duration-300 transform hover:scale-105"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              tabIndex="0"
              role="article"
              aria-label={feature.title}
            >
              <div className="w-20 h-20 flex items-center justify-center bg-blue-100 text-blue-700 text-4xl rounded-full mx-auto mb-6 shadow-md">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllFeatures;
