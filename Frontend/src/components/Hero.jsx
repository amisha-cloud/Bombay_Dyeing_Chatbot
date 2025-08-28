import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const handleStartChat = () => {
    navigate('/chat'); 
  };

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white min-h-screen flex items-center px-6" id="home">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 w-full">
          <div className="flex-1 text-center md:text-left max-w-xl" data-aos="fade-right">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Your Virtual Assistant<br className="hidden md:block" /> for All Employee Needs
            </h1>

            <p className="text-lg md:text-xl text-blue-100 mb-6">
              Instant help for employees — anytime, anywhere. Get support, answers, and assistance with just a few clicks.
            </p>

            <motion.blockquote
              className="border-l-4 border-gray-300 pl-4 italic text-gray-100 text-sm md:text-base opacity-80 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              “Technology is best when it brings people together — empowering every question, every voice, every day.”
            </motion.blockquote>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <button
                onClick={handleStartChat}
                className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-blue-100 transition-all duration-200"
              >
                Try a Sample Conversation
              </button>
              <button className="border border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-blue-700 transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>

          <motion.div
            className="flex-1"
            data-aos="fade-left"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          >
            <motion.img
              src="/virtual.png"
              alt="Assistant"
              className="w-full max-w-md mx-auto drop-shadow-2xl"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

        <motion.button
          onClick={handleStartChat}
          className="fixed bottom-6 right-6 bg-blue-700 text-white p-4 rounded-full shadow-lg hover:bg-blue-800 transition-all duration-200 z-50"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          🗨️
        </motion.button>
      </section>
    </div>
  );
};

export default Hero;
