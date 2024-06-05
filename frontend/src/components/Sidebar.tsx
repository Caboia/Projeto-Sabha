import React from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import SidebarItem from './SidebarItem';

interface SidebarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className={`flex flex-col h-screen p-5 ${darkMode ? 'bg-[#0a102a] text-white' : 'bg-white text-gray-900'}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="ml-5 mr-5 font-bold text-xl text-blue-500">Sisyphus</span>
          <button onClick={toggleDarkMode}>
            {darkMode ? '🌙' : '🌞'}
          </button>
        </div>
      </div>
      <div className="flex-grow mt-10">
        <NavLink
          to="/"
          className={({ isActive }) =>
            clsx('sidebar-item flex items-center my-2 p-2 rounded cursor-pointer', {
              'bg-gray-200 text-gray-800': !darkMode && isActive,
              'bg-gray-600 text-gray-100': darkMode && isActive,
              'dark:hover:bg-gray-800': darkMode,
              'dark:hover:bg-gray-200': !darkMode
            })
          }

        >
          <SidebarItem title="Home" icon="🏠" />
        </NavLink>
        <NavLink
          to="/reservarSala"
          className={({ isActive }) =>
            clsx('sidebar-item flex items-center my-2 p-2 rounded cursor-pointer', {
              'bg-gray-200 text-gray-800': !darkMode && isActive,
              'bg-gray-600 text-gray-100': darkMode && isActive,
              'dark:hover:bg-gray-800': darkMode,
              'dark:hover:bg-gray-200': !darkMode
            })
          }

        >
          <SidebarItem title="Reservar Sala" icon="💻" />
        </NavLink>
      </div>
      <div className="mt-auto">
        <NavLink
          to="/login"
          className={({ isActive }) =>
            clsx('sidebar-item flex items-center my-2 p-2 rounded cursor-pointer', {
              'bg-gray-200 text-gray-800': !darkMode && isActive,
              'bg-gray-600 text-gray-100': darkMode && isActive,
              'dark:hover:bg-gray-800': darkMode,
              'dark:hover:bg-gray-200': !darkMode
            })
          }
        >
          <SidebarItem title="Sair da conta" icon="🚪" />
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
