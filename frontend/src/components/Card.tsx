import React from 'react';

interface CardProps {
  title: string;
  description: string;
  icon?: string;
  darkMode: boolean; // Adicionando a prop darkMode
}

const Card: React.FC<CardProps> = ({ title, description, icon, darkMode }) => {
  return (
    <div className={`flex items-center gap-4 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${darkMode ? 'bg-[#0a102a] text-white' : 'bg-white text-black'}`}>
      {icon && <div className="text-3xl ">{icon}</div>}
      <div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className={`text-gray-600 ${darkMode ? 'text-gray-300' : ''}`}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
