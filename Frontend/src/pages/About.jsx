import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-gradient-to-br from-blue-100 via-white to-blue-50 py-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Section 1: Intro and Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
        >
          {/* Left: Story */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6 font-serif leading-tight">
              About Bombay Dyeing
            </h2>
            <p className="text-lg lg:text-xl text-gray-800 leading-relaxed mb-6">
              <span className="text-blue-700 font-semibold">Established in 1879</span>, Bombay Dyeing is one of India’s most iconic and trusted textile brands. From plush bedsheets to premium lifestyle products, we’ve been a symbol of comfort and innovation for generations.
            </p>
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
              As part of the prestigious <strong className="text-blue-800">Wadia Group</strong>, our evolution is driven by a deep commitment to both legacy and progress. We don't just craft fabrics — we craft experiences and empower employees with intelligent, responsive systems.
            </p>
          </div>

          {/* Right: Mission Card */}
          <div className="bg-white/90 border border-blue-200 rounded-xl shadow-md p-6 lg:p-8">
            <h3 className="text-2xl lg:text-3xl font-semibold text-blue-800 mb-4 font-serif">
              Our Mission
            </h3>
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-5">
              To empower every employee with seamless, intelligent support. From onboarding to troubleshooting — we’re redefining help through AI and human insight.
            </p>

            <h4 className="text-lg lg:text-xl font-semibold text-blue-700 mt-6 mb-2">Core Values</h4>
            <ul className="list-disc list-inside text-base text-gray-700 space-y-1">
              <li>Innovation with Purpose</li>
              <li>People-First Culture</li>
              <li>Integrity & Trust</li>
              <li>Excellence in Execution</li>
              <li>Sustainability & Impact</li>
            </ul>
          </div>
        </motion.div>

        {/* Section 2: Deep Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto bg-blue-700 rounded-xl shadow-lg px-8 py-12 md:py-16"
        >
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-semibold italic text-white leading-relaxed">
            "True transformation begins not with technology — but with listening, understanding, and empowering people."
          </blockquote>
          <p className="mt-4 text-white/80 text-sm lg:text-base tracking-wide">
            — A guiding principle behind everything we build.
          </p>
        </motion.div>

        {/* Section 3: AI Empowerment */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-blue-800 mb-6 font-serif">
            Empowering People Through Technology
          </h3>
          <p className="text-base lg:text-lg text-gray-800 leading-relaxed mb-6">
            Our AI assistant bridges the gap between inquiry and resolution — from IT tickets to HR questions, enabling fast, personalized help at scale.
          </p>
          <p className="text-base lg:text-lg text-gray-700">
            It’s more than automation — it’s an intelligent companion that learns, supports, and evolves alongside your people.
          </p>
        </motion.div>

        {/* Section 4: CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-blue-100 rounded-xl p-10 lg:p-12 text-center shadow-inner border border-blue-300"
        >
          <h3 className="text-2xl lg:text-3xl font-semibold text-blue-900 mb-3 font-serif">
            Join Us on This Journey
          </h3>
          <p className="text-base lg:text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            From heritage textiles to cutting-edge tech, Bombay Dyeing is redefining employee experience with intelligence, trust, and care.
          </p>
          <a
            href="#features"
            className="inline-block text-sm lg:text-base font-medium text-blue-700 hover:text-blue-900 underline transition"
          >
            Discover Our Features →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
