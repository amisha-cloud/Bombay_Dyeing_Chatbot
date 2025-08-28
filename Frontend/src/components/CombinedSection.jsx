import React, { useEffect } from "react";
import ChatPreviewDemo from "./chat/ChatPreviewDemo";
import AOS from "aos";
import "aos/dist/aos.css";

const CombinedSection = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <div
      className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 via-white to-blue-200 px-6 py-16"
      data-aos="fade-up"
    >
      {/* Main Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-center text-blue-900 mb-8 md:mb-12 leading-tight">
        <span className="text-blue-800">AI</span> is here to make your work <br /> easier, faster, and more effective.
      </h2>

      {/* Message Author */}
      <div className="text-center mb-12 md:mb-16 space-y-1">
        <p className="text-lg md:text-2xl font-semibold text-gray-900">Kandu Das</p>
        <p className="text-md md:text-xl text-blue-800 font-medium">Head of IT, Bombay Dyeing</p>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section - Message */}
        <div className="flex flex-col justify-center space-y-6 text-center md:text-left px-4 md:px-8">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            At <span className="font-semibold text-blue-800">Bombay Dyeing</span>, we are committed to embracing technology that empowers every employee.
            This <span className="font-semibold text-blue-800">AI Assistant</span> is built to streamline your queries, provide instant guidance, and support you 24/7.
          </p>
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            Experience the transformation and take the first step towards a more connected and efficient workplace.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-6 justify-center md:justify-start">
            <button className="bg-blue-700 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-800 transition font-semibold text-base">
              Start Your First Chat
            </button>
            <button className="border border-blue-700 text-blue-700 px-6 py-3 rounded-md hover:bg-blue-50 transition font-semibold text-base">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Section - Chat */}
        <div className="flex justify-center px-4 md:px-8">
          <ChatPreviewDemo department="HR" />
        </div>
      </div>
    </div>
  );
};

export default CombinedSection;
