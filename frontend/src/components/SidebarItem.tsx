import React from 'react';

interface SidebarItemProps {
  title: string;
  icon: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ title, icon }) => {
  return (
    <div className="flex items-center gap-4 ">
      <span className="text-2xl">{icon}</span>
      <span className="ml-3">{title}</span>
    </div>
  );
};

export default SidebarItem;
