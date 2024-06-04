import React from 'react';

interface SidebarItemProps {
  title: string;
  icon: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ title, icon }) => {
  return (
    <div className="flex items-center my-2 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer">
      <span className="text-2xl">{icon}</span>
      <span className="ml-3">{title}</span>
    </div>
  );
};

export default SidebarItem;
