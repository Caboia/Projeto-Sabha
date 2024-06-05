import React from 'react';

interface CardProps {
  title: string;
  description: string;
  icon?: string;
  darkMode: boolean; // Adicionando a prop darkMode
}

const Card: React.FC<CardProps> = ({ title, description, icon, darkMode }) => {
  return (
    <div className={`p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${darkMode ? 'bg-[#0a102a] text-white' : 'bg-white text-black'}`}>
      {icon && <div className="text-3xl mb-3">{icon}</div>}
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className={`text-gray-600 ${darkMode ? 'text-gray-300' : ''}`}>{description}</p>
    </div>
  );
};

export default Card;
