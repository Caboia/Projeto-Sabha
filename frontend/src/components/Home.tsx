import React from 'react';
import Card from '../components/Card';

interface HomeProps {
  darkMode: boolean;
}

const Home: React.FC<HomeProps> = ({ darkMode }) => {
  const cardsData = [
    { title: 'Sala 1', description: 'Descrição da Sala 1', icon: '🏢' },
    { title: 'Sala 2', description: 'Descrição da Sala 2', icon: '🏢' },
    { title: 'Sala 3', description: 'Descrição da Sala 3', icon: '🏢' },


    // Adicione mais cartões conforme necessário
  ];

  return (
    <div className={`p-6 ${darkMode ? 'text-white' : 'bg-gray-100 text-gray-900'} h-screen overflow-hidden`}>
      <h1 className="text-3xl font-bold mb-6">Salas Reservadas</h1>
      <div className="overflow-y-auto h-[calc(100vh-100px)]">
        <div className="flex flex-col gap-4">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
