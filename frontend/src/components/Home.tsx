import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

interface HomeProps {
  darkMode: boolean;
}

interface Sala {
  id: number;
  roomName: string;
  additionalInfo: string;
  roomImage: string;
}

const Home: React.FC<HomeProps> = ({ darkMode }) => {
  const [cardsData, setCardsData] = useState<Sala[]>([]);

  useEffect(() => {
    const fetchCardsData = async () => {
      try {
        const response = await fetch('http://localhost:3000/sala');
        if (response.ok) {
          const data = await response.json();
          setCardsData(data);
        } else {
          console.error('Erro ao buscar dados das salas:', response.status);
        }
      } catch (error) {
        console.error('Erro ao buscar dados das salas:', error);
      }
    };

    fetchCardsData();
  }, []);

  return (
    <div className={`p-6 ${darkMode ? 'text-white' : 'bg-gray-100 text-gray-900'} h-screen overflow-hidden`}>
      <h1 className="text-3xl font-bold mb-6">Salas Reservadas</h1>
      <div className="overflow-y-auto h-[calc(100vh-100px)]">
        <div className="flex flex-col gap-4">
          {cardsData.map((sala) => (
            <Card
              key={sala.id}
              title={sala.roomName}
              description={sala.additionalInfo}
              icon={sala.roomImage}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
