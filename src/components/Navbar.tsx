import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 border-b border-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-purple-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              MasterPrep
            </span>
          </Link>
          <div className="flex space-x-4">
            <Link to="/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md">
              Login
            </Link>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;