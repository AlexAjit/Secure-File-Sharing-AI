import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-darkGray py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">Secure File Sharing</Link>
        <div className="space-x-4">
          <Link to="/dashboard" className="text-white hover:text-blue">Dashboard</Link>
          <Link to="/login" className="text-white hover:text-blue">Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;