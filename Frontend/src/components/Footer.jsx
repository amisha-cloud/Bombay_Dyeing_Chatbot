import React from 'react';

const Footer = () => (
  <footer className="bg-blue-900 text-white py-8 px-6 text-sm">
    <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
      {/* Brand */}
      <div>
        <div className="text-xl font-bold text-white mb-2">Bombay Dyeing</div>
        <p className="text-blue-100">
          Empowering employees with instant, intelligent support.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="font-semibold text-blue-100 mb-2">Quick Links</h4>
        <ul className="space-y-1">
          <li><a href="#home" className="text-blue-300 hover:text-white transition">Home</a></li>
          <li><a href="#features" className="text-blue-300 hover:text-white transition">Features</a></li>
          <li><a href="#how-it-works" className="text-blue-300 hover:text-white transition">How It Works</a></li>
          <li><a href="#faq" className="text-blue-300 hover:text-white transition">FAQ</a></li>
        </ul>
      </div>

      {/* Support */}
      <div>
        <h4 className="font-semibold text-blue-100 mb-2">Support</h4>
        <ul className="space-y-1">
          <li><a href="#help" className="text-blue-300 hover:text-white transition">Help Center</a></li>
          <li><a href="#status" className="text-blue-300 hover:text-white transition">System Status</a></li>
          <li><a href="#report" className="text-blue-300 hover:text-white transition">Report Issue</a></li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4 className="font-semibold text-blue-100 mb-2">Contact</h4>
        <ul className="text-blue-300 space-y-1">
          <li>📧 support@bombaydyeing.com</li>
          <li>📞 +91 22 6665 7777</li>
          <li>📍 Mumbai, India</li>
        </ul>
      </div>
    </div>

    {/* Bottom Row */}
    <div className="mt-8 border-t border-blue-800 pt-4 text-center">
      <p className="text-blue-300 text-xs">
        &copy; {new Date().getFullYear()} Bombay Dyeing. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
