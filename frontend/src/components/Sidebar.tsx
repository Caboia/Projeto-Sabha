import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SidebarItem from './SidebarItem';

const Sidebar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`flex flex-col h-screen p-5 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src="/path/to/logo.png" alt="Logo" className="h-8 w-8" />
          <span className="ml-2 mr-2 font-bold text-xl">Sisyphus</span>
        </div>
        <button onClick={toggleDarkMode}>
          {darkMode ? '🌙' : '🌞'}
        </button>
      </div>
      <div className="mt-10">
        <NavLink
          to="/"
          className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}
        >
          <SidebarItem title="Home" icon="🏠" />
        </NavLink>
        <NavLink
          to="/reports"
          className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}
        >
          <SidebarItem title="Reports" icon="📊" />
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
