import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import About from './pages/About';
import AllFeatures from './pages/AllFeatures';
import Contact from './pages/Contact';

// Chat
import ChatScreen from './components/chat/ChatScreen';

// Auth Pages (separated)
import LoginScreen from './Auth/LoginScreen';
import SignupScreen from './Auth/SignupScreen';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleStart = (formData) => {
    console.log('Auth Data:', formData);
    // You can also redirect to chat or dashboard here
  };

  return (
    <Router>
      <div className="scroll-smooth font-sans bg-white text-gray-800">
        <Navbar />
        <main className="pt-16 min-h-[80vh]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<AllFeatures />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/chat" element={<ChatScreen />} />

            {/* Auth routes */}
            <Route path="/login" element={<LoginScreen onStart={handleStart} />} />
            <Route path="/signup" element={<SignupScreen onStart={handleStart} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
