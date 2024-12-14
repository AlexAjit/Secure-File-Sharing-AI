// src/components/Shared/Layout.jsx
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const user = useSelector(state => state.auth.user);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header setSidebarOpen={setSidebarOpen} />
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <main className="lg:pl-64 pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
};