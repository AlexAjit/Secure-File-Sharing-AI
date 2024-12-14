// src/components/Shared/Header.jsx
import { Menu, Bell, Search } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/authSlice';

export const Header = ({ setSidebarOpen }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  return (
    <header className="fixed top-0 z-40 w-full bg-white shadow-sm">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-500"
          >
            <Menu size={24} />
          </button>
          <div className="ml-4 lg:ml-0">
            <h1 className="text-xl font-bold text-gray-900">SecureShare</h1>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -mt-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search files..."
                className="w-full rounded-md border-0 py-2 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>
          
          <button className="p-2 text-gray-400 hover:text-gray-500">
            <Bell size={24} />
          </button>
          
          <div className="relative">
            <button className="flex items-center">
              <img
                src={`https://ui-avatars.com/api/?name=${user?.username || 'User'}&background=random`}
                alt="Profile"
                className="h-8 w-8 rounded-full"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};