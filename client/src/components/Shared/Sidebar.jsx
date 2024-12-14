// src/components/Shared/Sidebar.jsx
import { Home, Upload, Share2, Settings, Users } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  
  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'My Files', href: '/files', icon: Upload },
    { name: 'Shared', href: '/shared', icon: Share2 },
    { name: 'Users', href: '/users', icon: Users },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  return (
    <>
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          isOpen ? 'block' : 'hidden'
        } bg-gray-900/80 backdrop-blur-sm`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-white shadow-lg transition duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center justify-between px-4">
            <h2 className="text-xl font-bold text-gray-900">Menu</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden -mr-1 p-2 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Close sidebar</span>
              {/* <X size={24} /> */}
            </button>
          </div>

          <nav className="flex-1 space-y-1 px-2 py-4">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <item.icon
                    className={`mr-3 h-6 w-6 flex-shrink-0 ${
                      isActive ? 'text-gray-500' : 'text-gray-400'
                    }`}
                  />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

// export default Layout;