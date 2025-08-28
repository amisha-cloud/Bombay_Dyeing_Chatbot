import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import { HashLink } from 'react-router-hash-link';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Services', to: '/features' }, 
    { name: 'Contact', to: '/contact' },  
  ];

  const renderLink = (link) =>
    link.isHash ? (
      <HashLink
        smooth
        to={link.to}
        className="hover:text-blue-700 transition-colors duration-200"
        onClick={() => setMenuOpen(false)}
      >
        {link.name}
      </HashLink>
    ) : (
      <NavLink
        to={link.to}
        onClick={() => setMenuOpen(false)}
        className={({ isActive }) =>
          `transition-colors duration-200 ${
            isActive ? 'text-blue-700 font-semibold' : 'hover:text-blue-700'
          }`
        }
      >
        {link.name}
      </NavLink>
    );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-white shadow-lg text-gray-800">
      <div className="flex items-center gap-3">
        <img
          src="/bd_logo.png"
          alt="Bombay Dyeing"
          className="w-12 h-12 object-cover rounded-full border border-gray-300 shadow-md"
        />
        <span className="text-2xl font-bold italic tracking-tight font-sans leading-tight">
          <span className="text-blue-800">Bombay</span>{' '}
          <span className="text-blue-500">Dyeing</span>
        </span>
      </div>

      <div className="hidden md:flex gap-8 items-center text-[17px] font-medium">
        {navLinks.map(renderLink)}
      </div>

      <div className="hidden md:flex gap-4 items-center text-[15px] font-medium">
        <NavLink to="/login" className="text-blue-700 hover:text-blue-900 transition">Login</NavLink>
        <NavLink to="/signup" className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition font-semibold">
          Signup
        </NavLink>
      </div>

      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white text-gray-900 flex flex-col items-center py-6 gap-4 md:hidden shadow-md rounded-b-lg">
          {navLinks.map(renderLink)}
          <NavLink to="/login" className="hover:text-blue-700 transition">Login</NavLink>
          <NavLink to="/signup" className="bg-blue-600 text-white font-semibold px-5 py-2 rounded hover:bg-blue-700 transition">
            Signup
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;