import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

interface HomeProps {
  darkMode: boolean;
}

interface Sala {
  roomLocation: string;
  id: number;
  roomName: string;
  additionalInfo: string;
  roomImage: string;
  dateOfUse: string;
  startTime: string;
  endTime: string;
  responsiblePerson: string;
}

const Home: React.FC<HomeProps> = ({ darkMode }) => {
  const [cardsData, setCardsData] = useState<Sala[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

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

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3000/sala/deletar/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        // Atualiza os dados após a exclusão
        setCardsData(cardsData.filter(sala => sala.id !== id));
        console.log(`Reunião com ID ${id} deletada com sucesso.`);
      } else {
        console.error('Erro ao deletar a reunião:', response.status);
      }
    } catch (error) {
      console.error('Erro ao deletar a reunião:', error);
    }
  };

  // Função para filtrar as reservas com base no termo de pesquisa
  const filteredCardsData = cardsData
    .filter(sala => sala.roomName.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => new Date(a.dateOfUse).getTime() - new Date(b.dateOfUse).getTime());

  return (
    <div className={`p-6 ${darkMode ? 'text-white' : 'bg-gray-100 text-gray-900'} h-screen overflow-hidden`}>
      <h1 className="text-3xl font-bold mb-6">Salas Reservadas</h1>
      {/* Input de pesquisa */}
      <input
        type="text"
        placeholder="Pesquisar por nome da sala..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className={`mb-4 w-full p-2 border rounded-md mt-1 ${darkMode ? 'bg-[#17203f] text-white' : 'bg-white text-gray-900'}`}
      />
      <div className="overflow-y-auto h-[calc(100vh-150px)]">
        <div className="flex flex-col gap-4">
          {filteredCardsData.map((sala) => (
            <Card
              location={sala.roomLocation}
              dateOfUse={sala.dateOfUse}
              startTime={sala.startTime}
              endTime={sala.endTime}
              responsiblePerson={sala.responsiblePerson}
              id={sala.id}
              key={sala.id}
              title={sala.roomName}
              description={sala.additionalInfo}
              icon={sala.roomImage}
              darkMode={darkMode}
              onDelete={() => handleDelete(sala.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
