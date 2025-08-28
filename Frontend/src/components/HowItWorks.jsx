import React, { useEffect } from 'react';
import { FaBuilding, FaQuestionCircle, FaHandsHelping } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const steps = [
  {
    step: 1,
    title: "Select Department",
    desc: "Choose your department or area of inquiry to begin.",
    icon: <FaBuilding className="text-blue-700 text-4xl" />,
  },
  {
    step: 2,
    title: "Ask Your Query",
    desc: "Simply type your question in natural language.",
    icon: <FaQuestionCircle className="text-blue-700 text-4xl" />,
  },
  {
    step: 3,
    title: "Get Help Instantly",
    desc: "Receive real-time, accurate responses in seconds.",
    icon: <FaHandsHelping className="text-blue-700 text-4xl" />,
  },
];

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <section
      className="py-16 px-8 bg-gradient-to-b from-white via-blue-50 to-white text-left"
      id="how-it-works"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 font-serif">
          How It Works
        </h2>
        <p className="mb-10 text-gray-700 max-w-2xl text-base md:text-lg leading-relaxed">
          Our virtual assistant is designed for simplicity and speed. Just follow these 3 easy steps to get the support you need—anytime, anywhere.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {steps.map(({ step, title, desc, icon }, i) => (
            <div
              key={step}
              className="bg-white p-8 rounded-xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 relative group"
              data-aos="fade-up"
            >
              <div className="absolute -top-5 left-5 w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold shadow-md group-hover:scale-105 transition">
                {step}
              </div>
              <div className="flex flex-col items-center mt-6">
                {icon}
                <h3 className="text-xl font-semibold text-blue-800 mt-4 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
