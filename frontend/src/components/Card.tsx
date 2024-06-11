import React from 'react';

interface CardProps {
  title: string; // Alterado para o nome da sala
  description: string; // Alterado para informações adicionais
  icon: string; // Alterado para a imagem da sala
  darkMode: boolean; // Adicionando a prop darkMode
}

const Card: React.FC<CardProps> = ({ title, description, icon, darkMode }) => {
  return (
    <div className={`flex items-center gap-4 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${darkMode ? 'bg-[#0a102a] text-white' : 'bg-white text-black'}`}>
      {icon && <img src={icon} alt={title} className="w-12 h-12 rounded-full" />}
      <div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className={`text-gray-600 ${darkMode ? 'text-gray-300' : ''}`}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
