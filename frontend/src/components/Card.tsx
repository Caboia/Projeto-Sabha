import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  id: number;
  title: string;
  description: string;
  icon: string; // Alterado para string para receber a URL da imagem
  darkMode: boolean;
  location: string;
  dateOfUse: string;
  startTime: string;
  endTime: string;
  responsiblePerson: string;
  onDelete: () => void;
}

const Card: React.FC<CardProps> = ({
  id,
  title,
  description,
  icon,
  darkMode,
  location,
  dateOfUse,
  startTime,
  endTime,
  responsiblePerson,
  onDelete
}) => {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <div className={`flex items-center gap-4 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${darkMode ? 'bg-[#0a102a] text-white' : 'bg-white text-black'}`}>
      {icon ? (
        <img src={icon} alt={title} className="w-36 h-36 " />
      ) : (
        <div className="w-12 h-12 rounded-full bg-gray-300"></div>
      )}
      <div className='flex gap-12'>
        <div>
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className={`text-gray-600 ${darkMode ? 'text-gray-300' : ''}`}>{description}</p>
          <p className={`text-gray-600 ${darkMode ? 'text-gray-300' : ''}`}><strong>Local:</strong> {location}</p>
          <p className={`text-gray-600 ${darkMode ? 'text-gray-300' : ''}`}><strong>Data de uso:</strong> {dateOfUse}</p>
          <p className={`text-gray-600 ${darkMode ? 'text-gray-300' : ''}`}><strong>Hora Início do uso:</strong> {startTime}</p>
          <p className={`text-gray-600 ${darkMode ? 'text-gray-300' : ''}`}><strong>Hora Final do uso:</strong> {endTime}</p>
          <p className={`text-gray-600 ${darkMode ? 'text-gray-300' : ''}`}><strong>Responsável:</strong> {responsiblePerson}</p>
        </div>
        <div className="flex flex-col gap-4 mt-2">
          <button onClick={handleDelete} className="mr-2 bg-red-500 hover:bg-red-600 text-white font-bold py-5 px-4 rounded">
            Deletar
          </button>

          <Link to={`/atualizar-reunião?id=${id}&location=${location}&dateOfUse=${dateOfUse}&startTime=${startTime}&endTime=${endTime}&responsiblePerson=${responsiblePerson}`} className="mr-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-5 px-4 rounded">
            Atualizar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
